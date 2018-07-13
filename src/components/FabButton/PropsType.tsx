import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface FabButtonProps extends BaseProps {
    angle?: number;
    delay?: number;
    distance?: number;
    position?: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right' | 'center';
    icon?: React.ReactNode;
    reverse?: boolean;
    type?: 'horizontal' | 'vertical' | 'circle';
}

export interface FabButtonState {
    visible?: boolean;
}
