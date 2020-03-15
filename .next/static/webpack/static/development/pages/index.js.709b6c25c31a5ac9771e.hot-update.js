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
    className: "jsx-31877164" + " " + "interested",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("form", {
    className: "jsx-31877164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-31877164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "CONTACT US"), __jsx("div", {
    className: "jsx-31877164" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "Your Name",
    className: "jsx-31877164" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-31877164" + " " + "form-group",
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
    className: "jsx-31877164" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-31877164" + " " + "form-group",
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
    className: "jsx-31877164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("button", {
    type: "submit",
    className: "jsx-31877164" + " " + "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Submit")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "31877164",
    __self: this
  }, "form.jsx-31877164{width:80%;margin:0 auto;border:1px solid #A9A7A7;padding:2rem 3rem;border-radius:20px;font-family:'Open Sans',serif;}form.jsx-31877164>p.jsx-31877164{font-family:'Alice',serif;font-size:1.3rem;margin:0;text-align:left;}input.jsx-31877164,textarea.jsx-31877164{border-radius:20px;border:1px solid #A9A7A7;padding:0 1rem;outline:none;}textarea.jsx-31877164{min-height:8rem;padding-top:1rem;padding-bottom:1rem;width:100%;margin-bottom:0 !important;}input.jsx-31877164,textarea.jsx-31877164,button.jsx-31877164{margin-bottom:1rem;}button.jsx-31877164{outline:none;width:10rem;height:2.5rem;border-radius:20px;border:1px solid #e34646;background-color:#e34646;color:#fff;font-size:1rem;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NvQixBQUcyQixBQVFnQixBQU1QLEFBTUgsQUFPRyxBQUdOLFVBN0JDLEdBOEJGLEdBVkssR0FOUSxBQWE3QixLQTFCNkIsQ0E4QlgsQ0F2QkcsT0FhRyxNQVdELElBdkJWLENBTU0sS0FiRyxHQVFGLENBWUwsS0FXYyxDQWpCWixLQU9jLEdBcEJSLENBUXZCLElBTUEsV0FpQjZCLEdBOUJLLEtBb0JsQyxpQkFXZSxRQTlCZixHQStCbUIsZUFDTixTQUViIiwiZmlsZSI6Ii9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCBGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxuYW1lID0gdXNlUmVmKCcnKTsgICAgICAgXG4gICAgY29uc3QgZW1haWwgPSB1c2VSZWYoJycpO1xuICAgIGNvbnN0IHRleHRhcmVhID0gdXNlUmVmKCcnKTtcbiAgICBjb25zdCBidXR0b24gPSB1c2VSZWYoJycpXG4gICAgY29uc3QgaGFuZGxlUHJlc3MgPSAoZSkgPT4ge1xuICAgICAgICBpZihlLmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgICAgICBpZihlLnRhcmdldCA9PSBmdWxsbmFtZS5jdXJyZW50KXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2FtYScpXG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RkaycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFsZXJ0KCdoaScpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlcmVzdGVkXCI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPHA+Q09OVEFDVCBVUzwvcD4gXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPHRleHRhcmVhIHJlZj17dGV4dGFyZWF9IG5hbWU9XCJcIiBpZD1cIlwiIHBsYWNlaG9sZGVyPVwiWW91ciBNZXNzYWdlXCIgb25LZXlQcmVzcz17aGFuZGxlUHJlc3N9Lz5cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGZvcm0geyAgXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQTlBN0E3O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gM3JlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJyxzZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcm0gPiBwe1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWxpY2UnLHNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQgLCB0ZXh0YXJlYXtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNBOUE3QTc7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogOHJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQgLCB0ZXh0YXJlYSAsIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTM0NjQ2O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzQ2NDY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pfVxuZXhwb3J0IGRlZmF1bHQgRm9ybTsgICAiXX0= */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Form.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.709b6c25c31a5ac9771e.hot-update.js.map