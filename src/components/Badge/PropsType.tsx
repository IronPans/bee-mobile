import {BaseProps} from '../common/BaseProps';
import * as React from 'react';

export type TYPES = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';

export interface BadgeProps extends BaseProps {
    count?: number;
    dot?: boolean;
    fixed?: boolean;
    notify?: boolean;
    max?: number;
    shape?: 'circle';
    status?: TYPES;
    text?: React.ReactNode | string;
}