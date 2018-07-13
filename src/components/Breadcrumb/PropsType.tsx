import {BaseProps} from '../common/BaseProps';
import * as React from 'react';

export interface BreadcrumbItem {
    name?: React.ReactNode;
    icon?: React.ReactNode;
}

export interface BreadcrumbProps extends BaseProps {
    menus?: Array<BreadcrumbItem>;
    separator?: React.ReactNode | string;
}
