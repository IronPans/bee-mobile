import * as React from 'react';
import * as classNames from 'classnames';
import {PageProps} from './PropsType';

export default class Page extends React.PureComponent<PageProps, {}> {
    static defaultProps = {
        isActive: true,
    };

    render() {
        const { className, isActive, children } = this.props;
        const styleClass = classNames(
            'Page', className,
            (isActive ? 'Page-active' : 'Page-on-right'),
        );
        return (
            <div className={styleClass}>
                {children}
            </div>
        );
    }
}
