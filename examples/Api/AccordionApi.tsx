import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface AccordionApiProps extends BaseProps {
}

export default class AccordionApi extends React.PureComponent<AccordionApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-AccordionApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import Accordion, { AccordionGroup } from '../components/Accordion';
import {BaseProps} from '../components/common/BaseProps';
import {Content} from '../components/Page';

interface AccordionCaseProps extends BaseProps {}

export default class AccordionCase extends React.PureComponent< AccordionCaseProps, {}> {

    handleChange = (index: number) => {
        console.log(index);
    };

    render() {
        const { className } = this.props;
        const styleClass = classNames(
            'AccordionCase',
            className
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <AccordionGroup className="bm-paper-2dp">
                        <Accordion header="Accordion1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                        </Accordion>
                        <Accordion header="Accordion1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                        </Accordion>
                    </AccordionGroup>
                </div>
                <div className="CasePanel">
                    <AccordionGroup closeOthers={true} onChange={this.handleChange} className="bm-paper-2dp">
                        <Accordion header="Accordion1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Accordion>
                        <Accordion header="Accordion1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Accordion>
                    </AccordionGroup>
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
            name: 'AccordionGroup',
            fields: this.getFields(),
            attributes: [{
                attr: 'activeIndex',
                desc: '当前激活 tab 面板的index',
                type: 'number',
                default: '无',
            }, {
                attr: 'closeOthers',
                desc: '是否开启收风琴模式',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'onChange',
                desc: '面板切换的回调',
                type: '(index: number): void',
                default: 'noop',
            }],
        }, {
            name: 'Accordion',
            fields: this.getFields(),
            attributes: [{
                attr: 'header',
                desc: '面板头内容',
                type: 'React.Element or String',
                default: '无',
            }, {
                attr: 'disabled',
                desc: '是否禁用',
                type: 'Boolean',
                default: false,
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    data={data}
                    app="适用平台：WEB"
                    title="Accordion 折叠面板"
                    code={this.getCode()}
                    frameUrl="#/components/accordion"
                    description="折叠面板能有效地节省页面的可视面积。"
                />
            </Content>
        );
    }
}
