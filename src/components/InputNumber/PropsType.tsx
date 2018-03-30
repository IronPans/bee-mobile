import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface InputNumberProps extends BaseProps {
    defaultValue?: number;
    disabled?: boolean;
    min?: number;
    max?: number;
    onChange?: Function;
    onFocus?: Function;
    onBlur?: Function;
    step?: number;
    type?: number;
    value?: number;
}

export interface InputNumberState {
    value: number
}