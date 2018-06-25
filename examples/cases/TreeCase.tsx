import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {TREES} from '../common/Trees';
import Tree from '../../src/components/Tree';
import {Content} from '../../src/components/Page';

interface TreeCaseProps extends BaseProps {
}

export default class TreeCase extends React.PureComponent<TreeCaseProps, any> {
    render() {
        const {className} = this.props;
        const styleClass = classNames(
            'TreeCase',
            className,
        );
        return (
            <Content className={styleClass}>
                <div className="CasePanel">
                    <Tree value={TREES.data} selectionMode="single"/>
                </div>
                <div className="CasePanel">
                    <Tree value={TREES.data} selectionMode="checkbox"/>
                </div>
            </Content>
        );
    }
}
