import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import ImageView from '../../src/components/ImageView';
import Button from '../../src/components/Button';
import {Content} from '../../src/components/Page';

interface ImageViewCaseProps extends BaseProps {
}

export default class ImageViewCase extends React.PureComponent<ImageViewCaseProps, any> {
    state = {
        visible: false,
    };

    viewNode: any;

    getRef = (node: any) => {
        this.viewNode = node;
    }

    open = () => {
        this.setState({
            visible: true,
        });
    }

    handleClose = () => {
        this.setState({
            visible: false,
        });
    }

    render() {
        const images = [
            {
                src: 'assets/images/lists/image1.jpg',
            }, {
                src: 'assets/images/lists/image2.jpg',
            },
        ];
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'ImageViewCase',
            className,
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
                <ImageView
                    visible={this.state.visible!}
                    target={this.viewNode}
                    onClose={this.handleClose}
                />
            </Content>
        );
    }
}
