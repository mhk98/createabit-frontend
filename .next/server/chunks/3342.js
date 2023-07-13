"use strict";
exports.id = 3342;
exports.ids = [3342];
exports.modules = {

/***/ 4761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ correctStylesheetsOrder)
/* harmony export */ });
function correctStylesheetsOrder({ preview , lightMode  }) {
    let previewStylesheet = document.querySelector(`link[href="/landing-preview/css/preview-style.css"]`);
    let globalDarkStylesheet = document.querySelector(`link[href="/dark/assets/css/style.css"]`);
    let globalLightStylesheet = document.querySelector(`link[href="/light/assets/css/style.css"]`);
    let pluginsDarkStylesheet = document.querySelector(`link[href="/dark/assets/css/plugins.css"]`);
    let pluginsLightStylesheet = document.querySelector(`link[href="/light/assets/css/plugins.css"]`);
    if (lightMode && !preview) {
        document.querySelector(`noscript`).before(pluginsLightStylesheet);
        document.querySelector(`noscript`).before(globalLightStylesheet);
        let pluginsStylesheets = document.querySelectorAll(`link[href="/light/assets/css/plugins.css"]`);
        if (pluginsStylesheets.length > 1) {
            pluginsStylesheets[0].remove();
        }
        let globalStylesheets = document.querySelectorAll(`link[href="/light/assets/css/style.css"]`);
        if (globalStylesheets.length > 1) {
            globalStylesheets[0].remove();
        }
    }
    if (!lightMode && !preview) {
        document.querySelector(`noscript`).before(pluginsDarkStylesheet);
        document.querySelector(`noscript`).before(globalDarkStylesheet);
        let pluginsStylesheets = document.querySelectorAll(`link[href="/dark/assets/css/plugins.css"]`);
        if (pluginsStylesheets.length > 1) {
            pluginsStylesheets[0].remove();
        }
        let globalStylesheets = document.querySelectorAll(`link[href="/dark/assets/css/style.css"]`);
        if (globalStylesheets.length > 1) {
            globalStylesheets[0].remove();
        }
    }
    if (preview && previewStylesheet) {
        document.head.append(previewStylesheet);
        if (globalLightStylesheet) globalLightStylesheet.remove();
        if (pluginsLightStylesheet) pluginsLightStylesheet.remove();
    } else if (!preview && previewStylesheet) {
        previewStylesheet.remove();
    }
}


/***/ }),

/***/ 8422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Cursor() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const link = document.querySelectorAll(".hover-this");
        const cursor = document.querySelector(".cursor");
        const animateit = function(e) {
            const hoverAnim = this.querySelector(".hover-anim");
            const { offsetX: x , offsetY: y  } = e;
            const { offsetWidth: width , offsetHeight: height  } = this;
            const move = 25;
            const xMove = x / width * (move * 2) - move;
            const yMove = y / height * (move * 2) - move;
            hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
            if (e.type === "mouseleave") hoverAnim.style.transform = "";
        };
        const editCursor = (e)=>{
            const { clientX: x , clientY: y  } = e;
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
        };
        link.forEach((b)=>b.addEventListener("mousemove", animateit));
        link.forEach((b)=>b.addEventListener("mouseleave", animateit));
        window.addEventListener("mousemove", editCursor);
        document.querySelectorAll("a, .cursor-pointer").forEach((el)=>{
            el.addEventListener("mousemove", ()=>{
                cursor.classList.add("cursor-active");
            });
            el.addEventListener("mouseleave", ()=>{
                cursor.classList.remove("cursor-active");
            });
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "cursor"
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cursor);


/***/ }),

/***/ 614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Common_ProgressScroll)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/common/scrollToTop.js
const scrollToTop = ()=>{
    let offset = 150;
    let progressWrap = document.querySelector(".progress-wrap");
    let progressPath = document.querySelector(".progress-wrap path");
    let pathLength = progressPath.getTotalLength();
    const updateProgress = ()=>{
        let scroll = window.pageYOffset;
        let height = document.documentElement.scrollHeight - window.innerHeight;
        let progress = pathLength - scroll * pathLength / height;
        progressPath.style.strokeDashoffset = progress;
    };
    if (progressWrap) {
        progressPath.style.transition = progressPath.style.WebkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        updateProgress();
        window.addEventListener("scroll", updateProgress);
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > offset) {
                progressWrap.classList.add("active-progress");
            } else {
                document.querySelector(".progress-wrap")?.classList?.remove("active-progress");
            }
        });
        progressWrap.addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return false;
        });
    }
};
/* harmony default export */ const common_scrollToTop = (scrollToTop);

;// CONCATENATED MODULE: ./src/components/Common/ProgressScroll.jsx


//= Scripts

const ProgressScroll = ()=>{
    (0,external_react_.useEffect)(()=>{
        common_scrollToTop();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "progress-wrap cursor-pointer",
        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
            className: "progress-circle svg-content",
            width: "100%",
            height: "100%",
            viewBox: "-1 -1 102 102",
            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            })
        })
    });
};
/* harmony default export */ const Common_ProgressScroll = (ProgressScroll);


/***/ })

};
;