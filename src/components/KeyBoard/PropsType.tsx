import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface KeyBoardProps extends BaseProps {
    action?: React.ReactNode;
    count?: number;
    random?: boolean;
    title?: React.ReactNode;
    onClose?: Function;
    onFinish?: Function;
}

export interface KeyBoardState {
    password?: string;
}