
import {BaseProps} from '../common/BaseProps';

export interface PickerNode {
    label?: string;
    value?: any;
    children?: any[];
}

export interface PickerItemProps extends BaseProps {
    disabled?: boolean;
    data: any[];
    format?: string | ((event: any) => void);
    index?: number;
    label?: string;
    onValueChange?: (event: any) => void;
    value?: any;
}

export interface PickerItemState {
    data?: any[];
    activeIndex?: number;
    y?: number;
}

export interface PickerProps extends BaseProps {
    defaultValue?: Array<any> | string;
    disabled?: boolean;
    data?: Array<PickerNode>;
    format?: string | ((event: any) => void);
    placeholder?: string;
    onChange?: ((event: any) => void);
    onClose?: () => void;
    onOpen?: () => void;
    onValueChange?: ((event: any) => void);
    value?: Array<any> | string;
    visible?: boolean;
}

export interface PickerState {
    visible: boolean;
    value?: any[];
    data?: any[];
    inputValue?: string;
}
