
import {BaseProps} from '../common/BaseProps';

export interface ViewProps extends BaseProps {
    reveal?: boolean;
    overlayBackground?: string;
    onClose?: any;
}

export interface ViewState {
    reveal: boolean;
}
