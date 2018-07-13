
import {BaseProps} from '../common/BaseProps';

export interface ColSize {
    span?: number;
    order?: number;
    offset?: number;
}

export interface ColProps extends BaseProps {
    lg?: number;
    md?: number;
    offset?: number;
    order?: number;
    sm?: number;
    span?: number;
    xs?: number;
}

export type Breakpoint = 'lg' | 'md' | 'sm' | 'xs';
export type BreakpointMap = {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
};

export interface RowProps extends BaseProps {
    align?: 'top' | 'middle' | 'bottom';
    spacing?: number | object;
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
}

export interface RowState {
    screens: BreakpointMap;
}
