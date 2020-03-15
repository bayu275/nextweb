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
    className: "jsx-1371907497" + " " + "interested",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("form", {
    className: "jsx-1371907497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1371907497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "CONTACT US"), __jsx("div", {
    className: "jsx-1371907497" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "Your Name",
    className: "jsx-1371907497" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1371907497" + " " + "form-group",
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
    className: "jsx-1371907497" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1371907497" + " " + "form-group",
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
    className: "jsx-1371907497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("button", {
    type: "submit",
    className: "jsx-1371907497" + " " + "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Submit")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1371907497",
    __self: this
  }, "form.jsx-1371907497{width:10% vw;margin:0 auto;border:1px solid #A9A7A7;padding:2rem 3rem;border-radius:20px;font-family:'Open Sans',serif;}form.jsx-1371907497>p.jsx-1371907497{font-family:'Alice',serif;font-size:1.3rem;margin:0;text-align:left;}input.jsx-1371907497,textarea.jsx-1371907497{border-radius:20px;border:1px solid #A9A7A7;padding:0 1rem;outline:none;}textarea.jsx-1371907497{min-height:8rem;padding-top:1rem;padding-bottom:1rem;width:100%;margin-bottom:0 !important;}input.jsx-1371907497,textarea.jsx-1371907497,button.jsx-1371907497{margin-bottom:1rem;}button.jsx-1371907497{outline:none;width:10rem;height:2.5rem;border-radius:20px;border:1px solid #e34646;background-color:#e34646;color:#fff;font-size:1rem;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NvQixBQUc4QixBQVFhLEFBTVAsQUFNSCxBQU9HLEFBR04sYUE3QkMsQUE4QkYsR0FWSyxHQU5RLEFBYTdCLE1BSWtCLENBdkJHLENBUFEsTUFvQkwsTUFXRCxJQXZCVixDQU1NLFFBYkcsQUFRRixDQVlMLEtBV2MsQ0FqQlosS0FPYyxJQVovQixFQVJ1QixFQWN2QixXQWlCNkIsTUE5QkssRUFvQmxDLGlCQVdlLFdBOUJmLEFBK0JtQixlQUNOLFNBRWIiLCJmaWxlIjoiL2hvbWUvYmF5dWRpcmdhbnRhcmEvS09QSV9ESU5HSU4vTVlXRUJTSVRFL2NvbXBvbmVudHMvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmNvbnN0IEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZnVsbG5hbWUgPSB1c2VSZWYoJycpOyAgICAgICBcbiAgICBjb25zdCBlbWFpbCA9IHVzZVJlZignJyk7XG4gICAgY29uc3QgdGV4dGFyZWEgPSB1c2VSZWYoJycpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IHVzZVJlZignJylcbiAgICBjb25zdCBoYW5kbGVQcmVzcyA9IChlKSA9PiB7XG4gICAgICAgIGlmKGUua2V5ID09PSAnRW50ZXInKXtcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0ID09IGZ1bGxuYW1lLmN1cnJlbnQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYW1hJylcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGRrJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWxlcnQoJ2hpJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyZXN0ZWRcIj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8cD5DT05UQUNUIFVTPC9wPiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgcmVmPXt0ZXh0YXJlYX0gbmFtZT1cIlwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJZb3VyIE1lc3NhZ2VcIiBvbktleVByZXNzPXtoYW5kbGVQcmVzc30vPlxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgZm9ybSB7ICBcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAlIHZ3O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNBOUE3QTc7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAzcmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLHNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9ybSA+IHB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBbGljZScsc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCAsIHRleHRhcmVhe1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0E5QTdBNztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4cmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtOyBcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCAsIHRleHRhcmVhICwgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMzQ2NDY7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzNDY0NjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbil9XG5leHBvcnQgZGVmYXVsdCBGb3JtOyAgICJdfQ== */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Form.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.1ac43ac0e0b22bcd00c5.hot-update.js.map