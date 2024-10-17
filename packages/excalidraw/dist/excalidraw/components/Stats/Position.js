import { jsx as _jsx } from "react/jsx-runtime";
import StatsDragInput from "./DragInput";
import { getStepSizedValue, moveElement } from "./utils";
import { pointFrom, pointRotateRads } from "../../../math";
const STEP_SIZE = 10;
const handlePositionChange = ({ accumulatedChange, originalElements, originalElementsMap, shouldChangeByStepSize, nextValue, property, scene, }) => {
    const elementsMap = scene.getNonDeletedElementsMap();
    const elements = scene.getNonDeletedElements();
    const origElement = originalElements[0];
    const [cx, cy] = [
        origElement.x + origElement.width / 2,
        origElement.y + origElement.height / 2,
    ];
    const [topLeftX, topLeftY] = pointRotateRads(pointFrom(origElement.x, origElement.y), pointFrom(cx, cy), origElement.angle);
    if (nextValue !== undefined) {
        const newTopLeftX = property === "x" ? nextValue : topLeftX;
        const newTopLeftY = property === "y" ? nextValue : topLeftY;
        moveElement(newTopLeftX, newTopLeftY, origElement, elementsMap, elements, scene, originalElementsMap);
        return;
    }
    const changeInTopX = property === "x" ? accumulatedChange : 0;
    const changeInTopY = property === "y" ? accumulatedChange : 0;
    const newTopLeftX = property === "x"
        ? Math.round(shouldChangeByStepSize
            ? getStepSizedValue(origElement.x + changeInTopX, STEP_SIZE)
            : topLeftX + changeInTopX)
        : topLeftX;
    const newTopLeftY = property === "y"
        ? Math.round(shouldChangeByStepSize
            ? getStepSizedValue(origElement.y + changeInTopY, STEP_SIZE)
            : topLeftY + changeInTopY)
        : topLeftY;
    moveElement(newTopLeftX, newTopLeftY, origElement, elementsMap, elements, scene, originalElementsMap);
};
const Position = ({ property, element, elementsMap, scene, appState, }) => {
    const [topLeftX, topLeftY] = pointRotateRads(pointFrom(element.x, element.y), pointFrom(element.x + element.width / 2, element.y + element.height / 2), element.angle);
    const value = Math.round((property === "x" ? topLeftX : topLeftY) * 100) / 100;
    return (_jsx(StatsDragInput, { label: property === "x" ? "X" : "Y", elements: [element], dragInputCallback: handlePositionChange, scene: scene, value: value, property: property, appState: appState }));
};
export default Position;
