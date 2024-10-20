import type { ElementsMap, ExcalidrawElement } from "./types";
import type { FrameNameBounds } from "../types";
import type { GeometricShape } from "../../utils/geometry/shape";
import type { GlobalPoint, LocalPoint } from "../../math";
export declare const shouldTestInside: (element: ExcalidrawElement) => boolean;
export type HitTestArgs<Point extends GlobalPoint | LocalPoint> = {
    x: number;
    y: number;
    element: ExcalidrawElement;
    shape: GeometricShape<Point>;
    threshold?: number;
    frameNameBound?: FrameNameBounds | null;
};
export declare const hitElementItself: <Point extends GlobalPoint | LocalPoint>({ x, y, element, shape, threshold, frameNameBound, }: HitTestArgs<Point>) => boolean;
export declare const hitElementBoundingBox: (x: number, y: number, element: ExcalidrawElement, elementsMap: ElementsMap, tolerance?: number) => boolean;
export declare const hitElementBoundingBoxOnly: <Point extends GlobalPoint | LocalPoint>(hitArgs: HitTestArgs<Point>, elementsMap: ElementsMap) => boolean;
export declare const hitElementBoundText: <Point extends GlobalPoint | LocalPoint>(x: number, y: number, textShape: GeometricShape<Point> | null) => boolean;
