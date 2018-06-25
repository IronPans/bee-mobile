import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Breadcrumb from '../../src/components/Breadcrumb';
import {Content} from '../../src/components/Page';
import Icon from '../../src/components/Icon';

interface BreadcrumbCaseProps extends BaseProps {
}

export default class BreadcrumbCase extends React.Component<BreadcrumbCaseProps, {}> {
    static defaultProps: BreadcrumbCaseProps = {
        prefixCls: 'fy-BreadcrumbCase',
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
        );
        const menus = [
            {name: 'Homepage', icon: (<Icon icon="home"/>)},
            {name: 'item 1'},
            {name: 'item 2'},
        ];
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Breadcrumb menus={menus}/>
                </div>
                <div className="CasePanel">
                    <Breadcrumb menus={menus} separator="|"/>
                </div>
            </Content>
        );
    }
}
