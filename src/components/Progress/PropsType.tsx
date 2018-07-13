
import {BaseProps} from '../common/BaseProps';

export interface ProgressProps extends BaseProps {
    animated?: boolean;
    barColor?: string;
    trackColor?: string;
    completeColor?: string;
    height?: number | string;
    loading?: boolean;
    showValue?: boolean;
    striped?: boolean;
    value?: number;
    width?: number | string;
    onComplete?: () => void;
}

export interface ProgressState {
    value: number;
}
