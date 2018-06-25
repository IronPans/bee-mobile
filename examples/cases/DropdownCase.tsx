import * as React from 'react';
import * as classNames from 'classnames';
import Button from '../../src/components/Button';
import Dropdown from '../../src/components/Dropdown';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';

interface DropdownCaseProps extends BaseProps {
}

export default class DropdownCase extends React.PureComponent<DropdownCaseProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-DropdownCase',
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        const data = [
            {
                title: 'Home',
            },
            {
                title: 'Page',
            },
        ];
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Dropdown data={data}>
                        <Button>Dropdown</Button>
                    </Dropdown>
                </div>
            </Content>
        );
    }
}
