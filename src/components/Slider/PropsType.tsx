import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface SliderProps extends BaseProps {
    disabled?: boolean;
    end?: React.ReactNode | string;
    max?: number;
    min?: number;
    start?: React.ReactNode | string;
    step?: number;
    vertical?: boolean;
    value?: number;
    onChange?: (index: number) => void;
}

export interface SliderState {
    isDragging: boolean;
    value: number;
}
