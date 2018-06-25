import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface CardApiProps extends BaseProps {
}

export default class CellSwipeApi extends React.PureComponent<CardApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-CellSwipeApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Button from '../../src/components/Button';
import {Content} from '../../src/components/Page';
import CellSwipe from '../../src/components/CellSwipe';

interface CardCaseProps extends BaseProps {
}

export default class CellSwipeCase extends React.PureComponent< CardCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'bm-CellSwipeCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <CellSwipe leftSlot={<Button className="btn-delete">删除</Button>}
                           rightSlot={<Button className="btn-delete">删除</Button>}>
                    <div className="padding-10">
                        Cell
                    </div>
                </CellSwipe>
                <CellSwipe leftSlot={<Button className="btn-delete">删除</Button>}
                           rightSlot={<Button className="btn-delete">删除</Button>}>
                    <div className="padding-10">
                        Cell
                    </div>
                </CellSwipe>
                <CellSwipe leftSlot={<Button className="btn-delete">删除</Button>}
                           rightSlot={<Button className="btn-delete">删除</Button>}>
                    <div className="padding-10">
                        Cell
                    </div>
                </CellSwipe>
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
            name: 'CellSwipe',
            fields: this.getFields(),
            attributes: [{
                attr: 'to',
                desc: '设置链接地址，会自动切换为a',
                type: 'String',
                default: '',
            }, {
                attr: 'leftSlot',
                desc: '在左侧添加按钮组',
                type: 'React.ReactNode',
                default: '',
            }, {
                attr: 'rightSlot',
                desc: '在右侧添加按钮组',
                type: 'React.ReactNode',
                default: '',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="CellSwipe 可滑动的单元格"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/cellSwipe"
                    description="可滑动的单元格"
                />
            </Content>
        );
    }
}
