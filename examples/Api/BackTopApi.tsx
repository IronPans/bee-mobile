import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface BackTopApiProps extends BaseProps {
}

export default class BackTopApi extends React.PureComponent<BackTopApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-BackTopApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import {Content} from '../components/Page';
import BackTop from '../components/BackTop';
import Icon from '../components/Icon';
import Button from '../components/Button';

interface BackTopCaseProps extends BaseProps {
}

export default class BackTopCase extends React.PureComponent< BackTopCaseProps, any> {
    scrollNode: any;

    getRef = (node: any) => {
        this.scrollNode = node;
    };

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'BackTopCase',
            className
        );
        return (
            <Content className={styleClass} {...other} ref={this.getRef}>
                请拖到下面
                <div className="scrollBox">
                    Content
                    <BackTop>
                        <Button theme="primary" shape="circle" size="lg">
                            <Icon icon="keyboard_arrow_up"/>
                        </Button>
                    </BackTop>
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
            name: 'BackTop',
            fields: this.getFields(),
            attributes: [{
                attr: 'destination',
                desc: '滚动目标位置',
                type: 'Number',
                default: '0',
            }, {
                attr: 'duration',
                desc: '滚动时间',
                type: 'Number',
                default: '200',
            }, {
                attr: 'easing',
                desc: '设置过渡效果',
                type: 'String',
                default: 'linear',
            }, {
                attr: 'scrollNode',
                desc: '设置滚动容器',
                type: 'React.ReactNode',
                default: '-',
            }, {
                attr: 'onScrollEnd',
                desc: '滚到顶部的回调函数',
                type: 'Function',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="BackTop 回到顶部"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/backTop"
                    description="回到顶部。"
                />
            </Content>
        );
    }
}
