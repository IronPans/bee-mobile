import * as React from 'react';
import * as classNames from 'classnames';
import {NavBarProps} from './PropsType';

export default class NavBar extends React.PureComponent<NavBarProps, any> {
    static defaultProps: NavBarProps = {
        center: '',
        left: '',
        prefixCls: 'bm-NavBar',
        right: '',
    };
    render() {
        const { center, className, fixed, left, right, prefixCls } = this.props;
        const styleClass = classNames(
            `${prefixCls}`,
            {
                [`${prefixCls}-fixed`]: fixed,
            },
            className,
        );
        return (
            <div className={styleClass}>
                <div className={`${prefixCls}-inner`}>
                    <div className={`${prefixCls}-left`}>{left}</div>
                    <div className={`${prefixCls}-center`}>{center}</div>
                    <div className={`${prefixCls}-right`}>{right}</div>
                </div>
            </div>
        );
    }
}
