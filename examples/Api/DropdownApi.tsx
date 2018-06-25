import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface DropdownApiProps extends BaseProps {
}

export default class DropdownApi extends React.PureComponent<DropdownApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-DropdownApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import Button from '../../src/components/Button';
import Dropdown from '../../src/components/Dropdown';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';

interface DropdownCaseProps extends BaseProps {
}

export default class DropdownCase extends React.PureComponent< DropdownCaseProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-DropdownCase'
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className
        );
        const data = [
            {
                title: 'Home'
            },
            {
                title: 'Page'
            }
        ];
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Dropdown data={data}>
                        <Button>Dropdown</Button>
                    </Dropdown>
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
            name: 'Dropdown',
            fields: this.getFields(),
            attributes: [{
                attr: 'data',
                desc: '菜单',
                type: 'Array',
                default: '-',
            }, {
                attr: 'direction',
                desc: '菜单弹出位置: \'top-left\' | \'bottom-right\' | \'bottom-left\' | \'top-right\'',
                type: 'string',
                default: 'bottom-left',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Dropdown 下拉菜单"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/dropdown"
                    description="向下弹出的列表。"
                />
            </Content>
        );
    }
}
