"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var twrnc_1 = require("app/packages/twrnc");
var CrossImage = function (_a) {
    var src = _a.src, webSrc = _a.webSrc, alt = _a.alt, url = _a.url, w = _a.w, h = _a.h, c = _a.c, _b = _a.ext, ext = _b === void 0 ? false : _b;
    return (react_native_1.Platform.OS === "web" ?
        react_1["default"].createElement("img", { src: webSrc, className: "w-full object-cover h-auto", width: w, height: h, alt: alt })
        :
            react_1["default"].createElement(react_native_1.Image, { style: twrnc_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["w-full"], ["w-full"]))), width: w, height: h, 
                //source={{ uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" }}
                source: ext ? { uri: url } : src }));
};
exports["default"] = CrossImage;
var templateObject_1;
