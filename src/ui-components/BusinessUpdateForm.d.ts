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
export declare type BusinessUpdateFormInputValues = {
    name?: string;
    category?: string;
    address?: string;
    location?: string;
    phoneNumber?: string;
    website?: string;
    rating?: number;
    region?: string;
};
export declare type BusinessUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    region?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessUpdateFormOverridesProps = {
    BusinessUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessUpdateFormProps = React.PropsWithChildren<{
    overrides?: BusinessUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    business?: any;
    onSubmit?: (fields: BusinessUpdateFormInputValues) => BusinessUpdateFormInputValues;
    onSuccess?: (fields: BusinessUpdateFormInputValues) => void;
    onError?: (fields: BusinessUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessUpdateFormInputValues) => BusinessUpdateFormInputValues;
    onValidate?: BusinessUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessUpdateForm(props: BusinessUpdateFormProps): React.ReactElement;
