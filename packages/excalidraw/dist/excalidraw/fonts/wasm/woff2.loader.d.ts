declare const load: () => Promise<{
    compress: (buffer: ArrayBuffer) => Uint8Array;
    decompress: (buffer: ArrayBuffer) => Uint8Array;
}>;
declare const _default: () => ReturnType<typeof load>;
export default _default;
