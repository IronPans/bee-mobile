import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface SearchBarProps extends BaseProps {
    autoFocus?: boolean;
    cancelText?: React.ReactNode;
    defaultValue?: string;
    disabled?: boolean;
    maxLength?: number;
    placeholder?: string;
    value?: string;
    onCancel?: Function;
    onChange?: Function;
    onSubmit?: Function;
    onFocus?: Function;
    onBlur?: Function;
}

export interface SearchBarState {
    focus?: boolean;
    value?: string;
}