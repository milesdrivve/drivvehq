/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, GridProps, HeadingProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Customers } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CustomersUpdateFormInputValues = {
    id?: string;
    status?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    id_number?: string;
    id_expiry?: string;
    drivers_licence?: string;
    drivers_licence_expiry?: string;
    salary_nett?: string;
    date_reviewed?: string;
    address_1?: string;
    address_2?: string;
    city?: string;
    province?: string;
    postal_code?: string;
    id_file?: string;
    drivers_licence_file?: string;
    poa_fi?: string;
    bank_statement_1_file?: string;
    bank_statement_2_file?: string;
    bank_statement_3_file?: string;
    salary_slip_1_file?: string;
    salary_slip_2_file?: string;
    salary_slip_3_file?: string;
};
export declare type CustomersUpdateFormValidationValues = {
    id?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    id_number?: ValidationFunction<string>;
    id_expiry?: ValidationFunction<string>;
    drivers_licence?: ValidationFunction<string>;
    drivers_licence_expiry?: ValidationFunction<string>;
    salary_nett?: ValidationFunction<string>;
    date_reviewed?: ValidationFunction<string>;
    address_1?: ValidationFunction<string>;
    address_2?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    province?: ValidationFunction<string>;
    postal_code?: ValidationFunction<string>;
    id_file?: ValidationFunction<string>;
    drivers_licence_file?: ValidationFunction<string>;
    poa_fi?: ValidationFunction<string>;
    bank_statement_1_file?: ValidationFunction<string>;
    bank_statement_2_file?: ValidationFunction<string>;
    bank_statement_3_file?: ValidationFunction<string>;
    salary_slip_1_file?: ValidationFunction<string>;
    salary_slip_2_file?: ValidationFunction<string>;
    salary_slip_3_file?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomersUpdateFormOverridesProps = {
    CustomersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    SectionalElement0?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    id_number?: PrimitiveOverrideProps<TextFieldProps>;
    id_expiry?: PrimitiveOverrideProps<TextFieldProps>;
    drivers_licence?: PrimitiveOverrideProps<TextFieldProps>;
    drivers_licence_expiry?: PrimitiveOverrideProps<TextFieldProps>;
    salary_nett?: PrimitiveOverrideProps<TextFieldProps>;
    date_reviewed?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement2?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement3?: PrimitiveOverrideProps<HeadingProps>;
    address_1?: PrimitiveOverrideProps<TextFieldProps>;
    address_2?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    province?: PrimitiveOverrideProps<SelectFieldProps>;
    postal_code?: PrimitiveOverrideProps<TextFieldProps>;
    id_file?: PrimitiveOverrideProps<TextFieldProps>;
    drivers_licence_file?: PrimitiveOverrideProps<TextFieldProps>;
    poa_fi?: PrimitiveOverrideProps<TextFieldProps>;
    bank_statement_1_file?: PrimitiveOverrideProps<TextFieldProps>;
    bank_statement_2_file?: PrimitiveOverrideProps<TextFieldProps>;
    bank_statement_3_file?: PrimitiveOverrideProps<TextFieldProps>;
    salary_slip_1_file?: PrimitiveOverrideProps<TextFieldProps>;
    salary_slip_2_file?: PrimitiveOverrideProps<TextFieldProps>;
    salary_slip_3_file?: PrimitiveOverrideProps<TextFieldProps>;
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
