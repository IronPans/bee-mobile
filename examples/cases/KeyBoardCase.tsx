import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Button from '../../src/components/Button';
import {Content} from '../../src/components/Page';
import ActionSheet from '../../src/components/ActionSheet';
import KeyBoard from '../../src/components/KeyBoard';

interface KeyBoardCaseProps extends BaseProps {
}

interface KeyBoardCaseState {
    password?: string;
}

export default class KeyBoardCase extends React.Component<KeyBoardCaseProps, KeyBoardCaseState> {
    static defaultProps: KeyBoardCaseProps = {
        prefixCls: 'bm-KeyBoardCase',
    };
    password: string = '12345';

    handleFinish = (value: string) => {
        if (this.password === value) {
            // console.log(1);
        }
    }

    handleClose = () => {
        ActionSheet.close();
    }

    handleClick = () => {
        ActionSheet.show({
            actionClass: 'bm-KeyBoard-group',
            element: (<KeyBoard action={<a href="">忘记密码</a>} random={true} onClose={this.handleClose} onFinish={this.handleFinish}/>),
            onClose: () => {
                // console.log(2);
            },
        });
    }

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Button onClick={this.handleClick}>打开密码键盘</Button>
                </div>
            </Content>
        );
    }
}
