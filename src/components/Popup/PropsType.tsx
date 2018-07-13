
import {BaseProps} from '../common/BaseProps';

export interface PopupProps extends BaseProps {
    direction?: 'up' | 'right';
    visible: boolean;
    onClose?: () => void;
    onOpen?: () => void;
}
