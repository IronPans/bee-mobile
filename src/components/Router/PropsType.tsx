import {BaseProps} from '../common/BaseProps';
import {PlainStyle} from 'react-motion';

export interface RouteTransitionProps extends BaseProps {
    enterStyles?: PlainStyle;
    leaveStyles?: object;
    activeStyles?: object;
    willEnter?: () => void;
    willLeave?: () => void;
    didLeave?: (event: any) => void;
    styles?: any;
    transitionName?: string;
    wrapperComponent?: any;
}

export interface AnimatedSwitchProps extends BaseProps {
    location?: {
        key?: string;
        pathname?: string;
    };
    onRouteChange?: (event: any) => void;
}

export interface AnimatedSwitchState {
    key?: any;
    match?: any;
}
