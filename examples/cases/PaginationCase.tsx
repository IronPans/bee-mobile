import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Pagination from '../../src/components/Pagination';
import {Content} from '../../src/components/Page';

interface PaginationCaseProps extends BaseProps {
}

export default class PaginationCase extends React.PureComponent<PaginationCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'PaginationCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Pagination total={50} pageSize={10}/>
                </div>
                <div className="CasePanel">
                    <Pagination shape="circle" total={50} pageSize={10}/>
                </div>
            </Content>
        );
    }
}
