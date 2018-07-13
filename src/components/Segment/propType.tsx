import {BaseProps} from '../common/BaseProps';

export interface SegmentProps extends BaseProps {
    activeIndex?: number;
    disabled?: boolean;
    value?: Array<string>;
    onChange?: (event: any) => void;
}

export interface SegmentState {
    activeIndex?: number;
}
