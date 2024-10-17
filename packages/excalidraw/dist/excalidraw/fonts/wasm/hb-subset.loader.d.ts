declare const load: () => Promise<{
    subset: (fontBuffer: ArrayBuffer, codePoints: ReadonlySet<number>) => Uint8Array;
}>;
declare const _default: () => ReturnType<typeof load>;
export default _default;
