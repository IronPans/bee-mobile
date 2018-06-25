import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Card, {CardHeader, CardContent, CardFooter} from '../../src/components/Card';
import Avatar from '../../src/components/Avatar';
import Icon from '../../src/components/Icon';
import Button from '../../src/components/Button';
import {Content} from '../../src/components/Page';

interface CardCaseProps extends BaseProps {
}

export default class CardCase extends React.PureComponent<CardCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'CardCase',
            className,
        );
        const styles = {
            avatar: {
                width: 100,
            },
        };
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Card>
                        <CardContent>
                            <Avatar src="assets/images/landscape.jpg"/>
                            <div className="padding-10">
                                <h2 className="no-margin">Title</h2>
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </div>
                        </CardContent>
                        <CardFooter className="padding-5">
                            <Button theme="primary" flat={true}>Share</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="CasePanel">
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar src="assets/images/users/1.jpg"/>
                            }
                            title="TG"
                            subTitle="September 14, 2016"
                            action={
                                <Button shape="circle" className="no-shadow fr-no-active">
                                    <Icon icon="more_vert"/>
                                </Button>
                            }
                        />
                        <CardContent>
                            <Avatar src="assets/images/landscape.jpg"/>
                            <div className="padding-10">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
                        <CardHeader
                            avatar={
                                <Avatar src="assets/images/users/1.jpg"/>
                            }
                            title="TG"
                            subTitle="September 14, 2016"
                        />
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
}
