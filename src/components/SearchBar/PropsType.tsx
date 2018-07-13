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
    onCancel?: () => void;
    onChange?: (event: any) => void;
    onSubmit?: (event: any) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

export interface SearchBarState {
    focus?: boolean;
    value?: string;
}
