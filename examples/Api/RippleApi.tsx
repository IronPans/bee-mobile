import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface RippleApiProps extends BaseProps {
}

export default class RippleApi extends React.PureComponent<RippleApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-RippleApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import {Content} from '../components/Page';
import Ripple from '../components/Ripple';
import Avatar from '../components/Avatar';
import Icon from '../components/Icon';

interface RippleCaseProps extends BaseProps {
}

export default class RippleCase extends React.Component< RippleCaseProps, {}> {
    static defaultProps: RippleCaseProps = {
        prefixCls: 'rf-RippleCase'
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            className
        );
        const fixed: any = {
            position: 'relative'
        };
        const iconStyles: any = {
            position: 'relative',
            width: '40px',
            height: '40px'
        };
        return (
            <Content className={styleClass}>
               <div className="padding-10">
                   <div className="inline-flex" style={fixed}>
                       <Avatar src="assets/images/users/1.jpg" className="BigAvatar"/>
                       <Ripple hidden={true} rippleColor="#f44336"/>
                   </div>
               </div>
                <div className="padding-10">
                    <div className="inline-flex" style={fixed}>
                        <Avatar src="assets/images/users/1.jpg" className="BigAvatar"/>
                        <Ripple hidden={true} centerMode={true}/>
                    </div>
                </div>
                <div className="padding-10">
                    <div className="inline-flex justify-center align-middle" style={iconStyles}>
                        <Icon icon="search" className="circle"/>
                        <Ripple hidden={true} centerMode={true} size="sm"/>
                    </div>
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
            name: 'Ripple',
            fields: this.getFields(),
            attributes: [{
                attr: 'centerMode',
                desc: '开启居中波纹模式',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'hidden',
                desc: '是否给父元素添加position: hidden',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'rippleColor',
                desc: '水波纹背景色。',
                type: 'String',
                default: '当前字体颜色',
            }, {
                attr: 'size',
                desc: '设置小尺寸。可选： sm',
                type: 'String',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    data={data}
                    app="适用平台：WEB"
                    title="Ripple 水波纹效果"
                    code={this.getCode()}
                    frameUrl="#/components/ripple"
                    description="水波纹效果。"
                />
            </Content>
        );
    }
}
