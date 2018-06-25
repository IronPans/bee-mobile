import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface PaperApiProps extends BaseProps {
}

export default class PaperApi extends React.PureComponent<PaperApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-PaperApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Paper from '../components/Paper';
import {Content} from '../components/Page';

interface PaperCaseProps extends BaseProps {
}

export default class PaperCase extends React.PureComponent< PaperCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'PaperCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Paper depth={5} className="padding-10">
                        <h3 className="no-margin">
                            This is a sheet of paper.
                        </h3>
                        Paper can be used to build surface or other elements for your application.
                    </Paper>
                    <Paper depth={24} className="padding-10">
                        <h3 className="no-margin">
                            This is a sheet of paper.
                        </h3>
                        Paper can be used to build surface or other elements for your application.
                    </Paper>
                </div>
            </Content>
        );
    }
}`;
    }

    getFields() {
        return [{
            field: 'attr',
            header: '属性',
        }, {
            field: 'desc',
            header: '说明',
        }, {
            field: 'type',
            header: '类型',
        }, {
            field: 'default',
            header: '默认值',
        }];
    }

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
            'ApiContent',
        );
        const data = [{
            name: 'Paper',
            fields: this.getFields(),
            attributes: [{
                attr: 'depth',
                desc: '阴影深度',
                type: 'Number',
                default: '1',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Paper"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/paper"
                    description="带阴影的面板。"
                />
            </Content>
        );
    }
}
