import * as React from 'react';
import * as classNames from 'classnames';
import {getOtherProperties} from '../common/Utils';
import {ColProps, ColSize} from './PropsType';

export default class Col extends React.PureComponent<ColProps, any> {
    render() {
        const {className, children, offset, order, span, ...other} = this.props;
        const colClass: any = [];
        const sizes = ['lg', 'md', 'sm', 'xs'];
        for (const col of sizes) {
            let sizeProps: any = {};
            const colProps = this.props[col];
            if (!colProps) {
                continue;
            }
            if (typeof colProps === 'number') {
                sizeProps.span = colProps;
            } else if (typeof colProps === 'object') {
                sizeProps = colProps || {};
            }
            colClass.push({
                [`Col-${col}-${sizeProps.span}`]: sizeProps.span >= 0,
                [`Col-${col}-offset-${sizeProps.offset}`]: sizeProps.offset,
                [`Col-order-${sizeProps.order}`]: sizeProps.order,
            });
        }
        const otherProperties = getOtherProperties(other, sizes);
        const styleClass = classNames({
                [`Col-${span}`]: span! >= 0,
                [`Col-offset-${offset}`]: !!offset!,
                [`Col-order-${order}`]: !!order!,
            },
            className, ...colClass,
        );
        return (
            <div className={styleClass} {...otherProperties}>
                {children}
            </div>
        );
    }
}
