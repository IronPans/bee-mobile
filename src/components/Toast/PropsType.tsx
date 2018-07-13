import * as React from 'react';

export type TOAST_POSITION = 'top' | 'center' | 'bottom';

export interface ToastProps {
    hideBackdrop?: boolean;
    avatar?: React.ReactNode;
    delay?: number;
    message: React.ReactNode | string;
    position?: TOAST_POSITION;
    type?: string;
    onClose?: () => void;
}
