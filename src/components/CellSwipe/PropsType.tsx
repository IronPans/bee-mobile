import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export interface CellSwipeProps extends BaseProps {
    to?: string;
    leftSlot?: React.ReactNode | Array<React.ReactNode>;
    rightSlot?: React.ReactNode | Array<React.ReactNode>;
}

export interface CellSwipeState {
  left?: number;
}
