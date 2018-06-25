import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface SpinApiProps extends BaseProps {
}

export default class SpinApi extends React.PureComponent<SpinApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-SpinApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Spin from '../components/Spin';
import List, {ListItem, ListItemText, ListItemAction} from '../components/List';
import {Content} from '../components/Page';

interface SpinCaseProps extends BaseProps {
}

export default class SpinCase extends React.PureComponent< SpinCaseProps, any> {
    spinners: any[] = ['circleRound' ,'circleLine' ,'circleRoundFade' ,'lineSquare' ,'lineRound' ,'lineBounce', 'snake'];
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'SpinCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <List>
                        {
                            this.spinners.map((spinner, index) => (
                                <ListItem key={index.toString()}>
                                    <ListItemText>
                                        {spinner}
                                    </ListItemText>
                                    <ListItemAction>
                                        <Spin type={spinner}/>
                                    </ListItemAction>
                                </ListItem>
                            ))
                        }
                    </List>
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
            name: 'Spin',
            fields: this.getFields(),
            attributes: [{
                attr: 'size',
                desc: '设置尺寸。可选值：lg | sm | xs',
                type: 'String',
                default: 'xs',
            }, {
                attr: 'type',
                desc: `加载的类型。可选值：'circleRound'
                | 'circleLine'
                | 'circleRoundFade'
                | 'lineSquare'
                | 'lineRound'
                | 'lineBounce'
                | 'snake'`,
                type: 'String',
                default: 'circleRound',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Spin 加载中"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/spin"
                    description="用于页面和区块的加载中状态。"
                />
            </Content>
        );
    }
}
