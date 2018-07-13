import {BaseProps} from '../common/BaseProps';
import * as React from 'react';

export interface AlertProps extends BaseProps {
    banner?: boolean;
    title?: string | React.ReactNode;
    desc?: string | React.ReactNode;
    closable?: boolean;
    type?: 'success' | 'info' | 'warning' | 'error';
    showIcon?: boolean;
    icon?: string;
}

export interface AlertState {
    closed?: boolean;
}
