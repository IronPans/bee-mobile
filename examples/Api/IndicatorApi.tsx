import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface IndicatorApiProps extends BaseProps {
}

export default class IndicatorApi extends React.PureComponent<IndicatorApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-IndicatorApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Button from '../components/Button';
import Indicator from '../components/Indicator';
import {Content} from '../components/Page';

interface IndicatorCaseProps extends BaseProps {
}

interface IndicatorCaseState {
    visible: boolean;
}

export default class IndicatorCase extends React.PureComponent< IndicatorCaseProps, IndicatorCaseState> {
    state: IndicatorCaseState = {
        visible: false
    };

    openIndicator = () => {
        Indicator.show();
    };

    openSpinner = () => {
        Indicator.show({type: 'circleLine'});
    };

    openIndicatorWithText = () => {
        Indicator.show({message: '加载中...'});
    };

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'IndicatorCase',
            className
        );
        return (
            <Content className={styleClass}>
                <section className="CasePanel">
                    <Button block onClick={this.openIndicator}>点击弹出 Indicator</Button>
                    <Button block onClick={this.openSpinner}>可配置的 spinner</Button>
                    <Button block onClick={this.openIndicatorWithText}>点击弹出带有文字的 Indicator</Button>
                </section>
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
            name: 'Indicator.show()',
            fields: this.getFields(),
            attributes: [{
                attr: 'delay',
                desc: '自动消失的时间',
                type: 'Number',
                default: '2500',
            }, {
                attr: 'message',
                desc: '提示内容',
                type: 'React.ReactNode | string',
                default: '-',
            }, {
                attr: 'size',
                desc: 'spin的尺寸。可选值：lg | sm | xs',
                type: 'String',
                default: 'xs',
            }, {
                attr: 'type',
                desc: `spin的类型可选值：'circleRound'
                | 'circleLine'
                | 'circleRoundFade'
                | 'lineSquare'
                | 'lineRound'
                | 'lineBounce'
                | 'snake'`,
                type: 'String',
                default: 'circleRound',
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
                    title="Indicator 指示器"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/indicator"
                    description="活动指示器。 表明某个任务正在进行中。"
                />
                <div className="padding-left-20 padding-right-20">
                    <h3>Indicator.close()</h3>
                </div>
            </Content>
        );
    }
}
