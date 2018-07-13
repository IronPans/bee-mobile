import * as React from 'react';
import {BaseProps} from '../common/BaseProps';

export type TOOLTIP_DIRECTION = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps extends BaseProps {
    delay?: number;
    dir?: TOOLTIP_DIRECTION;
    title?: string;
    onOpen?: () => {};
    onClose?: () => {};
}

export interface TooltipState {
    tooltipStyle: object;
    open: boolean;
}
