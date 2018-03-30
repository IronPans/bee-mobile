
import {BaseProps} from '../common/BaseProps';

export interface PopupProps extends BaseProps {
    direction?: 'up' | 'right';
    visible: boolean;
    onClose?: Function;
    onOpen?: Function;
}