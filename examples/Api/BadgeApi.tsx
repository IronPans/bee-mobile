import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface BadgeApiProps extends BaseProps {
}

export default class BadgeApi extends React.PureComponent<BadgeApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-BadgeApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Badge from '../components/Badge';
import Icon from '../components/Icon';
import Button from '../components/Button';
import {Content} from '../components/Page';

interface BadgeCaseProps extends BaseProps {
}

export default class BadgeCase extends React.PureComponent< BadgeCaseProps, {}> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'BadgeCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Badge count={11} fixed={false}/>
                    <Badge count={1}>
                        <Icon icon="local_post_office" className="case-head"/>
                    </Badge>
                    <Badge count={11} shape="circle">
                        <Button>BUTTON</Button>
                    </Badge>
                    <Button>
                        BUTTON
                        <Badge count={8} fixed={false}/>
                    </Button>
                </div>
                <div className="CasePanel">
                    <Badge dot={true}>
                        <Icon icon="local_post_office" className="case-head"/>
                    </Badge>
                    <Badge dot={true} notify={true}>
                        <Icon icon="local_post_office" className="case-head"/>
                    </Badge>
                </div>
                <div className="CasePanel">
                    <p>
                        <Badge dot={true} fixed={false} status="primary"/> primary
                    </p>
                    <p>
                        <Badge dot={true} fixed={false} status="info"/> info
                    </p>
                    <p>
                        <Badge dot={true} fixed={false} status="success"/> success
                    </p>
                    <p>
                        <Badge dot={true} fixed={false} status="warning"/> waring
                    </p>
                    <p>
                        <Badge dot={true} fixed={false} status="error"/> Error
                    </p>
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
                attr: 'count',
                desc: '展示的数字值',
                type: 'number',
                default: '-',
            }, {
                attr: 'dot',
                desc: '是否只显示一个小红点',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'fixed',
                desc: '是否固定在右上角',
                type: 'Boolean',
                default: 'true',
            }, {
                attr: 'notify',
                desc: '是否开启闪烁提醒',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'max',
                desc: '展示最大的数字值',
                type: 'number',
                default: '99',
            }, {
                attr: 'shape',
                desc: '设置徽章形状。可选值：circle',
                type: 'String',
                default: '-',
            }, {
                attr: 'status',
                desc: '展示的状态',
                type: 'default | primary | info | success | warning | error',
                default: (<code className="inline-code">default</code>),
            }, {
                attr: 'text',
                desc: '展示文本',
                type: 'React.Element | String',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    data={data}
                    app="适用平台：WEB"
                    title="Badge 小徽章"
                    code={this.getCode()}
                    frameUrl="#/components/badge"
                    description="徽章是包含数字或文字的简单组件。"
                />
            </Content>
        );
    }
}
