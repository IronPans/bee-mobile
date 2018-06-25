import * as React from 'react';
import * as classNames from 'classnames';
import {spring} from 'react-motion';
import {BaseProps} from '../common/BaseProps';
import MotionGroup from './MotionGroup';
import {getOtherProperties} from '../common/Utils';

export interface CollapseProps extends BaseProps {
    in?: boolean;
    springConfig?: {
        stiffness?: number;
        damping?: number;
    };
    onEnter?: () => void;
    onLeave?: () => void;
}

export interface CollapseState {
    expanded?: boolean;
}

export default class Collapse extends React.PureComponent<CollapseProps, CollapseState> {
    static defaultProps = {
        in: false,
        springConfig: {
            stiffness: 170,
            damping: 26,
        },
    };
    wrapper: any;

    collapseTransitions: any = {
        enterStyles: {
            height: 0,
        },
        leaveStyles: {
            height: spring(0, this.props.springConfig),
        },
        activeStyles: {
            height: spring(this.measureHeight(), this.props.springConfig),
        },
    };

    state = {
        expanded: false,
    };

    componentDidMount() {
        this.collapseTransitions.activeStyles = this.getActiveStyle();
        if (this.props.in) {
            this.setState({
                expanded: this.props.in,
            });
        }
    }

    componentWillReceiveProps(nextProps: CollapseProps) {
        if ('in' in nextProps && nextProps.in !== this.props.in) {
            this.collapseTransitions.activeStyles = this.getActiveStyle();
            this.setState({
                expanded: nextProps.in,
            });
        }
    }

    getActiveStyle(): any {
        return {
            height: spring(this.measureHeight(), this.props.springConfig),
        };
    }

    measureHeight() {
        let collapsedHeight = 0;
        if (this.wrapper) {
            const overflow = this.wrapper.style.overflow;
            this.wrapper.style.height = '1px';
            this.wrapper.style.overflow = 'auto';
            collapsedHeight = this.wrapper.scrollHeight;
            this.wrapper.style.overflow = overflow;
            this.wrapper.style.height = 0;
        }
        return collapsedHeight;
    }

    getCollapseRef = (node: any) => {
        this.wrapper = node;
    }

    render() {
        const {children, className, onEnter, onLeave, ...other} = this.props;
        const styleClass = classNames(
            'bm-Collapse', className,
        );
        const otherProps = getOtherProperties(other, ['in', 'springConfig']);
        return (
            <MotionGroup
                onEnter={onEnter}
                onLeave={onLeave}
                in={this.state.expanded}
                {...this.collapseTransitions}
            >
                {({height}: any) => (
                    <div className={styleClass} {...otherProps}>
                        <div ref={this.getCollapseRef} style={{height}}>{children}</div>
                    </div>
                )}
            </MotionGroup>
        );
    }
}
