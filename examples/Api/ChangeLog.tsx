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
                       <TimelineItem title={<h3>0.1.5 <span className="title-label">2018-05-12</span></h3>}>
                           <h4>Features</h4>
                           <ul>
                               <li>
                                   优化Button、Accordion样式
                               </li>
                           </ul>
                       </TimelineItem>
                       <TimelineItem title={<h3>0.1.4 <span className="title-label">2018-04-30</span></h3>}>
                           <h4>Bug Fixes</h4>
                           <ul>
                               <li>
                                   修复<NavLink to="/docs/swiper">Swiper</NavLink>无法拖动
                               </li>
                               <li>
                                   <NavLink to="/docs/infiniteScroll">InfiniteScroll</NavLink>属性onScroll修改为onContentScroll，修复添加onScroll导致无限滚动无效。
                               </li>
                               <li>
                                   修复因使用rem(根元素font-size不一致)时，导致字体大小错乱的问题
                               </li>
                               <li>
                                   修复找不到<NavLink to="/docs/indexList">IndexList、IndexSection</NavLink>组件
                               </li>
                           </ul>
                           <h4>Features</h4>
                           <ul>
                               <li>
                                   新增<NavLink to="/docs/cellSwipe">CellSwipe</NavLink>组件
                               </li>
                               <li>
                                   <NavLink to="/docs/spin">Spin</NavLink>新增height、width属性，用于控制Spin的大小
                               </li>
                               <li>
                                   <NavLink to="/docs/spin">Spin</NavLink>默认颜色调整为#424242
                               </li>
                               <li>
                                   <NavLink to="/docs/buttonNavigation">ButtonNavigation</NavLink>可设置为负数或大于子元素个数，表示都不选中
                               </li>
                           </ul>
                           <h4>Documents</h4>
                           <ul>
                               <li>修正文档中主题的scss引用路径问题</li>
                           </ul>
                       </TimelineItem>
                       <TimelineItem title={<h3>0.1.3 <span className="title-label">2018-04-21</span></h3>}>
                           <h4>Bug Fixes</h4>
                           <ul>
                               <li>
                                   修复<NavLink to="/docs/inputNumber">InputNumber</NavLink>给value赋值时无效
                               </li>
                               <li>
                                   修复当隐藏<NavLink to="/docs/swiper">Swiper</NavLink>，然后显示时，Swiper失效
                               </li>
                               <li>
                                   修复<NavLink to="/docs/button">Button</NavLink>里放置a、NavLink时，无法点击
                               </li>
                           </ul>
                           <h4>Features</h4>
                           <ul>
                               <li>
                                   <NavLink to="/docs/rate">Rate</NavLink>默认颜色调整为#ffa726
                               </li>
                               <li>
                                   新增<NavLink to="/docs/segment">Segment</NavLink>分段器
                               </li>
                               <li>
                                   <NavLink to="/docs/swiper">Swiper</NavLink>新增observe、observeParents属性，用于启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
                               </li>
                               <li>
                                   优化Checkbox、Radio、Badge、List、ButtonNavigation的样式
                               </li>
                           </ul>
                       </TimelineItem>
                       <TimelineItem title={<h3>0.1.2 <span className="title-label">2018-04-16</span></h3>}>
                           <h4>Bug Fixes</h4>
                           <ul>
                               <li>
                                   修复<NavLink to="/docs/swiper">Swiper</NavLink>当effect为"fade"时，出现空白闪烁
                               </li>
                               <li>
                                   修复在<NavLink to="/docs/tabs">Tabs</NavLink>中使用Swiper时，Swiper会失控
                               </li>
                               <li>
                                   修复<NavLink to="/docs/searchBar">SearchBar</NavLink>样式冲突
                               </li>
                           </ul>
                           <h4>Features</h4>
                           <ul>
                               <li>
                                   <NavLink to="/docs/tabs">Tabs</NavLink>新增animated属性，用于控制是否开启动画
                               </li>
                               <li>
                                   优化样式
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
                   </Timeline>
               </div>
            </Content>
        );
    }
}