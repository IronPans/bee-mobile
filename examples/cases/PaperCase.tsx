import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import Paper from '../../src/components/Paper';
import {Content} from '../../src/components/Page';

interface PaperCaseProps extends BaseProps {
}

export default class PaperCase extends React.PureComponent<PaperCaseProps, any> {
    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'PaperCase',
            className,
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
}
