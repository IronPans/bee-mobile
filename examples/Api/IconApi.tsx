import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface IconApiProps extends BaseProps {
}

export default class IconApi extends React.PureComponent<IconApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-IconApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import Icon from '../components/Icon';
import {BaseProps} from '../components/common/BaseProps';
import {Content} from '../components/Page';
import {ICONS} from './common/icons';

interface IconCaseProps extends BaseProps {}

interface IconCaseState {
    icon?: string;
}

export default class IconCase extends React.PureComponent< IconCaseProps, IconCaseState> {
    state = {
        icon: ''
    };

    handleClick = (icon: string) => {
        this.setState({
            icon
        })
    };

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'IconCase',
            className
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <p>
                        Icon: <span>{this.state.icon}</span>
                    </p>
                    <ul className="doc-icon">
                        {
                            ICONS.map((icon: any) => {
                                return (
                                    <li key={icon.ligature} onClick={this.handleClick.bind(this, icon.ligature)}>
                                        <Icon icon={icon.ligature}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
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
            name: 'Icon',
            fields: this.getFields(),
            attributes: [{
                attr: 'icon',
                desc: '图标',
                type: 'String',
                default: '-',
            }, {
                attr: 'rotate',
                desc: '设置旋转值。可选值：rotate-90 | rotate-180 | rotate-270 | flip-horizontal | flip-vertical',
                type: 'String',
                default: '-',
            }, {
                attr: 'spin',
                desc: '设置loading',
                type: 'Boolean',
                default: '-',
            }, {
                attr: 'size',
                desc: '设置尺寸。可选值：lg | 1x | 2x | 3x | 4x | 5x',
                type: 'String',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Icon 图标"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/icon"
                    description={(<span>语义化的矢量图形。依赖<code className="code-inline">Material Icon</code>图标库。</span>)}
                />
            </Content>
        );
    }
}
