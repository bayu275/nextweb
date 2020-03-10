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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["168384623", [isStatus == false ? "-50px;" : "auto;", isStatus == false ? "none" : "block"]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["168384623", [isStatus == false ? "-50px;" : "auto;", isStatus == false ? "none" : "block"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["168384623", [isStatus == false ? "-50px;" : "auto;", isStatus == false ? "none" : "block"]]]) + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["168384623", [isStatus == false ? "-50px;" : "auto;", isStatus == false ? "none" : "block"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Live Preview")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["168384623", [isStatus == false ? "-50px;" : "auto;", isStatus == false ? "none" : "block"]]]) + " " + "show",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["168384623", [isStatus == false ? "-50px;" : "auto;", isStatus == false ? "none" : "block"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Membuat Website Dinamis")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "168384623",
    dynamic: [isStatus == false ? "-50px;" : "auto;", isStatus == false ? "none" : "block"],
    __self: this
  }, "figure.__jsx-style-dynamic-selector{margin:0;height:auto;width:auto;box-sizing: border-box;position:relative;}figure.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:22rem;height:13rem;border-radius:10px;display:block;margin:".concat(isStatus == false ? "-50px;" : "auto;", ";}figure.__jsx-style-dynamic-selector .show.__jsx-style-dynamic-selector{width:100%;position:absolute;bottom:0.1px;background-color:rgba(0,0,0,.8);border-bottom-left-radius:10px;border-bottom-right-radius:10px;display:").concat(isStatus == false ? "none" : "block", ";}figure.__jsx-style-dynamic-selector .show.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector,figure.__jsx-style-dynamic-selector .title.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:#fff;text-align:center;}figure.__jsx-style-dynamic-selector .title.__jsx-style-dynamic-selector{width:100%;position:absolute;top:0.1px;background-color:rgba(0,0,0,.8);border-top-right-radius:10px;border-top-left-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0dhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENvQixBQUcwQixBQVFHLEFBT0QsQUFTQSxBQUlBLFNBM0JDLEVBZU0sQUFTQSxBQUlBLENBcEJMLFNBUEYsSUFRUSxJQU9OLEFBU2pCLEFBSWMsR0ExQkEsT0EyQnlCLEdBYkEsRUFQckIsV0FOSSxHQVF2QixhQW1Ca0MsRUExQmpDLENBYW1DLG9CQU5uQyxNQW9CZ0MsS0FiSSx1QkFjcEMsU0FieUMscUNBQ3pDIiwiZmlsZSI6Ii9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0dhbGxlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGdhbGxlcnkgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbaXNTdGF0dXMsc2V0SXNTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGFjaXR5LHNldE9wYWNpdHldID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgaW1nID0gdXNlUmVmKCcnKTtcbiAgICBjb25zdCBidXR0b24gPSB1c2VSZWYoJycpO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzKVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVVJKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIGlmKGUudHlwZSA9PT0gJ21vdXNlZW50ZXInKXtcbiAgICAgICAgICAgIHNldElzU3RhdHVzKHRydWUpXG4gICAgICAgIH1lbHNlIGlmKGUudHlwZSA9PT0gJ21vdXNlbGVhdmUnKXtcbiAgICAgICAgICAgIHNldElzU3RhdHVzKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3R5bGUoKXtcbiAgICAgICAgICAgIGlmKGlzU3RhdHVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW1nLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgaW1nLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcxMDAlJztcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBpbWcuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzIwJSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0U3R5bGUoKTtcbiAgICB9KVxuXG4gICAgLy8gZ2V0U3R5bGUgPSAoKSA9PiB7XG4gICAgLy8gICAgIGxldCBzdHlsZSA9IGNzc2BkaXNwbGF5IHtkaXNwbGF5OiBibG9jazt9YFxuICAgIC8vICAgICByZXR1cm4gc3R5bGU7XG4gICAgLy8gfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgPGltZyByZWY9e2ltZ30gc3JjPXtwcm9wcy5kYXRhLmdhbWJhcn1hbHQ9e3Byb3BzLmRhdGEuZ2FtYmFyfSBvbk1vdXNlRW50ZXI9e3VwZGF0ZVVJfSBvbk1vdXNlTGVhdmU9e3VwZGF0ZVVJfS8+ICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj48cD5MaXZlIFByZXZpZXc8L3A+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dcIj48cD5NZW1idWF0IFdlYnNpdGUgRGluYW1pczwvcD48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgZmlndXJlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlndXJlIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIycmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTNyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW46ICR7aXNTdGF0dXMgPT0gZmFsc2UgPyBgLTUwcHg7YDogYGF1dG87YCB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWd1cmUgLnNob3cge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDAuMXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHtpc1N0YXR1cyA9PSBmYWxzZSA/IGBub25lYDpgYmxvY2tgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZ3VyZSAuc2hvdyBwICwgZmlndXJlIC50aXRsZSBwICB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlndXJlIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMC4xcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZmlndXJlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FsbGVyeTsiXX0= */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Gallery.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (gallery);

/***/ })

})
//# sourceMappingURL=index.js.69d2d2f3842f44dcfc12.hot-update.js.map