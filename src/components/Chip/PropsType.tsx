import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface ChipNode {
    avatar?: React.ReactNode;
    label?: string;
    value?: any;
}

export interface ChipProps extends BaseProps {
    active?: boolean;
    avatar?: React.ReactNode;
    close?: boolean;
    label?: React.ReactNode | string;
    onClick?: (event: any) => void;
    onDelete?: (event: any) => void;
    value?: any;
}

export interface ChipGroupProps extends BaseProps {
    data?: Array<ChipNode>;
    onClick?: (event: any) => void;
    onDelete?: (event: any) => void;
    placeholder?: string;
}

export interface ChipGroupState {
    data: Array<ChipNode>;
    focus?: boolean;
    value?: string;
}
