
import {BaseProps} from '../common/BaseProps';

export interface RadioProps extends BaseProps {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    disableRipple?: boolean;
    name?: string;
    onChange?: (event: any) => void;
    value?: string;
}

export interface RadioState {
    checked: boolean;
}
