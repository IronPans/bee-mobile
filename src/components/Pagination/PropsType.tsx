import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface PaginationItemProps extends BaseProps {
    active?: boolean;
    index?: number;
    disabled?: boolean;
    component?: React.ReactNode;
    onClick?: () => void;
}

export interface PaginationItemState {
    active: boolean;
    disabled: boolean;
}

export interface PaginationProps extends BaseProps {
    maxPage?: number;
    pageSize?: number;
    onPageChange?: (event: any) => void;
    shape?: string;
    total?: number;
    value?: number;
}

export interface PaginationState {
    value: number;
    pages: Array<number>;
}
