"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
/**
 * 关闭自动签到
 * @description 仅适用于移动考勤关闭外勤，调用此接口，关闭的组织为当前用户选择的组织
 * @param {LocationOptions<[], void>} [options]
 * @returns
 */
function takePhoto(options) {
    var _a, _b, _c, _d;
    return core.exec('WorkPlus_Location', 'disableOrgSignIn', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.default = takePhoto;
