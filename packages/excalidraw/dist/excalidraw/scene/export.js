import rough from "roughjs/bin/rough";
import { getCommonBounds, getElementAbsoluteCoords } from "../element/bounds";
import { renderSceneToSvg } from "../renderer/staticSvgScene";
import { arrayToMap, distance, getFontString, toBrandedType } from "../utils";
import { DEFAULT_EXPORT_PADDING, FRAME_STYLE, FONT_FAMILY, SVG_NS, THEME, THEME_FILTER, } from "../constants";
import { getDefaultAppState } from "../appState";
import { serializeAsJSON } from "../data/json";
import { getInitializedImageElements, updateImageCache, } from "../element/image";
import { getElementsOverlappingFrame, getFrameLikeElements, getFrameLikeTitle, getRootElements, } from "../frame";
import { newTextElement } from "../element";
import { newElementWith } from "../element/mutateElement";
import { isFrameLikeElement, isTextElement } from "../element/typeChecks";
import { syncInvalidIndices } from "../fractionalIndex";
import { renderStaticScene } from "../renderer/staticScene";
import { Fonts } from "../fonts";
const SVG_EXPORT_TAG = `<!-- svg-source:excalidraw -->`;
const truncateText = (element, maxWidth) => {
    if (element.width <= maxWidth) {
        return element;
    }
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = getFontString({
        fontFamily: element.fontFamily,
        fontSize: element.fontSize,
    });
    let text = element.text;
    const metrics = ctx.measureText(text);
    if (metrics.width > maxWidth) {
        // we iterate from the right, removing characters one by one instead
        // of bulding the string up. This assumes that it's more likely
        // your frame names will overflow by not that many characters
        // (if ever), so it sohuld be faster this way.
        for (let i = text.length; i > 0; i--) {
            const newText = `${text.slice(0, i)}...`;
            if (ctx.measureText(newText).width <= maxWidth) {
                text = newText;
                break;
            }
        }
    }
    return newElementWith(element, { text, width: maxWidth });
};
/**
 * When exporting frames, we need to render frame labels which are currently
 * being rendered in DOM when editing. Adding the labels as regular text
 * elements seems like a simple hack. In the future we'll want to move to
 * proper canvas rendering, even within editor (instead of DOM).
 */
const addFrameLabelsAsTextElements = (elements, opts) => {
    const nextElements = [];
    for (const element of elements) {
        if (isFrameLikeElement(element)) {
            let textElement = newTextElement({
                x: element.x,
                y: element.y - FRAME_STYLE.nameOffsetY,
                fontFamily: FONT_FAMILY.Helvetica,
                fontSize: FRAME_STYLE.nameFontSize,
                lineHeight: FRAME_STYLE.nameLineHeight,
                strokeColor: opts.exportWithDarkMode
                    ? FRAME_STYLE.nameColorDarkTheme
                    : FRAME_STYLE.nameColorLightTheme,
                text: getFrameLikeTitle(element),
            });
            textElement.y -= textElement.height;
            textElement = truncateText(textElement, element.width);
            nextElements.push(textElement);
        }
        nextElements.push(element);
    }
    return nextElements;
};
const getFrameRenderingConfig = (exportingFrame, frameRendering) => {
    frameRendering = frameRendering || getDefaultAppState().frameRendering;
    return {
        enabled: exportingFrame ? true : frameRendering.enabled,
        outline: exportingFrame ? false : frameRendering.outline,
        name: exportingFrame ? false : frameRendering.name,
        clip: exportingFrame ? true : frameRendering.clip,
    };
};
const prepareElementsForRender = ({ elements, exportingFrame, frameRendering, exportWithDarkMode, }) => {
    let nextElements;
    if (exportingFrame) {
        nextElements = getElementsOverlappingFrame(elements, exportingFrame);
    }
    else if (frameRendering.enabled && frameRendering.name) {
        nextElements = addFrameLabelsAsTextElements(elements, {
            exportWithDarkMode,
        });
    }
    else {
        nextElements = elements;
    }
    return nextElements;
};
export const exportToCanvas = async (elements, appState, files, { exportBackground, exportPadding = DEFAULT_EXPORT_PADDING, viewBackgroundColor, exportingFrame, }, createCanvas = (width, height) => {
    const canvas = document.createElement("canvas");
    canvas.width = width * appState.exportScale;
    canvas.height = height * appState.exportScale;
    return { canvas, scale: appState.exportScale };
}, loadFonts = async () => {
    await Fonts.loadFontsForElements(elements);
}) => {
    // load font faces before continuing, by default leverages browsers' [FontFace API](https://developer.mozilla.org/en-US/docs/Web/API/FontFace)
    await loadFonts();
    const frameRendering = getFrameRenderingConfig(exportingFrame ?? null, appState.frameRendering ?? null);
    // for canvas export, don't clip if exporting a specific frame as it would
    // clip the corners of the content
    if (exportingFrame) {
        frameRendering.clip = false;
    }
    const elementsForRender = prepareElementsForRender({
        elements,
        exportingFrame,
        exportWithDarkMode: appState.exportWithDarkMode,
        frameRendering,
    });
    if (exportingFrame) {
        exportPadding = 0;
    }
    const [minX, minY, width, height] = getCanvasSize(exportingFrame ? [exportingFrame] : getRootElements(elementsForRender), exportPadding);
    const { canvas, scale = 1 } = createCanvas(width, height);
    const defaultAppState = getDefaultAppState();
    const { imageCache } = await updateImageCache({
        imageCache: new Map(),
        fileIds: getInitializedImageElements(elementsForRender).map((element) => element.fileId),
        files,
    });
    renderStaticScene({
        canvas,
        rc: rough.canvas(canvas),
        elementsMap: toBrandedType(arrayToMap(elementsForRender)),
        allElementsMap: toBrandedType(arrayToMap(syncInvalidIndices(elements))),
        visibleElements: elementsForRender,
        scale,
        appState: {
            ...appState,
            frameRendering,
            viewBackgroundColor: exportBackground ? viewBackgroundColor : null,
            scrollX: -minX + exportPadding,
            scrollY: -minY + exportPadding,
            zoom: defaultAppState.zoom,
            shouldCacheIgnoreZoom: false,
            theme: appState.exportWithDarkMode ? THEME.DARK : THEME.LIGHT,
        },
        renderConfig: {
            canvasBackgroundColor: viewBackgroundColor,
            imageCache,
            renderGrid: false,
            isExporting: true,
            // empty disables embeddable rendering
            embedsValidationStatus: new Map(),
            elementsPendingErasure: new Set(),
            pendingFlowchartNodes: null,
        },
    });
    return canvas;
};
export const exportToSvg = async (elements, appState, files, opts) => {
    const frameRendering = getFrameRenderingConfig(opts?.exportingFrame ?? null, appState.frameRendering ?? null);
    let { exportPadding = DEFAULT_EXPORT_PADDING, exportWithDarkMode = false, viewBackgroundColor, exportScale = 1, exportEmbedScene, } = appState;
    const { exportingFrame = null } = opts || {};
    const elementsForRender = prepareElementsForRender({
        elements,
        exportingFrame,
        exportWithDarkMode,
        frameRendering,
    });
    if (exportingFrame) {
        exportPadding = 0;
    }
    let metadata = "";
    // we need to serialize the "original" elements before we put them through
    // the tempScene hack which duplicates and regenerates ids
    if (exportEmbedScene) {
        try {
            metadata = await (await import("../data/image")).encodeSvgMetadata({
                // when embedding scene, we want to embed the origionally supplied
                // elements which don't contain the temp frame labels.
                // But it also requires that the exportToSvg is being supplied with
                // only the elements that we're exporting, and no extra.
                text: serializeAsJSON(elements, appState, files || {}, "local"),
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    const [minX, minY, width, height] = getCanvasSize(exportingFrame ? [exportingFrame] : getRootElements(elementsForRender), exportPadding);
    // initialize SVG root
    const svgRoot = document.createElementNS(SVG_NS, "svg");
    svgRoot.setAttribute("version", "1.1");
    svgRoot.setAttribute("xmlns", SVG_NS);
    svgRoot.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svgRoot.setAttribute("width", `${width * exportScale}`);
    svgRoot.setAttribute("height", `${height * exportScale}`);
    if (exportWithDarkMode) {
        svgRoot.setAttribute("filter", THEME_FILTER);
    }
    const offsetX = -minX + exportPadding;
    const offsetY = -minY + exportPadding;
    const frameElements = getFrameLikeElements(elements);
    let exportingFrameClipPath = "";
    const elementsMap = arrayToMap(elements);
    for (const frame of frameElements) {
        const [x1, y1, x2, y2] = getElementAbsoluteCoords(frame, elementsMap);
        const cx = (x2 - x1) / 2 - (frame.x - x1);
        const cy = (y2 - y1) / 2 - (frame.y - y1);
        exportingFrameClipPath += `<clipPath id=${frame.id}>
            <rect transform="translate(${frame.x + offsetX} ${frame.y + offsetY}) rotate(${frame.angle} ${cx} ${cy})"
          width="${frame.width}"
          height="${frame.height}"
          ${exportingFrame
            ? ""
            : `rx=${FRAME_STYLE.radius} ry=${FRAME_STYLE.radius}`}
          >
          </rect>
        </clipPath>`;
    }
    const fontFaces = opts?.skipInliningFonts ? [] : await getFontFaces(elements);
    svgRoot.innerHTML = `
  ${SVG_EXPORT_TAG}
  ${metadata}
  <defs>
    <style class="style-fonts">
      ${fontFaces.join("\n")}
    </style>
    ${exportingFrameClipPath}
  </defs>
  `;
    // render background rect
    if (appState.exportBackground && viewBackgroundColor) {
        const rect = svgRoot.ownerDocument.createElementNS(SVG_NS, "rect");
        rect.setAttribute("x", "0");
        rect.setAttribute("y", "0");
        rect.setAttribute("width", `${width}`);
        rect.setAttribute("height", `${height}`);
        rect.setAttribute("fill", viewBackgroundColor);
        svgRoot.appendChild(rect);
    }
    const rsvg = rough.svg(svgRoot);
    const renderEmbeddables = opts?.renderEmbeddables ?? false;
    renderSceneToSvg(elementsForRender, toBrandedType(arrayToMap(elementsForRender)), rsvg, svgRoot, files || {}, {
        offsetX,
        offsetY,
        isExporting: true,
        exportWithDarkMode,
        renderEmbeddables,
        frameRendering,
        canvasBackgroundColor: viewBackgroundColor,
        embedsValidationStatus: renderEmbeddables
            ? new Map(elementsForRender
                .filter((element) => isFrameLikeElement(element))
                .map((element) => [element.id, true]))
            : new Map(),
    });
    return svgRoot;
};
// calculate smallest area to fit the contents in
const getCanvasSize = (elements, exportPadding) => {
    const [minX, minY, maxX, maxY] = getCommonBounds(elements);
    const width = distance(minX, maxX) + exportPadding * 2;
    const height = distance(minY, maxY) + exportPadding * 2;
    return [minX, minY, width, height];
};
export const getExportSize = (elements, exportPadding, scale) => {
    const [, , width, height] = getCanvasSize(elements, exportPadding).map((dimension) => Math.trunc(dimension * scale));
    return [width, height];
};
const getFontFaces = async (elements) => {
    const fontFamilies = new Set();
    const codePoints = new Set();
    for (const element of elements) {
        if (!isTextElement(element)) {
            continue;
        }
        fontFamilies.add(element.fontFamily);
        // gather unique codepoints only when inlining fonts
        for (const codePoint of Array.from(element.originalText, (u) => u.codePointAt(0))) {
            if (codePoint) {
                codePoints.add(codePoint);
            }
        }
    }
    const getSource = (font) => {
        try {
            // retrieve font source as dataurl based on the used codepoints
            return font.getContent(codePoints);
        }
        catch {
            // fallback to font source as a url
            return font.urls[0].toString();
        }
    };
    const fontFaces = await Promise.all(Array.from(fontFamilies).map(async (x) => {
        const { fonts, metadata } = Fonts.registered.get(x) ?? {};
        if (!Array.isArray(fonts)) {
            console.error(`Couldn't find registered fonts for font-family "${x}"`, Fonts.registered);
            return [];
        }
        if (metadata?.local) {
            // don't inline local fonts
            return [];
        }
        return Promise.all(fonts.map(async (font) => `@font-face {
        font-family: ${font.fontFace.family};
        src: url(${await getSource(font)});
          }`));
    }));
    return fontFaces.flat();
};
