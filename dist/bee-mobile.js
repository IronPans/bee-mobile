/**
 * bee-mobile - UI Components for React
 * @author TG <ghmagical@gmail.com>
 * @version v0.1.6
 * @link https://bee-mobiles.github.io
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-motion"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-motion", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Bee"] = factory(require("react"), require("react-motion"), require("react-dom"));
	else
		root["Bee"] = factory(root["React"], root["ReactMotion"], root["ReactDOM"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_16__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
function getTouchEvent() {
    var isMobile = 'ontouchstart' in document;
    var event;
    if (isMobile) {
        event = {
            touchstart: 'touchstart',
            touchmove: 'touchmove',
            touchend: 'touchend',
            mobile: true
        };
    } else {
        event = {
            touchstart: 'mousedown',
            touchmove: 'mousemove',
            touchend: 'mouseup',
            mobile: false
        };
    }
    return event;
}
exports.getTouchEvent = getTouchEvent;
var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (m) {
    return window.setTimeout(m, 1000 / 60);
};
exports.requestAnimationFrame = requestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || function (id) {
    clearTimeout(id);
};
exports.cancelAnimationFrame = cancelAnimationFrame;
function getRect(elem) {
    return elem.getBoundingClientRect();
}
exports.getRect = getRect;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
function getOtherProperties(target, source) {
    var obj = {};
    for (var key in target) {
        if (target.hasOwnProperty(key)) {
            if (source.indexOf(key) === -1) {
                obj[key] = target[key];
            }
        }
    }
    return obj;
}
exports.getOtherProperties = getOtherProperties;
function equals(obj1, obj2, field) {
    if (field) return resolveFieldData(obj1, field) === resolveFieldData(obj2, field);else return equalsByValue(obj1, obj2);
}
exports.equals = equals;
function equalsByValue(obj1, obj2, visited) {
    if (obj1 == null && obj2 == null) {
        return true;
    }
    if (obj1 == null || obj2 == null) {
        return false;
    }
    if (obj1 == obj2) {
        return true;
    }
    if ((typeof obj1 === "undefined" ? "undefined" : _typeof(obj1)) == 'object' && (typeof obj2 === "undefined" ? "undefined" : _typeof(obj2)) == 'object') {
        if (visited) {
            if (visited.indexOf(obj1) !== -1) return false;
        } else {
            visited = [];
        }
        visited.push(obj1);
        for (var p in obj1) {
            if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) {
                return false;
            }
            switch (_typeof(obj1[p])) {
                case 'object':
                    if (!this.equalsByValue(obj1[p], obj2[p], visited)) return false;
                    break;
                case 'function':
                    if (typeof obj2[p] == 'undefined' || p != 'compare' && obj1[p].toString() != obj2[p].toString()) return false;
                    break;
                default:
                    if (obj1[p] != obj2[p]) return false;
                    break;
            }
        }
        for (var p in obj2) {
            if (typeof obj1[p] == 'undefined') return false;
        }
        delete obj1._$visited;
        return true;
    }
    return false;
}
function resolveFieldData(data, field) {
    if (data && field) {
        if (field.indexOf('.') == -1) {
            return data[field];
        } else {
            var fields = field.split('.');
            var value = data;
            for (var i = 0, len = fields.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }
                value = value[fields[i]];
            }
            return value;
        }
    } else {
        return null;
    }
}
function dateFormat(date, fmt) {
    var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (o.hasOwnProperty(k)) {
            var regExp = new RegExp('(' + k + ')');
            if (regExp.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
            }
        }
    }
    return fmt;
}
exports.dateFormat = dateFormat;
function on(el, eventName, callback, capture) {
    if (capture === void 0) {
        capture = false;
    }
    if (el.addEventListener) {
        el.addEventListener(eventName, callback, capture);
    } else if (el.attachEvent) {
        el.attachEvent("on" + eventName, function (e) {
            callback.call(el, e || window.event);
        });
    }
}
exports.on = on;
function off(el, eventName, callback, capture) {
    if (capture === void 0) {
        capture = false;
    }
    if (el.removeEventListener) {
        el.removeEventListener(eventName, callback, capture);
    } else if (el.detachEvent) {
        el.detachEvent("on" + eventName, callback);
    }
}
exports.off = off;
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
function setValueToNumber(value) {
    var num = 0;
    if (typeof value === 'string') {
        num = parseFloat(value);
    } else if (typeof value === 'number') {
        num = value;
    }
    return num;
}
exports.setValueToNumber = setValueToNumber;
function getSize(val, pix) {
    if (pix === void 0) {
        pix = 'px';
    }
    var value = typeof val !== 'number' ? val : val + pix;
    return value;
}
exports.getSize = getSize;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Collapse_1 = __webpack_require__(68);
exports.Collapse = Collapse_1.default;
var Fade_1 = __webpack_require__(69);
exports.Fade = Fade_1.default;
var FadeInUp_1 = __webpack_require__(70);
exports.FadeInUp = FadeInUp_1.default;
var FadeInDown_1 = __webpack_require__(35);
exports.FadeInDown = FadeInDown_1.default;
var FadeInZoom_1 = __webpack_require__(36);
exports.FadeInZoom = FadeInZoom_1.default;
var ZoomIn_1 = __webpack_require__(71);
exports.ZoomIn = ZoomIn_1.default;
var MotionGroup_1 = __webpack_require__(6);
exports.MotionGroup = MotionGroup_1.default;
var TransitionGroup_1 = __webpack_require__(72);
exports.TransitionGroup = TransitionGroup_1.default;
var MoveInRight_1 = __webpack_require__(73);
exports.MoveInRight = MoveInRight_1.default;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_motion_1 = __webpack_require__(5);
var MotionGroup = /** @class */function (_super) {
    __extends(MotionGroup, _super);
    function MotionGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onRest = function () {
            var inProps = _this.props.in;
            if (inProps) {
                if (_this.props.onEnter) {
                    _this.props.onEnter(inProps);
                }
            } else {
                if (_this.props.onLeave) {
                    _this.props.onLeave(inProps);
                }
            }
        };
        _this.renderElement = function (style) {
            if (style === void 0) {
                style = {};
            }
            var styles = _this.props.styles;
            var props = {
                style: styles(style)
            };
            return React.cloneElement(React.createElement("div", { className: "bm-MotionGroup" }, _this.props.children), props);
        };
        return _this;
    }
    MotionGroup.prototype.getDefaultStyles = function () {
        var _a = this.props,
            children = _a.children,
            enterStyles = _a.enterStyles;
        if (!children) {
            return {};
        }
        return enterStyles;
    };
    MotionGroup.prototype.getStyles = function () {
        var _a = this.props,
            children = _a.children,
            activeStyles = _a.activeStyles,
            inProps = _a.in,
            leaveStyles = _a.leaveStyles;
        if (!children) {
            return {};
        }
        return inProps ? activeStyles : leaveStyles;
    };
    MotionGroup.prototype.render = function () {
        var _this = this;
        var childrenProps = this.props.children;
        var children = childrenProps;
        return React.createElement(react_motion_1.Motion, { defaultStyle: this.getDefaultStyles(), onRest: this.onRest, style: this.getStyles() }, function (style) {
            return typeof children === 'function' ? children(style) : _this.renderElement(style);
        });
    };
    return MotionGroup;
}(React.PureComponent);
exports.default = MotionGroup;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function addEventListener(element, type, callback, capture) {
    if (capture === void 0) {
        capture = false;
    }
    if (element.addEventListener) {
        element.addEventListener(type, callback, capture);
    } else if (element.attachEvent) {
        element.attachEvent(type, callback);
    }
}
exports.addEventListener = addEventListener;
function removeEventListener(element, type, callback) {
    if (element.removeEventListener) {
        element.removeEventListener(type, callback);
    } else if (element.detachEvent) {
        element.detachEvent(type, callback);
    }
}
exports.removeEventListener = removeEventListener;
function animationEnd(element, callback) {
    element.addEventListener('animationend', callback, false);
    element.addEventListener('webkitAnimationEnd', callback, false);
    element.addEventListener('mozAnimationEnd', callback, false);
    element.addEventListener('OAnimationEnd', callback, false);
}
exports.animationEnd = animationEnd;
function setTransform(element, animation) {
    element.style.webkitTransform = animation;
    element.style.mozTransform = animation;
    element.style.oTransform = animation;
    element.style.msTransform = animation;
    element.style.transform = animation;
}
exports.setTransform = setTransform;
function setTransitionDuration(element, times) {
    element.style.webkitTransitionDuration = times + 'ms';
    element.style.mozTransitionDuration = times + 'ms';
    element.style.oTransitionDuration = times + 'ms';
    element.style.transitionDuration = times + 'ms';
}
exports.setTransitionDuration = setTransitionDuration;
function transitionStart(element, callback) {
    element.addEventListener('transitionstart', callback, false);
    element.addEventListener('webkitTransitionStart', callback, false);
    element.addEventListener('mozTransitionStart', callback, false);
    element.addEventListener('oTransitionStart', callback, false);
}
exports.transitionStart = transitionStart;
function transitionEnd(element, callback) {
    element.addEventListener('transitionend', callback, false);
    element.addEventListener('webkitTransitionEnd', callback, false);
    element.addEventListener('mozTransitionEnd', callback, false);
    element.addEventListener('oTransitionEnd', callback, false);
}
exports.transitionEnd = transitionEnd;
function deleteTransitionEnd(element, callback) {
    element.removeEventListener('transitionend', callback, false);
    element.removeEventListener('webkitTransitionEnd', callback, false);
    element.removeEventListener('mozTransitionEnd', callback, false);
    element.removeEventListener('oTransitionEnd', callback, false);
}
exports.deleteTransitionEnd = deleteTransitionEnd;
function addClass(elem, className) {
    var classes = className.split(/\s+/);
    for (var _i = 0, classes_1 = classes; _i < classes_1.length; _i++) {
        var cName = classes_1[_i];
        elem.classList.add(cName);
    }
}
exports.addClass = addClass;
function css(elem, style) {
    for (var s in style) {
        if (style.hasOwnProperty(s)) {
            elem.style[s] = style[s];
        }
    }
}
exports.css = css;
function hasClass(elem, className) {
    if (elem.classList) {
        return elem.classList.contains(className);
    } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(elem.className);
    }
}
exports.hasClass = hasClass;
function removeClass(elem, className) {
    var classes = className.split(/\s+/);
    var num = 0;
    for (var _i = 0, classes_2 = classes; _i < classes_2.length; _i++) {
        var cName = classes_2[_i];
        if (elem.classList) {
            elem.classList.remove(cName);
        } else {
            elem.className = classes.splice(num, 1).join(' ');
        }
        num++;
    }
}
exports.removeClass = removeClass;
function parents(elem) {
    var matched = [];
    while ((elem = elem['parentNode']) && elem.nodeType !== 9) {
        if (elem.nodeType === 1) {
            matched.push(elem);
        }
    }
    return matched;
}
exports.parents = parents;
function clickOutside(elem, source, inside, outside) {
    var isIn = false;
    while (elem) {
        if (typeof source === 'string') {
            if (hasClass(elem, source)) {
                isIn = true;
                if (inside) {
                    inside(elem);
                }
            }
        } else if (elem === source) {
            isIn = true;
            if (inside) {
                inside(elem);
            }
        }
        elem = elem.parentNode;
    }
    if (!isIn && outside) {
        outside();
    }
    return isIn;
}
exports.clickOutside = clickOutside;
function getScrollParent(node) {
    if (!node) {
        return document.documentElement;
    }
    var excludeStaticParent = node.style.position === 'absolute';
    var overflowRegex = /(scroll|auto)/;
    var parent = node;
    var isExited = false;
    while (parent) {
        if (!parent.parentNode) {
            return node.ownerDocument || document.documentElement;
        }
        var style = window.getComputedStyle(parent);
        var position = style.position;
        var overflow = style.overflow;
        var overflowX = style['overflow-x'];
        var overflowY = style['overflow-y'];
        if (position === 'static' && excludeStaticParent) {
            parent = parent.parentNode;
            continue;
        }
        if (overflowRegex.test(overflow) || overflowRegex.test(overflowX) || overflowRegex.test(overflowY)) {
            isExited = true;
            break;
        }
        parent = parent.parentNode;
    }
    if (isExited) {
        return parent;
    }
    return node.ownerDocument || node.documentElement || document.documentElement;
}
exports.getScrollParent = getScrollParent;
function on(elem, type, callback, capture) {
    if (capture === void 0) {
        capture = false;
    }
    if (elem.addEventListener) {
        elem.addEventListener(type, callback, capture);
    } else if (elem.attachEvent) {
        elem.attachEvent(type, callback);
    }
}
exports.on = on;
function off(elem, type, callback) {
    if (elem.removeEventListener) {
        elem.removeEventListener(type, callback);
    } else if (elem.detachEvent) {
        elem.detachEvent(type, callback);
    }
}
exports.off = off;
function listen(elem, type, callback) {
    on(elem, type, callback);
    return function () {
        off(elem, type, callback);
    };
}
exports.listen = listen;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Ripple_1 = __webpack_require__(74);
exports.default = Ripple_1.default;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Message_1 = __webpack_require__(78);
exports.default = Message_1.default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Portal_1 = __webpack_require__(41);
exports.default = Portal_1.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Icon_1 = __webpack_require__(44);
exports.default = Icon_1.default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(17)
  , core      = __webpack_require__(10)
  , ctx       = __webpack_require__(53)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var store  = __webpack_require__(59)('wks')
  , uid    = __webpack_require__(60)
  , Symbol = __webpack_require__(17).Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(61)
  , defined = __webpack_require__(28);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = __webpack_require__(40);
exports.default = Button_1.default;
var ButtonGroup_1 = __webpack_require__(93);
exports.ButtonGroup = ButtonGroup_1.default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(182)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(185)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pathToRegexp = __webpack_require__(186);

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = '' + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = (0, _pathToRegexp2.default)(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'string') options = { path: options };

  var _options = options,
      _options$path = _options.path,
      path = _options$path === undefined ? '/' : _options$path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

exports.default = matchPath;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(28);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(236);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(246);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var $          = __webpack_require__(3)
  , createDesc = __webpack_require__(31);
module.exports = __webpack_require__(58) ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).setDesc
  , has = __webpack_require__(32)
  , TAG = __webpack_require__(15)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var react_motion_1 = __webpack_require__(5);
var MotionGroup_1 = __webpack_require__(6);
var FadeInDown = /** @class */function (_super) {
    __extends(FadeInDown, _super);
    function FadeInDown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.zoomInTransitions = {
            enterStyles: {
                opacity: 0,
                y: -100
            },
            leaveStyles: {
                opacity: react_motion_1.spring(0),
                y: react_motion_1.spring(-100)
            },
            activeStyles: {
                opacity: react_motion_1.spring(1),
                y: react_motion_1.spring(0, {
                    stiffness: 280,
                    damping: 30
                })
            }
        };
        return _this;
    }
    FadeInDown.prototype.componentDidMount = function () {
        if (this.props.in) {
            this.forceUpdate();
        }
    };
    FadeInDown.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            inProp = _a.in,
            onEnter = _a.onEnter,
            onLeave = _a.onLeave,
            other = __rest(_a, ["className", "children", "in", "onEnter", "onLeave"]);
        var styleClass = classNames('bm-FadeInDown', className);
        return React.createElement(MotionGroup_1.default, __assign({ in: inProp, onEnter: onEnter, onLeave: onLeave }, this.zoomInTransitions), function (_a) {
            var opacity = _a.opacity,
                y = _a.y;
            return React.createElement("div", __assign({ className: styleClass }, other, { style: {
                    opacity: opacity,
                    webkitTransform: 'translate3d(0, ' + y + 'px, 0)',
                    transform: 'translate3d(0, ' + y + 'px, 0)'
                } }), children);
        });
    };
    return FadeInDown;
}(React.PureComponent);
exports.default = FadeInDown;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_motion_1 = __webpack_require__(5);
var MotionGroup_1 = __webpack_require__(6);
var FadeInZoom = /** @class */function (_super) {
    __extends(FadeInZoom, _super);
    function FadeInZoom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.zoomInTransitions = {
            enterStyles: {
                opacity: 0,
                scale: 0
            },
            leaveStyles: {
                opacity: react_motion_1.spring(0),
                scale: react_motion_1.spring(0)
            },
            activeStyles: {
                opacity: react_motion_1.spring(1, {
                    stiffness: 250, damping: 16
                }),
                scale: react_motion_1.spring(1, {
                    stiffness: 250, damping: 16
                })
            }
        };
        return _this;
    }
    FadeInZoom.prototype.componentDidMount = function () {
        if (this.props.in) {
            this.forceUpdate();
        }
    };
    FadeInZoom.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            inProp = _a.in,
            other = __rest(_a, ["className", "children", "in"]);
        return React.createElement(MotionGroup_1.default, __assign({ in: inProp }, this.zoomInTransitions), function (_a) {
            var opacity = _a.opacity,
                scale = _a.scale;
            return React.createElement("div", { className: className, style: {
                    opacity: opacity,
                    transform: 'scale( ' + scale + ',' + scale + ')'
                } }, children);
        });
    };
    return FadeInZoom;
}(React.PureComponent);
exports.default = FadeInZoom;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Inputtext_1 = __webpack_require__(38);
exports.default = Inputtext_1.default;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var Inputtext = /** @class */function (_super) {
    __extends(Inputtext, _super);
    function Inputtext(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            var target = event.target;
            _this.setState({
                value: target.value
            });
            if (_this.props.onChange) {
                _this.props.onChange(target.value, event);
            }
        };
        _this.handleFocus = function (event) {
            var _a = _this.props,
                readOnly = _a.readOnly,
                disabled = _a.disabled;
            if (!readOnly && !disabled) {
                _this.setState({
                    focus: true
                });
            }
            if (_this.props.onFocus) {
                _this.props.onFocus(event.target.value, event);
            }
        };
        _this.handleBlur = function (event) {
            var _a = _this.props,
                readOnly = _a.readOnly,
                disabled = _a.disabled;
            if (!readOnly && !disabled) {
                _this.setState({
                    focus: false
                });
            }
            if (_this.props.onBlur) {
                _this.props.onBlur(event.target.value, event);
            }
        };
        _this.handleClick = function () {
            if (_this.props.onClick) {
                _this.props.onClick();
            }
        };
        var value = '',
            focus = false;
        if (props.defaultValue) {
            value = props.defaultValue;
        }
        if (props.autoFocus) {
            focus = props.autoFocus;
        }
        _this.state = {
            value: value,
            focus: focus
        };
        return _this;
    }
    Inputtext.prototype.componentWillReceiveProps = function (nextProps) {
        if ('value' in nextProps && this.props.value !== nextProps.value) {
            this.setState({
                value: nextProps.value || ''
            });
        }
    };
    Inputtext.prototype.render = function () {
        var _a = this.props,
            autoFocus = _a.autoFocus,
            animated = _a.animated,
            className = _a.className,
            disabled = _a.disabled,
            id = _a.id,
            endAdorn = _a.endAdorn,
            maxLength = _a.maxLength,
            inline = _a.inline,
            label = _a.label,
            prefixCls = _a.prefixCls,
            placeholder = _a.placeholder,
            readOnly = _a.readOnly,
            size = _a.size,
            startAdorn = _a.startAdorn,
            type = _a.type,
            other = __rest(_a, ["autoFocus", "animated", "className", "disabled", "id", "endAdorn", "maxLength", "inline", "label", "prefixCls", "placeholder", "readOnly", "size", "startAdorn", "type"]);
        var _b = this.state,
            focus = _b.focus,
            value = _b.value;
        var styleClass = classNames(prefixCls, (_c = {}, _c[prefixCls + "-inner"] = inline, _c[prefixCls + "-animated"] = animated, _c[prefixCls + "-focus"] = focus, _c[prefixCls + "-noEmpty"] = value.trim() !== '', _c), "" + (prefixCls + '-' + size), className);
        var otherProps = Utils_1.getOtherProperties(other, ['defaultValue', 'onClick', 'onChange', 'onFocus', 'onBlur', 'value']);
        return React.createElement("div", __assign({ className: styleClass }, otherProps), startAdorn ? React.createElement("div", { className: prefixCls + "-startAdorn" }, startAdorn) : null, React.createElement("label", { htmlFor: id }, label ? React.createElement("div", { className: prefixCls + "-label" }, label) : null, React.createElement("div", { className: prefixCls + "-field", onClick: this.handleClick }, React.createElement("input", { type: type, id: id, maxLength: maxLength, value: value, autoFocus: autoFocus, placeholder: placeholder, disabled: disabled, readOnly: readOnly, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur }))), endAdorn ? React.createElement("div", { className: prefixCls + "-endAdorn" }, endAdorn) : null, React.createElement("hr", null));
        var _c;
    };
    Inputtext.defaultProps = {
        disabled: false,
        inline: false,
        prefixCls: 'bm-Inputtext',
        readOnly: false,
        size: 'sm',
        type: 'text'
    };
    return Inputtext;
}(React.PureComponent);
exports.default = Inputtext;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var List_1 = __webpack_require__(82);
exports.default = List_1.default;
var ListItem_1 = __webpack_require__(83);
exports.ListItem = ListItem_1.default;
var ListItemText_1 = __webpack_require__(84);
exports.ListItemText = ListItemText_1.default;
var ListItemAction_1 = __webpack_require__(85);
exports.ListItemAction = ListItemAction_1.default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Ripple_1 = __webpack_require__(9);
var Button = /** @class */function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (e) {
            var onClick = _this.props.onClick;
            if (onClick) {
                onClick(e);
            }
        };
        return _this;
    }
    Button.prototype.render = function () {
        var _a = this.props,
            disableRipple = _a.disableRipple,
            to = _a.to,
            shape = _a.shape,
            flat = _a.flat,
            float = _a.float,
            theme = _a.theme,
            size = _a.size,
            block = _a.block,
            isActive = _a.isActive,
            disabled = _a.disabled,
            className = _a.className,
            children = _a.children,
            prefixCls = _a.prefixCls,
            type = _a.type,
            target = _a.target;
        var styleClass = classNames(prefixCls, float && prefixCls + "-" + float, prefixCls + "-" + theme, size ? prefixCls + "-" + size : null, (_b = {}, _b[prefixCls + "-block"] = block, _b['is-active'] = isActive, _b['is-disabled'] = disabled, _b['is-flat'] = flat, _b[prefixCls + "-fab"] = shape === 'circle', _b[prefixCls + "-float"] = !!float, _b), className);
        var props = {
            className: styleClass,
            type: type,
            target: to && target,
            href: to
        };
        var ComponentProp = 'button';
        if (this.props.to) {
            ComponentProp = 'a';
        }
        return React.createElement(ComponentProp, __assign({}, props, { onClick: this.handleClick }), children, !disableRipple ? React.createElement(Ripple_1.default, null) : null);
        var _b;
    };
    Button.defaultProps = {
        disableRipple: false,
        prefixCls: 'bm-Button',
        type: 'button',
        shape: '',
        theme: 'default'
    };
    return Button;
}(React.PureComponent);
exports.default = Button;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(16);
var Portal = /** @class */function (_super) {
    __extends(Portal, _super);
    function Portal(props) {
        var _this = _super.call(this, props) || this;
        var visible = false;
        if (props.visible) {
            visible = props.visible;
        }
        _this.state = {
            visible: visible
        };
        return _this;
    }
    Portal.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if ('visible' in nextProps && this.props.visible !== nextProps.visible) {
            if (nextProps.visible) {
                this.setState({
                    visible: nextProps.visible
                });
            } else {
                // 为了消失时有动画，必须加一个定时器
                setTimeout(function () {
                    _this.setState({
                        visible: nextProps.visible
                    });
                }, 300);
            }
        }
    };
    Portal.prototype.componentWillUnmount = function () {
        if (this.defaultNode) {
            document.body.removeChild(this.defaultNode);
        }
        this.defaultNode = null;
    };
    Portal.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            _b = _a.mountNode,
            mountNode = _b === void 0 ? document.body : _b;
        var visible = this.state.visible;
        if (!this.props.mountNode && !this.defaultNode) {
            this.defaultNode = document.createElement('div');
            document.body.appendChild(this.defaultNode);
        }
        return visible ? ReactDOM.createPortal(children, mountNode) : null;
    };
    return Portal;
}(React.PureComponent);
exports.default = Portal;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Checkbox_1 = __webpack_require__(104);
exports.default = Checkbox_1.default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Icon_1 = __webpack_require__(13);
var Utils_1 = __webpack_require__(2);
var Chip = /** @class */function (_super) {
    __extends(Chip, _super);
    function Chip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleDelete = function () {
            if (_this.props.onDelete) {
                _this.props.onDelete({
                    label: _this.props.label,
                    value: _this.props.value
                });
            }
        };
        _this.handleClick = function () {
            if (_this.props.onClick) {
                _this.props.onClick({
                    label: _this.props.label,
                    value: _this.props.value
                });
            }
        };
        return _this;
    }
    Chip.prototype.render = function () {
        var _a = this.props,
            active = _a.active,
            avatar = _a.avatar,
            className = _a.className,
            close = _a.close,
            label = _a.label,
            other = __rest(_a, ["active", "avatar", "className", "close", "label"]);
        var styleClass = classNames('Chip', {
            'Chip-active': active
        }, className);
        var otherProps = Utils_1.getOtherProperties(other, ['onClick', 'onDelete']);
        return React.createElement("div", __assign({ className: styleClass }, otherProps, { onClick: this.handleClick }), avatar ? React.createElement("span", { className: "Chip-avatar" }, avatar) : null, React.createElement("span", { className: "Chip-inner" }, label), close ? React.createElement(Icon_1.default, { className: "Chip-close", icon: "close", onClick: this.handleDelete }) : null);
    };
    Chip.defaultProps = {
        active: false
    };
    return Chip;
}(React.PureComponent);
exports.default = Chip;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Icon = /** @class */function (_super) {
    __extends(Icon, _super);
    function Icon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            if (_this.props.onClick) {
                _this.props.onClick(event);
            }
        };
        return _this;
    }
    Icon.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            spin = _a.spin,
            icon = _a.icon,
            size = _a.size,
            rotate = _a.rotate,
            className = _a.className,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["children", "spin", "icon", "size", "rotate", "className", "prefixCls"]);
        var styleClass = classNames(prefixCls, 'material-icons', size ? prefixCls + "-" + size : '', rotate ? prefixCls + "-" + rotate : '', spin ? prefixCls + "-spin" : '', className);
        return React.createElement("i", __assign({ className: styleClass }, other, { onClick: this.handleClick }), icon);
    };
    Icon.defaultProps = {
        icon: '',
        prefixCls: 'bm-Icon'
    };
    return Icon;
}(React.PureComponent);
exports.default = Icon;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Spin_1 = __webpack_require__(126);
exports.default = Spin_1.default;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Portal_1 = __webpack_require__(12);
var Button_1 = __webpack_require__(20);
var PickerItem_1 = __webpack_require__(146);
var Utils_1 = __webpack_require__(2);
var Transitions_1 = __webpack_require__(4);
var Picker = /** @class */function (_super) {
    __extends(Picker, _super);
    function Picker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: [],
            inputValue: '',
            value: [],
            visible: false
        };
        _this.visible = false;
        _this.bodyOverflow = '';
        _this.getCurrentIndex = function (data, selectedValue) {
            var value = [];
            if (selectedValue) {
                var child_1 = data.slice();
                selectedValue.map(function (v) {
                    if (child_1 && child_1.length > 0) {
                        for (var i = 0; i < child_1.length; i++) {
                            if (Utils_1.equals(child_1[i], v, 'value')) {
                                child_1 = child_1[i] && child_1[i].children;
                                value.push(i);
                                break;
                            }
                        }
                    }
                });
            }
            return value;
        };
        _this.handleClose = function () {
            _this.setState({
                value: _this.lastInputValue,
                visible: false
            });
            if (_this.props.onClose) {
                _this.props.onClose();
            }
        };
        _this.handleValueChange = function (event) {
            var value = _this.state.value.slice();
            value[event.index] = event.activeIndex;
            _this.setState({
                value: value
            });
            if (_this.props.onValueChange) {
                _this.props.onValueChange({
                    value: event.value,
                    index: event.index
                });
            }
        };
        _this.handleConfirm = function () {
            var value = _this.state.value.slice();
            var inputValue = _this.fetchValue(_this.state.data, value, 'label');
            _this.setState({
                value: value,
                inputValue: inputValue,
                visible: false
            });
            _this.lastInputValue = value;
            if (_this.props.onClose) {
                _this.props.onClose();
            }
            if (_this.props.onChange) {
                _this.props.onChange(inputValue);
            }
        };
        _this.handleClick = function () {
            _this.setState({
                visible: true
            }, function () {
                _this.stopBodyScroll(_this.state.visible);
            });
            if (_this.props.onOpen) {
                _this.props.onOpen();
            }
        };
        return _this;
    }
    Picker.prototype.componentDidMount = function () {
        this.bodyOverflow = document.body.style.overflow;
        var _a = this.props,
            data = _a.data,
            defaultValue = _a.defaultValue;
        if ('data' in this.props && Array.isArray(this.props.data) && data.length > 0) {
            var value = defaultValue ? this.getCurrentIndex(data, this.getDefaultValue(data, defaultValue)) : [];
            this.setState({
                data: data, value: value,
                inputValue: defaultValue && this.fetchValue(data, defaultValue, 'label')
            });
            this.lastInputValue = value;
        }
    };
    Picker.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        var _a = this.props,
            data = _a.data,
            visible = _a.visible,
            valueProps = _a.value;
        if ('visible' in nextProps && visible !== nextProps.visible || 'data' in nextProps && data !== nextProps.data || 'value' in nextProps && valueProps !== nextProps.value) {
            var dValue = nextProps.value;
            var value = nextProps.value ? this.getCurrentIndex(nextProps.data, this.getDefaultValue(nextProps.data, dValue)) : this.state.value;
            if (!nextProps.visible || !this.state.visible) {
                value = this.lastInputValue;
            }
            this.setState({
                visible: nextProps.visible,
                value: value,
                data: nextProps.data
            }, function () {
                _this.stopBodyScroll(_this.state.visible);
            });
        }
    };
    Picker.prototype.getDefaultValue = function (data, defaultValue) {
        var value = [];
        if (Array.isArray(defaultValue)) {
            value = defaultValue;
        } else if (typeof defaultValue === 'string') {
            value = defaultValue.split(this.props.format).map(function (value) {
                return {
                    value: value
                };
            });
        } else {
            var child = data.slice();
            while (child && child.length > 0) {
                value.push({
                    label: child[0].label,
                    value: child[0].value
                });
                child = child[0] && child[0].children;
            }
        }
        return value;
    };
    Picker.prototype.getItems = function (data, value) {
        var children = [];
        if (data && data.length > 0) {
            var num = 0,
                child = data.slice();
            while (child && child.length > 0) {
                var index = value[num] || 0;
                children.push({ num: num, index: index, child: child });
                child = child[index] && child[index].children;
                num++;
            }
            for (var i = 0; i < children.length; i++) {
                var data_1 = children[i];
                children[i] = React.createElement(PickerItem_1.default, { key: data_1.num, index: data_1.num, data: data_1.child, style: { width: 100 / children.length + '%' }, disabled: this.props.disabled, value: data_1.index, onValueChange: this.handleValueChange });
            }
        }
        return children;
    };
    Picker.prototype.fetchValue = function (data, value, field, seperator) {
        if (seperator === void 0) {
            seperator = '/';
        }
        var selected = [];
        if (Array.isArray(data) && value) {
            var child = data;
            var i = 0;
            while (child && child.length > 0) {
                child = child[value[i] || 0];
                if (child) {
                    selected.push({
                        label: child.label,
                        value: child.value
                    });
                }
                i++;
                child = child && child.children;
            }
        }
        return selected.map(function (item) {
            return item[field];
        }).join(seperator);
    };
    Picker.prototype.stopBodyScroll = function (visible) {
        if (this.bodyOverflow === 'hidden') {
            return;
        }
        if (visible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = this.bodyOverflow;
        }
    };
    Picker.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            other = __rest(_a, ["className"]);
        var _b = this.state,
            data = _b.data,
            inputValue = _b.inputValue,
            value = _b.value,
            visible = _b.visible;
        var styleClass = classNames('Picker-panel', {
            'Picker-open': visible
        }, className);
        var otherProps = Utils_1.getOtherProperties(other, ['defaultValue', 'children', 'data', 'format', 'onChange', 'onOpen', 'onValueChange', 'visible']);
        return React.createElement("div", { className: "Picker" }, React.createElement("div", { className: "Picker-input", onClick: this.handleClick }, inputValue), React.createElement(Portal_1.default, { visible: visible, mountNode: document.body }, React.createElement("div", __assign({ className: styleClass }, otherProps), React.createElement(Transitions_1.Fade, { in: visible }, React.createElement("div", { className: "Picker-mask", onClick: this.handleClose })), React.createElement(Transitions_1.FadeInUp, { in: visible, className: "Picker-wrapper" }, React.createElement("div", { className: "Picker-footer" }, React.createElement(Button_1.default, { onClick: this.handleClose }, "Cancel"), React.createElement(Button_1.default, { onClick: this.handleConfirm }, "Done")), React.createElement("div", { className: "Picker-body" }, React.createElement("div", { className: "Picker-top-overlay" }), React.createElement("div", { className: "Picker-bottom-overlay" }), React.createElement("div", { className: "Picker-line" }), this.getItems(data, value))))));
    };
    Picker.defaultProps = {
        data: [],
        format: '/'
    };
    return Picker;
}(React.PureComponent);
exports.default = Picker;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var react_motion_1 = __webpack_require__(5);
var RouteTransition = /** @class */function (_super) {
    __extends(RouteTransition, _super);
    function RouteTransition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.willEnter = function () {
            return _this.props.enterStyles;
        };
        _this.willLeave = function () {
            return __assign({}, _this.props.leaveStyles);
        };
        _this.didLeave = function (styleThatLeft) {
            if (_this.props.didLeave) {
                _this.props.didLeave(styleThatLeft);
            }
        };
        _this.renderElement = function (config) {
            if (config === void 0) {
                config = {};
            }
            var styles = _this.props.styles;
            var props = {
                style: styles(config.style),
                key: config.key
            };
            return !!_this.props.wrapperComponent !== false ? React.createElement(_this.props.wrapperComponent, props, config.data) : React.cloneElement(config.data, props);
        };
        return _this;
    }
    RouteTransition.prototype.getDefaultStyles = function () {
        var _a = this.props,
            children = _a.children,
            enterStyles = _a.enterStyles;
        if (!children) {
            return [];
        }
        return [{
            key: children.key,
            data: children,
            style: enterStyles
        }];
    };
    RouteTransition.prototype.getStyles = function () {
        var _a = this.props,
            children = _a.children,
            activeStyles = _a.activeStyles;
        if (!children) {
            return [];
        }
        return [{
            key: children.key,
            data: children,
            style: activeStyles
        }];
    };
    RouteTransition.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            className = _a.className,
            transitionName = _a.transitionName,
            prefixCls = _a.prefixCls;
        var styleClass = classNames(prefixCls, className, transitionName);
        return React.createElement(react_motion_1.TransitionMotion, { defaultStyles: this.getDefaultStyles(), styles: this.getStyles(), willEnter: this.willEnter, willLeave: this.willLeave }, function (styles) {
            return React.createElement("div", { className: styleClass }, styles.map(_this.renderElement));
        });
    };
    RouteTransition.defaultProps = {
        prefixCls: 'bm-RouteTransition',
        wrapperComponent: 'div'
    };
    return RouteTransition;
}(React.PureComponent);
exports.default = RouteTransition;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(23);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(14)
  , core    = __webpack_require__(10)
  , fails   = __webpack_require__(18);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(231);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(234), __esModule: true };

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(56)
  , $export        = __webpack_require__(14)
  , redefine       = __webpack_require__(57)
  , hide           = __webpack_require__(30)
  , has            = __webpack_require__(32)
  , Iterators      = __webpack_require__(33)
  , $iterCreate    = __webpack_require__(241)
  , setToStringTag = __webpack_require__(34)
  , getProto       = __webpack_require__(3).getProto
  , ITERATOR       = __webpack_require__(15)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(18)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(62);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(64);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Accordion_1 = __webpack_require__(66);
exports.Accordion = Accordion_1.default;
exports.AccordionGroup = Accordion_1.AccordionGroup;
var ActionSheet_1 = __webpack_require__(76);
exports.ActionSheet = ActionSheet_1.default;
var Autocomplete_1 = __webpack_require__(80);
exports.Autocomplete = Autocomplete_1.default;
var Avatar_1 = __webpack_require__(86);
exports.Avatar = Avatar_1.default;
var BackTop_1 = __webpack_require__(88);
exports.BackTop = BackTop_1.default;
var Badge_1 = __webpack_require__(91);
exports.Badge = Badge_1.default;
var Button_1 = __webpack_require__(20);
exports.Button = Button_1.default;
exports.ButtonGroup = Button_1.ButtonGroup;
var ButtonNavigation_1 = __webpack_require__(94);
exports.ButtonNavigation = ButtonNavigation_1.default;
exports.ButtonNavigationItem = ButtonNavigation_1.ButtonNavigationItem;
var Calendar_1 = __webpack_require__(97);
exports.Calendar = Calendar_1.default;
var Card_1 = __webpack_require__(99);
exports.Card = Card_1.default;
exports.CardHeader = Card_1.CardHeader;
exports.CardContent = Card_1.CardContent;
exports.CardFooter = Card_1.CardFooter;
var Checkbox_1 = __webpack_require__(42);
exports.Checkbox = Checkbox_1.default;
var Chip_1 = __webpack_require__(105);
exports.Chip = Chip_1.default;
exports.ChipGroup = Chip_1.ChipGroup;
var Grid_1 = __webpack_require__(107);
exports.Row = Grid_1.default;
exports.Col = Grid_1.Col;
var HighlightCode_1 = __webpack_require__(114);
exports.HighlightCode = HighlightCode_1.default;
var FabButton_1 = __webpack_require__(122);
exports.FabButton = FabButton_1.default;
var Icon_1 = __webpack_require__(13);
exports.Icon = Icon_1.default;
var Indicator_1 = __webpack_require__(124);
exports.Indicator = Indicator_1.default;
var IndexList_1 = __webpack_require__(127);
exports.IndexList = IndexList_1.default;
exports.IndexSection = IndexList_1.IndexSection;
var InputNumber_1 = __webpack_require__(130);
exports.InputNumber = InputNumber_1.default;
var Inputtext_1 = __webpack_require__(37);
exports.Inputtext = Inputtext_1.default;
var KeyBoard_1 = __webpack_require__(132);
exports.KeyBoard = KeyBoard_1.default;
var Knob_1 = __webpack_require__(134);
exports.Knob = Knob_1.default;
var LazyLoad_1 = __webpack_require__(136);
exports.LazyLoad = LazyLoad_1.default;
var List_1 = __webpack_require__(39);
exports.List = List_1.default;
exports.ListItem = List_1.ListItem;
exports.ListItemText = List_1.ListItemText;
exports.ListItemAction = List_1.ListItemAction;
var Locker_1 = __webpack_require__(140);
exports.Locker = Locker_1.default;
var DatetimePicker_1 = __webpack_require__(144);
exports.DatetimePicker = DatetimePicker_1.default;
var MessageBox_1 = __webpack_require__(147);
exports.MessageBox = MessageBox_1.default;
var Modal_1 = __webpack_require__(149);
exports.Modal = Modal_1.default;
var Picker_1 = __webpack_require__(151);
exports.Picker = Picker_1.default;
var NavBar_1 = __webpack_require__(152);
exports.NavBar = NavBar_1.default;
var Notification_1 = __webpack_require__(154);
exports.Notification = Notification_1.default;
var Page_1 = __webpack_require__(156);
exports.Page = Page_1.default;
exports.Content = Page_1.Content;
var Pagination_1 = __webpack_require__(159);
exports.Pagination = Pagination_1.default;
var Panel_1 = __webpack_require__(162);
exports.Panel = Panel_1.default;
exports.PanelHeader = Panel_1.PanelHeader;
exports.PanelContent = Panel_1.PanelContent;
var Paper_1 = __webpack_require__(166);
exports.Paper = Paper_1.default;
var Popover_1 = __webpack_require__(168);
exports.Popover = Popover_1.default;
var Popup_1 = __webpack_require__(170);
exports.Popup = Popup_1.default;
var Portal_1 = __webpack_require__(12);
exports.Portal = Portal_1.default;
var Progress_1 = __webpack_require__(172);
exports.Progress = Progress_1.default;
var Radio_1 = __webpack_require__(174);
exports.Radio = Radio_1.default;
var Rate_1 = __webpack_require__(176);
exports.Rate = Rate_1.default;
var Ripple_1 = __webpack_require__(9);
exports.Ripple = Ripple_1.default;
var Router_1 = __webpack_require__(178);
exports.AnimatedSwitch = Router_1.AnimatedSwitch;
var SearchBar_1 = __webpack_require__(191);
exports.SearchBar = SearchBar_1.default;
var Segment_1 = __webpack_require__(193);
exports.Segment = Segment_1.default;
var Sidebar_1 = __webpack_require__(195);
exports.Sidebar = Sidebar_1.default;
var Slider_1 = __webpack_require__(197);
exports.Slider = Slider_1.default;
var Spin_1 = __webpack_require__(46);
exports.Spin = Spin_1.default;
var Swiper_1 = __webpack_require__(199);
exports.Swiper = Swiper_1.default;
var Switch_1 = __webpack_require__(202);
exports.Switch = Switch_1.default;
var Table_1 = __webpack_require__(204);
exports.Table = Table_1.default;
exports.TableColumn = Table_1.TableColumn;
var Tabs_1 = __webpack_require__(207);
exports.Tabs = Tabs_1.default;
exports.Tab = Tabs_1.Tab;
exports.TabContainer = Tabs_1.TabContainer;
exports.TabsGroup = Tabs_1.TabsGroup;
var Textarea_1 = __webpack_require__(212);
exports.Textarea = Textarea_1.default;
var Timeline_1 = __webpack_require__(214);
exports.Timeline = Timeline_1.default;
exports.TimelineItem = Timeline_1.TimelineItem;
var Toast_1 = __webpack_require__(217);
exports.Toast = Toast_1.default;
var View_1 = __webpack_require__(219);
exports.View = View_1.default;
var Tree_1 = __webpack_require__(221);
exports.Tree = Tree_1.default;
exports.TreeNode = Tree_1.TreeNode;
var Tooltip_1 = __webpack_require__(225);
exports.Tooltip = Tooltip_1.default;
var Transitions_1 = __webpack_require__(4);
exports.Collapse = Transitions_1.Collapse;
exports.Fade = Transitions_1.Fade;
exports.FadeInDown = Transitions_1.FadeInDown;
exports.FadeInUp = Transitions_1.FadeInUp;
exports.FadeInZoom = Transitions_1.FadeInZoom;
exports.MotionGroup = Transitions_1.MotionGroup;
exports.TransitionGroup = Transitions_1.TransitionGroup;
exports.ZoomIn = Transitions_1.ZoomIn;
exports.default = {
    AccordionGroup: Accordion_1.AccordionGroup,
    Accordion: Accordion_1.default,
    ActionSheet: ActionSheet_1.default,
    Autocomplete: Autocomplete_1.default,
    Avatar: Avatar_1.default,
    BackTop: BackTop_1.default,
    Badge: Badge_1.default,
    Button: Button_1.default,
    ButtonGroup: Button_1.ButtonGroup,
    ButtonNavigation: ButtonNavigation_1.default,
    ButtonNavigationItem: ButtonNavigation_1.ButtonNavigationItem,
    Calendar: Calendar_1.default,
    Card: Card_1.default,
    CardHeader: Card_1.CardHeader,
    CardContent: Card_1.CardContent,
    CardFooter: Card_1.CardFooter,
    Checkbox: Checkbox_1.default,
    Chip: Chip_1.default,
    ChipGroup: Chip_1.ChipGroup,
    Row: Grid_1.default,
    Col: Grid_1.Col,
    HighlightCode: HighlightCode_1.default,
    FabButton: FabButton_1.default,
    Icon: Icon_1.default,
    IndexList: IndexList_1.default,
    IndexSection: IndexList_1.IndexSection,
    Indicator: Indicator_1.default,
    InputNumber: InputNumber_1.default,
    Inputtext: Inputtext_1.default,
    KeyBoard: KeyBoard_1.default,
    Knob: Knob_1.default,
    LazyLoad: LazyLoad_1.default,
    List: List_1.default,
    ListItem: List_1.ListItem,
    ListItemAction: List_1.ListItemAction,
    ListItemText: List_1.ListItemText,
    Locker: Locker_1.default,
    DatetimePicker: DatetimePicker_1.default,
    Picker: Picker_1.default,
    MessageBox: MessageBox_1.default,
    Modal: Modal_1.default,
    Notification: Notification_1.default,
    Popover: Popover_1.default,
    Popup: Popup_1.default,
    NavBar: NavBar_1.default,
    Page: Page_1.default,
    Content: Page_1.Content,
    Pagination: Pagination_1.default,
    Panel: Panel_1.default,
    PanelContent: Panel_1.PanelContent,
    PanelHeader: Panel_1.PanelHeader,
    Paper: Paper_1.default,
    Portal: Portal_1.default,
    Progress: Progress_1.default,
    Radio: Radio_1.default,
    Rate: Rate_1.default,
    Ripple: Ripple_1.default,
    AnimatedSwitch: Router_1.AnimatedSwitch,
    SearchBar: SearchBar_1.default,
    Segment: Segment_1.default,
    Sidebar: Sidebar_1.default,
    Slider: Slider_1.default,
    Spin: Spin_1.default,
    Swiper: Swiper_1.default,
    Switch: Switch_1.default,
    Table: Table_1.default,
    TableColumn: Table_1.TableColumn,
    Tabs: Tabs_1.default,
    Tab: Tabs_1.Tab,
    TabContainer: Tabs_1.TabContainer,
    TabsGroup: Tabs_1.TabsGroup,
    Textarea: Textarea_1.default,
    Timeline: Timeline_1.default,
    TimelineItem: Timeline_1.TimelineItem,
    Toast: Toast_1.default,
    Tooltip: Tooltip_1.default,
    Tree: Tree_1.default,
    TreeNode: Tree_1.TreeNode,
    Collapse: Transitions_1.Collapse,
    Fade: Transitions_1.Fade,
    FadeInDown: Transitions_1.FadeInDown,
    FadeInUp: Transitions_1.FadeInUp,
    FadeInZoom: Transitions_1.FadeInZoom,
    MotionGroup: Transitions_1.MotionGroup,
    TransitionGroup: Transitions_1.TransitionGroup,
    ZoomIn: Transitions_1.ZoomIn,
    View: View_1.default
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Accordion_1 = __webpack_require__(67);
exports.default = Accordion_1.default;
var AccordionGroup_1 = __webpack_require__(75);
exports.AccordionGroup = AccordionGroup_1.default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Transitions_1 = __webpack_require__(4);
var Ripple_1 = __webpack_require__(9);
var Accordion = /** @class */function (_super) {
    __extends(Accordion, _super);
    function Accordion(props) {
        var _this = _super.call(this, props) || this;
        _this.expanded = false;
        _this.handleToggle = function (event) {
            var _a = _this.props,
                disabled = _a.disabled,
                onChange = _a.onChange,
                index = _a.index,
                name = _a.name;
            if (disabled) {
                return;
            }
            var expanded = _this.state.expanded;
            if (onChange) {
                onChange({
                    event: event,
                    index: name || index,
                    expanded: expanded
                });
            }
        };
        var expanded = false;
        if (props.expanded) {
            expanded = props.expanded;
        }
        _this.state = {
            expanded: expanded
        };
        return _this;
    }
    Accordion.prototype.componentWillReceiveProps = function (nextProps) {
        if ('expanded' in nextProps && this.props.expanded !== nextProps.expanded) {
            this.setState({
                expanded: nextProps.expanded
            });
        }
    };
    Accordion.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            className = _a.className,
            disableRipple = _a.disableRipple,
            index = _a.index,
            header = _a.header,
            prefixCls = _a.prefixCls;
        var expanded = this.state.expanded;
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-expanded"] = expanded, _b), className);
        return React.createElement("div", { className: styleClass }, React.createElement("div", { className: "bm-AccordionHeader", onClick: this.handleToggle }, React.createElement("div", { className: "bm-AccordionHeader-toggle" }, header), !disableRipple ? React.createElement(Ripple_1.default, { hidden: false }) : null), React.createElement(Transitions_1.Collapse, { in: expanded, className: "bm-AccordionContent" }, React.createElement(React.Fragment, null, React.createElement("div", { className: "bm-AccordionContentInner" }, children))));
        var _b;
    };
    Accordion.defaultProps = {
        closeOthers: false,
        disabled: false,
        disableRipple: false,
        expanded: false,
        prefixCls: 'bm-Accordion'
    };
    return Accordion;
}(React.PureComponent);
exports.default = Accordion;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var react_motion_1 = __webpack_require__(5);
var MotionGroup_1 = __webpack_require__(6);
var Utils_1 = __webpack_require__(2);
var Collapse = /** @class */function (_super) {
    __extends(Collapse, _super);
    function Collapse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.collapseTransitions = {
            enterStyles: {
                height: 0
            },
            leaveStyles: {
                height: react_motion_1.spring(0, _this.props.springConfig)
            },
            activeStyles: {
                height: react_motion_1.spring(_this.measureHeight(), _this.props.springConfig)
            }
        };
        _this.state = {
            expanded: false
        };
        _this.getCollapseRef = function (node) {
            _this.wrapper = node;
        };
        return _this;
    }
    Collapse.prototype.componentDidMount = function () {
        this.collapseTransitions.activeStyles = this.getActiveStyle();
        if (this.props.in) {
            this.setState({
                expanded: this.props.in
            });
        }
    };
    Collapse.prototype.componentWillReceiveProps = function (nextProps) {
        if ('in' in nextProps && nextProps.in !== this.props.in) {
            this.collapseTransitions.activeStyles = this.getActiveStyle();
            this.setState({
                expanded: nextProps.in
            });
        }
    };
    Collapse.prototype.getActiveStyle = function () {
        return {
            height: react_motion_1.spring(this.measureHeight(), this.props.springConfig)
        };
    };
    ;
    Collapse.prototype.measureHeight = function () {
        var collapsedHeight = 0;
        if (this.wrapper) {
            var overflow = this.wrapper.style.overflow;
            this.wrapper.style.height = '1px';
            this.wrapper.style.overflow = 'auto';
            collapsedHeight = this.wrapper.scrollHeight;
            this.wrapper.style.overflow = overflow;
            this.wrapper.style.height = 0;
        }
        return collapsedHeight;
    };
    Collapse.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            children = _a.children,
            className = _a.className,
            onEnter = _a.onEnter,
            onLeave = _a.onLeave,
            other = __rest(_a, ["children", "className", "onEnter", "onLeave"]);
        var styleClass = classNames('bm-Collapse', className);
        var otherProps = Utils_1.getOtherProperties(other, ['in', 'springConfig']);
        return React.createElement(MotionGroup_1.default, __assign({ onEnter: onEnter, onLeave: onLeave, in: this.state.expanded }, this.collapseTransitions), function (_a) {
            var height = _a.height;
            return React.createElement("div", __assign({ className: styleClass }, otherProps), React.createElement("div", { ref: _this.getCollapseRef, style: { height: height } }, children));
        });
    };
    Collapse.defaultProps = {
        in: false,
        springConfig: {
            stiffness: 170,
            damping: 26
        }
    };
    return Collapse;
}(React.PureComponent);
exports.default = Collapse;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var react_motion_1 = __webpack_require__(5);
var MotionGroup_1 = __webpack_require__(6);
var Fade = /** @class */function (_super) {
    __extends(Fade, _super);
    function Fade() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fadeTransitions = {
            enterStyles: {
                opacity: 0
            },
            leaveStyles: {
                opacity: react_motion_1.spring(0, {
                    stiffness: 170,
                    damping: 26
                })
            },
            activeStyles: {
                opacity: react_motion_1.spring(1, {
                    stiffness: 170,
                    damping: 26
                })
            }
        };
        return _this;
    }
    Fade.prototype.componentDidMount = function () {
        if (this.props.in) {
            this.forceUpdate();
        }
    };
    Fade.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            inProp = _a.in,
            onEnter = _a.onEnter,
            onLeave = _a.onLeave,
            other = __rest(_a, ["className", "children", "in", "onEnter", "onLeave"]);
        var styleClass = classNames('bm-Fade', className);
        return React.createElement(MotionGroup_1.default, __assign({ in: inProp, onEnter: onEnter, onLeave: onLeave }, this.fadeTransitions), function (_a) {
            var opacity = _a.opacity;
            return React.createElement("div", __assign({ className: styleClass }, other, { style: { opacity: opacity } }), children);
        });
    };
    return Fade;
}(React.PureComponent);
exports.default = Fade;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var react_motion_1 = __webpack_require__(5);
var MotionGroup_1 = __webpack_require__(6);
var FadeInUp = /** @class */function (_super) {
    __extends(FadeInUp, _super);
    function FadeInUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.zoomInTransitions = {
            enterStyles: {
                opacity: 0,
                y: 300
            },
            leaveStyles: {
                opacity: react_motion_1.spring(0),
                y: react_motion_1.spring(300)
            },
            activeStyles: {
                opacity: react_motion_1.spring(1),
                y: react_motion_1.spring(0, {
                    stiffness: 300,
                    damping: 30
                })
            }
        };
        return _this;
    }
    FadeInUp.prototype.componentDidMount = function () {
        if (this.props.in) {
            this.forceUpdate();
        }
    };
    FadeInUp.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            inProp = _a.in,
            onEnter = _a.onEnter,
            onLeave = _a.onLeave,
            other = __rest(_a, ["className", "children", "in", "onEnter", "onLeave"]);
        var styleClass = classNames('bm-FadeInUp', className);
        return React.createElement(MotionGroup_1.default, __assign({ in: inProp, onEnter: onEnter, onLeave: onLeave }, this.zoomInTransitions), function (_a) {
            var opacity = _a.opacity,
                y = _a.y;
            return React.createElement("div", __assign({ className: styleClass }, other, { style: {
                    opacity: opacity,
                    transform: 'translate3d(0, ' + y + 'px, 0)'
                } }), children);
        });
    };
    return FadeInUp;
}(React.PureComponent);
exports.default = FadeInUp;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var react_motion_1 = __webpack_require__(5);
var MotionGroup_1 = __webpack_require__(6);
var ZoomIn = /** @class */function (_super) {
    __extends(ZoomIn, _super);
    function ZoomIn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.zoomInTransitions = {
            enterStyles: {
                scale: 2,
                opacity: 0
            },
            leaveStyles: {
                scale: react_motion_1.spring(2, _this.props.springConfig),
                opacity: react_motion_1.spring(0, _this.props.springConfig)
            },
            activeStyles: {
                scale: react_motion_1.spring(1, _this.props.springConfig),
                opacity: react_motion_1.spring(1, _this.props.springConfig)
            }
        };
        return _this;
    }
    ZoomIn.prototype.componentDidMount = function () {
        if (this.props.in) {
            this.forceUpdate();
        }
    };
    ZoomIn.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            inProps = _a.in,
            onEnter = _a.onEnter,
            onLeave = _a.onLeave;
        var styleClass = classNames('bm-ZoomIn', className);
        return React.createElement(MotionGroup_1.default, __assign({ onEnter: onEnter, onLeave: onLeave, in: inProps }, this.zoomInTransitions), function (_a) {
            var scale = _a.scale,
                opacity = _a.opacity;
            return React.createElement("div", { className: styleClass, style: { transform: 'scale(' + scale + ')', opacity: opacity } }, children);
        });
    };
    ZoomIn.defaultProps = {
        in: false,
        springConfig: {
            stiffness: 210,
            damping: 20
        }
    };
    return ZoomIn;
}(React.PureComponent);
exports.default = ZoomIn;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var react_motion_1 = __webpack_require__(5);
var TransitionGroup = /** @class */function (_super) {
    __extends(TransitionGroup, _super);
    function TransitionGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.willEnter = function () {
            if (_this.props.willEnter) {
                _this.props.willEnter();
            }
            return _this.props.enterStyles;
        };
        _this.willLeave = function () {
            if (_this.props.willLeave) {
                _this.props.willLeave();
            }
            return __assign({}, _this.props.leaveStyles);
        };
        _this.didLeave = function (styleThatLeft) {
            if (_this.props.didLeave) {
                _this.props.didLeave(styleThatLeft);
            }
        };
        _this.renderElement = function (config) {
            if (config === void 0) {
                config = {};
            }
            var styles = _this.props.styles;
            var props = {
                style: styles(config.style),
                key: config.key
            };
            return !!_this.props.wrapperComponent !== false ? React.createElement(_this.props.wrapperComponent, props, config.data) : React.cloneElement(config.data, props);
        };
        return _this;
    }
    TransitionGroup.prototype.getDefaultStyles = function () {
        var _a = this.props,
            children = _a.children,
            enterStyles = _a.enterStyles;
        if (!children) {
            return [];
        }
        var key = children['key'];
        return [{
            key: key,
            data: children,
            style: enterStyles
        }];
    };
    TransitionGroup.prototype.getStyles = function () {
        var _a = this.props,
            children = _a.children,
            activeStyles = _a.activeStyles;
        if (!children) {
            return [];
        }
        var key = children['key'];
        return [{
            key: key,
            data: children,
            style: activeStyles
        }];
    };
    TransitionGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            className = _a.className,
            transitionName = _a.transitionName;
        var styleClass = classNames(transitionName, className);
        return React.createElement(react_motion_1.TransitionMotion, { defaultStyles: this.getDefaultStyles(), styles: this.getStyles(), willEnter: this.willEnter, willLeave: this.willLeave }, function (styles) {
            return React.createElement("div", { className: styleClass }, styles.map(_this.renderElement));
        });
    };
    return TransitionGroup;
}(React.PureComponent);
exports.default = TransitionGroup;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var react_motion_1 = __webpack_require__(5);
var MotionGroup_1 = __webpack_require__(6);
var MoveInRight = /** @class */function (_super) {
    __extends(MoveInRight, _super);
    function MoveInRight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.zoomInTransitions = {
            enterStyles: {
                opacity: 0,
                x: 300
            },
            leaveStyles: {
                opacity: react_motion_1.spring(0),
                x: react_motion_1.spring(300)
            },
            activeStyles: {
                opacity: react_motion_1.spring(1),
                x: react_motion_1.spring(0, {
                    stiffness: 300,
                    damping: 30
                })
            }
        };
        return _this;
    }
    MoveInRight.prototype.componentDidMount = function () {
        if (this.props.in) {
            this.forceUpdate();
        }
    };
    MoveInRight.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            inProp = _a.in,
            onLeave = _a.onLeave,
            onEnter = _a.onEnter,
            other = __rest(_a, ["className", "children", "in", "onLeave", "onEnter"]);
        var styleClass = classNames('bm-MoveInRight', className);
        return React.createElement(MotionGroup_1.default, __assign({ in: inProp }, this.zoomInTransitions, { onEnter: onEnter, onLeave: onLeave }), function (_a) {
            var opacity = _a.opacity,
                x = _a.x;
            return React.createElement("div", __assign({ className: styleClass, style: {
                    opacity: opacity,
                    transform: "translate3d(" + x + "px, 0, 0)"
                } }, other), children);
        });
    };
    return MoveInRight;
}(React.PureComponent);
exports.default = MoveInRight;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var Dom_1 = __webpack_require__(7);
var Ripple = /** @class */function (_super) {
    __extends(Ripple, _super);
    function Ripple(props) {
        var _this = _super.call(this, props) || this;
        _this.now = new Date();
        _this.seed = 0;
        _this.state = {
            children: []
        };
        _this.getUuid = function () {
            return "Ripple-" + _this.now + "_" + _this.seed++;
        };
        _this.getRef = function (node) {
            _this.rippleNode = node;
        };
        _this.ripple = function (event, element) {
            var touchEvent = _this.getPoint(event);
            var _a = _this.props,
                centerMode = _a.centerMode,
                prefixCls = _a.prefixCls,
                sizeProps = _a.size;
            var x = touchEvent.pageX || document.documentElement.scrollLeft + document.body.scrollLeft + touchEvent.clientX;
            var y = touchEvent.pageY || document.documentElement.scrollTop + document.body.scrollTop + touchEvent.clientY;
            var parentNode = _this.rippleNode.parentNode;
            var offsetWidth = parentNode.offsetWidth,
                offsetHeight = parentNode.offsetHeight;
            var scale = sizeProps === 'sm' ? 2 : 1;
            var size = Math.max(offsetWidth, offsetHeight) * 2;
            var rect = Utils_1.getRect(parentNode);
            if (!centerMode) {
                x = x - rect.left - size / 2;
                y = y - rect.top - size / 2;
            } else {
                x = y = -size / 4;
            }
            if (sizeProps === 'sm') {
                x = y = 0;
            }
            Dom_1.css(element, {
                width: size / scale + 'px',
                height: size / scale + 'px',
                top: y + 'px',
                left: x + 'px'
            });
            Dom_1.addClass(element, prefixCls + "-Effect");
        };
        _this.handleTouchStart = function (event) {
            var children = _this.state.children.slice();
            var prefixCls = _this.props.prefixCls;
            children.push(_this.getUuid());
            _this.setState({ children: children }, function () {
                var activeIndex = children.length - 1;
                var rippleChild = _this.rippleNode.querySelectorAll("." + prefixCls);
                if (rippleChild[activeIndex]) {
                    _this.ripple(event, rippleChild[activeIndex]);
                }
            });
        };
        _this.handleAnimationEnd = function (key) {
            var children = _this.state.children.filter(function (child) {
                return key !== child;
            });
            _this.setState({ children: children });
        };
        _this.touchEvent = Utils_1.getTouchEvent();
        return _this;
    }
    Ripple.prototype.componentDidMount = function () {
        if (this.rippleNode) {
            this.rippleNode.parentNode.addEventListener(this.touchEvent.touchstart, this.handleTouchStart);
        }
    };
    Ripple.prototype.componentWillUnmount = function () {
        if (this.rippleNode) {
            this.rippleNode.parentNode.removeEventListener(this.touchEvent.touchstart, this.handleTouchStart);
        }
        this.rippleNode = null;
        this.touchEvent = null;
    };
    Ripple.prototype.getPoint = function (event) {
        event = event || window.event;
        return this.touchEvent.mobile ? event.changedTouches[0] : event;
    };
    Ripple.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            hidden = _a.hidden,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["className", "children", "hidden", "prefixCls"]);
        var styleClass = classNames(prefixCls, className);
        var groupClass = classNames(prefixCls + "-group", (_b = {}, _b[prefixCls + "-hidden"] = hidden, _b));
        var styles = {
            backgroundColor: this.props.rippleColor
        };
        var otherProps = Utils_1.getOtherProperties(other, ['centerMode']);
        return React.createElement("div", { className: groupClass, ref: this.getRef }, this.state.children.map(function (child) {
            return React.createElement("div", __assign({ key: child, className: styleClass, style: styles }, otherProps, { onAnimationEnd: _this.handleAnimationEnd.bind(_this, child) }), children);
        }));
        var _b;
    };
    Ripple.defaultProps = {
        centerMode: false,
        hidden: true,
        prefixCls: 'bm-Ripple'
    };
    return Ripple;
}(React.PureComponent);
exports.default = Ripple;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var AccordionGroup = /** @class */function (_super) {
    __extends(AccordionGroup, _super);
    function AccordionGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            var _a = _this.props,
                onChange = _a.onChange,
                closeOthers = _a.closeOthers;
            var index = event.index;
            var expanded = event.expanded;
            var currentValue = _this.state.currentValue.slice() || [];
            if (closeOthers) {
                currentValue = expanded ? [] : [index];
            } else if (expanded) {
                currentValue = currentValue.filter(function (value) {
                    return index !== value;
                });
            } else {
                currentValue.push(index);
            }
            _this.setState({
                currentValue: currentValue
            });
            if (onChange) {
                onChange(currentValue);
            }
        };
        _this.state = {
            currentValue: Array.isArray(props.activeIndex) ? props.activeIndex : [props.activeIndex]
        };
        return _this;
    }
    AccordionGroup.prototype.componentWillReceiveProps = function (nextProps) {
        if ('activeIndex' in nextProps && nextProps.activeIndex !== this.props.activeIndex) {
            this.setState({
                currentValue: nextProps.activeIndex
            });
        }
    };
    AccordionGroup.prototype.getCurrentValue = function () {
        var currentValue = this.state.currentValue || [];
        var accordion = this.props.closeOthers;
        if (!Array.isArray(currentValue)) {
            currentValue = [currentValue];
        }
        if (accordion && currentValue.length > 1) {
            currentValue = [currentValue[currentValue.length - 1]];
        }
        return currentValue;
    };
    AccordionGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            childrenProp = _a.children,
            className = _a.className,
            closeOthers = _a.closeOthers,
            disableRipple = _a.disableRipple,
            prefixCls = _a.prefixCls;
        var styleClass = classNames(prefixCls, className);
        var currentValue = this.getCurrentValue();
        var children = React.Children.map(childrenProp, function (child, index) {
            var _a = child.props,
                disabled = _a.disabled,
                name = _a.name;
            var expanded = currentValue.indexOf(name || index) > -1;
            return React.cloneElement(child, {
                closeOthers: closeOthers,
                disableRipple: disableRipple,
                disabled: disabled,
                expanded: expanded,
                name: name,
                index: index,
                onChange: _this.handleChange
            });
        });
        return React.createElement("div", { className: styleClass }, children);
    };
    AccordionGroup.defaultProps = {
        disableRipple: true,
        activeIndex: [],
        prefixCls: 'bm-AccordionGroup'
    };
    return AccordionGroup;
}(React.PureComponent);
exports.default = AccordionGroup;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var ActionSheet_1 = __webpack_require__(77);
exports.default = ActionSheet_1.default;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Message_1 = __webpack_require__(11);
var Transitions_1 = __webpack_require__(4);
var actionSheetInstance;
var getActionSheetInstance = function getActionSheetInstance(props) {
    if (actionSheetInstance) {
        return actionSheetInstance;
    }
    return Message_1.default.create(__assign({}, props));
};
var ActionSheet = /** @class */function () {
    function ActionSheet(props) {
        var _this = this;
        this.handleClose = function () {
            actionSheetInstance.remove(_this.currentItem.key);
        };
        this.handleClick = function (button, event) {
            if (button.onClick) {
                button.onClick({
                    button: button, event: event
                });
            }
            _this.handleClose();
        };
        props['delay'] = 0;
        props['actionClass'] = props['actionClass'] || 'bm-ActionSheet-group';
        props['prefixCls'] = 'bm-ActionSheet';
        props['className'] = props['prefixCls'];
        props['cancelText'] = props['cancelText'] || 'cancel';
        props['visible'] = true;
        this.props = props;
        actionSheetInstance = getActionSheetInstance({
            hideBackdrop: true,
            className: props['actionClass'],
            onClose: props['onClose'] || function () {}
        });
        this.currentItem = this.create();
    }
    ActionSheet.prototype.addButtons = function () {
        var _this = this;
        var _a = this.props,
            buttons = _a.buttons,
            prefixCls = _a.prefixCls,
            title = _a.title;
        var addGroup = function addGroup(buttons) {
            var num = 0;
            var children = [];
            if (title) {
                children.push(React.createElement("div", { key: "title", className: "bm-ActionSheet-title" }, title));
            }
            for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
                var button = buttons_1[_i];
                if (Array.isArray(button)) {
                    children.push(addGroup(button));
                } else {
                    children.push(React.createElement("div", { key: "ActionSheetButton" + num, onClick: _this.handleClick.bind(button), className: prefixCls + "-button" }, button.text));
                }
                num++;
            }
            if (_this.props.cancel) {
                var cancelClass = classNames(prefixCls + "-button", prefixCls + "-cancel");
                children.push(React.createElement("div", { key: "ActionSheetButton-cancel", onClick: _this.handleClose, className: cancelClass }, _this.props.cancelText));
            }
            return children;
        };
        return addGroup(buttons);
    };
    ActionSheet.prototype.create = function () {
        var props = Object.assign({}, this.props);
        var element = props.element,
            onClose = props.onClose,
            prefixCls = props.prefixCls,
            _a = props.visible,
            visible = _a === void 0 ? false : _a;
        var styleClass = classNames(prefixCls + "-item");
        props['message'] = React.createElement(Transitions_1.FadeInUp, { in: visible }, React.createElement("div", { className: styleClass, key: "ActionSheet-item" }, element ? element : this.addButtons()));
        props['onClose'] = function () {
            if (onClose) {
                onClose();
            }
        };
        return actionSheetInstance.create(__assign({}, props));
    };
    return ActionSheet;
}();
exports.ActionSheet = ActionSheet;
exports.default = {
    show: function show(props) {
        return new ActionSheet(__assign({}, props));
    },
    close: function close() {
        if (actionSheetInstance) {
            actionSheetInstance.clearAll();
            actionSheetInstance = null;
        }
    }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(16);
var classNames = __webpack_require__(1);
var MessageItem_1 = __webpack_require__(79);
var seed = 0;
var now = Date.now();
var getUuid = function getUuid() {
    return "Message-" + now + "_" + seed++;
};
var Message = /** @class */function (_super) {
    __extends(Message, _super);
    function Message(props) {
        var _this = _super.call(this, props) || this;
        _this.remove = function (key) {
            _this.setState(function (previousState) {
                var messages = previousState.messages.filter(function (message) {
                    return message.key !== key;
                });
                return {
                    messages: messages
                };
            });
        };
        _this.getMessageChildren = function () {
            var messages = _this.state.messages;
            var children = [];
            messages.map(function (message) {
                var close = function close() {
                    _this.remove(message.key);
                    if (message.onClose) message.onClose();
                };
                children.push(React.createElement(MessageItem_1.default, __assign({ key: message.key }, message, { onClose: close })));
            });
            return children;
        };
        _this.handleClose = function () {
            var messages = _this.state.messages.slice();
            if (messages.length > 0) {
                _this.remove(messages[messages.length - 1].key);
            }
            if (_this.props.onClose) {
                _this.props.onClose();
            }
        };
        _this.state = {
            messages: [],
            hideBackdrop: false
        };
        return _this;
    }
    Message.prototype.add = function (messageItem) {
        if (messageItem === void 0) {
            messageItem = {};
        }
        if (messageItem) {
            var key = messageItem.key ? messageItem.key : getUuid();
            var hideBackdrop = Boolean(messageItem.hideBackdrop);
            messageItem.key = key;
            messageItem.hideBackdrop = hideBackdrop;
            var messages = this.state.messages.slice();
            var isExit = false;
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                if (message.key === key) {
                    isExit = true;
                    break;
                }
            }
            if (!isExit) {
                messages.push(messageItem);
                this.setState({
                    hideBackdrop: hideBackdrop,
                    messages: messages
                });
            }
        }
        return messageItem;
    };
    ;
    Message.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            hideBackdrop = _a.hideBackdrop;
        var messages = this.state.messages;
        var styleClass = classNames('Message', {
            'Message-none': messages.length <= 0
        }, className);
        var messagesChildren = this.getMessageChildren();
        return React.createElement("div", { className: styleClass }, messages.length > 0 && hideBackdrop == true ? React.createElement("div", { onClick: this.handleClose, className: "Message-mask" }) : null, messagesChildren);
    };
    Message.create = function (props) {
        if (props === void 0) {
            props = {};
        }
        var div;
        div = document.createElement('div');
        document.body.appendChild(div);
        var message = ReactDOM.render(React.createElement(Message, __assign({}, props)), div);
        return {
            create: function create(props) {
                return message.add(props);
            },
            remove: function remove(key) {
                message.remove(key);
            },
            clearAll: function clearAll() {
                ReactDOM.unmountComponentAtNode(div);
                document.body.removeChild(div);
            },
            component: message
        };
    };
    return Message;
}(React.PureComponent);
exports.default = Message;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var MessageItem = /** @class */function (_super) {
    __extends(MessageItem, _super);
    function MessageItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.show = function () {
            if (_this.timer) {
                return;
            }
            var delay = _this.props.delay;
            if (delay > 0) {
                _this.timer = setTimeout(function () {
                    _this.close();
                }, delay);
            }
        };
        _this.close = function () {
            _this.clearTimer();
            if (_this.props.onClose) {
                _this.props.onClose();
            }
        };
        return _this;
    }
    MessageItem.prototype.componentWillMount = function () {
        this.show();
    };
    MessageItem.prototype.componentWillUnmount = function () {
        this.clearTimer();
    };
    MessageItem.prototype.clearTimer = function () {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    };
    MessageItem.prototype.render = function () {
        var _a = this.props,
            message = _a.message,
            className = _a.className;
        var styleClass = classNames('MessageItem', className);
        return React.createElement("div", { className: styleClass }, React.createElement("div", { className: "MessageItem-inner" }, message));
    };
    MessageItem.defaultProps = {
        delay: 2500
    };
    return MessageItem;
}(React.PureComponent);
exports.default = MessageItem;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Autocomplete_1 = __webpack_require__(81);
exports.default = Autocomplete_1.default;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Inputtext_1 = __webpack_require__(37);
var List_1 = __webpack_require__(39);
var Utils_1 = __webpack_require__(2);
var Dom_1 = __webpack_require__(7);
var Autocomplete = /** @class */function (_super) {
    __extends(Autocomplete, _super);
    function Autocomplete(props) {
        var _this = _super.call(this, props) || this;
        _this.filterValue = function (inputValue) {
            var count = 0;
            var countProps = _this.props.count;
            var data = _this.state.data;
            return data.filter(function (value) {
                var keep = (!inputValue || value.label.toLowerCase().includes(inputValue.toLowerCase())) && count < (countProps && countProps !== -1 || countProps === -1 && data.length || 5);
                if (keep) {
                    count += 1;
                }
                return keep;
            });
        };
        _this.handleDomClick = function (event) {
            if (_this.state.visible) {
                var prefixCls = _this.props.prefixCls;
                Dom_1.clickOutside(event.target, prefixCls, function () {
                    _this.selfClick = true;
                }, function () {
                    _this.selfClick = false;
                    _this.setState({
                        visible: false
                    });
                });
            }
        };
        _this.handleChange = function (value, event) {
            _this.setState({
                value: value,
                visible: true
            });
            if (_this.props.onChange) {
                _this.props.onChange(value, event);
            }
        };
        _this.handleFocus = function (value, event) {
            if (_this.props.onFocus) {
                _this.props.onFocus(value, event);
            }
        };
        _this.handleBlur = function (value, event) {
            if (_this.props.onBlur) {
                _this.props.onBlur(value, event);
            }
        };
        _this.handleItemClick = function (item, event) {
            if (_this.selfClick) {
                _this.setState({
                    value: item.label,
                    visible: false
                });
                if (_this.props.onSelect) {
                    _this.props.onSelect(item, event);
                }
            }
        };
        var data = [];
        if (Array.isArray(props.data)) {
            data = props.data;
        }
        _this.state = {
            data: data,
            value: '',
            visible: false
        };
        return _this;
    }
    Autocomplete.prototype.componentDidMount = function () {
        document.addEventListener('click', this.handleDomClick);
    };
    Autocomplete.prototype.componentWillReceiveProps = function (nextProps) {
        if ('data' in nextProps && this.props.data !== nextProps.data) {
            this.setState({
                data: nextProps.data
            });
        }
    };
    Autocomplete.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this.handleDomClick);
    };
    Autocomplete.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            className = _a.className,
            inline = _a.inline,
            maxHeight = _a.maxHeight,
            prefixCls = _a.prefixCls,
            startAdorn = _a.startAdorn,
            other = __rest(_a, ["className", "inline", "maxHeight", "prefixCls", "startAdorn"]);
        var styleClass = classNames(prefixCls, className);
        var _b = this.state,
            value = _b.value,
            visible = _b.visible;
        var menuClass = classNames(prefixCls + "-menus", (_c = {}, _c[prefixCls + "-menus-active"] = visible, _c[prefixCls + "-inline"] = inline, _c[prefixCls + "-scroll"] = maxHeight, _c));
        var styles = {
            maxHeight: maxHeight
        };
        var otherProps = Utils_1.getOtherProperties(other, ['data', 'children', 'onSelect']);
        return React.createElement("div", __assign({ className: styleClass }, otherProps), React.createElement(Inputtext_1.default, { value: value, startAdorn: startAdorn, onFocus: this.handleFocus, onBlur: this.handleBlur, onChange: this.handleChange }), React.createElement("div", { className: menuClass, style: styles }, React.createElement(List_1.default, null, this.filterValue(value).map(function (item, index) {
            return React.createElement(List_1.ListItem, { key: 'bm-Autocomplete-item-' + index, onClick: _this.handleItemClick.bind(_this, item) }, React.createElement(List_1.ListItemText, null, item.label));
        }))));
        var _c;
    };
    Autocomplete.defaultProps = {
        count: 5,
        data: [],
        prefixCls: 'bm-Autocomplete'
    };
    return Autocomplete;
}(React.PureComponent);
exports.default = Autocomplete;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var List = /** @class */function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.render = function () {
        var _a = this.props,
            avatarRight = _a.avatarRight,
            childrenProps = _a.children,
            className = _a.className,
            disableRipple = _a.disableRipple,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["avatarRight", "children", "className", "disableRipple", "prefixCls"]);
        var styleClass = classNames(prefixCls, avatarRight ? prefixCls + "-avatar-right" : '', className);
        var children = React.Children.map(childrenProps, function (child, index) {
            if (!React.isValidElement(child)) {
                return;
            }
            var props = __assign({}, child.props);
            props['index'] = index;
            props['disableRipple'] = disableRipple;
            return React.cloneElement(child, props);
        });
        return React.createElement("ul", __assign({ className: styleClass }, other), children);
    };
    List.defaultProps = {
        prefixCls: 'bm-List',
        disableRipple: true
    };
    return List;
}(React.PureComponent);
exports.default = List;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Ripple_1 = __webpack_require__(9);
var ListItem = /** @class */function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            event.stopPropagation();
            if (_this.props.onClick) {
                _this.props.onClick(event);
            }
        };
        return _this;
    }
    ListItem.prototype.render = function () {
        var _a = this.props,
            avatarRight = _a.avatarRight,
            children = _a.children,
            className = _a.className,
            disableRipple = _a.disableRipple,
            index = _a.index,
            onClick = _a.onClick,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["avatarRight", "children", "className", "disableRipple", "index", "onClick", "prefixCls"]);
        var styleClass = classNames(prefixCls, avatarRight ? prefixCls + "-avatar-right" : '', className);
        return React.createElement("li", __assign({ className: styleClass, onClick: this.handleClick }, other), React.createElement("div", { className: prefixCls + "-btn" }, children, !disableRipple ? React.createElement(Ripple_1.default, null) : null));
    };
    ListItem.defaultProps = {
        prefixCls: 'bm-List-item',
        disableRipple: false
    };
    return ListItem;
}(React.PureComponent);
exports.default = ListItem;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var ListItemText = /** @class */function (_super) {
    __extends(ListItemText, _super);
    function ListItemText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListItemText.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            className = _a.className,
            prefixCls = _a.prefixCls;
        var styleClass = classNames(prefixCls, className);
        return React.createElement("div", { className: styleClass }, children);
    };
    ListItemText.defaultProps = {
        prefixCls: 'bm-List-item-text'
    };
    return ListItemText;
}(React.PureComponent);
exports.default = ListItemText;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var ListItemAction = /** @class */function (_super) {
    __extends(ListItemAction, _super);
    function ListItemAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListItemAction.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["className", "children", "prefixCls"]);
        var styleClass = classNames(prefixCls, className);
        return React.createElement("div", __assign({ className: styleClass }, other), children);
    };
    ListItemAction.defaultProps = {
        prefixCls: 'bm-ListItemAction'
    };
    return ListItemAction;
}(React.PureComponent);
exports.default = ListItemAction;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Avatar_1 = __webpack_require__(87);
exports.default = Avatar_1.default;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var Avatar = /** @class */function (_super) {
    __extends(Avatar, _super);
    function Avatar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Avatar.prototype.render = function () {
        var _a = this.props,
            height = _a.height,
            srcProps = _a.src,
            alt = _a.alt,
            lazyLoad = _a.lazyLoad,
            className = _a.className,
            children = _a.children,
            shape = _a.shape,
            title = _a.title,
            prefixCls = _a.prefixCls,
            width = _a.width,
            other = __rest(_a, ["height", "src", "alt", "lazyLoad", "className", "children", "shape", "title", "prefixCls", "width"]);
        var styleClass = classNames(prefixCls, className, (_b = {}, _b[prefixCls + "-circle"] = shape === 'circle', _b));
        var otherProps = Utils_1.getOtherProperties(other, ['']);
        var src = lazyLoad ? this.state.src : srcProps;
        var styles = {
            width: width,
            height: height
        };
        return React.createElement("div", __assign({ className: styleClass }, otherProps), src ? React.createElement("img", { style: styles, src: src, alt: alt, title: title }) : children);
        var _b;
    };
    Avatar.defaultProps = {
        prefixCls: 'bm-Avatar'
    };
    return Avatar;
}(React.PureComponent);
exports.default = Avatar;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var BackTop_1 = __webpack_require__(89);
exports.default = BackTop_1.default;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Easing_1 = __webpack_require__(90);
var Dom_1 = __webpack_require__(7);
var Utils_1 = __webpack_require__(2);
var BackTop = /** @class */function (_super) {
    __extends(BackTop, _super);
    function BackTop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startY = 0;
        _this.state = {
            visible: false
        };
        _this.scroll = function () {
            var _a = _this.props,
                destination = _a.destination,
                duration = _a.duration,
                easing = _a.easing,
                onScrollEnd = _a.onScrollEnd;
            var now = Date.now();
            var time = Math.min(1, (now - _this.startTime) / duration);
            var timeFunction = Easing_1.EASINGS[easing](time);
            _this.scrollNode.scrollTop = timeFunction * (destination - _this.startY) + _this.startY;
            if (_this.scrollNode.scrollTop === destination) {
                if (onScrollEnd) {
                    onScrollEnd();
                }
                return;
            }
            window.requestAnimationFrame(_this.scroll);
        };
        _this.handleClick = function () {
            _this.startTime = Date.now();
            _this.startY = _this.scrollNode.scrollTop;
            _this.scroll();
        };
        _this.getRef = function (node) {
            _this.node = node;
            var scrollNode = _this.props.scrollNode;
            if (scrollNode) {
                _this.scrollNode = scrollNode;
            } else {
                _this.scrollNode = Dom_1.getScrollParent(_this.node);
            }
        };
        return _this;
    }
    BackTop.prototype.componentDidMount = function () {
        var _this = this;
        this.scrollListener = Dom_1.listen(this.scrollNode, 'scroll', function (e) {
            var scrollTop = e.target.scrollTop;
            if (scrollTop > _this.props.destination) {
                _this.setState({
                    visible: true
                });
            } else {
                _this.setState({
                    visible: false
                });
            }
        });
    };
    BackTop.prototype.componentWillUnmount = function () {
        if (this.scrollListener) {
            this.scrollListener();
            this.scrollListener = null;
        }
    };
    BackTop.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            prefixCls = _a.prefixCls,
            bottom = _a.bottom,
            right = _a.right,
            other = __rest(_a, ["className", "children", "prefixCls", "bottom", "right"]);
        var styleClass = classNames(prefixCls, className);
        var styles = {
            right: Utils_1.getSize(right),
            bottom: Utils_1.getSize(bottom),
            display: this.state.visible ? 'block' : 'none'
        };
        var otherProps = Utils_1.getOtherProperties(other, ['destination', 'duration', 'easing', 'scrollNode', 'onScrollEnd']);
        return React.createElement("div", __assign({ className: styleClass, style: styles, ref: this.getRef }, otherProps, { onClick: this.handleClick }), children);
    };
    BackTop.defaultProps = {
        destination: 0,
        duration: 200,
        right: 30,
        bottom: 30,
        easing: 'linear',
        prefixCls: 'bm-BackTop'
    };
    return BackTop;
}(React.PureComponent);
exports.default = BackTop;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.EASINGS = {
    // no easing, no acceleration
    linear: function linear(t) {
        return t;
    },
    // accelerating from zero velocity
    easeInQuad: function easeInQuad(t) {
        return t * t;
    },
    // decelerating to zero velocity
    easeOutQuad: function easeOutQuad(t) {
        return t * (2 - t);
    },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    // accelerating from zero velocity
    easeInCubic: function easeInCubic(t) {
        return t * t * t;
    },
    // decelerating to zero velocity
    easeOutCubic: function easeOutCubic(t) {
        return --t * t * t + 1;
    },
    // acceleration until halfway, then deceleration
    easeInOutCubic: function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    // accelerating from zero velocity
    easeInQuart: function easeInQuart(t) {
        return t * t * t * t;
    },
    // decelerating to zero velocity
    easeOutQuart: function easeOutQuart(t) {
        return 1 - --t * t * t * t;
    },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    // accelerating from zero velocity
    easeInQuint: function easeInQuint(t) {
        return t * t * t * t * t;
    },
    // decelerating to zero velocity
    easeOutQuint: function easeOutQuint(t) {
        return 1 + --t * t * t * t * t;
    },
    // acceleration until halfway, then deceleration
    easeInOutQuint: function easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Badge_1 = __webpack_require__(92);
exports.default = Badge_1.default;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Badge = /** @class */function (_super) {
    __extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badge.prototype.componentWillReceiveProps = function (nextProps) {
        if ('count' in nextProps && this.props.count !== nextProps.count) {
            this.forceUpdate();
        }
    };
    Badge.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            count = _a.count,
            fixed = _a.fixed,
            dot = _a.dot,
            notify = _a.notify,
            max = _a.max,
            prefixCls = _a.prefixCls,
            shape = _a.shape,
            status = _a.status,
            text = _a.text,
            other = __rest(_a, ["className", "children", "count", "fixed", "dot", "notify", "max", "prefixCls", "shape", "status", "text"]);
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-sr-only"] = !children, _b[prefixCls + "-fixed"] = fixed, _b), className);
        var supStyleClass = classNames(prefixCls + "-count", (_c = {}, _c[prefixCls + "-dot"] = dot, _c[prefixCls + "-notify"] = notify, _c[prefixCls + "-circle"] = shape === 'circle', _c), prefixCls + "-" + status);
        var currentCount = count > max ? max + '+' : count;
        return React.createElement("span", __assign({ className: styleClass }, other), children, React.createElement("span", { className: supStyleClass }, text ? text : React.createElement("span", { className: prefixCls + "-count-inner" }, dot || count === 0 ? null : currentCount)));
        var _b, _c;
    };
    Badge.defaultProps = {
        count: 0,
        dot: false,
        fixed: true,
        max: 99,
        prefixCls: 'bm-Badge',
        status: 'error'
    };
    return Badge;
}(React.PureComponent);
exports.default = Badge;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var ButtonGroup = /** @class */function (_super) {
    __extends(ButtonGroup, _super);
    function ButtonGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonGroup.prototype.render = function () {
        var _a = this.props,
            dir = _a.dir,
            children = _a.children,
            className = _a.className,
            prefixCls = _a.prefixCls;
        var styleClass = classNames(prefixCls, prefixCls + "-" + dir, className);
        return React.createElement("div", { className: styleClass }, children);
    };
    ButtonGroup.defaultProps = {
        dir: 'horizontal',
        prefixCls: 'bm-Button-group'
    };
    return ButtonGroup;
}(React.PureComponent);
exports.default = ButtonGroup;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var ButtonNavigation_1 = __webpack_require__(95);
exports.default = ButtonNavigation_1.default;
var ButtonNavigationItem_1 = __webpack_require__(96);
exports.ButtonNavigationItem = ButtonNavigationItem_1.default;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var ButtonNavigation = /** @class */function (_super) {
    __extends(ButtonNavigation, _super);
    function ButtonNavigation(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (index, event) {
            if (_this.props.onChange) {
                _this.props.onChange({
                    event: event, index: index
                });
            }
            _this.setState({ activeIndex: index });
        };
        var activeIndex = 0;
        if (typeof props.activeIndex === 'number') {
            activeIndex = props.activeIndex;
        }
        _this.state = {
            activeIndex: activeIndex
        };
        return _this;
    }
    ButtonNavigation.prototype.componentWillReceiveProps = function (nextProps) {
        var activeIndex = nextProps.activeIndex;
        if ('activeIndex' in nextProps && this.props.activeIndex !== activeIndex) {
            if (typeof activeIndex === 'number') {
                this.setState({ activeIndex: activeIndex });
            }
        }
    };
    ButtonNavigation.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            className = _a.className,
            childrenProps = _a.children,
            fixed = _a.fixed,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["className", "children", "fixed", "prefixCls"]);
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-fixed"] = fixed, _b), className);
        var otherProps = Utils_1.getOtherProperties(other, ['activeIndex', 'onChange', 'value', 'fixed']);
        var children = React.Children.map(childrenProps, function (child, index) {
            var props = __assign({}, child.props || {});
            props['active'] = index === _this.state.activeIndex;
            props['onClick'] = _this.handleClick.bind(_this, index);
            return React.cloneElement(child, props);
        });
        return React.createElement("div", __assign({ className: styleClass }, otherProps), children);
        var _b;
    };
    ButtonNavigation.defaultProps = {
        fixed: true,
        prefixCls: 'bm-ButtonNavigation'
    };
    return ButtonNavigation;
}(React.PureComponent);
exports.default = ButtonNavigation;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Button_1 = __webpack_require__(40);
var Utils_1 = __webpack_require__(2);
var ButtonNavigationItem = /** @class */function (_super) {
    __extends(ButtonNavigationItem, _super);
    function ButtonNavigationItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            if (_this.props.onClick) {
                _this.props.onClick(event);
            }
        };
        return _this;
    }
    ButtonNavigationItem.prototype.render = function () {
        var _a = this.props,
            active = _a.active,
            children = _a.children,
            className = _a.className,
            icon = _a.icon,
            label = _a.label,
            onClick = _a.onClick,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["active", "children", "className", "icon", "label", "onClick", "prefixCls"]);
        var styleClass = classNames(prefixCls, className, (_b = {}, _b[prefixCls + "-active"] = active, _b));
        var otherProps = Utils_1.getOtherProperties(other, ['onClick']);
        return React.createElement(Button_1.default, __assign({ className: styleClass, onClick: this.handleClick }, otherProps), React.createElement("span", { className: prefixCls + "-inner" }, icon, React.createElement("span", null, label), children));
        var _b;
    };
    ButtonNavigationItem.defaultProps = {
        prefixCls: 'bm-ButtonNavigationItem'
    };
    return ButtonNavigationItem;
}(React.PureComponent);
exports.default = ButtonNavigationItem;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Calendar_1 = __webpack_require__(98);
exports.default = Calendar_1.default;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var Transitions_1 = __webpack_require__(4);
var Portal_1 = __webpack_require__(12);
var Inputtext_1 = __webpack_require__(38);
var Calendar = /** @class */function (_super) {
    __extends(Calendar, _super);
    function Calendar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            calendar: []
        };
        _this.todayDate = new Date();
        _this.rows = 6;
        _this.cols = 7;
        _this._locale = {
            dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        };
        _this._locale_cn = {
            dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        };
        _this.onDateSelect = function (item, event) {
            if (item.type === 'current') {
                _this.selectReset();
                _this.selectDate(item.value, event);
                item.selected = true;
                _this.handleClose();
            }
        };
        _this.toChangeDate = function (add, year) {
            if (year === void 0) {
                year = false;
            }
            var _a = _this.state,
                currentYear = _a.currentYear,
                currentMonth = _a.currentMonth;
            if (year) {
                _this.setState({
                    currentYear: currentYear + add
                });
            } else {
                _this.setState({
                    currentMonth: currentMonth + add
                });
            }
        };
        _this.handleClose = function () {
            _this.setState({
                visible: false
            });
            if (_this.props.onClose) {
                _this.props.onClose();
            }
        };
        _this.handleClick = function () {
            _this.setState({
                visible: true
            });
        };
        return _this;
    }
    Calendar.prototype.componentWillMount = function () {
        this._selectLocale = this.props.lang.toLowerCase() === 'cn' ? this._locale_cn : this._locale;
        this._week = this._selectLocale.dayNamesShort;
        if (this.props.firstDayOfWeek === 1) {
            this._week.unshift(this._week[this._week.length - 1]);
            this._week.pop();
        }
    };
    Calendar.prototype.componentDidMount = function () {
        this.setDate(this.todayDate);
        this.firstYear = this.todayDate.getFullYear();
        if ('defaultValue' in this.props) {
            this.selectDate(this.props.defaultValue, null);
        }
    };
    Calendar.prototype.componentWillReceiveProps = function (nextProps) {
        if ('visible' in nextProps && this.props.visible !== nextProps.visible) {
            if (nextProps.visible) {
                if (this.props.onOpen) {
                    this.props.onOpen();
                }
            } else {
                if (this.props.onClose) {
                    this.props.onClose();
                }
            }
            this.setState({
                visible: nextProps.visible
            });
        }
    };
    Calendar.prototype.getMonthFirstDay = function (year, month) {
        var curDate = new Date();
        curDate.setFullYear(year);
        curDate.setMonth(month);
        curDate.setDate(0);
        var dd = curDate.getDate();
        curDate.setDate(1);
        var item = curDate.getDay();
        if (item === 0) {
            item = 7;
        }
        return {
            'total': dd,
            'day': item
        };
    };
    Calendar.prototype.getSomeDay = function (day, add) {
        var now = new Date(day);
        now.setDate(now.getDate() - add);
        var y = now.getFullYear();
        var m = now.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = now.getDate();
        d = d < 10 ? '0' + d : d;
        return {
            'y': y,
            'm': m,
            'd': d
        };
    };
    Calendar.prototype.getDate = function (currentDate) {
        if (!(currentDate instanceof Date)) {
            currentDate = new Date(currentDate);
        }
        var currentYear, currentMonth, currentDay, currentWeek;
        currentYear = currentDate.getFullYear();
        currentMonth = currentDate.getMonth() + 1;
        currentDay = currentDate.getDate();
        currentWeek = currentDate.getDate();
        return {
            currentYear: currentYear,
            currentMonth: currentMonth,
            currentDay: currentDay,
            currentWeek: currentWeek
        };
    };
    Calendar.prototype.setDate = function (date) {
        if (date === void 0) {
            date = new Date();
        }
        if (date && typeof date === 'string') {
            var tokens = date.trim().split(/\s+/);
            var dates = tokens[0].split(/[-\/]/gm);
            var arr = dates.map(function (d) {
                return parseInt(d, 10);
            });
            date = new Date(arr[0], arr[1] - 1, arr[2]);
        }
        var d = this.getDate(date);
        d['currentDate'] = date;
        this.setState(__assign({}, d));
    };
    Calendar.prototype.splitNum = function (v) {
        return parseInt(v, 10);
    };
    Calendar.prototype.isDateValid = function (value) {
        var regExp = /^\d{4}[-\/]\d{1,2}[-\/]\d{1,2}$/;
        if (regExp.test(value)) {
            var d = new Date(value);
            if (d && d.getDate()) {
                return true;
            }
        }
        return false;
    };
    Calendar.prototype.createCalendar = function () {
        var _a = this.props,
            minDate = _a.minDate,
            maxDate = _a.maxDate;
        var _b = this.state,
            currentYear = _b.currentYear,
            currentMonth = _b.currentMonth,
            currentDay = _b.currentDay;
        var calendar = [];
        if (currentMonth >= 13) {
            currentMonth = 1;
            currentYear += 1;
        } else if (currentMonth <= 0) {
            currentMonth = 12;
            currentYear -= 1;
        }
        var data = this.getMonthFirstDay(currentYear, currentMonth);
        var first = data.day;
        var total = data.total;
        var dd = this.getSomeDay(currentYear + '-' + currentMonth + '-1', 1);
        var selectedDay = this.splitNum(currentDay);
        if (this.props.firstDayOfWeek === 7) {
            first += 1;
            first = first === 8 ? 1 : first;
        }
        for (var i = 0; i < first - 1; i++) {
            var ymd = currentYear + '-' + (currentMonth - 1) + '-' + (dd.d - first + i + 2);
            calendar.push({
                value: ymd,
                currentMonth: currentMonth - 1,
                date: dd.d - first + i + 2,
                type: 'pass'
            });
        }
        for (var i = 1; i < total + 1; i++) {
            var ymd = currentYear + '-' + currentMonth + '-' + i;
            var isToday = i === this.todayDate.getDate();
            var type = 'current';
            var cur = new Date(ymd);
            if (minDate && this.isDateValid(minDate)) {
                type = new Date(minDate) < cur ? 'current' : 'pass';
            }
            if (maxDate && this.isDateValid(maxDate)) {
                type = new Date(maxDate) > cur ? 'current' : 'pass';
            }
            calendar.push({
                value: ymd,
                currentYear: currentYear,
                currentMonth: currentMonth,
                date: i,
                type: type,
                selected: i === selectedDay,
                today: isToday && currentMonth === this.todayDate.getMonth() + 1 && currentYear === this.todayDate.getFullYear()
            });
        }
        var both = total + first - 1;
        var b1 = (this.rows - 1) * this.cols;
        var b2 = this.rows * this.cols;
        var futureDate = both < b1 ? b1 - both : b2 - both;
        for (var i = 0; i < futureDate; i++) {
            var ymd = currentYear + '-' + (currentMonth + 1) + '-' + (i + 1);
            calendar.push({
                value: ymd,
                currentYear: currentYear,
                currentMonth: currentMonth + 1,
                date: i + 1,
                type: 'future',
                selected: false
            });
        }
        var months = [];
        var week = [];
        for (var i = 0; i < calendar.length; i++) {
            week.push(calendar[i]);
            if (i % 7 === 6) {
                months.push(week);
                week = [];
            }
        }
        calendar = months;
        return calendar;
    };
    Calendar.prototype.createWeek = function () {
        return this._week.map(function (w, i) {
            return React.createElement("th", { className: "Calendar-item", key: 'week_' + i }, w);
        });
    };
    Calendar.prototype.createDate = function () {
        var _this = this;
        return this.createCalendar().map(function (w, i) {
            return React.createElement("tr", { key: 'row_' + i }, w.map(function (day, j) {
                var styleClass = classNames('Calendar-item', day.type, {
                    selected: day['selected'],
                    today: day['today']
                });
                return React.createElement("td", { key: 'col_' + j, className: styleClass, onClick: _this.onDateSelect.bind(_this, day, j) }, React.createElement("span", null, day.date));
            }));
        });
    };
    Calendar.prototype.selectDate = function (value, event) {
        var _this = this;
        var currentDate = this.state.currentDate;
        this.setDate(value);
        var selectedValue = Utils_1.dateFormat(currentDate, this.props.format);
        this.setState({
            value: selectedValue
        }, function () {
            var selectedValue = Utils_1.dateFormat(currentDate, _this.props.format);
            if (_this.props.onChange && event) {
                _this.props.onChange(selectedValue);
            }
        });
    };
    Calendar.prototype.selectReset = function () {
        for (var _i = 0, _a = this.state.calendar; _i < _a.length; _i++) {
            var day = _a[_i];
            day.forEach(function (v) {
                v.selected = false;
            });
        }
    };
    Calendar.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            other = __rest(_a, ["className"]);
        var _b = this.state,
            currentMonth = _b.currentMonth,
            currentYear = _b.currentYear,
            visible = _b.visible;
        var styleClass = classNames('Calendar-panel', className);
        var otherProps = Utils_1.getOtherProperties(other, ['firstDayOfWeek', 'format', 'lang', 'minDate', 'maxDate', 'onClose', 'onChange', 'onOpen', 'value', 'visible']);
        return React.createElement("div", { className: "Calendar" }, React.createElement(Inputtext_1.default, { readOnly: true, onClick: this.handleClick, value: this.state.value }), React.createElement(Portal_1.default, { visible: visible, mountNode: document.body }, React.createElement("div", __assign({ className: styleClass }, otherProps), React.createElement("div", { className: "Calendar-mask", onClick: this.handleClose }), React.createElement(Transitions_1.FadeInUp, { in: visible, className: "Calendar-wrapper" }, React.createElement("div", { className: "Calendar-wrapper" }, React.createElement("div", { className: "Calendar-header" }, React.createElement("div", { className: "Calendar-select" }, React.createElement("div", { className: "Calendar-select-prev", onClick: this.toChangeDate.bind(this, -1, false) }, React.createElement("i", { className: "icon icon-prev" })), React.createElement("div", { className: "Calendar-month" }, this._selectLocale.monthNamesShort[currentMonth - 1]), React.createElement("div", { className: "Calendar-select-next", onClick: this.toChangeDate.bind(this, 1, false) }, React.createElement("i", { className: "icon icon-next" }))), React.createElement("div", { className: "Calendar-select" }, React.createElement("div", { className: "Calendar-select-prev", onClick: this.toChangeDate.bind(this, -1, true) }, React.createElement("i", { className: "icon icon-prev" })), React.createElement("div", { className: "Calendar-year" }, currentYear), React.createElement("div", { className: "Calendar-select-next", onClick: this.toChangeDate.bind(this, 1, true) }, React.createElement("i", { className: "icon icon-next" })))), React.createElement("div", { className: "Calendar-body" }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, this.createWeek())), React.createElement("tbody", { className: "Calendar-table-body" }, this.createDate()))))))));
    };
    Calendar.defaultProps = {
        firstDayOfWeek: 7,
        format: 'yyyy-MM-dd',
        lang: 'en',
        visible: false
    };
    return Calendar;
}(React.PureComponent);
exports.default = Calendar;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = __webpack_require__(100);
exports.default = Card_1.default;
var CardHeader_1 = __webpack_require__(101);
exports.CardHeader = CardHeader_1.default;
var CardContent_1 = __webpack_require__(102);
exports.CardContent = CardContent_1.default;
var CardFooter_1 = __webpack_require__(103);
exports.CardFooter = CardFooter_1.default;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Card = /** @class */function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            dir = _a.dir,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["className", "children", "dir", "prefixCls"]);
        var styleClass = classNames(prefixCls, prefixCls + "-" + dir, className);
        return React.createElement("div", __assign({ className: styleClass }, other), children);
    };
    Card.defaultProps = {
        dir: 'vertical',
        prefixCls: 'bm-Card'
    };
    return Card;
}(React.PureComponent);
exports.default = Card;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var CardHeader = /** @class */function (_super) {
    __extends(CardHeader, _super);
    function CardHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeader.prototype.render = function () {
        var _a = this.props,
            action = _a.action,
            avatar = _a.avatar,
            className = _a.className,
            prefixCls = _a.prefixCls,
            subTitle = _a.subTitle,
            title = _a.title,
            other = __rest(_a, ["action", "avatar", "className", "prefixCls", "subTitle", "title"]);
        var styleClass = classNames(prefixCls, className);
        return React.createElement("div", __assign({ className: styleClass }, other), avatar ? React.createElement("div", { className: prefixCls + "-avatar" }, avatar) : null, React.createElement("div", { className: prefixCls + "-content" }, React.createElement("div", { className: prefixCls + "-title" }, title), React.createElement("div", { className: prefixCls + "-subtitle" }, subTitle)), React.createElement("div", { className: prefixCls + "-action" }, action));
    };
    CardHeader.defaultProps = {
        prefixCls: 'bm-CardHeader'
    };
    return CardHeader;
}(React.PureComponent);
exports.default = CardHeader;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var CardContent = /** @class */function (_super) {
    __extends(CardContent, _super);
    function CardContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardContent.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["className", "children", "prefixCls"]);
        var styleClass = classNames(prefixCls, className);
        return React.createElement("div", __assign({ className: styleClass }, other), children);
    };
    CardContent.defaultProps = {
        prefixCls: 'bm-CardContent'
    };
    return CardContent;
}(React.PureComponent);
exports.default = CardContent;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var CardFooter = /** @class */function (_super) {
    __extends(CardFooter, _super);
    function CardFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardFooter.prototype.render = function () {
        var _a = this.props,
            action = _a.action,
            className = _a.className,
            children = _a.children,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["action", "className", "children", "prefixCls"]);
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-action"] = action, _b), className);
        return React.createElement("div", __assign({ className: styleClass }, other), children);
        var _b;
    };
    CardFooter.defaultProps = {
        prefixCls: 'bm-CardFooter'
    };
    return CardFooter;
}(React.PureComponent);
exports.default = CardFooter;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Ripple_1 = __webpack_require__(9);
var Checkbox = /** @class */function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(props) {
        var _this = _super.call(this, props) || this;
        _this.handleInputChange = function (event) {
            var checked = event.target.checked;
            _this.setState({
                checked: checked
            });
            if (_this.props.onChange) {
                _this.props.onChange({
                    checked: checked,
                    value: _this.props.value
                }, event);
            }
        };
        var checked = false;
        if (props.defaultChecked) {
            checked = props.defaultChecked;
        }
        _this.state = {
            checked: checked
        };
        return _this;
    }
    Checkbox.prototype.componentWillReceiveProps = function (nextProps) {
        if ('checked' in nextProps && nextProps.checked !== this.props.checked) {
            this.setState({
                checked: nextProps.checked
            });
        }
    };
    Checkbox.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            className = _a.className,
            disabled = _a.disabled,
            disableRipple = _a.disableRipple,
            inputRef = _a.inputRef,
            value = _a.value;
        var styleClass = classNames('Checkbox', {
            'Checkbox-active': this.state.checked,
            'Checkbox-disabled': disabled
        }, className);
        var checked = this.state.checked;
        return React.createElement("label", { className: styleClass }, React.createElement("input", { type: "checkbox", disabled: disabled, ref: inputRef, value: value, checked: checked, onChange: this.handleInputChange }), React.createElement("div", { className: "Checkbox-icon" }, React.createElement("svg", { focusable: "false", viewBox: "0 0 24 24", className: "Checkbox-noChecked" }, React.createElement("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" })), React.createElement("svg", { focusable: "false", viewBox: "0 0 24 24", className: "Checkbox-checked" }, React.createElement("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })), !disableRipple ? React.createElement(Ripple_1.default, { centerMode: true, hidden: false }) : null), React.createElement("div", { className: "Checkbox-inner" }, children));
    };
    Checkbox.defaultProps = {
        defaultChecked: false,
        disableRipple: false
    };
    return Checkbox;
}(React.PureComponent);
exports.default = Checkbox;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Chip_1 = __webpack_require__(43);
exports.default = Chip_1.default;
var ChipGroup_1 = __webpack_require__(106);
exports.ChipGroup = ChipGroup_1.default;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Chip_1 = __webpack_require__(43);
var ChipGroup = /** @class */function (_super) {
    __extends(ChipGroup, _super);
    function ChipGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: [],
            value: '',
            focus: false
        };
        _this.handleDelete = function (data) {
            var chipData = _this.state.data.slice();
            var chipToDelete = chipData.indexOf(data);
            chipData.splice(chipToDelete, 1);
            _this.setState({
                data: chipData
            });
            if (_this.props.onDelete) {
                _this.props.onDelete({
                    label: data.label,
                    value: data.value
                });
            }
        };
        _this.handleClick = function (data) {
            if (_this.props.onClick) {
                _this.props.onClick({
                    label: data.label,
                    value: data.value
                });
            }
        };
        _this.handleFocus = function () {
            _this.setState({
                focus: !_this.state.focus
            });
        };
        _this.handleChange = function (event) {
            var target = event.target;
            var value = target.value;
            _this.setState({ value: value });
        };
        _this.handleKeyUp = function (event) {
            if (event.keyCode === 13) {
                var target = event.target;
                var value = target.value;
                var data = _this.state.data.slice();
                data.push({
                    label: value,
                    value: value
                });
                value = '';
                _this.setState({ value: value, data: data });
            }
        };
        var data = [];
        if (Array.isArray(props.data)) {
            data = props.data;
        }
        _this.state = {
            data: data
        };
        return _this;
    }
    ChipGroup.prototype.componentWillReceiveProps = function (nextProps) {
        if ('data' in nextProps) {
            var data = this.props.data;
            this.setState({
                data: data
            });
        }
    };
    ChipGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            className = _a.className,
            placeholder = _a.placeholder;
        var styleClass = classNames('ChipGroup', {
            'Chip-input': !!placeholder,
            'Chip-focus': this.state.focus
        }, className);
        var chipData = this.state.data;
        return React.createElement("div", { className: styleClass }, chipData.map(function (node, index) {
            return React.createElement(Chip_1.default, __assign({ key: index }, node, { onDelete: _this.handleDelete.bind(_this, node), onClick: _this.handleClick.bind(_this, node) }));
        }), placeholder ? React.createElement("input", { value: this.state.value, ref: function ref(node) {
                return _this.input = node;
            }, spellCheck: false, type: "text", placeholder: placeholder, onKeyUp: this.handleKeyUp, onChange: this.handleChange, onFocus: this.handleFocus }) : null);
    };
    return ChipGroup;
}(React.PureComponent);
exports.default = ChipGroup;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Row_1 = __webpack_require__(108);
exports.default = Row_1.default;
var Col_1 = __webpack_require__(113);
exports.Col = Col_1.default;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var enquire = __webpack_require__(109);
if (typeof window !== 'undefined') {
    var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
        return {
            media: mediaQuery,
            matches: false,
            addListener: function addListener() {},
            removeListener: function removeListener() {}
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
}
var responsiveArray = ['lg', 'md', 'sm', 'xs'];
var responsiveMap = {
    xs: '(max-width: 767px)',
    sm: '(min-width: 768px)',
    md: '(min-width: 992px)',
    lg: '(min-width: 1200px)'
};
var Row = /** @class */function (_super) {
    __extends(Row, _super);
    function Row() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            screens: {}
        };
        return _this;
    }
    Row.prototype.componentDidMount = function () {
        this.getMediaScreen();
    };
    Row.prototype.componentWillUnmount = function () {
        Object.keys(responsiveMap).map(function (screen) {
            return enquire.unregister(responsiveMap[screen]);
        });
    };
    Row.prototype.getMediaScreen = function () {
        var _this = this;
        var spacing = this.props.spacing;
        if ((typeof spacing === "undefined" ? "undefined" : _typeof(spacing)) === 'object') {
            Object.keys(responsiveMap).map(function (screen) {
                return enquire.register(responsiveMap[screen], {
                    match: function match() {
                        if ((typeof spacing === "undefined" ? "undefined" : _typeof(spacing)) !== 'object') {
                            return;
                        }
                        _this.setState(function (prevState) {
                            return {
                                screens: __assign({}, prevState.screens, (_a = {}, _a[screen] = true, _a))
                            };
                            var _a;
                        });
                    },
                    unmatch: function unmatch() {
                        if ((typeof spacing === "undefined" ? "undefined" : _typeof(spacing)) !== 'object') {
                            return;
                        }
                        _this.setState(function (prevState) {
                            return {
                                screens: __assign({}, prevState.screens, (_a = {}, _a[screen] = false, _a))
                            };
                            var _a;
                        });
                    },
                    destroy: function destroy() {}
                });
            });
        }
    };
    Row.prototype.getSpacing = function () {
        var spacing = this.props.spacing;
        var screens = this.state.screens;
        if ((typeof spacing === "undefined" ? "undefined" : _typeof(spacing)) === 'object') {
            for (var i = 0; i <= responsiveArray.length; i++) {
                var breakpoint = responsiveArray[i];
                if (screens[breakpoint] && spacing[breakpoint] !== undefined) {
                    return spacing[breakpoint];
                }
            }
        }
        return spacing;
    };
    Row.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            childrenProps = _a.children,
            spacingProps = _a.spacing,
            style = _a.style,
            other = __rest(_a, ["className", "children", "spacing", "style"]);
        var styleClass = classNames('Row', className);
        var spacing = this.getSpacing();
        var halfSpacing = spacing / 2;
        var rowStyle = spacing > 0 ? __assign({ marginLeft: -halfSpacing, marginRight: -halfSpacing }, style) : style;
        var children = React.Children.map(childrenProps, function (child) {
            if (!React.isValidElement(child)) {
                return;
            }
            if (child.props && spacing > 0) {
                return React.cloneElement(child, {
                    style: __assign({ paddingLeft: halfSpacing, paddingRight: halfSpacing }, child.props.style)
                });
            }
            return child;
        });
        return React.createElement("div", __assign({ className: styleClass }, other, { style: rowStyle }), children);
    };
    Row.defaultProps = {
        spacing: 0
    };
    return Row;
}(React.PureComponent);
exports.default = Row;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(110);
module.exports = new MediaQueryDispatch();


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__(111);
var Util = __webpack_require__(45);
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction(options)) {
            options = { match : options };
        }
        if(!isArray(options)) {
            options = [options];
        }
        each(options, function(handler) {
            if (isFunction(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

module.exports = MediaQueryDispatch;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__(112);
var each = __webpack_require__(45).each;

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

module.exports = MediaQuery;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

module.exports = QueryHandler;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var Col = /** @class */function (_super) {
    __extends(Col, _super);
    function Col() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Col.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            offset = _a.offset,
            order = _a.order,
            span = _a.span,
            other = __rest(_a, ["className", "children", "offset", "order", "span"]);
        var colClass = {};
        var sizes = ['lg', 'md', 'sm', 'xs'];
        sizes.forEach(function (col) {
            var sizeProps = {};
            var colProps = _this.props[col];
            if (typeof colProps === 'number') {
                sizeProps.span = colProps;
            } else if ((typeof colProps === "undefined" ? "undefined" : _typeof(colProps)) === 'object') {
                sizeProps = colProps || {};
            }
            colClass = (_a = {}, _a["Col-" + col + "-" + sizeProps.span] = sizeProps.span >= 0, _a["Col-" + col + "-offset-" + sizeProps.offset] = sizeProps.offset, _a["Col-order-" + sizeProps.order] = sizeProps.order, _a);
            var _a;
        });
        var otherProperties = Utils_1.getOtherProperties(other, sizes);
        var styleClass = classNames((_b = {}, _b["Col-" + span] = span >= 0, _b["Col-offset-" + offset] = !!offset, _b["Col-order-" + order] = !!order, _b), className, colClass);
        return React.createElement("div", __assign({ className: styleClass }, otherProperties), children);
        var _b;
    };
    return Col;
}(React.PureComponent);
exports.default = Col;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var HighlightCode_1 = __webpack_require__(115);
exports.default = HighlightCode_1.default;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var highlight = __webpack_require__(116);
var highlightJavascript = __webpack_require__(117);
var highlightTypescript = __webpack_require__(118);
var highlightCSS = __webpack_require__(119);
var highlightBash = __webpack_require__(120);
var highlightXML = __webpack_require__(121);
var HighlightCode = /** @class */function (_super) {
    __extends(HighlightCode, _super);
    function HighlightCode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onCopy = function () {
            _this.clearSelection();
            _this.code.appendChild(document.createTextNode(''));
            var range = document.createRange();
            range.setStart(_this.code, 0);
            range.setEnd(_this.code.lastChild, 0);
            window.getSelection().addRange(range);
            document.execCommand('copy');
        };
        _this.getRef = function (node) {
            _this.code = node;
        };
        return _this;
    }
    HighlightCode.prototype.componentDidMount = function () {
        this.setLang(this.props);
    };
    HighlightCode.prototype.setLang = function (props) {
        switch (props.lang) {
            case 'typescript':
                highlight.registerLanguage('typescript', highlightTypescript);
                break;
            case 'javascript':
                highlight.registerLanguage('javascript', highlightJavascript);
                break;
            case 'xml':
                highlight.registerLanguage('xml', highlightXML);
                break;
            case 'bash':
                highlight.registerLanguage('bash', highlightBash);
                break;
            case 'css':
                highlight.registerLanguage('css', highlightCSS);
                break;
        }
        highlight.highlightBlock(this.code);
    };
    HighlightCode.prototype.clearSelection = function () {
        var selection = window.getSelection();
        try {
            selection.removeAllRanges();
        } catch (ex) {
            document.body['createTextRange']().select();
            document.selection.empty();
        }
    };
    HighlightCode.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            lang = _a.lang,
            prefixCls = _a.prefixCls,
            showCopy = _a.showCopy,
            other = __rest(_a, ["className", "children", "lang", "prefixCls", "showCopy"]);
        var styleClass = classNames(prefixCls, prefixCls + "-" + lang, className);
        var codeClass = classNames('hljs', lang);
        return React.createElement("div", __assign({ className: styleClass, lang: lang }, other), React.createElement("pre", null, React.createElement("code", { className: codeClass, ref: this.getRef }, children)), showCopy ? React.createElement("button", { className: "bm-HighlightCode-btn", onClick: this.onCopy }, React.createElement("i", { title: "Copy", className: "Icon material-icons" }, "content_copy")) : null);
    };
    HighlightCode.defaultProps = {
        prefixCls: 'bm-HighlightCode',
        lang: 'javascript',
        showCopy: false
    };
    return HighlightCode;
}(React.PureComponent);
exports.default = HighlightCode;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

(function(factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = typeof window === 'object' && window ||
                     typeof self === 'object' && self;

  // Setup highlight.js for different environments. First is Node.js or
  // CommonJS.
  if(true) {
    factory(exports);
  } else if(globalObject) {
    // Export hljs globally even when using AMD for cases when this script
    // is loaded with others that may still expect a global hljs.
    globalObject.hljs = factory({});

    // Finally register the global hljs with AMD.
    if(typeof define === 'function' && define.amd) {
      define([], function() {
        return globalObject.hljs;
      });
    }
  }

}(function(hljs) {
  // Convenience variables for build-in objects
  var ArrayProto = [],
      objectKeys = Object.keys;

  // Global internal variables used within the highlight.js library.
  var languages = {},
      aliases   = {};

  // Regular expressions used throughout the highlight.js library.
  var noHighlightRe    = /^(no-?highlight|plain|text)$/i,
      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
      fixMarkupRe      = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

  var spanEndTag = '</span>';

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined
  };


  /* Utility functions */

  function escape(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function tag(node) {
    return node.nodeName.toLowerCase();
  }

  function testRe(re, lexeme) {
    var match = re && re.exec(lexeme);
    return match && match.index === 0;
  }

  function isNotHighlighted(language) {
    return noHighlightRe.test(language);
  }

  function blockLanguage(block) {
    var i, match, length, _class;
    var classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    match = languagePrefixRe.exec(classes);
    if (match) {
      return getLanguage(match[1]) ? match[1] : 'no-highlight';
    }

    classes = classes.split(/\s+/);

    for (i = 0, length = classes.length; i < length; i++) {
      _class = classes[i]

      if (isNotHighlighted(_class) || getLanguage(_class)) {
        return _class;
      }
    }
  }

  function inherit(parent) {  // inherit(parent, override_obj, override_obj, ...)
    var key;
    var result = {};
    var objects = Array.prototype.slice.call(arguments, 1);

    for (key in parent)
      result[key] = parent[key];
    objects.forEach(function(obj) {
      for (key in obj)
        result[key] = obj[key];
    });
    return result;
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3)
          offset += child.nodeValue.length;
        else if (child.nodeType === 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          // Prevent void elements from having an end tag that would actually
          // double them in the output. There are more void elements in HTML
          // but we list only those realistically expected in code display.
          if (!tag(child).match(/br|hr|img|input/)) {
            result.push({
              event: 'stop',
              offset: offset,
              node: child
            });
          }
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(original, highlighted, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (!original.length || !highlighted.length) {
        return original.length ? original : highlighted;
      }
      if (original[0].offset !== highlighted[0].offset) {
        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
      }

      /*
      To avoid starting the stream just before it should stop the order is
      ensured that original always starts first and closes last:

      if (event1 == 'start' && event2 == 'start')
        return original;
      if (event1 == 'start' && event2 == 'stop')
        return highlighted;
      if (event1 == 'stop' && event2 == 'start')
        return original;
      if (event1 == 'stop' && event2 == 'stop')
        return highlighted;

      ... which is collapsed to:
      */
      return highlighted[0].event === 'start' ? original : highlighted;
    }

    function open(node) {
      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value).replace('"', '&quot;') + '"';}
      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
    }

    function close(node) {
      result += '</' + tag(node) + '>';
    }

    function render(event) {
      (event.event === 'start' ? open : close)(event.node);
    }

    while (original.length || highlighted.length) {
      var stream = selectStream();
      result += escape(value.substring(processed, stream[0].offset));
      processed = stream[0].offset;
      if (stream === original) {
        /*
        On any opening or closing tag of the original markup we first close
        the entire highlighted node stack, then render the original tag along
        with all the following original tags at the same offset and then
        reopen all the tags on the highlighted stack.
        */
        nodeStack.reverse().forEach(close);
        do {
          render(stream.splice(0, 1)[0]);
          stream = selectStream();
        } while (stream === original && stream.length && stream[0].offset === processed);
        nodeStack.reverse().forEach(open);
      } else {
        if (stream[0].event === 'start') {
          nodeStack.push(stream[0].node);
        } else {
          nodeStack.pop();
        }
        render(stream.splice(0, 1)[0]);
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function expand_mode(mode) {
    if (mode.variants && !mode.cached_variants) {
      mode.cached_variants = mode.variants.map(function(variant) {
        return inherit(mode, {variants: null}, variant);
      });
    }
    return mode.cached_variants || (mode.endsWithParent && [inherit(mode)]) || [mode];
  }

  function compileLanguage(language) {

    function reStr(re) {
        return (re && re.source) || re;
    }

    function langRe(value, global) {
      return new RegExp(
        reStr(value),
        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
      );
    }

    function compileMode(mode, parent) {
      if (mode.compiled)
        return;
      mode.compiled = true;

      mode.keywords = mode.keywords || mode.beginKeywords;
      if (mode.keywords) {
        var compiled_keywords = {};

        var flatten = function(className, str) {
          if (language.case_insensitive) {
            str = str.toLowerCase();
          }
          str.split(' ').forEach(function(kw) {
            var pair = kw.split('|');
            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
          });
        };

        if (typeof mode.keywords === 'string') { // string
          flatten('keyword', mode.keywords);
        } else {
          objectKeys(mode.keywords).forEach(function (className) {
            flatten(className, mode.keywords[className]);
          });
        }
        mode.keywords = compiled_keywords;
      }
      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

      if (parent) {
        if (mode.beginKeywords) {
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
        }
        if (!mode.begin)
          mode.begin = /\B|\b/;
        mode.beginRe = langRe(mode.begin);
        if (!mode.end && !mode.endsWithParent)
          mode.end = /\B|\b/;
        if (mode.end)
          mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end)
          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal)
        mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance == null)
        mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      mode.contains = Array.prototype.concat.apply([], mode.contains.map(function(c) {
        return expand_mode(c === 'self' ? mode : c)
      }));
      mode.contains.forEach(function(c) {compileMode(c, mode);});

      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      var terminators =
        mode.contains.map(function(c) {
          return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
        })
        .concat([mode.terminator_end, mode.illegal])
        .map(reStr)
        .filter(Boolean);
      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(/*s*/) {return null;}};
    }

    compileMode(language);
  }

  /*
  Core highlighting function. Accepts a language name, or an alias, and a
  string with the code to highlight. Returns an object with the following
  properties:

  - relevance (int)
  - value (an HTML string with highlighting markup)

  */
  function highlight(name, value, ignore_illegals, continuation) {

    function subMode(lexeme, mode) {
      var i, length;

      for (i = 0, length = mode.contains.length; i < length; i++) {
        if (testRe(mode.contains[i].beginRe, lexeme)) {
          return mode.contains[i];
        }
      }
    }

    function endOfMode(mode, lexeme) {
      if (testRe(mode.endRe, lexeme)) {
        while (mode.endsParent && mode.parent) {
          mode = mode.parent;
        }
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexeme);
      }
    }

    function isIllegal(lexeme, mode) {
      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
      var classPrefix = noPrefix ? '' : options.classPrefix,
          openSpan    = '<span class="' + classPrefix,
          closeSpan   = leaveOpen ? '' : spanEndTag

      openSpan += classname + '">';

      return openSpan + insideSpan + closeSpan;
    }

    function processKeywords() {
      var keyword_match, last_index, match, result;

      if (!top.keywords)
        return escape(mode_buffer);

      result = '';
      last_index = 0;
      top.lexemesRe.lastIndex = 0;
      match = top.lexemesRe.exec(mode_buffer);

      while (match) {
        result += escape(mode_buffer.substring(last_index, match.index));
        keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          relevance += keyword_match[1];
          result += buildSpan(keyword_match[0], escape(match[0]));
        } else {
          result += escape(match[0]);
        }
        last_index = top.lexemesRe.lastIndex;
        match = top.lexemesRe.exec(mode_buffer);
      }
      return result + escape(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
      var explicit = typeof top.subLanguage === 'string';
      if (explicit && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }

      var result = explicit ?
                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Usecase in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      if (explicit) {
        continuations[top.subLanguage] = result.top;
      }
      return buildSpan(result.language, result.value, false, true);
    }

    function processBuffer() {
      result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
      mode_buffer = '';
    }

    function startNewMode(mode) {
      result += mode.className? buildSpan(mode.className, '', true): '';
      top = Object.create(mode, {parent: {value: top}});
    }

    function processLexeme(buffer, lexeme) {

      mode_buffer += buffer;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      var new_mode = subMode(lexeme, top);
      if (new_mode) {
        if (new_mode.skip) {
          mode_buffer += lexeme;
        } else {
          if (new_mode.excludeBegin) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
            mode_buffer = lexeme;
          }
        }
        startNewMode(new_mode, lexeme);
        return new_mode.returnBegin ? 0 : lexeme.length;
      }

      var end_mode = endOfMode(top, lexeme);
      if (end_mode) {
        var origin = top;
        if (origin.skip) {
          mode_buffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            mode_buffer = lexeme;
          }
        }
        do {
          if (top.className) {
            result += spanEndTag;
          }
          if (!top.skip) {
            relevance += top.relevance;
          }
          top = top.parent;
        } while (top !== end_mode.parent);
        if (end_mode.starts) {
          startNewMode(end_mode.starts, '');
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }

      if (isIllegal(lexeme, top))
        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

      /*
      Parser should not reach this point as all types of lexemes should be caught
      earlier, but if it does due to some bug make sure it advances at least one
      character forward to prevent infinite looping.
      */
      mode_buffer += lexeme;
      return lexeme.length || 1;
    }

    var language = getLanguage(name);
    if (!language) {
      throw new Error('Unknown language: "' + name + '"');
    }

    compileLanguage(language);
    var top = continuation || language;
    var continuations = {}; // keep continuations for sub-languages
    var result = '', current;
    for(current = top; current !== language; current = current.parent) {
      if (current.className) {
        result = buildSpan(current.className, '', true) + result;
      }
    }
    var mode_buffer = '';
    var relevance = 0;
    try {
      var match, count, index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(value);
        if (!match)
          break;
        count = processLexeme(value.substring(index, match.index), match[0]);
        index = match.index + count;
      }
      processLexeme(value.substr(index));
      for(current = top; current.parent; current = current.parent) { // close dangling modes
        if (current.className) {
          result += spanEndTag;
        }
      }
      return {
        relevance: relevance,
        value: result,
        language: name,
        top: top
      };
    } catch (e) {
      if (e.message && e.message.indexOf('Illegal') !== -1) {
        return {
          relevance: 0,
          value: escape(value)
        };
      } else {
        throw e;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

  */
  function highlightAuto(text, languageSubset) {
    languageSubset = languageSubset || options.languages || objectKeys(languages);
    var result = {
      relevance: 0,
      value: escape(text)
    };
    var second_best = result;
    languageSubset.filter(getLanguage).forEach(function(name) {
      var current = highlight(name, text, false);
      current.language = name;
      if (current.relevance > second_best.relevance) {
        second_best = current;
      }
      if (current.relevance > result.relevance) {
        second_best = result;
        result = current;
      }
    });
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

  */
  function fixMarkup(value) {
    return !(options.tabReplace || options.useBR)
      ? value
      : value.replace(fixMarkupRe, function(match, p1) {
          if (options.useBR && match === '\n') {
            return '<br>';
          } else if (options.tabReplace) {
            return p1.replace(/\t/g, options.tabReplace);
          }
          return '';
      });
  }

  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang,
        result   = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (prevClassName.indexOf(language) === -1) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block) {
    var node, originalStream, result, resultNode, text;
    var language = blockLanguage(block);

    if (isNotHighlighted(language))
        return;

    if (options.useBR) {
      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
    } else {
      node = block;
    }
    text = node.textContent;
    result = language ? highlight(language, text, true) : highlightAuto(text);

    originalStream = nodeStream(node);
    if (originalStream.length) {
      resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    block.innerHTML = result.value;
    block.className = buildClassName(block.className, language, result.language);
    block.result = {
      language: result.language,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        re: result.second_best.relevance
      };
    }
  }

  /*
  Updates highlight.js global options with values passed in the form of an object.
  */
  function configure(user_options) {
    options = inherit(options, user_options);
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called)
      return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    ArrayProto.forEach.call(blocks, highlightBlock);
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    addEventListener('DOMContentLoaded', initHighlighting, false);
    addEventListener('load', initHighlighting, false);
  }

  function registerLanguage(name, language) {
    var lang = languages[name] = language(hljs);
    if (lang.aliases) {
      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
    }
  }

  function listLanguages() {
    return objectKeys(languages);
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /* Interface definition */

  hljs.highlight = highlight;
  hljs.highlightAuto = highlightAuto;
  hljs.fixMarkup = fixMarkup;
  hljs.highlightBlock = highlightBlock;
  hljs.configure = configure;
  hljs.initHighlighting = initHighlighting;
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  hljs.registerLanguage = registerLanguage;
  hljs.listLanguages = listLanguages;
  hljs.getLanguage = getLanguage;
  hljs.inherit = inherit;

  // Common regexps
  hljs.IDENT_RE = '[a-zA-Z]\\w*';
  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  hljs.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  hljs.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  hljs.COMMENT = function (begin, end, inherits) {
    var mode = hljs.inherit(
      {
        className: 'comment',
        begin: begin, end: end,
        contains: []
      },
      inherits || {}
    );
    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
    mode.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
      relevance: 0
    });
    return mode;
  };
  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  hljs.NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE,
    relevance: 0
  };
  hljs.C_NUMBER_MODE = {
    className: 'number',
    begin: hljs.C_NUMBER_RE,
    relevance: 0
  };
  hljs.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: hljs.BINARY_NUMBER_RE,
    relevance: 0
  };
  hljs.CSS_NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE + '(' +
      '%|em|ex|ch|rem'  +
      '|vw|vh|vmin|vmax' +
      '|cm|mm|in|pt|pc|px' +
      '|deg|grad|rad|turn' +
      '|s|ms' +
      '|Hz|kHz' +
      '|dpi|dpcm|dppx' +
      ')?',
    relevance: 0
  };
  hljs.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      {
        begin: /\[/, end: /\]/,
        relevance: 0,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  hljs.TITLE_MODE = {
    className: 'title',
    begin: hljs.IDENT_RE,
    relevance: 0
  };
  hljs.UNDERSCORE_TITLE_MODE = {
    className: 'title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  hljs.METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  return hljs;
}));


/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var KEYWORDS = {
    keyword:
      'in of if for while finally var new function do return void else break catch ' +
      'instanceof with throw case default try this switch continue typeof delete ' +
      'let yield const export super debugger as async await static ' +
      // ECMAScript 6 modules import
      'import from as'
    ,
    literal:
      'true false null undefined NaN Infinity',
    built_in:
      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
      'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
      'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
      'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
      'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
      'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
      'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
      'Promise'
  };
  var EXPRESSIONS;
  var NUMBER = {
    className: 'number',
    variants: [
      { begin: '\\b(0[bB][01]+)' },
      { begin: '\\b(0[oO][0-7]+)' },
      { begin: hljs.C_NUMBER_RE }
    ],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '\\}',
    keywords: KEYWORDS,
    contains: []  // defined later
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`', end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  SUBST.contains = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ]
  var PARAMS_CONTAINS = SUBST.contains.concat([
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_LINE_COMMENT_MODE
  ]);

  return {
    aliases: ['js', 'jsx'],
    keywords: KEYWORDS,
    contains: [
      {
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      },
      {
        className: 'meta',
        begin: /^#!/, end: /$/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      TEMPLATE_STRING,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBER,
      { // object attr container
        begin: /[{,]\s*/, relevance: 0,
        contains: [
          {
            begin: IDENT_RE + '\\s*:', returnBegin: true,
            relevance: 0,
            contains: [{className: 'attr', begin: IDENT_RE, relevance: 0}]
          }
        ]
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: IDENT_RE
                  },
                  {
                    begin: /\(\s*\)/,
                  },
                  {
                    begin: /\(/, end: /\)/,
                    excludeBegin: true, excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          { // E4X / JSX
            begin: /</, end: /(\/\w+|\w+\/)>/,
            subLanguage: 'xml',
            contains: [
              {begin: /<\w+\s*\/>/, skip: true},
              {
                begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true,
                contains: [
                  {begin: /<\w+\s*\/>/, skip: true},
                  'self'
                ]
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'function', end: /\{/, excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE}),
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            contains: PARAMS_CONTAINS
          }
        ],
        illegal: /\[|%/
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      },
      hljs.METHOD_GUARD,
      { // ES6 class
        className: 'class',
        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
        illegal: /[:"\[\]]/,
        contains: [
          {beginKeywords: 'extends'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'constructor', end: /\{/, excludeEnd: true
      }
    ],
    illegal: /#(?!!)/
  };
};

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var KEYWORDS = {
    keyword:
      'in if for while finally var new function do return void else break catch ' +
      'instanceof with throw case default try this switch continue typeof delete ' +
      'let yield const class public private protected get set super ' +
      'static implements enum export import declare type namespace abstract ' +
      'as from extends async await',
    literal:
      'true false null undefined NaN Infinity',
    built_in:
      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
      'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
      'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
      'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
      'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
      'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
      'module console window document any number boolean string void Promise'
  };

  return {
    aliases: ['ts'],
    keywords: KEYWORDS,
    contains: [
      {
        className: 'meta',
        begin: /^\s*['"]use strict['"]/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      { // template string
        className: 'string',
        begin: '`', end: '`',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          {
            className: 'subst',
            begin: '\\$\\{', end: '\\}'
          }
        ]
      },
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'number',
        variants: [
          { begin: '\\b(0[bB][01]+)' },
          { begin: '\\b(0[oO][0-7]+)' },
          { begin: hljs.C_NUMBER_RE }
        ],
        relevance: 0
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            begin: '(\\(.*?\\)|' + hljs.IDENT_RE + ')\\s*=>', returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: hljs.IDENT_RE
                  },
                  {
                    begin: /\(\s*\)/,
                  },
                  {
                    begin: /\(/, end: /\)/,
                    excludeBegin: true, excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: [
                      'self',
                      hljs.C_LINE_COMMENT_MODE,
                      hljs.C_BLOCK_COMMENT_MODE
                    ]
                  }
                ]
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        begin: 'function', end: /[\{;]/, excludeEnd: true,
        keywords: KEYWORDS,
        contains: [
          'self',
          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/}),
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS,
            contains: [
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ],
            illegal: /["'\(]/
          }
        ],
        illegal: /%/,
        relevance: 0 // () => {} is more typical in TypeScript
      },
      {
        beginKeywords: 'constructor', end: /\{/, excludeEnd: true,
        contains: [
          'self',
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS,
            contains: [
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ],
            illegal: /["'\(]/
          }
        ]
      },
      { // prevent references like module.id from being higlighted as module definitions
        begin: /module\./,
        keywords: {built_in: 'module'},
        relevance: 0
      },
      {
        beginKeywords: 'module', end: /\{/, excludeEnd: true
      },
      {
        beginKeywords: 'interface', end: /\{/, excludeEnd: true,
        keywords: 'interface extends'
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      },
      {
        begin: '\\.' + hljs.IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots
      },
      {
        className: 'meta', begin: '@[A-Za-z]+'
      }
    ]
  };
};

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  var RULE = {
    begin: /[A-Z\_\.\-]+\s*:/, returnBegin: true, end: ';', endsWithParent: true,
    contains: [
      {
        className: 'attribute',
        begin: /\S/, end: ':', excludeEnd: true,
        starts: {
          endsWithParent: true, excludeEnd: true,
          contains: [
            {
              begin: /[\w-]+\(/, returnBegin: true,
              contains: [
                {
                  className: 'built_in',
                  begin: /[\w-]+/
                },
                {
                  begin: /\(/, end: /\)/,
                  contains: [
                    hljs.APOS_STRING_MODE,
                    hljs.QUOTE_STRING_MODE
                  ]
                }
              ]
            },
            hljs.CSS_NUMBER_MODE,
            hljs.QUOTE_STRING_MODE,
            hljs.APOS_STRING_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            {
              className: 'number', begin: '#[0-9A-Fa-f]+'
            },
            {
              className: 'meta', begin: '!important'
            }
          ]
        }
      }
    ]
  };

  return {
    case_insensitive: true,
    illegal: /[=\/|'\$]/,
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'selector-id', begin: /#[A-Za-z0-9_-]+/
      },
      {
        className: 'selector-class', begin: /\.[A-Za-z0-9_-]+/
      },
      {
        className: 'selector-attr',
        begin: /\[/, end: /\]/,
        illegal: '$'
      },
      {
        className: 'selector-pseudo',
        begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
      },
      {
        begin: '@(font-face|page)',
        lexemes: '[a-z-]+',
        keywords: 'font-face page'
      },
      {
        begin: '@', end: '[{;]', // at_rule eating first "{" is a good thing
                                 // because it doesn’t let it to be parsed as
                                 // a rule set but instead drops parser into
                                 // the default mode which is how it should be.
        illegal: /:/, // break on Less variables @var: ...
        contains: [
          {
            className: 'keyword',
            begin: /\w+/
          },
          {
            begin: /\s/, endsWithParent: true, excludeEnd: true,
            relevance: 0,
            contains: [
              hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE,
              hljs.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: 'selector-tag', begin: IDENT_RE,
        relevance: 0
      },
      {
        begin: '{', end: '}',
        illegal: /\S/,
        contains: [
          hljs.C_BLOCK_COMMENT_MODE,
          RULE,
        ]
      }
    ]
  };
};

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var VAR = {
    className: 'variable',
    variants: [
      {begin: /\$[\w\d#@][\w\d_]*/},
      {begin: /\$\{(.*?)}/}
    ]
  };
  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VAR,
      {
        className: 'variable',
        begin: /\$\(/, end: /\)/,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  var APOS_STRING = {
    className: 'string',
    begin: /'/, end: /'/
  };

  return {
    aliases: ['sh', 'zsh'],
    lexemes: /\b-?[a-z\._]+\b/,
    keywords: {
      keyword:
        'if then else elif fi for while in do done case esac function',
      literal:
        'true false',
      built_in:
        // Shell built-ins
        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +
        'trap umask unset ' +
        // Bash built-ins
        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +
        'read readarray source type typeset ulimit unalias ' +
        // Shell modifiers
        'set shopt ' +
        // Zsh built-ins
        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +
        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +
        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +
        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +
        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +
        'zpty zregexparse zsocket zstyle ztcp',
      _:
        '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster
    },
    contains: [
      {
        className: 'meta',
        begin: /^#![^\n]+sh\s*$/,
        relevance: 10
      },
      {
        className: 'function',
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: true,
        contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\w[\w\d_]*/})],
        relevance: 0
      },
      hljs.HASH_COMMENT_MODE,
      QUOTE_STRING,
      APOS_STRING,
      VAR
    ]
  };
};

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
  var TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: 'string',
            endsParent: true,
            variants: [
              {begin: /"/, end: /"/},
              {begin: /'/, end: /'/},
              {begin: /[^\s"'=<>`]+/}
            ]
          }
        ]
      }
    ]
  };
  return {
    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
    case_insensitive: true,
    contains: [
      {
        className: 'meta',
        begin: '<!DOCTYPE', end: '>',
        relevance: 10,
        contains: [{begin: '\\[', end: '\\]'}]
      },
      hljs.COMMENT(
        '<!--',
        '-->',
        {
          relevance: 10
        }
      ),
      {
        begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
        relevance: 10
      },
      {
        begin: /<\?(php)?/, end: /\?>/,
        subLanguage: 'php',
        contains: [{begin: '/\\*', end: '\\*/', skip: true}]
      },
      {
        className: 'tag',
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending braket. The '$' is needed for the lexeme to be recognized
        by hljs.subMode() that tests lexemes outside the stream.
        */
        begin: '<style(?=\\s|>|$)', end: '>',
        keywords: {name: 'style'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '</style>', returnEnd: true,
          subLanguage: ['css', 'xml']
        }
      },
      {
        className: 'tag',
        // See the comment in the <style tag about the lookahead pattern
        begin: '<script(?=\\s|>|$)', end: '>',
        keywords: {name: 'script'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '\<\/script\>', returnEnd: true,
          subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
        }
      },
      {
        className: 'meta',
        variants: [
          {begin: /<\?xml/, end: /\?>/, relevance: 10},
          {begin: /<\?\w+/, end: /\?>/}
        ]
      },
      {
        className: 'tag',
        begin: '</?', end: '/?>',
        contains: [
          {
            className: 'name', begin: /[^\/><\s]+/, relevance: 0
          },
          TAG_INTERNALS
        ]
      }
    ]
  };
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var FabButton_1 = __webpack_require__(123);
exports.default = FabButton_1.default;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var FabButton = /** @class */function (_super) {
    __extends(FabButton, _super);
    function FabButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            visible: false
        };
        _this.items = [];
        _this.itemsStyle = [];
        _this.toggle = function () {
            if (_this.state.visible) {
                _this.close();
            } else {
                _this.open();
            }
            _this.setState({
                visible: !_this.state.visible
            });
        };
        _this.getRef = function (node) {
            _this.btnNode = node;
        };
        return _this;
    }
    FabButton.prototype.open = function () {
        var _a = this.props,
            delay = _a.delay,
            distance = _a.distance,
            position = _a.position,
            reverse = _a.reverse;
        var op = reverse ? '-' : '';
        this.itemWidth = this.btnNode.offsetWidth;
        switch (this.props.type) {
            case 'horizontal':
                for (var i = 0; i < this.items.length; i++) {
                    var x = op + (this.itemWidth + distance) * (i + 1) + 'px';
                    this.itemsStyle[i] = { 'opacity': 1, 'left': x };
                }
                break;
            case 'vertical':
                for (var i = 0; i < this.items.length; i++) {
                    var x = op + (this.itemWidth + distance) * (i + 1) + 'px';
                    this.itemsStyle[i] = { 'opacity': 1, 'top': x };
                }
                break;
            case 'circle':
                var radius = this.itemWidth + distance;
                var dir = {
                    'center': -90,
                    'top-left': -180,
                    'bottom-left': 90,
                    'top-right': -90,
                    'bottom-right': 0
                };
                var rotation = dir[position];
                for (var i = 0; i < this.items.length; i++) {
                    this.anim(i, rotation, radius, delay);
                }
                break;
        }
    };
    FabButton.prototype.anim = function (i, rotation, radius, delay) {
        // -180/左上(lt)、 90/左下(lb)、-90/右上(rt)、0/右下(rb)
        var angle = (this.props.angle * i - rotation) / 180 * Math.PI;
        var x = Math.sin(angle) * radius;
        var y = Math.cos(angle) * radius;
        x = parseFloat(x.toFixed(3));
        y = parseFloat(y.toFixed(3));
        if (delay) {
            this.itemsStyle[i] = { 'transition-delay': delay * i + 'ms' };
        }
        var xy = 'scale(.9) translate(' + x + 'px,' + y + 'px)';
        this.itemsStyle[i] = { 'opacity': 1, 'top': 0, 'transform': xy };
    };
    FabButton.prototype.close = function () {
        for (var i = 0; i < this.items.length; i++) {
            this.itemsStyle[i] = { 'left': '0px', 'opacity': 0,
                'top': '0px', 'transform': 'translate(0,0)' };
        }
    };
    FabButton.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            className = _a.className,
            childrenProp = _a.children,
            icon = _a.icon,
            position = _a.position,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["className", "children", "icon", "position", "prefixCls"]);
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-open"] = this.state.visible, _b), prefixCls + "-" + position, className);
        this.items = React.Children.map(childrenProp, function (child, index) {
            if (!React.isValidElement(child)) {
                return;
            }
            var styles = _this.itemsStyle[index] ? _this.itemsStyle[index] : {};
            return React.createElement("span", { style: styles, className: prefixCls + "-item", key: "item" + index }, React.cloneElement(child, child.props));
        });
        var otherProps = Utils_1.getOtherProperties(other, ['angle', 'delay', 'distance', 'reverse', 'type']);
        return React.createElement("div", __assign({ className: styleClass }, otherProps), React.createElement("button", { ref: this.getRef, className: prefixCls + "-btn", onClick: this.toggle }, React.createElement("span", { className: prefixCls + "-close" }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)), React.createElement("span", { className: prefixCls + "-inner" }, icon)), this.items);
        var _b;
    };
    FabButton.defaultProps = {
        angle: 90,
        distance: 20,
        position: 'bottom-right',
        prefixCls: 'bm-FabButton',
        type: 'horizontal',
        reverse: false
    };
    return FabButton;
}(React.PureComponent);
exports.default = FabButton;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Indicator_1 = __webpack_require__(125);
exports.default = Indicator_1.default;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Message_1 = __webpack_require__(11);
var Spin_1 = __webpack_require__(46);
var indicatorInstance;
var getIndicatorInstance = function getIndicatorInstance() {
    if (indicatorInstance) {
        return indicatorInstance;
    }
    return Message_1.default.create({ hideBackdrop: true, className: 'Indicator-group' });
};
var Indicator = /** @class */function () {
    function Indicator(props) {
        props['className'] = 'Indicator';
        props['size'] = 'xs';
        this.props = props;
        indicatorInstance = getIndicatorInstance();
        this.create();
    }
    Indicator.prototype.create = function () {
        var props = Object.assign({}, this.props);
        var type = props.type,
            message = props.message,
            onClose = props.onClose,
            size = props.size;
        props['message'] = React.createElement("div", { className: classNames(['Indicator-item']) }, React.createElement(Spin_1.default, { size: size, type: type }), React.createElement("div", { className: "Indicator-content" }, message));
        props['onClose'] = function () {
            if (onClose) {
                onClose();
            }
        };
        indicatorInstance.create(__assign({}, props));
    };
    return Indicator;
}();
exports.Indicator = Indicator;
exports.default = {
    show: function show(props) {
        return new Indicator(__assign({}, props));
    },
    close: function close() {
        if (indicatorInstance) {
            indicatorInstance.clearAll();
            indicatorInstance = null;
        }
    }
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var Spin = /** @class */function (_super) {
    __extends(Spin, _super);
    function Spin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spin.prototype.getSpinElement = function (type, spanSize) {
        var _a = this.props,
            prefixCls = _a.prefixCls,
            color = _a.color;
        var spans = [];
        var num = 8;
        var height;
        if (type !== 'snake') {
            switch (type) {
                case 'lineSquare':
                case 'lineRound':
                case 'lineBounce':
                    num = 5;
                    break;
            }
            if (type === 'lineSquare' || type === 'lineRound') {
                height = spanSize * 0.1;
            }
            for (var i = 0; i < num; i++) {
                spans.push(React.createElement("span", { key: i, style: { height: height, background: color } }));
            }
        } else {
            spans.push(React.createElement("div", { className: prefixCls + "-snake", key: "snake" }));
        }
        return React.createElement("div", { className: classNames('loader', type) }, spans);
    };
    Spin.prototype.getSize = function () {
        var _a = this.props,
            height = _a.height,
            width = _a.width,
            size = _a.size,
            type = _a.type;
        switch (size) {
            case 'xs':
                width *= 0.25;
                height *= 0.25;
                break;
            case 'sm':
                width *= 0.5;
                height *= 0.5;
                break;
        }
        switch (type) {
            case 'lineSquare':
            case 'lineRound':
            case 'lineBounce':
                height = width * 0.5;
                break;
        }
        return { width: width, height: height };
    };
    Spin.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            prefixCls = _a.prefixCls,
            type = _a.type,
            other = __rest(_a, ["className", "prefixCls", "type"]);
        var styleClass = classNames(prefixCls, className);
        var otherProps = Utils_1.getOtherProperties(other, ['height', 'size', 'width']);
        var styles = __assign({}, this.getSize());
        var children = this.getSpinElement(type, styles['width']);
        return React.createElement("div", __assign({ className: styleClass }, otherProps, { style: styles }), children);
    };
    Spin.defaultProps = {
        height: 100,
        type: 'circleRound',
        size: 'xs',
        prefixCls: 'bm-Spin',
        width: 100,
        color: '#303548'
    };
    return Spin;
}(React.PureComponent);
exports.default = Spin;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var IndexList_1 = __webpack_require__(128);
exports.default = IndexList_1.default;
var IndexSection_1 = __webpack_require__(129);
exports.IndexSection = IndexSection_1.default;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Dom_1 = __webpack_require__(7);
var IndexList = /** @class */function (_super) {
    __extends(IndexList, _super);
    function IndexList(props) {
        var _this = _super.call(this, props) || this;
        _this.letters = 'ABCDEFGHIJKLMNOPQRSUVWXYZ';
        _this.touches = {
            startY: 0
        };
        _this.state = {
            scrollTop: 0
        };
        _this.getRef = function (node) {
            _this.navNode = node;
        };
        _this.getScrollRef = function (node) {
            _this.scrollNode = node;
        };
        _this.swipeStart = function (event) {
            var scrollHeight = _this.scrollNode.scrollHeight - _this.scrollNode.offsetHeight;
            if (scrollHeight > 0) {
                var y = _this.getPoint(event).y;
                _this.dragging = true;
                _this.scrollTo(event);
                _this.touches.startY = y;
                document.addEventListener(_this.isMobile ? 'touchmove' : 'mousemove', _this.swipeMove);
                document.addEventListener(_this.isMobile ? 'touchend' : 'mouseup', _this.swipeEnd);
            }
        };
        _this.swipeMove = function (event) {
            event.stopPropagation();
            if (_this.dragging) {
                _this.scrollTo(event);
                var y = _this.getPoint(event).y;
                var diffY = y - _this.touches.startY + _this.state.scrollTop;
                _this.setState({
                    scrollTop: Math.max(Math.min(0, diffY), -_this.touches.moveHeight)
                });
                _this.touches.startY = y;
            }
        };
        _this.swipeEnd = function (event) {
            event.stopPropagation();
            _this.dragging = false;
            _this.setState({
                current: _this.state.current
            });
            document.removeEventListener(_this.isMobile ? 'touchmove' : 'mousemove', _this.swipeMove);
            document.removeEventListener(_this.isMobile ? 'touchend' : 'mouseup', _this.swipeEnd);
        };
        _this.isMobile = 'ontouchstart' in document;
        return _this;
    }
    IndexList.prototype.splitLetter = function () {
        return this.letters.split('');
    };
    IndexList.prototype.getPoint = function (e) {
        var touchEvent = this.isMobile ? e.changedTouches[0] : e;
        return {
            x: touchEvent.pageX || touchEvent.clientX,
            y: touchEvent.pageY || touchEvent.clientY
        };
    };
    IndexList.prototype.getOffsetTop = function (element, condition) {
        var actualTop = element.offsetTop;
        var current = element.offsetParent;
        while (current !== null && condition(current)) {
            actualTop += current.offsetTop;
            current = current.offsetParent;
        }
        return actualTop;
    };
    IndexList.prototype.scrollTo = function (event) {
        var index = '';
        var prefixCls = this.props.prefixCls;
        if (Dom_1.hasClass(event.target, prefixCls + "-nav-item")) {
            index = event.target.getAttribute('data-index');
            this.setState({
                current: index
            });
            var target = this.scrollNode.querySelector("[data-index=" + index + "]");
            var top_1 = 0;
            if (target) {
                top_1 = this.getOffsetTop(target, function (parent) {
                    return !Dom_1.hasClass(parent, prefixCls + "-content");
                });
                this.scrollNode.scrollTop = top_1;
            }
        }
    };
    IndexList.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            className = _a.className,
            prefixCls = _a.prefixCls;
        var styleClass = classNames(prefixCls, className);
        return React.createElement("div", { className: styleClass }, React.createElement("div", { className: prefixCls + "-content", ref: this.getScrollRef }, React.createElement("ul", null, children)), React.createElement("div", { className: prefixCls + "-nav", ref: this.getRef, onMouseDown: this.isMobile ? function () {} : this.swipeStart, onTouchStart: this.isMobile ? this.swipeStart : function () {} }, React.createElement("ul", null, this.splitLetter().map(function (letter, index) {
            return React.createElement("li", { className: prefixCls + "-nav-item", "data-index": letter, key: index }, letter);
        }))), this.dragging ? React.createElement("span", { className: prefixCls + "-current" }, this.state.current) : null);
    };
    IndexList.defaultProps = {
        prefixCls: 'bm-IndexList'
    };
    return IndexList;
}(React.Component);
exports.default = IndexList;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var IndexSection = /** @class */function (_super) {
    __extends(IndexSection, _super);
    function IndexSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndexSection.prototype.render = function () {
        var _a = this.props,
            childrenProps = _a.children,
            className = _a.className,
            index = _a.index,
            prefixCls = _a.prefixCls;
        var styleClass = classNames(prefixCls, className);
        var children = React.Children.map(childrenProps, function (child, index) {
            if (!React.isValidElement(child)) {
                return null;
            }
            return React.createElement("li", { key: index, className: prefixCls + "-item" }, React.cloneElement(child, child.props));
        });
        return React.createElement("li", { className: styleClass }, React.createElement("p", { className: prefixCls + "-title", "data-index": index }, index), React.createElement("ul", null, children));
    };
    IndexSection.defaultProps = {
        prefixCls: 'bm-IndexSection'
    };
    return IndexSection;
}(React.Component);
exports.default = IndexSection;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var InputNumber_1 = __webpack_require__(131);
exports.default = InputNumber_1.default;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var InputNumber = /** @class */function (_super) {
    __extends(InputNumber, _super);
    function InputNumber(props) {
        var _this = _super.call(this, props) || this;
        _this.handleKeyDown = function (event) {
            if (event.which === 38) {
                _this.spin(1, event);
                event.preventDefault();
            } else if (event.which === 40) {
                _this.spin(-1, event);
                event.preventDefault();
            }
        };
        _this.handleKeyPress = function (event) {
            var keyPattern = /[0-9\+\-]/;
            if (!keyPattern.test(String.fromCharCode(event.charCode)) && event.keyCode !== 9 && event.keyCode !== 8 && event.keyCode !== 37 && event.keyCode !== 39 && event.keyCode !== 46) {
                event.preventDefault();
            }
        };
        _this.handleChange = function (event) {
            var inputElem = event.target;
            var onChange = _this.props.onChange;
            _this.setState({
                value: Number(inputElem.value)
            });
            if (onChange) {
                onChange(_this.state.value, event);
            }
        };
        var value = 0;
        var step = props.step.toString().split(".");
        _this.count = step[1] ? step[1].length : 0;
        if (typeof props.defaultValue === 'number') {
            value = props.defaultValue;
        }
        _this.state = {
            value: value
        };
        return _this;
    }
    InputNumber.prototype.componentWillReceiveProps = function (nextProps) {
        if ('value' in nextProps && this.props.value !== nextProps.value) {
            this.setValue(0, nextProps.value);
        }
    };
    InputNumber.prototype.setValue = function (add, value) {
        if (add === void 0) {
            add = 0;
        }
        var _a = this.props,
            min = _a.min,
            max = _a.max,
            step = _a.step;
        var currentValue = value + add * step;
        if (currentValue < min) {
            currentValue = min;
        } else if (currentValue > max) {
            currentValue = max;
        }
        currentValue = Number(currentValue.toFixed(this.count));
        this.setState({
            value: currentValue
        });
        return currentValue;
    };
    InputNumber.prototype.spin = function (add, event) {
        var _a = this.props,
            onChange = _a.onChange,
            value = _a.value;
        var currentValue = this.setValue(add, value);
        if (onChange) {
            onChange(currentValue, event);
        }
    };
    InputNumber.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            min = _a.min,
            max = _a.max,
            prefixCls = _a.prefixCls,
            style = _a.style,
            type = _a.type;
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-2"] = type === 2, _b), className);
        var value = this.state.value;
        var minusStyleClass = classNames(prefixCls + "-minus", {
            'is-disabled': min <= value
        });
        var addStyleClass = classNames(prefixCls + "-add", {
            'is-disabled': max >= value
        });
        var arrowStyle = {
            pointerEvents: 'none',
            display: 'block',
            fill: 'rgb(117, 117, 117)'
        };
        return React.createElement("div", { className: styleClass, style: style }, type !== 2 ? React.createElement("button", { className: minusStyleClass, onClick: this.spin.bind(this, -1) }) : null, React.createElement("input", { type: "text", value: value, onKeyDown: this.handleKeyDown, onKeyPress: this.handleKeyPress, onChange: this.handleChange }), type !== 2 ? React.createElement("button", { className: addStyleClass, onClick: this.spin.bind(this, 1) }) : null, type === 2 ? React.createElement("div", { className: prefixCls + "-step" }, React.createElement("span", { onClick: this.spin.bind(this, 1), className: "bm-rotate-180" }, React.createElement("svg", { viewBox: "0 0 24 24", preserveAspectRatio: "xMidYMid meet", style: arrowStyle }, React.createElement("g", null, React.createElement("path", { d: "M7 10l5 5 5-5z" })))), React.createElement("span", { onClick: this.spin.bind(this, -1) }, React.createElement("svg", { viewBox: "0 0 24 24", preserveAspectRatio: "xMidYMid meet", style: arrowStyle }, React.createElement("g", null, React.createElement("path", { d: "M7 10l5 5 5-5z" }))))) : null);
        var _b;
    };
    InputNumber.defaultProps = {
        prefixCls: 'bm-InputNumber',
        step: 1,
        type: 1,
        value: 0
    };
    return InputNumber;
}(React.PureComponent);
exports.default = InputNumber;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var KeyBoard_1 = __webpack_require__(133);
exports.default = KeyBoard_1.default;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var KeyBoard = /** @class */function (_super) {
    __extends(KeyBoard, _super);
    function KeyBoard(props) {
        var _this = _super.call(this, props) || this;
        _this.numbers = [];
        _this.state = {
            password: ''
        };
        _this.handleClick = function (num) {
            var count = _this.props.count;
            var currentPassword = _this.state.password;
            if (count <= currentPassword.length) {
                return;
            }
            _this.setState({
                password: _this.state.password + num
            }, function () {
                if (_this.props.onFinish) {
                    _this.props.onFinish(_this.state.password);
                }
            });
        };
        _this.handleClose = function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }
        };
        _this.handleDelete = function () {
            var password = _this.state.password;
            _this.setState({
                password: password.slice(0, password.length - 1)
            });
        };
        for (var i = 0; i < 9; i++) {
            _this.numbers.push(i + 1);
        }
        if (props.random) {
            _this.numbers = _this.numbers.sort(function () {
                return Math.random() > 0.5 ? 1 : -1;
            });
        }
        return _this;
    }
    KeyBoard.prototype.getPasswordInput = function () {
        var children = [];
        for (var i = 0; i < this.props.count; i++) {
            children.push(React.createElement("li", { key: "pwd-" + i }, React.createElement("i", { style: {
                    display: this.state.password.length > i ? 'block' : 'none'
                } })));
        }
        return children;
    };
    KeyBoard.prototype.getNumbersSpan = function () {
        var _this = this;
        var children = [];
        this.numbers.forEach(function (num) {
            children.push(React.createElement("span", { key: "numbers-" + num, onClick: _this.handleClick.bind(_this, num) }, num));
        });
        children.push(React.createElement("span", { key: "pwd-cancel", onClick: this.handleClose }, "\u53D6\u6D88"));
        children.push(React.createElement("span", { key: "pwd-zero", onClick: this.handleClick.bind(this, 0) }, "0"));
        children.push(React.createElement("span", { key: "pwd-delete", onClick: this.handleDelete }));
        return children;
    };
    KeyBoard.prototype.render = function () {
        var _a = this.props,
            action = _a.action,
            className = _a.className,
            prefixCls = _a.prefixCls,
            title = _a.title,
            other = __rest(_a, ["action", "className", "prefixCls", "title"]);
        var styleClass = classNames(prefixCls, className);
        var otherProps = Utils_1.getOtherProperties(other, ['children', 'count', 'onClose', 'onFinish', 'random']);
        return React.createElement("div", __assign({ className: styleClass }, otherProps), React.createElement("div", { className: prefixCls + "-header" }, React.createElement("strong", null, title)), React.createElement("div", { className: prefixCls + "-password" }, this.getPasswordInput()), React.createElement("div", { className: prefixCls + "-toolbar" }, action), React.createElement("div", { className: prefixCls + "-content" }, React.createElement("div", { className: prefixCls + "-numbers" }, this.getNumbersSpan())));
    };
    KeyBoard.defaultProps = {
        count: 5,
        prefixCls: 'bm-KeyBoard',
        title: '输入数字密码'
    };
    return KeyBoard;
}(React.Component);
exports.default = KeyBoard;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Knob_1 = __webpack_require__(135);
exports.default = Knob_1.default;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Knob = /** @class */function (_super) {
    __extends(Knob, _super);
    function Knob(props) {
        var _this = _super.call(this, props) || this;
        var value = 0;
        if (props.value > 0) {
            value = props.value;
        }
        _this.state = {
            value: value
        };
        return _this;
    }
    Knob.prototype.componentWillReceiveProps = function (nextProps) {
        if ('value' in nextProps && nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value
            });
        }
    };
    Knob.prototype.getStrokeMessage = function (radius, gapPosition) {
        var beginPositionX = 0;
        var beginPositionY = -radius;
        var endPositionX = 0;
        var endPositionY = -2 * radius;
        switch (gapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = 2 * radius;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = -2 * radius;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = 2 * radius;
                break;
            default:
        }
        var pathString = 'M 50,50 m ' + beginPositionX + ',' + beginPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + endPositionX + ',' + -endPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + -endPositionX + ',' + endPositionY;
        return {
            pathString: pathString
        };
    };
    Knob.prototype.render = function () {
        var _a = this.props,
            animated = _a.animated,
            barColor = _a.barColor,
            children = _a.children,
            className = _a.className,
            gapDegree = _a.gapDegree,
            gapPosition = _a.gapPosition,
            lineCap = _a.lineCap,
            lineWidth = _a.lineWidth,
            prefixCls = _a.prefixCls,
            size = _a.size,
            trackColor = _a.trackColor,
            value = _a.value,
            other = __rest(_a, ["animated", "barColor", "children", "className", "gapDegree", "gapPosition", "lineCap", "lineWidth", "prefixCls", "size", "trackColor", "value"]);
        var styleClass = classNames(prefixCls, className);
        var styles = {
            width: size,
            height: size
        };
        var radius = 50 - lineWidth / 2;
        var len = Math.PI * 2 * radius;
        var dasharray = value / 100 * len + 'px ' + len + 'px';
        var trailStyles = {
            stroke: trackColor,
            strokeWidth: lineWidth,
            fillOpacity: 0,
            strokeDasharray: len - gapDegree + 'px ' + len + 'px',
            strokeDashoffset: '-' + gapDegree / 2 + 'px',
            transition: animated && 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        var pathStyles = {
            stroke: barColor,
            strokeWidth: lineWidth,
            strokeLinecap: lineCap,
            fillOpacity: 0,
            strokeDasharray: value / 100 * (len - gapDegree) + 'px ' + len + 'px',
            strokeDashoffset: '-' + gapDegree / 2 + 'px',
            transition: animated && 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s'
        };
        var strokeMessage = this.getStrokeMessage(radius, gapPosition);
        return React.createElement("div", __assign({ className: styleClass, style: styles }, other), React.createElement("div", { className: prefixCls + "-wrapper" }, React.createElement("svg", { className: prefixCls + "-circle", viewBox: "0 0 100 100" }, React.createElement("path", { className: prefixCls + "-circle-trail", style: trailStyles, d: strokeMessage.pathString }), React.createElement("path", { className: prefixCls + "-circle-path", style: pathStyles, d: strokeMessage.pathString })), React.createElement("div", { className: prefixCls + "-inner" }, children)));
    };
    Knob.defaultProps = {
        animated: true,
        barColor: '#5db2ff',
        gapDegree: 0,
        gapPosition: 'top',
        lineWidth: 6,
        lineCap: 'round',
        prefixCls: 'bm-Knob',
        size: 100,
        trackColor: '#eee',
        value: 0
    };
    return Knob;
}(React.PureComponent);
exports.default = Knob;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var LazyLoad_1 = __webpack_require__(137);
exports.default = LazyLoad_1.default;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(16);
var Utils_1 = __webpack_require__(2);
var Dom_1 = __webpack_require__(7);
var lodash_debounce_1 = __webpack_require__(138);
var lodash_throttle_1 = __webpack_require__(139);
var lazyLoadItems = [];
var inBrowser = typeof window !== 'undefined';
var passiveEventSupported = false;
try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
            passiveEventSupported = true;
        }
    });
    window.addEventListener('test', function () {}, opts);
} catch (e) {}
var passiveEvent = passiveEventSupported ? { capture: false, passive: true } : false;
var checkInView = function checkInView(component) {
    var scrollNode = component.props.scrollNode;
    var node = ReactDOM.findDOMNode(component);
    var nodeRect = node.getBoundingClientRect();
    var inView = false;
    var wHeight = window.innerHeight || document.documentElement.clientHeight;
    var wWidth = window.innerWidth || document.documentElement.clientWidth;
    if (scrollNode === document.body || scrollNode === window || scrollNode === document) {
        inView = inBrowser && nodeRect.top < wHeight && nodeRect.bottom > 0 && nodeRect.left < wWidth && nodeRect.right > 0;
    } else {
        scrollNode = Dom_1.getScrollParent(node);
        var height = Math.max(scrollNode.offsetHeight, wHeight);
        var width = Math.max(scrollNode.offsetWidth, wWidth);
        var scrollRect = scrollNode.getBoundingClientRect();
        var style = window.getComputedStyle(scrollNode);
        var paddingTop = parseFloat(style.paddingTop || 0);
        var paddingLeft = parseFloat(style.paddingLeft || 0);
        var top_1 = nodeRect.top - scrollRect.top + paddingTop;
        var left = nodeRect.left - scrollRect.left + paddingLeft;
        inView = inBrowser && left >= 0 && left < width - paddingLeft && top_1 >= 0 && top_1 < height - paddingTop;
    }
    if (inView) {
        component.loaded = true;
        component.forceUpdate();
    }
    return inView;
};
var lazyLoadHandler = function lazyLoadHandler() {
    for (var _i = 0, lazyLoadItems_1 = lazyLoadItems; _i < lazyLoadItems_1.length; _i++) {
        var item = lazyLoadItems_1[_i];
        var inView = checkInView(item);
        if (inView) {
            var index = lazyLoadItems.indexOf(item);
            if (index !== -1) {
                lazyLoadItems.splice(index, 1);
            }
            if (item.props.onLoaded) {
                item.props.onLoaded();
            }
        }
    }
};
var delayType;
var finalLazyLoadHandler = null;
var LazyLoad = /** @class */function (_super) {
    __extends(LazyLoad, _super);
    function LazyLoad(props) {
        var _this = _super.call(this, props) || this;
        _this.loaded = false;
        return _this;
    }
    LazyLoad.prototype.componentDidMount = function () {
        this.rect = ReactDOM.findDOMNode(this);
        var parent = this.props.scrollNode;
        if (!parent) {
            parent = Dom_1.getScrollParent(ReactDOM.findDOMNode(this));
        }
        var needResetFinalLazyLoadHandler = this.props.debounce !== undefined && delayType === 'throttle' || delayType === 'debounce' && this.props.debounce === undefined;
        if (needResetFinalLazyLoadHandler) {
            Utils_1.off(window, 'scroll', finalLazyLoadHandler, passiveEvent);
            Utils_1.off(window, 'resize', finalLazyLoadHandler, passiveEvent);
            finalLazyLoadHandler = null;
        }
        if (!finalLazyLoadHandler) {
            if (this.props.debounce !== undefined) {
                finalLazyLoadHandler = lodash_debounce_1.default(lazyLoadHandler, typeof this.props.debounce === 'number' ? this.props.debounce : 300);
                delayType = 'debounce';
            } else if (this.props.throttle !== undefined) {
                finalLazyLoadHandler = lodash_throttle_1.default(lazyLoadHandler, typeof this.props.throttle === 'number' ? this.props.throttle : 300);
                delayType = 'throttle';
            } else {
                finalLazyLoadHandler = lazyLoadHandler;
            }
        }
        var nodesCount = 1 + +parent.getAttribute('data-lazyload');
        if (nodesCount === 1) {
            parent.addEventListener('scroll', finalLazyLoadHandler, passiveEvent);
        }
        parent.setAttribute('data-lazyload', nodesCount);
        lazyLoadItems.push(this);
        checkInView(this);
    };
    LazyLoad.prototype.componentWillUnmount = function () {
        var parent = Dom_1.getScrollParent(ReactDOM.findDOMNode(this));
        if (parent && typeof parent.getAttribute === 'function') {
            var nodesCount = +parent.getAttribute('data-lazyload') - 1;
            if (nodesCount === 0) {
                parent.removeEventListener('scroll', lazyLoadHandler, passiveEvent);
                parent.removeAttribute('data-lazyload');
            } else {
                parent.setAttribute('data-lazyload', nodesCount);
            }
        }
        var index = lazyLoadItems.indexOf(this);
        if (index !== -1) {
            lazyLoadItems.splice(index, 1);
        }
        if (lazyLoadItems.length === 0) {
            Utils_1.off(window, 'resize', lazyLoadHandler, passiveEvent);
            Utils_1.off(window, 'scroll', lazyLoadHandler, passiveEvent);
        }
    };
    LazyLoad.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            placeholder = _a.placeholder,
            prefixCls = _a.prefixCls;
        return this.loaded ? children : placeholder ? placeholder : React.createElement("div", { style: { height: this.props.height }, className: prefixCls + "-placeholder" });
    };
    LazyLoad.defaultProps = {
        prefixCls: 'bm-LazyLoad'
    };
    return LazyLoad;
}(React.PureComponent);
exports.default = LazyLoad;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Locker_1 = __webpack_require__(141);
exports.default = Locker_1.default;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Circle_1 = __webpack_require__(142);
var RectUtils_1 = __webpack_require__(143);
var Locker = /** @class */function (_super) {
    __extends(Locker, _super);
    function Locker(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            x: 0,
            y: 0
        };
        _this.circles = [];
        _this.value = [];
        _this.touchStart = function (event) {
            event.stopPropagation();
            _this.dragging = true;
            _this.lastPoint = _this.getPoint(event);
            _this.isPointSelect(__assign({}, _this.lastPoint));
            document.addEventListener(_this.isMobile ? 'touchmove' : 'mousemove', _this.touchMove);
            document.addEventListener(_this.isMobile ? 'touchend' : 'mouseup', _this.touchEnd);
        };
        _this.touchMove = function (event) {
            event.stopPropagation();
            if (_this.dragging) {
                _this.lastPoint = _this.getPoint(event);
                _this.isPointSelect(__assign({}, _this.lastPoint));
            }
        };
        _this.touchEnd = function (event) {
            event.stopPropagation();
            _this.dragging = false;
            if (_this.props.onDone) {
                _this.props.onDone({
                    points: _this.value.slice(),
                    clear: _this.clear.bind(_this)
                }, event);
            }
            document.removeEventListener(_this.isMobile ? 'touchmove' : 'mousemove', _this.touchMove);
            document.removeEventListener(_this.isMobile ? 'touchend' : 'mouseup', _this.touchEnd);
        };
        _this.getCanvasRef = function (node) {
            _this.canvas = node;
            if (node) {
                _this.ctx = _this.canvas.getContext('2d');
            }
        };
        _this.isMobile = 'ontouchstart' in document;
        return _this;
    }
    Locker.prototype.componentDidMount = function () {
        var _a = this.props,
            width = _a.width,
            height = _a.height;
        for (var i = 0; i < 9; i++) {
            var w = width / 3,
                h = height / 3,
                r = Math.min(w, h) / 5 * 3;
            var row = Math.floor(i / 3),
                col = i % 3;
            this.circles.push(new Circle_1.default(w / 2 + w * col, h / 2 + h * row, r / 2, false));
        }
        this.drawLocker();
    };
    Locker.prototype.componentWillUnmount = function () {
        if (this.requestAnimationFrameId) {
            cancelAnimationFrame(this.requestAnimationFrameId);
            this.requestAnimationFrameId = null;
        }
    };
    Locker.prototype.drawCircle = function (_a) {
        var cx = _a.cx,
            cy = _a.cy,
            r = _a.r,
            selected = _a.selected;
        var _b = this.props,
            fillStyle = _b.fillStyle,
            strokeStyle = _b.strokeStyle;
        if (this.ctx) {
            this.ctx.save();
            this.ctx.strokeStyle = strokeStyle;
            this.ctx.beginPath();
            this.ctx.fillStyle = '#fff';
            this.ctx.arc(cx, cy, r, 0, 2 * Math.PI, true);
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, r, 0, 2 * Math.PI, true);
            this.ctx.stroke();
            if (selected) {
                this.ctx.fillStyle = fillStyle;
                this.ctx.beginPath();
                this.ctx.arc(cx, cy, r / 2, 0, 2 * Math.PI, true);
                this.ctx.fill();
            }
            this.ctx.restore();
        }
    };
    Locker.prototype.drawLine = function (_a) {
        var x1 = _a.x1,
            y1 = _a.y1,
            x2 = _a.x2,
            y2 = _a.y2;
        if (this.ctx) {
            this.ctx.save();
            this.ctx.strokeStyle = this.props.fillStyle;
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
            this.ctx.restore();
        }
    };
    Locker.prototype.drawLocker = function () {
        var _this = this;
        var _a = this.props,
            width = _a.width,
            height = _a.height;
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(0, 0, width, height);
        var num = 0;
        for (var _i = 0, _b = this.value; _i < _b.length; _i++) {
            var index = _b[_i];
            var nextCircle = this.circles[this.value[num + 1]];
            var circle = this.circles[index];
            if (nextCircle) {
                this.drawLine({
                    x1: circle.cx,
                    y1: circle.cy,
                    x2: nextCircle.cx,
                    y2: nextCircle.cy
                });
            }
            num++;
        }
        if (this.value.length > 0) {
            var circle = this.circles[this.value[this.value.length - 1]];
            this.drawLine({
                x1: circle.cx,
                y1: circle.cy,
                x2: this.lastPoint.x,
                y2: this.lastPoint.y
            });
        }
        for (var _c = 0, _d = this.circles; _c < _d.length; _c++) {
            var circle = _d[_c];
            this.drawCircle(__assign({}, circle));
        }
        this.requestAnimationFrameId = requestAnimationFrame(function () {
            _this.drawLocker();
        });
    };
    Locker.prototype.isPointSelect = function (_a) {
        var _this = this;
        var x = _a.x,
            y = _a.y;
        var index = -1;
        var len = this.value.length;
        this.circles.forEach(function (circle, i) {
            if (circle.cx + circle.r > x && circle.cx - circle.r < x && circle.cy + circle.r > y && circle.cy - circle.r < y && !circle.selected) {
                index = i;
                _this.circles[i].selected = true;
                _this.value.push(i);
            }
        });
        var selectedValue = this.value.slice();
        while (len) {
            len--;
            var value = selectedValue[len],
                prevValue = selectedValue[len - 1];
            if (prevValue >= 0) {
                var row = Math.floor(value / 3),
                    col = value % 3;
                var prevRow = Math.floor(prevValue / 3),
                    prevCol = prevValue % 3;
                var newValue = -1;
                if (row === prevRow && Math.abs(col - prevCol) > 1) {
                    newValue = Math.max(value, prevValue) - 1;
                } else if (col === prevCol && Math.abs(row - prevRow) > 1) {
                    newValue = Math.max(value, prevValue) - 3;
                } else if (Math.abs(col - prevCol) > 1 && Math.abs(row - prevRow) > 1) {
                    newValue = 4;
                }
                if (newValue >= 0 && selectedValue.indexOf(newValue) === -1) {
                    selectedValue.splice(len, 0, newValue);
                    this.circles[newValue].selected = true;
                }
            }
        }
        if (this.value.length !== selectedValue.length) {
            this.value = selectedValue;
        }
        return index;
    };
    Locker.prototype.getPoint = function (event) {
        var touchEvent = this.isMobile ? event.changedTouches[0] : event;
        return {
            x: (touchEvent.pageX || touchEvent.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft)) - RectUtils_1.getElementLeft(this.canvas),
            y: (touchEvent.pageY || touchEvent.clientY + (document.documentElement.scrollTop || document.body.scrollTop)) - RectUtils_1.getElementTop(this.canvas)
        };
    };
    Locker.prototype.clear = function () {
        this.value = [];
        this.circles.forEach(function (circle) {
            circle.selected = false;
        });
    };
    Locker.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            prefixCls = _a.prefixCls,
            width = _a.width,
            height = _a.height;
        var styleClass = classNames(prefixCls, className);
        var styles = {
            width: width, height: height
        };
        var cWidth = width - 2,
            cHeight = height - 2;
        return React.createElement("div", { className: styleClass, style: styles }, React.createElement("canvas", { ref: this.getCanvasRef, width: cWidth, height: cHeight }), React.createElement("div", { className: prefixCls + "-mask", onMouseDown: this.isMobile ? function () {} : this.touchStart, onTouchStart: this.isMobile ? this.touchStart : function () {} }));
    };
    Locker.defaultProps = {
        prefixCls: "bm-Locker",
        width: 300,
        height: 300,
        fillStyle: '#2196f3',
        strokeStyle: 'rgba(0,0,0,.12)'
    };
    return Locker;
}(React.PureComponent);
exports.default = Locker;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Circle = /** @class */function () {
    function Circle(cx, cy, r, selected) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.selected = selected;
    }
    return Circle;
}();
exports.default = Circle;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function getOuterWidth(el, margin) {
    var width = el.offsetWidth;
    if (margin) {
        var style = getComputedStyle(el);
        width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    }
    return width;
}
exports.getOuterWidth = getOuterWidth;
function innerWidth(el) {
    var width = el.offsetWidth;
    var style = getComputedStyle(el);
    width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return width;
}
exports.innerWidth = innerWidth;
function width(el) {
    var width = el.offsetWidth;
    var style = getComputedStyle(el);
    width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return width;
}
exports.width = width;
function getInnerHeight(el) {
    var height = el.offsetHeight;
    var style = getComputedStyle(el);
    height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    return height;
}
exports.getInnerHeight = getInnerHeight;
function getOuterHeight(el, margin) {
    var height = el.offsetHeight;
    if (margin) {
        var style = getComputedStyle(el);
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    }
    return height;
}
exports.getOuterHeight = getOuterHeight;
function getHeight(el) {
    var height = el.offsetHeight;
    var style = getComputedStyle(el);
    height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    return height;
}
exports.getHeight = getHeight;
function getWidth(el) {
    var width = el.offsetWidth;
    var style = getComputedStyle(el);
    width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
    return width;
}
exports.getWidth = getWidth;
function scrollInView(container, item) {
    var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
    var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
    var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    var containerRect = container.getBoundingClientRect();
    var itemRect = item.getBoundingClientRect();
    var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    var scroll = container.scrollTop;
    var elementHeight = container.clientHeight;
    var itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
        container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
        container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
}
exports.scrollInView = scrollInView;
function getElementLeft(element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}
exports.getElementLeft = getElementLeft;
function getElementTop(element) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}
exports.getElementTop = getElementTop;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var DatetimePicker_1 = __webpack_require__(145);
exports.default = DatetimePicker_1.default;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Picker_1 = __webpack_require__(48);
var Utils_1 = __webpack_require__(2);
var dateArray = ['年', '月', '日'];
var DatetimePicker = /** @class */function (_super) {
    __extends(DatetimePicker, _super);
    function DatetimePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: [],
            visible: false
        };
        _this.handleValueChange = function (event) {
            _this.value[event.index] = event.value;
            var data = _this.getDate();
            _this.setState({
                data: data
            });
        };
        _this.handleChange = function (value) {
            _this.setState({
                value: value
            });
            if (_this.props.onOk) {
                _this.props.onOk(value);
            }
        };
        return _this;
    }
    DatetimePicker.prototype.componentWillMount = function () {
        this.miniDate = this.getRangeOfDate();
        this.setState({
            visible: this.props.visible,
            data: this.getDate()
        });
    };
    DatetimePicker.prototype.componentWillReceiveProps = function (nextProps) {
        if ('visible' in nextProps && this.props.visible !== nextProps.visible) {
            this.setState({
                visible: nextProps.visible,
                data: this.getDate()
            });
        }
    };
    DatetimePicker.prototype.getRangeOfDate = function () {
        var _a = this.props,
            minDate = _a.minDate,
            maxDate = _a.maxDate;
        return {
            minDate: this.splitDate(minDate),
            maxDate: this.splitDate(maxDate)
        };
    };
    DatetimePicker.prototype.splitDate = function (value) {
        var data = value.slice();
        if (typeof value === 'string') {
            data = value.split(/\/|-/gm).map(function (v) {
                return +v;
            });
        } else {
            data = [+value.getFullYear(), +value.getMonth() + 1, +value.getDate()];
        }
        return data;
    };
    DatetimePicker.prototype.countDay = function (year, month) {
        var lists = [];
        var num = this.getDay(year, month).total;
        for (var i = 1; i < num + 1; i++) {
            var value = this.dateEncode(i);
            lists.push({
                label: value,
                value: i
            });
        }
        return lists;
    };
    DatetimePicker.prototype.getInitDate = function () {
        var _this = this;
        var curDate = new Date();
        var defaultValue = this.props.defaultValue;
        var year = curDate.getFullYear(),
            month = curDate.getMonth() + 1,
            date = curDate.getDate();
        var value = defaultValue ? this.splitDate(defaultValue) : [year, month, date];
        this.value = (this.value || value).map(function (v) {
            var label = v.label || v;
            var value = v.value || v;
            return {
                label: _this.dateEncode(label),
                value: value
            };
        });
        var yearValue = parseInt(value[0]);
        this.value[0] = {
            value: this.value[0] ? this.value[0].value : yearValue,
            label: this.value[0] ? this.value[0].label : yearValue
        };
        return this.countDay(this.value[0].value, this.value[1].value);
    };
    DatetimePicker.prototype.getDay = function (year, month) {
        var curDate = new Date();
        curDate.setFullYear(year);
        curDate.setMonth(month);
        curDate.setDate(0);
        var total = curDate.getDate();
        curDate.setDate(1);
        var day = curDate.getDay();
        if (day === 0) {
            day = 7;
        }
        return {
            total: total,
            day: day
        };
    };
    DatetimePicker.prototype.getDate = function () {
        var days = this.getInitDate();
        var lists = this.state.data.slice();
        for (var i = 0; i < this.miniDate.maxDate[0] - this.miniDate.minDate[0] + 1; i++) {
            var children = lists[i] && lists[i].children || [];
            var year = i + this.miniDate.minDate[0];
            if (year === parseInt(this.value[0].value, 10)) {
                for (var j = 1; j < 13; j++) {
                    var month = j - 1;
                    var child = children[month] && children[month].children || [];
                    var s = this.value[1].value;
                    if (j === s) {
                        child = days;
                    }
                    children[month] = {
                        label: this.dateEncode(j),
                        value: j,
                        children: child
                    };
                }
            }
            lists[i] = {
                label: year,
                value: year,
                children: children
            };
        }
        return lists;
    };
    DatetimePicker.prototype.dateEncode = function (d) {
        d = parseInt(d) >= 10 ? d : '0' + parseInt(d);
        return d;
    };
    DatetimePicker.prototype.dateDecode = function (d) {
        return parseInt(String(d.value).replace(/\b(0+)/gi, ''));
    };
    DatetimePicker.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            onClose = _a.onClose,
            onOpen = _a.onOpen,
            other = __rest(_a, ["className", "onClose", "onOpen"]);
        var styleClass = classNames('DatetimePicker', className);
        var otherProps = Utils_1.getOtherProperties(other, ['defaultValue', 'children', 'minDate', 'maxDate', 'onOk', 'onOpen', 'onValueChange', 'visible']);
        return React.createElement("div", __assign({ className: styleClass }, otherProps), React.createElement(Picker_1.default, { data: this.state.data, defaultValue: this.value, value: this.state.value, onValueChange: this.handleValueChange, visible: this.state.visible, onChange: this.handleChange, onOpen: onOpen, onClose: onClose }));
    };
    DatetimePicker.defaultProps = {
        minDate: '2000/1/1',
        maxDate: '2020/1/1',
        mode: 'date'
    };
    return DatetimePicker;
}(React.PureComponent);
exports.default = DatetimePicker;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var Dom_1 = __webpack_require__(7);
var PickerItem = /** @class */function (_super) {
    __extends(PickerItem, _super);
    function PickerItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: [],
            activeIndex: 0,
            y: 0
        };
        _this.itemHeight = 0;
        _this.getItemRef = function (node) {
            if (!_this.item) {
                _this.item = node;
                _this.itemHeight = node.offsetHeight;
                _this.wrapper.style.height = _this.itemHeight * 3 + 'px';
                _this.setPosition(_this.props.value);
            }
        };
        _this.getWrapperRef = function (node) {
            _this.wrapper = node;
        };
        _this.touchStart = function (event) {
            if (_this.state.data.length === 0) return;
            if (_this.props.disabled) {
                return;
            }
            _this.dragging = true;
            var touch = _this.isMobile ? event.changedTouches[0] : event;
            _this.startY = touch.pageY;
            Dom_1.setTransitionDuration(_this.wrapper.firstElementChild, 0);
            document.addEventListener(_this.isMobile ? 'touchmove' : 'mousemove', _this.touchMove);
            document.addEventListener(_this.isMobile ? 'touchend' : 'mouseup', _this.touchEnd);
        };
        _this.touchMove = function (event) {
            if (_this.dragging) {
                if (_this.state.data.length === 0) return;
                var touch = _this.isMobile ? event.changedTouches[0] : event;
                var eY = touch.pageY;
                _this.setState({
                    y: _this.state.y + (eY - _this.startY)
                });
                _this.startY = eY;
            }
        };
        _this.touchEnd = function () {
            if (_this.dragging) {
                var scroll_1 = _this.wrapper.firstElementChild;
                Dom_1.setTransitionDuration(scroll_1, 300);
                var length_1 = _this.state.data.slice().length;
                if (length_1 === 0) return;
                var _a = _this.state,
                    data = _a.data,
                    y = _a.y;
                y = Math.max(Math.min(y, 0), -_this.itemHeight * (length_1 - 1));
                var activeIndex = Math.floor(Math.abs(y / _this.itemHeight));
                _this.setState({
                    y: -activeIndex * _this.itemHeight,
                    activeIndex: activeIndex
                });
                if (_this.props.onValueChange) {
                    _this.props.onValueChange({
                        activeIndex: activeIndex,
                        index: _this.props.index,
                        value: data[activeIndex]
                    });
                }
                _this.startY = 0;
            }
            _this.dragging = false;
            document.removeEventListener(_this.isMobile ? 'touchmove' : 'mousemove', _this.touchMove);
            document.removeEventListener(_this.isMobile ? 'touchend' : 'mouseup', _this.touchEnd);
        };
        _this.isMobile = 'ontouchstart' in document;
        return _this;
    }
    PickerItem.prototype.componentDidMount = function () {
        if ('data' in this.props) {
            this.setState({
                data: this.props.data
            });
        }
    };
    PickerItem.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if ('data' in nextProps && this.props.data !== nextProps.data) {
            var dataProps = nextProps.data;
            var data = dataProps.slice();
            this.setState({
                data: data
            }, function () {
                _this.setPosition(nextProps.value);
            });
        }
    };
    PickerItem.prototype.getMenusItem = function () {
        var _this = this;
        var _a = this.state,
            data = _a.data,
            y = _a.y;
        var format = typeof this.props.format === 'function' ? this.props.format : function (label) {
            return label;
        };
        y = Math.max(Math.min(y, 0), -this.itemHeight * (data.length - 1));
        var activeIndex = Math.floor(Math.abs(y / this.itemHeight));
        return data.map(function (item, index) {
            var styles = {
                transform: "rotateX(" + 25 * (index - activeIndex) + "deg)"
            };
            return React.createElement("div", { key: index, style: styles, className: "PickerItem-item", ref: _this.getItemRef }, format(item.label));
        });
    };
    PickerItem.prototype.setPosition = function (activeIndex) {
        var data = this.state.data.slice();
        if (activeIndex >= data.length) {
            activeIndex = data.length - 1;
        }
        var moveY = -activeIndex * this.itemHeight;
        this.setState({
            y: moveY,
            activeIndex: activeIndex
        });
    };
    PickerItem.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            data = _a.data,
            other = __rest(_a, ["className", "data"]);
        var styleClass = classNames('PickerItem', className);
        var otherProps = Utils_1.getOtherProperties(other, ['children', 'format', 'onChange', 'onValueChange', 'value']);
        return React.createElement("div", __assign({ className: styleClass }, otherProps), data['key'] ? React.createElement("div", { className: "PickerItem-label" }, data['key']) : null, React.createElement("div", { className: "PickerItem-wrapper", ref: this.getWrapperRef }, React.createElement("div", { className: "PickerItem-scroll", style: {
                transform: "translate3d(0, " + this.state.y + "px, 0)"
            } }, this.getMenusItem()), React.createElement("div", { className: "PickerItem-overlay", onTouchStart: this.touchStart, onMouseDown: this.isMobile ? function () {} : this.touchStart })));
    };
    PickerItem.defaultProps = {
        data: []
    };
    return PickerItem;
}(React.PureComponent);
exports.default = PickerItem;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var MessageBox_1 = __webpack_require__(148);
exports.default = MessageBox_1.default;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Message_1 = __webpack_require__(11);
var Transitions_1 = __webpack_require__(4);
var messageInstance;
var getMessageInstance = function getMessageInstance(props) {
    if (messageInstance) {
        return messageInstance;
    }
    return Message_1.default.create(__assign({}, props));
};
var MessageBox = /** @class */function () {
    function MessageBox(props) {
        var _this = this;
        this.handleClose = function () {
            messageInstance.remove(_this.currentItem.key);
        };
        this.handleConfirm = function () {
            messageInstance.remove(_this.currentItem.key);
            if (_this.props.type === 'prompt') {
                if (_this.props.onConfirm) {
                    _this.props.onConfirm(_this.inputNode.value);
                }
            }
        };
        this.getRef = function (node) {
            _this.inputNode = node;
        };
        props['delay'] = props.delay || 0;
        props['className'] = 'MessageBox';
        props['visible'] = true;
        this.props = props;
        messageInstance = getMessageInstance({
            hideBackdrop: true,
            className: 'MessageBox-group',
            onClose: props['onClose'] || function () {}
        });
        this.currentItem = this.create();
    }
    MessageBox.prototype.create = function () {
        var props = Object.assign({}, this.props);
        var _a = props.inputType,
            inputType = _a === void 0 ? 'text' : _a,
            _b = props.confirmButtonText,
            confirmButtonText = _b === void 0 ? '确认' : _b,
            _c = props.cancelButtonText,
            cancelButtonText = _c === void 0 ? '取消' : _c,
            type = props.type,
            title = props.title,
            message = props.message,
            onClose = props.onClose,
            _d = props.placeholder,
            placeholder = _d === void 0 ? '' : _d,
            showCancelButton = props.showCancelButton,
            showConfirmButton = props.showConfirmButton,
            visible = props.visible;
        props['message'] = React.createElement(Transitions_1.ZoomIn, { in: visible }, React.createElement("div", { className: classNames(['MessageBox-item', "MessageBox-" + type]), key: "MessageBox-item" }, React.createElement("div", { className: "MessageBox-item-wrapper" }, title ? React.createElement("div", { className: "MessageBox-header" }, React.createElement("div", { className: "MessageBox-header-title" }, title)) : null, React.createElement("div", { className: "MessageBox-content" }, message, type === 'prompt' ? React.createElement("input", { type: inputType, placeholder: placeholder, ref: this.getRef }) : null), React.createElement("div", { className: "MessageBox-btn-group" }, showCancelButton ? React.createElement("button", { className: "MessageBox-btn-cancel", onClick: this.handleClose }, cancelButtonText) : null, showConfirmButton ? React.createElement("button", { className: "MessageBox-btn-confirm", onClick: this.handleConfirm }, confirmButtonText) : null))));
        props['onClose'] = function () {
            if (onClose) {
                onClose();
            }
        };
        return messageInstance.create(__assign({}, props));
    };
    return MessageBox;
}();
exports.MessageBox = MessageBox;
exports.default = {
    show: function show(props) {
        return new MessageBox(__assign({}, props));
    },
    alert: function alert(props) {
        props['type'] = 'alert';
        props['showConfirmButton'] = true;
        return new MessageBox(__assign({}, props));
    },
    confirm: function confirm(props) {
        props['type'] = 'confirm';
        props['showCancelButton'] = true;
        props['showConfirmButton'] = true;
        return new MessageBox(__assign({}, props));
    },
    prompt: function prompt(props) {
        props['type'] = 'prompt';
        props['showCancelButton'] = true;
        props['showConfirmButton'] = true;
        return new MessageBox(__assign({}, props));
    },
    close: function close() {
        if (messageInstance) {
            messageInstance.clearAll();
            messageInstance = null;
        }
    }
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Modal_1 = __webpack_require__(150);
exports.default = Modal_1.default;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Portal_1 = __webpack_require__(12);
var Transitions_1 = __webpack_require__(4);
var Transitions_2 = __webpack_require__(4);
var Button_1 = __webpack_require__(20);
var Utils_1 = __webpack_require__(2);
var Modal = /** @class */function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClose = function () {
            _this.props.onClose();
        };
        _this.handleBackdropClick = function () {
            if (_this.props.hideBackdrop) {
                _this.props.onClose();
            }
        };
        var visible = false;
        if (props.visible) {
            visible = props.visible;
        }
        _this.state = { visible: visible };
        return _this;
    }
    Modal.prototype.componentWillReceiveProps = function (nextProps) {
        if ('visible' in nextProps && nextProps.visible !== this.props.visible) {
            this.setState({
                visible: nextProps.visible
            });
        }
    };
    Modal.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            header = _a.header,
            maxHeight = _a.maxHeight,
            prefixCls = _a.prefixCls,
            visible = _a.visible,
            other = __rest(_a, ["className", "children", "header", "maxHeight", "prefixCls", "visible"]);
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-max"] = maxHeight, _b), className);
        var panelClass = classNames(prefixCls + "-panel", {
            'bm-Scroll': maxHeight
        });
        var panelStyles = {
            maxHeight: Utils_1.setValueToNumber(maxHeight) + 'px'
        };
        var otherProps = Utils_1.getOtherProperties(other, ['hideBackdrop', 'onClose', 'onOpen']);
        return React.createElement(Portal_1.default, { mountNode: document.body, visible: visible }, React.createElement("div", { className: styleClass }, React.createElement(Transitions_1.Fade, { in: visible }, React.createElement("div", { className: prefixCls + "-backdrop", onClick: this.handleBackdropClick })), React.createElement(Transitions_2.ZoomIn, { in: visible }, React.createElement("div", __assign({ className: prefixCls + "-content" }, otherProps, { key: "Modal" }), header ? React.createElement("div", { className: prefixCls + "-header" }, header, React.createElement(Button_1.default, { className: prefixCls + "-close-x", onClick: this.handleClose }, React.createElement("span", null))) : null, React.createElement("div", { className: panelClass, style: maxHeight ? panelStyles : {} }, children)))));
        var _b;
    };
    Modal.defaultProps = {
        hideBackdrop: false,
        prefixCls: 'bm-Modal',
        visible: false
    };
    return Modal;
}(React.PureComponent);
exports.default = Modal;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Picker_1 = __webpack_require__(48);
exports.default = Picker_1.default;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var NavBar_1 = __webpack_require__(153);
exports.default = NavBar_1.default;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var NavBar = /** @class */function (_super) {
    __extends(NavBar, _super);
    function NavBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavBar.prototype.render = function () {
        var _a = this.props,
            center = _a.center,
            className = _a.className,
            fixed = _a.fixed,
            left = _a.left,
            right = _a.right,
            prefixCls = _a.prefixCls;
        var styleClass = classNames("" + prefixCls, (_b = {}, _b[prefixCls + "-fixed"] = fixed, _b), className);
        return React.createElement("div", { className: styleClass }, React.createElement("div", { className: prefixCls + "-inner" }, React.createElement("div", { className: prefixCls + "-left" }, left), React.createElement("div", { className: prefixCls + "-center" }, center), React.createElement("div", { className: prefixCls + "-right" }, right)));
        var _b;
    };
    NavBar.defaultProps = {
        center: '',
        left: '',
        prefixCls: 'bm-NavBar',
        right: ''
    };
    return NavBar;
}(React.PureComponent);
exports.default = NavBar;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Notification_1 = __webpack_require__(155);
exports.default = Notification_1.default;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Message_1 = __webpack_require__(11);
var Icon_1 = __webpack_require__(13);
var FadeInDown_1 = __webpack_require__(35);
var notificationInstance;
var getNotificationInstance = function getNotificationInstance(props) {
    if (notificationInstance) {
        return notificationInstance;
    }
    return Message_1.default.create(__assign({}, props));
};
var Notification = /** @class */function () {
    function Notification(props) {
        var _this = this;
        this.handleClose = function () {
            notificationInstance.remove(_this.currentItem.key);
        };
        props['prefixCls'] = 'bm-Notification';
        props['delay'] = 0;
        this.props = props;
        notificationInstance = getNotificationInstance({
            hideBackdrop: true, className: 'bm-Notification-group',
            onClose: props['onClose'] || function () {}
        });
        this.currentItem = this.create();
    }
    Notification.prototype.create = function () {
        var props = Object.assign({}, this.props);
        var type = props.type,
            avatar = props.avatar,
            message = props.message,
            onClose = props.onClose,
            prefixCls = props.prefixCls,
            progress = props.progress,
            title = props.title;
        var notiClass = classNames("" + (prefixCls + type), prefixCls + "-item");
        props['message'] = React.createElement(FadeInDown_1.default, { in: true }, React.createElement("div", { className: notiClass, key: "Notification-item" }, avatar ? React.createElement("div", { className: prefixCls + "-avatar" }, avatar) : null, React.createElement("div", { className: prefixCls + "-item-content" }, React.createElement("div", { className: prefixCls + "-title" }, title), React.createElement("div", { className: prefixCls + "-message" }, message)), React.createElement("a", { className: prefixCls + "-close", onClick: this.handleClose }, React.createElement(Icon_1.default, { icon: "close" })), progress ? React.createElement("div", { className: prefixCls + "-progress" }, React.createElement("div", { className: prefixCls + "-progress-bar" })) : null));
        props['onClose'] = function () {
            if (onClose) {
                onClose();
            }
        };
        return notificationInstance.create(__assign({}, props));
    };
    return Notification;
}();
exports.Notification = Notification;
exports.default = {
    show: function show(props) {
        return new Notification(__assign({}, props));
    },
    info: function info(props) {
        props['type'] = 'info';
        return new Notification(__assign({}, props));
    },
    success: function success(props) {
        props['type'] = 'success';
        return new Notification(__assign({}, props));
    },
    warning: function warning(props) {
        props['type'] = 'warning';
        return new Notification(__assign({}, props));
    },
    error: function error(props) {
        props['type'] = 'error';
        return new Notification(__assign({}, props));
    },
    close: function close() {
        if (notificationInstance) {
            notificationInstance.clearAll();
            notificationInstance = null;
        }
    }
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Page_1 = __webpack_require__(157);
exports.default = Page_1.default;
var Content_1 = __webpack_require__(158);
exports.Content = Content_1.default;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Page = /** @class */function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            isActive = _a.isActive,
            children = _a.children;
        var styleClass = classNames('Page', className, isActive ? 'Page-active' : 'Page-on-right');
        return React.createElement("div", { className: styleClass }, children);
    };
    Page.defaultProps = {
        isActive: true
    };
    return Page;
}(React.PureComponent);
exports.default = Page;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var Content = /** @class */function (_super) {
    __extends(Content, _super);
    function Content() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loading: false,
            scrollTop: 0,
            transitions: false,
            x: 0,
            y: 0
        };
        _this.handleTouchStart = function (event) {
            if (!_this.props.pullToRefresh) {
                return;
            }
            if (_this.scrollElem && _this.scrollElem.scrollTop > 0) {
                return;
            }
            var touch = event.changedTouches[0];
            _this.startXY = {
                pageX: touch.pageX,
                pageY: touch.pageY
            };
            if (_this.props.onPullStart) {
                _this.props.onPullStart();
            }
            document.addEventListener('touchmove', _this.handleTouchMove);
            document.addEventListener('touchend', _this.handleTouchEnd);
        };
        _this.handleTouchMove = function (event) {
            var touch = event.changedTouches[0];
            _this.setState({
                y: _this.state.y + touch.pageY - _this.startXY.pageY
            });
            _this.startXY = {
                pageX: touch.pageX,
                pageY: touch.pageY
            };
            if (_this.props.onPullMove) {
                _this.props.onPullMove();
            }
        };
        _this.handleTouchEnd = function () {
            var y = _this.state.y;
            if (_this.props.onPullEnd) {
                _this.props.onPullEnd();
            }
            if (y < _this.preloaderHeight) {
                _this.setState({
                    transitions: true,
                    x: 0,
                    y: 0
                });
            } else if (_this.preloaderHeight < y) {
                _this.setState({
                    loading: true,
                    y: _this.preloaderHeight,
                    states: 'refreshing',
                    transitions: true
                });
            }
            document.removeEventListener('touchmove', _this.handleTouchMove);
            document.removeEventListener('touchend', _this.handleTouchEnd);
        };
        _this.handleTransitionEnd = function () {
            if (_this.props.pullToRefresh && _this.props.onRefresh) {
                _this.props.onRefresh(_this);
            }
        };
        _this.handleScroll = function (event) {
            var scroller = event.target;
            var scrollTop = scroller.scrollTop;
            if (_this.props.pullToRefresh) {
                _this.setState({ scrollTop: scrollTop });
            }
            if (_this.props.infiniteScroll) {
                var scrollHeight = scroller.scrollHeight - _this.scrollElem.offsetHeight;
                if (scrollHeight <= scrollTop) {
                    if (_this.props.onInfinite) {
                        _this.props.onInfinite(_this);
                    }
                }
            }
            if (_this.props.onContentScroll) {
                _this.props.onContentScroll(event);
            }
        };
        _this.getRef = function (node) {
            if (node) {
                _this.scrollElem = node;
            }
        };
        _this.getPreloaderRef = function (node) {
            if (node) {
                _this.preloaderHeight = node.offsetHeight;
            }
        };
        return _this;
    }
    Content.prototype.reset = function () {
        this.setState({
            loading: false,
            transitions: false,
            states: '',
            x: 0,
            y: 0
        });
    };
    Content.prototype.done = function () {
        this.reset();
    };
    Content.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            className = _a.className,
            prefixCls = _a.prefixCls,
            preloader = _a.preloader,
            pullToRefresh = _a.pullToRefresh,
            style = _a.style,
            other = __rest(_a, ["children", "className", "prefixCls", "preloader", "pullToRefresh", "style"]);
        var _b = this.state,
            states = _b.states,
            transitions = _b.transitions;
        var styleClass = classNames(prefixCls, states ? prefixCls + '-' + states : '', {
            'bm-transitions': transitions
        }, className);
        var preloaderElem = preloader ? preloader : React.createElement("div", { className: prefixCls + "-preloader", ref: this.getPreloaderRef }, React.createElement("div", { className: prefixCls + "-preloader-loading" }), React.createElement("div", { className: prefixCls + "-preloader-arrow" }));
        var styles = __assign({ transform: "translate3d(0, " + this.state.y + "px, 0)" }, style);
        var otherProps = Utils_1.getOtherProperties(other, ['height', 'infiniteScroll', 'onInfinite', 'onContentScroll', 'onPullStart', 'onPullMove', 'onPullEnd', 'onRefresh', 'width']);
        return React.createElement("div", __assign({ ref: this.getRef, className: styleClass, style: styles, onScroll: this.handleScroll }, otherProps, { onTransitionEnd: this.handleTransitionEnd, onTouchStart: this.handleTouchStart }), pullToRefresh ? preloaderElem : null, children);
    };
    Content.defaultProps = {
        infiniteScroll: false,
        prefixCls: 'bm-Content',
        pullToRefresh: false
    };
    return Content;
}(React.PureComponent);
exports.default = Content;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Pagination_1 = __webpack_require__(160);
exports.default = Pagination_1.default;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var PaginationItem_1 = __webpack_require__(161);
var Utils_1 = __webpack_require__(2);
var Pagination = /** @class */function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            pages: [],
            value: 1
        };
        _this.isFirstPage = false;
        _this.isLastPage = false;
        _this.startEllipsis = false;
        _this.endEllipsis = false;
        _this.pageOffset = 0;
        return _this;
    }
    Pagination.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props,
            maxPage = _a.maxPage,
            pageSize = _a.pageSize,
            total = _a.total,
            value = _a.value;
        if (value >= 1) {
            this.setState({
                value: value
            }, function () {
                _this.totalRecord = total;
                _this.pageCount = Math.ceil(total / pageSize);
                _this.countPage(maxPage);
                _this.checkStartOrEnd(_this.state.value);
                _this.changePage(_this.state.value);
            });
        }
    };
    Pagination.prototype.componentWillReceiveProps = function (nextProps) {
        if ('total' in nextProps && this.props.total !== nextProps.total) {
            var maxPage = nextProps.maxPage,
                pageSize = nextProps.pageSize,
                total = nextProps.total;
            this.totalRecord = nextProps.total;
            this.pageCount = Math.ceil(total / pageSize);
            this.countPage(maxPage);
            this.checkStartOrEnd(this.state.value);
        }
        if ('value' in nextProps && this.props.value !== nextProps.value) {
            var value = nextProps.value;
            if (value < 0) {
                value = 1;
            } else if (value > this.pageCount) {
                value = this.pageCount;
            }
            this.setState({
                value: value
            });
        }
    };
    Pagination.prototype.countPage = function (end, start) {
        if (start === void 0) {
            start = 0;
        }
        var pages = [];
        var min = Math.min(end, this.pageCount);
        for (var i = start; i < min; i++) {
            pages.push(i + 1);
        }
        this.setState({
            pages: pages
        });
    };
    Pagination.prototype.changePage = function (index) {
        var maxPage = this.props.maxPage;
        var middle = Math.ceil(maxPage / 2);
        if (index <= 1) {
            index = 1;
        } else if (index >= this.getPage()) {
            index = this.getPage();
        }
        this.start = index - middle;
        this.end = Math.min(index + maxPage - middle, this.pageCount);
        if (index < maxPage) {
            this.end = maxPage;
        }
        if (this.end - this.start <= maxPage) {
            this.start = this.end - maxPage;
        }
        if (this.start <= 0 || index < maxPage) {
            this.start = 0;
        }
        this.countPage(this.end, this.start);
        this.checkStartOrEnd(index);
        this.setState({
            value: index
        });
        if (this.props.onPageChange) {
            this.props.onPageChange({
                value: this.state.value
            });
        }
    };
    Pagination.prototype.checkStartOrEnd = function (index) {
        var maxPage = this.props.maxPage;
        this.isFirstPage = false;
        this.isLastPage = false;
        this.startEllipsis = false;
        this.endEllipsis = false;
        if (index === 1) {
            this.isFirstPage = true;
        }
        if (index === this.pageCount) {
            this.isLastPage = true;
        }
        if (maxPage < this.pageCount && !this.isLastPage && this.end !== this.pageCount) {
            this.endEllipsis = true;
        }
        if (maxPage < this.pageCount && !this.isFirstPage && this.state.value >= maxPage) {
            this.startEllipsis = true;
        }
    };
    Pagination.prototype.getPage = function () {
        return Math.max(this.props.maxPage, this.pageCount);
    };
    Pagination.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            className = _a.className,
            maxPage = _a.maxPage,
            prefixCls = _a.prefixCls,
            shape = _a.shape,
            other = __rest(_a, ["className", "maxPage", "prefixCls", "shape"]);
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-circle"] = shape === 'circle', _b), className);
        var _c = this.state,
            pages = _c.pages,
            value = _c.value;
        var prev = value - 1,
            next = value + 1;
        var otherProps = Utils_1.getOtherProperties(other, ['pageSize']);
        return React.createElement("div", __assign({ className: styleClass }, otherProps), React.createElement("ul", null, React.createElement(PaginationItem_1.default, { disabled: this.isFirstPage, onClick: this.changePage.bind(this, prev), component: React.createElement("span", { className: prefixCls + "-backward" }, React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48" }, React.createElement("path", { d: "M30.83 32.67l-9.17-9.17 9.17-9.17L28 11.5l-12 12 12 12z" }), React.createElement("path", { d: "M0-.5h48v48H0z", fill: "none" }))) }), this.startEllipsis ? React.createElement(PaginationItem_1.default, { onClick: this.changePage.bind(this, 1), index: 1, component: "1" }) : null, this.startEllipsis ? React.createElement(PaginationItem_1.default, { disabled: true, index: 1, component: React.createElement("span", { className: prefixCls + "-number " + prefixCls + "-ellipsis" }) }) : null, pages.map(function (page) {
            return React.createElement(PaginationItem_1.default, { key: page, active: page === _this.state.value, index: page, onClick: _this.changePage.bind(_this, page), component: React.createElement("span", { className: prefixCls + "-number" }, page) });
        }), this.endEllipsis ? React.createElement(PaginationItem_1.default, { disabled: true, component: React.createElement("span", { className: prefixCls + "-number " + prefixCls + "-ellipsis" }) }) : null, this.pageCount > maxPage && !this.isLastPage && this.endEllipsis ? React.createElement(PaginationItem_1.default, { onClick: this.changePage.bind(this), index: this.pageCount, component: React.createElement("span", { className: prefixCls + "-number" }, this.pageCount) }) : null, React.createElement(PaginationItem_1.default, { disabled: this.isLastPage, onClick: this.changePage.bind(this, next), component: React.createElement("span", { className: prefixCls + "-forward" }, React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48" }, React.createElement("path", { d: "M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z" }), React.createElement("path", { d: "M0-.25h48v48H0z", fill: "none" }))) })));
        var _b;
    };
    Pagination.defaultProps = {
        maxPage: 5,
        prefixCls: 'bm-Pagination',
        pageSize: 10,
        value: 1
    };
    return Pagination;
}(React.PureComponent);
exports.default = Pagination;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var PaginationItem = /** @class */function (_super) {
    __extends(PaginationItem, _super);
    function PaginationItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            active: false,
            disabled: false
        };
        _this.handleClick = function () {
            if (_this.props.onClick) {
                _this.props.onClick();
            }
        };
        return _this;
    }
    PaginationItem.prototype.componentDidMount = function () {
        if ('active' in this.props) {
            this.setState({
                active: this.props.active
            });
        }
        if ('disabled' in this.props) {
            this.setState({
                disabled: this.props.disabled
            });
        }
    };
    PaginationItem.prototype.componentWillReceiveProps = function (nextProps) {
        if ('disabled' in nextProps && this.props.disabled !== nextProps.disabled) {
            this.setState({
                disabled: nextProps.disabled
            });
        }
        if ('active' in nextProps && this.props.active !== nextProps.active) {
            this.setState({
                active: nextProps.active
            });
        }
    };
    PaginationItem.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            component = _a.component,
            index = _a.index,
            prefixCls = _a.prefixCls;
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-active"] = !!index && this.state.active, _b[prefixCls + "-disabled"] = this.state.disabled, _b), className);
        return React.createElement("li", { className: styleClass, onClick: this.handleClick }, React.createElement("span", { className: prefixCls + "-btn" }, component));
        var _b;
    };
    PaginationItem.defaultProps = {
        prefixCls: 'bm-PaginationItem'
    };
    return PaginationItem;
}(React.PureComponent);
exports.default = PaginationItem;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Panel_1 = __webpack_require__(163);
exports.default = Panel_1.default;
var PanelHeader_1 = __webpack_require__(164);
exports.PanelHeader = PanelHeader_1.default;
var PanelContent_1 = __webpack_require__(165);
exports.PanelContent = PanelContent_1.default;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Transitions_1 = __webpack_require__(4);
var Panel = /** @class */function (_super) {
    __extends(Panel, _super);
    function Panel(props) {
        var _this = _super.call(this, props) || this;
        _this.handleExpandClick = function () {
            if (_this.props.onExpand) {
                _this.props.onExpand();
            }
            _this.setState({
                expanded: !_this.state.expanded
            });
        };
        _this.handleFullscreenClick = function () {
            if (_this.props.onFullscreen) {
                _this.props.onFullscreen();
            }
            _this.setState({
                full: !_this.state.full
            });
        };
        _this.state = {
            expanded: true,
            full: false
        };
        return _this;
    }
    Panel.prototype.componentDidMount = function () {
        if ('expanded' in this.props) {
            this.setState({
                expanded: this.props.expanded
            });
        }
    };
    Panel.prototype.componentWillReceiveProps = function (nextProps) {
        if ('expanded' in nextProps) {
            this.setState({
                expanded: nextProps.expanded
            });
        }
    };
    Panel.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            className = _a.className,
            childrenProps = _a.children,
            expanded = _a.expanded,
            onExpand = _a.onExpand,
            onFullscreen = _a.onFullscreen,
            tool = _a.tool,
            other = __rest(_a, ["className", "children", "expanded", "onExpand", "onFullscreen", "tool"]);
        var styleClass = classNames('Panel', {
            'Panel-fullwidth': this.state.full
        }, className);
        var headerChildren = '';
        var children = React.Children.map(childrenProps, function (child) {
            if (!React.isValidElement(child)) {
                return null;
            }
            var type = child.type;
            var fnName = type.fnName;
            if (fnName === 'PanelHeader') {
                headerChildren = React.cloneElement(child, {
                    tool: tool,
                    onExpand: _this.handleExpandClick,
                    onFullscreen: _this.handleFullscreenClick
                });
                return null;
            }
            return child;
        });
        return React.createElement("div", __assign({ className: styleClass }, other), headerChildren, React.createElement(Transitions_1.Collapse, { in: this.state.expanded, className: "PanelBody" }, children));
    };
    Panel.defaultProps = {
        expanded: true,
        tool: false
    };
    return Panel;
}(React.PureComponent);
exports.default = Panel;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var PanelHeader = /** @class */function (_super) {
    __extends(PanelHeader, _super);
    function PanelHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleExpandClick = function () {
            if (_this.props.onExpand) {
                _this.props.onExpand();
            }
        };
        _this.handleFullscreenClick = function () {
            if (_this.props.onFullscreen) {
                _this.props.onFullscreen();
            }
        };
        return _this;
    }
    PanelHeader.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            className = _a.className,
            onExpand = _a.onExpand,
            onFullscreen = _a.onFullscreen,
            tool = _a.tool,
            other = __rest(_a, ["children", "className", "onExpand", "onFullscreen", "tool"]);
        var styleClass = classNames('PanelHeader', className);
        return React.createElement("div", __assign({ className: styleClass }, other), children, !!tool ? React.createElement("div", { className: "PanelHeader-toolbar" }, React.createElement("i", { className: "Icon iconfont icon-icon--", onClick: this.handleFullscreenClick }), React.createElement("i", { className: "Icon iconfont icon-jianhao", onClick: this.handleExpandClick })) : null);
    };
    PanelHeader.fnName = 'PanelHeader';
    return PanelHeader;
}(React.PureComponent);
exports.default = PanelHeader;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var PanelContent = /** @class */function (_super) {
    __extends(PanelContent, _super);
    function PanelContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelContent.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            other = __rest(_a, ["className", "children"]);
        var styleClass = classNames('PanelContent', className);
        return React.createElement("div", __assign({ className: styleClass }, other), React.createElement("div", { className: "Panel-inner" }, children));
    };
    return PanelContent;
}(React.PureComponent);
exports.default = PanelContent;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Paper_1 = __webpack_require__(167);
exports.default = Paper_1.default;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Paper = /** @class */function (_super) {
    __extends(Paper, _super);
    function Paper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Paper.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            depth = _a.depth,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["className", "children", "depth", "prefixCls"]);
        var dp = depth ? prefixCls + "-" + depth + "dp" : 'no-shadow';
        var styleClass = classNames(prefixCls, dp, className);
        return React.createElement("div", __assign({ className: styleClass }, other), children);
    };
    Paper.defaultProps = {
        depth: 1,
        prefixCls: 'bm-Paper'
    };
    return Paper;
}(React.PureComponent);
exports.default = Paper;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Popover_1 = __webpack_require__(169);
exports.default = Popover_1.default;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(16);
var classNames = __webpack_require__(1);
var Portal_1 = __webpack_require__(41);
var FadeInZoom_1 = __webpack_require__(36);
var Utils_1 = __webpack_require__(2);
var Popover = /** @class */function (_super) {
    __extends(Popover, _super);
    function Popover(props) {
        var _this = _super.call(this, props) || this;
        _this.setElPositionStyle = function (elem) {
            if (elem && elem.style) {
                var position = _this.getElPositionStyle(elem);
                elem.style.top = position.top + 'px';
                elem.style.left = position.left + 'px';
                elem.style.transformOrigin = position.transformOrigin;
            }
        };
        _this.getElPositionStyle = function (elem) {
            var _a = _this.props,
                anchorEl = _a.anchorEl,
                dir = _a.dir;
            if (anchorEl) {
                var rect = anchorEl.getBoundingClientRect();
                var width = anchorEl.offsetWidth,
                    height = anchorEl.offsetHeight;
                var elemWidth = elem.offsetWidth;
                var offsetWidth = elemWidth - width;
                var left = 0,
                    top_1 = rect.top;
                switch (dir) {
                    case 'top-left':
                        left = rect.left - offsetWidth;
                        break;
                    case 'top-center':
                        left = rect.left - offsetWidth / 2;
                        elemWidth = elemWidth / 2;
                        break;
                    case 'top-right':
                        left = rect.left;
                        elemWidth = 0;
                        break;
                    case 'bottom-left':
                        top_1 = rect.top + height;
                        left = rect.left - offsetWidth;
                        break;
                    case 'bottom-center':
                        top_1 = rect.top + height;
                        left = rect.left - offsetWidth / 2;
                        elemWidth = elemWidth / 2;
                        break;
                    case 'bottom-right':
                        left = rect.left;
                        top_1 = rect.top + height;
                        elemWidth = 0;
                        break;
                }
                return { left: left, top: top_1, transformOrigin: elemWidth + 'px 0 0' };
            }
        };
        _this.handleClose = function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }
        };
        _this.getPopoverRef = function (node) {
            _this.transitionEl = ReactDOM.findDOMNode(node);
            _this.setElPositionStyle(_this.transitionEl);
        };
        var visible = false;
        if (props.visible) {
            visible = true;
        }
        _this.state = {
            visible: visible
        };
        return _this;
    }
    Popover.prototype.componentWillReceiveProps = function (nextProps) {
        this.setElPositionStyle(ReactDOM.findDOMNode(this.transitionEl));
        if ('visible' in nextProps && this.props.visible !== nextProps.visible) {
            this.setState({
                visible: nextProps.visible
            });
        }
    };
    Popover.prototype.componentWillUnmount = function () {
        if (this.transitionEl) {
            this.transitionEl = null;
        }
    };
    ;
    Popover.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            className = _a.className,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["children", "className", "prefixCls"]);
        var visible = this.state.visible;
        var styleClass = classNames(prefixCls, className);
        var otherProps = Utils_1.getOtherProperties(other, ['anchorEl', 'dir', 'onClose', 'visible']);
        return React.createElement(Portal_1.default, { visible: visible, mountNode: document.body }, React.createElement("div", __assign({ className: styleClass }, otherProps), React.createElement("div", { className: prefixCls + "-mask", onClick: this.handleClose }), React.createElement(FadeInZoom_1.default, { className: prefixCls + "-inner", in: visible, ref: this.getPopoverRef }, children)));
    };
    Popover.defaultProps = {
        anchorEl: null,
        dir: 'bottom-right',
        prefixCls: 'bm-Popover',
        visible: false
    };
    return Popover;
}(React.PureComponent);
exports.default = Popover;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Popup_1 = __webpack_require__(171);
exports.default = Popup_1.default;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Portal_1 = __webpack_require__(12);
var Transitions_1 = __webpack_require__(4);
var Utils_1 = __webpack_require__(2);
var Popup = /** @class */function (_super) {
    __extends(Popup, _super);
    function Popup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Popup.prototype.componentWillReceiveProps = function (nextProps) {
        if ('visible' in nextProps && nextProps.visible !== this.props.visible) {
            if (nextProps.visible) {
                if (nextProps.onOpen) {
                    nextProps.onOpen();
                }
            } else {
                if (nextProps.onClose) {
                    nextProps.onClose();
                }
            }
        }
    };
    Popup.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            direction = _a.direction,
            prefixCls = _a.prefixCls,
            visible = _a.visible,
            other = __rest(_a, ["className", "children", "direction", "prefixCls", "visible"]);
        var styleClass = classNames(prefixCls, className);
        var otherProps = Utils_1.getOtherProperties(other, ['onClose', 'onOpen']);
        var Component = direction === 'up' ? Transitions_1.FadeInUp : Transitions_1.MoveInRight;
        return React.createElement(Portal_1.default, { mountNode: document.body, visible: visible }, React.createElement("div", __assign({ className: styleClass }, otherProps), React.createElement(Component, { in: visible }, React.createElement("div", { className: prefixCls + "-panel", key: "Popup-panel" }, children))));
    };
    Popup.defaultProps = {
        direction: 'up',
        prefixCls: 'bm-Popup',
        visible: false
    };
    return Popup;
}(React.PureComponent);
exports.default = Popup;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Progress_1 = __webpack_require__(173);
exports.default = Progress_1.default;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var Progress = /** @class */function (_super) {
    __extends(Progress, _super);
    function Progress(props) {
        var _this = _super.call(this, props) || this;
        var value = 0;
        if (props.value > 0) {
            value = props.value;
        }
        _this.state = {
            value: value
        };
        return _this;
    }
    Progress.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if ('value' in nextProps && this.props.value !== nextProps.value) {
            this.setState({
                value: nextProps.value
            }, function () {
                if (_this.props.onComplete && nextProps.value === 100) {
                    _this.props.onComplete();
                }
            });
        }
    };
    Progress.prototype.render = function () {
        var _a = this.props,
            animated = _a.animated,
            barColor = _a.barColor,
            className = _a.className,
            completeColor = _a.completeColor,
            children = _a.children,
            height = _a.height,
            loading = _a.loading,
            showValue = _a.showValue,
            striped = _a.striped,
            width = _a.width,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["animated", "barColor", "className", "completeColor", "children", "height", "loading", "showValue", "striped", "width", "prefixCls"]);
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-striped"] = striped, _b[prefixCls + "-animated"] = animated, _b), className);
        var value = this.state.value;
        if (value >= 100) {
            barColor = completeColor;
        }
        var barStyle = {
            width: value + '%',
            background: barColor
        };
        var styles = { width: width, height: height };
        var otherProps = Utils_1.getOtherProperties(other, ['onComplete']);
        return React.createElement("div", __assign({ className: styleClass, style: styles }, otherProps), loading ? React.createElement("span", { className: prefixCls + "-bar-infinite" }) : React.createElement("div", { className: prefixCls + "-inner" }, React.createElement("div", { className: prefixCls + "-bar", style: barStyle }, children, showValue ? React.createElement("span", { className: prefixCls + "-text" }, value + '%') : null)));
        var _b;
    };
    Progress.defaultProps = {
        completeColor: '#26a69a',
        loading: false,
        showValue: false,
        striped: false,
        animated: false,
        prefixCls: 'bm-Progress'
    };
    return Progress;
}(React.PureComponent);
exports.default = Progress;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Radio_1 = __webpack_require__(175);
exports.default = Radio_1.default;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Ripple_1 = __webpack_require__(9);
var Radio = /** @class */function (_super) {
    __extends(Radio, _super);
    function Radio(props) {
        var _this = _super.call(this, props) || this;
        _this.handleInputChange = function () {
            var value = _this.props.value;
            if (_this.props.onChange) {
                _this.props.onChange(value, event);
            }
        };
        var checked = false;
        if (props.defaultChecked) {
            checked = props.defaultChecked;
        }
        _this.state = {
            checked: checked
        };
        return _this;
    }
    Radio.prototype.componentWillReceiveProps = function (nextProps) {
        if ('checked' in nextProps && this.props.checked !== nextProps.checked) {
            this.setState({
                checked: nextProps.checked
            });
        }
    };
    Radio.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            className = _a.className,
            disabled = _a.disabled,
            disableRipple = _a.disableRipple,
            name = _a.name;
        var checked = this.state.checked;
        var styleClass = classNames('Radio', {
            'Radio-active': checked,
            'Radio-disabled': disabled
        }, className);
        return React.createElement("label", { className: styleClass }, React.createElement("input", { type: "radio", disabled: disabled, name: name, checked: checked, onChange: this.handleInputChange }), React.createElement("div", { className: "Radio-icon" }, React.createElement("svg", { className: "Radio-noChecked", focusable: "false", viewBox: "0 0 24 24" }, React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })), React.createElement("svg", { className: "Radio-checked", focusable: "false", viewBox: "0 0 24 24" }, React.createElement("path", { d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })), !disableRipple ? React.createElement(Ripple_1.default, { centerMode: true, size: "sm" }) : null), React.createElement("div", { className: "Radio-inner" }, children));
    };
    Radio.defaultProps = {
        defaultChecked: false
    };
    return Radio;
}(React.PureComponent);
exports.default = Radio;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Rate_1 = __webpack_require__(177);
exports.default = Rate_1.default;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Icon_1 = __webpack_require__(13);
var Utils_1 = __webpack_require__(2);
var Ripple_1 = __webpack_require__(9);
var Rate = /** @class */function (_super) {
    __extends(Rate, _super);
    function Rate(props) {
        var _this = _super.call(this, props) || this;
        var value = 0;
        if (props.defaultValue > 0) {
            value = props.defaultValue;
        }
        _this.state = {
            value: value
        };
        return _this;
    }
    Rate.prototype.componentWillReceiveProps = function (nextProps) {
        if ('value' in nextProps && this.props.value !== nextProps.value) {
            this.setState({
                value: nextProps.value
            });
        }
    };
    Rate.prototype.getRange = function (len, start, step) {
        if (start === void 0) {
            start = 0;
        }
        if (step === void 0) {
            step = 1;
        }
        var range = [];
        for (var i = start; i < len; i += step) {
            range.push(i);
        }
        return range;
    };
    Rate.prototype.isIn = function (value) {
        var ex = this.state.value - value;
        return ex > 0 && ex < 1;
    };
    Rate.prototype.handleClick = function (value, half, event) {
        event.stopPropagation();
        var _a = this.props,
            allowHalf = _a.allowHalf,
            onChange = _a.onChange,
            readOnly = _a.readOnly;
        var _value = 0;
        if (!readOnly) {
            _value = value + 1;
            if (half && allowHalf) {
                _value -= 0.5;
            }
            this.setState({
                value: _value
            });
            if (onChange) {
                onChange(_value);
            }
        }
    };
    Rate.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            allowHalf = _a.allowHalf,
            className = _a.className,
            template = _a.template,
            count = _a.count,
            disableRipple = _a.disableRipple,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["allowHalf", "className", "template", "count", "disableRipple", "prefixCls"]);
        var styleClass = classNames(prefixCls, className);
        var value = this.state.value;
        var otherProps = Utils_1.getOtherProperties(other, ['defaultValue', 'value', 'readOnly', 'onChange']);
        var component = template ? template : React.createElement(Icon_1.default, { icon: "star" });
        var children = function children(v, i) {
            var isActive = v < value;
            var halfClass = classNames((_a = {}, _a[prefixCls + "-active"] = isActive, _a), prefixCls + "-half");
            var styles = {
                opacity: _this.isIn(v) ? 1 : 0
            };
            var iconClass = classNames((_b = {}, _b[prefixCls + "-active"] = allowHalf ? !_this.isIn(v) && isActive : isActive, _b));
            return React.createElement("div", { key: i, className: prefixCls + "-item" }, allowHalf ? React.createElement("div", { className: halfClass, style: styles, onClick: _this.handleClick.bind(_this, i, true) }, component) : null, React.createElement("div", { className: iconClass, onClick: _this.handleClick.bind(_this, i, false) }, component, !disableRipple ? React.createElement(Ripple_1.default, { centerMode: true, hidden: false }) : null));
            var _a, _b;
        };
        return React.createElement("div", __assign({ className: styleClass }, otherProps), this.getRange(count).map(function (v, i) {
            return children(v, i);
        }));
    };
    Rate.defaultProps = {
        allowHalf: false,
        count: 5,
        defaultValue: 0,
        readOnly: false,
        disableRipple: true,
        prefixCls: 'bm-Rate'
    };
    return Rate;
}(React.PureComponent);
exports.default = Rate;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var RouteTransition_1 = __webpack_require__(49);
exports.RouteTransition = RouteTransition_1.default;
var AnimatedSwitch_1 = __webpack_require__(179);
exports.AnimatedSwitch = AnimatedSwitch_1.default;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Route_1 = __webpack_require__(180);
var Switch_1 = __webpack_require__(188);
var matchPath_1 = __webpack_require__(190);
var RouteTransition_1 = __webpack_require__(49);
var Utils_1 = __webpack_require__(2);
var NO_MATCH = {
    key: 'no-match'
};
var AnimatedSwitch = /** @class */function (_super) {
    __extends(AnimatedSwitch, _super);
    function AnimatedSwitch(props) {
        var _this = _super.call(this, props) || this;
        _this.matches = 0;
        _this.state = {
            key: _this.getLocationKey(_this.props.location),
            match: _this.getMatchedRoute(_this.props.children, _this.props.location.pathname)
        };
        return _this;
    }
    AnimatedSwitch.prototype.componentDidMount = function () {
        if (this.props.onRouteChange) {
            this.props.onRouteChange(this.props.location);
        }
    };
    AnimatedSwitch.prototype.componentWillReceiveProps = function (nextProps) {
        var nextMatch = this.getMatchedRoute(nextProps.children, nextProps.location.pathname);
        if (this.state.match.key !== nextMatch.key) {
            this.setState({
                match: nextMatch,
                key: this.getLocationKey(nextProps.location) + ++this.matches
            });
            if (this.props.onRouteChange) {
                this.props.onRouteChange(nextProps.location);
            }
        }
    };
    AnimatedSwitch.prototype.getMatchedRoute = function (children, pathname) {
        return React.Children.toArray(children).find(function (child) {
            return matchPath_1.default(pathname, {
                exact: child.props.exact,
                path: child.props.path
            });
        }) || NO_MATCH;
    };
    AnimatedSwitch.prototype.getLocationKey = function (location) {
        return typeof location.key === 'string' ? location.key : '';
    };
    AnimatedSwitch.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            location = _a.location,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["className", "children", "location", "prefixCls"]);
        var styleClass = classNames(prefixCls, className);
        var otherProps = Utils_1.getOtherProperties(other, ['key', 'match']);
        return React.createElement(RouteTransition_1.default, __assign({ className: styleClass }, otherProps), React.createElement(Switch_1.default, { key: this.state.key, location: location }, children));
    };
    AnimatedSwitch.defaultProps = {
        prefixCls: "bm-AnimatedSwitch",
        location: {
            pathname: ''
        }
    };
    return AnimatedSwitch;
}(React.PureComponent);
var RouteWrapper = function RouteWrapper(props) {
    // When location change, Route always render, so we can get the location
    return React.createElement(Route_1.default, { children: function children(_a) {
            var location = _a.location;
            return React.createElement(AnimatedSwitch, __assign({ location: location }, props));
        } });
};
exports.default = RouteWrapper;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Route = __webpack_require__(181);

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Route2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(21);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(50);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _matchPath = __webpack_require__(26);

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isEmptyChildren = function isEmptyChildren(children) {
  return _react2.default.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    (0, _invariant2.default)(router, 'You should not use <Route> or withRouter() outside a <Router>');

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return path ? (0, _matchPath2.default)(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }) : route.match;
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!(this.props.component && this.props.render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

    (0, _warning2.default)(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

    (0, _warning2.default)(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    return component ? // component prop gets first priority, only called if there's a match
    match ? _react2.default.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
    match ? render(props) : null : children ? // children come last, always called
    typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? _react2.default.Children.only(children) : null : null;
  };

  return Route;
}(_react2.default.Component);

Route.propTypes = {
  computedMatch: _propTypes2.default.object, // private, from <Switch>
  path: _propTypes2.default.string,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  sensitive: _propTypes2.default.bool,
  component: _propTypes2.default.func,
  render: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
  location: _propTypes2.default.object
};
Route.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.object.isRequired,
    route: _propTypes2.default.object.isRequired,
    staticContext: _propTypes2.default.object
  })
};
Route.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};
exports.default = Route;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(23);
var invariant = __webpack_require__(24);
var warning = __webpack_require__(51);
var assign = __webpack_require__(183);

var ReactPropTypesSecret = __webpack_require__(25);
var checkPropTypes = __webpack_require__(184);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(24);
  var warning = __webpack_require__(51);
  var ReactPropTypesSecret = __webpack_require__(25);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(23);
var invariant = __webpack_require__(24);
var ReactPropTypesSecret = __webpack_require__(25);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(187)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Switch = __webpack_require__(189);

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Switch2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(21);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(50);

var _invariant2 = _interopRequireDefault(_invariant);

var _matchPath = __webpack_require__(26);

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for rendering the first <Route> that matches.
 */
var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    (0, _invariant2.default)(this.context.router, 'You should not use <Switch> outside a <Router>');
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    _react2.default.Children.forEach(children, function (element) {
      if (!_react2.default.isValidElement(element)) return;

      var _element$props = element.props,
          pathProp = _element$props.path,
          exact = _element$props.exact,
          strict = _element$props.strict,
          sensitive = _element$props.sensitive,
          from = _element$props.from;

      var path = pathProp || from;

      if (match == null) {
        child = element;
        match = path ? (0, _matchPath2.default)(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }) : route.match;
      }
    });

    return match ? _react2.default.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(_react2.default.Component);

Switch.contextTypes = {
  router: _propTypes2.default.shape({
    route: _propTypes2.default.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: _propTypes2.default.node,
  location: _propTypes2.default.object
};
exports.default = Switch;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _matchPath = __webpack_require__(26);

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _matchPath2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var SearchBar_1 = __webpack_require__(192);
exports.default = SearchBar_1.default;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var Icon_1 = __webpack_require__(13);
var SearchBar = /** @class */function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            var target = event.target;
            if (target && target.value) {
                _this.setState({
                    value: target.value
                });
                if (_this.props.onChange) {
                    _this.props.onChange(target.value);
                }
            }
        };
        _this.handleFocus = function () {
            _this.setState({
                focus: true
            });
            if (_this.props.onFocus) {
                _this.props.onFocus();
            }
        };
        _this.handleBlur = function () {
            _this.setState({
                focus: false
            });
            if (_this.props.onBlur) {
                _this.props.onBlur();
            }
        };
        _this.handleSubmit = function (event) {
            var target = event.target;
            if (event.keyCode === 13 && _this.props.onSubmit) {
                _this.props.onSubmit(target.value);
            }
        };
        _this.handleCancel = function () {
            _this.handleBlur();
            if (_this.props.onCancel) {
                _this.props.onCancel();
            }
        };
        var value = '',
            focus = false;
        if (props.defaultValue) {
            value = props.defaultValue;
        }
        if (props.autoFocus) {
            focus = props.autoFocus;
        }
        _this.state = {
            value: value,
            focus: focus
        };
        return _this;
    }
    SearchBar.prototype.componentWillReceiveProps = function (nextProps) {
        if ('value' in this.props && this.props.value !== nextProps.value) {
            this.setState({
                value: nextProps.value
            });
        }
    };
    SearchBar.prototype.render = function () {
        var _a = this.props,
            autoFocus = _a.autoFocus,
            cancelText = _a.cancelText,
            className = _a.className,
            disabled = _a.disabled,
            maxLength = _a.maxLength,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["autoFocus", "cancelText", "className", "disabled", "maxLength", "prefixCls"]);
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-active"] = this.state.focus, _b), className);
        var clearClass = classNames(prefixCls + "-clear", (_c = {}, _c[prefixCls + "-clear-show"] = !!(this.state.value && this.state.focus), _c));
        var otherProps = Utils_1.getOtherProperties(other, ['onCancel', 'onChange', 'onBlur', 'onFocus', 'onSubmit']);
        return React.createElement("div", __assign({ className: styleClass }, otherProps), React.createElement("a", { className: prefixCls + "-cancel", onClick: this.handleCancel }, cancelText), React.createElement("div", { className: prefixCls + "-input" }, React.createElement("label", { htmlFor: "SearchBar" }, React.createElement(Icon_1.default, { icon: "search" })), React.createElement("input", { autoFocus: autoFocus, type: "text", id: "SearchBar", onChange: this.handleChange, disabled: disabled, onKeyUp: this.handleSubmit, onFocus: this.handleFocus, onBlur: this.handleBlur, maxLength: maxLength, value: this.state.value, placeholder: this.props.placeholder }), React.createElement("a", { className: clearClass })));
        var _b, _c;
    };
    SearchBar.defaultProps = {
        autoFocus: false,
        cancelText: '取消',
        disabled: false,
        placeholder: '输入关键字...',
        prefixCls: 'bm-SearchBar'
    };
    return SearchBar;
}(React.PureComponent);
exports.default = SearchBar;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Segment_1 = __webpack_require__(194);
exports.default = Segment_1.default;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Segment = /** @class */function (_super) {
    __extends(Segment, _super);
    function Segment(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (index, item) {
            var disabled = _this.props.disabled;
            if (disabled) {
                return;
            }
            _this.setState({
                activeIndex: index
            });
            if (_this.props.onChange) {
                _this.props.onChange(index, item);
            }
        };
        var _a = props.activeIndex,
            activeIndex = _a === void 0 ? 0 : _a;
        _this.state = {
            activeIndex: activeIndex
        };
        return _this;
    }
    Segment.prototype.componentWillReceiveProps = function (nextProps) {
        if ('activeIndex' in nextProps && nextProps.activeIndex >= 0 && nextProps.activeIndex !== this.props.activeIndex) {
            this.setState({
                activeIndex: nextProps.activeIndex
            });
        }
    };
    Segment.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            className = _a.className,
            disabled = _a.disabled,
            prefixCls = _a.prefixCls,
            value = _a.value;
        var styleClass = classNames(prefixCls, className);
        var activeIndex = this.state.activeIndex;
        return React.createElement("div", { className: styleClass }, value.map(function (item, index) {
            var itemClass = classNames(prefixCls + "-item", (_a = {}, _a[prefixCls + "-item-selected"] = activeIndex === index, _a[prefixCls + "-item-disabled"] = disabled, _a));
            return React.createElement("div", { className: itemClass, onClick: _this.handleClick.bind(_this, index, item) }, item.toString());
            var _a;
        }));
    };
    Segment.defaultProps = {
        prefixCls: 'bm-Segment',
        value: []
    };
    return Segment;
}(React.PureComponent);
exports.default = Segment;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Sidebar_1 = __webpack_require__(196);
exports.default = Sidebar_1.default;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Sidebar = /** @class */function (_super) {
    __extends(Sidebar, _super);
    function Sidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            reveal: false
        };
        _this.toggleSidebar = function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }
        };
        return _this;
    }
    Sidebar.prototype.componentDidMount = function () {
        var reveal = this.props.reveal;
        this.setState({
            reveal: !!reveal
        });
    };
    Sidebar.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            reveal = _a.reveal,
            drawer = _a.drawer,
            dir = _a.dir,
            children = _a.children;
        var styleClass = classNames('Sidebar', {
            'Sidebar-open': reveal,
            'Sidebar-drawer': drawer
        }, "Sidebar-" + dir + "-reveal", className);
        return React.createElement("div", { className: styleClass }, React.createElement("div", { className: "Sidebar-overlay", onClick: this.toggleSidebar }), React.createElement("div", { className: "Sidebar-inner" }, children));
    };
    Sidebar.defaultProps = {
        dir: 'left',
        drawer: true,
        className: '',
        reveal: false
    };
    return Sidebar;
}(React.PureComponent);
exports.default = Sidebar;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Slider_1 = __webpack_require__(198);
exports.default = Slider_1.default;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var Slider = /** @class */function (_super) {
    __extends(Slider, _super);
    function Slider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isDragging: false,
            value: 0
        };
        _this.maxPercent = 100;
        _this.touch = Utils_1.getTouchEvent();
        _this.onTouchStart = function (event) {
            if (event.button || _this.props.disabled) {
                return;
            }
            var point = _this.getPoint(event);
            _this.startOffset = {
                pageX: point.pageX,
                pageY: point.pageY
            };
            _this.setState({
                isDragging: true
            });
            document.addEventListener(_this.touch.touchmove, _this.onTouchMove);
            document.addEventListener(_this.touch.touchend, _this.onTouchEnd);
        };
        _this.onTouchMove = function (event) {
            if (_this.state.isDragging) {
                var point = _this.getPoint(event);
                _this.getValue(event);
                _this.startOffset = {
                    pageX: point.pageX,
                    pageY: point.pageY
                };
            }
        };
        _this.onTouchEnd = function () {
            document.removeEventListener(_this.touch.touchmove, _this.onTouchMove);
            document.removeEventListener(_this.touch.touchend, _this.onTouchEnd);
            _this.setState({
                isDragging: false
            });
        };
        _this.getTrackRef = function (node) {
            if (node) {
                _this.track = node;
                _this.slider = node.parentNode;
                _this.thumb = node.nextElementSibling;
            }
        };
        return _this;
    }
    Slider.prototype.componentDidMount = function () {
        this.pageInit();
    };
    Slider.prototype.pageInit = function () {
        var _a = this.props,
            min = _a.min,
            max = _a.max,
            value = _a.value;
        var percent = (value - min) / (max - min);
        var current = Math.floor(percent * this.slider.offsetWidth);
        this.currentOffset = {
            x: 0,
            y: this.slider.offsetHeight - this.thumb.offsetHeight
        };
        if (!isNaN(current)) {
            this.setValue(current);
        }
    };
    Slider.prototype.getPoint = function (event) {
        event = event || window.event;
        var touchEvent = this.touch.mobile ? event.changedTouches[0] : event;
        return {
            pageX: touchEvent.pageX,
            pageY: touchEvent.pageY
        };
    };
    Slider.prototype.setValue = function (value) {
        var _a = this.props,
            max = _a.max,
            min = _a.min,
            step = _a.step,
            vertical = _a.vertical;
        var size = vertical ? this.slider.offsetHeight - this.thumb.offsetHeight / 2 : this.slider.offsetWidth - this.thumb.offsetWidth / 2;
        var offset = vertical ? this.currentOffset.y + value * step : this.currentOffset.x + value * step;
        if (offset >= size) {
            offset = size;
        } else if (offset < 0) {
            offset = 0;
        }
        var percent = offset / size * 100;
        var currentValue = Math.ceil((max - min) * percent / 100) + min;
        if (vertical) {
            this.thumb['style'].top = offset + 'px';
            this.track['style'].top = percent + '%';
        } else {
            this.thumb['style'].left = offset + 'px';
            this.track['style'].right = this.maxPercent - percent + '%';
        }
        this.currentOffset = {
            x: offset,
            y: offset
        };
        this.setState({
            value: currentValue
        });
        if (this.props.onChange) {
            this.props.onChange(currentValue);
        }
    };
    Slider.prototype.getValue = function (event) {
        var point = this.getPoint(event);
        this.setValue(this.props.vertical ? point.pageY - this.startOffset.pageY : point.pageX - this.startOffset.pageX);
    };
    Slider.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            end = _a.end,
            prefixCls = _a.prefixCls,
            disabled = _a.disabled,
            start = _a.start,
            vertical = _a.vertical,
            other = __rest(_a, ["className", "end", "prefixCls", "disabled", "start", "vertical"]);
        var isMobile = this.touch.mobile;
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-vertical"] = vertical, _b[prefixCls + "-disabled"] = disabled, _b), className);
        var otherProps = Utils_1.getOtherProperties(other, ['children', 'handleSize', 'onChange']);
        var activeBarClass = classNames(prefixCls + "-bar", prefixCls + "-bar-active");
        var knobClass = classNames((_c = {}, _c[prefixCls + "-knob"] = true, _c['active'] = this.state.isDragging, _c));
        return React.createElement("div", __assign({ className: styleClass }, otherProps), start ? React.createElement("div", { className: prefixCls + "-start" }, start) : null, React.createElement("div", { className: prefixCls + "-wrapper", onMouseDown: isMobile ? function () {} : this.onTouchStart, onTouchStart: isMobile ? this.onTouchStart : function () {} }, React.createElement("div", { className: prefixCls + "-bar" }), React.createElement("div", { className: activeBarClass, ref: this.getTrackRef }), React.createElement("div", { className: prefixCls + "-knob-handle" }, React.createElement("div", { className: knobClass }))), end ? React.createElement("div", { className: prefixCls + "-end" }, end) : null);
        var _b, _c;
    };
    Slider.defaultProps = {
        disabled: false,
        min: 0,
        max: 100,
        prefixCls: 'bm-Slider',
        step: 1,
        value: 0,
        vertical: false
    };
    return Slider;
}(React.PureComponent);
exports.default = Slider;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Swiper_1 = __webpack_require__(200);
exports.default = Swiper_1.default;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var Dom_1 = __webpack_require__(7);
var LoadImage_1 = __webpack_require__(201);
var Swiper = /** @class */function (_super) {
    __extends(Swiper, _super);
    function Swiper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeIndex: 0,
            height: 0,
            opacity: 1,
            x: 0,
            y: 0,
            width: 0
        };
        _this.touches = {};
        _this.isRunning = false;
        _this.imagesLoaded = 0;
        _this.centerOffset = 0;
        _this.observers = [];
        _this.slidePrev = function (disabled) {
            if (disabled === void 0) {
                disabled = true;
            }
            if (disabled) {
                return;
            }
            var activeIndex = _this.state.activeIndex;
            activeIndex--;
            _this.slideTo(activeIndex);
        };
        _this.slideNext = function (disabled) {
            if (disabled === void 0) {
                disabled = true;
            }
            if (disabled) {
                return;
            }
            var activeIndex = _this.state.activeIndex;
            activeIndex++;
            _this.slideTo(activeIndex);
        };
        _this.handleNavigation = function (disabled, next, event) {
            event.stopPropagation();
            if (disabled) {
                return;
            }
            if (next) {
                _this.slideNext(disabled);
            } else {
                _this.slidePrev(disabled);
            }
        };
        _this.swipeStart = function (event) {
            if (_this.props.touch && !_this.isRunning) {
                event.stopPropagation();
                var _a = _this.getPoint(event),
                    x = _a.x,
                    y = _a.y;
                _this.dragging = true;
                Dom_1.setTransitionDuration(_this.slider, 0);
                if (_this.props.autoplayDisableOnInteraction) {
                    _this.clearAutoplay();
                }
                _this.touches.startX = x;
                _this.touches.startY = y;
            }
        };
        _this.swipeMove = function (event) {
            event.stopPropagation();
            if (_this.dragging && !_this.isRunning) {
                var _a = _this.getPoint(event),
                    x = _a.x,
                    y = _a.y;
                var diffX = x - _this.touches.startX;
                var diffY = y - _this.touches.startY;
                var _b = _this.props,
                    effect = _b.effect,
                    spaceBetween = _b.spaceBetween;
                var _c = _this.state,
                    width = _c.width,
                    activeIndex = _c.activeIndex,
                    height = _c.height;
                if (effect === 'slide') {
                    var maxTranslate_1 = _this.isHorizontal() ? width / 2 : height / 2;
                    var minTranslate = 20;
                    var diff = _this.isHorizontal ? diffX : diffY;
                    var position = diff / width * (maxTranslate_1 - minTranslate);
                    var translate_1 = _this.isHorizontal() ? -(width + spaceBetween) * activeIndex + position : -(height + spaceBetween) * activeIndex + position;
                    var setPosition = function setPosition(size) {
                        var collapseEnd = size * (_this.count - 1) + maxTranslate_1;
                        if (!_this.props.loop) {
                            if (translate_1 > maxTranslate_1) {
                                translate_1 = maxTranslate_1;
                            } else if (Math.abs(translate_1) > collapseEnd) {
                                translate_1 = -collapseEnd;
                            }
                        }
                    };
                    if (_this.isHorizontal()) {
                        setPosition(width);
                        _this.setState({
                            x: translate_1 + _this.centerOffset
                        });
                    } else {
                        setPosition(height);
                        _this.setState({
                            y: translate_1
                        });
                    }
                } else {
                    var opacity = _this.isHorizontal() ? Math.abs(diffX) / width : Math.abs(diffY) / height;
                    _this.setState({
                        opacity: opacity
                    });
                }
                _this.touches.diffX = diffX;
                _this.touches.diffY = diffY;
                _this.touches.currentX = x;
                _this.touches.currentY = y;
            }
        };
        _this.swipeEnd = function (event) {
            event.stopPropagation();
            if (_this.dragging && !_this.isRunning) {
                var _a = _this.state,
                    activeIndex_1 = _a.activeIndex,
                    width = _a.width,
                    height = _a.height;
                var loop_1 = _this.props.loop;
                var _b = _this.touches,
                    diffX = _b.diffX,
                    diffY = _b.diffY;
                var diffWidth = width / 5;
                var diffHeight = height / 5;
                var getActiveIndex = function getActiveIndex(diff, dist) {
                    if (Math.abs(diff) > dist) {
                        if (diff < 0 && (loop_1 || activeIndex_1 !== _this.count - 1)) {
                            activeIndex_1++;
                        } else if (diff > 0 && (loop_1 || activeIndex_1 !== 0)) {
                            activeIndex_1--;
                        }
                    }
                };
                if (_this.isHorizontal()) {
                    getActiveIndex(diffX, diffWidth);
                } else {
                    getActiveIndex(diffY, diffHeight);
                }
                if (_this.props.on && _this.props.on.slideChange) {
                    _this.props.on['slideChange'](activeIndex_1, _this);
                }
                if (_this.props.effect === 'fade') {
                    if (activeIndex_1 < 0) {
                        activeIndex_1 = _this.count - 1;
                    } else if (activeIndex_1 >= _this.count) {
                        activeIndex_1 = 0;
                    }
                }
                _this.slideTo(activeIndex_1);
            }
            _this.dragging = false;
        };
        _this.getWrapperRef = function (node) {
            if (!_this.wrapper && node) {
                var initialSlide_1 = _this.props.initialSlide;
                _this.wrapper = node;
                _this.slider = node.firstElementChild;
                _this.reset(function () {
                    _this.slideTo(_this.getCurrentSlide(initialSlide_1), 0);
                });
                if (_this.props.autoplay) {
                    _this.observer();
                }
            }
        };
        _this.onWindowResized = function () {
            var activeIndex = _this.state.activeIndex;
            _this.reset(function () {
                _this.slideTo(_this.getCurrentSlide(activeIndex), 0);
            });
        };
        _this.onTransitionEnd = function () {
            var activeIndex = _this.state.activeIndex;
            if (activeIndex < 0) {
                activeIndex = _this.count - 1;
            } else if (activeIndex >= _this.count) {
                activeIndex = 0;
            }
            if (_this.props.on && _this.props.on.transitionEnd) {
                _this.props.on['transitionEnd'](activeIndex, _this);
            }
            _this.slideTo(activeIndex, 0);
            if (_this.props.autoplay && !_this.props.autoplayDisableOnInteraction) {
                _this.startAutoplay();
            }
            _this.isRunning = false;
        };
        _this.observer = function () {
            if (_this.props.observe) {
                // 创建观察者对象
                _this.observers.push(_this.attach(_this.wrapper.parentNode));
            }
            if (_this.props.observeParents) {
                var containerParents = Dom_1.parents(_this.wrapper);
                for (var i = 0; i < containerParents.length; i += 1) {
                    _this.observers.push(_this.attach(containerParents[i]));
                }
            }
        };
        _this.isMobile = 'ontouchstart' in document;
        return _this;
    }
    Swiper.prototype.componentWillMount = function () {
        var _this = this;
        if (this.props.on && this.props.on.init) {
            this.props.on['init']();
        }
        if (this.props.autoplay) {
            this.startAutoplay();
        }
        if (this.props.updateOnImagesReady) {
            LoadImage_1.preloadImages(this.wrapper, this.imagesLoaded, function () {
                if (_this.props.on && _this.props.on.imagesReady) {
                    _this.props.on['imagesReady']();
                }
            }, function (imagesLoaded) {
                _this.imagesLoaded = imagesLoaded;
            });
        }
    };
    Swiper.prototype.componentDidMount = function () {
        if (window) {
            Dom_1.addEventListener(window, 'resize', this.onWindowResized);
        }
    };
    Swiper.prototype.componentWillReceiveProps = function (nextProps) {
        if ('activeIndex' in nextProps && this.props.activeIndex !== nextProps.activeIndex) {
            this.slideTo(nextProps.activeIndex);
        }
    };
    Swiper.prototype.componentWillUnmount = function () {
        this.wrapper = null;
        this.slider = null;
        this.touches = null;
        this.clearAutoplay();
        if (this.observers.length) {
            for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                var observer = _a[_i];
                observer.disconnect();
            }
        }
        Dom_1.removeEventListener(window, 'resize', this.onWindowResized);
    };
    Swiper.prototype.isHorizontal = function () {
        return this.props.direction === 'horizontal';
    };
    Swiper.prototype.getCurrentSlide = function (slide) {
        var index = slide;
        if (index < 0) {
            index = 0;
        } else {
            index = index % this.count;
        }
        return index;
    };
    Swiper.prototype.slideTo = function (index, speed) {
        var _this = this;
        if (speed === void 0) {
            speed = this.props.speed;
        }
        this.isRunning = true;
        var _a = this.state,
            width = _a.width,
            height = _a.height;
        var _b = this.props,
            effect = _b.effect,
            loop = _b.loop,
            spaceBetween = _b.spaceBetween;
        var styles;
        if (!loop) {
            index = this.getCurrentSlide(index);
        }
        Dom_1.setTransitionDuration(this.slider, speed);
        var activeIndex = index;
        if (effect === 'fade') {
            if (activeIndex < 0) {
                activeIndex = this.count - 1;
            } else if (activeIndex >= this.count) {
                activeIndex = 0;
            }
        }
        if (this.isHorizontal()) {
            styles = {
                x: -(width + spaceBetween) * activeIndex + this.centerOffset,
                activeIndex: activeIndex,
                opacity: 1
            };
        } else {
            styles = {
                y: -(height + spaceBetween) * activeIndex,
                activeIndex: activeIndex,
                opacity: 1
            };
        }
        if (this.props.on && this.props.on.transitionStart) {
            this.props.on['transitionStart'](index, this);
        }
        this.setState(styles, function () {
            if (!speed) {
                _this.isRunning = false;
            }
        });
    };
    Swiper.prototype.getPoint = function (e) {
        var touchEvent = this.isMobile ? e.changedTouches[0] : e;
        return {
            x: touchEvent.pageX || touchEvent.clientX,
            y: touchEvent.pageY || touchEvent.clientY
        };
    };
    Swiper.prototype.getBulletItem = function (bullets) {
        var _this = this;
        var _a = this.props,
            pagination = _a.pagination,
            prefixCls = _a.prefixCls;
        return bullets.map(function (v) {
            if (typeof pagination === 'function') {
                return pagination(v);
            }
            var styleClass = classNames(prefixCls + "-pagination-bullet", (_a = {}, _a[prefixCls + "-pagination-bullet-active"] = _this.state.activeIndex === v, _a[prefixCls + "-pagination-clickable"] = _this.props.paginationClickable, _a));
            var event = {};
            if (_this.props.paginationClickable) {
                event = {
                    onMouseDown: !_this.isMobile ? _this.paginationClick.bind(_this, v) : null,
                    onTouchStart: _this.isMobile ? _this.paginationClick.bind(_this, v) : null
                };
            }
            return React.createElement("div", __assign({ key: v }, event, { className: styleClass }));
            var _a;
        });
    };
    Swiper.prototype.getNavigation = function () {
        var nav = this.props.navigation;
        var _a = this.props,
            loop = _a.loop,
            prefixCls = _a.prefixCls;
        var activeIndex = this.state.activeIndex;
        var toPrev = activeIndex <= 0 && !loop;
        var toNext = activeIndex >= this.count - 1 && !loop;
        var prevClass = classNames(prefixCls + "-prev", (_b = {}, _b[prefixCls + "-disabled"] = toPrev, _b));
        var nextClass = classNames(prefixCls + "-next", (_c = {}, _c[prefixCls + "-disabled"] = toNext, _c));
        var prevEvent = {
            onMouseDown: !this.isMobile ? this.handleNavigation.bind(this, toPrev, false) : null,
            onTouchStart: this.isMobile ? this.handleNavigation.bind(this, toPrev, false) : null
        };
        var nextEvent = {
            onMouseDown: !this.isMobile ? this.handleNavigation.bind(this, toNext, true) : null,
            onTouchStart: this.isMobile ? this.handleNavigation.bind(this, toNext, true) : null
        };
        var prevEl = React.createElement("div", __assign({ key: "prev", className: prevClass }, prevEvent), nav.prevEl);
        var nextEl = React.createElement("div", __assign({ key: "next", className: nextClass }, nextEvent), nav.nextEl);
        return [prevEl, nextEl];
        var _b, _c;
    };
    Swiper.prototype.paginationClick = function (index) {
        if (this.props.autoplayDisableOnInteraction) {
            this.clearAutoplay();
        }
        this.slideTo(index);
    };
    Swiper.prototype.updateSize = function (size, slideSize) {
        if (size) {
            if (isNaN(Number(size))) {
                if (size.indexOf('%')) {
                    slideSize *= size / 100;
                } else {
                    slideSize = parseFloat(size);
                }
            } else {
                if (size < 1) {
                    slideSize *= size;
                } else {
                    slideSize = size;
                }
            }
        }
        return slideSize;
    };
    Swiper.prototype.reset = function (cb) {
        if (!this.slider.firstElementChild) {
            return;
        }
        var height = this.slider.firstElementChild.offsetHeight;
        var slideWidth = this.props.slideWidth;
        var slideHeight = this.props.slideHeight;
        var width = this.wrapper.offsetWidth;
        if (this.props.centerMode) {
            this.centerOffset = Math.round(width * (1 - slideWidth) / 2);
        }
        this.setState({
            width: this.updateSize(slideWidth, width),
            height: this.updateSize(slideHeight, height)
        }, function () {
            if (cb) {
                cb();
            }
        });
    };
    Swiper.prototype.startAutoplay = function () {
        var _this = this;
        if (this.autoPlayTimer) {
            return false;
        }
        this.autoPlayTimer = setInterval(function () {
            Dom_1.setTransitionDuration(_this.slider, _this.props.speed);
            _this.slideNext(false);
        }, this.props.delay);
    };
    Swiper.prototype.clearAutoplay = function () {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
            this.autoPlayTimer = null;
        }
    };
    Swiper.prototype.attach = function (target) {
        var _this = this;
        var MutationObserver = window['MutationObserver'] || window['WebKitMutationObserver'] || window['MozMutationObserver'];
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function () {
                _this.reset();
            });
        });
        // 配置观察选项:
        var config = { attributes: true, childList: true, characterData: true };
        // 传入目标节点和观察选项
        observer.observe(target, config);
        return observer;
    };
    Swiper.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            className = _a.className,
            childrenProps = _a.children,
            direction = _a.direction,
            easing = _a.easing,
            effect = _a.effect,
            loop = _a.loop,
            navigation = _a.navigation,
            pagination = _a.pagination,
            prefixCls = _a.prefixCls,
            spaceBetween = _a.spaceBetween,
            speed = _a.speed,
            other = __rest(_a, ["className", "children", "direction", "easing", "effect", "loop", "navigation", "pagination", "prefixCls", "spaceBetween", "speed"]);
        var horizontal = this.isHorizontal();
        var styleClass = classNames(prefixCls, className, prefixCls + "-" + direction);
        var bullets = [];
        var _b = this.state,
            activeIndex = _b.activeIndex,
            width = _b.width,
            height = _b.height,
            x = _b.x,
            y = _b.y;
        this.count = React.Children.count(childrenProps);
        var isFade = effect === 'fade';
        var children = React.Children.map(childrenProps, function (child, index) {
            if (!React.isValidElement(child)) {
                return;
            }
            var opacity = 0;
            var left = horizontal ? index * width : 0,
                top = !horizontal ? index * height : 0;
            var _a = _this.touches,
                diffX = _a.diffX,
                diffY = _a.diffY,
                styles = {};
            if (!isFade) {
                if (loop && _this.count > 2) {
                    if (_this.count <= activeIndex + 1 && index === 0) {
                        horizontal ? left = (width + spaceBetween) * _this.count : top = height * _this.count;
                        styles['transform'] = "translate3d(" + left + "px, " + top + "px, 0)";
                        styles['WebkitTransform'] = "translate3d(" + left + "px, " + top + "px, 0)";
                    } else if (activeIndex <= 0 && _this.count === index + 1) {
                        horizontal ? left = -(width + spaceBetween) * _this.count : top = -height * _this.count;
                        styles['transform'] = "translate3d(" + left + "px, " + top + "px, 0)";
                        styles['WebkitTransform'] = "translate3d(" + left + "px, " + top + "px, 0)";
                    }
                }
                opacity = 1;
            } else {
                styles['transform'] = "translate3d(-" + left + "px, -" + top + "px, 0)";
                styles['WebkitTransform'] = "translate3d(-" + left + "px, -" + top + "px, 0)";
                if (_this.dragging) {
                    var diff = horizontal ? diffX : diffY;
                    if (loop && (activeIndex <= 0 && diff > 0 && _this.count === index + 1 || _this.count >= activeIndex + 1 && diff < 0 && index === 0)) {
                        opacity = _this.state.opacity;
                    }
                    if (diff > 0 && activeIndex > 0 && activeIndex < _this.count && activeIndex - 1 === index) {
                        opacity = _this.state.opacity;
                    }
                    if (diff < 0 && activeIndex >= 0 && activeIndex < _this.count - 1 && activeIndex + 1 === index) {
                        opacity = _this.state.opacity;
                    }
                }
                if (index === activeIndex) {
                    opacity = 1;
                }
            }
            if (isFade) {
                var duration = speed;
                if (_this.dragging) {
                    duration = 0;
                }
                styles['transition'] = 'opacity ' + duration + 'ms ' + easing;
                styles['WebkitTransition'] = 'opacity ' + duration + 'ms ' + easing;
            }
            var styleClass = classNames(prefixCls + "-slide", (_b = {}, _b[prefixCls + "-slide-active"] = activeIndex === index, _b));
            if (!isFade && spaceBetween > 0) {
                styles['marginRight'] = spaceBetween;
            }
            styles['width'] = width;
            styles['opacity'] = opacity;
            bullets.push(index);
            return React.cloneElement(React.createElement("div", { className: styleClass, key: index, style: styles }, child), {});
            var _b;
        });
        if (isFade) {
            x = y = 0;
        }
        var otherProps = Utils_1.getOtherProperties(other, ['activeIndex', 'autoplayDisableOnInteraction', 'autoplay', 'centerMode', 'delay', 'initialSlide', 'observeParents', 'observe', 'paginationClickable', 'slideWidth', 'touchRatio', 'touch']);
        var styles = isFade ? {} : {
            transform: horizontal ? "translate3d(" + x + "px, 0, 0)" : "translate3d(0, " + y + "px, 0)",
            WebkitTransform: horizontal ? "translate3d(" + x + "px, 0, 0)" : "translate3d(0, " + y + "px, 0)",
            msTransform: horizontal ? "translate3d(" + x + "px, 0, 0)" : "translate3d(0, " + y + "px, 0)",
            WebkitTransition: '-webkit-transform ' + speed + 'ms ' + easing,
            transition: 'transform ' + speed + 'ms ' + easing
        };
        return React.createElement("div", __assign({ className: styleClass }, otherProps), React.createElement("div", { className: prefixCls + "-wrapper", ref: this.getWrapperRef, style: { height: horizontal ? '100%' : height }, onMouseDown: this.isMobile ? function () {} : this.swipeStart, onMouseMove: this.isMobile ? function () {} : this.swipeMove, onMouseUp: this.isMobile ? function () {} : this.swipeEnd, onMouseLeave: this.isMobile ? function () {} : this.swipeEnd, onTouchStart: this.isMobile ? this.swipeStart : function () {}, onTouchMove: this.isMobile ? this.swipeMove : function () {}, onTouchEnd: this.isMobile ? this.swipeEnd : function () {} }, React.createElement("div", { className: prefixCls + "-list", style: styles, onTransitionEnd: this.onTransitionEnd }, children)), pagination ? React.createElement("div", { className: prefixCls + "-pagination" }, React.createElement("div", { className: prefixCls + "-pagination-bullets" }, this.getBulletItem(bullets))) : null, navigation ? this.getNavigation() : null);
    };
    Swiper.defaultProps = {
        activeIndex: 0,
        autoplay: false,
        autoplayDisableOnInteraction: false,
        centerMode: false,
        direction: 'horizontal',
        easing: 'ease',
        effect: 'slide',
        initialSlide: 0,
        loop: false,
        observe: false,
        observeParents: false,
        on: {},
        pagination: true,
        paginationClickable: false,
        prefixCls: 'bm-Swiper',
        spaceBetween: 0,
        speed: 300,
        delay: 3000,
        touch: true
    };
    return Swiper;
}(React.PureComponent);
exports.default = Swiper;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function loadImage(imgElement, src, srcset, checkForComplete, callback) {
    var image;
    function onReady() {
        if (callback) callback();
    }
    if (!imgElement.complete || !checkForComplete) {
        if (src) {
            image = new Image();
            image.onload = onReady;
            image.onerror = onReady;
            if (srcset) {
                image.srcset = srcset;
            }
            if (src) {
                image.src = src;
            }
        } else {
            onReady();
        }
    } else {
        onReady();
    }
}
exports.loadImage = loadImage;
function preloadImages(container, imagesLoaded, callback, onLoad) {
    var imagesToLoad = container.find('img');
    function _onReady() {
        if (imagesLoaded !== undefined) {
            imagesLoaded++;
            if (onLoad) {
                onLoad(imagesLoaded);
            }
        }
        ;
        if (imagesLoaded === imagesToLoad.length) {
            callback();
        }
    }
    for (var i = 0; i < imagesToLoad.length; i++) {
        loadImage(imagesToLoad[i], imagesToLoad[i].currentSrc || imagesToLoad[i].getAttribute('src'), imagesToLoad[i].srcset || imagesToLoad[i].getAttribute('srcset'), true, _onReady);
    }
}
exports.preloadImages = preloadImages;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Switch_1 = __webpack_require__(203);
exports.default = Switch_1.default;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Switch = /** @class */function (_super) {
    __extends(Switch, _super);
    function Switch(props) {
        var _this = _super.call(this, props) || this;
        _this.handleInputChange = function (event) {
            var checked = event.target.checked;
            _this.setState({
                checked: checked
            });
            if (_this.props.onChange) {
                _this.props.onChange(checked);
            }
        };
        var checked = false;
        if (props.defaultChecked) {
            checked = true;
        }
        _this.state = {
            checked: checked
        };
        return _this;
    }
    Switch.prototype.componentWillReceiveProps = function (nextProps) {
        if ('checked' in nextProps && this.props.checked !== nextProps.checked) {
            this.setState({
                checked: nextProps.checked
            });
        }
    };
    Switch.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            className = _a.className,
            disabled = _a.disabled,
            inputType = _a.inputType;
        var styleClass = classNames('Switch', inputType && "Switch-" + inputType, className);
        var checked = this.state.checked;
        return React.createElement("label", { className: styleClass }, React.createElement("input", { type: "checkbox", disabled: disabled, checked: checked, onChange: this.handleInputChange }), React.createElement("div", { className: "Switch-inner" }, children), React.createElement("div", { className: "Switch-media" }, React.createElement("span", { className: "Switch-label" })));
    };
    Switch.defaultProps = {
        defaultChecked: false,
        inputType: 2
    };
    return Switch;
}(React.PureComponent);
exports.default = Switch;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Table_1 = __webpack_require__(205);
exports.default = Table_1.default;
var TableColumn_1 = __webpack_require__(206);
exports.TableColumn = TableColumn_1.default;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Utils_1 = __webpack_require__(2);
var Icon_1 = __webpack_require__(44);
var Checkbox_1 = __webpack_require__(42);
var Table = /** @class */function (_super) {
    __extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeIndex: 0,
            currentValue: [],
            selectedItem: [],
            value: []
        };
        _this.fieldProps = [];
        _this.sort = 'desc';
        _this.changePage = function () {
            var value = _this.state.value.slice();
            var row = _this.props.row;
            if (_this.props.row) {
                value = value.slice(_this.state.activeIndex * row, (_this.state.activeIndex + 1) * row);
            }
            _this.setState({
                currentValue: value
            });
        };
        _this.filterValue = function (field) {
            var currentValue = _this.state.currentValue.slice();
            _this.sort = _this.sort === 'desc' ? 'asc' : 'desc'; // desc 2 1; asc 1 2
            currentValue.sort(function (a, b) {
                var desc = _this.sort === 'desc';
                if (a[field] > b[field]) {
                    return desc ? 1 : -1;
                } else if (a[field] < b[field]) {
                    return desc ? -1 : 1;
                }
                return 0;
            });
            _this.setState({ currentValue: currentValue });
        };
        _this.handleHeaderClick = function (props) {
            if (props.sort) {
                _this.currentField = props.field;
                _this.filterValue(props.field);
            }
        };
        _this.drawRow = function (rowData, index) {
            return React.createElement("tr", { key: index, className: "Table-row" }, _this.props.selectionMode === 'multiple' ? React.createElement("td", { className: "Table-cell" }, _this.createCheckbox({ index: index, rowData: rowData })) : null, _this.fieldProps.map(function (props, i) {
                return React.createElement("td", { className: "Table-cell", key: "td-" + i }, function () {
                    if (typeof props.template === 'function') {
                        return props.template(rowData, props.field, index);
                    } else if (props.template) {
                        return props.template;
                    }
                    return rowData[props.field];
                }());
            }));
        };
        _this.handleChange = function (props, event) {
            var selectedItem = _this.state.selectedItem.slice();
            if (props.index === -1) {
                if (event.checked) {
                    selectedItem = _this.state.currentValue.slice();
                } else {
                    selectedItem = [];
                }
            } else {
                if (event.checked) {
                    selectedItem.push(props.rowData);
                } else {
                    var index_1 = 0;
                    selectedItem.forEach(function (data, i) {
                        if (data === props.rowData) {
                            index_1 = i;
                        }
                    });
                    selectedItem.splice(index_1, 1);
                }
            }
            _this.setState({
                selectedItem: selectedItem
            }, function () {
                if (_this.props.onSelect) {
                    _this.props.onSelect(selectedItem);
                }
            });
        };
        return _this;
    }
    Table.prototype.componentDidMount = function () {
        var _this = this;
        var value = this.props.value;
        if (value && value.length > 0) {
            this.setState({
                value: value
            }, function () {
                _this.changePage();
            });
        }
        if (this.props.activeIndex) {
            this.setState({
                activeIndex: this.props.activeIndex
            });
        }
    };
    Table.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if ('value' in nextProps.value && this.props.value !== nextProps.value) {
            this.setState({
                value: this.props.value
            }, function () {
                _this.changePage();
            });
        }
    };
    Table.prototype.createCheckbox = function (props) {
        if (props === void 0) {
            props = { checked: false };
        }
        var isSelected = false;
        var selectedItem = this.state.selectedItem;
        var currentValue = this.state.currentValue;
        if (props.index !== -1) {
            if (selectedItem.indexOf(props.rowData) !== -1) {
                isSelected = true;
            }
        } else if (selectedItem.length === currentValue.length) {
            isSelected = true;
        }
        return React.createElement(Checkbox_1.default, { checked: isSelected, onChange: this.handleChange.bind(this, props) });
    };
    Table.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            className = _a.className,
            childrenProps = _a.children,
            hover = _a.hover,
            prefixCls = _a.prefixCls,
            selectionMode = _a.selectionMode,
            striped = _a.striped,
            other = __rest(_a, ["className", "children", "hover", "prefixCls", "selectionMode", "striped"]);
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-striped"] = striped, _b[prefixCls + "-hover"] = hover, _b), className);
        var thead = [];
        if (selectionMode === 'multiple') {
            thead.push(React.createElement("th", { key: "total-checkbox", className: prefixCls + "-cell" }, this.createCheckbox({
                index: -1
            })));
        }
        this.fieldProps = [];
        React.Children.forEach(childrenProps, function (child, index) {
            if (!React.isValidElement(child)) {
                return null;
            }
            var type = child.type;
            var fnName = type.fnName;
            var otherProps = Utils_1.getOtherProperties(child.props, []);
            switch (fnName) {
                case 'TableColumn':
                    var field = child.props.field;
                    var headClass = classNames(prefixCls + "-head", (_a = {}, _a[prefixCls + "-head-active"] = _this.currentField === field, _a));
                    var sortClass = _this.sort === 'asc' && field === _this.currentField ? prefixCls + "-head-sort" : '';
                    var th = React.createElement("th", { key: index, onClick: _this.handleHeaderClick.bind(_this, otherProps) }, React.createElement("div", { className: headClass }, otherProps.sort ? React.createElement(Icon_1.default, { className: sortClass, icon: "arrow_upward", size: "1x" }) : null, otherProps.header));
                    _this.fieldProps.push(child.props);
                    var column = React.cloneElement(th);
                    thead.push(column);
                    break;
            }
            var _a;
        });
        var otherProps = Utils_1.getOtherProperties(other, ['border', 'selectionMode', 'pagination', 'row', 'selectionMode', 'value']);
        return React.createElement("div", __assign({ className: styleClass }, otherProps), React.createElement("table", { className: "" + prefixCls }, React.createElement("thead", null, React.createElement("tr", null, thead)), React.createElement("tbody", null, this.state.currentValue.map(function (rowData, index) {
            return _this.drawRow(rowData, index);
        }))));
        var _b;
    };
    Table.defaultProps = {
        prefixCls: 'bm-Table',
        value: []
    };
    return Table;
}(React.PureComponent);
exports.default = Table;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var TableColumn = /** @class */function (_super) {
    __extends(TableColumn, _super);
    function TableColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableColumn.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["className", "children", "prefixCls"]);
        var styleClass = classNames(prefixCls, className);
        return React.createElement("div", __assign({ className: styleClass }, other), children);
    };
    TableColumn.fnName = 'TableColumn';
    TableColumn.defaultProps = {
        prefixCls: 'bm-TableColumn'
    };
    return TableColumn;
}(React.PureComponent);
exports.default = TableColumn;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Tabs_1 = __webpack_require__(208);
exports.default = Tabs_1.default;
var Tab_1 = __webpack_require__(209);
exports.Tab = Tab_1.default;
var TabContainer_1 = __webpack_require__(210);
exports.TabContainer = TabContainer_1.default;
var TabsGroup_1 = __webpack_require__(211);
exports.TabsGroup = TabsGroup_1.default;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Dom_1 = __webpack_require__(7);
var Tabs = /** @class */function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeIndex: 0,
            x: 0,
            y: 0
        };
        _this.touches = {};
        _this.handleChange = function (activeIndex) {
            _this.setState({
                activeIndex: activeIndex
            });
            if (_this.props.onChange) {
                _this.props.onChange(activeIndex);
            }
        };
        _this.getLineOffset = function () {
            var index = _this.state.activeIndex;
            var width = 0,
                height = 0,
                left = 0,
                top = 0;
            if (_this.tabNode) {
                var tabs = _this.tabNode.querySelectorAll('.bm-Tab');
                for (var i = 0; i < tabs.length; i++) {
                    if (i < index) {
                        left += tabs[i].offsetWidth;
                        top += tabs[i].offsetHeight;
                    }
                    if (i === index) {
                        width = tabs[i].offsetWidth;
                        height = tabs[i].offsetHeight;
                    }
                }
            }
            return {
                width: width, left: left, height: height, top: top
            };
        };
        _this.getRef = function (node) {
            if (!node) {
                return;
            }
            _this.tabNode = node;
            if (_this.props.activeIndex > 0) {
                _this.setState({
                    activeIndex: _this.props.activeIndex
                });
            }
        };
        _this.swipeStart = function (event) {
            var wrapperNode = _this.tabNode.firstElementChild;
            _this.touches.moveWith = wrapperNode.offsetWidth - _this.tabNode.offsetWidth;
            _this.touches.moveHeight = wrapperNode.offsetHeight - _this.tabNode.offsetHeight;
            if (_this.props.scrollable && _this.touches.moveWith > 0) {
                Dom_1.setTransitionDuration(_this.tabNode.firstElementChild, 0);
                event.stopPropagation();
                var _a = _this.getPoint(event),
                    x = _a.x,
                    y = _a.y;
                _this.dragging = true;
                _this.touches.startX = x;
                _this.touches.startY = y;
                document.addEventListener(_this.isMobile ? 'touchmove' : 'mousemove', _this.swipeMove);
                document.addEventListener(_this.isMobile ? 'touchend' : 'mouseup', _this.swipeEnd);
            }
        };
        _this.swipeMove = function (event) {
            event.stopPropagation();
            if (_this.dragging) {
                var _a = _this.getPoint(event),
                    x = _a.x,
                    y = _a.y;
                var diffX = x - _this.touches.startX + _this.state.x;
                var diffY = y - _this.touches.startY + _this.state.y;
                _this.setState({
                    x: Math.max(Math.min(0, diffX), -_this.touches.moveWith),
                    y: Math.max(Math.min(0, diffY), -_this.touches.moveHeight)
                });
                _this.touches.startX = x;
                _this.touches.startY = y;
            }
        };
        _this.swipeEnd = function (event) {
            event.stopPropagation();
            _this.dragging = false;
            document.removeEventListener(_this.isMobile ? 'touchmove' : 'mousemove', _this.swipeMove);
            document.removeEventListener(_this.isMobile ? 'touchend' : 'mouseup', _this.swipeEnd);
        };
        return _this;
    }
    Tabs.prototype.componentDidMount = function () {
        this.isMobile = 'ontouchstart' in document;
        if (this.tabNode) {
            this.forceUpdate();
        }
    };
    Tabs.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if ('activeIndex' in nextProps && this.props.activeIndex !== nextProps.activeIndex) {
            this.setState({
                activeIndex: nextProps.activeIndex
            }, function () {
                if (nextProps.centerMode) {
                    var _a = _this.getLineOffset(),
                        width = _a.width,
                        height = _a.height,
                        left = _a.left,
                        top_1 = _a.top;
                    var wrapperNode = _this.tabNode.firstElementChild;
                    Dom_1.setTransitionDuration(wrapperNode, 300);
                    if (nextProps.position === 'left' || nextProps.position === 'right') {
                        var navHeight = _this.tabNode.offsetHeight;
                        var wrapperHeight = wrapperNode.offsetHeight;
                        var offsetY = top_1 + height / 2;
                        var diffHeight = offsetY - navHeight / 2;
                        if (diffHeight > 0) {
                            if (wrapperHeight - top_1 - height <= navHeight / 2) {
                                diffHeight = wrapperHeight - navHeight;
                            }
                            _this.setState({
                                y: -diffHeight
                            });
                        }
                    } else {
                        var navWidth = _this.tabNode.offsetWidth;
                        var wrapperWidth = wrapperNode.offsetWidth;
                        var offsetX = left + width / 2;
                        var diffWidth = offsetX - navWidth / 2;
                        if (diffWidth > 0) {
                            if (wrapperWidth - left - width <= navWidth / 2) {
                                diffWidth = wrapperWidth - navWidth;
                            }
                        } else {
                            diffWidth = 0;
                        }
                        _this.setState({
                            x: -diffWidth
                        });
                    }
                }
            });
        }
    };
    Tabs.prototype.componentWillUnmount = function () {
        document.removeEventListener(this.isMobile ? 'touchmove' : 'mousemove', this.swipeMove);
        document.removeEventListener(this.isMobile ? 'touchend' : 'mouseup', this.swipeEnd);
    };
    Tabs.prototype.getPoint = function (e) {
        var touchEvent = this.isMobile ? e.changedTouches[0] : e;
        return {
            x: touchEvent.pageX || touchEvent.clientX,
            y: touchEvent.pageY || touchEvent.clientY
        };
    };
    Tabs.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            childrenProp = _a.children,
            className = _a.className,
            prefixCls = _a.prefixCls,
            position = _a.position;
        var styleClass = classNames(prefixCls, prefixCls + "-" + position, className);
        var childIndex = -1;
        var children = React.Children.map(childrenProp, function (child) {
            if (!React.isValidElement(child)) {
                return null;
            }
            childIndex += 1;
            var props = __assign({}, child.props);
            return React.cloneElement(child, {
                index: childIndex,
                disabled: props.disabled,
                onChange: _this.handleChange,
                activeIndex: _this.state.activeIndex
            });
        });
        var wrapperStyle = {
            transform: "translate3d(" + this.state.x + "px, 0, 0)"
        };
        var lineRect = this.getLineOffset();
        var lineStyle;
        if (position === 'left' || position === 'right') {
            lineStyle = {
                height: lineRect.height,
                top: lineRect.top
            };
        } else {
            lineStyle = {
                width: lineRect.width,
                left: lineRect.left
            };
        }
        return React.createElement("div", { className: styleClass }, React.createElement("div", { className: prefixCls + "-nav", ref: this.getRef, onMouseDown: this.isMobile ? function () {} : this.swipeStart, onTouchStart: this.isMobile ? this.swipeStart : function () {} }, React.createElement("div", { className: prefixCls + "-nav-wrapper", style: wrapperStyle }, children, React.createElement("div", { className: prefixCls + "-indicator", style: lineStyle }))));
    };
    Tabs.fnName = 'Tabs';
    Tabs.defaultProps = {
        activeIndex: 0,
        prefixCls: 'bm-Tabs',
        scrollable: false,
        position: 'top'
    };
    return Tabs;
}(React.PureComponent);
exports.default = Tabs;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Tab = /** @class */function (_super) {
    __extends(Tab, _super);
    function Tab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function () {
            if (!_this.props.disabled && _this.props.onChange) {
                _this.props.onChange(_this.props.index);
            }
        };
        return _this;
    }
    Tab.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            className = _a.className,
            disabled = _a.disabled,
            activeIndex = _a.activeIndex,
            index = _a.index,
            prefixCls = _a.prefixCls;
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-active"] = activeIndex === index, _b[prefixCls + "-disabled"] = disabled, _b), className);
        return React.createElement("div", { className: styleClass, onClick: this.handleChange }, React.createElement("span", { className: prefixCls + "-inner" }, children));
        var _b;
    };
    Tab.defaultProps = {
        disabled: false,
        prefixCls: 'bm-Tab'
    };
    return Tab;
}(React.PureComponent);
exports.default = Tab;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var TabContainer = /** @class */function (_super) {
    __extends(TabContainer, _super);
    function TabContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeIndex: 0
        };
        return _this;
    }
    TabContainer.prototype.componentDidMount = function () {
        var activeIndex = this.props.activeIndex;
        if (activeIndex > 0) {
            this.setState({ activeIndex: activeIndex });
        }
    };
    TabContainer.prototype.componentWillReceiveProps = function (nextProps) {
        if ('activeIndex' in nextProps && this.props.activeIndex !== nextProps.activeIndex) {
            this.setState({
                activeIndex: nextProps.activeIndex
            });
        }
    };
    TabContainer.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            className = _a.className,
            index = _a.index,
            activeIndex = _a.activeIndex,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["children", "className", "index", "activeIndex", "prefixCls"]);
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-active"] = index === activeIndex, _b), className);
        return React.createElement("div", __assign({ className: styleClass }, other), children);
        var _b;
    };
    TabContainer.fnName = 'TabContainer';
    TabContainer.defaultProps = {
        prefixCls: 'bm-TabContainer'
    };
    return TabContainer;
}(React.PureComponent);
exports.default = TabContainer;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var TabsGroup = /** @class */function (_super) {
    __extends(TabsGroup, _super);
    function TabsGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeIndex: 0
        };
        _this.handleChange = function (activeIndex) {
            _this.setState({
                activeIndex: activeIndex
            });
            if (_this.props.onChange) {
                _this.props.onChange(activeIndex);
            }
        };
        _this.getRef = function (node) {
            _this.wrapper = node;
        };
        return _this;
    }
    TabsGroup.prototype.componentDidMount = function () {
        var activeIndex = this.props.activeIndex;
        if (activeIndex > 0) {
            this.setState({ activeIndex: activeIndex });
        }
    };
    TabsGroup.prototype.componentWillReceiveProps = function (nextProps) {
        if ('activeIndex' in nextProps && this.props.activeIndex !== nextProps.activeIndex) {
            this.setState({
                activeIndex: nextProps.activeIndex
            });
        }
    };
    TabsGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            animated = _a.animated,
            activeIndexProps = _a.activeIndex,
            centerMode = _a.centerMode,
            children = _a.children,
            className = _a.className,
            position = _a.position,
            prefixCls = _a.prefixCls,
            onChange = _a.onChange,
            scrollable = _a.scrollable,
            other = __rest(_a, ["animated", "activeIndex", "centerMode", "children", "className", "position", "prefixCls", "onChange", "scrollable"]);
        var styleClass = classNames(prefixCls, prefixCls + "-" + position, className);
        var activeIndex = this.state.activeIndex;
        var navChildren = [],
            containerChildren = [],
            otherChild = [];
        var num = 0;
        React.Children.forEach(children, function (child, index) {
            var type = child.type;
            var fnName = type.fnName;
            var props = __assign({}, child.props);
            props['key'] = index;
            if (fnName === 'Tabs') {
                props['activeIndex'] = activeIndex;
                props['onChange'] = _this.handleChange;
                props['position'] = position;
                props['centerMode'] = centerMode;
                props['scrollable'] = scrollable;
                navChildren.push(React.cloneElement(child, props));
            } else if (fnName === 'TabContainer') {
                props['index'] = num;
                props['activeIndex'] = activeIndex;
                containerChildren.push(React.cloneElement(child, props));
                num++;
            } else {
                otherChild.push(React.cloneElement(child, props));
            }
        });
        var x = this.wrapper ? -this.wrapper.offsetWidth * activeIndex : 0;
        var y = this.wrapper ? -this.wrapper.offsetHeight * activeIndex : 0;
        var horizontal = position === 'left' || position === 'right';
        var wrapperStyles = {
            transform: !horizontal ? "translate3d(" + x + "px, 0, 0)" : "translate3d(0, " + y + "px, 0)",
            WebkitTransform: !horizontal ? "translate3d(" + x + "px, 0, 0)" : "translate3d(0, " + y + "px, 0)",
            msTransform: !horizontal ? "translate3d(" + x + "px, 0, 0)" : "translate3d(0, " + y + "px, 0)",
            WebkitTransition: animated ? '-webkit-transform .3s cubic-bezier(0.35, 0, 0.25, 1)' : '',
            transition: animated ? 'transform .3s cubic-bezier(0.35, 0, 0.25, 1)' : ''
        };
        return React.createElement("div", __assign({ className: styleClass }, other), navChildren, React.createElement("div", { className: "bm-TabsContainerBox", ref: this.getRef }, React.createElement("div", { className: "bm-TabsContainerWrapper", style: wrapperStyles }, containerChildren)), otherChild);
    };
    TabsGroup.defaultProps = {
        activeIndex: 0,
        animated: true,
        centerMode: false,
        prefixCls: 'bm-TabsGroup',
        position: 'top',
        scrollable: false
    };
    return TabsGroup;
}(React.PureComponent);
exports.default = TabsGroup;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Textarea_1 = __webpack_require__(213);
exports.default = Textarea_1.default;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Textarea = /** @class */function (_super) {
    __extends(Textarea, _super);
    function Textarea(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            var value = event.target.value;
            var onChange = _this.props.onChange;
            _this.setState({
                value: value
            });
            if (onChange) {
                onChange(value, event);
            }
        };
        _this.handleFocus = function (event) {
            _this.setState({
                focus: true
            });
            if (_this.props.onFocus) {
                _this.props.onFocus(event);
            }
        };
        _this.handleBlur = function (event) {
            _this.setState({
                focus: false
            });
            if (_this.props.onBlur) {
                _this.props.onBlur(event);
            }
        };
        _this.state = {
            value: props.defaultValue || '',
            length: props.maxLength,
            focus: false
        };
        return _this;
    }
    Textarea.prototype.componentWillReceiveProps = function (nextProps) {
        if ('value' in nextProps && this.props.value !== nextProps.value) {
            this.setState({
                value: nextProps.value
            });
        }
    };
    Textarea.prototype.render = function () {
        var _a = this.props,
            autoFocus = _a.autoFocus,
            animated = _a.animated,
            className = _a.className,
            disabled = _a.disabled,
            id = _a.id,
            inline = _a.inline,
            maxHeight = _a.maxHeight,
            label = _a.label,
            prefixCls = _a.prefixCls,
            placeholder = _a.placeholder,
            readOnly = _a.readOnly,
            rows = _a.rows,
            size = _a.size;
        var _b = this.state,
            focus = _b.focus,
            length = _b.length,
            value = _b.value;
        var styleClass = classNames(prefixCls, (_c = {}, _c[prefixCls + "-inner"] = inline, _c[prefixCls + "-animated"] = animated, _c[prefixCls + "-focus"] = focus, _c[prefixCls + "-noEmpty"] = value.trim() !== '', _c), "" + (prefixCls + '-' + size), className);
        var styles = {
            maxHeight: maxHeight
        };
        return React.createElement("div", { className: styleClass, style: styles }, React.createElement("label", { htmlFor: id }, label ? React.createElement("div", { className: prefixCls + "-label" }, label) : null, React.createElement("div", { className: prefixCls + "-field" }, React.createElement("textarea", { autoFocus: autoFocus, rows: rows, id: id, value: value, placeholder: placeholder, disabled: disabled, readOnly: readOnly, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur }), React.createElement("span", { className: prefixCls + "-indicator" }, length))), React.createElement("hr", null));
        var _c;
    };
    Textarea.defaultProps = {
        disabled: false,
        inline: false,
        prefixCls: 'bm-Textarea',
        size: 'sm'
    };
    return Textarea;
}(React.PureComponent);
exports.default = Textarea;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Timeline_1 = __webpack_require__(215);
exports.default = Timeline_1.default;
var TimelineItem_1 = __webpack_require__(216);
exports.TimelineItem = TimelineItem_1.default;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Timeline = /** @class */function (_super) {
    __extends(Timeline, _super);
    function Timeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Timeline.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["className", "children", "prefixCls"]);
        var styleClass = classNames(prefixCls, className);
        return React.createElement("div", __assign({ className: styleClass }, other), children);
    };
    Timeline.defaultProps = {
        prefixCls: 'bm-Timeline'
    };
    return Timeline;
}(React.PureComponent);
exports.default = Timeline;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var TimelineItem = /** @class */function (_super) {
    __extends(TimelineItem, _super);
    function TimelineItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimelineItem.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            className = _a.className,
            prefixCls = _a.prefixCls,
            title = _a.title;
        var styleClass = classNames(prefixCls, className);
        return React.createElement("div", { className: styleClass }, React.createElement("div", { className: prefixCls + "-line" }), React.createElement("div", { className: prefixCls + "-body" }, title ? React.createElement("div", { className: prefixCls + "-title" }, title) : null, React.createElement("div", { className: prefixCls + "-inner" }, children)));
    };
    TimelineItem.defaultProps = {
        prefixCls: 'bm-TimelineItem'
    };
    return TimelineItem;
}(React.PureComponent);
exports.default = TimelineItem;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Toast_1 = __webpack_require__(218);
exports.default = Toast_1.default;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var Message_1 = __webpack_require__(11);
var toastInstance;
var getToastInstance = function getToastInstance(props) {
    if (toastInstance) {
        return toastInstance;
    }
    return Message_1.default.create(__assign({}, props));
};
var Toast = /** @class */function () {
    function Toast(props) {
        var position = props.position ? props.position : 'center';
        props['className'] = "Toast Toast-" + position;
        this.props = props;
        toastInstance = getToastInstance({
            hideBackdrop: true,
            className: 'Toast-group',
            onClose: props['onClose'] || function () {}
        });
        this.create();
    }
    Toast.prototype.create = function () {
        var props = Object.assign({}, this.props);
        var type = props.type,
            avatar = props.avatar,
            message = props.message,
            onClose = props.onClose;
        props['message'] = React.createElement("div", { className: classNames(['Toast-item', "Toast-" + type]) }, !!avatar ? React.createElement("div", { className: "Toast-avatar" }, avatar) : null, React.createElement("div", { className: "Toast-content" }, message));
        props['onClose'] = function () {
            if (onClose) {
                onClose();
            }
        };
        toastInstance.create(__assign({}, props));
    };
    return Toast;
}();
exports.Toast = Toast;
exports.default = {
    show: function show(props) {
        return new Toast(__assign({}, props));
    },
    info: function info(props) {
        props['type'] = 'info';
        return new Toast(__assign({}, props));
    },
    success: function success(props) {
        props['type'] = 'success';
        return new Toast(__assign({}, props));
    },
    warning: function warning(props) {
        props['type'] = 'warning';
        return new Toast(__assign({}, props));
    },
    error: function error(props) {
        props['type'] = 'error';
        return new Toast(__assign({}, props));
    },
    close: function close() {
        if (toastInstance) {
            toastInstance.clearAll();
            toastInstance = null;
        }
    }
};

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = __webpack_require__(220);
exports.default = View_1.default;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var View = /** @class */function (_super) {
    __extends(View, _super);
    function View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            reveal: false
        };
        _this.toggleSidebar = function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }
        };
        return _this;
    }
    View.prototype.componentDidMount = function () {
        var reveal = this.props.reveal;
        this.setState({
            reveal: !!reveal
        });
    };
    View.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            overlayBackground = _a.overlayBackground,
            children = _a.children;
        var styleClass = classNames('View', className);
        var styles = {
            background: overlayBackground
        };
        return React.createElement("div", { className: styleClass, style: styles }, children, React.createElement("div", { className: "View-overlay", onClick: this.toggleSidebar }));
    };
    View.defaultProps = {
        reveal: false,
        overlayBackground: 'transparent'
    };
    return View;
}(React.PureComponent);
exports.default = View;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Tree_1 = __webpack_require__(222);
exports.default = Tree_1.default;
var TreeNode_1 = __webpack_require__(224);
exports.TreeNode = TreeNode_1.default;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var TreeItem_1 = __webpack_require__(223);
var Tree = /** @class */function (_super) {
    __extends(Tree, _super);
    function Tree(props) {
        var _this = _super.call(this, props) || this;
        _this.nodeTouched = false;
        _this.selection = [];
        _this.state = {
            selection: {},
            value: props.value.length > 0 ? props.value : []
        };
        _this.selection = Array.isArray(props.selection) ? props.selection.slice() : props.selection;
        return _this;
    }
    Tree.prototype.componentWillReceiveProps = function (nextProps) {
        if ('value' in nextProps && nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value
            });
        }
    };
    Tree.prototype.onNodeClick = function (event, node) {
        var _a = this.props,
            selectionChange = _a.selectionChange,
            onNodeUnselect = _a.onNodeUnselect,
            onNodeSelect = _a.onNodeSelect,
            passSelectedDown = _a.passSelectedDown,
            passSelectedUp = _a.passSelectedUp,
            selectionMode = _a.selectionMode,
            selection = _a.selection;
        if (selectionMode) {
            var index = this.findIndexInSelection(node);
            var selected = index >= 0;
            if (this.isCheckboxSelectionMode()) {
                if (selected) {
                    if (passSelectedDown) {
                        this.passDown(node, false);
                    } else {
                        this.selection = this.getSelection(index);
                    }
                    if (passSelectedUp && node.parent) {
                        this.passUp(node.parent, false);
                    }
                    if (typeof selectionChange === 'function') {
                        selectionChange(this.selection);
                    }
                    if (typeof onNodeUnselect === 'function') {
                        onNodeUnselect({ originalEvent: event, node: node });
                    }
                } else {
                    if (passSelectedDown) {
                        this.passDown(node, true);
                    } else {
                        this.selection = (selection || []).concat([node]);
                    }
                    if (passSelectedUp && node.parent) {
                        this.passUp(node.parent, true);
                    }
                    if (typeof selectionChange === 'function') {
                        selectionChange(this.selection);
                    }
                    if (typeof onNodeSelect === 'function') {
                        onNodeSelect({ originalEvent: event, node: node });
                    }
                }
            } else {
                if (this.isSingleSelectionMode()) {
                    if (selected) {
                        this.selection = null;
                        if (typeof onNodeUnselect === 'function') {
                            onNodeUnselect({ originalEvent: event, node: node });
                        }
                    } else {
                        this.selection = node;
                        if (typeof onNodeSelect === 'function') {
                            onNodeSelect({ originalEvent: event, node: node });
                        }
                    }
                } else {
                    if (selected) {
                        this.selection = this.getSelection(index);
                        if (typeof onNodeUnselect === 'function') {
                            onNodeUnselect({ originalEvent: event, node: node });
                        }
                    } else {
                        this.selection = (this.selection || []).concat([node]);
                        if (typeof onNodeSelect === 'function') {
                            onNodeSelect({ originalEvent: event, node: node });
                        }
                    }
                }
                if (typeof selectionChange === 'function') {
                    selectionChange(this.selection);
                }
            }
        }
        this.setState({
            selection: this.selection
        });
        this.nodeTouched = false;
    };
    Tree.prototype.onNodeTouchEnd = function () {
        this.nodeTouched = true;
    };
    Tree.prototype.passUp = function (node, select) {
        if (node.children && node.children.length) {
            var selectedCount = 0;
            var childPartialSelected = false;
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (this.isSelected(child)) {
                    selectedCount++;
                } else if (child.partialSelected) {
                    childPartialSelected = true;
                }
            }
            if (select && selectedCount === node.children.length) {
                this.selection = (this.selection || []).concat([node]);
                node.partialSelected = false;
            } else {
                if (!select) {
                    var index = this.findIndexInSelection(node);
                    if (index >= 0) {
                        this.selection = this.getSelection(index);
                    }
                }
                node.partialSelected = childPartialSelected || selectedCount > 0 && selectedCount !== node.children.length;
            }
        }
        var parent = node.parent;
        if (parent) {
            this.passUp(parent, select);
        }
    };
    Tree.prototype.passDown = function (node, select) {
        var index = this.findIndexInSelection(node);
        if (select && index === -1) {
            this.selection = (this.selection || []).concat([node]);
        } else if (!select && index > -1) {
            this.selection = this.getSelection(index);
        }
        node.partialSelected = false;
        if (node.children && node.children.length) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.passDown(child, select);
            }
        }
    };
    Tree.prototype.getSelection = function (index) {
        return this.selection.filter(function (val, i) {
            return val && i !== index;
        });
    };
    Tree.prototype.findIndexInSelection = function (node) {
        var index = -1;
        if (this.props.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                index = this.selection === node ? 0 : -1;
            } else {
                for (var i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] === node) {
                        index = i;
                        break;
                    }
                }
            }
        }
        return index;
    };
    Tree.prototype.isSelected = function (node) {
        return this.findIndexInSelection(node) !== -1;
    };
    Tree.prototype.isSingleSelectionMode = function () {
        return this.props.selectionMode && this.props.selectionMode === 'single';
    };
    Tree.prototype.isCheckboxSelectionMode = function () {
        return this.props.selectionMode && this.props.selectionMode === 'checkbox';
    };
    Tree.prototype.getTemplateForNode = function (node) {
        var template = this.props.template;
        if (typeof template === 'function') {
            return template(node);
        }
        return null;
    };
    Tree.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            className = _a.className,
            children = _a.children,
            emptyMessage = _a.emptyMessage,
            loading = _a.loading,
            prefixCls = _a.prefixCls,
            other = __rest(_a, ["className", "children", "emptyMessage", "loading", "prefixCls"]);
        var styleClass = classNames(prefixCls, className);
        var value = this.state.value;
        var selection = Array.isArray(this.state.selection) ? this.state.selection.slice() : this.state.selection;
        return React.createElement("div", { className: styleClass }, React.createElement("div", { className: styleClass }, loading ? React.createElement("div", { className: prefixCls + "-loading" }, React.createElement("div", { className: prefixCls + "-loading-mask" }), React.createElement("div", { className: prefixCls + "-loading-content" })) : null, React.createElement("ul", { className: prefixCls + "-inner" }, value.map(function (node, index) {
            return React.createElement(TreeItem_1.default, { selection: selection, tree: _this, node: node, key: "TreeNode-" + index, index: index });
        })), !loading && value.length > 0 ? React.createElement("div", { className: prefixCls + "-empty-message" }, emptyMessage) : null));
    };
    Tree.defaultProps = {
        passSelectedUp: true,
        passSelectedDown: true,
        prefixCls: 'bm-Tree',
        value: []
    };
    return Tree;
}(React.PureComponent);
exports.default = Tree;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var TreeItem = /** @class */function (_super) {
    __extends(TreeItem, _super);
    function TreeItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggle = function (event) {
            event.stopPropagation();
            var node = _this.props.node;
            var tree = _this.props.tree;
            if (node.expanded) {
                if (typeof tree.onNodeCollapse === 'function') {
                    tree.onNodeCollapse({ originalEvent: event, node: node });
                }
            } else {
                if (typeof tree.onNodeExpand === 'function') {
                    tree.onNodeExpand({ originalEvent: event, node: node });
                }
            }
            node.expanded = !node.expanded;
            _this.forceUpdate();
        };
        _this.onNodeClick = function (event) {
            var tree = _this.props.tree;
            tree.onNodeClick(event, _this.props.node);
        };
        _this.onNodeTouchEnd = function () {
            var tree = _this.props.tree;
            tree.onNodeTouchEnd();
        };
        return _this;
    }
    TreeItem.prototype.componentDidMount = function () {
        if (this.props.node) {
            if (this.props.parentNode) {
                this.props.node['parent'] = this.props.parentNode;
            }
            this.forceUpdate();
        }
    };
    TreeItem.prototype.componentWillReceiveProps = function (nextProps) {
        if ('node' in nextProps && nextProps.node !== this.props.node || 'selection' in nextProps && nextProps.selection !== this.props.selection) {
            this.forceUpdate();
        }
    };
    TreeItem.prototype.getIcon = function (node) {
        var icon = '';
        if (node.icon) {
            icon = node.icon;
        } else {
            icon = node.expanded && node.children && node.children.length ? node.expandedIcon || React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "#757575" }, React.createElement("path", { d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" })) : node.collapsedIcon || React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "#757575" }, React.createElement("path", { d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" }));
        }
        if (this.isSelected()) {
            icon = React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "#4285F4" }, React.createElement("path", { d: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" }));
        }
        return icon;
    };
    TreeItem.prototype.isLeaf = function () {
        var node = this.props.node;
        return node.leaf === false ? false : !(node.children && node.children.length);
    };
    TreeItem.prototype.isSelected = function () {
        var tree = this.props.tree;
        return tree.isSelected(this.props.node);
    };
    TreeItem.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            className = _a.className,
            node = _a.node,
            prefixCls = _a.prefixCls,
            tree = _a.tree;
        var styleClass = classNames(prefixCls, (_b = {}, _b[prefixCls + "-leaf"] = this.isLeaf(), _b), className);
        var containerStyle = {
            paddingLeft: 36
        };
        var contentClass = classNames(prefixCls + "-content", (_c = {}, _c[prefixCls + "-selectable"] = tree.props.selectionMode && node.selectable !== false, _c[prefixCls + "-content-selected"] = this.isSelected(), _c));
        var expandedStyle = {
            display: node.expanded ? 'block' : 'none'
        };
        var labelClass = classNames(prefixCls + "-menu-label");
        var arrowStyle = {
            pointerEvents: 'none',
            display: 'block',
            width: '100%',
            height: '100%',
            fill: 'rgb(117, 117, 117)'
        };
        var toggleClass = classNames(prefixCls + "-toggle", (_d = {}, _d[prefixCls + "-expanded"] = node.expanded, _d));
        var template = tree.getTemplateForNode(node);
        var selection = Array.isArray(this.props.selection) ? this.props.selection.slice() : this.props.selection;
        return React.createElement("li", { className: styleClass, style: containerStyle }, React.createElement("div", { className: contentClass, onClick: this.onNodeClick, onTouchEnd: this.onNodeTouchEnd }, React.createElement("button", { className: toggleClass, onClick: this.toggle }, React.createElement("span", null, React.createElement("svg", { viewBox: "0 0 24 24", preserveAspectRatio: "xMidYMid meet", style: arrowStyle }, React.createElement("g", null, React.createElement("path", { d: "M7 10l5 5 5-5z" }))))), React.createElement("div", { className: prefixCls + "-label" }, tree && tree.props.selectionMode === 'checkbox' ? React.createElement("div", { className: prefixCls + "-checkbox" }, React.createElement("div", { className: prefixCls + "-checkbox-box" }, React.createElement("div", { className: prefixCls + "-checkbox-icon" }, node.partialSelected ? React.createElement("svg", { fill: "#4285F4", height: "24", viewBox: "0 0 24 24", width: "24" }, React.createElement("defs", null, React.createElement("path", { d: "M0 0h24v24H0z", id: "a" })), React.createElement("clipPath", { id: "b" }, React.createElement("use", { overflow: "visible", xlinkHref: "#a" })), React.createElement("path", { clipPath: "url(#b)", d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" })) : this.isSelected() ? React.createElement("svg", { fill: "#4285F4", height: "24", viewBox: "0 0 24 24", width: "24" }, React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }), React.createElement("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })) : React.createElement("svg", { fill: "#757575", height: "24", viewBox: "0 0 24 24", width: "24" }, React.createElement("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }), React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))))) : null, React.createElement("span", null, this.getIcon(node)), React.createElement("span", { className: labelClass }, !template ? node.label : template))), node.children && node.expanded ? React.createElement("ul", { className: prefixCls + "-children", style: expandedStyle }, node.children.map(function (childNode, index) {
            return React.createElement(TreeItem, { selection: selection, tree: tree, node: childNode, parentNode: node, key: "TreeNode-" + index, index: index + _this.props.index });
        })) : null);
        var _b, _c, _d;
    };
    TreeItem.defaultProps = {
        prefixCls: 'bm-TreeItem'
    };
    return TreeItem;
}(React.PureComponent);
exports.default = TreeItem;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Tooltip_1 = __webpack_require__(226);
exports.default = Tooltip_1.default;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var classNames = __webpack_require__(1);
var react_event_listener_1 = __webpack_require__(227);
var Utils_1 = __webpack_require__(2);
var Tooltip = /** @class */function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            tooltipStyle: {},
            open: false
        };
        _this.er = '';
        _this.touchEvent = Utils_1.getTouchEvent();
        _this.handleTouchStart = function () {
            if (!_this.touchEvent.mobile) {
                return;
            }
            if (_this.timeoutId) {
                _this.close();
                clearTimeout(_this.timeoutId);
            }
            _this.show();
        };
        _this.handleTouchEnd = function () {
            if (!_this.touchEvent.mobile) {
                return;
            }
            _this.timeoutId = setTimeout(function () {
                _this.close();
                _this.timeoutId = null;
            }, _this.props.delay);
        };
        _this.handleResize = function () {
            _this.touchEvent = Utils_1.getTouchEvent();
            _this.updateTooltipState();
        };
        return _this;
    }
    Tooltip.prototype.componentDidMount = function () {
        this.updateTooltipState();
    };
    Tooltip.prototype.close = function () {
        this.setState({
            open: false
        });
        if (this.props.onClose) {
            this.props.onClose();
        }
    };
    Tooltip.prototype.show = function () {
        this.setState({
            open: true
        });
        if (this.props.onOpen) {
            this.props.onOpen();
        }
    };
    Tooltip.prototype.updateTooltipState = function () {
        var dir = this.props.dir;
        if (this.tooltip) {
            var rect = this.er.getBoundingClientRect();
            if (!this.er.style.position) {
                this.er.style.position = 'relative';
            }
            var top_1 = rect.height / 2 - this.tooltip.offsetHeight / 2;
            var left = rect.width / 2 - this.tooltip.offsetWidth / 2;
            switch (dir) {
                case 'left':
                    left = -this.tooltip.offsetWidth;
                    break;
                case 'right':
                    left = rect.width;
                    break;
                case 'top':
                    top_1 = -this.tooltip.offsetHeight;
                    break;
                case 'bottom':
                    top_1 = rect.height;
                    break;
            }
            this.setState({
                tooltipStyle: { top: top_1, left: left }
            });
        }
    };
    Tooltip.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            children = _a.children,
            className = _a.className,
            dir = _a.dir,
            prefixCls = _a.prefixCls,
            title = _a.title,
            other = __rest(_a, ["children", "className", "dir", "prefixCls", "title"]);
        var styleClass = classNames(prefixCls + "-content", prefixCls + "-" + dir, this.state.open && prefixCls + "-active");
        var groupStyle = classNames(prefixCls, className);
        return React.createElement(react_event_listener_1.default, { target: "window", onResize: this.handleResize }, React.createElement("div", { ref: function ref(node) {
                _this.er = node;
            }, className: groupStyle, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd }, children, React.createElement("div", __assign({ className: styleClass }, other, { ref: function ref(node) {
                _this.tooltip = node;
            }, style: this.state.tooltipStyle }), title)));
    };
    Tooltip.defaultProps = {
        delay: 1000,
        dir: 'bottom',
        title: '',
        prefixCls: 'bm-Tooltip'
    };
    return Tooltip;
}(React.PureComponent);
exports.default = Tooltip;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(228);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(232);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(233);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(235);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(254);

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(261);

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__(264);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = __webpack_require__(265);

var _assign2 = _interopRequireDefault(_assign);

exports.withOptions = withOptions;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowEqual = __webpack_require__(269);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _warning = __webpack_require__(21);

var _warning2 = _interopRequireDefault(_warning);

var _supports = __webpack_require__(270);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultEventOptions = {
  capture: false,
  passive: false
};

function mergeDefaultEventOptions(options) {
  return (0, _assign2.default)({}, defaultEventOptions, options);
}

function getEventListenerArgs(eventName, callback, options) {
  var args = [eventName, callback];
  args.push(_supports.passiveOption ? options : options.capture);
  return args;
}

function on(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function off(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function forEachListener(props, iteratee) {
  var children = props.children,
      target = props.target,
      eventProps = (0, _objectWithoutProperties3.default)(props, ['children', 'target']);


  (0, _keys2.default)(eventProps).forEach(function (name) {
    if (name.substring(0, 2) !== 'on') {
      return;
    }

    var prop = eventProps[name];
    var type = typeof prop === 'undefined' ? 'undefined' : (0, _typeof3.default)(prop);
    var isObject = type === 'object';
    var isFunction = type === 'function';

    if (!isObject && !isFunction) {
      return;
    }

    var capture = name.substr(-7).toLowerCase() === 'capture';
    var eventName = name.substring(2).toLowerCase();
    eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

    if (isObject) {
      iteratee(eventName, prop.handler, prop.options);
    } else {
      iteratee(eventName, prop, mergeDefaultEventOptions({ capture: capture }));
    }
  });
}

function withOptions(handler, options) {
  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(options, 'react-event-listener: should be specified options in withOptions.') : void 0;

  return {
    handler: handler,
    options: mergeDefaultEventOptions(options)
  };
}

var EventListener = function (_React$Component) {
  (0, _inherits3.default)(EventListener, _React$Component);

  function EventListener() {
    (0, _classCallCheck3.default)(this, EventListener);
    return (0, _possibleConstructorReturn3.default)(this, (EventListener.__proto__ || (0, _getPrototypeOf2.default)(EventListener)).apply(this, arguments));
  }

  (0, _createClass3.default)(EventListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addListeners();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual2.default)(this.props, nextProps);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.removeListeners();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.addListeners();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListeners();
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      this.applyListeners(on);
    }
  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      this.applyListeners(off);
    }
  }, {
    key: 'applyListeners',
    value: function applyListeners(onOrOff) {
      var target = this.props.target;


      if (target) {
        var element = target;

        if (typeof target === 'string') {
          element = window[target];
        }

        forEachListener(this.props, onOrOff.bind(null, element));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children || null;
    }
  }]);
  return EventListener;
}(_react2.default.Component);

EventListener.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * You can provide a single child too.
   */
  children: _propTypes2.default.node,
  /**
   * The DOM target to listen to.
   */
  target: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).isRequired
} : {};

exports.default = EventListener;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(229), __esModule: true };

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(230);
module.exports = __webpack_require__(10).Object.getPrototypeOf;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(27);

__webpack_require__(52)('getPrototypeOf', function($getPrototypeOf){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(54);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(3);
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(237), __esModule: true };

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(238);
__webpack_require__(242);
module.exports = __webpack_require__(15)('iterator');

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(239)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(55)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(240)
  , defined   = __webpack_require__(28);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 240 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $              = __webpack_require__(3)
  , descriptor     = __webpack_require__(31)
  , setToStringTag = __webpack_require__(34)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(30)(IteratorPrototype, __webpack_require__(15)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(243);
var Iterators = __webpack_require__(33);
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(244)
  , step             = __webpack_require__(245)
  , Iterators        = __webpack_require__(33)
  , toIObject        = __webpack_require__(19);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(55)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(247), __esModule: true };

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(248);
__webpack_require__(253);
module.exports = __webpack_require__(10).Symbol;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var $              = __webpack_require__(3)
  , global         = __webpack_require__(17)
  , has            = __webpack_require__(32)
  , DESCRIPTORS    = __webpack_require__(58)
  , $export        = __webpack_require__(14)
  , redefine       = __webpack_require__(57)
  , $fails         = __webpack_require__(18)
  , shared         = __webpack_require__(59)
  , setToStringTag = __webpack_require__(34)
  , uid            = __webpack_require__(60)
  , wks            = __webpack_require__(15)
  , keyOf          = __webpack_require__(249)
  , $names         = __webpack_require__(250)
  , enumKeys       = __webpack_require__(251)
  , isArray        = __webpack_require__(252)
  , anObject       = __webpack_require__(63)
  , toIObject      = __webpack_require__(19)
  , createDesc     = __webpack_require__(31)
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(56)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var $         = __webpack_require__(3)
  , toIObject = __webpack_require__(19);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(19)
  , getNames  = __webpack_require__(3).getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var $ = __webpack_require__(3);
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(62);
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 253 */
/***/ (function(module, exports) {



/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(255);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(259);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(256), __esModule: true };

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(257);
module.exports = __webpack_require__(10).Object.setPrototypeOf;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(14);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(258).set});

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = __webpack_require__(3).getDesc
  , isObject = __webpack_require__(64)
  , anObject = __webpack_require__(63);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(53)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(260), __esModule: true };

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(3);
module.exports = function create(P, D){
  return $.create(P, D);
};

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(262), __esModule: true };

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(263);
module.exports = __webpack_require__(10).Object.keys;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(27);

__webpack_require__(52)('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(266), __esModule: true };

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(267);
module.exports = __webpack_require__(10).Object.assign;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(268)});

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.1 Object.assign(target, source, ...)
var $        = __webpack_require__(3)
  , toObject = __webpack_require__(27)
  , IObject  = __webpack_require__(61);

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = __webpack_require__(18)(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = IObject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passiveOption = undefined;

var _defineProperty = __webpack_require__(54);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defineProperty(object, property, attr) {
  return (0, _defineProperty2.default)(object, property, attr);
}

// Passive options
// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
var passiveOption = exports.passiveOption = function () {
  var cache = null;

  return function () {
    if (cache !== null) {
      return cache;
    }

    var supportsPassiveOption = false;

    try {
      window.addEventListener('test', null, defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      }));
    } catch (err) {
      //
    }

    cache = supportsPassiveOption;

    return supportsPassiveOption;
  }();
}();

exports.default = {};

/***/ })
/******/ ]);
});