
import {BaseProps} from '../common/BaseProps';

export interface PickerNode {
    label?: string;
    value?: any;
    children?: any[]
}

export interface PickerItemProps extends BaseProps {
    disabled?: boolean;
    data: any[];
    format?: string | Function;
    index?: number;
    label?: string;
    onValueChange?: Function;
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
    format?: string | Function;
    placeholder?: string;
    onChange?: Function;
    onClose?: Function;
    onOpen?: Function;
    onValueChange?: Function;
    value?: Array<any> | string;
    visible?: boolean;
}

export interface PickerState {
    visible: boolean;
    value?: any[];
    data?: any[];
    inputValue?: string;
}