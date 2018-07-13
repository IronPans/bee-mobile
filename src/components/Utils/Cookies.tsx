function isNonEmptyString(s: any) {
    return isString(s) && s !== '';
}

function isString(o: any) {
    return typeof o === 'string';
}

function set(key: string, value: any, options: any = {}) {
    const d: any = new Date();
    const expires = options.expires;
    const domain = options.domain;
    const path = options.path;
    let text = `${key}=${value}`;
    let date = expires;
    if (typeof date === 'number') {
        date = new Date();
        date.setDate(date.getDate() + expires);
    }
    if (date instanceof Date) {
        text += '; expires=' + date.toUTCString();
    }
    // domain
    if (isNonEmptyString(domain)) {
        text += '; domain=' + domain;
    }
    // path
    if (isNonEmptyString(path)) {
        text += '; path=' + path;
    }
    // secure
    if (options.secure) {
        text += '; secure';
    }
    document.cookie = text;
    return text;
}

function get(key: string) {
    const value = `${key}=`;
    const cookies = document.cookie.split(';');
    let i = 0;
    for (const cookie of cookies) {
        const c = cookie.trim();
        if (c.indexOf(value) === 0) {
            return c.substring(value.length, c.length);
        }
        i++;
    }
    return '';
}

function remove(key: string, options: any = {}) {
    options.expires = new Date(0);
    return set(key, '', options);
}

export {get, remove, set};
