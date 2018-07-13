
import {BaseProps} from '../common/BaseProps';

export type ICON_SIZE = 'lg' | '1x' | '2x' | '3x' | '4x' | '5x';

export type ICON_ROTATE = 'rotate-90' | 'rotate-180' | 'rotate-270' | 'flip-horizontal' | 'flip-vertical';

export interface IconProps extends BaseProps {
    icon?: string;
    spin?: boolean;
    size?: ICON_SIZE;
    rotate?: ICON_ROTATE;
    onClick?: (event: any) => void;
}
