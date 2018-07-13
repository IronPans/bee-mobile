import * as React from 'react';
import * as classNames from 'classnames';
import {getOtherProperties} from '../common/Utils';
import {KeyBoardProps, KeyBoardState} from './PropsType';

export default class KeyBoard extends React.Component<KeyBoardProps, KeyBoardState> {
    static defaultProps: KeyBoardProps = {
        count: 5,
        prefixCls: 'bm-KeyBoard',
        title: '输入数字密码',
    };
    numbers: Array<number> = [];

    state: KeyBoardState = {
        password: '',
    };

    constructor(props: KeyBoardProps) {
        super(props);
        for (let i = 0; i < 9; i++) {
            this.numbers.push(i + 1);
        }
        if (props.random) {
            this.numbers = this.numbers.sort(() => {
                return Math.random() > 0.5 ? 1 : -1;
            });
        }
    }

    handleClick = (num: number) => {
        const {count}: any = this.props;
        const currentPassword: any = this.state.password;
        if (count <= currentPassword.length) {
            return;
        }
        this.setState({
            password: this.state.password! + num,
        }, () => {
            if (this.props.onFinish) {
                (this.props.onFinish as (event: any) => void)(this.state.password);
            }
        });
    }

    handleClose = () => {
        if (this.props.onClose) {
            (this.props.onClose as () => void)();
        }
    }

    handleDelete = () => {
        const {password}: any = this.state;
        this.setState({
            password: password.slice(0, password.length - 1),
        });
    }

    getPasswordInput() {
        const children: any = [];
        for (let i = 0; i < this.props.count!; i++) {
            children.push(
                <li key={`pwd-${i}`}>
                    <i
                        style={{
                            display: (this.state.password as string).length > i ? 'block' : 'none',
                        }}
                    />
                </li>);
        }
        return children;
    }

    getNumbersSpan() {
        const children: any = [];
        this.numbers.forEach((num: number) => {
            children.push(
                <span
                    key={`numbers-${num}`}
                    onClick={this.handleClick.bind(this, num)}
                >
                    {num}
                </span>);
        });
        children.push(<span key={`pwd-cancel`} onClick={this.handleClose}>取消</span>);
        children.push(
            <span
                key={`pwd-zero`}
                onClick={this.handleClick.bind(this, 0)}
            >
                0
            </span>);
        children.push(<span key={`pwd-delete`} onClick={this.handleDelete}/>);
        return children;
    }

    render() {
        const {action, className, prefixCls, title, ...other} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        const otherProps = getOtherProperties(other, ['children', 'count', 'onClose', 'onFinish', 'random']);
        return (
            <div className={styleClass} {...otherProps}>
                <div className={`${prefixCls}-header`}>
                    <strong>{title}</strong>
                </div>
                <div className={`${prefixCls}-password`}>
                    {this.getPasswordInput()}
                </div>
                <div className={`${prefixCls}-toolbar`}>
                    {action}
                </div>
                <div className={`${prefixCls}-content`}>
                    <div className={`${prefixCls}-numbers`}>
                        {this.getNumbersSpan()}
                    </div>
                </div>
            </div>
        );
    }
}
