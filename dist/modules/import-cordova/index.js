"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var cordovaImportInstance_1 = require("./cordovaImportInstance");
exports.cordovaImportInit = function (host) {
    try {
        if (!utils_1.inWorkPlus())
            return;
        if (host) {
            if (!utils_1.isValidHost(host)) {
                throw new Error('Please enter a valid host, such as //workplus.io/');
            }
        }
        var lib = new cordovaImportInstance_1.default(host);
        var importUri = lib.getImportUri();
        utils_1.scriptGenerator(importUri);
    }
    catch (error) {
        throw new Error(error);
    }
};
