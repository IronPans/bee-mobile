import {BaseProps} from '../common/BaseProps';

export interface KnobProps extends BaseProps {
    animated?: boolean;
    gapDegree?: number;
    gapPosition?: 'top' | 'right' | 'bottom' | 'left';
    barColor?: string;
    lineWidth?: number;
    lineCap?: string;
    size?: number;
    trackColor?: string;
    value?: number;
}

export interface KnobState {
    value: number;
}
