import {BaseProps} from '../common/BaseProps';

export interface CheckboxProps extends BaseProps {
    checked?: boolean;
    disableRipple?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    inputRef?: (node: any) => {};
    value?: string;
    onChange?: Function;
}

export interface CheckboxState {
    checked: boolean;
}