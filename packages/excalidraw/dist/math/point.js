import { degreesToRadians } from "./angle";
import { PRECISION } from "./utils";
import { vectorFromPoint, vectorScale } from "./vector";
/**
 * Create a properly typed Point instance from the X and Y coordinates.
 *
 * @param x The X coordinate
 * @param y The Y coordinate
 * @returns The branded and created point
 */
export function pointFrom(x, y) {
    return [x, y];
}
/**
 * Converts and remaps an array containing a pair of numbers to Point.
 *
 * @param numberArray The number array to check and to convert to Point
 * @returns The point instance
 */
export function pointFromArray(numberArray) {
    return numberArray.length === 2
        ? pointFrom(numberArray[0], numberArray[1])
        : undefined;
}
/**
 * Converts and remaps a pair of numbers to Point.
 *
 * @param pair A number pair to convert to Point
 * @returns The point instance
 */
export function pointFromPair(pair) {
    return pair;
}
/**
 * Convert a vector to a point.
 *
 * @param v The vector to convert
 * @returns The point the vector points at with origin 0,0
 */
export function pointFromVector(v) {
    return v;
}
/**
 * Checks if the provided value has the shape of a Point.
 *
 * @param p The value to attempt verification on
 * @returns TRUE if the provided value has the shape of a local or global point
 */
export function isPoint(p) {
    return (Array.isArray(p) &&
        p.length === 2 &&
        typeof p[0] === "number" &&
        !isNaN(p[0]) &&
        typeof p[1] === "number" &&
        !isNaN(p[1]));
}
/**
 * Compare two points coordinate-by-coordinate and if
 * they are closer than INVERSE_PRECISION it returns TRUE.
 *
 * @param a Point The first point to compare
 * @param b Point The second point to compare
 * @returns TRUE if the points are sufficiently close to each other
 */
export function pointsEqual(a, b) {
    const abs = Math.abs;
    return abs(a[0] - b[0]) < PRECISION && abs(a[1] - b[1]) < PRECISION;
}
/**
 * Roate a point by [angle] radians.
 *
 * @param point The point to rotate
 * @param center The point to rotate around, the center point
 * @param angle The radians to rotate the point by
 * @returns The rotated point
 */
export function pointRotateRads([x, y], [cx, cy], angle) {
    return pointFrom((x - cx) * Math.cos(angle) - (y - cy) * Math.sin(angle) + cx, (x - cx) * Math.sin(angle) + (y - cy) * Math.cos(angle) + cy);
}
/**
 * Roate a point by [angle] degree.
 *
 * @param point The point to rotate
 * @param center The point to rotate around, the center point
 * @param angle The degree to rotate the point by
 * @returns The rotated point
 */
export function pointRotateDegs(point, center, angle) {
    return pointRotateRads(point, center, degreesToRadians(angle));
}
/**
 * Translate a point by a vector.
 *
 * WARNING: This is not for translating Excalidraw element points!
 *          You need to account for rotation on base coordinates
 *          on your own.
 *          CONSIDER USING AN APPROPRIATE ELEMENT-AWARE TRANSLATE!
 *
 * @param p The point to apply the translation on
 * @param v The vector to translate by
 * @returns
 */
// TODO 99% of use is translating between global and local coords, which need to be formalized
export function pointTranslate(p, v = [0, 0]) {
    return pointFrom(p[0] + v[0], p[1] + v[1]);
}
/**
 * Find the center point at equal distance from both points.
 *
 * @param a One of the points to create the middle point for
 * @param b The other point to create the middle point for
 * @returns The middle point
 */
export function pointCenter(a, b) {
    return pointFrom((a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
}
/**
 * Add together two points by their coordinates like you'd apply a translation
 * to a point by a vector.
 *
 * @param a One point to act as a basis
 * @param b The other point to act like the vector to translate by
 * @returns
 */
export function pointAdd(a, b) {
    return pointFrom(a[0] + b[0], a[1] + b[1]);
}
/**
 * Subtract a point from another point like you'd translate a point by an
 * invese vector.
 *
 * @param a The point to translate
 * @param b The point which will act like a vector
 * @returns The resulting point
 */
export function pointSubtract(a, b) {
    return pointFrom(a[0] - b[0], a[1] - b[1]);
}
/**
 * Calculate the distance between two points.
 *
 * @param a First point
 * @param b Second point
 * @returns The euclidean distance between the two points.
 */
export function pointDistance(a, b) {
    return Math.hypot(b[0] - a[0], b[1] - a[1]);
}
/**
 * Calculate the squared distance between two points.
 *
 * Note: Use this if you only compare distances, it saves a square root.
 *
 * @param a First point
 * @param b Second point
 * @returns The euclidean distance between the two points.
 */
export function pointDistanceSq(a, b) {
    return Math.hypot(b[0] - a[0], b[1] - a[1]);
}
/**
 * Scale a point from a given origin by the multiplier.
 *
 * @param p The point to scale
 * @param mid The origin to scale from
 * @param multiplier The scaling factor
 * @returns
 */
export const pointScaleFromOrigin = (p, mid, multiplier) => pointTranslate(mid, vectorScale(vectorFromPoint(p, mid), multiplier));
/**
 * Returns whether `q` lies inside the segment/rectangle defined by `p` and `r`.
 * This is an approximation to "does `q` lie on a segment `pr`" check.
 *
 * @param p The first point to compare against
 * @param q The actual point this function checks whether is in between
 * @param r The other point to compare against
 * @returns TRUE if q is indeed between p and r
 */
export const isPointWithinBounds = (p, q, r) => {
    return (q[0] <= Math.max(p[0], r[0]) &&
        q[0] >= Math.min(p[0], r[0]) &&
        q[1] <= Math.max(p[1], r[1]) &&
        q[1] >= Math.min(p[1], r[1]));
};
