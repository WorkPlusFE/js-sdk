"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./session/index");
var index_2 = require("./contact/index");
var index_3 = require("./device/index");
exports.default = {
    contact: index_2.default,
    session: index_1.default,
    device: index_3.default
};
