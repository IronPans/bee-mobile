import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../common/BaseProps';
import {spring} from 'react-motion';
import MotionGroup from './MotionGroup';

export interface FadeInDownProps extends BaseProps {
    in?: boolean;
    onEnter?: () => void;
    onLeave?: () => void;
}

export default class FadeInDown extends React.PureComponent<FadeInDownProps, any> {
    zoomInTransitions: any = {
        enterStyles: {
            opacity: 0,
            y: -100,
        },
        leaveStyles: {
            opacity: spring(0),
            y: spring(-100),
        },
        activeStyles: {
            opacity: spring(1),
            y: spring(0, {
                stiffness: 280,
                damping: 30,
            }),
        },
    };

    componentDidMount() {
        if (this.props.in) {
            this.forceUpdate();
        }
    }

    render() {
        const {className, children, in: inProp, onEnter, onLeave, ...other}: any = this.props;
        const styleClass = classNames(
            'bm-FadeInDown',
            className,
        );
        return (
            <MotionGroup in={inProp} onEnter={onEnter} onLeave={onLeave} {...this.zoomInTransitions}>
                {({opacity, y}: any) => {
                    return (<div
                        className={styleClass}
                        {...other}
                        style={{
                            opacity: opacity,
                            webkitTransform: `translate3d(0, ${y}px, 0)`,
                            transform: `translate3d(0 y + 'px, 0)`,
                    }}
                    >
                        {children}
                    </div>)
                        ;
                }}
            </MotionGroup>
        );
    }
}
