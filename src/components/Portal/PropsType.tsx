
import {BaseProps} from '../common/BaseProps';

export interface PortalProps extends BaseProps {
    visible: boolean;
    mountNode?: any;
}

export interface PortalState {
    visible: boolean;
}
