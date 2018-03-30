
import {BaseProps} from '../common/BaseProps';

export interface MessageProps extends BaseProps {
    hideBackdrop?: boolean;
    onClose?: Function;
}

export interface MessageState {
    messages: Array<any>;
    hideBackdrop: boolean;
}

export interface MessageItemProps extends BaseProps {
    delay?: number;
    message?: any;
    onClose?: Function
}