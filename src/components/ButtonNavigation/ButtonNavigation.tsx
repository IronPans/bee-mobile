import * as React from 'react';
import * as classNames from 'classnames';
import {getOtherProperties} from '../common/Utils';
import {ButtonNavigationProps, ButtonNavigationState} from './PropsType';

export default class ButtonNavigation extends React.PureComponent<ButtonNavigationProps, ButtonNavigationState> {
    static defaultProps: ButtonNavigationProps = {
        fixed: true,
        prefixCls: 'bm-ButtonNavigation',
    };

    constructor(props: ButtonNavigationProps) {
        super(props);
        let activeIndex = 0;
        if (typeof props.activeIndex! === 'number') {
            activeIndex = props.activeIndex!;
        }
        this.state = {
            activeIndex,
        };
    }

    componentWillReceiveProps(nextProps: ButtonNavigationProps) {
        const {activeIndex} = nextProps;
        if ('activeIndex' in nextProps && this.props.activeIndex !== activeIndex) {
            if (typeof activeIndex! === 'number') {
                this.setState({activeIndex});
            }
        }
    }

    handleClick = (index: number, event: any) => {
        if (this.props.onChange) {
            (this.props.onChange as (event: any) => void)({
                originalEvent: event, index,
            });
        }
        this.setState({activeIndex: index});
    }

    render() {
        const {className, children: childrenProps, fixed, prefixCls, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-fixed`]: fixed,
            },
            className,
        );
        const otherProps = getOtherProperties(other,
            ['activeIndex', 'onChange', 'value', 'fixed']);
        const children = React.Children.map(childrenProps, (child: React.ReactElement<any>, index: number) => {
            const props: any = {...(child.props || {})};
            props.active = index === this.state.activeIndex!;
            props.onClick = this.handleClick.bind(this, index);
            return React.cloneElement(child, props);
        });
        return (
            <div className={styleClass} {...otherProps}>
                {children}
            </div>
        );
    }
}
