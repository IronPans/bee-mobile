import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import SearchBar from '../../src/components/SearchBar';
import {Content} from '../../src/components/Page';

interface SearchBarCaseProps extends BaseProps {
}

export default class SearchBarCase extends React.PureComponent<SearchBarCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'SearchBarCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <section className="CasePanel">
                    <SearchBar/>
                </section>
            </Content>
        );
    }
}
