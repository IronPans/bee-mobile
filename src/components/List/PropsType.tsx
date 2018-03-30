
import {BaseProps} from '../common/BaseProps';

export interface ListProps extends BaseProps {
    disableRipple?: boolean;
}

export interface ListItemProps extends BaseProps {
    disableRipple?: boolean;
    index?: number;
    onClick?: Function;
}

export interface ListItemActionProps extends BaseProps {
}

export interface ListItemTextProps extends BaseProps {
}