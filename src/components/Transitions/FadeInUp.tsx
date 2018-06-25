import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../common/BaseProps';
import {spring} from 'react-motion';
import MotionGroup from './MotionGroup';

export interface FadeInUpProps extends BaseProps {
    in?: boolean;
    onEnter?: () => void;
    onLeave?: () => void;
}

export default class FadeInUp extends React.PureComponent<FadeInUpProps, any> {
    zoomInTransitions: any = {
        enterStyles: {
            opacity: 0,
            y: 300,
        },
        leaveStyles: {
            opacity: spring(0),
            y: spring(300),
        },
        activeStyles: {
            opacity: spring(1),
            y: spring(0, {
                stiffness: 300,
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
        const {className, children, in: inProp, onEnter, onLeave, ...other} = this.props;
        const styleClass = classNames(
            'bm-FadeInUp',
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
                            transform: `translate3d(0, ${y}px, 0)`,
                        }}
                    >
                        {children}
                    </div>);
                }}
            </MotionGroup>
        );
    }
}
