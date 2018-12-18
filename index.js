
require('babel-polyfill');
const ExcelJS = require('./node_modules/exceljs/dist/es5/exceljs.browser');
const FileSaver = require('file-saver');

window.ExcelJS = ExcelJS;
window.FileSaver = FileSaver;
