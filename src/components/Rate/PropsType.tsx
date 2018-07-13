import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface RateProps extends BaseProps {
    allowHalf?: boolean;
    disableRipple?: boolean;
    count?: number;
    defaultValue?: number;
    onChange?: (event: any) => void;
    readOnly?: boolean;
    template?: React.ReactNode | string;
    value?: number;
}

export interface RateState {
    value: number;
}
