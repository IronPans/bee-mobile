
import {BaseProps} from '../common/BaseProps';

export interface PanelProps extends BaseProps {
    tool?: boolean;
    expanded?: boolean;
    onExpand?: () => void;
    onFullscreen?: () => void;
}

export interface PanelState {
    expanded?: boolean;
    full?: boolean;
}

export interface PanelContentProps extends BaseProps {
}

export interface PanelHeaderProps extends BaseProps {
    tool?: boolean;
    onExpand?: () => void;
    onFullscreen?: () => void;
}
