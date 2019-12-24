"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = require("./storage");
var SDKUtils = require("./utils");
var SDKImage = require("./image");
var SDKContact = require("./contact");
__export(require("./eventlistener"));
exports.version = '0.0.1';
exports.native = {};
exports.Storage = storage_1.default;
exports.utils = SDKUtils;
exports.image = SDKImage;
exports.contact = SDKContact;
