/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Customers } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CustomersUpdateFormInputValues = {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    id_number?: string;
    drivers_licence?: string;
    salary?: string;
    status?: string;
};
export declare type CustomersUpdateFormValidationValues = {
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
export declare type CustomersUpdateFormOverridesProps = {
    CustomersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    id_number?: PrimitiveOverrideProps<TextFieldProps>;
    drivers_licence?: PrimitiveOverrideProps<TextFieldProps>;
    salary?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CustomersUpdateFormProps = React.PropsWithChildren<{
    overrides?: CustomersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    customers?: Customers;
    onSubmit?: (fields: CustomersUpdateFormInputValues) => CustomersUpdateFormInputValues;
    onSuccess?: (fields: CustomersUpdateFormInputValues) => void;
    onError?: (fields: CustomersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomersUpdateFormInputValues) => CustomersUpdateFormInputValues;
    onValidate?: CustomersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CustomersUpdateForm(props: CustomersUpdateFormProps): React.ReactElement;
