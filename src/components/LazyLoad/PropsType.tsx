import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface LazyLoadProps extends BaseProps {
    debounce?: number;
    height?: string | number;
    placeholder?: string | React.ReactNode;
    scrollNode?: HTMLElement;
    throttle?: number;
    width?: string | number;
    onLoaded?: () => void;
}
