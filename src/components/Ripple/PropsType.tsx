
import {BaseProps} from '../common/BaseProps';

export interface RippleProps extends BaseProps {
    centerMode?: boolean;
    hidden?: boolean;
    rippleColor?: string;
    size?: 'sm';
}

export interface RippleState {
    children?: any[];
}
