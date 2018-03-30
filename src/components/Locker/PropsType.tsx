
import {BaseProps} from '../common/BaseProps';

export interface LockerProps extends BaseProps {
    width?: number | string;
    height?: number | string;
    strokeStyle?: string;
    fillStyle?: string;
    onDone?: Function;
}

export interface LockerState {
    x: number;
    y: number;
}