/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Reservations } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReservationsUpdateFormInputValues = {
    pickup_date?: string;
    return_date?: string;
    pickup_location?: string;
    status?: string;
    car?: string;
    price?: number;
    deposit?: number;
};
export declare type ReservationsUpdateFormValidationValues = {
    pickup_date?: ValidationFunction<string>;
    return_date?: ValidationFunction<string>;
    pickup_location?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    car?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    deposit?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReservationsUpdateFormOverridesProps = {
    ReservationsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    pickup_date?: PrimitiveOverrideProps<TextFieldProps>;
    return_date?: PrimitiveOverrideProps<TextFieldProps>;
    pickup_location?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    car?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    deposit?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReservationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReservationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reservations?: Reservations;
    onSubmit?: (fields: ReservationsUpdateFormInputValues) => ReservationsUpdateFormInputValues;
    onSuccess?: (fields: ReservationsUpdateFormInputValues) => void;
    onError?: (fields: ReservationsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReservationsUpdateFormInputValues) => ReservationsUpdateFormInputValues;
    onValidate?: ReservationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReservationsUpdateForm(props: ReservationsUpdateFormProps): React.ReactElement;
