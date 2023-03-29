/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReservationsCreateFormInputValues = {
    reservation_id?: string;
    Field0?: string;
    pickup_date?: string;
    return_date?: string;
    pickup_location?: string;
    car?: string;
    price?: number;
    deposit?: number;
    make?: string;
    model?: string;
    variant?: string;
    status?: string;
    customer_id?: string;
    start_date?: string;
    duration?: number;
    end_date?: string;
    class?: string;
    test_1?: string;
    test_2?: string[];
};
export declare type ReservationsCreateFormValidationValues = {
    reservation_id?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    pickup_date?: ValidationFunction<string>;
    return_date?: ValidationFunction<string>;
    pickup_location?: ValidationFunction<string>;
    car?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    deposit?: ValidationFunction<number>;
    make?: ValidationFunction<string>;
    model?: ValidationFunction<string>;
    variant?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    customer_id?: ValidationFunction<string>;
    start_date?: ValidationFunction<string>;
    duration?: ValidationFunction<number>;
    end_date?: ValidationFunction<string>;
    class?: ValidationFunction<string>;
    test_1?: ValidationFunction<string>;
    test_2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReservationsCreateFormOverridesProps = {
    ReservationsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    reservation_id?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    pickup_date?: PrimitiveOverrideProps<TextFieldProps>;
    return_date?: PrimitiveOverrideProps<TextFieldProps>;
    pickup_location?: PrimitiveOverrideProps<SelectFieldProps>;
    car?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    deposit?: PrimitiveOverrideProps<TextFieldProps>;
    make?: PrimitiveOverrideProps<TextFieldProps>;
    model?: PrimitiveOverrideProps<TextFieldProps>;
    variant?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    customer_id?: PrimitiveOverrideProps<TextFieldProps>;
    start_date?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    end_date?: PrimitiveOverrideProps<TextFieldProps>;
    class?: PrimitiveOverrideProps<TextFieldProps>;
    test_1?: PrimitiveOverrideProps<TextAreaFieldProps>;
    test_2?: PrimitiveOverrideProps<TextFieldProps>;
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
