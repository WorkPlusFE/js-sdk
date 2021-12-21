"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var cordovaImportInstance_1 = require("./cordovaImportInstance");
function cordovaImportInit(options, useHttp) {
    try {
        if (!utils_1.inWorkPlus())
            return;
        var lib = new cordovaImportInstance_1.default(options, useHttp);
        var importUri = lib.getImportUri();
        utils_1.scriptGenerator(importUri);
    }
    catch (error) {
        console.log(error);
    }
}
exports.default = cordovaImportInit;
