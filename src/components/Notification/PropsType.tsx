import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export type NOTIFICATION_POSITION = 'top' | 'bottom';

export type NOTIFICATION_TYPE = 'default' | 'success' | 'warning' | 'info' | 'error';

export interface NotificationProps extends BaseProps {
    avatar?: React.ReactNode;
    hideBackdrop?: boolean;
    delay?: number;
    message: any;
    position?: NOTIFICATION_POSITION;
    progress?: boolean;
    title?: React.ReactNode;
    type?: NOTIFICATION_TYPE;
    onClose?: () => void;
}
