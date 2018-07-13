import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface CardApiProps extends BaseProps {
}

export default class CardApi extends React.PureComponent<CardApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-CardApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Card, { CardHeader, CardContent, CardFooter } from '../components/Card';
import Avatar from '../components/Avatar';
import Icon from '../components/Icon';
import Button from '../components/Button';
import {Content} from '../components/Page';

interface CardCaseProps extends BaseProps {
}

export default class CardCase extends React.PureComponent< CardCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'CardCase',
            className
        );
        const styles = {
            avatar: {
                width: 100
            }
        };
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Card>
                        <CardContent>
                            <Avatar src="assets/images/landscape.jpg"/>
                            <div className="padding-10">
                                <h2 className="no-margin">Title</h2>
                                This impressive paella is a perfect
                                party dish and a fun meal to cook together with your guests.
                                Add 1 cup of frozen peas along with the mussels, if you like.
                            </div>
                        </CardContent>
                        <CardFooter className="padding-5">
                            <Button theme="primary" flat={true}>Share</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="CasePanel">
                    <Card>
                        <CardHeader avatar={
                            <Avatar src="assets/images/users/1.jpg"/>
                        } title="TG" subTitle="September 14, 2016"
                        action={
                            <Button shape="circle" className="no-shadow fr-no-active">
                                <Icon icon="more_vert"/>
                            </Button>
                        }/>
                        <CardContent>
                            <Avatar src="assets/images/landscape.jpg"/>
                            <div className="padding-10">
                                This impressive paella is a perfect party
                                dish and a fun meal to cook together with your guests.
                                Add 1 cup of frozen peas along with the mussels, if you like.
                            </div>
                        </CardContent>
                        <CardFooter className="padding-5">
                            <Button flat={true}>Share</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="CasePanel">
                    <Card>
                        <CardContent>
                            <Avatar src="assets/images/landscape.jpg"/>
                        </CardContent>
                        <CardHeader avatar={
                            <Avatar src="assets/images/users/1.jpg"/>
                        } title="TG" subTitle="September 14, 2016"/>
                        <CardFooter action={true}>
                            <Button flat={true}>
                                <Icon icon="favorite"/>
                            </Button>
                            <Button flat={true}>
                                <Icon icon="thumb_up"/>
                            </Button>
                            <Button flat={true}>
                                <Icon icon="thumb_down"/>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="CasePanel">
                    <Card dir="horizontal">
                        <CardHeader title="TG" subTitle="September 14, 2016"/>
                        <CardContent>
                            <Avatar src="assets/images/users/1.jpg" style={styles.avatar}/>
                        </CardContent>
                    </Card>
                </div>
                <div className="CasePanel">
                    <Card dir="horizontal">
                        <CardContent>
                            <Avatar src="assets/images/users/1.jpg" style={styles.avatar}/>
                        </CardContent>
                        <CardHeader title="TG" subTitle="September 14, 2016"/>
                    </Card>
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
            name: 'Card',
            fields: this.getFields(),
            attributes: [{
                attr: 'dir',
                desc: '卡片的排列方向。可选值：horizontal | vertical',
                type: 'String',
                default: 'vertical',
            }],
        }, {
            name: 'CardHeader',
            fields: this.getFields(),
            attributes: [{
                attr: 'avatar',
                desc: '头像',
                type: 'React.ReactNode',
                default: '-',
            }, {
                attr: 'action',
                desc: '右侧辅助按钮',
                type: 'React.ReactNode',
                default: '-',
            }, {
                attr: 'title',
                desc: '标题' ,
                type: 'React.ReactNode | String',
                default: '-',
            }, {
                attr: 'subTitle',
                desc: '子标题',
                type: 'React.ReactNode | String',
                default: '-',
            }],
        }, {
            name: 'CardFooter',
            fields: this.getFields(),
            attributes: [{
                attr: 'action',
                desc: '当需要为页面添加额外按钮时',
                type: 'Boolean',
                default: 'false',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Card 卡片"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/card"
                    description="卡片。"
                />
                <div className="padding-left-20 padding-right-20">
                    <h3>CardContent</h3>
                    <p>主体内容</p>
                </div>
            </Content>
        );
    }
}
