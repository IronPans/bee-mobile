import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../common/BaseProps';
import {spring} from 'react-motion';
import MotionGroup from './MotionGroup';

export interface ZoomInProps extends BaseProps {
    in?: boolean;
    springConfig?: {
        stiffness?: number;
        damping?: number;
    };
    wrapperComponent?: any;
    onEnter?: () => void;
    onLeave?: () => void;
}

export default class ZoomIn extends React.PureComponent<ZoomInProps, any> {
    static defaultProps: ZoomInProps = {
        in: false,
        springConfig: {
            stiffness: 210,
            damping: 20,
        },
    };

    zoomInTransitions: any = {
        enterStyles: {
            scale: 2,
            opacity: 0,
        },
        leaveStyles: {
            scale: spring(2, this.props.springConfig),
            opacity: spring(0, this.props.springConfig),
        },
        activeStyles: {
            scale: spring(1, this.props.springConfig),
            opacity: spring(1, this.props.springConfig),
        },
    };

    componentDidMount() {
        if (this.props.in) {
            this.forceUpdate();
        }
    }

    render() {
        const {className, children, in: inProps, onEnter, onLeave}: any = this.props;
        const styleClass = classNames(
            'bm-ZoomIn',
            className,
        );
        return (
            <MotionGroup
                onEnter={onEnter}
                onLeave={onLeave}
                in={inProps}
                {...this.zoomInTransitions}
            >
                {({scale, opacity}: any) => (
                    <div className={styleClass} style={{transform: `scale(${scale})`, opacity}}>
                        {children}
                    </div>
                )}
            </MotionGroup>
        );
    }
}
