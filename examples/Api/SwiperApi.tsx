import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface SwiperApiProps extends BaseProps {
}

export default class SwiperApi extends React.PureComponent<SwiperApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-SwiperApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Swiper from '../components/Swiper';
import {Content} from '../components/Page';

interface SwiperCaseProps extends BaseProps {
}

export default class SwiperCase extends React.PureComponent< SwiperCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'SwiperCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <section className="CasePanel">
                    <Swiper navigation={true}>
                        <div className="box blue">Slide1</div>
                        <div className="box red">Slide2</div>
                        <div className="box yellow">Slide3</div>
                        <div className="box green">Slide4</div>
                    </Swiper>
                </section>
                <section className="CasePanel">
                    <Swiper spaceBetween={10} loop={true} slideWidth={0.8} centerMode={true}>
                        <div className="box blue">Slide1</div>
                        <div className="box red">Slide2</div>
                        <div className="box yellow">Slide3</div>
                        <div className="box green">Slide4</div>
                    </Swiper>
                </section>
                <section className="CasePanel">
                    <Swiper loop={true} autoplay={true}>
                        <div className="box blue">Slide1</div>
                        <div className="box red">Slide2</div>
                        <div className="box yellow">Slide3</div>
                        <div className="box green">Slide4</div>
                    </Swiper>
                </section>
                <section className="CasePanel">
                    <Swiper loop={true} direction="vertical">
                        <div className="box blue">Slide1</div>
                        <div className="box red">Slide2</div>
                        <div className="box yellow">Slide3</div>
                        <div className="box green">Slide4</div>
                    </Swiper>
                </section>
                <section className="CasePanel">
                    <Swiper loop={true} effect="fade">
                        <div className="box blue">Slide1</div>
                        <div className="box red">Slide2</div>
                        <div className="box yellow">Slide3</div>
                        <div className="box green">Slide4</div>
                    </Swiper>
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
            name: 'Swiper',
            fields: this.getFields(),
            attributes: [{
                attr: 'activeIndex',
                desc: '初始显示的轮播图的索引',
                type: 'number',
                default: '-',
            }, {
                attr: 'autoplayDisableOnInteraction',
                desc: '展示的数字值',
                type: 'number',
                default: '-',
            }, {
                attr: 'autoplay',
                desc: '是否自动切换',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'centerMode',
                desc: '开启居中模式',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'delay',
                desc: '自动切换的时间间隔，单位ms',
                type: 'Number',
                default: '3000',
            }, {
                attr: 'direction',
                desc: '滑动方向，可设置水平(horizontal)或垂直(vertical)',
                type: 'String',
                default: 'horizontal',
            }, {
                attr: 'easing',
                desc: '切换过渡效果',
                type: 'String',
                default: 'ease',
            }, {
                attr: 'effect',
                desc: '切换动画效果。可选值：slide | fade',
                type: 'String',
                default: 'slide',
            }, {
                attr: 'initialSlide',
                desc: '设定初始化时slide的索引',
                type: 'Number',
                default: '0',
            }, {
                attr: 'loop',
                desc: '开启loop模式',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'navigation',
                desc: '使用前进后退按钮。',
                type: 'Object',
                default: ` navigation: {
                nextEl: '.Swiper-next',
                prevEl: '.Swiper-prev',
                }`,
            }, {
                attr: 'pagination',
                desc: '使用分页导航。',
                type: 'Boolean',
                default: 'true',
            }, {
                attr: 'paginationClickable',
                desc: '分页器是否可点击',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'slideWidth',
                desc: '设置轮播图的宽度',
                type: 'Number',
                default: '-',
            }, {
                attr: 'slideHeight',
                desc: '设置轮播图的高度',
                type: 'Number',
                default: '-',
            }, {
                attr: 'spaceBetween',
                desc: '轮播图之间的间距',
                type: 'Number',
                default: '0',
            }, {
                attr: 'speed',
                desc: '切换速度',
                type: 'Number',
                default: '300',
            }, {
                attr: 'updateOnImagesReady',
                desc: '展示的数字值',
                type: 'number',
                default: '-',
            }, {
                attr: 'on',
                desc: '回调函数',
                type: 'Object',
                default: `{\n' +
                '        init?: Function;\n' +
                '        imagesReady?: Function;\n' +
                '        slideChange?: Function;\n' +
                '        transitionStart?: Function;\n' +
                '        transitionEnd?: Function;\n' +
                '    }`,
            }, {
                attr: 'touch',
                desc: '设置是否可拖动',
                type: 'Boolean',
                default: 'true',
            }, {
                attr: 'observe',
                desc: `启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。默认false，不开启`,
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'observeParents',
                desc: '将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。',
                type: 'Boolean',
                default: 'false',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Swiper 轮播图"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/swiper"
                    description="轮播图，可自定义轮播时间间隔、动画时长等。(注：目前不支持嵌套)"
                />
            </Content>
        );
    }
}
