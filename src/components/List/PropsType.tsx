
import {BaseProps} from '../common/BaseProps';

export interface ListProps extends BaseProps {
    disableRipple?: boolean;
    avatarRight?: boolean;
}

export interface ListItemProps extends BaseProps {
    avatarRight?: boolean;
    disableRipple?: boolean;
    index?: number;
    onClick?: (event: any) => void;
}

export interface ListItemActionProps extends BaseProps {
}

export interface ListItemTextProps extends BaseProps {
}
