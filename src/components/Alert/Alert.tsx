import * as React from 'react';
import * as classNames from 'classnames';
import {Fade} from '../Transitions';
import {AlertProps, AlertState} from './PropsType';

export default class Alert extends React.PureComponent<AlertProps, AlertState> {
    static defaultProps = {
        prefixCls: 'bm-Alert',
        type: 'info',
    };
    closed = false;

    close = () => {
        this.closed = true;
        this.forceUpdate();
    }

    render() {
        const {children, className, showIcon,
            prefixCls, desc, closable, icon, banner, title}: any = this.props;
        let type = this.props.type;
        let alertIcon = icon;
        if (!icon && type) {
            switch (type) {
                case 'info':
                    alertIcon = 'error_outline';
                    break;
                case 'success':
                    alertIcon = 'check_circle_outline';
                    break;
                case 'warning':
                    alertIcon = 'error_outline';
                    break;
                case 'error':
                    alertIcon = 'highlight_off';
                    break;
            }
        }
        if (banner) {
            alertIcon = 'error_outline';
            type = 'warning';
        }
        const styleClass = classNames(
            prefixCls,
            `${prefixCls}-${type}`,
            {
                [`${prefixCls}-with-icon`]: alertIcon,
                [`${prefixCls}-with-desc`]: desc,
                [`${prefixCls}-with-close`]: closable,
            },
            className,
        );
        const elem = this.closed ? null : (
            <Fade in={!this.closed}>
            <div className={styleClass}>
                {(showIcon && alertIcon) ? (<span>
                        <i className="bm-Icon bm-Alert-icon">{alertIcon}</i>
                </span>) : null}
                <div className={`${prefixCls}-body`}>
                    <span className={`${prefixCls}-title`}>
                {title}
                </span>
                    {desc ? (<span className={`${prefixCls}-desc`}>{desc}</span>) : null}
                </div>
                {closable ? (<span className={`${prefixCls}-close`} onClick={this.close}>
            <i className="bm-Icon">clear</i>
            </span>) : null}
            </div>
        </Fade>
        );
        return elem;
    }
}
