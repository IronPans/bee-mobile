import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface TableColumnProps extends BaseProps {
    colspan?: number;
    field?: string;
    header?: React.ReactNode;
    index?: number;
    rowspan?: number;
    sort?: boolean;
    template?: any;
}

export interface TableProps extends BaseProps {
    activeIndex?: number;
    border?: boolean;
    hover?: boolean;
    pagination?: boolean;
    row?: number;
    selectionMode?: '' | 'multiple';
    striped?: boolean;
    value?: any;
    onSelect?: (event: any) => void;
}

export interface TableState {
    activeIndex?: number;
    currentValue?: any[];
    selectedItem?: any[];
    value?: any[];
}
