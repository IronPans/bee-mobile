import * as React from 'react';
import * as classNames from 'classnames';
import {TransitionMotion} from 'react-motion';
import {BaseProps} from '../common/BaseProps';

/**
 * enterStyles: 进入前的动画属性
 * leaveStyles: 离开后的动画属性
 * activeStyles: 进入时的动画属性
 */
export interface TransitionProps extends BaseProps {
    enterStyles?: Array<any>;
    leaveStyles?: Array<any>;
    activeStyles?: Array<any>;
    styles?: () => void;
    transitionName?: string;
    wrapperComponent?: any;
    willEnter?: () => void;
    willLeave?: () => void;
    didLeave?: (style: any) => void;
}

export interface TransitionState {
}

export default class TransitionGroup extends React.PureComponent<TransitionProps, TransitionState> {
    getDefaultStyles() {
        const {children, enterStyles} = this.props;

        if (!children) {
            return [];
        }

        const key = (children as any).key;
        return [
            {
                key: key,
                data: children!,
                style: enterStyles!,
            },
        ];
    }

    getStyles() {
        const {children, activeStyles} = this.props;
        if (!children) {
            return [];
        }

        const key = (children as any).key;
        return [
            {
                key: key,
                data: children!,
                style: activeStyles!,
            },
        ];
    }

    willEnter = (): any => {
        if (this.props.willEnter) {
            (this.props.willEnter as () => void)();
        }
        return this.props.enterStyles!;
    }

    willLeave = (): any => {
        if (this.props.willLeave) {
            (this.props.willLeave as () => void)();
        }
        return {...this.props.leaveStyles!};
    }

    didLeave = (styleThatLeft: object) => {
        if (this.props.didLeave) {
            this.props.didLeave(styleThatLeft);
        }
    }

    renderElement = (config: any = {}) => {
        const styles: any = this.props.styles;
        const props = {
            style: styles(config.style)!,
            key: config.key,
        };

        return !!this.props.wrapperComponent !== false
            ? React.createElement(this.props.wrapperComponent, props, config.data)
            : React.cloneElement(config.data, props);
    }

    render() {
        const {className, transitionName} = this.props;
        const styleClass = classNames(
            transitionName,
            className,
        );
        return (
            <TransitionMotion
                defaultStyles={this.getDefaultStyles() as any[]}
                styles={this.getStyles() as any[]}
                willEnter={this.willEnter}
                willLeave={this.willLeave}
            >
                {styles => (
                    <div className={styleClass}>
                        {styles.map(this.renderElement)}
                    </div>
                )}
            </TransitionMotion>
        );
    }
}
