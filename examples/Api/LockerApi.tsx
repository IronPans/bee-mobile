import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface LockerApiProps extends BaseProps {
}

export default class LockerApi extends React.PureComponent<LockerApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-LockerApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Locker from '../components/Locker';
import {Content} from '../components/Page';

interface LockerCaseProps extends BaseProps {
}

interface LockerCaseState {
    message?: string;
}

export default class LockerCase extends React.PureComponent< LockerCaseProps, LockerCaseState> {
    static defaultProps = {
        prefixCls: 'bm-LockerCase'
    };

    state = {
        message: ''
    };
    record: any = [];

    handleDone = (event: any) => {
        let rs = event;
        if (rs.points.length < 4) {
            this.setState({
                message: '设定的手势太简单了'
            });
            this.record = [];
            rs.clear();
            return;
        }
        this.record.push(rs.points.join(''));
        if (this.record.length >= 2) {
            if (this.record[0] == this.record[1]) {
                this.setState({
                    message: '手势设定完成'
                });
            } else {
                this.setState({
                    message: '两次手势设定不一致'
                });
            }
            rs.clear();
            this.record = [];
        } else {
            this.setState({
                message: '请确认手势设定'
            });
            rs.clear();
        }
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Locker onDone={this.handleDone}/>
                    <div className="Locker-Remind">{this.state.message}</div>
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
            name: 'Locker',
            fields: this.getFields(),
            attributes: [{
                attr: 'width',
                desc: '设置宽度',
                type: 'Number | String',
                default: '300',
            }, {
                attr: 'height',
                desc: '设置高度',
                type: 'Number | String',
                default: '300',
            }, {
                attr: 'strokeStyle',
                desc: '描边色',
                type: 'String',
                default: 'rgba(0,0,0,.12)',
            }, {
                attr: 'fillStyle',
                desc: '填充色',
                type: 'String',
                default: '#2196f3',
            }, {
                attr: 'onDone',
                desc: '绘制完成的回调',
                type: '({points, clear}) => {}',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Locker 手势密码"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/locker"
                    description="手势密码解锁。"
                />
            </Content>
        );
    }
}
