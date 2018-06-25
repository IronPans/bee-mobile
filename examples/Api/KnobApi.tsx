import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface KnobApiProps extends BaseProps {
}

export default class KnobApi extends React.PureComponent<KnobApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-KnobApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Knob from '../components/Knob';
import Button from '../components/Button';
import Icon from '../components/Icon';
import {Content} from '../components/Page';

interface KnobCaseProps extends BaseProps {
}

interface KnobCaseState {
    value: number
}

export default class KnobCase extends React.PureComponent< KnobCaseProps, KnobCaseState> {
    state = {
        value: 0
    };

    handleLoad = () => {
        let value = this.state.value;
        value += 10;
        if (value > 100) {
            value = 0;
        }
        this.setState({
            value
        });
    };

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'KnobCase',
            className
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Knob value={this.state.value}>
                        {this.state.value + '%'}
                    </Knob>
                    <Button theme="primary" onClick={this.handleLoad}>Add</Button>
                </div>
                <div className="CasePanel">
                    <Knob value={100} gapDegree={40}>
                        100%
                    </Knob>
                    <Knob value={50}>
                        <Icon icon="local_grocery_store"/>
                    </Knob>
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
            name: 'Calendar',
            fields: this.getFields(),
            attributes: [{
                attr: 'animated',
                desc: '是否开启加载动画',
                type: 'Boolean',
                default: 'true',
            }, {
                attr: 'barColor',
                desc: '设置已加载的进度背景色',
                type: 'String',
                default: '#5db2ff',
            }, {
                attr: 'lineWidth',
                desc: '进度条线宽',
                type: 'number',
                default: '6',
            }, {
                attr: 'size',
                desc: '环形进度条的尺寸',
                type: 'number',
                default: '100',
            }, {
                attr: 'trackColor',
                desc: '设置轨道的背景色',
                type: 'number',
                default: '#eee',
            }, {
                attr: 'value',
                desc: '进度百分比',
                type: 'number',
                default: '0',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Knob 环形进度条"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/knob"
                    description="表明某个任务的当前进度。"
                />
            </Content>
        );
    }
}
