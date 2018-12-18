// The one and only way of getting global scope in all environments
// https://stackoverflow.com/q/3277182/1008999
var _global = typeof window === 'object' && window.window === window
    ? window : typeof self === 'object' && self.self === self
        ? self : typeof global === 'object' && global.global === global
            ? global
            : this

require('babel-polyfill');
const Excel = require('./node_modules/exceljs/dist/es5/exceljs.browser');
const FileSaver = require('file-saver');
const saveAs = FileSaver.saveAs;

_global.Excel = Excel;
_global.saveAs = saveAs;

if (typeof module !== 'undefined') {
    module.exports = {
        Excel,
        saveAs
    };
}
