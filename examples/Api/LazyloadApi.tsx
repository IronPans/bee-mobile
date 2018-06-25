import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface LazyloadApiProps extends BaseProps {
}

export default class LazyloadApi extends React.PureComponent<LazyloadApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-LazyloadApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import LazyLoad from '../../src/components/LazyLoad';

interface LazyLoadCaseProps extends BaseProps {
}

export default class LazyLoadCase extends React.PureComponent< LazyLoadCaseProps, {}> {
    static defaultProps: LazyLoadCaseProps = {
        prefixCls: 'bm-LazyLoadCase'
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className
        );
        return (
            <Content className={styleClass}>
                <LazyLoad height={200}>
                    <img src="assets/images/lists/image1.jpg" style={{width: '100%'}} alt=""/>
                </LazyLoad>
                <div className="padding-10">
                    Bee Mobile，为移动而生的的React组件库。经过近百个日夜的不懈努力，发布的时机终于到来！
                    无论它最后能走多远，都无怨无悔。至少我曾倾注心血，未来更会投入更多！
                </div>
                <LazyLoad height={200}>
                    <img src="assets/images/lists/image2.jpg" style={{width: '100%'}} alt=""/>
                </LazyLoad>
                <div className="padding-10">
                    Bee Mobile，为移动而生的的React组件库。经过近百个日夜的不懈努力，发布的时机终于到来！
                    无论它最后能走多远，都无怨无悔。至少我曾倾注心血，未来更会投入更多！
                </div>
                <LazyLoad height={200}>
                    <img src="assets/images/lists/image3.jpg" style={{width: '100%'}} alt=""/>
                </LazyLoad>
                <LazyLoad height={200}>
                    <img src="assets/images/lists/image4.jpg" style={{width: '100%'}} alt=""/>
                </LazyLoad>
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
            name: 'LazyLoad',
            fields: this.getFields(),
            attributes: [{
                attr: 'debounce',
                desc: '开启去抖动函数.',
                type: 'Number',
                default: '300',
            }, {
                attr: 'height',
                desc: '设置高度。推荐使用。',
                type: 'Number',
                default: '-',
            }, {
                attr: 'placeholder',
                desc: '展示的数字值',
                type: 'number',
                default: '-',
            }, {
                attr: 'scrollNode',
                desc: '设置滚动对象。',
                type: 'React.ReactNode',
                default: 'document.body',
            }, {
                attr: 'throttle',
                desc: '可防止scroll事件持续发生时的性能问题',
                type: 'Number',
                default: '300',
            }, {
                attr: 'width',
                desc: '设置宽度',
                type: 'Number',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="LazyLoad 懒加载"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/lazyload"
                    description="可以延迟加载长页面中的图片。"
                />
            </Content>
        );
    }
}
