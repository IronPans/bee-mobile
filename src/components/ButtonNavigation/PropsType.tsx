import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface ButtonNavigationProps extends BaseProps {
    fixed?: boolean;
    onChange?: Function;
    activeIndex?: number;
}

export interface ButtonNavigationState {
    activeIndex?: number;
}

export interface ButtonNavigationItemProps extends BaseProps {
    active?: boolean;
    label?: string;
    icon?: React.ReactNode;
    onClick?: Function;
    showLabel?: boolean;
}