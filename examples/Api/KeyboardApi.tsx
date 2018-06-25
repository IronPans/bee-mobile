import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface KeyboardApiProps extends BaseProps {
}

export default class KeyboardApi extends React.PureComponent<KeyboardApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-KeyboardApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Button from '../components/Button';
import {Content} from '../components/Page';
import ActionSheet from '../components/ActionSheet';
import KeyBoard from '../components/KeyBoard';

interface KeyBoardCaseProps extends BaseProps {
}

interface KeyBoardCaseState {
    password?: string;
}

export default class KeyBoardCase extends React.Component< KeyBoardCaseProps, KeyBoardCaseState> {
    static defaultProps: KeyBoardCaseProps = {
        prefixCls: 'bm-KeyBoardCase'
    };
    password: string = '12345';

    handleFinish = (value: string) => {
        if (this.password === value) {
            console.log(1);
        }
    };

    handleClose = () => {
        ActionSheet.close();
    };

    handleClick = () => {
        ActionSheet.show({
            actionClass: 'bm-KeyBoard-group',
            element: (<KeyBoard action={<a href="">忘记密码</a>} random={true} onClose={this.handleClose} onFinish={this.handleFinish}/>),
            onClose: () => {
                console.log(2);
            }
        })
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Button onClick={this.handleClick}>打开密码键盘</Button>
                </div>
            </Content>
        );
    }
}`;
    }

    getFields() {
        return [{
            field: 'attr',
            header: '属性',
        }, {
            field: 'desc',
            header: '说明',
        }, {
            field: 'type',
            header: '类型',
        }, {
            field: 'default',
            header: '默认值',
        }];
    }

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
            'ApiContent',
        );
        const data = [{
            name: 'KeyBoard',
            fields: this.getFields(),
            attributes: [{
                attr: 'action',
                desc: '额外操作。es：忘记密码等',
                type: 'React.ReactNode',
                default: '-',
            }, {
                attr: 'count',
                desc: '密码位数',
                type: 'Number',
                default: '5',
            }, {
                attr: 'random',
                desc: '键盘数字是否随机排序',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'title',
                desc: '头部标题',
                type: 'React.ReactNode',
                default: '输入数字密码',
            }, {
                attr: 'onClose',
                desc: '关闭时的回调函数',
                type: 'Function',
                default: '-',
            }, {
                attr: 'onFinish',
                desc: '每次输入密码触发的回调函数',
                type: '(value: string): void',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="KeyBoard 密码键盘"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/keyboard"
                    description="可点击虚拟软键盘输入账号密码，亦可打乱密码盘。"
                />
            </Content>
        );
    }
}
