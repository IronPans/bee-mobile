import * as React from 'react';
import * as classNames from 'classnames';
import {PlainStyle, TransitionPlainStyle, TransitionMotion} from 'react-motion';
import {RouteTransitionProps} from './PropsType';

export default class RouteTransition extends React.PureComponent<RouteTransitionProps, any> {
    static defaultProps = {
        prefixCls: 'bm-RouteTransition',
        wrapperComponent: 'div',
    };

    getDefaultStyles() {
        const {children, enterStyles}: any = this.props;
        if (!children) {
            return [];
        }
        return [{
            key: children.key,
            data: children!,
            style: enterStyles!,
        }];
    }

    getStyles() {
        const {children, activeStyles}: any = this.props;
        if (!children) {
            return [];
        }
        return [{
            key: children.key,
            data: children!,
            style: activeStyles!,
        }];
    }

    willEnter = (): PlainStyle => {
        return this.props.enterStyles!;
    }

    willLeave = (): any => {
        return {...this.props.leaveStyles!};
    }

    didLeave = (styleThatLeft: object) => {
        if (this.props.didLeave) {
            this.props.didLeave(styleThatLeft);
        }
    }

    renderElement = (config: any = {}) => {
        const styles: any = this.props.styles;
        const props: any = {
            style: styles(config.style)!,
            key: config.key,
        };
        return !!this.props.wrapperComponent !== false
            ? React.createElement(this.props.wrapperComponent, props, config.data)
            : React.cloneElement(config.data, props);
    }

    render() {
        const {className, transitionName, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className, transitionName,
        );
        return (
            <TransitionMotion
                defaultStyles={this.getDefaultStyles() as TransitionPlainStyle[]}
                styles={this.getStyles() as TransitionPlainStyle[]}
                willEnter={this.willEnter}
                willLeave={this.willLeave}
            >
                {(styles: any) => (
                    <div className={styleClass}>
                        {styles.map(this.renderElement)}
                    </div>
                )}
            </TransitionMotion>
        );
    }
}
