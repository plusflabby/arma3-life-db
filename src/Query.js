"use strict";
exports.__esModule = true;
exports.Update = exports.Get = void 0;
var MySQL_1 = require("./MySQL");
var _1 = require(".");
function Query(Query, Values) {
    return _1.returnPromise(function () {
        var Database = new MySQL_1.Pooling(null);
        return Database.query(Query, Values)
            .then(function (vals) {
            return vals;
        });
    });
}
function Get(table, column, search_colum, search_value) {
    return _1.returnPromise(function () {
        return Query("select " + column + " from " + table + " where binary " + search_colum + " = ?", [search_value])
            .then(function (values) {
            return values;
        });
    });
}
exports.Get = Get;
function Update(table, column, column_value, search_colum, search_value) {
    return _1.returnPromise(function () {
        return Query("update " + table + " set " + column + "=? where binary " + search_colum + "=?", [column_value, search_value])
            .then(function (values) {
            return values;
        });
    });
}
exports.Update = Update;
