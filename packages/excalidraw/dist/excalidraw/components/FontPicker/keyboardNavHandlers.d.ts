/// <reference types="react" />
import type { Node } from "../../utils";
import { type FontDescriptor } from "./FontPickerList";
interface FontPickerKeyNavHandlerProps {
    event: React.KeyboardEvent<HTMLDivElement>;
    inputRef: React.RefObject<HTMLInputElement>;
    hoveredFont: Node<FontDescriptor> | undefined;
    filteredFonts: Node<FontDescriptor>[];
    onClose: () => void;
    onSelect: (value: number) => void;
    onHover: (value: number) => void;
}
export declare const fontPickerKeyHandler: ({ event, inputRef, hoveredFont, filteredFonts, onClose, onSelect, onHover, }: FontPickerKeyNavHandlerProps) => true | undefined;
export {};
