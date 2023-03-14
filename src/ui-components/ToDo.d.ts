/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ToDoInputValues = {
    name?: string;
    description?: string;
};
export declare type ToDoValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToDoOverridesProps = {
    ToDoGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ToDoProps = React.PropsWithChildren<{
    overrides?: ToDoOverridesProps | undefined | null;
} & {
    onSubmit: (fields: ToDoInputValues) => void;
    onChange?: (fields: ToDoInputValues) => ToDoInputValues;
    onValidate?: ToDoValidationValues;
} & React.CSSProperties>;
export default function ToDo(props: ToDoProps): React.ReactElement;
