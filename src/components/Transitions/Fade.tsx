import * as React from 'react';
import * as classNames from 'classnames';
import {spring} from 'react-motion';
import {BaseProps} from '../common/BaseProps';
import MotionGroup from './MotionGroup';

export interface FadeProps extends BaseProps {
    in?: boolean;
    onEnter?: () => void;
    onLeave?: () => void;
}

export default class Fade extends React.PureComponent<FadeProps, {}> {
    fadeTransitions: any = {
        enterStyles: {
            opacity: 0,
        },
        leaveStyles: {
            opacity: spring(0, {
                stiffness: 170,
                damping: 26,
            }),
        },
        activeStyles: {
            opacity: spring(1, {
                stiffness: 170,
                damping: 26,
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
            'bm-Fade',
            className,
        );
        return (
            <MotionGroup
                in={inProp}
                onEnter={onEnter}
                onLeave={onLeave}
                {...this.fadeTransitions}
            >
                {({opacity}: any) => {
                    return (<div className={styleClass} {...other} style={{opacity: opacity}}>
                        {children}
                    </div>);
                }}
            </MotionGroup>
        );
    }
}
