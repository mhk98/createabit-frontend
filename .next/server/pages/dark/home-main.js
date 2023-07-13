"use strict";
(() => {
var exports = {};
exports.id = 7270;
exports.ids = [7270,5942,4859,3846];
exports.modules = {

/***/ 4349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var _components_HomeMain_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1599);
/* harmony import */ var _components_HomeMain_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5369);
/* harmony import */ var _components_HomeMain_Marq__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4699);
/* harmony import */ var _components_HomeMain_Clients__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(621);
/* harmony import */ var _components_HomeMain_Services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4172);
/* harmony import */ var _components_HomeMain_Works__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7717);
/* harmony import */ var _components_HomeMain_ServicesTabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3206);
/* harmony import */ var _components_HomeMain_Testimonials__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(589);
/* harmony import */ var _components_HomeMain_Blog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5004);
/* harmony import */ var _components_HomeMain_Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7761);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_HomeMain_Clients__WEBPACK_IMPORTED_MODULE_9__, _components_HomeMain_Testimonials__WEBPACK_IMPORTED_MODULE_13__]);
([_components_HomeMain_Clients__WEBPACK_IMPORTED_MODULE_9__, _components_HomeMain_Testimonials__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


//= Packages

//= Layout

//= Components












function HomeMain() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.body.classList.add("home-main-crev", "main-bg");
        // Smooth Scroll of Page
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        ScrollTrigger.normalizeScroll(true);
        ScrollSmoother.create({
            smooth: 2,
            effects: true
        });
        // Horizontal Scroll
        if (window.innerWidth > 991) {
            gsap.registerPlugin(ScrollTrigger);
            let sections = gsap.utils.toArray(".panel");
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".thecontainer",
                    pin: true,
                    scrub: 1,
                    end: ()=>"+=" + document.querySelector(".thecontainer")?.offsetWidth
                }
            });
        }
        // Footer Animation
        if (window.innerWidth > 991) {
            gsap.set(".footer-container", {
                yPercent: -50
            });
            const uncover = gsap.timeline({
                paused: true
            });
            uncover.to(".footer-container", {
                yPercent: 0,
                ease: "none"
            });
            ScrollTrigger.create({
                trigger: "main",
                start: "bottom bottom",
                end: "+=50%",
                animation: uncover,
                scrub: true
            });
        }
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
            document.body.classList.remove("home-main-crev", "main-bg");
        };
    }, []);
    function handleResize() {
        if (window.innerWidth < 991 && document.querySelector(".thecontainer").style.maxHeight) {
            location.reload();
        }
        if (window.innerWidth > 991 && !document.querySelector(".thecontainer").style.maxHeight) {
            gsap.registerPlugin(ScrollTrigger);
            let sections = gsap.utils.toArray(".panel");
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".thecontainer",
                    pin: true,
                    scrub: 1,
                    end: ()=>"+=" + document.querySelector(".thecontainer").offsetWidth
                }
            });
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Geekfolio - Main"
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HomeMain_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HomeMain_About__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HomeMain_Marq__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HomeMain_Clients__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HomeMain_Services__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HomeMain_Works__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HomeMain_ServicesTabs__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HomeMain_Testimonials__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HomeMain_Blog__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HomeMain_Footer__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            })
        ]
    });
}
HomeMain.getLayout = (page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_default__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: page
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeMain);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1844,6009,1664,6934,3342,3641,2562,9109,6185], () => (__webpack_exec__(4349)));
module.exports = __webpack_exports__;

})();