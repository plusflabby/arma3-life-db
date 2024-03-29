"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Pooling = void 0;
var mysql2_1 = require("mysql2");
var _1 = require(".");
var Pooling = /** @class */ (function () {
    function Pooling(connection) {
        this.connection = connection;
    }
    Pooling.prototype.connected = function () {
        return !!this.connection;
    };
    Pooling.prototype.connect = function (connectionLimit, host, port, user, password, database) {
        var _this = this;
        if (connectionLimit === void 0) { connectionLimit = "1"; }
        if (host === void 0) { host = _1.Database["IP"]; }
        if (port === void 0) { port = _1.Database["Port"]; }
        if (user === void 0) { user = _1.Database["Username"]; }
        if (password === void 0) { password = _1.Database["Password"]; }
        if (database === void 0) { database = _1.Database["Database"]; }
        return new Promise(function (res, rej) {
            if (_this.connected())
                return res(true);
            var Create = mysql2_1.createPool({
                connectionLimit: parseInt(connectionLimit),
                host: host,
                port: parseInt(port),
                user: user,
                password: password,
                database: database
            });
            console.log('successful mysql connection');
            _this.connection = Create;
            res(true);
        });
    };
    Pooling.prototype.disconnect = function () {
        if (this.connected() && this.connection !== null) {
            this.connection.end();
            this.connection = null;
            console.log('mysql disconnected');
        }
    };
    Pooling.prototype.query = function (query, values) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.connected()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.connect()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, new Promise(function (res, rej) {
                            var _a;
                            (_a = _this.connection) === null || _a === void 0 ? void 0 : _a.query(query, values, function (err, results, fields) {
                                if (err) {
                                    rej(err);
                                }
                                else
                                    res(results);
                            });
                        })];
                }
            });
        });
    };
    return Pooling;
}());
exports.Pooling = Pooling;
