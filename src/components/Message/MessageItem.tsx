import * as React from 'react';
import * as classNames from 'classnames';
import {MessageItemProps} from './PropsType';

export default class MessageItem extends React.PureComponent<MessageItemProps, any> {
    static defaultProps: MessageItemProps = {
        delay: 2500
    };
    timer: any;

    componentWillMount() {
        this.show();
    }

    componentWillUnmount() {
        this.clearTimer();
    }

    show = () => {
        if (this.timer) {
            return;
        }
        const {delay} = this.props;
        if (delay! > 0) {
            this.timer = setTimeout(() => {
                this.close();
            }, delay!);
        }
    };
    close = () => {
        this.clearTimer();
        if (this.props.onClose) {
            this.props.onClose();
        }
    };

    clearTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    render() {
        const {message, className} = this.props;
        const styleClass = classNames(
            'MessageItem',
            className
        );
        return (
            <div className={styleClass}>
                <div className="MessageItem-inner">
                    {message}
                </div>
            </div>
        );
    }
}