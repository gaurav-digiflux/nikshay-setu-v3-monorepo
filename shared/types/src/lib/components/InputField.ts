import { ReactNode } from "react";
import { KeyboardTypeOptions, ViewStyle } from "react-native";

export interface InputFieldProps {
    children: ReactNode;
}
export interface LabelProps {
    touched: boolean;
    edit?: Boolean;
    label: string;
}
export interface ErrorProps {
    error: string;
}
export interface InputProps extends LabelProps, ErrorProps {
    placeholder?: string;
    value?: string;
    keyboardType?: KeyboardTypeOptions;
    onChange?: (text: string) => void;
    onBlur?: () => void;
    containerStyle?: ViewStyle
}
export interface DropDownProps extends LabelProps, ErrorProps {
    placeholder?: string;
    value?: string;
    onChange?: (text: string) => void;
    onBlur?: () => void;
    options: Array<string>;
    containerStyle?: ViewStyle
}
export interface InputContainerProps extends LabelProps, ErrorProps {
    children?: ReactNode
    containerStyle?: ViewStyle
}