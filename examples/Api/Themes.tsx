import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import HighlightCode from '../../src/components/HighlightCode';

interface ThemesProps extends BaseProps {
}

export default class Themes extends React.PureComponent<ThemesProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-Themes'
    };

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className
        );
        const varCode = `$defaultColor: rgba(0, 0, 0, .87);

$primary: #2196f3;
$info: #00bcd4;
$success: #26a69a;
$warning: #ffa726;
$error: #f44336;
$dark: #424242;

$theme: (
        primary: $primary,
        info: $info,
        success: $success,
        warning: $warning,
        error: $error
);

$NavBarHeight: 56px;

$fontFamily: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
$borderColor: rgba(0,0,0,.12);

// Badge
$badgeColor: rgba(0, 0, 0, 0.65);
$badgeCountColor: #fff;
$badgeCountBg: $error;

// Accordion

$accordionHeaderBg: #fff;
$accordionHeaderColor: #737373;
$accordionHeaderBorder: $borderColor;
$accordionHeaderActiveColor: #222;

// ButtonNavigation
$buttonNavigationBg: #fff;
$buttonNavigationColor: rgba(0, 0, 0, 0.54);
$buttonNavigationActiveColor: $primary;

// Card
$cardBg: #fff;

// Checkbox
$checkboxUnCheckedColor: rgba(0, 0, 0, 0.54);
$checkboxCheckedColor: $primary;
$checkboxColor: rgba(0,0,0,.87);
$checkboxDisabledColor: rgba(0, 0, 0, 0.26);

// FabButton
$fabButtonBg: $primary;
$fabButtonColor: #fff;

// Input
$inputColor: rgba(0, 0, 0, .87);
$inputPlaceHolderColor: rgba(0,0,0,.54);
$inputDisabledColor: rgba(0,0,0,.38);
$inputFocusBorderColor: $primary;
$inputBorderColor: #e9e9e9;
$inputBtnColor: #666;
$inputBtnDisabledColor: #999;

// KeyBoard
$keyBoardBg: #F7F7F7;
$keyBoardColor: #1F2324;
$keyBoardGridBg: #FFF;
$keyBoardDotColor: #666;
$keyBoardBorderColor: #D9D9D9;

// Knob
$knobBg: #fff;
$knobPathColor: $primary;
$knobTrailColor: #eee;

// List
$listBg: #fff;
$listBorderColor: $borderColor;
$listIconColor: rgba(0, 0, 0, 0.54);

// NavBar
$navBarColor: rgba(255, 255, 255, 1);
$navBarBg: $primary;

// Pagination
$paginationColor: rgba(0, 0, 0, 0.65);
$paginationBg: #fff;
$paginationActiveColor: #fff;
$paginationActiveBg: $primary;
$paginationEllipsisColor: rgba(0, 0, 0, 0.25);

// Progress
$progressTrackColor: rgb(189, 189, 189);
$progressActive: $primary;

// Radio
$radioUnCheckedColor: rgba(0, 0, 0, 0.54);
$radioCheckedColor: $primary;
$radioColor: rgba(0,0,0,.87);
$radioDisabledColor: rgba(0, 0, 0, 0.26);

// Rate
$rateColor: #e8e8e8;
$rateActiveColor: $primary;

// Slider
$sliderColor: #a9acb1;
$sliderKnobColor: #fff;
$sliderActiveColor: $primary;

// Spin
$spinColor: $primary;

// Swiper
$swiperBulletColor: #fff;

// Switch
$switchBg: #fff;
$switchColor: #e6e6e6;
$switchActiveColor: $primary;

// Tabs
$tabsBg: #fff;
$tabsBorderColor: #ddd;
$tabsActiveColor: $primary;

// Timeline

$timelineColor: #9e9e9e;
$timelineLineColor: #E2E2E2;
$timelineCircleColor: #2185d0;

// Tree
$treeActiveColor: $primary;`;
        const css = `@import "custom-theme";
// bee-mobile 组件样式库        
@import "~/bee-mobile/lib/scss/bee-mobile";`;
        return (
            <Content className={styleClass}>
                <div className="padding-20">
                    <h1 className="title">自定义主题</h1>
                    <p>
                        通过<code className="code-inline">webpack</code>工具可以实现自定义主题样式。
                    </p>
                    <h2>样式变量</h2>
                    <p>
                        <span className="text-bold">bee-mobile</span>的样式使用了<code className="code-inline">Sass</code> 作为开发语言，并定义了一系列组件的样式变量，你可以根据需求进行相应调整。</p>
                    <div>
                        <HighlightCode>{varCode}</HighlightCode>
                    </div>

                    <h2>如何覆盖？</h2>
                    <p>建立一个单独的 Sass 文件如下，再引入这个文件。</p>
                    <div>
                        <HighlightCode>{css}</HighlightCode>
                    </div>
                </div>
            </Content>
        );
    }
}