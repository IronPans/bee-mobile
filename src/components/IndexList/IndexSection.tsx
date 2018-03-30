import * as React from 'react';
import * as classNames from 'classnames';
import {IndexSectionProps} from './PropsType';

export default class IndexSection extends React.Component<IndexSectionProps, any> {
    static defaultProps: IndexSectionProps = {
        prefixCls: 'bm-IndexSection'
    };

    render() {
        const {children: childrenProps, className, index, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className
        );
        const children = React.Children.map(childrenProps, (child: any, index: number) => {
            if (!React.isValidElement(child)) {
                return null;
            }
            return (
                <li key={index} className={`${prefixCls}-item`}>
                    {React.cloneElement(child, child.props)}
                </li>
            )
        });
        return (
            <li className={styleClass}>
                <p className={`${prefixCls}-title`} data-index={index}>{index}</p>
                <ul>{children}</ul>
            </li>
        );
    }
}