import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import IndexList, {IndexSection} from '../../src/components/IndexList';

interface IndexListCaseProps extends BaseProps {
}

export default class IndexListCase extends React.Component<IndexListCaseProps, any> {
    static defaultProps: IndexListCaseProps = {
        prefixCls: 'bm-IndexListCase',
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        return (
            <Content className={styleClass}>
                <IndexList>
                    <IndexSection index="A">
                        <span>a</span>
                        <span>a</span>
                        <span>a</span>
                    </IndexSection>
                    <IndexSection index="B">
                        <span>b</span>
                        <span>a</span>
                        <span>a</span>
                        <span>a</span>
                    </IndexSection>
                    <IndexSection index="C">
                        <span>b</span>
                        <span>a</span>
                        <span>a</span>
                        <span>a</span>
                    </IndexSection>
                    <IndexSection index="D">
                        <span>b</span>
                        <span>a</span>
                        <span>a</span>
                        <span>a</span>
                    </IndexSection>
                    <IndexSection index="E">
                        <span>b</span>
                        <span>a</span>
                        <span>a</span>
                        <span>a</span>
                    </IndexSection>
                </IndexList>
            </Content>
        );
    }
}
