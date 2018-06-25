import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface AvatarApiProps extends BaseProps {
}

export default class AvatarApi extends React.PureComponent<AvatarApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-AvatarApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import Avatar from '../components/Avatar';
import Icon from '../components/Icon/Icon';
import purple from '../components/colors/purple';
import blue from '../components/colors/blue';
import {Content} from '../components/Page';

export default class AvatarCase extends React.PureComponent {
    render() {
        const styleClass = classNames(
            'AvatarCase'
        );
        const styles = {
            purpleAvatar: {
                backgroundColor: purple[500], color: '#fff'
            },
            blueAvatar: {
                backgroundColor: blue[500],
                color: '#fff'
            }
        };
        return (
            < Content className={styleClass}>
                <div className="CasePanel">
                    <Avatar src="assets/images/users/1.jpg" className="SmAvatar"/>
                    <Avatar src="assets/images/users/1.jpg" className="BigAvatar"/>
                    <Avatar src="assets/images/users/1.jpg" className="SmAvatar" shape="circle"/>
                    <Avatar src="assets/images/users/1.jpg" className="BigAvatar" shape="circle"/>
                </div>
                <div className="CasePanel">
                    <Avatar className="SmAvatar" style={styles.purpleAvatar} shape="circle">
                        <Icon icon="email"/>
                    </Avatar>
                    <Avatar className="SmAvatar" style={styles.blueAvatar} shape="circle">
                        <Icon icon="place"/>
                    </Avatar>
                </div>
                <div className="CasePanel">
                    <Avatar className="SmAvatar" style={styles.purpleAvatar} shape="circle">
                        N
                    </Avatar>
                    <Avatar className="SmAvatar" style={styles.blueAvatar} shape="circle">
                        P
                    </Avatar>
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
            name: 'Avatar',
            fields: this.getFields(),
            attributes: [{
                attr: 'alt',
                desc: 'img的alt',
                type: 'String',
                default: '-',
            }, {
                attr: 'height',
                desc: 'img的height',
                type: 'Number',
                default: '-',
            }, {
                attr: 'src',
                desc: 'img的src',
                type: 'String',
                default: '-',
            }, {
                attr: 'shape',
                desc: '设置形状。可选值：circle',
                type: 'String',
                default: '-',
            }, {
                attr: 'title',
                desc: 'img的title',
                type: 'String',
                default: '-',
            }, {
                attr: 'width',
                desc: 'img的width',
                type: 'Number',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Avatar 头像"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/avatar"
                    description="图像头像。"
                />
            </Content>
        );
    }
}
