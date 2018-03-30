import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface TableColumnProps extends BaseProps {
    colspan?: number;
    field?: string;
    header?: React.ReactNode;
    index?: number;
    rowspan?: number;
    sort?: boolean;
    template?: Function | React.ReactNode;
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
    onSelect?: Function;
}

export interface TableState {
    activeIndex?: number;
    currentValue?: any[];
    selectedItem?: any[];
    value?: any[];
}