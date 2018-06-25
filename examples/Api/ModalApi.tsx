import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface ModalApiProps extends BaseProps {
}

export default class ModalApi extends React.PureComponent<ModalApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-ModalApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import Modal from '../components/Modal';
import Button from '../components/Button';
import {BaseProps} from '../components/common/BaseProps';
import {Content} from '../components/Page';

interface Props extends BaseProps {
}

interface State {
    visible: boolean
}

export default class ModalCase extends React.PureComponent< Props, State> {
    state = {
        visible: false
    };

    handleOpen = () => {
        this.setState({
            visible: true
        });
    }

    handleClose = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        const styleClass = classNames(
            'ModalCase'
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Button theme="primary" onClick={this.handleOpen}>Open Modal</Button>
                    <Modal header="基本" visible={this.state.visible} onClose={this.handleClose}>
                        <div className="padding-10">
                            Modal
                        </div>
                    </Modal>
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
            name: 'Modal',
            fields: this.getFields(),
            attributes: [{
                attr: 'header',
                desc: 'header标题',
                type: 'React.ReactNode | String',
                default: '-',
            }, {
                attr: 'hideBackdrop',
                desc: '点击遮罩是否关闭',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'maxHeight',
                desc: '设置最大高度',
                type: 'Number | String',
                default: '-',
            }, {
                attr: 'visible',
                desc: '是否打开',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'onClose',
                desc: '关闭的回调函数',
                type: 'Function',
                default: '-',
            }, {
                attr: 'onOpen',
                desc: '打开的回调函数',
                type: 'Function',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Modal 模态框"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/modal"
                    description="模态对话框。"
                />
            </Content>
        );
    }
}
