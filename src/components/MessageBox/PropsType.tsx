import * as React from 'react';

export interface MessageBoxProps {
    delay?: number;
    confirmButtonText?: React.ReactNode | string;
    cancelButtonText?: React.ReactNode | string;
    inputType?: string;
    message: React.ReactNode | string;
    placeholder?: string;
    showConfirmButton?: boolean;
    showCancelButton?: boolean;
    title?: React.ReactNode | string;
    type?: string;
    onConfirm?: (event: any) => void;
    onClose?: (event: any) => void;
}
