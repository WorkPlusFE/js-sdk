"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 文件选择接口(返回带mediaId方式)
 * @description 打开WorkPlus文件选择管理器，根据参数状态决定单选或多选文件，并上传该文件到后台，返回值带mediaId
 * @param {ChooseFilesOptions} [options]
 * @returns {Promise<ChooseFilesRes[]>}
 */
function chooseFiles(options) {
    var _a, _b, _c;
    var args = {
        multiple: (options === null || options === void 0 ? void 0 : options.multiple) || true,
        file_keys: (options === null || options === void 0 ? void 0 : options.fileKeys) || [],
        file_limit: {
            max_select_count: ((_a = options === null || options === void 0 ? void 0 : options.fileLimit) === null || _a === void 0 ? void 0 : _a.maxSelectCount) || 9,
            single_select_size: ((_b = options === null || options === void 0 ? void 0 : options.fileLimit) === null || _b === void 0 ? void 0 : _b.singleSelectSize) || -1,
            total_select_size: ((_c = options === null || options === void 0 ? void 0 : options.fileLimit) === null || _c === void 0 ? void 0 : _c.totalSelectSize) || -1,
        },
    };
    return core.exec(constants_1.WORKPLUS_FILE, 'chooseFiles', [args], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = chooseFiles;
