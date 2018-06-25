import * as React from 'react';
import {BaseProps} from '../common/BaseProps';
import {spring} from 'react-motion';
import MotionGroup from './MotionGroup';

export interface FadeInZoomProps extends BaseProps {
    in?: boolean;
    willEnter?: () => void;
    willLeave?: () => void;
}

export default class FadeInZoom extends React.PureComponent<FadeInZoomProps, any> {
    zoomInTransitions: any = {
        enterStyles: {
            opacity: 0,
            scale: 0,
        },
        leaveStyles: {
            opacity: spring(0),
            scale: spring(0),
        },
        activeStyles: {
            opacity: spring(1, {
                stiffness: 250, damping: 16,
            }),
            scale: spring(1, {
                stiffness: 250, damping: 16,
            }),
        },
    };

    componentDidMount() {
        if (this.props.in) {
            this.forceUpdate();
        }
    }

    render() {
        const {className, children, in: inProp, ...other} = this.props;
        return (
            <MotionGroup in={inProp} {...this.zoomInTransitions}>
                {({opacity, scale}: any) => {
                    return (<div
                        className={className}
                        {...other}
                        style={{
                            opacity: opacity,
                            transform: `scale( ${scale},${scale})`,
                        }}
                    >
                        {children}
                    </div>);
                }}
            </MotionGroup>
        );
    }
}
