import {BaseProps} from '../common/BaseProps';

export interface SidebarProps extends BaseProps {
    reveal?: boolean;
    onClose?: Function;
    dir?: string;
    drawer?: boolean,
}

export interface SidebarState {
    reveal: boolean
}