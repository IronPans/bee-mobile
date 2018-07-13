
import {BaseProps} from '../common/BaseProps';

export type SPIN_TYPES =
    'circleRound'
    | 'circleLine'
    | 'circleRoundFade'
    | 'lineSquare'
    | 'lineRound'
    | 'lineBounce'
    | 'snake';

export type SPIN_SIZES = 'lg' | 'sm' | 'xs';

export interface SpinProps extends BaseProps {
    height?: string | number;
    type?: SPIN_TYPES;
    size?: SPIN_SIZES;
    width?: string | number;
    color?: string;
}
