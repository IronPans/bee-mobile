import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface InputNumberProps extends BaseProps {
    defaultValue?: number;
    disabled?: boolean;
    min?: number;
    max?: number;
    onChange?: (event: any) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    step?: number;
    type?: number;
    value?: number;
}

export interface InputNumberState {
    value: number;
}
