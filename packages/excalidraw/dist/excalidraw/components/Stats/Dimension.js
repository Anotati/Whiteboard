import { jsx as _jsx } from "react/jsx-runtime";
import DragInput from "./DragInput";
import { getStepSizedValue, isPropertyEditable, resizeElement } from "./utils";
import { MIN_WIDTH_OR_HEIGHT } from "../../constants";
const STEP_SIZE = 10;
const _shouldKeepAspectRatio = (element) => {
    return element.type === "image";
};
const handleDimensionChange = ({ accumulatedChange, originalElements, shouldKeepAspectRatio, shouldChangeByStepSize, nextValue, property, scene, }) => {
    const elementsMap = scene.getNonDeletedElementsMap();
    const elements = scene.getNonDeletedElements();
    const origElement = originalElements[0];
    if (origElement) {
        const keepAspectRatio = shouldKeepAspectRatio || _shouldKeepAspectRatio(origElement);
        const aspectRatio = origElement.width / origElement.height;
        if (nextValue !== undefined) {
            const nextWidth = Math.max(property === "width"
                ? nextValue
                : keepAspectRatio
                    ? nextValue * aspectRatio
                    : origElement.width, MIN_WIDTH_OR_HEIGHT);
            const nextHeight = Math.max(property === "height"
                ? nextValue
                : keepAspectRatio
                    ? nextValue / aspectRatio
                    : origElement.height, MIN_WIDTH_OR_HEIGHT);
            resizeElement(nextWidth, nextHeight, keepAspectRatio, origElement, elementsMap, elements, scene);
            return;
        }
        const changeInWidth = property === "width" ? accumulatedChange : 0;
        const changeInHeight = property === "height" ? accumulatedChange : 0;
        let nextWidth = Math.max(0, origElement.width + changeInWidth);
        if (property === "width") {
            if (shouldChangeByStepSize) {
                nextWidth = getStepSizedValue(nextWidth, STEP_SIZE);
            }
            else {
                nextWidth = Math.round(nextWidth);
            }
        }
        let nextHeight = Math.max(0, origElement.height + changeInHeight);
        if (property === "height") {
            if (shouldChangeByStepSize) {
                nextHeight = getStepSizedValue(nextHeight, STEP_SIZE);
            }
            else {
                nextHeight = Math.round(nextHeight);
            }
        }
        if (keepAspectRatio) {
            if (property === "width") {
                nextHeight = Math.round((nextWidth / aspectRatio) * 100) / 100;
            }
            else {
                nextWidth = Math.round(nextHeight * aspectRatio * 100) / 100;
            }
        }
        nextHeight = Math.max(MIN_WIDTH_OR_HEIGHT, nextHeight);
        nextWidth = Math.max(MIN_WIDTH_OR_HEIGHT, nextWidth);
        resizeElement(nextWidth, nextHeight, keepAspectRatio, origElement, elementsMap, elements, scene);
    }
};
const DimensionDragInput = ({ property, element, scene, appState, }) => {
    const value = Math.round((property === "width" ? element.width : element.height) * 100) /
        100;
    return (_jsx(DragInput, { label: property === "width" ? "W" : "H", elements: [element], dragInputCallback: handleDimensionChange, value: value, editable: isPropertyEditable(element, property), scene: scene, appState: appState, property: property }));
};
export default DimensionDragInput;
