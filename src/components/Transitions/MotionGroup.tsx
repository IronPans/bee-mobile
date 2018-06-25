import * as React from 'react';
import {BaseProps} from '../common/BaseProps';
import {Motion, PlainStyle} from 'react-motion';

export interface MotionGroupProps extends BaseProps {
    in?: boolean;
    enterStyles?: PlainStyle;
    leaveStyles?: object;
    activeStyles?: object;
    children?: () => void;
    styles?: () => void;
    onEnter?: (style: any) => void;
    onLeave?: (style: any) => void;
}

export default class MotionGroup extends React.PureComponent<MotionGroupProps, any> {
    getDefaultStyles() {
        const {children, enterStyles} = this.props;
        if (!children) {
            return {};
        }

        return enterStyles!;
    }

    getStyles() {
        const {children, activeStyles, in: inProps, leaveStyles} = this.props;
        if (!children) {
            return {};
        }

        return inProps ? activeStyles! : leaveStyles!;
    }

    onRest = () => {
        const inProps = this.props.in;
        if (inProps) {
            if (this.props.onEnter) {
                this.props.onEnter(inProps);
            }
        } else {
            if (this.props.onLeave) {
                this.props.onLeave(inProps);
            }
        }
    }

    renderElement = (style: any = {}) => {
        const styles: any = this.props.styles;
        const props = {
            style: styles(style)!,
        };
        return React.cloneElement(<div className="bm-MotionGroup">{this.props.children}</div>, props);
    }

    render() {
        const {children: childrenProps} = this.props;
        const children: any = childrenProps!;
        return (
            <Motion
                defaultStyle={this.getDefaultStyles() as any}
                onRest={this.onRest}
                style={this.getStyles() as any}
            >
                {style => {
                    return (typeof children === 'function' ?
                        children(style) : this.renderElement(style));
                }}
            </Motion>
        );
    }
}
