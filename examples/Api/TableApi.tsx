import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface TableApiProps extends BaseProps {
}

export default class TableApi extends React.PureComponent<TableApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-TableApi',
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
            name: 'Table',
            fields: this.getFields(),
            attributes: [{
                attr: 'count',
                desc: '展示的数字值',
                type: 'number',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Table 数据表格"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/table"
                    description="数据表格。"
                />
            </Content>
        );
    }
}
