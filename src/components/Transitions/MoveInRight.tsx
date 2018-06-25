import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../common/BaseProps';
import {spring} from 'react-motion';
import MotionGroup from './MotionGroup';

export interface MoveInRightProps extends BaseProps {
    in?: boolean;
    onEnter?: () => void;
    onLeave?: () => void;
}

export default class MoveInRight extends React.PureComponent<MoveInRightProps, any> {
    zoomInTransitions: any = {
        enterStyles: {
            opacity: 0,
            x: 300,
        },
        leaveStyles: {
            opacity: spring(0),
            x: spring(300),
        },
        activeStyles: {
            opacity: spring(1),
            x: spring(0, {
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
        const {className, children, in: inProp, onLeave, onEnter, ...other} = this.props;
        const styleClass = classNames(
            'bm-MoveInRight',
            className,
        );
        return (
            <MotionGroup in={inProp} {...this.zoomInTransitions} onEnter={onEnter} onLeave={onLeave}>
                {({opacity, x}: any) => {
                    return (<div
                        className={styleClass}
                        style={{
                            opacity: opacity,
                            transform: `translate3d(${x}px, 0, 0)`,
                        }}
                        {...other}
                    >
                        {children}
                    </div>);
                }}
            </MotionGroup>
        );
    }
}
