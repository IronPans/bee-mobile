import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface HighlightCodeApiProps extends BaseProps {
}

export default class HighlightCodeApi extends React.PureComponent<HighlightCodeApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-HighlightCodeApi',
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
            field: 'name',
            header: '属性',
        }, {
            field: 'age',
            header: '说明',
        }, {
            field: 'address',
            header: '类型',
        }, {
            field: 'job',
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
            name: 'Calendar',
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
                    title="Accordion 折叠面板"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/accordion"
                    description="折叠面板能有效地节省页面的可视面积。"
                />
            </Content>
        );
    }
}
