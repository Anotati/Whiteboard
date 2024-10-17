import type Scene from "../scene/Scene";
import type { ExcalidrawElement, ExcalidrawTextElement, FontFamilyValues } from "../element/types";
import { type FontMetadata } from "./metadata";
import { type Font } from "./ExcalidrawFont";
export declare class Fonts {
    static readonly loadedFontsCache: Set<string>;
    private static _registered;
    private static _initialized;
    static get registered(): Map<number, {
        metadata: FontMetadata;
        fonts: Font[];
    }>;
    get registered(): Map<number, {
        metadata: FontMetadata;
        fonts: Font[];
    }>;
    private readonly scene;
    constructor({ scene }: {
        scene: Scene;
    });
    /**
     * if we load a (new) font, it's likely that text elements using it have
     * already been rendered using a fallback font. Thus, we want invalidate
     * their shapes and rerender. See #637.
     *
     * Invalidates text elements and rerenders scene, provided that at least one
     * of the supplied fontFaces has not already been processed.
     */
    onLoaded: (fontFaces: readonly FontFace[]) => false | undefined;
    /**
     * Load font faces for a given scene and trigger scene update.
     */
    loadSceneFonts: () => Promise<FontFace[]>;
    /**
     * Gets all the font families for the given scene.
     */
    getSceneFontFamilies: () => number[];
    /**
     * Load font faces for passed elements - use when the scene is unavailable (i.e. export).
     */
    static loadFontsForElements: (elements: readonly ExcalidrawElement[]) => Promise<FontFace[]>;
    private static loadFontFaces;
    /**
     * WARN: should be called just once on init, even across multiple instances.
     */
    private static init;
    private static getFontFamilies;
}
/**
 * Calculates vertical offset for a text with alphabetic baseline.
 */
export declare const getVerticalOffset: (fontFamily: ExcalidrawTextElement["fontFamily"], fontSize: ExcalidrawTextElement["fontSize"], lineHeightPx: number) => number;
/**
 * Gets line height forr a selected family.
 */
export declare const getLineHeight: (fontFamily: FontFamilyValues) => number & {
    _brand: "unitlessLineHeight";
};
