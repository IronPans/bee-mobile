import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import PhoneView from './PhoneView';
import HighlightCode from '../../src/components/HighlightCode';
import CodeView from './CodeView';
import Table, {TableColumn} from '../../src/components/Table';

interface PageViewProps extends BaseProps {
    app?: React.ReactElement<any> | string;
    code?: string;
    data?: Array<any>;
    description?: React.ReactNode;
    frameUrl?: string;
    lang?: string;
    title?: React.ReactNode;
}

export default class PageView extends React.PureComponent<PageViewProps, {}> {
    static defaultProps = {
        data: [],
        lang: 'typescript',
        prefixCls: 'bm-PageView',
    };

    createTable(list: any, index: number) {
        return (
            <div key={index}>
                <h3>{list.name}</h3>
                <Table className="bm-Paper-2dp" value={list.attributes}>
                    {
                        list.fields.map((row: any, i: number) => {
                            return (
                                <TableColumn
                                    key={i}
                                    field={row.field}
                                    header={row.header}
                                    template={(data: any) => {
                                        return data[row.field];
                                    }}
                                />
                            );
                        })
                    }
                </Table>
            </div>);
    }

    render() {
        const {
            app, data, code, className, description,
            frameUrl, lang, prefixCls, title,
        }: any = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        return (
            <div className={styleClass}>
                <div className="padding-20 no-padding-bottom Row justify-space-between">
                    <div className="ApiBox">
                        <h1>{title}</h1>
                        <p className="ApiBox-desc">{description}</p>
                        <section className="ApiBox-wrapper">
                            <h3>代码演示</h3>
                            <CodeView
                                title="基本"
                                code={(
                                    <div>
                                        <HighlightCode showCopy={true} lang={lang}>{code}</HighlightCode>
                                    </div>
                                )}
                                html={(
                                    <div className="ApiBox-code">
                                        <HighlightCode showCopy={true} lang={lang}>{code}</HighlightCode>
                                    </div>
                                )}
                            />
                        </section>
                    </div>
                    <PhoneView frameUrl={frameUrl}/>
                </div>
                <div className="padding-20 ApiBox-table">
                    <h3>API</h3>
                    <p>{app}</p>
                    {
                        data.map((list: any, index: number) => {
                            return this.createTable(list, index);
                        })
                    }
                </div>
            </div>
        );
    }
}
