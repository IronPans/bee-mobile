
import {BaseProps} from '../common/BaseProps';

export interface ImageViewProps extends BaseProps {
    target?: any;
    visible?: boolean;
    onClose?: Function;
    onOpen?: Function;
}

export interface ImageViewState {
    visible?: boolean;
    activeIndex?: number;
}