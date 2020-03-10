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
    className: "jsx-2275012073",
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
    className: "jsx-2275012073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2275012073" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2275012073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Live Preview")), __jsx("div", {
    className: "jsx-2275012073" + " " + "show",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2275012073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Membuat Website Dinamis")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2275012073",
    __self: this
  }, "figure.jsx-2275012073{margin:0;height:auto;width:auto;box-sizing:border-box;position:relative;float:left;}figure.jsx-2275012073 img.jsx-2275012073{width:22rem;height:13rem;border-radius:10px;display:block;margin:auto;}figure.jsx-2275012073 .show.jsx-2275012073{width:100%;position:absolute;bottom:0.1px;background-color:rgba(0,0,0,.8);border-bottom-left-radius:10px;border-bottom-right-radius:10px;display:block;}figure.jsx-2275012073 .show.jsx-2275012073 p.jsx-2275012073,figure.jsx-2275012073 .title.jsx-2275012073 p.jsx-2275012073{color:#fff;text-align:center;}figure.jsx-2275012073 .title.jsx-2275012073{width:100%;position:absolute;top:0.1px;background-color:rgba(0,0,0,.8);border-top-right-radius:10px;border-top-left-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0dhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENvQixBQUcwQixBQVFHLEFBT0QsQUFTQSxBQUlBLFNBM0JDLEVBZU0sQUFTQSxBQUlBLENBcEJMLFNBUEYsSUFRUSxJQU9OLEFBU2pCLEFBSWMsR0EzQlksT0E0QmEsR0FiQSxFQVByQixVQVBJLElBUU4sWUFDaEIsQ0FtQmlDLENBM0JsQixFQWNvQixTQWJuQyxpQkEyQmdDLEtBYkksdUJBY3BDLFNBYmtCLGNBQ2xCIiwiZmlsZSI6Ii9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0dhbGxlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGdhbGxlcnkgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbaXNTdGF0dXMsc2V0SXNTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGFjaXR5LHNldE9wYWNpdHldID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgaW1nID0gdXNlUmVmKCcnKTtcbiAgICBjb25zdCBidXR0b24gPSB1c2VSZWYoJycpO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzKVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVVJKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIGlmKGUudHlwZSA9PT0gJ21vdXNlZW50ZXInKXtcbiAgICAgICAgICAgIHNldElzU3RhdHVzKHRydWUpXG4gICAgICAgIH1lbHNlIGlmKGUudHlwZSA9PT0gJ21vdXNlbGVhdmUnKXtcbiAgICAgICAgICAgIHNldElzU3RhdHVzKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3R5bGUoKXtcbiAgICAgICAgICAgIGlmKGlzU3RhdHVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW1nLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgaW1nLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcxMDAlJztcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBpbWcuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzIwJSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0U3R5bGUoKTtcbiAgICB9KVxuXG4gICAgLy8gZ2V0U3R5bGUgPSAoKSA9PiB7XG4gICAgLy8gICAgIGxldCBzdHlsZSA9IGNzc2BkaXNwbGF5IHtkaXNwbGF5OiBibG9jazt9YFxuICAgIC8vICAgICByZXR1cm4gc3R5bGU7XG4gICAgLy8gfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgPGltZyByZWY9e2ltZ30gc3JjPXtwcm9wcy5kYXRhLmdhbWJhcn1hbHQ9e3Byb3BzLmRhdGEuZ2FtYmFyfSBvbk1vdXNlRW50ZXI9e3VwZGF0ZVVJfSBvbk1vdXNlTGVhdmU9e3VwZGF0ZVVJfS8+ICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj48cD5MaXZlIFByZXZpZXc8L3A+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dcIj48cD5NZW1idWF0IFdlYnNpdGUgRGluYW1pczwvcD48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgZmlndXJlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlndXJlIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIycmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTNyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWd1cmUgLnNob3cge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDAuMXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWd1cmUgLnNob3cgcCAsIGZpZ3VyZSAudGl0bGUgcCAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZ3VyZSAudGl0bGUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDAuMXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbGxlcnk7Il19 */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Gallery.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (gallery);

/***/ })

})
//# sourceMappingURL=index.js.8ac4e05369254156cd26.hot-update.js.map