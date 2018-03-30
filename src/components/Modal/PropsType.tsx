import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface ModalProps extends BaseProps {
    header?: React.ReactNode | string;
    hideBackdrop?: boolean;
    maxHeight?: number | string;
    visible: boolean;
    onClose?: Function;
    onOpen?: Function;
}

export interface ModalState {
    visible?: boolean;
}