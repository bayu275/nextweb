webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Recents.js":
/*!*******************************!*\
  !*** ./components/Recents.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recents; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_images_Porto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/images/Porto */ "./public/static/images/Porto.js");
/* harmony import */ var _components_Recent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Recent */ "./components/Recent.js");
var _jsxFileName = "/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recents.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Recents() {
  var data = _public_static_images_Porto__WEBPACK_IMPORTED_MODULE_2__["default"].portofolio;
  return __jsx("div", {
    className: "jsx-4218683242" + " " + "container recents mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-4218683242" + " " + "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Recent Works"), __jsx("div", {
    className: "jsx-4218683242" + " " + "card-group mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, data.map(function (item, index) {
    return __jsx(_components_Recent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      data: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
  }), __jsx("div", {
    className: "jsx-4218683242" + " " + "visible",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "..."), __jsx("div", {
    className: "jsx-4218683242" + " " + "invisible",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "...")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4218683242",
    __self: this
  }, ".container.jsx-4218683242{margin:0 auto;}.card-group.jsx-4218683242{display:grid;grid-template-columns:repeat(3,1fr);grid-gap :20px;width:100%;height:60%;}.card.jsx-4218683242{width:100%;border-radius:20px !important;}img.jsx-4218683242{border-radius:20px !important;height:15rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUd1QixBQUdILEFBT0YsQUFJbUIsV0FIQSxFQVBNLENBSHBDLGdCQWNhLFdBSGIsRUFJQSxNQVhlLGVBQ0osV0FDQSxXQUNYIiwiZmlsZSI6Ii9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9ydG9mb2xpbyBmcm9tICcuLi9wdWJsaWMvc3RhdGljL2ltYWdlcy9Qb3J0byc7XG5pbXBvcnQgUmVjZW50IGZyb20gJy4uL2NvbXBvbmVudHMvUmVjZW50JzsgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2VudHMoKXtcbiAgICBjb25zdCBkYXRhID0gcG9ydG9mb2xpby5wb3J0b2ZvbGlvO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWNlbnRzIG10LTVcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+UmVjZW50IFdvcmtzPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWdyb3VwIG10LTNcIj5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT4gKFxuICAgICAgICAgICAgPFJlY2VudCBcbiAgICAgICAgICAgICAga2V5ID0ge2luZGV4fVxuICAgICAgICAgICAgICBkYXRhID0ge2l0ZW19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzaWJsZVwiPi4uLjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52aXNpYmxlXCI+Li4uPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgICAgLmNhcmQtZ3JvdXAge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICAgIGdyaWQtZ2FwIDogMjBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICB9XG4gICAgICAuY2FyZCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIGltZyB7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDE1cmVtO1xuICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlbnQgY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAvLyAgICAgPGgyPlJFQ0VOVCBXT1JLUzwvaDI+XG4gICAgICAvLyAgICAgPHNlY3Rpb24gPlxuICAgICAgLy8gICAgICAge2RhdGEubWFwKChpdGVtLGluZGV4KSA9PiAoXG4gICAgICAvLyAgICAgICAgICAgPFJlY2VudCBkYXRhPXtpdGVtfSBrZXk9e2luZGV4fS8+ICBcbiAgICAgIC8vICAgICAgICkpfSBcbiAgICAgIC8vICAgPC9zZWN0aW9uPlxuICAgICAgLy8gPHN0eWxlIGpzeD57YFxuICAgICAgLy8gLnJlY2VudCB7XG4gICAgICAvLyAgICAgcGFkZGluZzogMCA0cmVtO1xuICAgICAgLy8gICAgIG1hcmdpbi10b3A6IDMuNXJlbVxuICAgICAgICAgIFxuICAgICAgLy8gfVxuICAgICAgLy8gICBzZWN0aW9uIHtcbiAgICAgIC8vICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAvLyAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgLy8gICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMyxhdXRvKTtcbiAgICAgIC8vICAgICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgICAgLy8gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAvLyAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLy8gICB9XG4gICAgICAvLyAgIGgye1xuICAgICAgLy8gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLy8gICAgICAgZm9udC1mYW1pbHk6ICdBbGljZScsc2VyaWY7IFxuICAgICAgLy8gICAgICAgbWFyZ2luOiAwO1xuICAgICAgLy8gICB9XG4gICAgICAvLyBgfTwvc3R5bGU+XG4gICAgICAvLyA8L2Rpdj5cbiAgICApXG59ICJdfQ== */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recents.js */")) //   <div className="recent container-fluid">
  //     <h2>RECENT WORKS</h2>
  //     <section >
  //       {data.map((item,index) => (
  //           <Recent data={item} key={index}/>  
  //       ))} 
  //   </section>
  // <style jsx>{`
  // .recent {
  //     padding: 0 4rem;
  //     margin-top: 3.5rem
  // }
  //   section {
  //       margin-top: 3rem;
  //       display: grid;
  //       grid-template-columns: repeat(3,auto);
  //       grid-gap: 2rem;
  //       justify-content: center;
  //       box-sizing: border-box;
  //   }
  //   h2{
  //       text-align: center;
  //       font-family: 'Alice',serif; 
  //       margin: 0;
  //   }
  // `}</style>
  // </div>
  ;
}

/***/ })

})
//# sourceMappingURL=index.js.a590248eb3a374f2be9c.hot-update.js.map