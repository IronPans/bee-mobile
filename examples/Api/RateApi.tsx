import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface RateApiProps extends BaseProps {
}

export default class RateApi extends React.PureComponent<RateApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-RateApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Rate from '../components/Rate';
import {Content} from '../components/Page';

interface RateCaseProps extends BaseProps {
}

export default class RateCase extends React.PureComponent< RateCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'RateCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Rate/>
                </div>
                <div className="CasePanel">
                    <Rate allowHalf={true} defaultValue={3}/>
                </div>
                <div className="CasePanel">
                    <Rate allowHalf={true} template="好"/>
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
            name: 'Rate',
            fields: this.getFields(),
            attributes: [{
                attr: 'allowHalf',
                desc: '是否允许半选',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'count',
                desc: 'star 总数。',
                type: 'Number',
                default: '5',
            }, {
                attr: 'defaultValue',
                desc: '默认值。',
                type: 'Number',
                default: '0',
            }, {
                attr: 'onChange',
                desc: '选择时的回调',
                type: '(value) => void',
                default: '-',
            }, {
                attr: 'readOnly',
                desc: '只读，无法进行交互。',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'template',
                desc: '自定义字符。',
                type: 'React.ReactNode | String',
                default: '-',
            }, {
                attr: 'value',
                desc: '当前数，受控值',
                type: 'Number',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Rate 评分"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/rate"
                    description="评分组件。"
                />
            </Content>
        );
    }
}
