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
    onClick?: Function;
    onTouchStart?: Function;
    onTouchMove?: Function;
    onTouchEnd?: Function;
    onMouseUp?: Function;
    onMouseDown?: Function;
    tabIndex?: number;
}

export interface ButtonGroupProps extends BaseProps {
    dir?: string
}