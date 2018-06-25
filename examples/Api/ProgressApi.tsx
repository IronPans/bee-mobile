import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface ProgressApiProps extends BaseProps {
}

export default class ProgressApi extends React.PureComponent<ProgressApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-ProgressApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Progress from '../components/Progress';
import {Content} from '../components/Page';
import Button from '../components/Button/Button';

interface ProgressCaseProps extends BaseProps {
}

export default class ProgressCase extends React.PureComponent< ProgressCaseProps, any> {
    state = {
        value: 0
    };

    add = () => {
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
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'ProgressCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="padding-20 Row">
                    <div className="Col-10">
                        <Progress value={this.state.value}/>
                        <Button onClick={this.add} className="margin-top-10">+10</Button>
                    </div>
                    <div className="Col-2 padding-left-5">
                        {this.state.value}%
                    </div>
                </div>
                <div className="padding-20">
                    <Progress value={50} showValue={true}/>
                </div>
                <div className="padding-20">
                    <Progress loading={true}/>
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
            name: 'Progress',
            fields: this.getFields(),
            attributes: [{
                attr: 'completeColor',
                desc: '当进度加载到100%时的背景色',
                type: 'String',
                default: '#26a69a',
            }, {
                attr: 'height',
                desc: '设置进度条的高度',
                type: 'number | string',
                default: '5px',
            }, {
                attr: 'loading',
                desc: '是否开启loading动画',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'showValue',
                desc: '是否显示百分比',
                type: 'Boolean',
                default: 'false',
            },  {
                attr: 'value',
                desc: '进度百分比',
                type: 'number',
                default: '0',
            }, {
                attr: 'width',
                desc: '设置进度条的宽度',
                type: 'number | string',
                default: '100%',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Progress 进度条"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/progress"
                    description="表明某个任务的当前进度。"
                />
            </Content>
        );
    }
}
