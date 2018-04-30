
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
    height?: String | Number;
    type?: SPIN_TYPES;
    size?: SPIN_SIZES;
    width?: String | Number;
}