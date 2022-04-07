"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.HomeScreen = void 0;
var dripsy_1 = require("dripsy");
var react_1 = require("react");
var link_1 = require("solito/link");
var moti_1 = require("solito/moti");
var twrnc_1 = require("app/packages/twrnc");
var crossimage_1 = require("app/features/cross/crossimage");
function HomeScreen() {
    var Ibra = require("../../public/ibra.png");
    var sx = dripsy_1.useSx();
    return (react_1["default"].createElement(dripsy_1.View, { style: twrnc_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["text-white flex flex-col pt-0 md:pt-20 h-full"], ["text-white flex flex-col pt-0 md:pt-20 h-full"]))) },
        react_1["default"].createElement(dripsy_1.View, { style: twrnc_1["default"](templateObject_2 || (templateObject_2 = __makeTemplateObject(["bg-blue-200 object-cover text-white flex items-center max-w-20 pt-0 md:pt-20"], ["bg-blue-200 object-cover text-white flex items-center max-w-20 pt-0 md:pt-20"]))) },
            react_1["default"].createElement(crossimage_1["default"], { alt: "ibra", src: Ibra, webSrc: "/ibra.png", w: 300, h: 300, c: "w-full" })),
        react_1["default"].createElement(crossimage_1["default"], { alt: "ext", ext: true, webSrc: "https://rockcontent.com/br/wp-content/uploads/sites/2/2020/02/teste-de-lideran%C3%A7a.png", url: "https://rockcontent.com/br/wp-content/uploads/sites/2/2020/02/teste-de-lideran%C3%A7a.png", w: 300, h: 300, c: "w-full" }),
        react_1["default"].createElement(dripsy_1.H1, { sx: { fontWeight: '800' } }, "Welcome to Solito."),
        react_1["default"].createElement(dripsy_1.View, { sx: { maxWidth: 600 } },
            react_1["default"].createElement(dripsy_1.P, { sx: { textAlign: 'center' } }, "Here is a basic starter to show you how you can navigate from one screen to another. This screen uses the same code on Next.js and React Native."),
            react_1["default"].createElement(dripsy_1.P, { sx: { textAlign: 'center' } },
                "Solito is made by",
                ' ',
                react_1["default"].createElement(dripsy_1.A, { href: "https://twitter.com/fernandotherojo", 
                    // @ts-expect-error react-native-web only types
                    hrefAttrs: {
                        target: '_blank',
                        rel: 'noreferrer'
                    }, sx: { color: 'blue' } }, "Fernando Rojo"),
                ".")),
        react_1["default"].createElement(dripsy_1.View, { sx: { height: 32 } }),
        react_1["default"].createElement(dripsy_1.Row, null,
            react_1["default"].createElement(link_1.TextLink, { href: "/user/fernando", textProps: {
                    style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' })
                } }, "Regular Link"),
            react_1["default"].createElement(dripsy_1.View, { sx: { width: 32 } }),
            react_1["default"].createElement(moti_1.MotiLink, { href: "/user/fernando", animate: function (_a) {
                    'worklet';
                    var hovered = _a.hovered, pressed = _a.pressed;
                    return {
                        scale: pressed ? 0.95 : hovered ? 1.1 : 1,
                        rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg'
                    };
                }, transition: {
                    type: 'timing',
                    duration: 150
                } },
                react_1["default"].createElement(dripsy_1.Text, { selectable: false, sx: { fontSize: 16, color: 'black', fontWeight: 'bold' } }, "Moti Link")))));
}
exports.HomeScreen = HomeScreen;
var templateObject_1, templateObject_2;
