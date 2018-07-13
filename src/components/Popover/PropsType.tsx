
import {BaseProps} from '../common/BaseProps';

export interface PopoverProps extends BaseProps {
    anchorEl: any;
    dir?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    onClose?: () => void;
    visible: boolean;
}

export interface PopoverState {
    visible: boolean;
}
