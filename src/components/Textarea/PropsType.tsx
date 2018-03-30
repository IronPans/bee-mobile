import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface TextareaProps extends BaseProps {
    animated?: boolean;
    autoFocus?: boolean;
    cols?: number;
    defaultValue?: string;
    disabled?: boolean;
    id?: string;
    inline?: boolean;
    label?: React.ReactNode | string;
    maxLength?: number;
    maxHeight?: number | string;
    placeholder?: string;
    readOnly?: boolean;
    rows?: number;
    size?: string;
    value?: string;
    onChange?: Function;
    onFocus?: Function;
    onBlur?: Function;
}

export interface TextareaState {
    length?: number;
    value: string;
    focus: boolean;
}