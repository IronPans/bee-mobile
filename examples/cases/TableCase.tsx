import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Table, {TableColumn} from '../../src/components/Table';
import {Content} from '../../src/components/Page';

interface TableCaseProps extends BaseProps {
}

export default class TableCase extends React.PureComponent<TableCaseProps, any> {
    persons: any[];

    constructor(props: TableCaseProps) {
        super(props);
        this.persons = [
            {
                name: 'Tom',
                age: 20,
                address: 'beijing',
            }, {
                name: 'Tom Green',
                age: 25,
                address: 'shanghai',
            }, {
                name: 'Tom Brown',
                age: 30,
                address: 'guangdong',
            },
        ];
    }

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'TableCase',
            className,
        );
        return (
            <Content className={styleClass} {...other}>
                <section className="CasePanel">
                    <Table className="bm-Paper-2dp" value={this.persons}>
                        <TableColumn
                            field="name"
                            header="name"
                            template={(data: any) => {
                                return (<a>{data.name}</a>);
                            }}
                        />
                        <TableColumn field="age" header="age" sort={true}/>
                        <TableColumn field="address" header="address" sort={true}/>
                    </Table>
                    <Table className="bm-Paper-2dp margin-top-20" value={this.persons} selectionMode="multiple">
                        <TableColumn
                            field="name"
                            header="name"
                            template={(data: any) => {
                                return (<a>{data.name}</a>);
                            }}
                        />
                        <TableColumn field="age" header="age" sort={true}/>
                        <TableColumn field="address" header="address" sort={true}/>
                    </Table>
                </section>
            </Content>
        );
    }
}
