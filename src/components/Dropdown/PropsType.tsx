import {BaseProps} from '../common/BaseProps';

export interface DropdownProps extends BaseProps {
    data?: Array<any>;
    direction?: 'top-left' | 'bottom-right' | 'bottom-left' | 'top-right';
    hover?: boolean;
}

export interface DropdownState {
    visible?: boolean;
}
