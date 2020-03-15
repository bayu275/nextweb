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
    className: "jsx-2153391809" + " " + "interested",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("form", {
    className: "jsx-2153391809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2153391809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "CONTACT US"), __jsx("div", {
    className: "jsx-2153391809" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "Your Name",
    className: "jsx-2153391809" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2153391809" + " " + "form-group",
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
    className: "jsx-2153391809" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2153391809" + " " + "form-group",
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
    className: "jsx-2153391809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("button", {
    type: "submit",
    className: "jsx-2153391809" + " " + "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Submit")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2153391809",
    __self: this
  }, "form.jsx-2153391809{width:22rem;margin:0 auto;border:1px solid #A9A7A7;border-radius:20px;font-family:'Open Sans',serif;}form.jsx-2153391809>p.jsx-2153391809{font-family:'Alice',serif;font-size:1.3rem;margin:0;text-align:left;}input.jsx-2153391809,textarea.jsx-2153391809{border-radius:20px;border:1px solid #A9A7A7;padding:0 1rem;outline:none;}textarea.jsx-2153391809{min-height:8rem;padding-top:1rem;padding-bottom:1rem;width:100%;margin-bottom:0 !important;}input.jsx-2153391809,textarea.jsx-2153391809,button.jsx-2153391809{margin-bottom:1rem;}button.jsx-2153391809{outline:none;width:10rem;height:2.5rem;border-radius:20px;border:1px solid #e34646;background-color:#e34646;color:#fff;font-size:1rem;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NvQixBQUc2QixBQU9jLEFBTVAsQUFNSCxBQU9HLEFBR04sWUE1QkMsQ0E2QkYsR0FWSyxHQU5RLEFBYTdCLE1BSWtCLENBN0JXLEFBTVIsT0FhRyxNQVdELElBdkJWLENBTU0sT0FaSSxDQU9ILENBWUwsS0FXYyxDQWpCWixLQU9jLElBWi9CLEVBUGtDLEVBYWxDLFdBaUI2QixRQVY3QixTQW5CQSxRQThCZSxXQUNJLGVBQ04sU0FFYiIsImZpbGUiOiIvaG9tZS9iYXl1ZGlyZ2FudGFyYS9LT1BJX0RJTkdJTi9NWVdFQlNJVEUvY29tcG9uZW50cy9Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuY29uc3QgRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmdWxsbmFtZSA9IHVzZVJlZignJyk7ICAgICAgIFxuICAgIGNvbnN0IGVtYWlsID0gdXNlUmVmKCcnKTtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHVzZVJlZignJyk7XG4gICAgY29uc3QgYnV0dG9uID0gdXNlUmVmKCcnKVxuICAgIGNvbnN0IGhhbmRsZVByZXNzID0gKGUpID0+IHtcbiAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICAgICAgaWYoZS50YXJnZXQgPT0gZnVsbG5hbWUuY3VycmVudCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhbWEnKVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZGsnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhbGVydCgnaGknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZXJlc3RlZFwiPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxwPkNPTlRBQ1QgVVM8L3A+IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRhcmVhfSBuYW1lPVwiXCIgaWQ9XCJcIiBwbGFjZWhvbGRlcj1cIllvdXIgTWVzc2FnZVwiIG9uS2V5UHJlc3M9e2hhbmRsZVByZXNzfS8+XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBmb3JtIHsgIFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMnJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQTlBN0E3O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLHNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9ybSA+IHB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBbGljZScsc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCAsIHRleHRhcmVhe1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0E5QTdBNztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4cmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtOyBcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCAsIHRleHRhcmVhICwgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMzQ2NDY7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzNDY0NjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbil9XG5leHBvcnQgZGVmYXVsdCBGb3JtOyAgICJdfQ== */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Form.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.7ecb1e798946929ad4a0.hot-update.js.map