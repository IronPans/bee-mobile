import {BaseProps} from '../common/BaseProps';
import {PlainStyle} from 'react-motion';

export interface RouteTransitionProps extends BaseProps {
    enterStyles?: PlainStyle;
    leaveStyles?: object;
    activeStyles?: object;
    willEnter?: Function;
    willLeave?: Function;
    didLeave?: Function;
    styles?: Function;
    transitionName?: string;
    wrapperComponent?: any;
}

export interface AnimatedSwitchProps extends BaseProps {
    location?: {
        key?: string,
        pathname?: string
    };
    onRouteChange?: Function;
}

export interface AnimatedSwitchState {
    key?: any;
    match?: any;
}