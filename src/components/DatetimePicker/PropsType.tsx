import {BaseProps} from '../common/BaseProps';

export interface DatetimePickerProps extends BaseProps {
    defaultValue?: Date | string;
    value?: Date | string;
    disabled?: boolean;
    minDate?: Date | string;
    maxDate?: Date | string;
    mode?: 'date' | 'time' | 'datetime';
    onOk?: (event: any) => void;
    onClose?: () => void;
    onOpen?: () => void;
    onValueChange?: (event: any) => void;
    visible?: boolean;
}

export interface DatetimePickerState {
    visible: boolean;
    value?: any;
    data?: any[];
}
