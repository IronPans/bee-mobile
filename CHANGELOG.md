# Change Log

## 0.4.4(2018-09-23)

**Bug Fixes**

- 修复Dropdown无法添加自定义样式

## 0.4.3(2018-08-25)

**Features**

- 优化Text Field前后标签的样式

**Bug Fixes**

- 修复Tooltip无法点击的问题

## 0.4.2(2018-08-11)

**Features**

- 无障碍式优化组件样式

## 0.4.1(2018-07-28)

**Features**

- 优化Breadcrumb的样式

**Enhancement**

- 更新DatetimePicker的Api

## 0.4.0(2018-07-14)

**Features**

- 调整ActionSheet的样式
- 调整Badge使用notify的样式

**Bug Fixes**

- 修复Accordion展开时指示箭头不旋转
- 修复CellSwipe的属性to类型错误
- 修复Pagination分页样式错乱

**Tool**

- 优化create-bee-mobile脚手架打包配置
- 移除eslint代码检查，添加tslint代码检查

## 0.3.1(2018-06-25)

**Features**

- 新增Dropdown下拉菜单组件

**Bug Fixes**

- 修改BackTop的滚动元素是window时监听不到滚动事件
- 修复Grid的Col组件设置lg、md等无效

## 0.2.1(2018-06-09)

**Bug Fixes**

- 修改Picker弹出时，底层滚动问题<a href='https://github.com/IronPans/bee-mobile/issues/3'>#3</a>

**Features**

- 新增Alert警告提示组件

## 0.1.6(2018-05-26)

**Bug Fixes**

- Accordion新增name属性，用于设置自定义索引
- Spin新增color属性，用于设置颜色

**Features**

- 修复Autocomplete有值时获取焦点无法弹出下拉框

## 0.1.5(2018-05-12)

**Features**

- 优化Button、Accordion样式

## 0.1.4(2018-04-30)

**Bug Fixes**

- 修复Swiper无法拖动
- InfiniteScroll属性onScroll修改为onContentScroll，修复添加onScroll导致无限滚动无效。
- 修复因使用rem(根元素font-size不一致)时，导致字体大小错乱的问题
- 修复找不到IndexList、IndexSection组件

**Features**

- 新增CellSwipe组件
- Spin新增height、width属性，用于控制Spin的大小
- Spin默认颜色调整为#424242
- ButtonNavigation可设置为负数或大于子元素个数，表示都不选中

**Documents**

- 修正文档中主题的scss引用路径问题

## 0.1.3(2018-04-21)

**Bug Fixes**

- 修复InputNumber给value赋值时无效
- 修复当隐藏Swiper，然后显示时，Swiper失效
- 修复Button里放置a、NavLink时，无法点击

**Features**

- Rate默认颜色调整为#ffa726
- 新增Segment分段器
- Swiper新增observe、observeParents属性，用于启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
- 优化Checkbox、Radio、Badge、List、ButtonNavigation的样式

## 0.1.2(2018-04-16)

**Bug Fixes**

- 修复Swiper当effect为"fade"时，出现空白闪烁
- 修复在Tabs中使用Swiper时，Swiper会失控
- 修复SearchBar样式冲突

**Features**

- Tabs新增animated属性，用于控制是否开启动画
- 优化样式

## 0.1.1(2018-04-03)

**Bug Fixes**

- 修复找不到Indicator、MessageBox、Notification、Toast模块。
- <img className="emoji" alt="tada" height="20" width="20" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f389.png"/>发布create-bee-mobile脚手架，可快速搭建基于Webpack构建的React项目。


## 0.1.0(2018-03-30)

**Bug Fixes**

- 发布第一个公开版本，包含 icon、button、checkbox、radio、switch、slider、input-number、datepicker、select、tabs、breadcrumb、collapse、pagination、modal、message、popover、progress 等组件。
- 发布 [Bee Mobile 首页](https://bee-mobiles.github.io) 和入门文档。