import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface FabButtonApiProps extends BaseProps {
}

export default class FabButtonApi extends React.PureComponent<FabButtonApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-FabButtonApi',
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
            name: 'FabButton',
            fields: this.getFields(),
            attributes: [{
                attr: 'angle',
                desc: '当type为"circle"时，可以设置角度',
                type: 'Number',
                default: '90',
            }, {
                attr: 'delay',
                desc: '延迟',
                type: 'Number',
                default: '-',
            }, {
                attr: 'distance',
                desc: '子项之间的间距',
                type: 'Number',
                default: '20',
            }, {
                attr: 'position',
                desc: '设置位置。可选值：top-left | bottom-left | top-right | bottom-right | center',
                type: 'String',
                default: 'bottom-right',
            }, {
                attr: 'icon',
                desc: '图标',
                type: 'React.ReactNode',
                default: '-',
            }, {
                attr: 'reverse',
                desc: '是否反转',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'type',
                desc: '设置类型。可选值：horizontal | vertical | circle',
                type: 'String',
                default: 'horizontal',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="FabButton 浮动按钮"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/fab"
                    description="浮动按钮以固定的位置浮在内容上。按下时，它可能包含更多相关的操作。"
                />
            </Content>
        );
    }
}
