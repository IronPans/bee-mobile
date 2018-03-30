import * as React from 'react';
import {BaseProps} from '../common/BaseProps';
export interface AccordionProps extends BaseProps {
    closeOthers?: boolean;
    disableRipple?: boolean;
    disabled?: boolean;
    expanded?: boolean;
    header?: React.ReactNode | string;
    index?: number;
    onChange?: (event: any) => {}
}

export interface AccordionState {
    expanded: boolean;
}

export interface AccordionGroupProps extends BaseProps {
    closeOthers?: boolean;
    disableRipple?: boolean;
    activeIndex?: number;
    onChange?: (index: number) => void;
}

export interface AccordionGroupState {
    activeIndex: number
}