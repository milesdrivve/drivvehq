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
export declare type CarsCreateFormInputValues = {
    make?: string;
    model?: string;
    variant?: string;
    fuel?: string;
    transmission?: string;
    year?: string;
    price?: string;
    deposit?: string;
};
export declare type CarsCreateFormValidationValues = {
    make?: ValidationFunction<string>;
    model?: ValidationFunction<string>;
    variant?: ValidationFunction<string>;
    fuel?: ValidationFunction<string>;
    transmission?: ValidationFunction<string>;
    year?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    deposit?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarsCreateFormOverridesProps = {
    CarsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    make?: PrimitiveOverrideProps<TextFieldProps>;
    model?: PrimitiveOverrideProps<TextFieldProps>;
    variant?: PrimitiveOverrideProps<TextFieldProps>;
    fuel?: PrimitiveOverrideProps<TextFieldProps>;
    transmission?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    deposit?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarsCreateFormProps = React.PropsWithChildren<{
    overrides?: CarsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CarsCreateFormInputValues) => CarsCreateFormInputValues;
    onSuccess?: (fields: CarsCreateFormInputValues) => void;
    onError?: (fields: CarsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarsCreateFormInputValues) => CarsCreateFormInputValues;
    onValidate?: CarsCreateFormValidationValues;
} & React.CSSProperties>;
export default function CarsCreateForm(props: CarsCreateFormProps): React.ReactElement;
