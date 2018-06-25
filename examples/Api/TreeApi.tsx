import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface TreeApiProps extends BaseProps {
}

export default class TreeApi extends React.PureComponent<TreeApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-TreeApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps&} from '../components/common/BaseProps';
import ActionSheet from '../components/ActionSheet'
import {Content&} from '../components/Page';
import Button from '../components/Button';

interface ActionSheetCaseProps extends BaseProps {}

export default class ActionSheetCase extends React.PureComponent< ActionSheetCaseProps, {}> {

    handleClick = () => {
        ActionSheet.show({
            buttons: [{
                text: 'Button1'
            }, {
                text: 'Button2'
            }],
            cancel: true
        })
    };

    render() {
        const {className} = this.props;
        const styleClass = classNames(
             'ActionSheetCase', className
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Button theme="primary" onClick={this.handleClick}>Show Action Sheet</Button>
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
            name: 'Badge',
            fields: this.getFields(),
            attributes: [{
                attr: 'defaultValue',
                desc: '默认日期。',
                type: 'Date | string',
                default: '当前日期',
            }, {
                attr: 'minDate',
                desc: '设置最小年份。',
                type: 'Date | string',
                default: '2000/1/1',
            }, {
                attr: 'maxDate',
                desc: '设置最大年份。',
                type: 'Date | string',
                default: '2020/1/1',
            }, {
                attr: 'visible',
                desc: '是否开启',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'onOk',
                desc: '点击选中时执行的回调。',
                type: '(value: string) => void',
                default: 'noop',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Tree 树形菜单"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/tree"
                    description="折叠面板能有效地节省页面的可视面积。"
                />
            </Content>
        );
    }
}
