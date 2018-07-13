import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface NavBarProps extends BaseProps {
    fixed?: boolean;
    center?: React.ReactNode | string;
    left?: React.ReactNode | string;
    right?: React.ReactNode | string;
}
