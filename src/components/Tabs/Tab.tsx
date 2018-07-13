import * as React from 'react';
import * as classNames from 'classnames';
import {TabProps} from './PropsType';

export default class Tab extends React.PureComponent<TabProps, {}> {
    static defaultProps = {
        disabled: false,
        prefixCls: 'bm-Tab',
    };
    width: number;

    handleChange = () => {
        if (!this.props.disabled && this.props.onChange) {
            this.props.onChange(this.props.index!);
        }
    }

    render() {
        const {children, className, disabled, activeIndex, index, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            {
                [`${prefixCls}-active`]: activeIndex === index,
                [`${prefixCls}-disabled`]: disabled,
            },
            className,
        );
        return (
            <div className={styleClass} onClick={this.handleChange}>
                <span className={`${prefixCls}-inner`}>
                    {children}
                </span>
            </div>
        );
    }
}
