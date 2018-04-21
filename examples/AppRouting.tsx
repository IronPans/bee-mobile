import * as React from 'react';
import Route from 'react-router-dom/Route';
// Demo
import AccordionCase from './cases/AccordionCase';
import AvatarCase from './cases/AvatarCase';
import ButtonCase from './cases/ButtonCase';
import ListCase from './cases/ListCase';
import IconCase from './cases/IconCase';
import ModalCase from './cases/ModalCase';
import SwitchCase from './cases/SwitchCase';
import CheckboxCase from './cases/CheckboxCase';
import RadioCase from './cases/RadioCase';
import TabsCase from './cases/TabsCase';
import TooltipCase from './cases/TooltipCase';
import BadgeCase from './cases/BadgeCase';
import CardCase from './cases/CardCase';
import SpinCase from './cases/SpinCase';
import ProgressCase from './cases/ProgressCase';
import KnobCase from './cases/KnobCase';
import InputNumberCase from './cases/InputNumberCase';
import PaginationCase from './cases/PaginationCase';
import Introduce from './cases/Introduce';
import ErrorPage from './cases/ErrorPage';
import InputtextCase from './cases/InputtextCase';
import PanelCase from './cases/PanelCase';
import PaperCase from './cases/PaperCase';
import GridCase from './cases/GridCase';
import ChipCase from './cases/ChipCase';
import RateCase from './cases/RateCase';
import ToastCase from './cases/ToastCase';
import PopoverCase from './cases/PopoverCase';
import DatetimePickerCase from './cases/DatetimePickerCase';
import PickerCase from './cases/PickerCase';
import SwiperCase from './cases/SwiperCase';
import PopupCase from './cases/PopupCase';
import MessageBoxCase from './cases/MessageBoxCase';
import CalendarCase from './cases/CalendarCase';
import SearchBarCase from './cases/SearchBarCase';
import IndicatorCase from "./cases/IndicatorCase";
import SliderCase from './cases/SliderCase';
import NotificationCase from './cases/NotificationCase';
import TableCase from './cases/TableCase';
import NavBarCase from './cases/NavBarCase';
import ButtonNavigationCase from './cases/ButtonNavigationCase';
import AutocompleteCase from './cases/AutocompleteCase';
import ImageViewCase from './cases/ImageViewCase';
import PullToRefreshCase from "./cases/PullToRefreshCase";
import TimelineCase from "./cases/TimelineCase";
import LazyLoadCase from "./cases/LazyLoadCase";
import ActionSheetCase from './cases/ActionSheetCase';
import OverviewCase from './cases/OverviewCase';
import HighlightCodeCase from './cases/HighlightCodeCase';
import TreeCase from './cases/TreeCase';
import BackTopCase from './cases/BackTopCase';
import KeyBoardCase from "./cases/KeyBoardCase";
import LockerCase from "./cases/LockerCase";
import FabButtonCase from './cases/FabButtonCase';
import BreadcrumbCase from "./cases/BreadcrumbCase";
import IndexListCase from "./cases/IndexListCase";
// Utils
import {getOtherProperties} from "../src/components/common/Utils";
// API
import AccordionApi from './Api/AccordionApi';
import ActionSheetApi from "./Api/ActionSheetApi";
import AutocompleteApi from "./Api/AutocompleteApi";
import AvatarApi from "./Api/AvatarApi";
import BadgeApi from "./Api/BadgeApi";
import BreadcrumbApi from "./Api/BreadcrumbApi";
import TreeApi from "./Api/TreeApi";
import TooltipApi from "./Api/TooltipApi";
import ToastApi from "./Api/ToastApi";
import TimelineApi from "./Api/TimelineApi";
import TabsApi from "./Api/TabsApi";
import TableApi from "./Api/TableApi";
import SwiperApi from "./Api/SwiperApi";
import SwitchApi from "./Api/SwitchApi";
import SpinApi from "./Api/SpinApi";
import SliderApi from "./Api/SliderApi";
import PickerApi from "./Api/PickerApi";
import SearchBarApi from "./Api/SearchBarApi";
import RateApi from "./Api/RateApi";
import RadioApi from "./Api/RadioApi";
import ProgressApi from "./Api/ProgressApi";
import PopupApi from "./Api/PopupApi";
import PopoverApi from "./Api/PopoverApi";
import PaperApi from "./Api/PaperApi";
import PanelApi from "./Api/PanelApi";
import PaginationApi from "./Api/PaginationApi";
import NotificationApi from "./Api/NotificationApi";
import ModalApi from "./Api/ModalApi";
import MessageBoxApi from "./Api/MessageBoxApi";
import LockerApi from "./Api/LockerApi";
import ListApi from "./Api/ListApi";
import IndexListApi from "./Api/IndexListApi";
import IndicatorApi from "./Api/IndicatorApi";
import IconApi from "./Api/IconApi";
import ImageViewApi from "./Api/ImageViewApi";
import KnobApi from "./Api/KnobApi";
import HighlightCodeApi from "./Api/HighlightCodeApi";
import GridApi from "./Api/GridApi";
import CheckboxApi from "./Api/CheckboxApi";
import CardApi from "./Api/CardApi";
import CalendarApi from "./Api/CalendarApi";
import ButtonNavigationApi from "./Api/ButtonNavigationApi";
import ButtonApi from "./Api/ButtonApi";
import BackTopApi from "./Api/BackTopApi";
import ChipApi from "./Api/ChipApi";
import DatetimePickerApi from "./Api/DatetimePickerApi";
import FabButtonApi from "./Api/FabButtonApi";
import KeyboardApi from "./Api/KeyboardApi";
import InputnumberApi from "./Api/InputnumberApi";
import InputtextApi from "./Api/InputtextApi";
import LazyloadApi from "./Api/LazyloadApi";
import LoadmoreApi from "./Api/LoadmoreApi";
import NavBarApi from "./Api/NavBarApi";
import Start from './Api/Start';
import ChangeLog from './Api/ChangeLog';
import About from './Api/About';
import TextareaCase from './cases/TextareaCase';
import TextareaApi from './Api/TextareaApi';
import Themes from './Api/Themes';
import PortalApi from "./Api/PortalApi";
import TransitionApi from "./Api/TransitionApi";
import RippleApi from "./Api/RippleApi";
import RouteApi from "./Api/RouteApi";
import RippleCase from "./cases/RippleCase";
import TransitionCase from "./cases/TransitionCase";
import PortalCase from "./cases/PortalCase";
import RouteCase from "./cases/RouteCase";
import InfiniteScrollCase from "./cases/InfiniteScrollCase";
import InfiniteScrollApi from "./Api/InfiniteScrollApi";
import BeeCli from "./Api/BeeCli";
import SegmentCase from './cases/SegmentCase';
import SegmentApi from './Api/SegmentApi';

export const ROUTE_CONFIG: any = [
    { path: '/components/actionSheet', component: ActionSheetCase },
    { path: '/components/accordion', component: AccordionCase },
    { path: '/components/avatar', component: AvatarCase},
    { path: '/components/autocomplete', component: AutocompleteCase },
    { path: '/components/backTop', component: BackTopCase},
    { path: '/components/badge', component: BadgeCase},
    {path: '/components/breadcrumb', component: BreadcrumbCase},
    { path: '/components/button', component: ButtonCase},
    { path: '/components/buttonNavigation', component: ButtonNavigationCase},
    { path: '/components/calendar', component: CalendarCase },
    { path: '/components/card', component: CardCase },
    { path: '/components/checkbox', component: CheckboxCase },
    { path: '/components/chip', component: ChipCase },
    { path: '/components/datetimePicker', component: DatetimePickerCase },
    { path: '/components/fab', component: FabButtonCase },
    { path: '/components/grid', component: GridCase },
    { path: '/components/highlightCode', component: HighlightCodeCase },
    { path: '/components/keyboard', component: KeyBoardCase },
    { path: '/components/knob', component: KnobCase },
    { path: '/components/imageView', component: ImageViewCase },
    { path: '/components/icon', component: IconCase },
    { path: '/components/indicator', component: IndicatorCase },
    { path: '/components/indexList', component: IndexListCase },
    { path: '/components/inputNumber', component: InputNumberCase },
    { path: '/components/infiniteScroll', component: InfiniteScrollCase },
    { path: '/components/inputtext', component: InputtextCase },
    { path: '/components/lazyload', component: LazyLoadCase },
    { path: '/components/list', component: ListCase },
    { path: '/components/locker', component: LockerCase },
    { path: '/components/loadmore', component: PullToRefreshCase },
    { path: '/components/messageBox', component: MessageBoxCase },
    { path: '/components/modal', component: ModalCase },
    { path: '/components/notification', component: NotificationCase},
    { path: '/components/navBar', component: NavBarCase },
    { path: '/components/overview', component: OverviewCase },
    { path: '/components/pagination', component: PaginationCase },
    { path: '/components/panel', component: PanelCase },
    { path: '/components/paper', component: PaperCase },
    { path: '/components/popover', component: PopoverCase },
    { path: '/components/popup', component: PopupCase },
    { path: '/components/portal', component: PortalCase },
    { path: '/components/progress', component: ProgressCase },
    { path: '/components/radio', component: RadioCase },
    { path: '/components/rate', component: RateCase },
    { path: '/components/ripple', component: RippleCase },
    { path: '/components/route', component: RouteCase },
    { path: '/components/searchBar', component: SearchBarCase },
    { path: '/components/picker', component: PickerCase },
    { path: '/components/segment', component: SegmentCase },
    { path: '/components/slider', component: SliderCase },
    { path: '/components/spin', component: SpinCase },
    { path: '/components/switch', component: SwitchCase },
    { path: '/components/swiper', component: SwiperCase },
    { path: '/components/table', component: TableCase },
    { path: '/components/tabs', component: TabsCase },
    { path: '/components/textarea', component: TextareaCase },
    { path: '/components/timeline', component: TimelineCase },
    { path: '/components/toast', component: ToastCase },
    { path: '/components/tooltip', component: TooltipCase },
    { path: '/components/transitions', component: TransitionCase },
    { path: '/components/tree', component: TreeCase },
    {component: OverviewCase}
];

export const API_ROUTING = [
    { path: '/docs/about', component: About},
    { path: '/docs/actionSheet', component: ActionSheetApi },
    { path: '/docs/accordion', component: AccordionApi },
    { path: '/docs/avatar', component: AvatarApi},
    { path: '/docs/autocomplete', component: AutocompleteApi },
    { path: '/docs/backTop', component: BackTopApi},
    { path: '/docs/badge', component: BadgeApi},
    {path: '/docs/create-bee-mobile', component: BeeCli},
    {path: '/docs/breadcrumb', component: BreadcrumbApi},
    { path: '/docs/button', component: ButtonApi},
    { path: '/docs/buttonNavigation', component: ButtonNavigationApi},
    { path: '/docs/calendar', component: CalendarApi },
    { path: '/docs/card', component: CardApi },
    { path: '/docs/changelog', component: ChangeLog },
    { path: '/docs/checkbox', component: CheckboxApi },
    { path: '/docs/chip', component: ChipApi },
    { path: '/docs/datetimePicker', component: DatetimePickerApi },
    { path: '/docs/fab', component: FabButtonApi },
    { path: '/docs/getting-started', component: Start },
    { path: '/docs/grid', component: GridApi },
    { path: '/docs/highlightCode', component: HighlightCodeApi },
    { path: '/docs/keyboard', component: KeyboardApi },
    { path: '/docs/knob', component: KnobApi },
    { path: '/docs/imageView', component: ImageViewApi },
    { path: '/docs/icon', component: IconApi },
    { path: '/docs/indicator', component: IndicatorApi },
    { path: '/docs/indexList', component: IndexListApi },
    { path: '/docs/inputNumber', component: InputnumberApi },
    { path: '/docs/inputtext', component: InputtextApi },
    { path: '/docs/infiniteScroll', component: InfiniteScrollApi },
    { path: '/docs/introduce', component: Introduce, exact: true },
    { path: '/docs/lazyload', component: LazyloadApi },
    { path: '/docs/list', component: ListApi },
    { path: '/docs/locker', component: LockerApi },
    { path: '/docs/loadmore', component: LoadmoreApi },
    { path: '/docs/messageBox', component: MessageBoxApi },
    { path: '/docs/modal', component: ModalApi },
    { path: '/docs/notification', component: NotificationApi},
    { path: '/docs/navBar', component: NavBarApi },
    { path: '/docs/pagination', component: PaginationApi },
    { path: '/docs/panel', component: PanelApi },
    { path: '/docs/paper', component: PaperApi },
    { path: '/docs/picker', component: PickerApi },
    { path: '/docs/popover', component: PopoverApi },
    { path: '/docs/popup', component: PopupApi },
    { path: '/docs/progress', component: ProgressApi },
    { path: '/docs/portal', component: PortalApi },
    { path: '/docs/radio', component: RadioApi },
    { path: '/docs/rate', component: RateApi },
    { path: '/docs/ripple', component: RippleApi },
    { path: '/docs/route', component: RouteApi },
    { path: '/docs/searchBar', component: SearchBarApi },
    { path: '/docs/segment', component: SegmentApi },
    { path: '/docs/slider', component: SliderApi },
    { path: '/docs/spin', component: SpinApi },
    { path: '/docs/switch', component: SwitchApi },
    { path: '/docs/swiper', component: SwiperApi },
    { path: '/docs/table', component: TableApi },
    { path: '/docs/tabs', component: TabsApi },
    { path: '/docs/textarea', component: TextareaApi },
    { path: '/docs/timeline', component: TimelineApi },
    { path: '/docs/themes', component: Themes },
    { path: '/docs/toast', component: ToastApi },
    { path: '/docs/tooltip', component: TooltipApi },
    { path: '/docs/transitions', component: TransitionApi },
    { path: '/docs/tree', component: TreeApi },
    {component: Introduce}
];

export const RouteWithSubRoutes = (route: any) => (
    <Route path={route.path} exact={route.exact} render={(props: any) => (
        <route.component {...getOtherProperties(props, ['staticContext'])} routes={route.routes}/>
    )}/>
);
