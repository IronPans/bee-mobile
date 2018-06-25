import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface ImageViewApiProps extends BaseProps {
}

export default class ImageViewApi extends React.PureComponent<ImageViewApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-ImageViewApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import ImageView from '../components/ImageView';
import Button from '../components/Button';
import {Content} from '../components/Page';

interface ImageViewCaseProps extends BaseProps {
}

export default class ImageViewCase extends React.PureComponent< ImageViewCaseProps, any> {
    state = {
        visible: false
    };

    viewNode: any;

    getRef = (node: any) => {
        this.viewNode = node;
    };

    open = () => {
        this.setState({
            visible: true
        });
    };

    handleClose = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        const images = [
            {
                src: 'assets/images/lists/image1.jpg'
            }, {
                src: 'assets/images/lists/image2.jpg'
            }
        ];
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'ImageViewCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <section className="CasePanel" ref={this.getRef}>
                    <Button onClick={this.open}>查看图片</Button>
                    {
                        images.map((img: any, index: number) => {
                            return <img src={img.src} key={index}/>;
                        })
                    }
                </section>
                <ImageView visible={this.state.visible!} target={this.viewNode}
                           onClose={this.handleClose}/>
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
            name: 'ImageView',
            fields: this.getFields(),
            attributes: [{
                attr: 'target',
                desc: '设置需要获取图片的容器',
                type: 'React.ReactNode',
                default: 'document.body',
            }, {
                attr: 'visible',
                desc: '是否显示',
                type: 'Boolean',
                default: 'false',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="ImageView 图片浏览器"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/imageView"
                    description="可自动获取一个容器里的所有图片来浏览。"
                />
            </Content>
        );
    }
}
