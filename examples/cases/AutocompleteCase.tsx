import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Autocomplete from '../../src/components/Autocomplete';
import {Content} from '../../src/components/Page';

interface AutocompleteCaseProps extends BaseProps {
}

export default class AutocompleteCase extends React.PureComponent<AutocompleteCaseProps, any> {
    render() {
        const suggestions = [
            { label: 'Afghanistan' },
            { label: 'Aland Islands' },
            { label: 'Albania' },
            { label: 'Algeria' },
            { label: 'American Samoa' },
            { label: 'Andorra' },
            { label: 'Angola' },
            { label: 'Anguilla' },
            { label: 'Antarctica' },
            { label: 'Antigua and Barbuda' },
            { label: 'Argentina' },
            { label: 'Armenia' },
            { label: 'Aruba' },
            { label: 'Australia' },
            { label: 'Austria' },
            { label: 'Azerbaijan' },
            { label: 'Bahamas' },
            { label: 'Bahrain' },
            { label: 'Bangladesh' },
            { label: 'Barbados' },
            { label: 'Belarus' },
            { label: 'Belgium' },
            { label: 'Belize' },
            { label: 'Benin' },
            { label: 'Bermuda' },
            { label: 'Bhutan' },
            { label: 'Bolivia, Plurinational State of' },
            { label: 'Bonaire, Sint Eustatius and Saba' },
            { label: 'Bosnia and Herzegovina' },
            { label: 'Botswana' },
            { label: 'Bouvet Island' },
            { label: 'Brazil' },
            { label: 'British Indian Ocean Territory' },
            { label: 'Brunei Darussalam' },
        ];
        const {className} = this.props;
        const styleClass = classNames(
            'AutocompleteCase',
            className,
        );
        return (
            <Content className={styleClass}>
                <section className="CasePanel">
                    <Autocomplete maxHeight="300px" count={-1} data={suggestions}/>
                </section>
            </Content>
        );
    }
}
