import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface PaginationItemProps extends BaseProps {
    active?: boolean;
    index?: number;
    disabled?: boolean;
    component?: React.ReactNode,
    onClick?: Function
}

export interface PaginationItemState {
    active: boolean;
    disabled: boolean;
}

export interface PaginationProps extends BaseProps {
    maxPage?: number;
    pageSize?: number;
    onPageChange?: Function;
    shape?: string;
    total?: number;
    value?: number;
}

export interface PaginationState {
    value: number;
    pages: Array<number>;
}