/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Cars } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CarsUpdateFormInputValues = {
    make?: string;
    model?: string;
    variant?: string;
    fuel?: string;
    transmission?: string;
    year?: string;
    price?: string;
    deposit?: string;
};
export declare type CarsUpdateFormValidationValues = {
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
export declare type CarsUpdateFormOverridesProps = {
    CarsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    make?: PrimitiveOverrideProps<TextFieldProps>;
    model?: PrimitiveOverrideProps<TextFieldProps>;
    variant?: PrimitiveOverrideProps<TextFieldProps>;
    fuel?: PrimitiveOverrideProps<TextFieldProps>;
    transmission?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    deposit?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarsUpdateFormProps = React.PropsWithChildren<{
    overrides?: CarsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cars?: Cars;
    onSubmit?: (fields: CarsUpdateFormInputValues) => CarsUpdateFormInputValues;
    onSuccess?: (fields: CarsUpdateFormInputValues) => void;
    onError?: (fields: CarsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarsUpdateFormInputValues) => CarsUpdateFormInputValues;
    onValidate?: CarsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CarsUpdateForm(props: CarsUpdateFormProps): React.ReactElement;
