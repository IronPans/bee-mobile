const path = require('path');
const glob = require('glob');
/**
 * Helper functions.
 */
const ROOT = path.resolve(__dirname, '..');

// 获取入口模块对象集合
exports.getEntry = (globPath, folderLevel) => {
    const files = glob.sync(globPath);
    let entries = {}, entry, moduleName;
    for (let i = 0; i < files.length; i++) {
        entry = files[i];
        moduleName = entry.split('/')[folderLevel];
        entries[moduleName] = './' + entry;
    }
    return entries;
};

const root = path.join.bind(path, ROOT);

exports.root = root;