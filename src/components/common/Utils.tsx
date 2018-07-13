function getTouchEvent() {
    const isMobile = 'ontouchstart' in document;
    let event;
    if (isMobile) {
        event = {
            touchstart: 'touchstart',
            touchmove: 'touchmove',
            touchend: 'touchend',
            mobile: true,
        };
    } else {
        event = {
            touchstart: 'mousedown',
            touchmove: 'mousemove',
            touchend: 'mouseup',
            mobile: false,
        };
    }

    return event;
}

const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || ( (m: any) => {
        return window.setTimeout(m, 1000 / 60);
    });

const cancelAnimationFrame = window.cancelAnimationFrame || ((id) => {
        clearTimeout(id);
    });

function getRect(elem: any) {
    return elem.getBoundingClientRect();
}

const canUseDOM = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

function getOtherProperties(target: any, source: string[]) {
    const obj: any = {};
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            if (source.indexOf(key) === -1) {
                obj[key] = target[key];
            }
        }
    }
    return obj;
}

function equals(obj1: any, obj2: any, field?: string): boolean {
    if (field) {
        return (resolveFieldData(obj1, field) === resolveFieldData(obj2, field));
    } else {
        return equalsByValue(obj1, obj2);
    }
}

function equalsByValue(obj1: any, obj2: any, visited?: any[]): boolean {
    if (obj1 == null && obj2 == null) {
        return true;
    }
    if (obj1 == null || obj2 == null) {
        return false;
    }

    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        if (visited) {
            if (visited.indexOf(obj1) !== -1) {
                return false;
            }
        } else {
            visited = [];
        }
        visited.push(obj1);

        for (const p in obj1) {
            if (obj1.handleDocumentClick(p)) {
                if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) {
                    return false;
                }

                switch (typeof (obj1[p])) {
                    case 'object':
                        if (!equalsByValue(obj1[p], obj2[p], visited)) {
                            return false;
                        }
                        break;

                    case 'function':
                        if (typeof (obj2[p]) === 'undefined' || (p !== 'compare' && obj1[p].toString() !== obj2[p].toString())) {
                            return false;
                        }
                        break;

                    default:
                        if (obj1[p] !== obj2[p]) {
                            return false;
                        }
                        break;
                }
            }
        }

        for (const p1 in obj2) {
            if (typeof (obj1[p1]) === 'undefined') {
                return false;
            }
        }

        delete obj1._$visited;
        return true;
    }

    return false;
}

function resolveFieldData(data: any, field: string): any {
    if (data && field) {
        if (field.indexOf('.') === -1) {
            return data[field];
        } else {
            const fields: string[] = field.split('.');
            let value = data;
            for (let i = 0, len = fields.length; i < len; ++i) {
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

function dateFormat(date: any, fmt: string) {
    const o: any = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds(),
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
        if (o.hasOwnProperty(k)) {
            const regExp = new RegExp(`(${k})`);
            if (regExp.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) :
                    (('00' + o[k]).substr(('' + o[k]).length)));
            }
        }
    }
    return fmt;
}

function on(el: any, eventName: string, callback: any, capture: any = false) {
    if (el.addEventListener) {
        el.addEventListener(eventName, callback, capture);
    } else if (el.attachEvent) {
        el.attachEvent(`on${eventName}`, (e: any) => {
            callback.call(el, e || window.event);
        });
    }
}

function off(el: any, eventName: string, callback: any, capture: any = false) {
    if (el.removeEventListener) {
        el.removeEventListener(eventName, callback, capture);
    } else if (el.detachEvent) {
        el.detachEvent(`on${eventName}`, callback);
    }
}

const prefixes = ['Webkit', 'ms', 'Moz', 'O'];

function prefixKey(prefix: string, key: string) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

function setValueToNumber(value: any) {
    let num = 0;
    if (typeof value === 'string') {
        num = parseFloat(value);
    } else if (typeof value === 'number') {
        num = value;
    }
    return num;
}

function getSize(val: any, pix: string = 'px') {
    const value = typeof val !== 'number' ? val : val + pix;
    return value;
}

function  checkPlatform() {
    let userAngent = '', isMobile = false;
    const mobile = /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/;
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) ||
        (mobile.test(navigator.userAgent))) {
        try {
            if (/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                userAngent = 'mobile';
            } else if (/iPad/i.test(navigator.userAgent)) {
                userAngent = 'ipad';
            }
            isMobile = true;
        } catch (e) {
            // e
        }
    } else {
        isMobile = false;
        userAngent = 'window';
    }
    return {
        platform: userAngent,
        mobile: isMobile,
    };
}

export {
    getTouchEvent, getRect, cancelAnimationFrame, requestAnimationFrame, getSize,
    canUseDOM, getOtherProperties, equals, dateFormat, off, on, setValueToNumber,
    checkPlatform,
};
