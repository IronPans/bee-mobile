import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface NavbarApiProps extends BaseProps {
}

export default class NavbarApi extends React.PureComponent<NavbarApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-NavbarApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Icon from '../components/Icon';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import {Content} from '../components/Page';

interface NavBarCaseProps extends BaseProps {
}

export default class NavBarCase extends React.PureComponent< NavBarCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'NavBarCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <section className="CasePanel">
                    <NavBar left={<Button>
                        <Icon icon="menu"/>
                    </Button>} center="NavBar" right={<Button>
                        <Icon icon="more_vert"/>
                    </Button>}/>
                </section>
                <section className="CasePanel">
                    <NavBar left={<div className="Row">
                        <Button>
                            <Icon icon="menu"/>
                        </Button>
                        <span className="padding-left-10 Row pull-center">NavBar</span>
                    </div>} right={<Button>
                        <Icon icon="more_vert"/>
                    </Button>}/>
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
            name: 'Calendar',
            fields: this.getFields(),
            attributes: [{
                attr: 'fixed',
                desc: '是否固定在顶部',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'center',
                desc: '导航中间内容',
                type: 'React.ReactNode | string',
                default: '-',
            }, {
                attr: 'left',
                desc: '导航左边内容',
                type: 'React.ReactNode | string',
                default: '-',
            }, {
                attr: 'right',
                desc: '导航右边内容',
                type: 'React.ReactNode | string',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Navbar 导航栏"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/naVbar"
                    description="位于 app 内容区的上方，系统状态栏的下方，并且提供在一系列页面中的导航能力。。"
                />
            </Content>
        );
    }
}
