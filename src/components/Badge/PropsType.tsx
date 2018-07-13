import {BaseProps} from '../common/BaseProps';
import * as React from 'react';

export type TYPES = 'error' | 'primary' | 'info' | 'success' | 'warning';

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
