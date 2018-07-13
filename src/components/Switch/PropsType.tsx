
import {BaseProps} from '../common/BaseProps';

export interface SwitchProps extends BaseProps {
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    onChange?: (event: any) => {};
    inputType?: number | string;
}

export interface SwitchState {
    checked: boolean;
}
