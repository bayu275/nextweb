webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Gallery.js":
/*!*******************************!*\
  !*** ./components/Gallery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Gallery.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var gallery = function gallery(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isStatus = _useState[0],
      setIsStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      opacity = _useState2[0],
      setOpacity = _useState2[1];

  var img = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');
  var button = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(''); // console.log(props)

  function updateUI(e) {
    e.preventDefault(); // console.log(e)

    if (e.type === 'mouseenter') {
      setIsStatus(true);
    } else if (e.type === 'mouseleave') {
      setIsStatus(false);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function getStyle() {
      if (isStatus === false) {
        // console.log(img.current)
        img.current.style.opacity = '100%';
      } else {
        img.current.style.opacity = '20%';
      }
    }

    getStyle();
  }); // getStyle = () => {
  //     let style = css`display {display: block;}`
  //     return style;
  // }

  return __jsx("figure", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3818771144", [isStatus == false ? "none" : "block"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("img", {
    ref: img,
    src: props.data.gambar,
    alt: props.data.gambar,
    onMouseEnter: updateUI,
    onMouseLeave: updateUI,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3818771144", [isStatus == false ? "none" : "block"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3818771144", [isStatus == false ? "none" : "block"]]]) + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3818771144", [isStatus == false ? "none" : "block"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Live Preview")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3818771144", [isStatus == false ? "none" : "block"]]]) + " " + "show",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3818771144", [isStatus == false ? "none" : "block"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Membuat Website Dinamis")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3818771144",
    dynamic: [isStatus == false ? "none" : "block"],
    __self: this
  }, "figure.__jsx-style-dynamic-selector{margin:0;height:auto;width:auto;box-sizing:border-box;position:relative;float:left;}figure.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:22rem;height:13rem;border-radius:10px;display:block;margin:auto;z-index:0;}figure.__jsx-style-dynamic-selector .show.__jsx-style-dynamic-selector{width:100%;position:absolute;bottom:0.1px;background-color:rgba(0,0,0,.8);border-bottom-left-radius:10px;border-bottom-right-radius:10px;display:".concat(isStatus == false ? "none" : "block", ";z-index:1;}figure.__jsx-style-dynamic-selector .show.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector,figure.__jsx-style-dynamic-selector .title.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:#fff;text-align:center;}figure.__jsx-style-dynamic-selector .title.__jsx-style-dynamic-selector{width:100%;position:absolute;top:0.1px;background-color:rgba(0,0,0,.8);border-top-right-radius:10px;border-top-left-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0dhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENvQixBQUcwQixBQVFHLEFBUUQsQUFVQSxBQUlBLFNBN0JDLEVBZ0JNLEFBVUEsQUFJQSxDQXRCTCxTQVBGLElBUVEsSUFRTixBQVVqQixBQUljLEdBN0JZLE9BOEJhLEdBZEEsRUFSckIsVUFQSSxJQVFOLFlBQ0YsQ0FxQm1CLENBN0JsQixFQWVvQixNQU5uQyxHQVJBLGlCQTZCZ0MsS0FkSSx1QkFlcEMsU0FkeUMscUNBQzNCLFVBQ2QiLCJmaWxlIjoiL2hvbWUvYmF5dWRpcmdhbnRhcmEvS09QSV9ESU5HSU4vTVlXRUJTSVRFL2NvbXBvbmVudHMvR2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZ2FsbGVyeSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtpc1N0YXR1cyxzZXRJc1N0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW29wYWNpdHksc2V0T3BhY2l0eV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBpbWcgPSB1c2VSZWYoJycpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IHVzZVJlZignJyk7XG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMpXG4gICAgZnVuY3Rpb24gdXBkYXRlVUkoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZSlcbiAgICAgICAgaWYoZS50eXBlID09PSAnbW91c2VlbnRlcicpe1xuICAgICAgICAgICAgc2V0SXNTdGF0dXModHJ1ZSlcbiAgICAgICAgfWVsc2UgaWYoZS50eXBlID09PSAnbW91c2VsZWF2ZScpe1xuICAgICAgICAgICAgc2V0SXNTdGF0dXMoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBmdW5jdGlvbiBnZXRTdHlsZSgpe1xuICAgICAgICAgICAgaWYoaXNTdGF0dXMgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbWcuY3VycmVudClcbiAgICAgICAgICAgICAgICBpbWcuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzEwMCUnO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGltZy5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnMjAlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRTdHlsZSgpO1xuICAgIH0pXG5cbiAgICAvLyBnZXRTdHlsZSA9ICgpID0+IHtcbiAgICAvLyAgICAgbGV0IHN0eWxlID0gY3NzYGRpc3BsYXkge2Rpc3BsYXk6IGJsb2NrO31gXG4gICAgLy8gICAgIHJldHVybiBzdHlsZTtcbiAgICAvLyB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICA8aW1nIHJlZj17aW1nfSBzcmM9e3Byb3BzLmRhdGEuZ2FtYmFyfWFsdD17cHJvcHMuZGF0YS5nYW1iYXJ9IG9uTW91c2VFbnRlcj17dXBkYXRlVUl9IG9uTW91c2VMZWF2ZT17dXBkYXRlVUl9Lz4gIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPjxwPkxpdmUgUHJldmlldzwvcD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd1wiPjxwPk1lbWJ1YXQgV2Vic2l0ZSBEaW5hbWlzPC9wPjwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBmaWd1cmUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWd1cmUgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjJyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxM3JlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlndXJlIC5zaG93IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLjFweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7aXNTdGF0dXMgPT0gZmFsc2UgPyBgbm9uZWA6YGJsb2NrYH07XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZ3VyZSAuc2hvdyBwICwgZmlndXJlIC50aXRsZSBwICB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlndXJlIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMC4xcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZmlndXJlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FsbGVyeTsiXX0= */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Gallery.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (gallery);

/***/ })

})
//# sourceMappingURL=index.js.5f3a1e1786e811158389.hot-update.js.map