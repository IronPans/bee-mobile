import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface InputtextProps extends BaseProps {
    autoFocus?: boolean;
    animated?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    endAdorn?: React.ReactNode;
    id?: string;
    inline?: boolean;
    label?: React.ReactNode | string;
    maxLength?: number;
    placeholder?: string;
    readOnly?: boolean;
    size?: 'lg' | 'sm' | 'xs';
    startAdorn?: React.ReactNode;
    type?: string;
    value?: string;
    onChange?: Function;
    onClick?: Function;
    onFocus?: Function;
    onBlur?: Function;
}

export interface InputtextState {
    value: string;
    focus: boolean;
}