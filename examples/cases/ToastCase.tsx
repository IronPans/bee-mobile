import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Button from '../../src/components/Button';
import Toast from '../../src/components/Toast';
import {Content} from '../../src/components/Page';

interface ToastCaseProps extends BaseProps {
    messages?: Array<object>;
}

interface ToastCaseState {
    messages: Array<object>;
}

export default class ToastCase extends React.PureComponent<ToastCaseProps, ToastCaseState> {
    state: ToastCaseState = {
        messages: [],
    };
    handleClick = () => {
        Toast.show({
            message: '提示信息',
        });
    }

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'ToastCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Button onClick={this.handleClick}>点击弹出 Toast</Button>
                </div>
            </Content>
        );
    }
}
