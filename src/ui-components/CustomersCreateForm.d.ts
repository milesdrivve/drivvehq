/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CustomersCreateFormInputValues = {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    id_number?: string;
    drivers_licence?: string;
    salary?: string;
    status?: string;
};
export declare type CustomersCreateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    id_number?: ValidationFunction<string>;
    drivers_licence?: ValidationFunction<string>;
    salary?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomersCreateFormOverridesProps = {
    CustomersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    id_number?: PrimitiveOverrideProps<TextFieldProps>;
    drivers_licence?: PrimitiveOverrideProps<TextFieldProps>;
    salary?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CustomersCreateFormProps = React.PropsWithChildren<{
    overrides?: CustomersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CustomersCreateFormInputValues) => CustomersCreateFormInputValues;
    onSuccess?: (fields: CustomersCreateFormInputValues) => void;
    onError?: (fields: CustomersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomersCreateFormInputValues) => CustomersCreateFormInputValues;
    onValidate?: CustomersCreateFormValidationValues;
} & React.CSSProperties>;
export default function CustomersCreateForm(props: CustomersCreateFormProps): React.ReactElement;
