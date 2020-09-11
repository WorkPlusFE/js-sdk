"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
var SERVICES_KEYS = require("../constants");
var services = {};
exports.services = services;
var serviceKeys = SERVICES_KEYS;
Object.keys(serviceKeys).map(function (key) {
    if (key.includes('WORKPLUS_')) {
        var serviceName = key.replace('WORKPLUS_', '').toLocaleLowerCase();
        services[serviceKeys[key]] = serviceName;
    }
});
