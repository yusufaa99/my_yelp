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
export declare type FavoriteCreateFormInputValues = {
    businessID?: string;
    userID?: string;
    createdAt?: string;
};
export declare type FavoriteCreateFormValidationValues = {
    businessID?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FavoriteCreateFormOverridesProps = {
    FavoriteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    businessID?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FavoriteCreateFormProps = React.PropsWithChildren<{
    overrides?: FavoriteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FavoriteCreateFormInputValues) => FavoriteCreateFormInputValues;
    onSuccess?: (fields: FavoriteCreateFormInputValues) => void;
    onError?: (fields: FavoriteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FavoriteCreateFormInputValues) => FavoriteCreateFormInputValues;
    onValidate?: FavoriteCreateFormValidationValues;
} & React.CSSProperties>;
export default function FavoriteCreateForm(props: FavoriteCreateFormProps): React.ReactElement;
