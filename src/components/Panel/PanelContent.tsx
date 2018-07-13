import * as React from 'react';
import * as classNames from 'classnames';
import {PanelContentProps} from './PropsType';

export default class PanelContent extends React.PureComponent<PanelContentProps, any> {
    render() {
        const {className, children, ...other} = this.props;
        const styleClass = classNames(
            'PanelContent',
            className,
        );
        return (
            <div className={styleClass} {...other}>
                <div className="Panel-inner">
                    {children}
                </div>
            </div>
        );
    }
}
