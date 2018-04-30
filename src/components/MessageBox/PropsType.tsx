import * as React from 'react';

export interface MessageBoxProps {
    delay?: number;
    confirmButtonText?: React.ReactNode | String;
    cancelButtonText?: React.ReactNode | String;
    inputType?: string;
    message: React.ReactNode | string;
    placeholder?: string;
    showConfirmButton?: boolean;
    showCancelButton?: boolean;
    title?: React.ReactNode | string;
    type?: string;
    onConfirm?: Function;
    onClose?: Function;
}