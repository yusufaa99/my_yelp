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
export declare type FavoriteUpdateFormInputValues = {
    businessID?: string;
    userID?: string;
    createdAt?: string;
};
export declare type FavoriteUpdateFormValidationValues = {
    businessID?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FavoriteUpdateFormOverridesProps = {
    FavoriteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    businessID?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FavoriteUpdateFormProps = React.PropsWithChildren<{
    overrides?: FavoriteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    favorite?: any;
    onSubmit?: (fields: FavoriteUpdateFormInputValues) => FavoriteUpdateFormInputValues;
    onSuccess?: (fields: FavoriteUpdateFormInputValues) => void;
    onError?: (fields: FavoriteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FavoriteUpdateFormInputValues) => FavoriteUpdateFormInputValues;
    onValidate?: FavoriteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FavoriteUpdateForm(props: FavoriteUpdateFormProps): React.ReactElement;
