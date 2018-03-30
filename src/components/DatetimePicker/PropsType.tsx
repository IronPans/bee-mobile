import {BaseProps} from '../common/BaseProps';

export interface DatetimePickerProps extends BaseProps {
    defaultValue?: Date | string;
    value?: Date | string;
    disabled?: boolean;
    minDate?: Date | string;
    maxDate?: Date | string;
    mode?: 'date' | 'time' | 'datetime';
    onOk?: Function;
    onClose?: Function;
    onOpen?: Function;
    onValueChange?: Function;
    visible?: boolean;
}

export interface DatetimePickerState {
    visible: boolean;
    value?: any;
    data?: any[];
}