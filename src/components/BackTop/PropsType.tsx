import {BaseProps} from '../common/BaseProps';

export interface BackTopProps extends BaseProps {
    destination?: number;
    duration?: number;
    easing?: string;
    scrollNode?: any;
    onScrollEnd?: Function;
}