import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import HighlightCode from '../../src/components/HighlightCode';

interface HighlightCodeCaseProps extends BaseProps {
}

export default class HighlightCodeCase extends React.PureComponent<HighlightCodeCaseProps, any> {
    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'HighlightCodeCase',
            className,
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <HighlightCode>
                        import &#123;ButtonModule&#125; from 'freeng/freeng';
                    </HighlightCode>
                </div>
            </Content>
        );
    }
}
