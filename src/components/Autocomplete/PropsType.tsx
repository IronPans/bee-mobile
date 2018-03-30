import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface AutocompleteProps extends BaseProps {
    count?: number;
    data?: Array<any>;
    inline?: boolean;
    maxHeight?: number | string;
    startAdorn?: React.ReactNode;
    onChange?: (value: string, event: any) => void;
    onFocus?: (value: string, event: any) => void;
    onBlur?: (value: string, event: any) => void;
    onSelect?: (value: any, event: any) => void;
}

export interface AutocompleteState {
    data?: Array<any>;
    value?: string;
    visible?: boolean;
}