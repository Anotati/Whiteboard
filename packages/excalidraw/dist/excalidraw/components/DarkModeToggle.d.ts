/// <reference types="react" />
import "./ToolIcon.scss";
import type { Theme } from "../element/types";
export declare const DarkModeToggle: (props: {
    value: Theme;
    onChange: (value: Theme) => void;
    title?: string | undefined;
}) => JSX.Element;
