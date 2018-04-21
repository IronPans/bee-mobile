import {BaseProps} from '../common/BaseProps';

export interface SegmentProps extends BaseProps {
    activeIndex?: number;
    disabled?: boolean;
    value?: Array<string>;
    onChange?: Function;
}

export interface SegmentState {
    activeIndex?: number;
}