import { cartesian2Polar } from "./angle";
import { PRECISION } from "./utils";
/**
 * Determines if a cartesian point lies on a symmetric arc, i.e. an arc which
 * is part of a circle contour centered on 0, 0.
 */
export const isPointOnSymmetricArc = ({ radius: arcRadius, startAngle, endAngle }, point) => {
    const [radius, angle] = cartesian2Polar(point);
    return startAngle < endAngle
        ? Math.abs(radius - arcRadius) < PRECISION &&
            startAngle <= angle &&
            endAngle >= angle
        : startAngle <= angle || endAngle >= angle;
};
