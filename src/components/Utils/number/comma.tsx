export default function (source: any, seperator: string = ',', length = 3) {
    source = String(source).split(".");
    source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{'+length+'})+$)','ig'),"$1" + seperator);
    return source.join(".");
}