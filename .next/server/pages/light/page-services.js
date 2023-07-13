"use strict";
(() => {
var exports = {};
exports.id = 4097;
exports.ids = [4097,5942,3846];
exports.modules = {

/***/ 9154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page_services)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/layouts/default.jsx
var layouts_default = __webpack_require__(3641);
// EXTERNAL MODULE: ./src/components/Common/Loader.jsx
var Loader = __webpack_require__(6934);
// EXTERNAL MODULE: ./src/components/DigitalAgency/ServicesTab.jsx
var ServicesTab = __webpack_require__(417);
// EXTERNAL MODULE: ./src/components/InnerPages/About/Services.jsx + 1 modules
var Services = __webpack_require__(7024);
// EXTERNAL MODULE: ./src/components/InnerPages/Header.jsx
var Header = __webpack_require__(468);
;// CONCATENATED MODULE: ./src/components/InnerPages/Services/FAQ.jsx


function FAQ() {
    function openAccordion(event) {
        document.querySelectorAll(".accordion-info").forEach((element)=>{
            element.classList.remove("active");
            element.style.maxHeight = 0;
            element.parentElement.classList.remove("active");
        });
        event.currentTarget.parentElement.classList.add("active");
        event.currentTarget.nextElementSibling.style.maxHeight = "300px";
        event.currentTarget.nextElementSibling.classList.add("active");
    }
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "intro-corp section-padding pt-0",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "sec-head mb-40",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                className: "sub-title",
                                children: "FAQ."
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-7",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "cont",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                        className: "d-slideup wow",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "sideup-text",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "up-text",
                                                    children: "Watch the creative process"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "sideup-text",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "up-text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "behind our Software Development"
                                                        }),
                                                        "."
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "accordion bord mt-40",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "item mb-15 wow fadeInUp",
                                            "data-wow-delay": ".1s",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "title",
                                                    onClick: openAccordion,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                            className: "fz-18",
                                                            children: "The Power of Influencer Marketing"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "ico"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "accordion-info",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "fz-14",
                                                        children: "Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole."
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "item mb-15 wow fadeInUp",
                                            "data-wow-delay": ".3s",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "title",
                                                    onClick: openAccordion,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                            className: "fz-18",
                                                            children: "Unique and Influential Design"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "ico"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "accordion-info",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "fz-14",
                                                        children: "Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole."
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "item wow fadeInUp",
                                            "data-wow-delay": ".5s",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "title",
                                                    onClick: openAccordion,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                            className: "fz-18",
                                                            children: "We Build and Activate Brands"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "ico"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "accordion-info",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "fz-14",
                                                        children: "Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole."
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Services_FAQ = (FAQ);

// EXTERNAL MODULE: ./src/components/InnerPages/Services/Portfolio.jsx
var Portfolio = __webpack_require__(4171);
// EXTERNAL MODULE: ./src/components/Startup/CallToAction.jsx
var CallToAction = __webpack_require__(2026);
// EXTERNAL MODULE: ./src/components/Startup/Footer.jsx
var Footer = __webpack_require__(3267);
// EXTERNAL MODULE: ./src/pages/light/light-navbar/index.jsx
var light_navbar = __webpack_require__(1716);
;// CONCATENATED MODULE: ./src/pages/light/page-services/index.jsx


//= Packages

//= Layout

//= Components









function PageServicesLight() {
    (0,external_react_.useEffect)(()=>{
        document.body.classList.add("main-bg");
        return ()=>document.body.classList?.remove("main-bg");
    }, []);
    const headerMetadata = {
        subTitle: "WHAT CAN WE DO ?",
        title: "We combine our passion for design and code.",
        text: "SERVICES"
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                    children: "Geekfolio - Services"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Loader/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(light_navbar["default"], {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {
                        data: headerMetadata,
                        subBg: true
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Portfolio/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(Services/* default */.Z, {
                        lightMode: true
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(ServicesTab/* default */.Z, {
                        lightMode: true
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Services_FAQ, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(CallToAction/* default */.Z, {
                        innerPageStyle: true
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {
                lightMode: true
            })
        ]
    });
}
PageServicesLight.getLayout = (page)=>/*#__PURE__*/ jsx_runtime.jsx(layouts_default/* default */.Z, {
        lightMode: true,
        children: page
    });
/* harmony default export */ const page_services = (PageServicesLight);


/***/ }),

/***/ 4335:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

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
var __webpack_exports__ = __webpack_require__.X(0, [1844,6009,1664,6934,3342,3641,3267,2026,1716,1676,1913,6830], () => (__webpack_exec__(9154)));
module.exports = __webpack_exports__;

})();