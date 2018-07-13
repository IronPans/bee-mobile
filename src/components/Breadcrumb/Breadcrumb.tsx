import * as React from 'react';
import * as classNames from 'classnames';
import {BreadcrumbItem, BreadcrumbProps} from './PropsType';

export default class Breadcrumb extends React.Component<BreadcrumbProps, {}> {
    static defaultProps: BreadcrumbProps = {
        prefixCls: 'bm-Breadcrumb',
        separator: '/',
    };

    render() {
        const {className, menus, prefixCls, separator} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        return (
            <ol className={styleClass}>
                {
                    (menus as Array<BreadcrumbItem>).map((menu: any, index: number) => {
                        return (
                            <li key={index}>
                                {
                                    menu.icon ? menu.icon : null
                                }
                                {
                                    index === 0 ? null : (<span className={`${prefixCls}-separator`}>
                                        {menu.separator || separator}
                                    </span>)}
                                <span className={`${prefixCls}-title`}>
                                    {menu.name}
                                </span>
                            </li>
                        );
                    })
                }
            </ol>
        );
    }
}
