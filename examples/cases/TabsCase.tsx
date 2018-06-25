import * as React from 'react';
import * as classNames from 'classnames';
import Tabs, {Tab, TabContainer, TabsGroup} from '../../src/components/Tabs';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';

interface Props extends BaseProps {
}

interface State {
    index: number;
}

export default class TabsCase extends React.PureComponent<Props, State> {
    state: State = {
        index: 0,
    };

    handleChange = (index: any) => {
        this.setState({
            index,
        });
    }

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'TabsCase',
            className,
        );
        const conStyle = {
            padding: 10,
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
                    <TabsGroup animated={false}>
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
