"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _features_product_productApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/features/product/productApi */ \"./src/features/product/productApi.jsx\");\n/* harmony import */ var _features_product_productCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/features/product/productCategory */ \"./src/features/product/productCategory.jsx\");\n/* harmony import */ var _features_service_serviceApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/features/service/serviceApi */ \"./src/features/service/serviceApi.jsx\");\n/* harmony import */ var _features_service_serviceDetailsApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/features/service/serviceDetailsApi */ \"./src/features/service/serviceDetailsApi.jsx\");\n\n\n\n\n// import serviceDetailsSlice from \"@/features/serviceDetails/serviceDetailsSlice\";\n// import servicesSlice from \"@/features/services/servicesSlice\";\nconst { configureStore  } = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\nconst store = configureStore({\n    devTools: true,\n    reducer: {\n        [_features_service_serviceApi__WEBPACK_IMPORTED_MODULE_2__.serviceApi.reducerPath]: _features_service_serviceApi__WEBPACK_IMPORTED_MODULE_2__.serviceApi.reducer,\n        [_features_service_serviceDetailsApi__WEBPACK_IMPORTED_MODULE_3__.serviceDetailsApi.reducerPath]: _features_service_serviceDetailsApi__WEBPACK_IMPORTED_MODULE_3__.serviceDetailsApi.reducer,\n        [_features_product_productApi__WEBPACK_IMPORTED_MODULE_0__.productApi.reducerPath]: _features_product_productApi__WEBPACK_IMPORTED_MODULE_0__.productApi.reducer,\n        [_features_product_productCategory__WEBPACK_IMPORTED_MODULE_1__.productCategoryApi.reducerPath]: _features_product_productCategory__WEBPACK_IMPORTED_MODULE_1__.productCategoryApi.reducer\n    },\n    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_features_service_serviceApi__WEBPACK_IMPORTED_MODULE_2__.serviceApi.middleware, _features_service_serviceDetailsApi__WEBPACK_IMPORTED_MODULE_3__.serviceDetailsApi.middleware, _features_product_productApi__WEBPACK_IMPORTED_MODULE_0__.productApi.middleware, _features_product_productCategory__WEBPACK_IMPORTED_MODULE_1__.productCategoryApi.middleware)\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJEO0FBQ2E7QUFDYjtBQUNjO0FBQ3pFLG1GQUFtRjtBQUNuRixpRUFBaUU7QUFFakUsTUFBTSxFQUFFSSxlQUFjLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsbUZBQWtCO0FBRXJELE1BQU1DLFFBQVFGLGVBQWU7SUFDM0JHLFVBQVUsSUFBSTtJQUNkQyxTQUFTO1FBQ1AsQ0FBQ04sZ0ZBQXNCLENBQUMsRUFBRUEsNEVBQWtCO1FBQzVDLENBQUNDLDhGQUE2QixDQUFDLEVBQUVBLDBGQUF5QjtRQUMxRCxDQUFDSCxnRkFBc0IsQ0FBQyxFQUFFQSw0RUFBa0I7UUFDNUMsQ0FBQ0MsNkZBQThCLENBQUMsRUFBRUEseUZBQTBCO0lBRzlEO0lBRUEsK0VBQStFO0lBRS9FUyxZQUFZLENBQUNDLHVCQUNYQSx1QkFBdUJDLE1BQU0sQ0FDM0JWLCtFQUFxQixFQUNyQkMsNkZBQTRCLEVBQzVCSCwrRUFBcUIsRUFDckJDLDRGQUE2QjtBQUVuQztBQUVBLCtEQUFlSyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc3RvcmUuanM/NThjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9kdWN0QXBpIH0gZnJvbSBcIkAvZmVhdHVyZXMvcHJvZHVjdC9wcm9kdWN0QXBpXCI7XHJcbmltcG9ydCB7IHByb2R1Y3RDYXRlZ29yeUFwaSB9IGZyb20gXCJAL2ZlYXR1cmVzL3Byb2R1Y3QvcHJvZHVjdENhdGVnb3J5XCI7XHJcbmltcG9ydCB7IHNlcnZpY2VBcGkgfSBmcm9tIFwiQC9mZWF0dXJlcy9zZXJ2aWNlL3NlcnZpY2VBcGlcIjtcclxuaW1wb3J0IHsgc2VydmljZURldGFpbHNBcGkgfSBmcm9tIFwiQC9mZWF0dXJlcy9zZXJ2aWNlL3NlcnZpY2VEZXRhaWxzQXBpXCI7XHJcbi8vIGltcG9ydCBzZXJ2aWNlRGV0YWlsc1NsaWNlIGZyb20gXCJAL2ZlYXR1cmVzL3NlcnZpY2VEZXRhaWxzL3NlcnZpY2VEZXRhaWxzU2xpY2VcIjtcclxuLy8gaW1wb3J0IHNlcnZpY2VzU2xpY2UgZnJvbSBcIkAvZmVhdHVyZXMvc2VydmljZXMvc2VydmljZXNTbGljZVwiO1xyXG5cclxuY29uc3QgeyBjb25maWd1cmVTdG9yZSB9ID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICBkZXZUb29sczogdHJ1ZSxcclxuICByZWR1Y2VyOiB7XHJcbiAgICBbc2VydmljZUFwaS5yZWR1Y2VyUGF0aF06IHNlcnZpY2VBcGkucmVkdWNlcixcclxuICAgIFtzZXJ2aWNlRGV0YWlsc0FwaS5yZWR1Y2VyUGF0aF06IHNlcnZpY2VEZXRhaWxzQXBpLnJlZHVjZXIsXHJcbiAgICBbcHJvZHVjdEFwaS5yZWR1Y2VyUGF0aF06IHByb2R1Y3RBcGkucmVkdWNlcixcclxuICAgIFtwcm9kdWN0Q2F0ZWdvcnlBcGkucmVkdWNlclBhdGhdOiBwcm9kdWN0Q2F0ZWdvcnlBcGkucmVkdWNlcixcclxuICAgIC8vIHNlcnZpY2VzOiBzZXJ2aWNlc1NsaWNlLFxyXG4gICAgLy8gc2VydmljZURldGFpbHM6IHNlcnZpY2VEZXRhaWxzU2xpY2UsXHJcbiAgfSxcclxuXHJcbiAgLy8gbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PiBnZXREZWZhdWx0TWlkZGxld2FyZSgpLmNvbmNhdChsb2dnZXIpLFxyXG5cclxuICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XHJcbiAgICBnZXREZWZhdWx0TWlkZGxld2FyZSgpLmNvbmNhdChcclxuICAgICAgc2VydmljZUFwaS5taWRkbGV3YXJlLFxyXG4gICAgICBzZXJ2aWNlRGV0YWlsc0FwaS5taWRkbGV3YXJlLFxyXG4gICAgICBwcm9kdWN0QXBpLm1pZGRsZXdhcmUsXHJcbiAgICAgIHByb2R1Y3RDYXRlZ29yeUFwaS5taWRkbGV3YXJlXHJcbiAgICApLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iXSwibmFtZXMiOlsicHJvZHVjdEFwaSIsInByb2R1Y3RDYXRlZ29yeUFwaSIsInNlcnZpY2VBcGkiLCJzZXJ2aWNlRGV0YWlsc0FwaSIsImNvbmZpZ3VyZVN0b3JlIiwicmVxdWlyZSIsInN0b3JlIiwiZGV2VG9vbHMiLCJyZWR1Y2VyIiwicmVkdWNlclBhdGgiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/store.js\n"));

/***/ })

});