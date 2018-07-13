import {BaseProps} from '../common/BaseProps';

export type BUTTON_SIZES = '' | 'lg' | 'sm';

export type BUTTON_TYPES = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';

export interface ButtonProps extends BaseProps {
    block?: boolean;
    disableRipple?: boolean;
    disabled?: boolean;
    shape?: '' | 'circle';
    flat?: boolean;
    float?: '' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    to?: string;
    type?: string;
    isActive?: boolean;
    loading?: boolean;
    round?: boolean;
    size?: BUTTON_SIZES;
    target?: string;
    theme?: BUTTON_TYPES;
    onClick?: (event: any) => void;
    onTouchStart?: (event: any) => void;
    onTouchMove?: (event: any) => void;
    onTouchEnd?: (event: any) => void;
    onMouseUp?: (event: any) => void;
    onMouseDown?: (event: any) => void;
    tabIndex?: number;
}

export interface ButtonGroupProps extends BaseProps {
    dir?: string;
}
