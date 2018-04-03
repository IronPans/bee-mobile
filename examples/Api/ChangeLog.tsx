import * as React from 'react';
import * as classNames from 'classnames';
import {NavLink} from 'react-router-dom';
import {BaseProps} from '../../src/components/common/BaseProps';
import Timeline, {TimelineItem} from "../../src/components/Timeline";
import {Content} from "../../src/components/Page";

interface ChangeLogProps extends BaseProps {
}

export default class ChangeLog extends React.PureComponent<ChangeLogProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-ChangeLog'
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className
        );
        return (
            <Content className={styleClass}>
               <div className="padding-20">
                   <h2>更新日志</h2>
                   <p>bee-mobile 严格遵循 <a href="https://semver.org/lang/zh-CN/">Semantic Versioning 2.0.0</a> 语义化版本规范。</p>
                   <p>发布周期</p>
                   <ul>
                       <li>版本更新：每周末会进行日常 bug修复。（如果有重大 bug，则任何时候都可发布）</li>
                       <li>主版本号：每月发布一个带有新特性的向下兼容的版本。</li>
                   </ul>
                   <Timeline>
                       <TimelineItem title={<h3>0.1.0 <span className="title-label">2018-03-10</span></h3>}>
                           <ul>
                               <li>
                                   发布第一个公开版本<img className="emoji" alt="tada" height="20" width="20" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f389.png"/>，包含 icon、button、checkbox、radio、switch、slider、input-number、datepicker、select、tabs、breadcrumb、collapse、pagination、modal、message、popover、progress 等组件。
                               </li>
                               <li>
                                   发布 <a href="https://bee-mobiles.github.io">Bee Mobile 首页</a> 和入门文档。
                               </li>
                           </ul>
                       </TimelineItem>
                       <TimelineItem title={<h3>0.1.1 <span className="title-label">2018-04-03</span></h3>}>
                           <h4>Bug Fixes</h4>
                           <ul>
                               <li>
                                   修复找不到<NavLink to="/docs/indicator">Indicator</NavLink>、<NavLink to="/docs/messageBox">MessageBox</NavLink>、<NavLink to="/docs/notification">Notification</NavLink>、<NavLink to="/docs/toast">Toast</NavLink>模块。
                               </li>
                           </ul>
                           <h4>Tools</h4>
                           <ul>
                               <li>
                                   <img className="emoji" alt="tada" height="20" width="20" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f389.png"/>发布<NavLink to="/docs/create-bee-mobile">create-bee-mobile</NavLink>脚手架，可快速搭建基于Webpack构建的React项目。
                               </li>
                           </ul>
                       </TimelineItem>
                   </Timeline>
               </div>
            </Content>
        );
    }
}