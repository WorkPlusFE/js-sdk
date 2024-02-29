"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
var getLocation_1 = require("../location/getLocation");
var getTimeStr = function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minate = date.getMinutes();
    var monthStr = month < 10 ? "0" + month : "" + month;
    var dayStr = day < 10 ? "0" + day : "" + day;
    var hourStr = hour < 10 ? "0" + hour : "" + hour;
    var minateStr = minate < 10 ? "0" + minate : "" + minate;
    return year + "-" + monthStr + "-" + dayStr + " " + hourStr + ":" + minateStr;
};
/**
 * 调起拍照，并添加水印
 * @description 拍照生成水印图片返回
 * @param {WaterMarkOptions} options
 * @module image
 * @returns 带有mediaId的图片信息
 * @version 3.6.0版本以上使用
 */
function takePhotoAndAddWaterMark(options) {
    var success = options.success, fail = options.fail, data = __rest(options, ["success", "fail"]);
    var content = data.content;
    var timeStr = getTimeStr();
    if (data.timeEnable) {
        content = content + " " + timeStr;
    }
    if (data.locationEnable) {
        return getLocation_1.default().then(function (res) {
            var locationStr = res.city + res.district + res.street;
            content = content + " " + locationStr;
            var params = {
                content: content,
                font_size: data.fontSize,
                color: data.color,
                mark_disable: data.markDisable,
                time_enable: data.timeEnable,
                location_enable: data.locationEnable,
            };
            return core.exec(constants_1.WORKPLUS_IMAGE, 'takePhotoAndAddWaterMark', [params], success, fail, false);
        });
    }
    else {
        var params = {
            content: content,
            font_size: data.fontSize,
            color: data.color,
            mark_disable: data.markDisable,
            time_enable: data.timeEnable,
            location_enable: data.locationEnable,
        };
        return core.exec(constants_1.WORKPLUS_IMAGE, 'takePhotoAndAddWaterMark', [params], success, fail, false);
    }
}
exports.default = takePhotoAndAddWaterMark;
