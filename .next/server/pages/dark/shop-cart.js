"use strict";
(() => {
var exports = {};
exports.id = 1393;
exports.ids = [1393,5942,3846];
exports.modules = {

/***/ 806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3641);
/* harmony import */ var _components_Common_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6934);
/* harmony import */ var _components_Common_MainNavbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5435);
/* harmony import */ var _components_Shop_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37);
/* harmony import */ var _components_Shop_Cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8166);
/* harmony import */ var _components_Startup_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3267);


//= Packages

//= Layout

//= Components





function ShopCart() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.body.classList.add("main-bg");
        // Smooth Scroll of Page
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        ScrollTrigger.normalizeScroll(true);
        ScrollSmoother.create({
            smooth: 2,
            effects: true
        });
        return ()=>document.body.classList.remove("main-bg");
    }, []);
    const metadata = {
        subTitle: "SHOPPING",
        title: "Cart."
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Geekfolio - Shop Cart"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_Loader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "smooth-wrapper",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_MainNavbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        mainBg: true,
                        noStatic: true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        id: "smooth-content",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                                className: "main-bg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shop_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        data: metadata
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shop_Cart__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Startup_Footer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                subBg: true
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
ShopCart.getLayout = (page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_default__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: page
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopCart);


/***/ }),

/***/ 8038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1844,6009,1664,6934,3342,3641,2562,3267,37,8166], () => (__webpack_exec__(806)));
module.exports = __webpack_exports__;

})();