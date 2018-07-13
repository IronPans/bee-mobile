import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface AutocompleteProps extends BaseProps {
    count?: number;
    data?: Array<any>;
    inline?: boolean;
    maxHeight?: number | string;
    startAdorn?: React.ReactNode;
    onChange?: (event: any) => void;
    onFocus?: (event: any) => void;
    onBlur?: (event: any) => void;
    onSelect?: (event: any) => void;
}

export interface AutocompleteState {
    data?: Array<any>;
    value?: string;
    visible?: boolean;
}
