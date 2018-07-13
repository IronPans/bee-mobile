
import {BaseProps} from '../common/BaseProps';

export interface ImageViewProps extends BaseProps {
    target?: any;
    visible?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
}

export interface ImageViewState {
    visible?: boolean;
    activeIndex?: number;
}
