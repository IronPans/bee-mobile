import * as React from 'react';
import * as classNames from 'classnames';
import Accordion, { AccordionGroup } from '../../src/components/Accordion';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';

interface AccordionCaseProps extends BaseProps {}

export default class AccordionCase extends React.PureComponent<AccordionCaseProps, {}> {

    handleChange = (index: number) => {
        const ev = index;
    }

    render() {
        const { className } = this.props;
        const styleClass = classNames(
            'AccordionCase',
            className,
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
}
