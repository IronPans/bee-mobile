import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import HighlightCode from "../../src/components/HighlightCode";
import {Collapse, Fade, MoveInRight, ZoomIn} from "../../src/components/Transitions";
import Table, {TableColumn} from '../../src/components/Table';

interface TransitionApiProps extends BaseProps {
}

interface TransitionApiState {
    collapse?: boolean;
    fade?: boolean;
    moveInRight?: boolean;
    zoomIn?: boolean;
}

export default class TransitionApi extends React.PureComponent<TransitionApiProps, TransitionApiState> {
    static defaultProps = {
        prefixCls: "bm-TransitionApi"
    };

    state: TransitionApiState = {
        collapse: true,
        fade: true,
        moveInRight: true,
        zoomIn: true
    };

    getFields() {
        return [{
            field: 'attr',
            header: '属性'
        }, {
            field: 'desc',
            header: '说明'
        }, {
            field: 'type',
            header: '类型'
        }, {
            field: 'default',
            header: '默认值'
        }]
    }

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
            'ApiContent'
        );
        const attributes: any = [{
            'attr': 'in',
            'desc': '是否显示',
            'type': 'Boolean',
            'default': 'false'
        }, {
            'attr': 'onEnter',
            'desc': '动画显示时触发的回调函数',
            'type': 'Function',
            'default': '-'
        }, {
            'attr': 'onLeave',
            'desc': '动画隐藏时触发的回调函数',
            'type': 'Function',
            'default': '-'
        }];
        const customAttributes: any = [{
            'attr': 'in',
            'desc': '是否显示',
            'type': 'Boolean',
            'default': 'false'
        }, {
            'attr': 'activeStyles',
            'desc': '进入时的动画属性',
            'type': 'Object',
            'default': '-'
        }, {
            'attr': 'enterStyles',
            'desc': '进入前的动画属性',
            'type': 'Object',
            'default': '-'
        }, {
            'attr': 'leaveStyles',
            'desc': '离开后的动画属性',
            'type': 'Object',
            'default': '-'
        }, {
            'attr': 'children',
            'desc': '必须为函数。会传入一个当前样式对象作为参数，且必须返回一个React Element。',
            'type': '(style: Object) => ReactElement',
            'default': '-'
        }, {
            'attr': 'onEnter',
            'desc': '动画显示时触发的回调函数',
            'type': 'Function',
            'default': '-'
        }, {
            'attr': 'onLeave',
            'desc': '动画隐藏时触发的回调函数',
            'type': 'Function',
            'default': '-'
        }];
        const code = `< Fade/> <FadeInDown/> <FadeInUp/> <Collapse/> <MoveInRight/> <ZoomIn/>`;
        const fields: any = this.getFields();
        const fadeCode = `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../components/common/BaseProps';
import {Content} from '../../components/Page';
import {Fade} from "../../components/Transitions";

interface TransitionApiProps extends BaseProps {
}

interface TransitionApiState {
    fade?: boolean;
}

export default class TransitionApi extends React.PureComponent< TransitionApiProps, TransitionApiState> {
    static defaultProps = {
        prefixCls: "bm-TransitionApi"
    };

    state: TransitionApiState = {
        fade: true
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
            'ApiContent'
        );
        return (
            <Content className={styleClass}>
                <div className="padding-20">
                    <div onMouseDown={() => {
                        this.setState({
                            fade: !this.state.fade
                        })
                    }}>
                        <Fade in={this.state.fade}>
                            <div className="anim-box"/>
                        </Fade>
                    </div>
                </div>
            </Content>
        );
    }
}`;
        const zoomInCode = `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../components/common/BaseProps';
import {Content} from '../../components/Page';
import {ZoomIn} from "../../components/Transitions";

interface TransitionApiProps extends BaseProps {
}

interface TransitionApiState {
    zoomIn?: boolean;
}

export default class TransitionApi extends React.PureComponent< TransitionApiProps, TransitionApiState> {
    static defaultProps = {
        prefixCls: "bm-TransitionApi"
    };

    state: TransitionApiState = {
        zoomIn: true
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
            'ApiContent'
        );
        return (
            <Content className={styleClass}>
                <div className="padding-20">
                    <div onMouseDown={() => {
                        this.setState({
                            zoomIn: !this.state.zoomIn
                        })
                    }}>
                        <ZoomIn in={this.state.zoomIn}>
                            <div className="anim-box"/>
                        </ZoomIn>
                    </div>
                </div>
            </Content>
        );
    }
}`;

        const moveInCode = `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../components/common/BaseProps';
import {Content} from '../../components/Page';
import {ZoomIn} from "../../components/Transitions";

interface TransitionApiProps extends BaseProps {
}

interface TransitionApiState {
    moveInRight?: boolean;
}

export default class TransitionApi extends React.PureComponent< TransitionApiProps, TransitionApiState> {
    static defaultProps = {
        prefixCls: "bm-TransitionApi"
    };

    state: TransitionApiState = {
        moveInRight: true
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
            'ApiContent'
        );
        return (
            <Content className={styleClass}>
                <div className="padding-20">
                    <div onMouseDown={() => {
                        this.setState({
                            moveInRight: !this.state.moveInRight
                        })
                    }}>
                        <MoveInRight in={this.state.moveInRight}>
                            <div className="anim-box"/>
                        </MoveInRight>
                    </div>
                </div>
            </Content>
        );
    }
}`;

        const collapseCode = `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../components/common/BaseProps';
import {Content} from '../../components/Page';
import {ZoomIn} from "../../components/Transitions";

interface TransitionApiProps extends BaseProps {
}

interface TransitionApiState {
    collapse?: boolean;
}

export default class TransitionApi extends React.PureComponent< TransitionApiProps, TransitionApiState> {
    static defaultProps = {
        prefixCls: "bm-TransitionApi"
    };

    state: TransitionApiState = {
        collapse: true
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
            'ApiContent'
        );
        return (
            <Content className={styleClass}>
                <div className="padding-20">
                    <div onMouseDown={() => {
                        this.setState({
                            collapse: !this.state.collapse
                        })
                    }}>
                        <Collapse in={this.state.collapse}>
                            <div className="anim-box"/>
                        </Collapse>
                    </div>
                </div>
            </Content>
        );
    }
}`;
        return (
            <Content className={styleClass}>
                <div className="padding-20">
                    <h2>bee-mobile的动画效果依赖于<a href="https://github.com/chenglou/react-motion" target="_blank">React
                        Motion</a>动画库。</h2>
                    <section className="anim-panel">
                        <h3>Fade 淡入淡出效果</h3>
                        <p>鼠标点击可查看淡入淡出效果。</p>
                        <div className="Row code-panel">
                            <div className="Col-8">
                                <HighlightCode>
                                    {fadeCode}
                                </HighlightCode>
                            </div>
                            <div className="Col-4" onMouseDown={() => {
                                this.setState({
                                    fade: !this.state.fade
                                })
                            }}>
                                <Fade in={this.state.fade}>
                                    <div className="anim-box"/>
                                </Fade>
                            </div>
                        </div>
                    </section>
                    <section className="anim-panel">
                        <h3>ZoomIn 缩放效果</h3>
                        <p>鼠标点击可查看缩放效果。</p>
                        <div className="Row code-panel">
                            <div className="Col-8">
                                <HighlightCode>
                                    {zoomInCode}
                                </HighlightCode>
                            </div>
                            <div className="Col-4" onMouseDown={() => {
                                this.setState({
                                    zoomIn: !this.state.zoomIn
                                })
                            }}>
                                <ZoomIn in={this.state.zoomIn}>
                                    <div className="anim-box"/>
                                </ZoomIn>
                            </div>
                        </div>
                    </section>
                    <section className="anim-panel">
                        <h3>MoveInRight 移动效果</h3>
                        <p>鼠标点击可查看移动效果。</p>
                        <div className="Row code-panel">
                            <div className="Col-8">
                                <HighlightCode>
                                    {moveInCode}
                                </HighlightCode>
                            </div>
                            <div className="Col-4" onMouseDown={() => {
                                this.setState({
                                    moveInRight: !this.state.moveInRight
                                })
                            }}>
                                <MoveInRight in={this.state.moveInRight}>
                                    <div className="anim-box"/>
                                </MoveInRight>
                            </div>
                        </div>
                    </section>
                    <section className="anim-panel">
                        <h3>Collapse 折叠效果</h3>
                        <p>鼠标点击可查看折叠效果。</p>
                        <div className="Row code-panel">
                            <div className="Col-8">
                                <HighlightCode>
                                    {collapseCode}
                                </HighlightCode>
                            </div>
                            <div className="Col-4" onMouseDown={() => {
                                this.setState({
                                    collapse: !this.state.collapse
                                })
                            }}>
                                <Collapse in={this.state.collapse}>
                                    <div className="anim-box"/>
                                </Collapse>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="padding-20">
                    <h3>预定义动画组件</h3>
                    <p>
                        <code className="code-inline">{code}</code>
                    </p>
                    <Table className="bm-Paper-2dp" value={attributes}>
                        {
                            fields.map((row: any, index: number) => {
                                return (
                                    <TableColumn key={index} field={row.field} header={row.header}
                                                 template={(data: any) => {
                                                     return data[row.field];
                                                 }}/>
                                );
                            })
                        }
                    </Table>
                </div>
                <div className="padding-20">
                    <h3>单个元素动画</h3>
                    <p>
                        <code className="code-inline">MotionGroup</code>
                    </p>
                    <Table className="bm-Paper-2dp" value={customAttributes}>
                        {
                            fields.map((row: any, index: number) => {
                                return (
                                    <TableColumn key={index} field={row.field} header={row.header}
                                                 template={(data: any) => {
                                                     return data[row.field];
                                                 }}/>
                                );
                            })
                        }
                    </Table>
                </div>
            </Content>
        );
    }
}