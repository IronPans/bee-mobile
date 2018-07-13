function comma(source: any, seperator: string = ',', length: number = 3) {
    source = String(source).split('.');
    source[0] = source[0].replace(new RegExp(`(\\d)(?=(\\d{${length}})+$)`, 'ig'),
        `$1${seperator}`);
    return source.join('.');
}

export default comma;
