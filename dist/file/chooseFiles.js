"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 文件选择接口(返回带mediaId方式)
 * @description 打开WorkPlus文件选择管理器，根据参数状态决定单选或多选文件，并上传该文件到后台，返回值带mediaId
 * @param {FileOptions<ChooseFilesParams[], ChooseFilesRes[]>} [options]
 * @returns {Promise<ChooseFilesRes[]>}
 */
function chooseFiles(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_FILE, 'chooseFiles', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = chooseFiles;
