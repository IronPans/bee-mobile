import {BaseProps} from '../common/BaseProps';

export interface CheckboxProps extends BaseProps {
    checked?: boolean;
    disableRipple?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    inputRef?: (node: any) => {};
    value?: string;
    onChange?: (event: any) => void;
}

export interface CheckboxState {
    checked: boolean;
}
