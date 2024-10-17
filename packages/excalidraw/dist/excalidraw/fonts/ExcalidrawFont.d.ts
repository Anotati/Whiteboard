export interface Font {
    urls: URL[];
    fontFace: FontFace;
    getContent(codePoints: ReadonlySet<number>): Promise<string>;
}
export declare const UNPKG_FALLBACK_URL: string;
export declare class ExcalidrawFont implements Font {
    readonly urls: URL[];
    readonly fontFace: FontFace;
    constructor(family: string, uri: string, descriptors?: FontFaceDescriptors);
    /**
     * Tries to fetch woff2 content, based on the registered urls (from first to last, treated as fallbacks).
     *
     * NOTE: assumes usage of `dataurl` outside the browser environment
     *
     * @returns base64 with subsetted glyphs based on the passed codepoint, last defined url otherwise
     */
    getContent(codePoints: ReadonlySet<number>): Promise<string>;
    /**
     * Tries to subset glyphs in a font based on the used codepoints, returning the font as daturl.
     *
     * @param arrayBuffer font data buffer, preferrably in the woff2 format, though others should work as well
     * @param codePoints codepoints used to subset the glyphs
     *
     * @returns font with subsetted glyphs (all glyphs in case of errors) converted into a dataurl
     */
    private static subsetGlyphsByCodePoints;
    private static toBase64;
    private static createUrls;
    private static getFormat;
    private static normalizeBaseUrl;
}
