import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Slider from '../../src/components/Slider';
import {Content} from '../../src/components/Page';

interface SliderCaseProps extends BaseProps {
}

export default class SliderCase extends React.PureComponent<SliderCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'SliderCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <section className="padding-20">
                    <Slider start="0" end="100"/>
                    <Slider className="padding-20" value={50} disabled={true}/>
                </section>
            </Content>
        );
    }
}
