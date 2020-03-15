module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/About.js":
/*!*****************************!*\
  !*** ./components/About.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_ABOUT_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/ABOUT.png */ "./public/static/ABOUT.png");
/* harmony import */ var _public_static_ABOUT_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_ABOUT_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_paper_plane_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/static/paper-plane.svg */ "./public/static/paper-plane.svg");
/* harmony import */ var _public_static_paper_plane_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_paper_plane_svg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/About.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const about = () => __jsx("div", {
  className: "jsx-1187898123" + " " + "about container-fluid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "ABOUT"), __jsx("div", {
  className: "jsx-1187898123" + " " + "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Hi, saya ", __jsx("em", {
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Bayu Dirgantara"), ", FullStack Web Developer - Pekanbaru"), __jsx("p", {
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Saya sangat tertarik dengan web developer dan yang terkait ", __jsx("br", {
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), "dengan ", __jsx("em", {
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "\u201Cpemograman\u201D")), __jsx("p", {
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Saya belajar pemograman sebagai FullStack Web Developer ", __jsx("br", {
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), "secara ", __jsx("em", {
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "\u201Cotodidak\u201D")), __jsx("p", {
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Saya siap implementasi project with ", __jsx("em", {
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "\u201Cwonderful people\u201D")), __jsx("button", {
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("img", {
  src: _public_static_paper_plane_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: _public_static_paper_plane_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("font", {
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Contact me"))), __jsx("img", {
  src: _public_static_ABOUT_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: _public_static_ABOUT_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  className: "jsx-1187898123",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1187898123",
  __self: undefined
}, ".about.jsx-1187898123{margin-top:2rem;text-align:center;}h2.jsx-1187898123{font-family:'Alice',serif;}.container.jsx-1187898123{margin-top:1.5rem;display:grid;grid-template-columns:repeat(2,45%);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;grid-column-gap:50px;padding-left:7.5rem;}span.jsx-1187898123{text-align:right;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}button.jsx-1187898123 img.jsx-1187898123{width:20px;height:20px;padding-right:6px;}button.jsx-1187898123{box-shadow:0px 5px 10px -1px #ccc;width:140px;height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border:1px solid #000000;padding:4px 1rem;border-radius:10px;margin-left:auto;background-color:#ffffff;margin-top:15px;outline:none;}button.jsx-1187898123:hover{background-color:#eeeeee;cursor:pointer;}button.jsx-1187898123 p.jsx-1187898123{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0Fib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCa0IsQUFHNkIsQUFJVSxBQUdSLEFBUUQsQUFJTixBQUt1QixBQWFULEFBSWhCLFNBQ2IsRUF0QmdCLEtBbkJNLENBZUEsQ0FSTCxLQWFLLEVBaUJILENBakNuQixLQUl3QyxHQVB4QyxBQXVCZ0IsTUFjaEIsQ0FqQkEsS0FJZ0IsWUFDQyxTQWpCVSxxQkFPM0IsNENBVzZCLHlCQUNSLFNBbEJJLFFBbUJGLGFBbEJDLE1BbUJILGNBbEJyQixHQW1CNkIseUJBQ1QsZ0JBQ0gsYUFDakIiLCJmaWxlIjoiL2hvbWUvYmF5dWRpcmdhbnRhcmEvS09QSV9ESU5HSU4vTVlXRUJTSVRFL2NvbXBvbmVudHMvQWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1nIGZyb20gJy4uL3B1YmxpYy9zdGF0aWMvQUJPVVQucG5nJztcbmltcG9ydCBpbWdCdG4gZnJvbSAnLi4vcHVibGljL3N0YXRpYy9wYXBlci1wbGFuZS5zdmcnO1xuXG5jb25zdCBhYm91dCA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhYm91dCBjb250YWluZXItZmx1aWRcIj5cbiAgICAgIDxoMj5BQk9VVDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8cD5IaSwgc2F5YSA8ZW0+QmF5dSBEaXJnYW50YXJhPC9lbT4sIEZ1bGxTdGFjayBXZWIgRGV2ZWxvcGVyIC0gUGVrYW5iYXJ1PC9wPlxuICAgICAgICAgICAgICA8cD5TYXlhIHNhbmdhdCB0ZXJ0YXJpayBkZW5nYW4gd2ViIGRldmVsb3BlciBkYW4geWFuZyB0ZXJrYWl0IDxici8+ZGVuZ2FuIDxlbT7igJxwZW1vZ3JhbWFu4oCdPC9lbT48L3A+XG4gICAgICAgICAgICAgIDxwPlNheWEgYmVsYWphciBwZW1vZ3JhbWFuIHNlYmFnYWkgRnVsbFN0YWNrIFdlYiBEZXZlbG9wZXIgPGJyLz5zZWNhcmEgPGVtPuKAnG90b2RpZGFr4oCdPC9lbT48L3A+XG4gICAgICAgICAgICAgIDxwPlNheWEgc2lhcCBpbXBsZW1lbnRhc2kgcHJvamVjdCB3aXRoIDxlbT7igJx3b25kZXJmdWwgcGVvcGxl4oCdPC9lbT48L3A+XG4gICAgICAgICAgICAgIDxidXR0b24+PGltZyBzcmM9e2ltZ0J0bn0gYWx0PXtpbWdCdG59Lz48Zm9udD5Db250YWN0IG1lPC9mb250PjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PXtpbWd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmFib3V0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBbGljZScsc2VyaWY7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiw0NSUpO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDcuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAtMXB4ICNjY2M7XG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7Il19 */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/About.js */"));

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_FOOTER_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/FOOTER.png */ "./public/static/FOOTER.png");
/* harmony import */ var _public_static_FOOTER_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_FOOTER_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_twiiter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/static/twiiter.svg */ "./public/static/twiiter.svg");
/* harmony import */ var _public_static_twiiter_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_twiiter_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_facebook_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/static/facebook.svg */ "./public/static/facebook.svg");
/* harmony import */ var _public_static_facebook_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_facebook_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_static_instagram_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/static/instagram.svg */ "./public/static/instagram.svg");
/* harmony import */ var _public_static_instagram_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_instagram_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_static_github_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/static/github.svg */ "./public/static/github.svg");
/* harmony import */ var _public_static_github_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_github_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Form */ "./components/Form.js");
var _jsxFileName = "/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const footer = () => {
  return __jsx("footer", {
    className: "jsx-1053893208",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-1053893208",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Contact Me"), __jsx("div", {
    className: "jsx-1053893208" + " " + "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1053893208" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1053893208" + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("p", {
    className: "jsx-1053893208",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Social Media"), __jsx("div", {
    className: "jsx-1053893208" + " " + "d-flex flex-row justify-content-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1053893208" + " " + "p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("a", {
    target: "blank",
    href: "https://twitter.com/_badirr",
    className: "jsx-1053893208",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_twiiter_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: _public_static_twiiter_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "jsx-1053893208",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-1053893208" + " " + "p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    target: "blank",
    href: "https://www.facebook.com/bayu275",
    className: "jsx-1053893208",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_facebook_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: _public_static_facebook_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "jsx-1053893208",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-1053893208" + " " + "p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("a", {
    target: "blank",
    href: "https://www.instagram.com/baydirgan",
    className: "jsx-1053893208",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_instagram_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: _public_static_instagram_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: "jsx-1053893208",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-1053893208" + " " + "p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("a", {
    target: "blank",
    href: "https://github.com/bayu275",
    className: "jsx-1053893208",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_github_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: _public_static_github_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "jsx-1053893208",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "jsx-1053893208" + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("iframe", {
    title: "address",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127669.0495089475!2d101.37113474552513!3d0.513962478911432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab80690ee7b1%3A0x94dde92c3823dbe4!2sPekanbaru%2C%20Kota%20Pekanbaru%2C%20Riau!5e0!3m2!1sid!2sid!4v1583780728791!5m2!1sid!2sid",
    className: "jsx-1053893208",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })))), __jsx("div", {
    className: "jsx-1053893208" + " " + "subfooter container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1053893208" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1053893208" + " " + "col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-1053893208",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "\xA9 Bayu Dirgantara 2020.")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1053893208",
    __self: undefined
  }, "footer.jsx-1053893208{margin-top:3.5rem;}footer.jsx-1053893208>h2.jsx-1053893208{text-align:center;font-family:'Alice',serif;}.p-2.jsx-1053893208 a.jsx-1053893208 img.jsx-1053893208{width:40px;height:40px;margin:10px 2px;}.d-flex.jsx-1053893208{margin-left:15%;}.col.jsx-1053893208 p.jsx-1053893208{margin:10px 0 0 17%;font-family:'Bellota',cursive;color:#3a84df;font-weight:bold;}.col.jsx-1053893208>iframe.jsx-1053893208{width:100%;height:95%;border:2px solid #55acee;}.col.jsx-1053893208{margin-top:1.5rem;width:100%;}.subfooter.jsx-1053893208{background-color:#fafafa;border-top:1px solid #f3f3f3;border-bottom:1px solid #f3f3f3;padding:40px 0;}.subfooter.jsx-1053893208 p.jsx-1053893208{font-size:15px;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRG9CLEFBR21DLEFBR0EsQUFJUCxBQUtLLEFBR0ksQUFNVCxBQUtPLEFBSU8sQUFNVixXQTVCSCxBQWNELElBZUYsQ0F4QmIsRUFaQSxBQUc4QixBQXVCZixFQVhvQixFQU9OLENBZFQsQ0E2QkUsQ0FQVyxJQUhqQyxVQWxCQSxHQTZCQSxFQWxDQSxHQW1CQSxHQVBrQixJQWVrQixVQWRmLGlCQUNyQixLQWNtQixlQUNuQiIsImZpbGUiOiIvaG9tZS9iYXl1ZGlyZ2FudGFyYS9LT1BJX0RJTkdJTi9NWVdFQlNJVEUvY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZm9vdGVySW1nIGZyb20gJy4uL3B1YmxpYy9zdGF0aWMvRk9PVEVSLnBuZyc7XG5pbXBvcnQgdHdJbWcgZnJvbSAnLi4vcHVibGljL3N0YXRpYy90d2lpdGVyLnN2ZydcbmltcG9ydCBmYkltZyBmcm9tICcuLi9wdWJsaWMvc3RhdGljL2ZhY2Vib29rLnN2ZydcbmltcG9ydCBpZ0ltZyBmcm9tICcuLi9wdWJsaWMvc3RhdGljL2luc3RhZ3JhbS5zdmcnXG5pbXBvcnQgZ2l0SW1nIGZyb20gJy4uL3B1YmxpYy9zdGF0aWMvZ2l0aHViLnN2ZydcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybSc7XG5cbmNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGgyPkNvbnRhY3QgTWU8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U29jaWFsIE1lZGlhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9fYmFkaXJyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dHdJbWd9IGFsdD17dHdJbWd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vYmF5dTI3NVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZiSW1nfSBhbHQ9e2ZiSW1nfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9iYXlkaXJnYW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpZ0ltZ30gYWx0PXtpZ0ltZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cImJsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9iYXl1Mjc1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z2l0SW1nfSBhbHQ9e2dpdEltZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSB0aXRsZT1cImFkZHJlc3NcIiBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxMjc2NjkuMDQ5NTA4OTQ3NSEyZDEwMS4zNzExMzQ3NDU1MjUxMyEzZDAuNTEzOTYyNDc4OTExNDMyITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgzMWQ1YWI4MDY5MGVlN2IxJTNBMHg5NGRkZTkyYzM4MjNkYmU0ITJzUGVrYW5iYXJ1JTJDJTIwS290YSUyMFBla2FuYmFydSUyQyUyMFJpYXUhNWUwITNtMiExc2lkITJzaWQhNHYxNTgzNzgwNzI4NzkxITVtMiExc2lkITJzaWRcIj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViZm9vdGVyIGNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4mY29weTsgQmF5dSBEaXJnYW50YXJhIDIwMjAuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvb3RlciA+IGgye1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FsaWNlJyxzZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wLTIgYSAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kLWZsZXgge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMTclO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmVsbG90YScsIGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzYTg0ZGY7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sID4gaWZyYW1lIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDk1JTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNTVhY2VlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1YmZvb3RlcntcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdWJmb290ZXIgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7Il19 */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (footer);

/***/ }),

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Form.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Form = () => {
  const fullname = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');
  const email = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');
  const textarea = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');
  const button = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');

  const handlePress = e => {
    if (e.key === 'Enter') {
      if (e.target == fullname.current) {
        console.log('sama');
      } else {
        console.log('tdk');
      }
    }
  };

  const handleClick = e => {
    e.preventDefault();
    alert('hi');
  };

  return __jsx("div", {
    className: "jsx-3067412940" + " " + "interested",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("form", {
    className: "jsx-3067412940",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-3067412940",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "CONTACT US"), __jsx("div", {
    className: "jsx-3067412940" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    placeholder: "Your Name",
    className: "jsx-3067412940" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-3067412940" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("input", {
    type: "email",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "Enter email",
    className: "jsx-3067412940" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-3067412940" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("textarea", {
    ref: textarea,
    name: "",
    id: "",
    placeholder: "Your Message",
    onKeyPress: handlePress,
    className: "jsx-3067412940",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), __jsx("button", {
    type: "submit",
    className: "jsx-3067412940" + " " + "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Submit")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3067412940",
    __self: undefined
  }, "form.jsx-3067412940{width:20rem;margin:0 auto;border:1px solid #A9A7A7;padding:2rem 3rem;border-radius:20px;font-family:'Open Sans',serif;}form.jsx-3067412940>p.jsx-3067412940{font-family:'Alice',serif;font-size:1.3rem;margin:0;text-align:left;}input.jsx-3067412940,textarea.jsx-3067412940{border-radius:20px;border:1px solid #A9A7A7;padding:0 1rem;outline:none;}textarea.jsx-3067412940{min-height:8rem;padding-top:1rem;padding-bottom:1rem;width:100%;margin-bottom:0 !important;}input.jsx-3067412940,textarea.jsx-3067412940,button.jsx-3067412940{margin-bottom:1rem;}button.jsx-3067412940{outline:none;width:10rem;height:2.5rem;border-radius:20px;border:1px solid #e34646;background-color:#e34646;color:#fff;font-size:1rem;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NvQixBQUc2QixBQVFjLEFBTVAsQUFNSCxBQU9HLEFBR04sWUE3QkMsQ0E4QkYsR0FWSyxHQU5RLEFBYTdCLE1BSWtCLENBOUJXLEFBT1IsT0FhRyxNQVdELElBdkJWLENBTU0sT0FiRyxDQVFGLENBWUwsS0FXYyxDQWpCWixLQU9jLElBWi9CLENBUnVCLEdBY3ZCLFdBaUI2QixLQTlCSyxHQW9CbEMsaUJBV2UsVUE5QmYsQ0ErQm1CLGVBQ04sU0FFYiIsImZpbGUiOiIvaG9tZS9iYXl1ZGlyZ2FudGFyYS9LT1BJX0RJTkdJTi9NWVdFQlNJVEUvY29tcG9uZW50cy9Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuY29uc3QgRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmdWxsbmFtZSA9IHVzZVJlZignJyk7ICAgICAgIFxuICAgIGNvbnN0IGVtYWlsID0gdXNlUmVmKCcnKTtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHVzZVJlZignJyk7XG4gICAgY29uc3QgYnV0dG9uID0gdXNlUmVmKCcnKVxuICAgIGNvbnN0IGhhbmRsZVByZXNzID0gKGUpID0+IHtcbiAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICAgICAgaWYoZS50YXJnZXQgPT0gZnVsbG5hbWUuY3VycmVudCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhbWEnKVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZGsnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhbGVydCgnaGknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZXJlc3RlZFwiPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxwPkNPTlRBQ1QgVVM8L3A+IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRhcmVhfSBuYW1lPVwiXCIgaWQ9XCJcIiBwbGFjZWhvbGRlcj1cIllvdXIgTWVzc2FnZVwiIG9uS2V5UHJlc3M9e2hhbmRsZVByZXNzfS8+XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBmb3JtIHsgIFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQTlBN0E3O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gM3JlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJyxzZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcm0gPiBwe1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWxpY2UnLHNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQgLCB0ZXh0YXJlYXtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNBOUE3QTc7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogOHJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQgLCB0ZXh0YXJlYSAsIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTM0NjQ2O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzQ2NDY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pfVxuZXhwb3J0IGRlZmF1bHQgRm9ybTsgICAiXX0= */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Form.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/Jumbotron.js":
/*!*********************************!*\
  !*** ./components/Jumbotron.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Jumbotron; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_JUMBOTRON_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/JUMBOTRON.png */ "./public/static/JUMBOTRON.png");
/* harmony import */ var _public_static_JUMBOTRON_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_JUMBOTRON_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_SAYA_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/static/SAYA.jpg */ "./public/static/SAYA.jpg");
/* harmony import */ var _public_static_SAYA_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_SAYA_jpg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Jumbotron.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Jumbotron() {
  return __jsx("main", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1523453371", [_public_static_JUMBOTRON_png__WEBPACK_IMPORTED_MODULE_2___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1523453371", [_public_static_JUMBOTRON_png__WEBPACK_IMPORTED_MODULE_2___default.a]]]) + " " + "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    src: _public_static_SAYA_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: _public_static_SAYA_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1523453371", [_public_static_JUMBOTRON_png__WEBPACK_IMPORTED_MODULE_2___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1523453371", [_public_static_JUMBOTRON_png__WEBPACK_IMPORTED_MODULE_2___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Bayu Dirgantara"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1523453371", [_public_static_JUMBOTRON_png__WEBPACK_IMPORTED_MODULE_2___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "FullStack Web Developer"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1523453371", [_public_static_JUMBOTRON_png__WEBPACK_IMPORTED_MODULE_2___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "bayuusetiawan86@gmail.com")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1523453371",
    dynamic: [_public_static_JUMBOTRON_png__WEBPACK_IMPORTED_MODULE_2___default.a],
    __self: this
  }, `main.__jsx-style-dynamic-selector{background:url(${_public_static_JUMBOTRON_png__WEBPACK_IMPORTED_MODULE_2___default.a});min-height:455px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.profile.__jsx-style-dynamic-selector{text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;color:#EEEEEE;}h1.__jsx-style-dynamic-selector{color:#E0DDDD;margin:0;margin-bottom:14px;font-family:'Alice',serif;}p.__jsx-style-dynamic-selector{margin:0;}img.__jsx-style-dynamic-selector{width:8rem;height:8rem;border-radius:100%;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0p1bWJvdHJvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZd0IsQUFHa0UsQUFNM0IsQUFNSixBQU9uQixBQUVnQixTQUZmLEVBR2dCLEdBVEgsSUFOUyxLQU9DLEFBU0EsbUJBUk8sQUFTOUIsR0F2QnFCLGlCQUNKLE1BY2pCLHFCQVJ5QiwrQ0FMRSw2QkFNVCxjQUNsQix3REFOQSIsImZpbGUiOiIvaG9tZS9iYXl1ZGlyZ2FudGFyYS9LT1BJX0RJTkdJTi9NWVdFQlNJVEUvY29tcG9uZW50cy9KdW1ib3Ryb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQganVtYm90cm9uIGZyb20gJy4uL3B1YmxpYy9zdGF0aWMvSlVNQk9UUk9OLnBuZydcbmltcG9ydCBteWltYWdlIGZyb20gJy4uL3B1YmxpYy9zdGF0aWMvU0FZQS5qcGcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEp1bWJvdHJvbigpe1xuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e215aW1hZ2V9IGFsdD17bXlpbWFnZX0vPlxuICAgICAgICAgICAgICAgICAgICA8aDE+QmF5dSBEaXJnYW50YXJhPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHA+RnVsbFN0YWNrIFdlYiBEZXZlbG9wZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPmJheXV1c2V0aWF3YW44NkBnbWFpbC5jb208L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke2p1bWJvdHJvbn0pO1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0NTVweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9maWxlIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNFRUVFRUU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNFMEREREQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBbGljZScsc2VyaWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhyZW07XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgKVxufSJdfQ== */
/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Jumbotron.js */`));
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const layout = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.children, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3115313059",
    __self: undefined
  }, "@import url('https://fonts.googleapis.com/css2?family=Alice&family=Lato:wght@300&family=Open+Sans:wght@300&display=swap');@import url('https://fonts.googleapis.com/css2?family=Bellota:ital,wght@1,300&display=swap');*{font-family:'Open Sans',sans-serif,'Alice',serif,'Lato',sans-serif;}body{background-color:#ffffff;}em{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPK0IsQUFFMEksQUFDN0IsQUFFdEIsQUFHN0MsQUFHUixpQkFDakIsUUFIQSwwQ0FIQSIsImZpbGUiOiIvaG9tZS9iYXl1ZGlyZ2FudGFyYS9LT1BJX0RJTkdJTi9NWVdFQlNJVEUvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcblxuY29uc3QgbGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbGljZSZmYW1pbHk9TGF0bzp3Z2h0QDMwMCZmYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlbGxvdGE6aXRhbCx3Z2h0QDEsMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZiwnQWxpY2UnLCBzZXJpZiwnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVtIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGF5b3V0OyJdfQ== */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (layout);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Navbar() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])().route;
  const home = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');
  const blog = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (router === '/') {
      home.current.classList.add('active');
    } else {
      blog.current.classList.add('active');
    }
  });
  return __jsx("nav", {
    className: "jsx-3133276002" + " " + "navbar navbar-light bg-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    ref: home,
    className: "jsx-3133276002" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "HOME")), __jsx("p", {
    className: "jsx-3133276002",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "||"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("a", {
    ref: blog,
    className: "jsx-3133276002" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "BLOG")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3133276002",
    __self: this
  }, ".navbar.jsx-3133276002{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-bottom:1px solid #CCCCCC;box-shadow:0px 5px 10px -6px #ccc;}p.jsx-3133276002{margin:0 10px 3px 10px;}a.jsx-3133276002{-webkit-text-decoration:none;text-decoration:none;color:#454545;}.active.jsx-3133276002{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qm9CLEFBR3dDLEFBS0EsQUFHRixBQUlKLGlCQUNyQixNQVBBLDJCQUdrQixjQUNsQixtQ0FUb0MsZ0NBQ0Usa0NBQ3RDIiwiZmlsZSI6Ii9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL05hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpLnJvdXRlO1xuICAgIGNvbnN0IGhvbWUgPSB1c2VSZWYoJycpXG4gICAgY29uc3QgYmxvZyA9IHVzZVJlZignJyk7XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmKHJvdXRlciA9PT0gJy8nKXtcbiAgICAgICAgICAgIGhvbWUuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgYmxvZy5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0IGJnLXdoaXRlXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIHJlZj17aG9tZX0gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5IT01FPC9hPjwvTGluaz5cbiAgICAgICAgICAgIDxwPnx8PC9wPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+PGEgcmVmPXtibG9nfSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkJMT0c8L2E+PC9MaW5rPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubmF2YmFyIHtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggLTZweCAjY2NjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggM3B4IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NTQ1NDU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L25hdj5cblxuXG5cbiAgICAgICAgLy8gPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgLy8gICAgICAgICA8dWw+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL1wiPjxhPkhPTUU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxsaT48aHIvPjxoci8+PC9saT5cbiAgICAgICAgLy8gICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvYmxvZ1wiPjxhPkJMT0c8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIC8vICAgICAgICAgPC91bD5cbiAgICAgICAgLy8gICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC8vICAgICAgICAgICAgIC5uYXZiYXIge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggLTZweCAjY2NjO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgIGhyIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB1bCB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICBsaSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAycmVtO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgIGxpOmZpcnN0LWNoaWxkIGEgOmhvdmVyLCBsaTpsYXN0LWNoaWxkIGEgOmhvdmVye1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICBhIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAjNDU0NTQ1O1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIC8vICAgICA8L25hdj5cbiAgICApXG59Il19 */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Navbar.js */")) // <nav className="navbar">
  //         <ul>
  //             <li><Link href="/"><a>HOME</a></Link></li>
  //             <li><hr/><hr/></li>
  //             <li><Link href="/blog"><a>BLOG</a></Link></li>
  //         </ul>
  //         <style jsx>{`
  //             .navbar {
  //                 height: 3rem;
  //                 display: flex;
  //                 justify-content: center;
  //                 border-bottom: 1px solid #CCCCCC;
  //                 box-shadow: 0px 5px 10px -6px #ccc;
  //             }
  //             hr {
  //                 display: inline;
  //             }
  //             ul {
  //                 align-items: center;
  //                 display: flex;
  //                 font-size: 15px;
  //                 padding-left: 0;
  //             }
  //             li {
  //                 list-style: none;
  //                 padding: 0 2rem;
  //             }
  //             li:first-child a :hover, li:last-child a :hover{
  //                 font-weight: bold;
  //                 color: #000000;
  //             }
  //             a {
  //                 text-decoration: none;
  //                 color: #454545;
  //                 font-size: 14px;
  //             }
  //         `}</style>
  //     </nav>
  ;
}

/***/ }),

/***/ "./components/Recent.js":
/*!******************************!*\
  !*** ./components/Recent.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recent.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const recent = props => {
  const {
    gambar
  } = props.data;
  const {
    0: isStatus,
    1: setIsStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const latar = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');

  function updateUI(e) {
    e.preventDefault();

    if (e.type === 'mouseenter') {
      setIsStatus(true);
    } else if (e.type === 'mouseleave') {
      setIsStatus(false);
    }
  }

  return __jsx("figure", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1327910789", [isStatus == false ? `none` : `flex`]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("img", {
    src: gambar,
    alt: gambar,
    onMouseEnter: updateUI,
    onMouseLeave: updateUI,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1327910789", [isStatus == false ? `none` : `flex`]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("div", {
    ref: latar,
    onMouseEnter: updateUI,
    onMouseLeave: updateUI,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1327910789", [isStatus == false ? `none` : `flex`]]]) + " " + "latar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("img", {
    src: __webpack_require__(/*! ../public/static/click.svg */ "./public/static/click.svg"),
    alt: __webpack_require__(/*! ../public/static/click.svg */ "./public/static/click.svg"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1327910789", [isStatus == false ? `none` : `flex`]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1327910789",
    dynamic: [isStatus == false ? `none` : `flex`],
    __self: undefined
  }, `.latar.__jsx-style-dynamic-selector{width:20rem;height:13rem;position:absolute;top:0;border-radius:10px;background-color:rgba(0,0,0,.8);display:${isStatus == false ? `none` : `flex`};-webkit-animation :detail-__jsx-style-dynamic-selector 0.5s ease;animation :detail-__jsx-style-dynamic-selector 0.5s ease;}@-webkit-keyframes detail-__jsx-style-dynamic-selector{from{width:0;left:100%;}to{left:0;width:20rem;}}@keyframes detail-__jsx-style-dynamic-selector{from{width:0;left:100%;}to{left:0;width:20rem;}}.latar.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;width:50px;height:50px;}figure.__jsx-style-dynamic-selector{margin:0;height:auto;width:auto;box-sizing:border-box;position:relative;float:left;}figure.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:20rem;height:13rem;border-radius:10px;display:block;margin:auto;}figure.__jsx-style-dynamic-selector .show.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector,figure.__jsx-style-dynamic-selector .title.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#fff;-webkit-text-decoration:none;text-decoration:none;text-align:center;}figure.__jsx-style-dynamic-selector .show.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector,figure.__jsx-style-dynamic-selector .title.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{font-weight:bold;}.show.__jsx-style-dynamic-selector{width:100%;position:absolute;top:0.1px;background-color:rgba(0,0,0,.8);border-top-right-radius:10px;border-top-left-radius:10px;-webkit-animation:top-__jsx-style-dynamic-selector 1.2s;animation:top-__jsx-style-dynamic-selector 1.2s;}.title.__jsx-style-dynamic-selector{width:100%;position:absolute;bottom:0.1px;background-color:rgba(0,0,0,.8);border-bottom-left-radius:10px;border-bottom-right-radius:10px;display:block;-webkit-animation:bottom-__jsx-style-dynamic-selector 0.8s;animation:bottom-__jsx-style-dynamic-selector 0.8s;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Qm9CLEFBRzZCLEFBWUEsQUFJRCxBQU9PLEFBS1QsQUFRRyxBQU9ELEFBS00sQUFHTixBQVVBLE9BNUNLLENBSkYsQ0FnQkYsRUFlUyxBQVFILEFBVUEsQ0E3REwsQUFvQ0EsS0FZakIsQ0FuQ0ksQ0FJQSxFQVlXLElBNUJPLEFBb0NDLElBZVQsQUFVRyxHQWhDUyxPQXVCYSxHQVVBLENBN0Q3QixDQW9DUSxLQW5DSyxLQTRCRCxJQVFOLEdBS00sT0F4Q2lCLEVBb0N2QyxDQWpCZSxBQStCa0IsQ0F0QmxCLEVBZ0NvQixLQW5CbkMsR0FyQmdCLENBU2hCLFdBUkEsTUFwQnlDLEFBa0RULEtBVUksdUJBVGIsU0FsRFMsQUE0RGQsY0FDUSxpRkFUMUIsMkJBbkRBLEVBNkRBIiwiZmlsZSI6Ii9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IHJlY2VudCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtnYW1iYXJ9ID0gcHJvcHMuZGF0YVxuICAgIGNvbnN0IFtpc1N0YXR1cyxzZXRJc1N0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgbGF0YXIgPSB1c2VSZWYoJycpO1xuICAgICBcbiAgICBmdW5jdGlvbiB1cGRhdGVVSShlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihlLnR5cGUgPT09ICdtb3VzZWVudGVyJyl7XG4gICAgICAgICAgICBzZXRJc1N0YXR1cyh0cnVlKVxuICAgICAgICB9ZWxzZSBpZihlLnR5cGUgPT09ICdtb3VzZWxlYXZlJyl7XG4gICAgICAgICAgICBzZXRJc1N0YXR1cyhmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmaWd1cmUgPlxuICAgICAgICAgICAgPGltZyBzcmM9e2dhbWJhcn0gYWx0PXtnYW1iYXJ9IG9uTW91c2VFbnRlcj17dXBkYXRlVUl9IG9uTW91c2VMZWF2ZT17dXBkYXRlVUl9Lz4gXG4gICAgICAgICAgICA8ZGl2IHJlZj17bGF0YXJ9IGNsYXNzTmFtZT1cImxhdGFyXCIgb25Nb3VzZUVudGVyPXt1cGRhdGVVSX0gb25Nb3VzZUxlYXZlPXt1cGRhdGVVSX0+PGltZyBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9zdGF0aWMvY2xpY2suc3ZnJyl9IGFsdD17cmVxdWlyZSgnLi4vcHVibGljL3N0YXRpYy9jbGljay5zdmcnKX0vPjwvZGl2PiAgXG4gICAgICAgICAgICB7Lyoge2lzU3RhdHVzID09IGZhbHNlID8gbnVsbCA6IDxkaXYgY2xhc3NOYW1lPVwibGF0YXJcIj48aW1nIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL3N0YXRpYy9jbGljay5zdmcnKX0gYWx0PXtyZXF1aXJlKCcuLi9wdWJsaWMvc3RhdGljL2NsaWNrLnN2ZycpfSBvbk1vdXNlRW50ZXI9e3VwZGF0ZVVJfSBvbk1vdXNlTGVhdmU9e3VwZGF0ZVVJfS8+PC9kaXY+fSAgKi99XG4gICAgICAgICAgICB7Lyoge2lzU3RhdHVzID09IGZhbHNlID8gbnVsbCA6IDxkaXYgY2xhc3NOYW1lPVwic2hvd1wiIG9uTW91c2VFbnRlcj17dXBkYXRlVUl9IG9uTW91c2VMZWF2ZT17dXBkYXRlVUl9PjxhIGhyZWY9XCJodHRwczovL21vdmllc2RpcmdhbnRhcmEubmV0bGlmeS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PHA+TGl2ZSBQcmV2aWV3PC9wPjwvYT48L2Rpdj59ICAqL31cbiAgICAgICAgICAgIHsvKiB7aXNTdGF0dXMgPT0gZmFsc2UgPyBudWxsIDogIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIiBvbk1vdXNlRW50ZXI9e3VwZGF0ZVVJfSBvbk1vdXNlTGVhdmU9e3VwZGF0ZVVJfT48TGluayBocmVmPVwiL3BvcnRvZm9saW9cIj48YT48cD5NZW1idWF0IFdlYnNpdGUgRGluYW1pczwvcD48L2E+PC9MaW5rPjwvZGl2Pn0gKi99XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5sYXRhciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTNyZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7aXNTdGF0dXMgPT0gZmFsc2UgPyBgbm9uZWAgOiBgZmxleGB9OyBcbiAgICAgICAgICAgICAgICBhbmltYXRpb24gOiBkZXRhaWwgMC41cyBlYXNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGRldGFpbCB7XG4gICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxhdGFyIGltZyB7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZ3VyZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWd1cmUgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjByZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxM3JlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZ3VyZSAuc2hvdyBhICwgZmlndXJlIC50aXRsZSBhICB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZ3VyZSAuc2hvdyAgYSAsIGZpZ3VyZSAudGl0bGUgYSA6aG92ZXIgeyBcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaG93IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwLjFweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdG9wIDEuMnM7ICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDAuMXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBib3R0b20gMC44cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZmlndXJlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVjZW50OyAiXX0= */
/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recent.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (recent);

/***/ }),

/***/ "./components/Recents.js":
/*!*******************************!*\
  !*** ./components/Recents.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recents; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_images_Porto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/images/Porto */ "./public/static/images/Porto.js");
/* harmony import */ var _components_Recent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Recent */ "./components/Recent.js");
var _jsxFileName = "/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recents.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Recents() {
  const data = _public_static_images_Porto__WEBPACK_IMPORTED_MODULE_2__["default"].portofolio;
  return __jsx("div", {
    className: "jsx-2743562470" + " " + "recent container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2743562470",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "RECENT WORKS"), __jsx("section", {
    className: "jsx-2743562470",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, data.map((item, index) => __jsx(_components_Recent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: item,
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2743562470",
    __self: this
  }, ".recent.jsx-2743562470{padding:0 4rem;margin-top:3.5rem;}section.jsx-2743562470{margin-top:3rem;display:grid;grid-template-columns:repeat(3,auto);grid-gap:2rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;box-sizing:border-box;}h2.jsx-2743562470{text-align:center;font-family:'Alice',serif;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2tCLEFBRzBCLEFBS0csQUFRRSxlQVZ6QixDQUdvQixFQVFhLFdBUFcsSUFKM0MsV0FZZSxTQUNiLGFBUmtCLGNBQ1MsbUdBQ0Qsc0JBQzFCIiwiZmlsZSI6Ii9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9ydG9mb2xpbyBmcm9tICcuLi9wdWJsaWMvc3RhdGljL2ltYWdlcy9Qb3J0byc7XG5pbXBvcnQgUmVjZW50IGZyb20gJy4uL2NvbXBvbmVudHMvUmVjZW50JzsgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2VudHMoKXtcbiAgICBjb25zdCBkYXRhID0gcG9ydG9mb2xpby5wb3J0b2ZvbGlvO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZW50IGNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgIDxoMj5SRUNFTlQgV09SS1M8L2gyPlxuICAgICAgICAgIDxzZWN0aW9uID5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxSZWNlbnQgZGF0YT17aXRlbX0ga2V5PXtpbmRleH0vPiAgXG4gICAgICAgICAgICApKX0gXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5yZWNlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgNHJlbTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzLjVyZW1cbiAgICAgICAgICBcbiAgICAgIH1cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsYXV0byk7XG4gICAgICAgICAgICBncmlkLWdhcDogMnJlbTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICBoMntcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWxpY2UnLHNlcmlmOyBcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxufSAiXX0= */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recents.js */"));
}

/***/ }),

/***/ "./components/Skills.js":
/*!******************************!*\
  !*** ./components/Skills.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_HTML_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/HTML.png */ "./public/static/HTML.png");
/* harmony import */ var _public_static_HTML_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_HTML_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_CSS_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/static/CSS.png */ "./public/static/CSS.png");
/* harmony import */ var _public_static_CSS_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_CSS_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_JAVASCRIPT_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/static/JAVASCRIPT.png */ "./public/static/JAVASCRIPT.png");
/* harmony import */ var _public_static_JAVASCRIPT_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_JAVASCRIPT_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_static_NODE_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/static/NODE.png */ "./public/static/NODE.png");
/* harmony import */ var _public_static_NODE_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_NODE_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_static_REACT_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/static/REACT.png */ "./public/static/REACT.png");
/* harmony import */ var _public_static_REACT_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_REACT_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_static_BOOTSTRAP_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/static/BOOTSTRAP.png */ "./public/static/BOOTSTRAP.png");
/* harmony import */ var _public_static_BOOTSTRAP_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_static_BOOTSTRAP_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Skills.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Skills() {
  return __jsx("div", {
    className: "jsx-3025749280" + " " + "skills container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "SKILLS"), __jsx("div", {
    className: "jsx-3025749280" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    src: _public_static_HTML_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: _public_static_HTML_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("h2", {
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "HTML 5")), __jsx("figure", {
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("img", {
    src: _public_static_CSS_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: _public_static_CSS_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("h2", {
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "CSS 3")), __jsx("figure", {
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("img", {
    src: _public_static_JAVASCRIPT_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: _public_static_JAVASCRIPT_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("h2", {
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "JAVASCRIPT")), __jsx("figure", {
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("img", {
    src: _public_static_BOOTSTRAP_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: _public_static_JAVASCRIPT_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("h2", {
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "BOOTSTRAP")), __jsx("figure", {
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("img", {
    src: _public_static_REACT_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: _public_static_REACT_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("h2", {
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "REACT")), __jsx("figure", {
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("img", {
    src: _public_static_NODE_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: _public_static_NODE_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("h2", {
    className: "jsx-3025749280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "NODEJS"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3025749280",
    __self: this
  }, ".skills.jsx-3025749280{margin-top:2rem;}.skills.jsx-3025749280>h2.jsx-3025749280{text-align:center;margin:0;font-family:'Alice',serif;}.container.jsx-3025749280{margin-top:1.5rem;display:grid;grid-template-columns:repeat(3,auto);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;grid-column-gap:13px;grid-row-gap:1.5rem;}figure.jsx-3025749280{margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border:1px solid #918080;width:15rem;border-radius:1rem;box-shadow:0px 5px 10px -1px #ccc;padding:5px 10px;}figure.jsx-3025749280:hover{background-color:#eeeeee;cursor:pointer;}figure.jsx-3025749280 img.jsx-3025749280{width:40px;height:40px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin-right:10px;}figure.jsx-3025749280>h2.jsx-3025749280{font-size:1.2rem;font-family:'Alice',serif;font-weight:200;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1NraWxscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3NCLEFBR2lDLEFBR0UsQUFLQSxBQVFULEFBU2dCLEFBSWQsQUFNTSxTQWxCSixFQWFELEtBN0JoQixDQW1DOEIsQ0FoQ2pCLEFBS0ksS0FzQkssRUFMSCxFQXJCVyxJQUtXLFNBaUJ6QyxHQVVvQixVQS9CcEIsTUFnQ3NCLFNBM0JLLGVBT0UsV0FjUCxjQWJOLElBY2hCLFFBYnVCLFVBbUJ2QixTQWxCc0MsNEJBVGIsTUFVSixlQVRHLEVBVXhCLGtCQVRBIiwiZmlsZSI6Ii9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1NraWxscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodG1saW1nIGZyb20gJy4uL3B1YmxpYy9zdGF0aWMvSFRNTC5wbmcnO1xuaW1wb3J0IGNzc2ltZyBmcm9tICcuLi9wdWJsaWMvc3RhdGljL0NTUy5wbmcnO1xuaW1wb3J0IGpzaW1nIGZyb20gJy4uL3B1YmxpYy9zdGF0aWMvSkFWQVNDUklQVC5wbmcnO1xuaW1wb3J0IG5vZGVpbWcgZnJvbSAnLi4vcHVibGljL3N0YXRpYy9OT0RFLnBuZyc7XG5pbXBvcnQgcmVhY3RpbWcgZnJvbSAnLi4vcHVibGljL3N0YXRpYy9SRUFDVC5wbmcnO1xuaW1wb3J0IGJvb3RpbWcgZnJvbSAnLi4vcHVibGljL3N0YXRpYy9CT09UU1RSQVAucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoKXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxscyBjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8aDI+U0tJTExTPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aHRtbGltZ30gYWx0PXtodG1saW1nfS8+XG4gICAgICAgICAgICAgICAgPGgyPkhUTUwgNTwvaDI+XG4gICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nzc2ltZ30gYWx0PXtjc3NpbWd9Lz5cbiAgICAgICAgICAgICAgICA8aDI+Q1NTIDM8L2gyPlxuICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtqc2ltZ30gYWx0PXtqc2ltZ30vPlxuICAgICAgICAgICAgICAgIDxoMj5KQVZBU0NSSVBUPC9oMj5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Ym9vdGltZ30gYWx0PXtqc2ltZ30vPlxuICAgICAgICAgICAgICAgIDxoMj5CT09UU1RSQVA8L2gyPlxuICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWFjdGltZ30gYWx0PXtyZWFjdGltZ30vPlxuICAgICAgICAgICAgICAgIDxoMj5SRUFDVDwvaDI+XG4gICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e25vZGVpbWd9IGFsdD17bm9kZWltZ30vPlxuICAgICAgICAgICAgICAgIDxoMj5OT0RFSlM8L2gyPlxuICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnNraWxscyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5za2lsbHMgPiBoMiB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FsaWNlJyxzZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsYXV0byk7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxM3B4O1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMS41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlndXJlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTE4MDgwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAtMXB4ICNjY2M7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWd1cmUgOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZ3VyZSBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlndXJlID4gaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWxpY2UnLHNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbn0iXX0= */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Skills.js */"));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Jumbotron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Jumbotron */ "./components/Jumbotron.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/About */ "./components/About.js");
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Skills */ "./components/Skills.js");
/* harmony import */ var _components_Recents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Recents */ "./components/Recents.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function Index() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1182855276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Bayu Dirgantara")), __jsx(_components_Jumbotron__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_components_About__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_Skills__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_Recents__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1182855276",
    __self: this
  }, "body{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;color:rgba(0,0,0,0.8);}@media (max-width:767px){body{font-size:12px;width:auto;}.about>.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row;-ms-flex-flow:row;flex-flow:row;padding:0;}.about .container>img{width:50%;height:50%;}.about .container>span{text-align:center;}.about .container span p{line-height:15px;}about .container span button{margin:15px auto 0 auto;}.skills>.container{grid-template-rows:auto;grid-template-columns:unset;}.recent>section{grid-template-rows:auto;grid-template-columns:unset;}.interested form{width:100%;}footer .container{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQnVCLEFBRzJDLEFBT2pCLEFBS0YsQUFNSCxBQUtRLEFBSUQsQUFJTyxBQUlBLEFBS0EsQUFLYixBQUdBLFVBN0JBLENBMkJiLEFBR0EsSUF6Q2EsRUFvQmIsQ0FKQSxHQUpBLEdBWUEsQUFJOEIsQUFLQSxFQWhDOUIsUUFSbUMsa0JBb0NuQyxBQUtBLGlCQXhDc0IsS0FXTixpQkFWbEIscUNBV2MsVUFDWiIsImZpbGUiOiIvaG9tZS9iYXl1ZGlyZ2FudGFyYS9LT1BJX0RJTkdJTi9NWVdFQlNJVEUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEp1bWJvdHJvbiBmcm9tICcuLi9jb21wb25lbnRzL0p1bWJvdHJvbic7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0JztcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ta2lsbHMnO1xuaW1wb3J0IFJlY2VudHMgZnJvbSAnLi4vY29tcG9uZW50cy9SZWNlbnRzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG4gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CYXl1IERpcmdhbnRhcmE8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEp1bWJvdHJvbi8+XG4gICAgICA8TmF2YmFyLz5cbiAgICAgIDxBYm91dC8+XG4gICAgICA8U2tpbGxzLz5cbiAgICAgIDxSZWNlbnRzLz5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXtcblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuYWJvdXQgPiAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuYWJvdXQgLmNvbnRhaW5lciA+IGltZyB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hYm91dCAuY29udGFpbmVyID4gc3BhbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFib3V0IC5jb250YWluZXIgc3BhbiBwIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFib3V0IC5jb250YWluZXIgc3BhbiBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbjogMTVweCBhdXRvIDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5za2lsbHMgPiAuY29udGFpbmVyIHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB1bnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWNlbnQgPiBzZWN0aW9uIHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB1bnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRlcmVzdGVkIGZvcm0ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/pages/index.js */"));
}

/***/ }),

/***/ "./public/static/ABOUT.png":
/*!*********************************!*\
  !*** ./public/static/ABOUT.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ABOUT-f5085011309d14a2c7f2a74d64436bfe.png";

/***/ }),

/***/ "./public/static/BOOTSTRAP.png":
/*!*************************************!*\
  !*** ./public/static/BOOTSTRAP.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGaSURBVHgB7Zg/LwRBGMaf45AIoVFK9BRaldMoNDQSDVHqUCvwAeQkvoGPIFo50UkknIRaRKVBgvgTx/NmNiGyNzszu7N7l8wv+SW3mbnk2Zl9Z98sEAgE2puSZqxKx5EPF3Q9bqCs+ZOEq6BgygZzHqHu0AeyCIO6CSYBJdwU/FBDwi51oMVp+YAmWxzHCF3WjH/RB3pOz+g7HEkTcDNhzid9oQd0FarYrPG5xV1QFbpEF+BIFgGlwkv/7KGz9D6aM0P74ICvFfygh/Q6uu6MtMbnFnfT/uj3FX2GA65F8pe49/UAnaNjtE53oCrbmiwCVjVjUsmXSLFTvg9qqeRFekon4UAWKyhtUlwzIZU8QVfoMN2gJ/QbFmQRUMIdNxk7gnoe1+goHcLv0WOE7y1uQL1NBDlmemFJFivYDDlmpul8dP0Ey9UTsghYM5jzRvfoKyzxtYKNSAkkB/Qu3YcDrgFv6LZmXNorefZuodqtOziSJuAWciC0/Gkx2WJpBkwq1YXEDwMmAaUrrqAgdAHryA9fHwYCgUDh/AD14T3BSwRVpQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/static/CSS.png":
/*!*******************************!*\
  !*** ./public/static/CSS.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOZSURBVHgB7VhLb01RFP68297rcanGI57xquiACsGkiMeIGBkwICaGRiIG+AMmGJkYYCBGZiIGIsQj8X4kNCHx1upDUX1Q1pe1Trp7cvc+p6e9Ecn9ki89PWfvtb+91tpr77uBMsr4txgR+DZbOC+hzXDgj7BV+ASDxElhrxkoJbuFJ3wiRsOPNut8RPgRpcEs4UFhu69BSCA7dQmvCW+hNFgjPAANcVGMDHRuhnpwGkqH6cKfNlZRhAQyxD3CKSgdqqFO+OprEBLYbp2rUTpMhaZRm69BUg4WE7hFeAjZcBgD85nR6c0qkHnRKZwRez9W2IDBo084LvaOOdiFjDlID3J2hVi7DuEvDB7fzZ479mRolDp8nUIe7DaRDEOVDUA8FO5N6BuBAo57BNJmDlpiupFBINECDUMB/QK54s4hHRY5An/EBE6CpsuXkIFQiAnuIBXQ1ZYFbj9OrCf2jV78EDKQ5EHOjok9MdBmk3Cm51ut88wIuLnLqIxBYAWnEdhsAguBNvuEO5GMYiGm7aZQp6QQMwfHmrHQwGngy8GWUKckDzIHK4U1gTYPoAeKYpgDPVMS8RysMdtDysHIg6EcPGUshmPCo/ZMD7o5GHnQe5JJI7DJjLCe8WTNAyZX9VbhdmtzVXje099NDVcgbRXMtncXSSOwy5gzY1FBXSDcY8+jAgLHO89uoea4ecd+ZoHEJxsobwI5yDfnez10Z3ksfGvveIZcbYzA7SzKwbzZ/AyNypAEMg9ZUCvs/9/QWdMwQ7VUeFrYKLxpE2gQLnTss22n9YXZ4wIJhjetQBZr5kvOefde+Fo4F1qqaKcWAwsznAm9Eb5Dv7fyZi+4zaUVyFlyP65y3rG07DJBu6GhzMX60cuPhGeFd4TPnW+VZu8lhkEga+E6DEz4FuNt4RnovrpBuBmaCleEl6FVoFiORTkYrIFpBXKvjHLGB3r5gvCi/d+HMGiLE2lNaJe41RH0Agv1CoR3lEhYkjgeLOrNZlNC29SrmDPeL9wBDesN4XX4QxjHBOEq4XrhRuj2x6gkejDNvQsLNBdDg3CtsA56ymaIWFouCe9CV2rkEe48vDVYLtxmf1l+WPdeQH84cQd6hsBpOq1AF9w1VkJXLQedL1xsk3gKXd099r3OBudKfSW8L7wHXdGpf9MM5eaKHmROLhEuM1EMY68JpVcbTSC924kMGI6rNdqIjmTRLQS3R67s6HasjDL+W/wFC27mqjWDMC0AAAAASUVORK5CYII="

/***/ }),

/***/ "./public/static/FOOTER.png":
/*!**********************************!*\
  !*** ./public/static/FOOTER.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/FOOTER-4c7b6ada8fc691baadd64ae21bfb3aee.png";

/***/ }),

/***/ "./public/static/HTML.png":
/*!********************************!*\
  !*** ./public/static/HTML.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUVSURBVHgB3ZhJaF5VGIbfNGZom1rbJm1tVdKioqjgAIrDQlQcFs4bcSUiUhXcuhJEt26cNmIFdeFGqkVBnCCCIyoOBUXrVLXRJI1pkzZJk1j9Hr7v8J/c3D+5f1KT0hfexTn/vee855vOd3/pGEdTYbzReK1xmZYG/xjfNO6r98Ct8dC/S0T2viUXdEKJyCHjC8bXtbi4xrhNBa8WBfbGA3uNPVpcXBh79+aTxVjD923GNVp8sGercTCfLBPYrqUT2KZCghQFjhinjKtUHp//F5qNJxqPGIfzH4oieKBPLrDDuF9u0buNjxlbdHQwYXzEuN04ZlwZe/aFhroCwd/GFcblIRBRG2L8rtzKC8Em4yXGrlh7LNtvsPhwmcB++YlWxviwvPRMGh83fqKF4TLjTrkhDsdcR7BPFQRyinXyUymEJVdzYtzTFOP5xClCOPxwrKVYCwvuUQWB1KGLYiFAhcetnHZDzN0kL+Yd8XujwHp/Ze+uCvZWEYgFU0wkjMpjpTPGlAOs+Y7xJzWO343fZuO0374qAgc0PQbBwWBnYfyG8RktHMnt/cUfltURSEysyObG5VZcG+OxGB+tgp72G6wikIdIgtXyAgpGgptiTFZzkEc1v45lh2rxzB5rs3WnoczFqaxgnZZYsBiDZNuLxl1qvHe8WX741hi3xZjEmagqcH8IxPS4N8XcGfEMB3ha88N3xkNBqXb3D6lWF2cVOBkPc6q2mEsxhwVPVmPAAxw4WYca+02sCVpC4AG5MeYUyItkE1dRezZHjcItP6sxsMfzxvvl8XZSiEkC2YODD2Rz014uIrm4W7U4AS/L42S1qgPrPKhak0EyTMX6Can//FXuvUoCcfEFqrkYfC5PiuZsbrJs0Qxk6rYQhKvXZ+sXBX6pijE4EQvmMQjONz5kPCWbI2buUEn9CnTFeknQGtXu9oRW1WJwhsCyEkEcEA/ERX7dnW68VN5YDoX4K+QfO8RVblnqKLfDOXGIdENsztZPWB579atikuCKkRDQkc2nlosm80n5J+oTxgeM5xp3yxOJQ2/MDkT2pzsWIVjpQLYuV1yLat38nAIBNY861ZXNpf4tzX1mfMp4g/EuuZuGYxOSATd+b3zW+Gm806WZMdgZex0sE1JPIKYeU+0KUmzI/LoY/xGb7wxxXIO4FFfTqfwit1S/ahbj3RTjucB011cWWLx7AXHDyW8M8T3y0kDr9KP8W+LV7Pl0n59m3Gq8Kt79QdM7Zwp/uqkqCxyNU3VmcyzA/XuP8TbjvfKi/ZbxK/kVhtWIp1ONZ8lj8zrjmfI4RNwOTReDVQ+ppEjPJpAXsGBXYf4l4/vGLcaz5Z33ncb7Qixux4Vbg7j2PXn3/bXc2hwi78LXax4WHNPMGEz4Lfix3KXbQyyWulJuQYr6c8Yv5J3PgEo6lQBeGlWdGKwHYgdXYJX2Bt7jwM0NPM/aWPQ1eX0tXbAMWA83c1VR5ygXJMIe1YmVwJTmBkJIPuok7RsxSDiNqwGBuINTYcmHY2MEEkM98ntzl6p/xPPFdp7xYvlH+5YQSKa/HXuVhkDTLItS4UmSbnk2Xi//6OamoUzsDZGvyBOgaFlikdi8PYSRNMQ0bqUfJPs/kh/8T5Xcw3MJLAOLXy1PBrqdzUHc82FQ8fvl8kaAg3AFklQfyLN6XBXRqMAcqRngP23cRzx1x28IIm53hyCyeVDzwEIE5msQDsQUrRhWpgxRlLmbj+h4xn/NYXdAiTSeMAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/static/JAVASCRIPT.png":
/*!**************************************!*\
  !*** ./public/static/JAVASCRIPT.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK+SURBVHgB7ZhbiE1hGIZfs41xmDBygZIL4cJhyPmGcSxJcSPlgiKJUi7cSMiNJOGWm4lrF2bkdGOckpScM5KcInPlPINhvG/ft2cvq73Xnvbea6WZ9dbT/vda/1rrXf/h+/5/Aal6ufqF/g8hB8hUUo1k1UkekL3kW/ZgJlTpENlMPpLfSFYDyAoylFwuVEknrpNaJC898ya5FDxYFaqkblVTf0Xy0jN/wlqyW1X4z5UaLFepwXKVGixXqcFylRosV/1ROW0kC718lTQGzo0kS8lM2GqljdwiLeQ7EjLYQDYE/jf67ziym6wiw2GLAZlaS5rJLtJV6KZJdPFhsoWMdmMvSAeZSHaQNVEXV7IF86mGLPeyFsHHyTWymKwm98ijqBvEbVCL0GFefk+ayH1yl5wlb2HjsaDi7mItQju8PBY27rQo/gIz2VbsBnEb/EFOwVbKak1NlsdkD5lFBhe7QRKT5Cg5j1xLTiD7yUmyDbaTLKi4x6DUCput68h6Ug/bTU4nk2AT6RgCW82gkmhBxbg35IQbPAgLNdIgWOxcVujiUgxqs6+xo0Ff48cyyO2xu/Bv4NUsVrf+go0/jcOVsGwjKZA3oIIG1UU7YZv8RWSgmx3l57VtbffyGLKdHCGzAy+hFs3O4IzfI69KGYMyp3Ch1ptD7sBS2Dw//5m89LKyhD5lKLQoH58hT8g0Mj9Q/zUqaFBJXnlVbz3eCeodcp8ulDWU3urIXFh6U0YZ4S8FN9eMHuqKE6VqN9hCPsC6tNMf/JAsCNWXsSY3IrN/YPFR1+pTR33U80tpQQ32c+QZbHk1AzYpXrnp26H6+r+VLCGTYV39iTx1M8+jHhY2mI34Iur7jAy1Oj2Ruv10kTq17qcdEQYVBjaRC7BuS1JaJ06BZZhuhb8P3oDFrbo85+KWxudFsg82jFL1Df0FXAKIKQt6Wx0AAAAASUVORK5CYII="

/***/ }),

/***/ "./public/static/JUMBOTRON.png":
/*!*************************************!*\
  !*** ./public/static/JUMBOTRON.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/JUMBOTRON-e6f017a087dae6e94aea5675d8502e05.png";

/***/ }),

/***/ "./public/static/NODE.png":
/*!********************************!*\
  !*** ./public/static/NODE.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMJSURBVHgB7Zfbi4xxGMe/a3elWDkUkXVKyLGEJMeSQ0mUC+644kbxByjCHevGhVvHC1HsKmmTQsphsQ5rHcJGXGyyWuyyOzu+355n1usdM2bmbceo91ufZt73feZ5n/f3HN7fALFixYrVpypHcVRJFvn9PqEENYxcIF/Iljx+h34orgaSDfn8oNgB5n3PfxFgXir5ACtCx9VkDHlJWjP8Rp04iowlT5G9K6udj1lscvJXRTaR8+Q1OUmWkf4hO42LbeQSeU5qyVykZyLo741/yj5J6vL1N5nUkA+ky510kIfkEBnkdhP9WHY9bpcg98leMjKLvx9uGwwwV3/47Be/k2Zylrxwpzp/ikwlt/w4E0fJiBz81YX8pRbjotv3BP2pBgd7oFfIYXKDrCP7ySS/PgDp6Q6rym3+5g8hf7p+zFdPqa3xB1VtlgdzLYfX/YnqSROiKVd/D8gMcgT2cPdgq6yg2yrQd9IKlPn3ssD3sFSn72BNos8DpIW8J4lUgEn8KmipJ3Sc8ONs6nK7TlgKd5NZsBrcSla7XWfI33bY1NhBHvv1355yJ7lNzpBXHpQCVPdqNrWR02Q4GU+GhAKTw2a3aYTNtKGwOlKA68l099vkwTS4P3WyulWjZTZsLj+DNVivNpMpSJ9lKuJpZK0fqwkWwLrtq99Qwe8hS2CNsItMICth3Z+yU7oOkqWB+6jetAWr94Bk1+IP06tUbSSRWeHreurlZCG5DBshSp9W/YkHoUJX8c8jK8g5cpW0/+FeWpxVsBWs9YC/BW9eqLTCG8lMcgKWGpWM9n5rYOWgN4jeFhrGb1GAonRxtQe3j4wm82F1p1LQ67LDz+nNUPCmJEqAWhnVoFI7B5bmbg9IweuNog1qg9sUPcCwHsG29HqNacUa/XwCERRlP6hiD/7pUkNo/t2BbdWCg7pgRQlQKVSaF8Nq8DgsvTp3FzZHWxFRUf52asapOzUetJpKqd4EmmPacmno6wXQjgiKnAJY12oXrpEzjtwk12Ab1W6UkJSNSsSKFSvW/6Wfj5bYhPN7z1YAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/static/Porto1.jpg":
/*!**********************************!*\
  !*** ./public/static/Porto1.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Porto1-9a3383a1a8b2e581eda175a666242582.jpg";

/***/ }),

/***/ "./public/static/Porto2.jpg":
/*!**********************************!*\
  !*** ./public/static/Porto2.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Porto2-2e3e061d901258aa0fe3ba666cbc2585.jpg";

/***/ }),

/***/ "./public/static/Porto3.jpg":
/*!**********************************!*\
  !*** ./public/static/Porto3.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Porto3-8b730ace6c0c913d8f093219e0200409.jpg";

/***/ }),

/***/ "./public/static/Porto4.jpg":
/*!**********************************!*\
  !*** ./public/static/Porto4.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Porto4-4deade832275e25dc1f80bc4ebdf7b20.jpg";

/***/ }),

/***/ "./public/static/Porto5.jpg":
/*!**********************************!*\
  !*** ./public/static/Porto5.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Porto5-3276ab6db347d20544b84c6c8c4d6844.jpg";

/***/ }),

/***/ "./public/static/Porto6.jpg":
/*!**********************************!*\
  !*** ./public/static/Porto6.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Porto6-52cb160559126a6a40d3fdd7f3bfa98f.jpg";

/***/ }),

/***/ "./public/static/REACT.png":
/*!*********************************!*\
  !*** ./public/static/REACT.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXzSURBVHgB7Zh5bFVVEMa/0kpbrVRUFAkibgguoKLExCgFNe77gsQFlWBdUNSEEBdMVEzE8AdR4xat0cTEvSGixAUUN9QoEsWFRVNXUIpWBUEK1vll5pb3yrvvPsP7S5jkS2/vueecObN8M+dJW+V/LhX/4bthhlGGvQ0rDK8bXjX8mjG3t+EEwzHxvNjwvOFNwz8qg2xruNrQGou/Y/g4lFxmGGvYXfmHrQhlrosDtBk+i7lLDMsNl8famy2HGOYb5hpOMmxnOMAw0TAnNr/fMMDQzdDdMMTwRBzqZcP1hoMM9YYTDfPikINUBrnY8LvhMkN1znuUwXIPGn6Wu/wow5mGd+VWmmrYU/nW3cYw3rDKcJHKIGzynWF4yviuhmsMPxg+NSwKhScYeqXMwYo/GqYoQ6qULSiAG/9MGUeZBwy7hFLrDdPkbm9PmYNHViv9AJ3STdnSnjHOIYk5srQtFBxp2EfZLLFWZVDwF0OdPDkKyX6GW+X0c5fceiTEZEOflDl1gRXKkFJcvDyUq08Zv8IwQu7mp+WH7mFojLHJKqzg9vLDb7aCC+V8dag8dqAGKGUPQ1/DEXLCvUFOPRXaSMA3y91NAn1rWCrnwZEx/lXW5sViBKX2NRwXG20wVMahfpNbtafhC8OX8thrjzWrAlQf3AxZ/23YOb7bELjH8Gwo/5dKFBSDUu4zvG/4Qx7MZB3xNSowNzY9Q+6ymlCqMp7rYgylZxnOMpxjeMSwzrAmlPok9mLP7lnKQcR3y93AZAj3EsMtcmIdI48xeIwq8VIokya1cgJnvePl1h0fyt0Za7MHoUMpnJqmJBMHxEnZ+El5iUti9HB5uaM5GGz4QE7KQ0LBBsMMw0p5Zj4jpx3GhsbcmYaBcq8skJdLhMpCHD8Ve8+KvfPCj1hqkscKWdeVQHvGApz0DjlpQ8p1oQgbkgAvhCI847rhYUWSpy0sxFzqdI8ue/SK7xh/1LBD7uCx8kxrUrrLqMVUDWLybTkRK6yFQqNjk/p45t2M+AbLzYvNWwwXpuyBe6Gq70OnTmFBgvlspQuUQrtEBhOTlfEel85UPk+iaLM2EjGHvj0O94ZhxyL7nCtPygv4J6kkJATuPVjp1NORo5S6PJOVucHd3uX/9fF/wpFp2co48bcm9OlUEB77XN5EDktZ4DRDP3niwI194/178sThHVbEevSNlMA58Q3PkDPct788brsKe1KRaO+I36W5gyh6qpzZaZcmyQk2seZOhufk7iXQSRZaLGiJREiSBNppjucFoQjBfqPcvdRs6OpxealLrNYn9mTOR6HLJn1CbZzgG3kyvCK3KO+HhuK8gx5mh+VoCmpCEZKFmIMqSI6GGMMjS8KalEli8EO5K2tjj9lx6K9jXlHCxlrXyisFiq6MDYijKaHUhFCkOWOx2lCINcbEXDoeKtDCeM8esEJj7J0nxWpxf3mqny+3IPFFdmFJXI0l4ceJsdG6OARSFYrvFgrRtVCzcffAUJwkoIpA/oRGSyElSrl2HiknVuIKq8J//WJz/taFYoUUJNPhPjj2J3lTwPXhaHmnfqk85lKllHarOpSh33tY3sUQ4DQVlMCH5NdRWnzogUNjoXGGA+XhQlauDqyN7yaphOagFKHPw4WnpIxPi/Hb5O1Uchgsl3Yp4uZHmIxVhpR6aYIiVqWM3yu/WjbGpqx5nuFFeWgUkmS93iqDPCbPuMNSxuErspP4XBagxRqk9DsP3QvFYboypJRLE3HSUWSc0kUMQhXEZ3UouFjpv7105KxdVEpxcXKrS7s0UQXgOC5ILbHmlXIaof1qLTAnWS/z0lSKEFsE/DjlHwjrU2O5V1BBqBT8igV3viWnlena9OpZE4ehcoxWGYT4oh3HhbTtZCrxeJO8RKEcVAMB0x3DfZB4UyhBeYRqaBKgppPlbRvlbrDKICx6lbwkUfJoPKkKWDX5GY0OJpf0sW5/+f2jNb6bH4otikMldb6olPoDJlZpMJxu2EvuvtfkFsz6ARPlsdqIeEZBrg9YsENbZUuXfwHw02+5x61MVwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/static/SAYA.jpg":
/*!********************************!*\
  !*** ./public/static/SAYA.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/SAYA-f1a62969accfa0c6adc646f8ff6fe2d2.jpg";

/***/ }),

/***/ "./public/static/click.svg":
/*!*********************************!*\
  !*** ./public/static/click.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSItNzMgMCA1MTIgNTEyLjE1NTk2IiB3aWR0aD0iNTEycHgiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEgLTIuNDQ5MjllLTE2IDIuNDQ5MjllLTE2IDEgLTEuMTM2ODdlLTEzIDApIj48cGF0aCBkPSJtMS43ODEyNSAyMzIuNDMzNTk0Yy0zLjk1NzAzMSAxMC41NTQ2ODctLjg2NzE4OCAyMi40NjA5MzcgNy43MzA0NjkgMjkuNzUzOTA2IDE2LjI4OTA2MiAxNi4zMDA3ODEgNDkuNzg5MDYyIDc1LjE0NDUzMSA2Ni4zNzEwOTMgMTE2LjYwOTM3NSAxMS4zMTY0MDcgMjguMjgxMjUgMzYuMTY0MDYzIDU2LjAzOTA2MyA1NS4wMTU2MjYgNzQuMzUxNTYzIDguMTEzMjgxIDcuOTg0Mzc0IDEyLjY2Nzk2OCAxOC44OTg0MzcgMTIuNjQ0NTMxIDMwLjI4NTE1NnYzLjEyMTA5NGMwIDE0LjE0MDYyNCAxMS40NjA5MzcgMjUuNjAxNTYyIDI1LjYwMTU2MiAyNS42MDE1NjJoMTM2LjUzMTI1YzE0LjE0MDYyNSAwIDI1LjYwMTU2My0xMS40NjA5MzggMjUuNjAxNTYzLTI1LjYwMTU2MnYtMjYuMjE0ODQ0Yy0uMDc4MTI1LTIuMTY3OTY5Ljc0NjA5NC00LjI3MzQzOCAyLjI3NzM0NC01LjgwODU5NCAzMS40OTYwOTMtMjguODAwNzgxIDMxLjg1NTQ2OC03Ni44Nzg5MDYgMzEuODU1NDY4LTc4LjkxMDE1NnYtMTM1LjA4OTg0NGMuMzE2NDA2LTE4LjI3MzQzOC0xMy40NjA5MzctMzMuNzIyNjU2LTMxLjY0ODQzNy0zNS40ODgyODEtNi44MzU5MzgtLjQ0OTIxOS0xMy42NDg0MzggMS4xNzE4NzUtMTkuNTUwNzgxIDQuNjQ4NDM3di0xMy4yNjk1MzFjLjA3MDMxMi0xMi4yOTY4NzUtNi41MTU2MjYtMjMuNjY3OTY5LTE3LjIxODc1LTI5LjcyNjU2My0xMC42OTkyMTktNi4wNTg1OTMtMjMuODM5ODQ0LTUuODU1NDY4LTM0LjM0NzY1Ny41MzUxNTctMS4wOTM3NS0xMS41MTE3MTktOC4wMDc4MTItMjEuNjYwMTU3LTE4LjMxNjQwNi0yNi44OTA2MjUtMTAuMzEyNS01LjIzMDQ2OS0yMi41ODIwMzEtNC44MjAzMTMtMzIuNTE5NTMxIDEuMDkzNzV2LTE0LjEzMjgxM2MyMS4xNzk2ODctMTIuMDE5NTMxIDM0LjIyNjU2Mi0zNC41MjczNDMgMzQuMTM2NzE4LTU4Ljg3ODkwNiAwLTM3LjcwMzEyNS0zMC41NjY0MDYtNjguMjY1NjI1LTY4LjI2OTUzMS02OC4yNjU2MjVzLTY4LjI2NTYyNSAzMC41NjI1LTY4LjI2NTYyNSA2OC4yNjU2MjVjLS4wODk4NDQgMjQuMzUxNTYzIDEyLjk1NzAzMiA0Ni44NTkzNzUgMzQuMTMyODEzIDU4Ljg3ODkwNnYxMzcuMzg2NzE5Yy4yNDIxODcgMTAuMDc0MjE5LTEuMTI4OTA3IDIwLjExNzE4OC00LjA2MjUgMjkuNzU3ODEyLS45MTQwNjMgMi44NDc2NTctMy4yNDYwOTQgNS4wMTk1MzItNi4xNTIzNDQgNS43MzQzNzYtMi43MzQzNzUuNjkxNDA2LTUuNjMyODEzLS4wNzAzMTMtNy42Nzk2ODctMi4wMTU2MjYtNi42NjQwNjMtNi4zNTU0NjgtMTIuNTg1OTM4LTEzLjQ0OTIxOC0xNy42NDQ1MzItMjEuMTQ0NTMxLTE0LjgwODU5NC0yMi4xNTIzNDMtNTIuMDcwMzEyLTYzLjUzMTI1LTc1LjM5NDUzMS02My41MzEyNS0xMy4xMDE1NjMtLjI3MzQzNy0yNS4xNTIzNDQgNy4xMzI4MTMtMzAuODI4MTI1IDE4Ljk0NTMxM3ptMTI0LjY5NTMxMi0xNjQuMDExNzE5YzAtMjguMjc3MzQ0IDIyLjkyMTg3Ni01MS4xOTkyMTkgNTEuMTk5MjE5LTUxLjE5OTIxOSAyOC4yNzczNDQgMCA1MS4xOTkyMTkgMjIuOTIxODc1IDUxLjE5OTIxOSA1MS4xOTkyMTkuMDgyMDMxIDE0LjYwMTU2My02LjEzNjcxOSAyOC41MjczNDQtMTcuMDY2NDA2IDM4LjIxNDg0NHYtMzguMjE0ODQ0YzAtMTguODUxNTYzLTE1LjI4MTI1LTM0LjEzMjgxMy0zNC4xMzI4MTMtMzQuMTMyODEzLTE4Ljg1MTU2MiAwLTM0LjEzMjgxMiAxNS4yODEyNS0zNC4xMzI4MTIgMzQuMTMyODEzdjM4LjIxNDg0NGMtMTAuOTI1NzgxLTkuNjg3NS0xNy4xNDg0MzgtMjMuNjEzMjgxLTE3LjA2NjQwNy0zOC4yMTQ4NDR6bS0zMi42OTkyMTggMjE4LjA3MDMxM2M1Ljc4NTE1NiA4Ljc3MzQzNyAxMi41NTA3ODEgMTYuODU5Mzc0IDIwLjE2NDA2MiAyNC4xMDU0NjggNi4yNzczNDQgNS45Mzc1IDE1LjE1NjI1IDguMjUzOTA2IDIzLjUzNTE1NiA2LjEzNjcxOSA4LjUzOTA2My0yLjEyODkwNiAxNS4zOTQ1MzItOC40ODA0NjkgMTguMTc1NzgyLTE2LjgyODEyNSAzLjUzMTI1LTExLjM5ODQzOCA1LjIwNzAzMS0yMy4yODkwNjIgNC45NTcwMzEtMzUuMjE4NzV2LTE5Ni4yNjU2MjVjMC05LjQyNTc4MSA3LjY0MDYyNS0xNy4wNjY0MDYgMTcuMDY2NDA2LTE3LjA2NjQwNnMxNy4wNjY0MDcgNy42NDA2MjUgMTcuMDY2NDA3IDE3LjA2NjQwNnYxNzkuMTk5MjE5YzAgNC43MTQ4NDQgMy44MjAzMTIgOC41MzUxNTYgOC41MzUxNTYgOC41MzUxNTYgNC43MTA5MzcgMCA4LjUzMTI1LTMuODIwMzEyIDguNTMxMjUtOC41MzUxNTZ2LTc2Ljc5Njg3NWMwLTkuNDI1NzgxIDcuNjQ0NTMxLTE3LjA2NjQwNyAxNy4wNjY0MDYtMTcuMDY2NDA3IDkuNDI1NzgxIDAgMTcuMDcwMzEyIDcuNjQwNjI2IDE3LjA3MDMxMiAxNy4wNjY0MDd2NzYuNzk2ODc1YzAgNC43MTQ4NDQgMy44MjAzMTMgOC41MzUxNTYgOC41MzEyNSA4LjUzNTE1NiA0LjcxNDg0NCAwIDguNTM1MTU3LTMuODIwMzEyIDguNTM1MTU3LTguNTM1MTU2di01MS4xOTkyMTljMC05LjQyNTc4MSA3LjY0MDYyNS0xNy4wNjY0MDYgMTcuMDY2NDA2LTE3LjA2NjQwNnMxNy4wNjY0MDYgNy42NDA2MjUgMTcuMDY2NDA2IDE3LjA2NjQwNnY1OS43MzQzNzVjMCA0LjcxMDkzOCAzLjgyMDMxMyA4LjUzMTI1IDguNTMxMjUgOC41MzEyNSA0LjcxNDg0NCAwIDguNTM1MTU3LTMuODIwMzEyIDguNTM1MTU3LTguNTMxMjV2LTE3LjA2NjQwNmMtLjAxMTcxOS00LjUyNzM0NCAxLjc5Mjk2OC04Ljg3MTA5NCA1LjAwNzgxMi0xMi4wNTg1OTQgMy41MTk1MzEtMy40ODgyODEgOC4zNjcxODgtNS4yOTY4NzUgMTMuMzEyNS00Ljk2NDg0NCA5LjIxODc1IDEuMjAzMTI1IDE2LjAzOTA2MiA5LjE3MTg3NSAxNS44MTI1IDE4LjQ2NDg0NHYxMzUuMDg5ODQ0YzAgLjQxNzk2OC0uNDMzNTk0IDQyLjY2Nzk2OC0yNi4zMTY0MDYgNjYuMzI0MjE4LTUuMDU4NTk0IDQuNzY5NTMyLTcuODk0NTMyIDExLjQ0MTQwNy03LjgxNjQwNiAxOC4zOTQ1MzJ2MjYuMjE0ODQ0YzAgNC43MTQ4NDMtMy44MjAzMTMgOC41MzUxNTYtOC41MzUxNTcgOC41MzUxNTZoLTEzNi41MzEyNWMtNC43MTQ4NDMgMC04LjUzNTE1Ni0zLjgyMDMxMy04LjUzNTE1Ni04LjUzNTE1NnYtMy4xMjEwOTRjLjAxMTcxOS0xNS45OTYwOTQtNi40MTQwNjMtMzEuMzI0MjE5LTE3LjgyNDIxOS00Mi41MzEyNS0xNC40NTcwMzEtMTQuMDM1MTU2LTQwLjMxMjUtNDEuNjA5Mzc1LTUxLjA0Njg3NS02OC40NTMxMjUtMTcuNTYyNS00My44Nzg5MDctNTIuMzA4NTkzLTEwNC40NzY1NjMtNzAuMTYwMTU2LTEyMi4zMjgxMjUtNC4wNjI1LTQuMDU4NTk0LTUuNDIxODc1LTcuODE2NDA2LTQuMDM5MDYzLTExLjE2MDE1NiAzLjA5Mzc1LTUuMzU5Mzc2IDguODgyODEzLTguNTg5ODQ0IDE1LjA3MDMxMy04LjQwNjI1IDExLjU5NzY1NiAwIDQzLjA0Mjk2OSAyOC43NSA2MS4xNjc5NjkgNTUuOTM3NXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0ibTMyMi43NDIxODggMzY3LjA4OTg0NGM0LjcxNDg0MyAwIDguNTM1MTU2LTMuODIwMzEzIDguNTM1MTU2LTguNTM1MTU2di01MS4xOTkyMTljMC00LjcxMDkzOC0zLjgyMDMxMy04LjUzMTI1LTguNTM1MTU2LTguNTMxMjUtNC43MTA5MzggMC04LjUzMTI1IDMuODIwMzEyLTguNTMxMjUgOC41MzEyNXY1MS4xOTkyMTljMCA0LjcxNDg0MyAzLjgyMDMxMiA4LjUzNTE1NiA4LjUzMTI1IDguNTM1MTU2em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJtMzE0LjIxMDkzOCA0MTguMjg5MDYyYzIuMjYxNzE4IDAgNC40MzM1OTMtLjg5ODQzNyA2LjAzMTI1LTIuNSA2LjQ5MjE4Ny02LjAwNzgxMiAxMC40NDE0MDYtMTQuMjczNDM3IDExLjAzNTE1Ni0yMy4xMDE1NjItLjAwNzgxMy00LjYwOTM3NS0zLjcxODc1LTguMzU1NDY5LTguMzI4MTI1LTguNDEwMTU2LTQuNjYwMTU3LS4wODk4NDQtOC41MzkwNjMgMy41NTg1OTQtOC43MzgyODEgOC4yMTQ4NDQtLjY0MDYyNiA0LjMzMjAzMS0yLjc3MzQzOCA4LjMwNDY4Ny02LjAzNTE1NyAxMS4yMzA0NjgtMi40Mzc1IDIuNDQxNDA2LTMuMTY3OTY5IDYuMTA5Mzc1LTEuODQ3NjU2IDkuMjk2ODc1IDEuMzIwMzEzIDMuMTkxNDA3IDQuNDI5Njg3IDUuMjY5NTMxIDcuODgyODEzIDUuMjY5NTMxem0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJtMTg2LjIxMDkzOCA0NzguMDIzNDM4aDguNTMxMjVjNC43MTQ4NDMgMCA4LjUzNTE1Ni0zLjgyMDMxMyA4LjUzNTE1Ni04LjUzNTE1NyAwLTQuNzEwOTM3LTMuODIwMzEzLTguNTMxMjUtOC41MzUxNTYtOC41MzEyNWgtOC41MzEyNWMtNC43MTQ4NDQgMC04LjUzNTE1NyAzLjgyMDMxMy04LjUzNTE1NyA4LjUzMTI1IDAgNC43MTQ4NDQgMy44MjAzMTMgOC41MzUxNTcgOC41MzUxNTcgOC41MzUxNTd6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Im0yMjguODc1IDQ3OC4wMjM0MzhoNTkuNzM0Mzc1YzQuNzE0ODQ0IDAgOC41MzUxNTYtMy44MjAzMTMgOC41MzUxNTYtOC41MzUxNTcgMC00LjcxMDkzNy0zLjgyMDMxMi04LjUzMTI1LTguNTM1MTU2LTguNTMxMjVoLTU5LjczNDM3NWMtNC43MTA5MzggMC04LjUzMTI1IDMuODIwMzEzLTguNTMxMjUgOC41MzEyNSAwIDQuNzE0ODQ0IDMuODIwMzEyIDguNTM1MTU3IDguNTMxMjUgOC41MzUxNTd6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Im0xMDkuNDEwMTU2IDE0MS4yODkwNjJjMy40MDYyNSAwIDYuNDg0Mzc1LTIuMDE5NTMxIDcuODM1OTM4LTUuMTQ0NTMxIDEuMzUxNTYyLTMuMTI1LjcxODc1LTYuNzUzOTA2LTEuNjEzMjgyLTkuMjM0Mzc1LTI5LjU2NjQwNi0zMS4yNS0zMS4xNzE4NzQtNzkuNjQ0NTMxLTMuNzM4MjgxLTExMi43ODUxNTYgMi4wMjczNDQtMi4zMzk4NDQgMi42Mjg5MDctNS41OTM3NSAxLjU3NDIxOS04LjUwMzkwNi0xLjA1ODU5NC0yLjkxMDE1Ni0zLjYwOTM3NS01LjAxOTUzMi02LjY2Nzk2OS01LjUxMTcxOS0zLjA1ODU5My0uNDkyMTg3LTYuMTQwNjI1LjcxMDkzNy04LjA1ODU5MyAzLjE0NDUzMS0zMi45MDYyNSAzOS43NjU2MjUtMzEgOTcuODI4MTI1IDQuNDQ5MjE4IDEzNS4zNDc2NTYgMS42MTMyODIgMS43MTQ4NDQgMy44NjMyODIgMi42ODc1IDYuMjE4NzUgMi42ODc1em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJtMjU3LjMyMDMxMiAxMTguNjgzNTk0YzIuMDExNzE5IDEuMDMxMjUgNC4zNTU0NjkgMS4yMjI2NTYgNi41MDc4MTMuNTI3MzQ0IDIuMTU2MjUtLjY5NTMxMyAzLjk0NTMxMy0yLjIxNDg0NCA0Ljk3NjU2My00LjIzMDQ2OSAxOC42NTYyNS0zNi4zMjgxMjUgMTMuODU5Mzc0LTgwLjI4MTI1LTEyLjE5NTMxMy0xMTEuNzI2NTYzLTEuOTE0MDYzLTIuNDMzNTk0LTUtMy42MzY3MTgtOC4wNTg1OTQtMy4xNDQ1MzEtMy4wNTQ2ODcuNDkyMTg3LTUuNjA1NDY5IDIuNjAxNTYzLTYuNjY0MDYyIDUuNTExNzE5LTEuMDU4NTk0IDIuOTEwMTU2LS40NTcwMzEgNi4xNjQwNjIgMS41NzQyMTkgOC41MDM5MDYgMjEuNzEwOTM3IDI2LjE5NTMxMiAyNS43MDcwMzEgNjIuODEyNSAxMC4xNjQwNjIgOTMuMDc0MjE5LTIuMTUyMzQ0IDQuMTkxNDA2LS40OTYwOTQgOS4zMzIwMzEgMy42OTUzMTIgMTEuNDg0Mzc1em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiLz48L2c+IDwvc3ZnPgo="

/***/ }),

/***/ "./public/static/facebook.svg":
/*!************************************!*\
  !*** ./public/static/facebook.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjEgMGgtMThjLTEuNjU1IDAtMyAxLjM0NS0zIDN2MThjMCAxLjY1NCAxLjM0NSAzIDMgM2gxOGMxLjY1NCAwIDMtMS4zNDYgMy0zdi0xOGMwLTEuNjU1LTEuMzQ2LTMtMy0zeiIgZmlsbD0iIzNiNTk5OSIvPjxwYXRoIGQ9Im0xNi41IDEydi0zYzAtLjgyOC42NzItLjc1IDEuNS0uNzVoMS41di0zLjc1aC0zYy0yLjQ4NiAwLTQuNSAyLjAxNC00LjUgNC41djNoLTN2My43NWgzdjguMjVoNC41di04LjI1aDIuMjVsMS41LTMuNzV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"

/***/ }),

/***/ "./public/static/github.svg":
/*!**********************************!*\
  !*** ./public/static/github.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNTEyIDI1N2MwIDEyMC04NC4xMDE1NjIgMjIwLjUtMTk2IDI0Ny41bC0zMC42MDE1NjItOTcuMTk5MjE5aC01OC43OTY4NzZsLTI5LjYwMTU2MiA5Ny4xOTkyMTljLTExMS44OTg0MzgtMjctMTk3LTEyNy41LTE5Ny0yNDcuNSAwLTE0MC42OTkyMTkgMTE1LjMwMDc4MS0yNTcgMjU2LTI1N3MyNTYgMTE2LjMwMDc4MSAyNTYgMjU3em0wIDAiIGZpbGw9IiMzODQ5NDkiLz48cGF0aCBkPSJtNTEyIDI1N2MwIDEyMC04NC4xMDE1NjIgMjIwLjUtMTk2IDI0Ny41bC0zMC42MDE1NjItOTcuMTk5MjE5aC0yOS4zOTg0Mzh2LTQwNy4zMDA3ODFjMTQwLjY5OTIxOSAwIDI1NiAxMTYuMzAwNzgxIDI1NiAyNTd6bTAgMCIgZmlsbD0iIzI5MzkzOSIvPjxwYXRoIGQ9Im0xODEuMjc3MzQ0IDQzMC4wNTg1OTRjLTYuMDc4MTI1IDAtMTIuMDExNzE5LS44NjcxODgtMTcuODI4MTI1LTIuNTc4MTI1LTE1LjEyODkwNy00LjQ2ODc1LTI3LjQyMTg3NS0xNC41NDY4NzUtMzYuNTQ2ODc1LTI5LjkxNDA2My00LjE2MDE1Ni03LjAxNTYyNS04LjQ5NjA5NC0xMS44Nzg5MDYtMTMuNjA1NDY5LTE1LjMwODU5NC01LjAyNzM0NC0zLjM4MjgxMi05LjAzOTA2My00LjY3MTg3NC0xMy4yNzM0MzctNC4zNjMyODFsLTIuNjM2NzE5LTI5Ljg4MjgxMmMxMS4xMTcxODctLjk1MzEyNSAyMS43NTM5MDYgMi4wNjI1IDMyLjU5Mzc1IDkuMzE2NDA2IDguODMyMDMxIDUuOTAyMzQ0IDE2LjI1NzgxMiAxNC4wNjI1IDIyLjcxODc1IDI0LjkxNDA2MyA1LjMwNDY4NyA4LjkyMTg3NCAxMS40MTAxNTYgMTQuMTUyMzQzIDE5LjI1IDE2LjQ2ODc1IDguODA0Njg3IDIuNTg5ODQzIDE3Ljk0MTQwNiAxLjUwNzgxMiAyOS42MzI4MTItMy40NzI2NTdsMTEuODA4NTk0IDI3LjU2NjQwN2MtMTEuMjk2ODc1IDQuODM1OTM3LTIxLjkyOTY4NyA3LjI1MzkwNi0zMi4xMTMyODEgNy4yNTM5MDZ6bTAgMCIgZmlsbD0iI2VjZWNmMSIvPjxwYXRoIGQ9Im00MDAuOTAyMzQ0IDI4Ny4zMDA3ODFjLTEwLjUwMzkwNiAyNy44OTg0MzgtMzYuOTAyMzQ0IDYzLjMwMDc4MS0xMDMuODAwNzgyIDczLjE5OTIxOSA4LjY5OTIxOSAxMi44OTg0MzggMTkuMTk5MjE5IDE5LjgwMDc4MSAxOC44OTg0MzggNDYuODAwNzgxdjk3LjE5OTIxOWMtMTkuMTk5MjE5IDQuODAwNzgxLTM5LjMwMDc4MSA3LjUtNjAgNy41cy0zOS44MDA3ODEtMi42OTkyMTktNTktNy41di05OC40MDIzNDRjMC0yNi42OTkyMTggMTAuMTAxNTYyLTM0LjE5OTIxOCAxNy44OTg0MzgtNDUuNTk3NjU2LTY2Ljg5ODQzOC05LjkwMjM0NC05My4yOTY4NzYtNDUuMzAwNzgxLTEwMy44MDA3ODItNzMuMTk5MjE5LTE0LjA5NzY1Ni0zNy4yMDMxMjUtNi41OTc2NTYtODMuNDAyMzQzIDE4LjAwMzkwNi0xMTIuODAwNzgxLjU5NzY1Ny0uNjAxNTYyIDEuNS0yLjEwMTU2MiAxLjE5OTIxOS0zLTExLjQwMjM0My0zNC4xOTkyMTkgMi4zOTg0MzgtNjIuNjk5MjE5IDMtNjUuNjk5MjE5IDEyLjg5ODQzOCAzLjg5ODQzOCAxNS0zLjkwMjM0MyA1Ni42OTkyMTkgMjEuNTk3NjU3bDcuMTk5MjE5IDQuMjAzMTI0YzMgMS43OTY4NzYgMi4xMDE1NjIuNTk3NjU3IDUuMTAxNTYyLjU5NzY1NyAxNy4zOTg0MzgtNC44MDA3ODEgMzUuNjk5MjE5LTcuNSA1My42OTkyMTktNy41IDE4LjMwMDc4MSAwIDM2LjMwMDc4MSAyLjY5OTIxOSA1NC41OTc2NTYgNy41bDIuMTAxNTYzLjMwMDc4MXMuNTk3NjU2IDAgMi4xMDE1NjItLjg5ODQzOGM1MS44OTg0MzgtMzEuNTAzOTA2IDUwLjA5NzY1Ny0yMS4zMDA3ODEgNjQuMTk1MzEzLTI1LjgwMDc4MS4zMDA3ODEgMyAxNC4xMDE1NjIgMzEuNzk2ODc1IDIuNzAzMTI1IDY1LjY5OTIxOS0xLjUgNC41IDQ1IDQ3LjA5NzY1NiAxOS4yMDMxMjUgMTE1LjgwMDc4MXptMCAwIiBmaWxsPSIjZWNlY2YxIi8+PHBhdGggZD0ibTQwMC45MDIzNDQgMjg3LjMwMDc4MWMtMTAuNTAzOTA2IDI3Ljg5ODQzOC0zNi45MDIzNDQgNjMuMzAwNzgxLTEwMy44MDA3ODIgNzMuMTk5MjE5IDguNjk5MjE5IDEyLjg5ODQzOCAxOS4xOTkyMTkgMTkuODAwNzgxIDE4Ljg5ODQzOCA0Ni44MDA3ODF2OTcuMTk5MjE5Yy0xOS4xOTkyMTkgNC44MDA3ODEtMzkuMzAwNzgxIDcuNS02MCA3LjV2LTM4Ny4zMDA3ODFjMTguMzAwNzgxIDAgMzYuMzAwNzgxIDIuNjk5MjE5IDU0LjYwMTU2MiA3LjVsMi4wOTc2NTcuMzAwNzgxcy42MDE1NjIgMCAyLjEwMTU2Mi0uODk4NDM4YzUxLjg5ODQzOC0zMS41MDM5MDYgNTAuMDk3NjU3LTIxLjMwMDc4MSA2NC4xOTkyMTktMjUuODAwNzgxLjMwMDc4MSAzIDE0LjEwMTU2MiAzMS43OTY4NzUgMi42OTkyMTkgNjUuNjk5MjE5LTEuNSA0LjUgNDUgNDcuMDk3NjU2IDE5LjIwMzEyNSAxMTUuODAwNzgxem0wIDAiIGZpbGw9IiNlMmUyZTciLz48L3N2Zz4="

/***/ }),

/***/ "./public/static/images/Porto.js":
/*!***************************************!*\
  !*** ./public/static/images/Porto.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Porto1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Porto1.jpg */ "./public/static/Porto1.jpg");
/* harmony import */ var _Porto1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Porto1_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Porto2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Porto2.jpg */ "./public/static/Porto2.jpg");
/* harmony import */ var _Porto2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Porto2_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Porto3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Porto3.jpg */ "./public/static/Porto3.jpg");
/* harmony import */ var _Porto3_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Porto3_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Porto4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Porto4.jpg */ "./public/static/Porto4.jpg");
/* harmony import */ var _Porto4_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Porto4_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Porto5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Porto5.jpg */ "./public/static/Porto5.jpg");
/* harmony import */ var _Porto5_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Porto5_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Porto6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Porto6.jpg */ "./public/static/Porto6.jpg");
/* harmony import */ var _Porto6_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Porto6_jpg__WEBPACK_IMPORTED_MODULE_5__);






const data = {
  portofolio: [{
    gambar: _Porto1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    caption: "html"
  }, {
    gambar: _Porto2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    caption: "css"
  }, {
    gambar: _Porto3_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    caption: "javascript"
  }, {
    gambar: _Porto4_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    caption: "react"
  }, {
    gambar: _Porto5_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    caption: "node"
  }, {
    gambar: _Porto6_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    caption: "epxress js"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./public/static/instagram.svg":
/*!*************************************!*\
  !*** ./public/static/instagram.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNDIuOTY2MTU2MjY4IiB4Mj0iNDY5LjAzMzc0NzciIHkxPSI0NjkuMDI5NjQ3NzE2OCIgeTI9IjQyLjk2MjA1NjI4NDgiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZDYwMCIvPjxzdG9wIG9mZnNldD0iLjUiIHN0b3AtY29sb3I9IiNmZjAxMDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkODAwYjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxNjMuMDQyOTk1NjQ1NiIgeDI9IjM0OC45NTM5MDgzNDY0IiB5MT0iMzQ4Ljk1MzgwODMzMTIiIHkyPSIxNjMuMDQyODk1NjMwNCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmY2NDAwIi8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2ZmMDEwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZkMDA1NiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM3MC45MjkxMzI1NDMyIiB4Mj0iNDE0LjM3Mjc4NDk5MTIiIHkxPSIxNDEuMDY3NjcxNDMzNiIgeTI9Ijk3LjYyNDAxODk4NTYiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2YzMDA3MiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U1MDA5NyIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0ibTUxMC40NjA5MzggMTUwLjQ1MzEyNWMtMS4yNDYwOTQtMjcuMjUtNS41NzQyMTktNDUuODU5Mzc1LTExLjkwMjM0NC02Mi4xNDA2MjUtNi40MjU3ODItMTcuMDgyMDMxLTE2LjUwMzkwNi0zMi41NTQ2ODgtMjkuNTI3MzQ0LTQ1LjM0Mzc1LTEyLjc4NTE1Ni0xMy4wMjM0MzgtMjguMjYxNzE5LTIzLjEwNTQ2OS00NS4zNDM3NS0yOS41MzUxNTYtMTYuMjg1MTU2LTYuMzI0MjE5LTM0Ljg5MDYyNS0xMC42NDg0MzgtNjIuMTQwNjI1LTExLjg4NjcxOS0yNy4zMDA3ODEtMS4yNS0zNi4wMjM0MzctMS41NDY4NzUtMTA1LjU0Njg3NS0xLjU0Njg3NXMtNzguMjQ2MDk0LjI5Njg3NS0xMDUuNTQ2ODc1IDEuNTM5MDYyYy0yNy4yNSAxLjI0NjA5NC00NS44NTU0NjkgNS41NzQyMTktNjIuMTQwNjI1IDExLjkwMjM0NC0xNy4wODIwMzEgNi40MjU3ODItMzIuNTU0Njg4IDE2LjUwMzkwNi00NS4zNDM3NSAyOS41MjczNDQtMTMuMDIzNDM4IDEyLjc4NTE1Ni0yMy4xMDU0NjkgMjguMjU3ODEyLTI5LjUzNTE1NiA0NS4zMzk4NDQtNi4zMjQyMTkgMTYuMjg1MTU2LTEwLjY0ODQzOCAzNC44OTQ1MzEtMTEuODg2NzE5IDYyLjE0MDYyNS0xLjI1IDI3LjMwNDY4Ny0xLjU0Njg3NSAzNi4wMjM0MzctMS41NDY4NzUgMTA1LjU0Njg3NSAwIDY5LjUyNzM0NC4yOTY4NzUgNzguMjUgMS41NDY4NzUgMTA1LjU1MDc4MSAxLjI0MjE4NyAyNy4yNDYwOTQgNS41NzAzMTMgNDUuODU1NDY5IDExLjg5ODQzNyA2Mi4xNDA2MjUgNi40MjU3ODIgMTcuMDc4MTI1IDE2LjUwMzkwNyAzMi41NTQ2ODggMjkuNTI3MzQ0IDQ1LjMzOTg0NCAxMi43ODUxNTYgMTMuMDIzNDM3IDI4LjI2MTcxOSAyMy4xMDE1NjIgNDUuMzQzNzUgMjkuNTI3MzQ0IDE2LjI4MTI1IDYuMzMyMDMxIDM0Ljg5MDYyNSAxMC42NTYyNSA2Mi4xNDA2MjUgMTEuOTAyMzQzIDI3LjMwNDY4OCAxLjI0NjA5NCAzNi4wMjM0MzggMS41MzkwNjMgMTA1LjU0Njg3NSAxLjUzOTA2MyA2OS41MjM0MzggMCA3OC4yNDYwOTQtLjI5Mjk2OSAxMDUuNTQ2ODc1LTEuNTM5MDYzIDI3LjI1LTEuMjQ2MDkzIDQ1Ljg1NTQ2OS01LjU3MDMxMiA2Mi4xNDA2MjUtMTEuOTAyMzQzIDM0LjM4NjcxOS0xMy4yOTY4NzYgNjEuNTcwMzEzLTQwLjQ4MDQ2OSA3NC44NjcxODgtNzQuODY3MTg4IDYuMzMyMDMxLTE2LjI4NTE1NiAxMC42NTYyNS0zNC44OTQ1MzEgMTEuOTAyMzQ0LTYyLjE0MDYyNSAxLjI0MjE4Ny0yNy4zMDQ2ODcgMS41MzkwNjItMzYuMDIzNDM3IDEuNTM5MDYyLTEwNS41NDY4NzUgMC02OS41MjczNDQtLjI5Njg3NS03OC4yNDYwOTQtMS41MzkwNjItMTA1LjU0Njg3NXptLTQ2LjA4MjAzMiAyMDguOTk2MDk0Yy0xLjEzNjcxOCAyNC45NjA5MzctNS4zMDg1OTQgMzguNTE1NjI1LTguODEyNSA0Ny41MzUxNTYtOC42MTMyODEgMjIuMzI4MTI1LTI2LjI1NzgxMiAzOS45NzI2NTYtNDguNTg1OTM3IDQ4LjU4NTkzNy05LjAxOTUzMSAzLjUwMzkwNy0yMi41NzQyMTkgNy42NzU3ODItNDcuNTM1MTU3IDguODEyNS0yNi45ODgyODEgMS4yMzQzNzYtMzUuMDg1OTM3IDEuNDkyMTg4LTEwMy40NDUzMTIgMS40OTIxODgtNjguMzYzMjgxIDAtNzYuNDU3MDMxLS4yNTc4MTItMTAzLjQ0OTIxOS0xLjQ5MjE4OC0yNC45NTcwMzEtMS4xMzY3MTgtMzguNTExNzE5LTUuMzA4NTkzLTQ3LjUzNTE1Ni04LjgxMjUtMTEuMTE3MTg3LTQuMTA1NDY4LTIxLjE3NTc4MS0xMC42NDg0MzctMjkuNDMzNTk0LTE5LjE1MjM0My04LjUwMzkwNi04LjI1NzgxMy0xNS4wNDY4NzUtMTguMzEyNS0xOS4xNTIzNDMtMjkuNDMzNTk0LTMuNTAzOTA3LTkuMDE5NTMxLTcuNjc1NzgyLTIyLjU3NDIxOS04LjgxMjUtNDcuNTM1MTU2LTEuMjMwNDY5LTI2Ljk5MjE4OC0xLjQ5MjE4OC0zNS4wODk4NDQtMS40OTIxODgtMTAzLjQ0NTMxMyAwLTY4LjM1OTM3NS4yNjE3MTktNzYuNDUzMTI1IDEuNDkyMTg4LTEwMy40NDkyMTggMS4xNDA2MjQtMjQuOTYwOTM4IDUuMzA4NTkzLTM4LjUxNTYyNiA4LjgxMjUtNDcuNTM1MTU3IDQuMTA1NDY4LTExLjEyMTA5MyAxMC42NTIzNDMtMjEuMTc5Njg3IDE5LjE1MjM0My0yOS40Mzc1IDguMjU3ODEzLTguNTAzOTA2IDE4LjMxNjQwNy0xNS4wNDY4NzUgMjkuNDM3NS0xOS4xNDg0MzcgOS4wMTk1MzEtMy41MDc4MTMgMjIuNTc0MjE5LTcuNjc1NzgyIDQ3LjUzNTE1Ny04LjgxNjQwNiAyNi45OTIxODctMS4yMzA0NjkgMzUuMDg5ODQzLTEuNDkyMTg4IDEwMy40NDUzMTItMS40OTIxODhoLS4wMDM5MDZjNjguMzU1NDY4IDAgNzYuNDUzMTI1LjI2MTcxOSAxMDMuNDQ5MjE4IDEuNDk2MDk0IDI0Ljk2MDkzOCAxLjEzNjcxOCAzOC41MTE3MTkgNS4zMDg1OTQgNDcuNTM1MTU3IDguODEyNSAxMS4xMTcxODcgNC4xMDU0NjggMjEuMTc1NzgxIDEwLjY0ODQzNyAyOS40MzM1OTMgMTkuMTQ4NDM3IDguNTAzOTA3IDguMjU3ODEzIDE1LjA0Njg3NiAxOC4zMTY0MDcgMTkuMTQ4NDM4IDI5LjQzNzUgMy41MDc4MTIgOS4wMTk1MzEgNy42Nzk2ODggMjIuNTc0MjE5IDguODE2NDA2IDQ3LjUzNTE1NyAxLjIzMDQ2OSAyNi45OTIxODcgMS40OTIxODggMzUuMDg5ODQzIDEuNDkyMTg4IDEwMy40NDUzMTIgMCA2OC4zNTkzNzUtLjI1NzgxMyA3Ni40NTMxMjUtMS40OTIxODggMTAzLjQ0OTIxOXptMCAwIiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZD0ibTI1NS45OTYwOTQgMTI0LjUzOTA2MmMtNzIuNjAxNTYzIDAtMTMxLjQ1NzAzMiA1OC44NTkzNzYtMTMxLjQ1NzAzMiAxMzEuNDYwOTM4czU4Ljg1NTQ2OSAxMzEuNDU3MDMxIDEzMS40NTcwMzIgMTMxLjQ1NzAzMWM3Mi42MDU0NjggMCAxMzEuNDYwOTM3LTU4Ljg1NTQ2OSAxMzEuNDYwOTM3LTEzMS40NTcwMzFzLTU4Ljg1NTQ2OS0xMzEuNDYwOTM4LTEzMS40NjA5MzctMTMxLjQ2MDkzOHptMCAyMTYuNzkyOTY5Yy00Ny4xMjUtLjAwMzkwNi04NS4zMzIwMzItMzguMjA3MDMxLTg1LjMyODEyNS04NS4zMzU5MzcgMC00Ny4xMjUgMzguMjAzMTI1LTg1LjMzMjAzMiA4NS4zMzIwMzEtODUuMzMyMDMyIDQ3LjEyODkwNi4wMDM5MDcgODUuMzMyMDMxIDM4LjIwNzAzMiA4NS4zMzIwMzEgODUuMzMyMDMyIDAgNDcuMTI4OTA2LTM4LjIwNzAzMSA4NS4zMzU5MzctODUuMzM1OTM3IDg1LjMzNTkzN3ptMCAwIiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTQyMy4zNzEwOTQgMTE5LjM0NzY1NmMwIDE2Ljk2NDg0NC0xMy43NTM5MDYgMzAuNzE4NzUtMzAuNzE4NzUgMzAuNzE4NzUtMTYuOTY4NzUgMC0zMC43MjI2NTYtMTMuNzUzOTA2LTMwLjcyMjY1Ni0zMC43MTg3NSAwLTE2Ljk2ODc1IDEzLjc1MzkwNi0zMC43MjI2NTYgMzAuNzIyNjU2LTMwLjcyMjY1NiAxNi45NjQ4NDQgMCAzMC43MTg3NSAxMy43NTM5MDYgMzAuNzE4NzUgMzAuNzIyNjU2em0wIDAiIGZpbGw9InVybCgjYykiLz48L3N2Zz4="

/***/ }),

/***/ "./public/static/paper-plane.svg":
/*!***************************************!*\
  !*** ./public/static/paper-plane.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik01MDYuOTU1LDEuMzE0Yy0zLjExOS0xLjc4LTYuOTU1LTEuNzUtMTAuMDQ1LDAuMDc4TDMxMy42NTYsMTA5Ljc1NmMtNC43NTQsMi44MTEtNi4zMjksOC45NDMtMy41MTgsMTMuNjk3DQoJCQljMi44MSw0Ljc1Myw4Ljk0Miw2LjMyOCwxMy42OTcsMy41MThsMTMxLjQ4Mi03Ny43NDlMMjEwLjQxMSwzMDMuMzM1TDg4LjYwMywyNjYuMDY5bDE1OC45NjUtOTQNCgkJCWM0Ljc1NC0yLjgxMiw2LjMyOS04Ljk0NCwzLjUxOC0xMy42OThjLTIuODEtNC43NTMtOC45NDMtNi4zMy0xMy42OTctMy41MThMNTguOTEsMjYwLjM5MmMtMy40MSwyLjAxNy01LjMwOSw1Ljg1Ni00Ljg0LDkuNzkxDQoJCQlzMy4yMTYsNy4yMjEsNy4wMDQsOC4zOGwxNDUuNDY5LDQ0LjUwNEwyNzAuNzIsNDM5Ljg4YzAuMDY3LDAuMTIxLDAuMTM2LDAuMjIzLDAuMjA3LDAuMzE0YzEuMDcxLDEuNzg2LDIuNjc2LDMuMjQ1LDQuNjc4LDQuMDg3DQoJCQljMS4yNTMsMC41MjcsMi41NywwLjc4NCwzLjg3OCwwLjc4NGMyLjU2MywwLDUuMDg2LTAuOTg2LDYuOTkxLTIuODQ5bDczLjc5NC03Mi4xMmwxMzguODA2LDQyLjQ2Ng0KCQkJYzAuOTYsMC4yOTMsMS45NDUsMC40MzgsMi45MjUsMC40MzhjMi4xMTYsMCw0LjIwNi0wLjY3Miw1Ljk0OC0xLjk2MUM1MTAuNDk2LDQwOS4xNTMsNTEyLDQwNi4xNyw1MTIsNDAzVjEwDQoJCQlDNTEyLDYuNDA5LDUxMC4wNzQsMy4wOTMsNTA2Ljk1NSwxLjMxNHogTTI3MS4yNjUsMzI5LjIzYy0xLjE1OCwxLjY3My0xLjc3OSwzLjY1OS0xLjc3OSw1LjY5NHY2MS4xNzFsLTQzLjgyMy03OS43NjUNCgkJCWwxOTMuOTIxLTIwMS4yMUwyNzEuMjY1LDMyOS4yM3ogTTI4OS40ODYsNDExLjMwOXYtNjIuODY3bDQ4Ljk5LDE0Ljk4OEwyODkuNDg2LDQxMS4zMDl6IE00OTIsMzg5LjQ4M2wtMTk2LjQ5OS02MC4xMTYNCgkJCUw0OTIsNDUuNzA0VjM4OS40ODN6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xNjQuNDIzLDM0Ny41NzdjLTMuOTA2LTMuOTA1LTEwLjIzNi0zLjkwNS0xNC4xNDMsMGwtOTMuMzUyLDkzLjM1MmMtMy45MDUsMy45MDUtMy45MDUsMTAuMjM3LDAsMTQuMTQzDQoJCQlDNTguODgyLDQ1Ny4wMjQsNjEuNDQxLDQ1OCw2NCw0NThzNS4xMTgtMC45NzYsNy4wNzEtMi45MjlsOTMuMzUyLTkzLjM1MkMxNjguMzI4LDM1Ny44MTUsMTY4LjMyOCwzNTEuNDgzLDE2NC40MjMsMzQ3LjU3N3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQwLjA3MSw0NzEuOTI4Yy0zLjkwNi0zLjkwMy0xMC4yMzYtMy45MDMtMTQuMTQyLDAuMDAxbC0yMywyM2MtMy45MDUsMy45MDUtMy45MDUsMTAuMjM3LDAsMTQuMTQzDQoJCQlDNC44ODIsNTExLjAyNCw3LjQ0MSw1MTIsMTAsNTEyczUuMTE4LTAuOTc3LDcuMDcxLTIuOTI5bDIzLTIzQzQzLjk3Niw0ODIuMTY2LDQzLjk3Niw0NzUuODM0LDQwLjA3MSw0NzEuOTI4eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMTQyLjY0OSw0OTQuMzRjLTEuODU5LTEuODYtNC40MzktMi45My03LjA2OS0yLjkzYy0yLjY0MSwwLTUuMjEsMS4wNy03LjA3LDIuOTNjLTEuODYsMS44Ni0yLjkzLDQuNDMtMi45Myw3LjA3DQoJCQljMCwyLjYzLDEuMDY5LDUuMjEsMi45Myw3LjA3YzEuODYsMS44Niw0LjQ0LDIuOTMsNy4wNywyLjkzczUuMjEtMS4wNyw3LjA2OS0yLjkzYzEuODYtMS44NiwyLjkzMS00LjQ0LDIuOTMxLTcuMDcNCgkJCUMxNDUuNTgsNDk4Ljc3LDE0NC41MSw0OTYuMiwxNDIuNjQ5LDQ5NC4zNHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTIxNy4wNTEsNDE5LjkzNWMtMy45MDMtMy45MDUtMTAuMjMzLTMuOTA1LTE0LjE0MiwwbC00OS40NDYsNDkuNDQ1Yy0zLjkwNSwzLjkwNS0zLjkwNSwxMC4yMzcsMCwxNC4xNDINCgkJCWMxLjk1MywxLjk1Myw0LjUxMiwyLjkyOSw3LjA3MSwyLjkyOXM1LjExOC0wLjk3Nyw3LjA3MS0yLjkyOWw0OS40NDYtNDkuNDQ1QzIyMC45NTYsNDMwLjE3MiwyMjAuOTU2LDQyMy44NCwyMTcuMDUxLDQxOS45MzV6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zODcuNzA0LDQxNi4xMzljLTMuOTA2LTMuOTA0LTEwLjIzNi0zLjkwNC0xNC4xNDIsMGwtNDkuNTgsNDkuNThjLTMuOTA1LDMuOTA1LTMuOTA1LDEwLjIzNywwLDE0LjE0Mw0KCQkJYzEuOTUzLDEuOTUyLDQuNTEyLDIuOTI5LDcuMDcxLDIuOTI5czUuMTE4LTAuOTc3LDcuMDcxLTIuOTI5bDQ5LjU4LTQ5LjU4QzM5MS42MDksNDI2LjM3NywzOTEuNjA5LDQyMC4wNDUsMzg3LjcwNCw0MTYuMTM5eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjgzLjUsMTM2LjMxYy0xLjg2LTEuODYtNC40NC0yLjkzLTcuMDctMi45M3MtNS4yMSwxLjA3LTcuMDcsMi45M2MtMS44NTksMS44Ni0yLjkzLDQuNDQtMi45Myw3LjA4DQoJCQljMCwyLjYzLDEuMDcsNS4yLDIuOTMsNy4wNmMxLjg2LDEuODcsNC40NCwyLjkzLDcuMDcsMi45M3M1LjIxLTEuMDYsNy4wNy0yLjkzYzEuODU5LTEuODYsMi45My00LjQzLDIuOTMtNy4wNg0KCQkJQzI4Ni40MywxNDAuNzUsMjg1LjM2LDEzOC4xNywyODMuNSwxMzYuMzF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./public/static/twiiter.svg":
/*!***********************************!*\
  !*** ./public/static/twiiter.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ1NS43MzEgNDU1LjczMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU1LjczMSA0NTUuNzMxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cmVjdCB4PSIwIiB5PSIwIiBzdHlsZT0iZmlsbDojNTBBQkYxOyIgd2lkdGg9IjQ1NS43MzEiIGhlaWdodD0iNDU1LjczMSIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNNjAuMzc3LDMzNy44MjJjMzAuMzMsMTkuMjM2LDY2LjMwOCwzMC4zNjgsMTA0Ljg3NSwzMC4zNjhjMTA4LjM0OSwwLDE5Ni4xOC04Ny44NDEsMTk2LjE4LTE5Ni4xOA0KCQljMC0yLjcwNS0wLjA1Ny01LjM5LTAuMTYxLTguMDY3YzMuOTE5LTMuMDg0LDI4LjE1Ny0yMi41MTEsMzQuMDk4LTM1YzAsMC0xOS42ODMsOC4xOC0zOC45NDcsMTAuMTA3DQoJCWMtMC4wMzgsMC0wLjA4NSwwLjAwOS0wLjEyMywwLjAwOWMwLDAsMC4wMzgtMC4wMTksMC4xMDQtMC4wNjZjMS43NzUtMS4xODYsMjYuNTkxLTE4LjA3OSwyOS45NTEtMzguMjA3DQoJCWMwLDAtMTMuOTIyLDcuNDMxLTMzLjQxNSwxMy45MzJjLTMuMjI3LDEuMDcyLTYuNjA1LDIuMTI2LTEwLjA4OCwzLjEwM2MtMTIuNTY1LTEzLjQxLTMwLjQyNS0yMS43OC01MC4yNS0yMS43OA0KCQljLTM4LjAyNywwLTY4Ljg0MSwzMC44MDUtNjguODQxLDY4LjgwM2MwLDUuMzYyLDAuNjE3LDEwLjU4MSwxLjc4NCwxNS41OTJjLTUuMzE0LTAuMjE4LTg2LjIzNy00Ljc1NS0xNDEuMjg5LTcxLjQyMw0KCQljMCwwLTMyLjkwMiw0NC45MTcsMTkuNjA3LDkxLjEwNWMwLDAtMTUuOTYyLTAuNjM2LTI5LjczMy04Ljg2NGMwLDAtNS4wNTgsNTQuNDE2LDU0LjQwNyw2OC4zMjljMCwwLTExLjcwMSw0LjQzMi0zMC4zNjgsMS4yNzINCgkJYzAsMCwxMC40MzksNDMuOTY4LDYzLjI3MSw0OC4wNzdjMCwwLTQxLjc3NywzNy43NC0xMDEuMDgxLDI4Ljg4NUw2MC4zNzcsMzM3LjgyMnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map