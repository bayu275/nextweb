webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Form.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Form = function Form() {
  var fullname = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');
  var email = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');
  var textarea = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');
  var button = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');

  var handlePress = function handlePress(e) {
    if (e.key === 'Enter') {
      if (e.target == fullname.current) {
        console.log('sama');
      } else {
        console.log('tdk');
      }
    }
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();
    alert('hi');
  };

  return __jsx("div", {
    className: "jsx-2741015804" + " " + "interested container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("form", {
    className: "jsx-2741015804",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2741015804",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "CONTACT US"), __jsx("div", {
    className: "jsx-2741015804" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "Your Name",
    className: "jsx-2741015804" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2741015804" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("input", {
    type: "email",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "Enter email",
    className: "jsx-2741015804" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2741015804" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("textarea", {
    ref: textarea,
    name: "",
    id: "",
    placeholder: "Your Message",
    onKeyPress: handlePress,
    className: "jsx-2741015804",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("button", {
    type: "submit",
    className: "jsx-2741015804" + " " + "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Submit")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2741015804",
    __self: this
  }, "form.jsx-2741015804{width:23rem;margin:0 auto;border:1px solid #A9A7A7;padding:2rem 3rem;border-radius:20px;font-family:'Open Sans',serif;}form.jsx-2741015804>p.jsx-2741015804{font-family:'Alice',serif;font-size:1.3rem;margin:0;text-align:left;}input.jsx-2741015804,textarea.jsx-2741015804{border-radius:20px;border:1px solid #A9A7A7;padding:0 1rem;outline:none;}textarea.jsx-2741015804{min-height:8rem;padding-top:1rem;padding-bottom:1rem;width:100%;margin-bottom:0 !important;}input.jsx-2741015804,textarea.jsx-2741015804,button.jsx-2741015804{margin-bottom:1rem;}button.jsx-2741015804{outline:none;width:10rem;height:2.5rem;border-radius:20px;border:1px solid #e34646;background-color:#e34646;color:#fff;font-size:1rem;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NvQixBQUc2QixBQVFjLEFBTVAsQUFNSCxBQU9HLEFBR04sWUE3QkMsQ0E4QkYsR0FWSyxHQU5RLEFBYTdCLE1BSWtCLENBOUJXLEFBT1IsT0FhRyxNQVdELElBdkJWLENBTU0sT0FiRyxDQVFGLENBWUwsS0FXYyxDQWpCWixLQU9jLElBWi9CLENBUnVCLEdBY3ZCLFdBaUI2QixLQTlCSyxHQW9CbEMsaUJBV2UsVUE5QmYsQ0ErQm1CLGVBQ04sU0FFYiIsImZpbGUiOiIvaG9tZS9iYXl1ZGlyZ2FudGFyYS9LT1BJX0RJTkdJTi9NWVdFQlNJVEUvY29tcG9uZW50cy9Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuY29uc3QgRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmdWxsbmFtZSA9IHVzZVJlZignJyk7ICAgICAgIFxuICAgIGNvbnN0IGVtYWlsID0gdXNlUmVmKCcnKTtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHVzZVJlZignJyk7XG4gICAgY29uc3QgYnV0dG9uID0gdXNlUmVmKCcnKVxuICAgIGNvbnN0IGhhbmRsZVByZXNzID0gKGUpID0+IHtcbiAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICAgICAgaWYoZS50YXJnZXQgPT0gZnVsbG5hbWUuY3VycmVudCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhbWEnKVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZGsnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhbGVydCgnaGknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZXJlc3RlZCBjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8cD5DT05UQUNUIFVTPC9wPiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgcmVmPXt0ZXh0YXJlYX0gbmFtZT1cIlwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJZb3VyIE1lc3NhZ2VcIiBvbktleVByZXNzPXtoYW5kbGVQcmVzc30vPlxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgZm9ybSB7ICBcbiAgICAgICAgICAgICAgICB3aWR0aDogMjNyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0E5QTdBNztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDNyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucycsc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3JtID4gcHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FsaWNlJyxzZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0ICwgdGV4dGFyZWF7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQTlBN0E3O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDhyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07IFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0ICwgdGV4dGFyZWEgLCBidXR0b24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UzNDY0NjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM0NjQ2O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKX1cbmV4cG9ydCBkZWZhdWx0IEZvcm07ICAgIl19 */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Form.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.df588f2b368aee3df595.hot-update.js.map