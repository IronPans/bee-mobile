import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface ButtonNavigationApiProps extends BaseProps {
}

export default class ButtonNavigationApi extends React.PureComponent<ButtonNavigationApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-ButtonNavigationApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import ButtonNavigation, {ButtonNavigationItem} from '../components/ButtonNavigation';
import Icon from '../components/Icon';
import {Content} from '../components/Page';
import Swiper from '../components/Swiper';

interface ButtonNavigationCaseProps extends BaseProps {
}

interface ButtonNavigationCaseState {
    index: number;
}

export default class ButtonNavigationCase extends React.PureComponent< ButtonNavigationCaseProps, ButtonNavigationCaseState> {
    state: ButtonNavigationCaseState = {
        index: 0
    };
    handleChange = (event: any) => {
        this.setState({
            index: event.index
        });
    };

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'ButtonNavigationCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <Swiper touch={false} pagination={false} activeIndex={this.state.index}>
                    <div className="box blue padding-10">Slide1</div>
                    <div className="box red padding-10">Slide2</div>
                    <div className="box yellow padding-10">Slide3</div>
                </Swiper>
                <ButtonNavigation onChange={this.handleChange}>
                    <ButtonNavigationItem label="Recents" icon={<Icon icon="home"/>} />
                    <ButtonNavigationItem label="Nearby" icon={<Icon icon="shopping_cart"/>} />
                    <ButtonNavigationItem label="Favorites" icon={<Icon icon="perm_identity"/>} />
                </ButtonNavigation>
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
            name: 'ButtonNavigation',
            fields: this.getFields(),
            attributes: [{
                attr: 'fixed',
                desc: '是否固定在底部',
                type: 'Boolean',
                default: 'true',
            }, {
                attr: 'activeIndex',
                desc: '当前激活的tab',
                type: 'Number',
                default: '0',
            }, {
                attr: 'onChange',
                desc: 'tab切换的回调函数',
                type: '(event, index) => void',
                default: 'noop',
            }],
        }, {
            name: 'ButtonNavigationItem',
            fields: this.getFields(),
            attributes: [{
                attr: 'label',
                desc: '按钮文本描述',
                type: 'String',
                default: '-',
            }, {
                attr: 'icon',
                desc: '设置图标',
                type: 'React.ReactNode | string',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="ButtonNavigation 底部导航"
                    code={this.getCode()}
                    app="适用平台：WEB"
                    data={data}
                    frameUrl="#/components/buttonNavigation"
                    description="底部导航组件是一个侧边栏的替代方案"
                />
            </Content>
        );
    }
}
