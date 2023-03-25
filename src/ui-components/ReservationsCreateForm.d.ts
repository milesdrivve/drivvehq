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
export declare type ReservationsCreateFormInputValues = {
    pickup_date?: string;
    return_date?: string;
    pickup_location?: string;
    status?: string;
    car?: string;
    price?: number;
    deposit?: number;
};
export declare type ReservationsCreateFormValidationValues = {
    pickup_date?: ValidationFunction<string>;
    return_date?: ValidationFunction<string>;
    pickup_location?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    car?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    deposit?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReservationsCreateFormOverridesProps = {
    ReservationsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    pickup_date?: PrimitiveOverrideProps<TextFieldProps>;
    return_date?: PrimitiveOverrideProps<TextFieldProps>;
    pickup_location?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    car?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    deposit?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReservationsCreateFormProps = React.PropsWithChildren<{
    overrides?: ReservationsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReservationsCreateFormInputValues) => ReservationsCreateFormInputValues;
    onSuccess?: (fields: ReservationsCreateFormInputValues) => void;
    onError?: (fields: ReservationsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReservationsCreateFormInputValues) => ReservationsCreateFormInputValues;
    onValidate?: ReservationsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReservationsCreateForm(props: ReservationsCreateFormProps): React.ReactElement;
