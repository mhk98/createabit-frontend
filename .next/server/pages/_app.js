(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 4078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 3096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ useGetProductCategoryApiQuery),
/* harmony export */   "X": () => (/* binding */ productCategoryApi)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const productCategoryApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "productCategoryApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "https://createabit-backend.onrender.com/api/v1/"
    }),
    endpoints: (builder)=>({
            getProductCategoryApi: builder.query({
                query: (id)=>`/productCategory/allproduct/${id}`
            })
        })
});
const { useGetProductCategoryApiQuery  } = productCategoryApi;


/***/ }),

/***/ 7417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useGetServicesQuery),
/* harmony export */   "X": () => (/* binding */ serviceApi)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const serviceApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "serviceApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "https://createabit-backend.onrender.com/api/v1/"
    }),
    endpoints: (builder)=>({
            getServices: builder.query({
                query: ()=>"/service"
            })
        })
});
const { useGetServicesQuery  } = serviceApi;


/***/ }),

/***/ 7898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useGetServiceDetailsQuery),
/* harmony export */   "y": () => (/* binding */ serviceDetailsApi)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const serviceDetailsApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "serviceDetailsApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "https://createabit-backend.onrender.com/api/v1/"
    }),
    endpoints: (builder)=>({
            getServiceDetails: builder.query({
                query: (id)=>`/service-details/${id}`
            })
        })
});
const { useGetServiceDetailsQuery  } = serviceDetailsApi;


/***/ }),

/***/ 9783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./src/features/product/productApi.jsx
var productApi = __webpack_require__(4078);
// EXTERNAL MODULE: ./src/features/product/productCategory.jsx
var productCategory = __webpack_require__(3096);
// EXTERNAL MODULE: ./src/features/service/serviceApi.jsx
var serviceApi = __webpack_require__(7417);
// EXTERNAL MODULE: ./src/features/service/serviceDetailsApi.jsx
var serviceDetailsApi = __webpack_require__(7898);
;// CONCATENATED MODULE: ./src/app/store.js




// import serviceDetailsSlice from "@/features/serviceDetails/serviceDetailsSlice";
// import servicesSlice from "@/features/services/servicesSlice";
const { configureStore  } = __webpack_require__(5184);
const store = configureStore({
    devTools: true,
    reducer: {
        [serviceApi/* serviceApi.reducerPath */.X.reducerPath]: serviceApi/* serviceApi.reducer */.X.reducer,
        [serviceDetailsApi/* serviceDetailsApi.reducerPath */.y.reducerPath]: serviceDetailsApi/* serviceDetailsApi.reducer */.y.reducer,
        [productApi/* productApi.reducerPath */.F.reducerPath]: productApi/* productApi.reducer */.F.reducer,
        [productCategory/* productCategoryApi.reducerPath */.X.reducerPath]: productCategory/* productCategoryApi.reducer */.X.reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(serviceApi/* serviceApi.middleware */.X.middleware, serviceDetailsApi/* serviceDetailsApi.middleware */.y.middleware, productApi/* productApi.middleware */.F.middleware, productCategory/* productCategoryApi.middleware */.X.middleware)
});
/* harmony default export */ const app_store = (store);

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: ./src/styles/modal-video.css
var modal_video = __webpack_require__(9161);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.min.css
var swiper_bundle_min = __webpack_require__(1631);
;// CONCATENATED MODULE: ./src/pages/_app.js
//= Packages



//= Common Styles





function App({ Component , pageProps  }) {
    const getLayout = Component.getLayout || ((page)=>page);
    return getLayout(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Geekfolio"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_namespaceObject.Provider, {
                store: app_store,
                children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "beforeInteractive",
                src: "/assets/js/plugins.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "beforeInteractive",
                src: "/assets/js/TweenMax.min.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "beforeInteractive",
                src: "/assets/js/charming.min.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "beforeInteractive",
                src: "/assets/js/countdown.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "beforeInteractive",
                src: "/assets/js/parallax.min.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "beforeInteractive",
                src: "/assets/js/ScrollTrigger.min.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "beforeInteractive",
                src: "/assets/js/gsap.min.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "beforeInteractive",
                src: "/assets/js/splitting.min.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "beforeInteractive",
                src: "/assets/js/isotope.pkgd.min.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "beforeInteractive",
                src: "/assets/js/imgReveal/imagesloaded.pkgd.min.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "beforeInteractive",
                src: "/assets/js/ScrollSmoother.min.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "beforeInteractive",
                src: "/showcase/assets/js/anime.min.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "lazyOnload",
                src: "/assets/js/imgReveal/demo.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "lazyOnload",
                src: "/assets/js/scripts.js"
            })
        ]
    }));
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 9161:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4335:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1844,6009,8760,1244], () => (__webpack_exec__(9783)));
module.exports = __webpack_exports__;

})();