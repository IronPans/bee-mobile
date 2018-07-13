import {BaseProps} from '../common/BaseProps';

export interface AvatarProps extends BaseProps {
    alt?: string;
    height?: number;
    lazyLoad?: string;
    src?: string;
    shape?: 'circle';
    title?: string;
    width?: number;
}

export interface AvatarState {
    loaded?: boolean;
    src?: string;
}
