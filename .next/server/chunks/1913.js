"use strict";
exports.id = 1913;
exports.ids = [1913];
exports.modules = {

/***/ 6671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ loadBackgroudImages)
/* harmony export */ });
function loadBackgroudImages() {
    let backgroudImages = document.querySelectorAll("[data-background]");
    if (backgroudImages.length > 0) {
        backgroudImages.forEach((element)=>{
            let image = element.dataset.background;
            element.style.backgroundImage = `url('${image}')`;
        });
    }
}


/***/ }),

/***/ 7024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_Services)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Common/StatementSplitter.jsx
var StatementSplitter = __webpack_require__(5400);
;// CONCATENATED MODULE: ./src/data/InnerPages/About/services.json
const services_namespaceObject = JSON.parse('[{"id":1,"image":"assets/imgs/serv-icons/0.png","title":"WEBSITE Development","text":"Our web application development department is equipped with the state-of-the-art equipment and a highly-trained team of development that generates outstanding ideas for our client’s project. They work closely with you to generate optimal outcomes for your application/ software concerns. We complete your project within the given deadline."},{"id":2,"image":"assets/imgs/serv-icons/1.png","title":"WEB APPLICATION","text":"Our web application development department is equipped with the state-of-the-art equipment and a highly-trained team of development that generates outstanding ideas for our client’s project. They work closely with you to generate optimal outcomes for your application/ software concerns. We complete your project within the given deadline."},{"id":3,"image":"assets/imgs/serv-icons/2.png","title":"Mobile Apps Development","text":"We specialize in design and development for mobile apps and websites. We design websites and mobile apps that are further facilitated with a high-performance rate. Our team of developers and designers at Createabit Design are acquainted with the creation and development of iOS and Android apps that are user-specific and mobile-friendly-specific."},{"id":4,"image":"assets/imgs/serv-icons/2.png","title":"DIGITAL MARKETING & SEO","text":"Createabit Design focuses on utilizes the approach that focuses on users to generate solutions for digital marketing and SEO areas. We use business-oriented design solutions to cater to the digital marketing and SEO concerns of our clients."},{"id":5,"image":"assets/imgs/serv-icons/2.png","title":"GRAPHICS DESIGN & PRINTING","text":"Createabit Design focuses on utilizes the approach that focuses on users to generate solutions for digital marketing and SEO areas. We use business-oriented design solutions to cater to the digital marketing and SEO concerns of our clients."},{"id":5,"image":"assets/imgs/serv-icons/2.png","title":"VIDEO & ANIMATION","text":"Createabit Design focuses on utilizes the approach that focuses on users to generate solutions for digital marketing and SEO areas. We use business-oriented design solutions to cater to the digital marketing and SEO concerns of our clients."}]');
;// CONCATENATED MODULE: ./src/components/InnerPages/About/Services.jsx


//= Components

//= Data

function Services({ lightMode  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "serv-box section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "sec-lg-head mb-80",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-8",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "position-re",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                            className: "dot-titl-non colorbg-3 mb-10",
                                            children: "Featured Services"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "fz-60 fw-700",
                                            children: "Our Services"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 d-flex align-items-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia."
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: services_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "serv-item md-mb50 radius-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "icon-img-60 mb-40",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: `/${lightMode ? "light" : "dark"}/${item.image}`,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "mb-30 pb-30 bord-thin-bottom",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(StatementSplitter/* default */.Z, {
                                            statement: item.title
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: item.text
                                    })
                                ]
                            })
                        }, item.id))
                })
            ]
        })
    });
}
/* harmony default export */ const About_Services = (Services);


/***/ }),

/***/ 468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);

function Header({ data , subBg  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: `page-header section-padding pb-0 ${subBg ? "sub-bg" : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mt-80",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "caption",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "sub-title",
                                        children: data.subTitle
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "fz-55",
                                        children: data.title
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-5 offset-lg-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text mt-30",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic."
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "main-marq xlrg section-padding pb-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "slide-har st1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "box",
                            children: new Array(5).fill().map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        children: data.text
                                    })
                                }, i))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "box",
                            children: new Array(5).fill().map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        children: data.text
                                    })
                                }, i))
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;