"use strict";
exports.__esModule = true;
exports.Query_Update = exports.Query_Get = exports.Config = exports.returnPromise = exports.Database = void 0;
exports.Database = {
    IP: '',
    Port: '',
    Database: '',
    Username: '',
    Password: ''
};
function returnPromise(callback) {
    return new Promise(function (resolve, reject) {
        resolve(callback());
    })["catch"](function (error) {
        throw error;
    });
}
exports.returnPromise = returnPromise;
function Config(Config) {
    return returnPromise(function () {
        exports.Database = Config;
        "Success";
    });
}
exports.Config = Config;
var Query_1 = require("./Query");
exports.Query_Get = Query_1.Get;
exports.Query_Update = Query_1.Update;
