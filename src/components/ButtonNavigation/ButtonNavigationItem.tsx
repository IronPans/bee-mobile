import * as React from 'react';
import * as classNames from 'classnames';
import Button from '../Button/Button';
import {getOtherProperties} from '../common/Utils';
import {ButtonNavigationItemProps} from './PropsType';

export default class ButtonNavigationItem extends React.PureComponent<ButtonNavigationItemProps, {}> {
    static defaultProps: ButtonNavigationItemProps = {
        prefixCls: 'bm-ButtonNavigationItem',
    };

    handleClick = (event: any) => {
        if (this.props.onClick) {
            (this.props.onClick as (event: any) => void)(event);
        }
    }

    render() {
        const {active, children, className, icon, label, onClick, prefixCls, ...other} = this.props;
        const styleClass = classNames(
            prefixCls, className,
            {
                [`${prefixCls}-active`]: active,
            },
        );
        const otherProps = getOtherProperties(other, ['onClick']);
        return (
            <Button className={styleClass} onClick={this.handleClick} {...otherProps}>
                <span className={`${prefixCls}-inner`}>
                    {icon}
                    <span>{label}</span>
                    {children}
                </span>
            </Button>
        );
    }
}
