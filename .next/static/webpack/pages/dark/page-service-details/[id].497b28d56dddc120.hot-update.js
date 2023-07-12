"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dark/page-service-details/[id]",{

/***/ "./src/pages/dark/page-service-details/[id].jsx":
/*!******************************************************!*\
  !*** ./src/pages/dark/page-service-details/[id].jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Common_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Common/Loader */ \"./src/components/Common/Loader.jsx\");\n/* harmony import */ var _features_service_serviceDetailsApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/features/service/serviceDetailsApi */ \"./src/features/service/serviceDetailsApi.jsx\");\n/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layouts/default */ \"./src/layouts/default.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _dark_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dark-navbar */ \"./src/pages/dark/dark-navbar/index.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PageServiceDetails() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    // Get the query parameter from the URL\n    const { id  } = router.query;\n    // console.log(\"keyword\", id);\n    const { data , isLoading , isError , isSuccess , error  } = (0,_features_service_serviceDetailsApi__WEBPACK_IMPORTED_MODULE_2__.useGetServiceDetailsQuery)(id);\n    const serviceDetails = data === null || data === void 0 ? void 0 : data.data;\n    console.log(\"serviceDetails\", data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Geekfolio - Services\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dark_navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: \"Oh no, there was an error\"\n                }, void 0, false) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: \"Loading...\"\n                }, void 0, false) : data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-20\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 items-start my-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"http://localhost:5000/\".concat(serviceDetails === null || serviceDetails === void 0 ? void 0 : serviceDetails.image),\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-4xl\",\n                                            children: serviceDetails === null || serviceDetails === void 0 ? void 0 : serviceDetails.title\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mt-8\",\n                                            children: serviceDetails === null || serviceDetails === void 0 ? void 0 : serviceDetails.text1\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, this),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 65\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: serviceDetails === null || serviceDetails === void 0 ? void 0 : serviceDetails.text2\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"py-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-4xl text-center mb-16\",\n                                    children: serviceDetails === null || serviceDetails === void 0 ? void 0 : serviceDetails.question\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 mx-8 gap-20\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"shadow-lg p-4 rounded-lg\",\n                                                    children: serviceDetails === null || serviceDetails === void 0 ? void 0 : serviceDetails.shortText1\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"shadow-lg p-4 rounded-lg\",\n                                                    children: serviceDetails === null || serviceDetails === void 0 ? void 0 : serviceDetails.shortText2\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 mx-8 gap-20 mt-6\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"shadow-lg p-4 rounded-lg\",\n                                                    children: serviceDetails === null || serviceDetails === void 0 ? void 0 : serviceDetails.shortText3\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"shadow-lg p-4 rounded-lg\",\n                                                    children: serviceDetails === null || serviceDetails === void 0 ? void 0 : serviceDetails.shortText4\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, this) : null\n            }, void 0, false, {\n                fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PageServiceDetails, \"bVtj1IBv3O66cGQ/DreaW7FKeZc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _features_service_serviceDetailsApi__WEBPACK_IMPORTED_MODULE_2__.useGetServiceDetailsQuery\n    ];\n});\n_c = PageServiceDetails;\nPageServiceDetails.getLayout = (page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_default__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: page\n    }, void 0, false, {\n        fileName: \"F:\\\\Office project\\\\React Creative Agency Website\\\\createabit-frontend\\\\src\\\\pages\\\\dark\\\\page-service-details\\\\[id].jsx\",\n        lineNumber: 77,\n        columnNumber: 42\n    }, undefined);\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageServiceDetails);\nvar _c;\n$RefreshReg$(_c, \"PageServiceDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFyay9wYWdlLXNlcnZpY2UtZGV0YWlscy9baWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaUM7QUFDMUM7QUFDVjtBQUNXO0FBQ0E7QUFFeEMsU0FBU00scUJBQXFCOztJQUM1QixNQUFNQyxTQUFTSCxzREFBU0E7SUFFeEIsdUNBQXVDO0lBQ3ZDLE1BQU0sRUFBRUksR0FBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDM0IsOEJBQThCO0lBQzlCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxVQUFTLEVBQUVDLFFBQU8sRUFBRUMsVUFBUyxFQUFFQyxNQUFLLEVBQUUsR0FDbERiLDhGQUF5QkEsQ0FBQ087SUFDNUIsTUFBTU8saUJBQWlCTCxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1BLElBQUk7SUFDakNNLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JQO0lBQzlCLHFCQUNFOzswQkFDRSw4REFBQ1Asa0RBQUlBOzBCQUNILDRFQUFDZTs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNsQixpRUFBTUE7Ozs7OzBCQUNQLDhEQUFDSyxvREFBVUE7Ozs7OzBCQUVYLDhEQUFDYzswQkFDRUwsc0JBQ0M7OEJBQUU7b0NBQ0FILDBCQUNGOzhCQUFFO29DQUNBRCxxQkFDRiw4REFBQ1U7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEOzhDQUNDLDRFQUFDRTt3Q0FDQ0MsS0FBSyx5QkFBK0MsT0FBdEJSLDJCQUFBQSw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZ0JTLEtBQUs7d0NBQ25EQyxLQUFJOzs7Ozs7Ozs7Ozs4Q0FHUiw4REFBQ0w7O3NEQUNDLDhEQUFDTTs0Q0FBR0wsV0FBVTtzREFBWU4sMkJBQUFBLDRCQUFBQSxLQUFBQSxJQUFBQSxlQUFnQkcsS0FBSzs7Ozs7O3NEQUMvQyw4REFBQ1M7NENBQUVOLFdBQVU7c0RBQVFOLDJCQUFBQSw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZ0JhLEtBQUs7Ozs7Ozt3Q0FBSztzREFBQyw4REFBQ0M7Ozs7O3NEQUNqRCw4REFBQ0Y7c0RBQUdaLDJCQUFBQSw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZ0JlLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJN0IsOERBQUNWOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1U7b0NBQUdWLFdBQVU7OENBQ1hOLDJCQUFBQSw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZ0JpQixRQUFROzs7Ozs7OENBRTNCLDhEQUFDWjs7c0RBQ0MsOERBQUNBOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ007b0RBQUVOLFdBQVU7OERBQ1ZOLDJCQUFBQSw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZ0JrQixVQUFVOzs7Ozs7OERBRTdCLDhEQUFDTjtvREFBRU4sV0FBVTs4REFDVk4sMkJBQUFBLDRCQUFBQSxLQUFBQSxJQUFBQSxlQUFnQm1CLFVBQVU7Ozs7Ozs7Ozs7OztzREFHL0IsOERBQUNkOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ007b0RBQUVOLFdBQVU7OERBQ1ZOLDJCQUFBQSw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZ0JvQixVQUFVOzs7Ozs7OERBRTdCLDhEQUFDUjtvREFBRU4sV0FBVTs4REFDVk4sMkJBQUFBLDRCQUFBQSxLQUFBQSxJQUFBQSxlQUFnQnFCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQU1uQyxJQUFJOzs7Ozs7OztBQUloQjtHQW5FUzlCOztRQUNRRixrREFBU0E7UUFNdEJILDBGQUF5QkE7OztLQVBwQks7QUFxRVRBLG1CQUFtQitCLFNBQVMsR0FBRyxDQUFDQyxxQkFBUyw4REFBQ3BDLHdEQUFNQTtrQkFBRW9DOzs7Ozs7QUFFbEQsK0RBQWVoQyxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RhcmsvcGFnZS1zZXJ2aWNlLWRldGFpbHMvW2lkXS5qc3g/M2JhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvQ29tbW9uL0xvYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VHZXRTZXJ2aWNlRGV0YWlsc1F1ZXJ5IH0gZnJvbSBcIkAvZmVhdHVyZXMvc2VydmljZS9zZXJ2aWNlRGV0YWlsc0FwaVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2xheW91dHMvZGVmYXVsdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgRGFya05hdmJhciBmcm9tIFwiLi4vZGFyay1uYXZiYXJcIjtcclxuXHJcbmZ1bmN0aW9uIFBhZ2VTZXJ2aWNlRGV0YWlscygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gR2V0IHRoZSBxdWVyeSBwYXJhbWV0ZXIgZnJvbSB0aGUgVVJMXHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIC8vIGNvbnNvbGUubG9nKFwia2V5d29yZFwiLCBpZCk7XHJcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzRXJyb3IsIGlzU3VjY2VzcywgZXJyb3IgfSA9XHJcbiAgICB1c2VHZXRTZXJ2aWNlRGV0YWlsc1F1ZXJ5KGlkKTtcclxuICBjb25zdCBzZXJ2aWNlRGV0YWlscyA9IGRhdGE/LmRhdGE7XHJcbiAgY29uc29sZS5sb2coXCJzZXJ2aWNlRGV0YWlsc1wiLCBkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkdlZWtmb2xpbyAtIFNlcnZpY2VzPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TG9hZGVyIC8+XHJcbiAgICAgIDxEYXJrTmF2YmFyPjwvRGFya05hdmJhcj5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIHtlcnJvciA/IChcclxuICAgICAgICAgIDw+T2ggbm8sIHRoZXJlIHdhcyBhbiBlcnJvcjwvPlxyXG4gICAgICAgICkgOiBpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8PkxvYWRpbmcuLi48Lz5cclxuICAgICAgICApIDogZGF0YSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMjBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0yIHNtOmdyaWQtY29scy0xIGdyaWQtY29scy0xIGdhcC00IGl0ZW1zLXN0YXJ0IG15LTE2XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDo1MDAwLyR7c2VydmljZURldGFpbHM/LmltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGxcIj57c2VydmljZURldGFpbHM/LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC04XCI+e3NlcnZpY2VEZXRhaWxzPy50ZXh0MX08L3A+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPHA+e3NlcnZpY2VEZXRhaWxzPy50ZXh0Mn08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMlwiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LWNlbnRlciBtYi0xNlwiPlxyXG4gICAgICAgICAgICAgICAge3NlcnZpY2VEZXRhaWxzPy5xdWVzdGlvbn1cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTEgZ3JpZC1jb2xzLTEgbXgtOCBnYXAtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2hhZG93LWxnIHAtNCByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VEZXRhaWxzPy5zaG9ydFRleHQxfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNoYWRvdy1sZyBwLTQgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlRGV0YWlscz8uc2hvcnRUZXh0Mn1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTEgZ3JpZC1jb2xzLTEgbXgtOCBnYXAtMjAgbXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaGFkb3ctbGcgcC00IHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2VydmljZURldGFpbHM/LnNob3J0VGV4dDN9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2hhZG93LWxnIHAtNCByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VEZXRhaWxzPy5zaG9ydFRleHQ0fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuUGFnZVNlcnZpY2VEZXRhaWxzLmdldExheW91dCA9IChwYWdlKSA9PiA8TGF5b3V0PntwYWdlfTwvTGF5b3V0PjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VTZXJ2aWNlRGV0YWlscztcclxuIl0sIm5hbWVzIjpbIkxvYWRlciIsInVzZUdldFNlcnZpY2VEZXRhaWxzUXVlcnkiLCJMYXlvdXQiLCJIZWFkIiwidXNlUm91dGVyIiwiRGFya05hdmJhciIsIlBhZ2VTZXJ2aWNlRGV0YWlscyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkYXRhIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsImlzU3VjY2VzcyIsImVycm9yIiwic2VydmljZURldGFpbHMiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJoMSIsInAiLCJ0ZXh0MSIsImJyIiwidGV4dDIiLCJoMiIsInF1ZXN0aW9uIiwic2hvcnRUZXh0MSIsInNob3J0VGV4dDIiLCJzaG9ydFRleHQzIiwic2hvcnRUZXh0NCIsImdldExheW91dCIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dark/page-service-details/[id].jsx\n"));

/***/ })

});