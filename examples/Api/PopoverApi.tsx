import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';
import Popover from '../../src/components/Popover/Popover';

interface PopoverApiProps extends BaseProps {
}

export default class PopoverApi extends React.PureComponent<PopoverApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-PopoverApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Button from '../components/Button';
import Popover from '../components/Popover';
import {Content} from '../components/Page';
import List, {ListItem, ListItemText} from '../components/List';

interface PopoverCaseProps extends BaseProps {
}

interface PopoverCaseState {
    visible: boolean;
    anchorEl: any;
}

export default class PopoverCase extends React.PureComponent< PopoverCaseProps, PopoverCaseState> {
    state = {
        visible: false,
        anchorEl: null
    };
    button: any;
    handleClickButton = () => {
        this.setState({
            visible: !this.state.visible!,
            anchorEl: ReactDOM.findDOMNode(this.button)
        });
    };

    handleClose = () => {
        this.setState({
            visible: false
        });
    };
    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'PopoverCase',
            className
        );
        const {anchorEl} = this.state;
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Button theme="primary" ref={node => this.button = node} onClick={this.handleClickButton}>Open Popover</Button>

                    <Popover anchorEl={anchorEl} visible={this.state.visible} onClose={this.handleClose}>
                        <List>
                            {
                                [0, 1, 2].map((value, index) => (
                                    <ListItem key={index.toString()} style={{width: '100px'}}>
                                        <ListItemText>
                                            {'Item' + value}
                                        </ListItemText>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Popover>
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
            name: 'Popover',
            fields: this.getFields(),
            attributes: [{
                attr: 'anchorEl',
                desc: '目标元素',
                type: 'any',
                default: '-',
            }, {
                attr: 'dir',
                desc: '设置显示位置。可选值：top-left | top-center | top-right | bottom-left | bottom-center | bottom-right',
                type: 'String',
                default: 'bottom-right',
            }, {
                attr: 'visible',
                desc: '是否显示',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'onClose',
                desc: '关闭的回调函数',
                type: 'Function',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Popover 弹出框"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/popover"
                    description="弹出框，可自定义内容。"
                />
            </Content>
        );
    }
}
