"use strict";
exports.id = 1803;
exports.ids = [1803];
exports.modules = {

/***/ 3403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ isInView)
/* harmony export */ });
function isInView(options) {
    if (!options.selector || !options.callback) return;
    if (options.isElements) {
        document.querySelectorAll(options.selector).forEach((element)=>{
            new IntersectionObserver((entries)=>{
                if (entries[0].isIntersecting) options.callback(entries[0].target);
                else {
                    if (options.whenOutOfView) options.whenOutOfView(entries[0].target);
                }
            }).observe(element);
        });
    } else {
        new IntersectionObserver((entries)=>{
            if (entries[0].isIntersecting) options.callback(entries[0].target);
            else {
                if (options.whenOutOfView) options.whenOutOfView(entries[0].target);
            }
        }).observe(document.querySelector(options.selector));
    }
}


/***/ }),

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

/***/ 7079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_isInView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3403);
/* harmony import */ var _common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6671);
/* harmony import */ var _features_product_productApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4078);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


//= Scripts




function Products({ lightMode  }) {
    const { data , isLoading , isSuccess , isError , error  } = (0,_features_product_productApi__WEBPACK_IMPORTED_MODULE_2__/* .useGetProductsQuery */ .C)();
    const services = data?.data;
    console.log("services", services);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
        window.addEventListener("scroll", handleShowTabs);
        return ()=>window.removeEventListener("scroll", handleShowTabs);
    }, []);
    function handleShowTabs() {
        (0,_common_isInView__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
            selector: ".portfolio-fixed .sub-bg .cont",
            isElements: true,
            callback (element) {
                element.classList.add("current");
                document.querySelector("#" + element.getAttribute("data-tab")).classList.add("current");
            },
            whenOutOfView (element) {
                element.classList?.remove("current");
                document.querySelector("#" + element.getAttribute("data-tab")).classList?.remove("current");
            }
        });
        const leftSide = document.getElementById("sticky_item");
        if (!leftSide) return;
        const width = leftSide.getBoundingClientRect().width;
        const portfolio = document.querySelector(".portfolio-fixed")?.getBoundingClientRect();
        if (portfolio.top < 75 && portfolio.height / 2 < portfolio.bottom + 400) {
            leftSide.style.position = "fixed";
            leftSide.style.top = "0px";
            leftSide.style.width = width + "px";
            leftSide.classList.remove("is_stuck");
        } else if (portfolio.height / 2 > portfolio.bottom + 400) {
            leftSide.style.position = "absolute";
            leftSide.style.top = "auto";
            leftSide.style.bottom = "0";
            leftSide.style.width = width + "px";
            leftSide.classList.add("is_stuck");
        } else {
            leftSide.style.position = "relative";
            leftSide.style.top = "unset";
            leftSide.style.bottom = "unset";
            leftSide.style.width = "auto";
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "Oh no, there was an error"
        }) : isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "Loading..."
        }) : data ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "portfolio-fixed my-20",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-fluid rest",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 rest",
                            style: {
                                position: "relative"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "left",
                                id: "sticky_item",
                                children: services.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: `tab-${index + 1}`,
                                        className: "img bg-img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: `http://localhost:5000/${item?.image}`,
                                            alt: ""
                                        })
                                    }, index))
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 sub-bg right",
                            children: services.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `cont ${index === 0 ? "active" : ""}`,
                                    "data-tab": `tab-${index + 1}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: ""
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "sub-title mb-15",
                                            children: [
                                                item.number,
                                                " ",
                                                item.type
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            className: "mb-15 text-4xl",
                                            children: [
                                                item.title,
                                                "."
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "row justify-content-center",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-md-11",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        children: [
                                                            item.text,
                                                            "."
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        className: "butn-circle d-flex align-items-center text-center mt-50",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "full-width",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "18",
                                                                            height: "18",
                                                                            viewBox: "0 0 18 18",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                                                                fill: "currentColor"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "full-width",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                            // href="dark
                                                                            // /page-product-category"
                                                                            // href={`/${
                                                                            //   lightMode ? "light" : "dark"
                                                                            // }/page-product-category`}
                                                                            href: `/dark/page-product-category/${item.Product_Id}`,
                                                                            children: "View Details"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `/${lightMode ? "light" : "dark"}/assets/imgs/svg-assets/circle-star.svg`,
                                                                alt: "",
                                                                className: "circle-star"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }, index))
                        })
                    ]
                })
            })
        }) : null
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);


/***/ }),

/***/ 4078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useGetProductsQuery),
/* harmony export */   "F": () => (/* binding */ productApi)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const productApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "productApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "https://createabit-backend.onrender.com/api/v1/"
    }),
    endpoints: (builder)=>({
            getProducts: builder.query({
                query: ()=>"/product"
            })
        })
});
const { useGetProductsQuery  } = productApi;


/***/ }),

/***/ 7513:
/***/ ((module) => {

module.exports = JSON.parse('{"v":"ThemesCamp","a":"https://themeforest.net/user/themescamp"}');

/***/ })

};
;