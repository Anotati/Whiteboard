import type { ExcalidrawLinearElement, ExcalidrawTextElement, NonDeletedExcalidrawElement, NonDeleted, ElementsMap, NonDeletedSceneElementsMap, SceneElementsMap } from "./types";
import type { MaybeTransformHandleType, TransformHandleDirection } from "./transformHandles";
import type { PointerDownState } from "../types";
export declare const transformElements: (originalElements: PointerDownState["originalElements"], transformHandleType: MaybeTransformHandleType, selectedElements: readonly NonDeletedExcalidrawElement[], elementsMap: SceneElementsMap, shouldRotateWithDiscreteAngle: boolean, shouldResizeFromCenter: boolean, shouldMaintainAspectRatio: boolean, pointerX: number, pointerY: number, centerX: number, centerY: number) => boolean;
export declare const rescalePointsInElement: (element: NonDeletedExcalidrawElement, width: number, height: number, normalizePoints: boolean) => {
    points: import("../../math").LocalPoint[];
} | {
    points?: undefined;
};
export declare const measureFontSizeFromWidth: (element: NonDeleted<ExcalidrawTextElement>, elementsMap: ElementsMap, nextWidth: number) => {
    size: number;
} | null;
export declare const resizeSingleElement: (originalElements: PointerDownState["originalElements"], shouldMaintainAspectRatio: boolean, element: NonDeletedExcalidrawElement, elementsMap: SceneElementsMap, transformHandleDirection: TransformHandleDirection, shouldResizeFromCenter: boolean, pointerX: number, pointerY: number) => void;
export declare const resizeMultipleElements: (originalElements: PointerDownState["originalElements"], selectedElements: readonly NonDeletedExcalidrawElement[], elementsMap: NonDeletedSceneElementsMap | SceneElementsMap, transformHandleType: TransformHandleDirection, shouldResizeFromCenter: boolean, shouldMaintainAspectRatio: boolean, pointerX: number, pointerY: number) => void;
export declare const getResizeOffsetXY: (transformHandleType: MaybeTransformHandleType, selectedElements: NonDeletedExcalidrawElement[], elementsMap: ElementsMap, x: number, y: number) => [number, number];
export declare const getResizeArrowDirection: (transformHandleType: MaybeTransformHandleType, element: NonDeleted<ExcalidrawLinearElement>) => "origin" | "end";
