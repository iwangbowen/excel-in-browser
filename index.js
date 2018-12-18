// Code snippet is from https://gist.github.com/CrocoDillon/9990078
/*
 * Inspiration (well… copy pasting more or less) from:
 * https://github.com/ScottHamper/Cookies/blob/0.3.1/src/cookies.js#L127-L140
 *
 * Thanks Scott!
 */
(function (global) {
    require('babel-polyfill');
    const Excel = require('exceljs');
    var FileSaver = require('file-saver');
    var saveAs = FileSaver.saveAs;

    // AMD support
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return {
                Excel: Excel,
                saveAs: saveAs
            };
        });
        // CommonJS and Node.js module support.
    } else if (typeof exports !== 'undefined') {
        // Support Node.js specific `module.exports` (which can be a function)
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = {
                Excel: Excel,
                saveAs: saveAs
            };
        }
        // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
        exports.Excel = Excel;
        exports.saveAs = saveAs;
    } else {
        global.Excel = Excel;
        global.saveAs = saveAs;
    }
})(this);