import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Button from '../../src/components/Button';
import Indicator from '../../src/components/Indicator';
import {Content} from '../../src/components/Page';

interface IndicatorCaseProps extends BaseProps {
}

interface IndicatorCaseState {
    visible: boolean;
}

export default class IndicatorCase extends React.PureComponent<IndicatorCaseProps, IndicatorCaseState> {
    state: IndicatorCaseState = {
        visible: false,
    };

    openIndicator = () => {
        Indicator.show();
    }

    openSpinner = () => {
        Indicator.show({type: 'circleLine'});
    }

    openIndicatorWithText = () => {
        Indicator.show({message: '加载中...'});
    }

    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'IndicatorCase',
            className,
        );
        return (
            <Content className={styleClass}>
                <section className="CasePanel">
                    <Button block={true} onClick={this.openIndicator}>点击弹出 Indicator</Button>
                    <Button block={true} onClick={this.openSpinner}>可配置的 spinner</Button>
                    <Button block={true} onClick={this.openIndicatorWithText}>点击弹出带有文字的 Indicator</Button>
                </section>
            </Content>
        );
    }
}
