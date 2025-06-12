/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReservationUpdateFormInputValues = {
    businessID?: string;
    userID?: string;
    dateTime?: string;
    status?: string;
    createdAt?: string;
};
export declare type ReservationUpdateFormValidationValues = {
    businessID?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
    dateTime?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReservationUpdateFormOverridesProps = {
    ReservationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    businessID?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    dateTime?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReservationUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReservationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reservation?: any;
    onSubmit?: (fields: ReservationUpdateFormInputValues) => ReservationUpdateFormInputValues;
    onSuccess?: (fields: ReservationUpdateFormInputValues) => void;
    onError?: (fields: ReservationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReservationUpdateFormInputValues) => ReservationUpdateFormInputValues;
    onValidate?: ReservationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReservationUpdateForm(props: ReservationUpdateFormProps): React.ReactElement;
