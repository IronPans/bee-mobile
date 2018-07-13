import * as React from 'react';
import * as classNames from 'classnames';
import {TabContainerProps, TabContainerState} from './PropsType';

export default class TabContainer extends React.PureComponent<TabContainerProps, TabContainerState> {
    static fnName: string = 'TabContainer';

    static defaultProps: TabContainerProps = {
        prefixCls: 'bm-TabContainer',
    };

    state: TabContainerProps = {
        activeIndex: 0,
    };

    componentDidMount() {
        const {activeIndex}: any = this.props;
        if (activeIndex > 0) {
            this.setState({activeIndex});
        }
    }

    componentWillReceiveProps(nextProps: TabContainerProps) {
        if ('activeIndex' in nextProps && this.props.activeIndex !== nextProps.activeIndex) {
            this.setState({
                activeIndex: nextProps.activeIndex!,
            });
        }
    }

    render() {
        const { children, className, index, activeIndex, prefixCls, ...other } = this.props;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-active`]: index === activeIndex,
            },
            className,
        );
        return (
            <div className={styleClass} {...other}>
                {children}
            </div>
        );
    }
}
