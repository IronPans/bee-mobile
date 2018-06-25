import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface TabsApiProps extends BaseProps {
}

export default class TabsApi extends React.PureComponent<TabsApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-TabsApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import Tabs, {Tab, TabContainer, TabsGroup} from '../components/Tabs';
import {BaseProps} from '../components/common/BaseProps';
import Swiper from '../components/Swiper';
import {Content} from '../components/Page';

interface Props extends BaseProps {
}

interface State {
    index: number
}

export default class TabsCase extends React.PureComponent< Props, State> {
    state: State = {
        index: 0
    };

    handleChange = (index: any) => {
        this.setState({
            index
        });
    };

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'TabsCase',
            className
        );
        const conStyle = {
            padding: 10
        };
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <TabsGroup>
                        <Tabs>
                            <Tab>Home</Tab>
                            <Tab>Article</Tab>
                            <Tab>Personal</Tab>
                        </Tabs>
                        {
                            [0, 1, 2].map((value) => {
                                return (
                                    <TabContainer key={value} style={conStyle}>
                                        {value + 1}
                                    </TabContainer>
                                );
                            })
                        }
                    </TabsGroup>
                </div>
                <div className="CasePanel">
                    <TabsGroup onChange={this.handleChange}>
                        <Tabs>
                            <Tab>Home</Tab>
                            <Tab>Article</Tab>
                            <Tab>Personal</Tab>
                        </Tabs>
                        <Swiper touch={false} pagination={false} activeIndex={this.state.index}>
                            <div className="box padding-10">Slide1</div>
                            <div className="box padding-10">Slide2</div>
                            <div className="box padding-10">Slide3</div>
                        </Swiper>
                    </TabsGroup>
                </div>
                <div className="CasePanel">
                    <TabsGroup scrollable={true} centerMode={true}>
                        <Tabs>
                            <Tab>娱乐</Tab>
                            <Tab>八卦</Tab>
                            <Tab>体育</Tab>
                            <Tab>搞笑</Tab>
                            <Tab>视频</Tab>
                            <Tab>游戏</Tab>
                            <Tab>综艺</Tab>
                            <Tab>军事</Tab>
                            <Tab>社会</Tab>
                        </Tabs>
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
                                return (
                                    <TabContainer key={value} style={conStyle}>
                                        {value + 1}
                                    </TabContainer>
                                );
                            })
                        }
                    </TabsGroup>
                </div>
                <div className="CasePanel">
                    <TabsGroup position="left">
                        <Tabs>
                            <Tab>Home</Tab>
                            <Tab>Article</Tab>
                            <Tab>Personal</Tab>
                        </Tabs>
                        {
                            [0, 1, 2].map((value) => {
                                return (
                                    <TabContainer key={value} style={conStyle}>
                                        {value + 1}
                                    </TabContainer>
                                );
                            })
                        }
                    </TabsGroup>
                </div>
            </Content>
        );
    }
}
`;
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
            name: 'TabsGroup',
            fields: this.getFields(),
            attributes: [{
                attr: 'activeIndex',
                desc: '当前激活 tab 面板的 index',
                type: 'Number',
                default: '0',
            }, {
                attr: 'centerMode',
                desc: '展示的数字值',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'scrollable',
                desc: '是否开启滚动',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'position',
                desc: '页签位置，可选值有 top right bottom left',
                type: 'String',
                default: 'top',
            }, {
                attr: 'onChange',
                desc: 'tab变化时触发',
                type: '(index: any, event: any) => {}',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Tabs 标签页"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/tabs"
                    description="用于让用户在不同的视图中进行切换。"
                />
                <div className="padding-left-20 padding-right-20">
                    <h3>Tabs</h3>
                    <p>Tab标签组</p>
                </div>
                <div className="padding-left-20 padding-right-20">
                    <h3>Tab</h3>
                    <p>Tab标签</p>
                </div>
                <div className="padding-left-20 padding-right-20">
                    <h3>TabContainer</h3>
                    <p>Tab Content</p>
                </div>
            </Content>
        );
    }
}
