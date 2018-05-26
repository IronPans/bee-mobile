import {BaseProps} from '../common/BaseProps';

export interface BackTopProps extends BaseProps {
    destination?: number;
    duration?: number;
    easing?: string;
    bottom?: number | string;
    right?: number | string;
    scrollNode?: any;
    onScrollEnd?: Function;
}

export interface BackTopState {
    visible?: boolean
}