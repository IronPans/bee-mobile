import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Button from '../../src/components/Button';
import MessageBox from '../../src/components/MessageBox';
import Spin from '../../src/components/Spin';
import Progress from '../../src/components/Progress';
import {Content} from '../../src/components/Page';

interface MessageBoxCaseProps extends BaseProps {
}

export default class MessageBoxCase extends React.PureComponent<MessageBoxCaseProps, any> {
    handleOpenAlert = () => {
        MessageBox.alert({
            title: '提示',
            message: '这是一个Alert提示框!',
        });
    }

    handleOpenConfirm = () => {
        MessageBox.confirm({
            title: '提示',
            message: '这是一个Confirm提示框!',
        });
    }

    handleOpenPrompt = () => {
        MessageBox.prompt({
            title: '提示',
            message: '这是一个Prompt提示框!',
        });
    }

    handleOpenPreloader = () => {
        MessageBox.show({
            message: (
                <div className="Row Row-column justify-center">
                <p>loading...</p>
                <Spin/>
            </div>),
            hideBackdrop: true,
        });
    }

    handleOpenInfinite = () => {
        MessageBox.show({
            message: (
                <div className="Row Row-column justify-center">
                <p>loading...</p>
                <Progress loading={true}/>
            </div>),
            hideBackdrop: true,
        });
    }

    render() {
        const styleClass = classNames(
            'MessageBoxCase',
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Button block={true} onClick={this.handleOpenAlert}>打开 alert 提示框</Button>
                    <Button block={true} onClick={this.handleOpenConfirm}>打开 confirm 提示框</Button>
                    <Button block={true} onClick={this.handleOpenPrompt}>打开 prompt 提示框</Button>
                </div>
                <div className="CasePanel">
                    <Button block={true} onClick={this.handleOpenPreloader}>Preloader</Button>
                    <Button block={true} onClick={this.handleOpenInfinite}>Infinite</Button>
                </div>
            </Content>
        );
    }
}
