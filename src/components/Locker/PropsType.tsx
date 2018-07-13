
import {BaseProps} from '../common/BaseProps';

export interface LockerProps extends BaseProps {
    width?: number | string;
    height?: number | string;
    strokeStyle?: string;
    fillStyle?: string;
    onDone?: (event: any) => void;
}

export interface LockerState {
    x: number;
    y: number;
}
