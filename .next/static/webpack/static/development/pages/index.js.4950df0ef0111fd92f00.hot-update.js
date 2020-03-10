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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3774789959", [isStatus == false ? "none" : "block"]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3774789959", [isStatus == false ? "none" : "block"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3774789959", [isStatus == false ? "none" : "block"]]]) + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3774789959", [isStatus == false ? "none" : "block"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Live Preview")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3774789959", [isStatus == false ? "none" : "block"]]]) + " " + "show",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3774789959", [isStatus == false ? "none" : "block"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Membuat Website Dinamis")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3774789959",
    dynamic: [isStatus == false ? "none" : "block"],
    __self: this
  }, "figure.__jsx-style-dynamic-selector{margin:0;height:auto;width:auto;box-sizing:border-box;position:relative;float:left;}figure.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:22rem;height:13rem;border-radius:10px;display:block;margin:auto;}figure.__jsx-style-dynamic-selector .show.__jsx-style-dynamic-selector{width:100%;position:absolute;bottom:0.1px;background-color:rgba(0,0,0,.8);border-bottom-left-radius:10px;border-bottom-right-radius:10px;display:".concat(isStatus == false ? "none" : "block", ";}figure.__jsx-style-dynamic-selector .show.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector,figure.__jsx-style-dynamic-selector .title.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:#fff;text-align:center;}figure.__jsx-style-dynamic-selector .title.__jsx-style-dynamic-selector{width:100%;position:absolute;top:0.1px;background-color:rgba(0,0,0,.8);border-top-right-radius:10px;border-top-left-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0dhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENvQixBQUcwQixBQVFHLEFBT0QsQUFTQSxBQUlBLFNBM0JDLEVBZU0sQUFTQSxBQUlBLENBcEJMLFNBUEYsSUFRUSxJQU9OLEFBU2pCLEFBSWMsR0EzQlksT0E0QmEsR0FiQSxFQVByQixVQVBJLElBUU4sWUFDaEIsQ0FtQmlDLENBM0JsQixFQWNvQixTQWJuQyxpQkEyQmdDLEtBYkksdUJBY3BDLFNBYnlDLHFDQUN6QyIsImZpbGUiOiIvaG9tZS9iYXl1ZGlyZ2FudGFyYS9LT1BJX0RJTkdJTi9NWVdFQlNJVEUvY29tcG9uZW50cy9HYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBnYWxsZXJ5ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2lzU3RhdHVzLHNldElzU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbb3BhY2l0eSxzZXRPcGFjaXR5XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IGltZyA9IHVzZVJlZignJyk7XG4gICAgY29uc3QgYnV0dG9uID0gdXNlUmVmKCcnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcylcbiAgICBmdW5jdGlvbiB1cGRhdGVVSShlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgICAgICBpZihlLnR5cGUgPT09ICdtb3VzZWVudGVyJyl7XG4gICAgICAgICAgICBzZXRJc1N0YXR1cyh0cnVlKVxuICAgICAgICB9ZWxzZSBpZihlLnR5cGUgPT09ICdtb3VzZWxlYXZlJyl7XG4gICAgICAgICAgICBzZXRJc1N0YXR1cyhmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGZ1bmN0aW9uIGdldFN0eWxlKCl7XG4gICAgICAgICAgICBpZihpc1N0YXR1cyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGltZy5jdXJyZW50KVxuICAgICAgICAgICAgICAgIGltZy5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnMTAwJSc7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1nLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcyMCUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldFN0eWxlKCk7XG4gICAgfSlcblxuICAgIC8vIGdldFN0eWxlID0gKCkgPT4ge1xuICAgIC8vICAgICBsZXQgc3R5bGUgPSBjc3NgZGlzcGxheSB7ZGlzcGxheTogYmxvY2s7fWBcbiAgICAvLyAgICAgcmV0dXJuIHN0eWxlO1xuICAgIC8vIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgIDxpbWcgcmVmPXtpbWd9IHNyYz17cHJvcHMuZGF0YS5nYW1iYXJ9YWx0PXtwcm9wcy5kYXRhLmdhbWJhcn0gb25Nb3VzZUVudGVyPXt1cGRhdGVVSX0gb25Nb3VzZUxlYXZlPXt1cGRhdGVVSX0vPiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+PHA+TGl2ZSBQcmV2aWV3PC9wPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93XCI+PHA+TWVtYnVhdCBXZWJzaXRlIERpbmFtaXM8L3A+PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGZpZ3VyZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZ3VyZSBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMnJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlndXJlIC5zaG93IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLjFweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7aXNTdGF0dXMgPT0gZmFsc2UgPyBgbm9uZWA6YGJsb2NrYH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWd1cmUgLnNob3cgcCAsIGZpZ3VyZSAudGl0bGUgcCAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZ3VyZSAudGl0bGUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDAuMXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbGxlcnk7Il19 */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Gallery.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (gallery);

/***/ })

})
//# sourceMappingURL=index.js.4950df0ef0111fd92f00.hot-update.js.map