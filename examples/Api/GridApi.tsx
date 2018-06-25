import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface GridApiProps extends BaseProps {
}

export default class GridApi extends React.PureComponent<GridApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-GridApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Row, {Col} from '../components/Grid';
import {Content} from '../components/Page';

interface GridCaseProps extends BaseProps {
}

export default class GridCase extends React.PureComponent< GridCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'GridCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <section className="CasePanel">
                    <Row>
                        <Col span={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                        <Col span={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                        <Col span={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                        <Col span={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                        <Col span={6}>
                            <div className="Grid-box">6</div>
                        </Col>
                        <Col span={6}>
                            <div className="Grid-box">6</div>
                        </Col>
                    </Row>
                </section>
                <section className="CasePanel">
                    <Row spacing={16}>
                        <Col span={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                        <Col span={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                        <Col span={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                        <Col span={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                    </Row>
                </section>
                <section className="CasePanel">
                    <Row spacing={16}>
                        <Col span={3} offset={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                        <Col span={3} offset={3}>
                            <div className="Grid-box">3</div>
                        </Col>
                    </Row>
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
            name: 'Row',
            fields: this.getFields(),
            attributes: [{
                attr: 'align',
                desc: '垂直对齐方式。可选值：top | middle | bottom',
                type: 'String',
                default: '-',
            }, {
                attr: 'spacing',
                desc: '内边距，类似padding',
                type: 'Number',
                default: '-',
            }, {
                attr: 'justify',
                desc: '水平对齐方式。可选值：start | center | end | space-between | space-around',
                type: 'String',
                default: '-',
            }],
        }, {
            name: 'Col',
            fields: this.getFields(),
            attributes: [{
                attr: 'span',
                desc: '占格',
                type: 'Number',
                default: '-',
            }, {
                attr: 'order',
                desc: '排序优先级',
                type: 'Number',
                default: '-',
            }, {
                attr: 'offset',
                desc: '偏移量',
                type: 'Number',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Gird 网格系统"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/grid"
                    description="网格系统提供了一套响应式的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。"
                />
            </Content>
        );
    }
}
