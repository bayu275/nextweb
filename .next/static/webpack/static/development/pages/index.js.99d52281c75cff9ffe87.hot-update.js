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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isStatus = _useState[0],
      setIsStatus = _useState[1];

  function updateUI(e) {
    e.preventDefault();

    if (e.type === 'mouseenter') {
      setIsStatus(true);
    } else if (e.type === 'mouseleave') {
      setIsStatus(false);
    }
  }

  return __jsx("div", {
    className: "jsx-4218683242" + " " + "container recents mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-4218683242" + " " + "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Recent Works"), __jsx("div", {
    className: "jsx-4218683242" + " " + "card-group mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, data.map(function (item, index) {
    return __jsx(_components_Recent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      data: item,
      update: updateUI,
      status: isStatus,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    });
  }), __jsx("div", {
    className: "jsx-4218683242" + " " + "visible",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "..."), __jsx("div", {
    className: "jsx-4218683242" + " " + "invisible",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "...")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4218683242",
    __self: this
  }, ".container.jsx-4218683242{margin:0 auto;}.card-group.jsx-4218683242{display:grid;grid-template-columns:repeat(3,1fr);grid-gap :20px;width:100%;height:60%;}.card.jsx-4218683242{width:100%;border-radius:20px !important;}img.jsx-4218683242{border-radius:20px !important;height:15rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NrQixBQUd1QixBQUdILEFBT0YsQUFJbUIsV0FIQSxFQVBNLENBSHBDLGdCQWNhLFdBSGIsRUFJQSxNQVhlLGVBQ0osV0FDQSxXQUNYIiwiZmlsZSI6Ii9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9ydG9mb2xpbyBmcm9tICcuLi9wdWJsaWMvc3RhdGljL2ltYWdlcy9Qb3J0byc7XG5pbXBvcnQgUmVjZW50IGZyb20gJy4uL2NvbXBvbmVudHMvUmVjZW50JzsgXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjZW50cygpe1xuICAgIGNvbnN0IGRhdGEgPSBwb3J0b2ZvbGlvLnBvcnRvZm9saW87XG4gICAgY29uc3QgW2lzU3RhdHVzLHNldElzU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVVJKGUpe1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZihlLnR5cGUgPT09ICdtb3VzZWVudGVyJyl7XG4gICAgICAgICAgICAgIHNldElzU3RhdHVzKHRydWUpXG4gICAgICAgICAgfWVsc2UgaWYoZS50eXBlID09PSAnbW91c2VsZWF2ZScpe1xuICAgICAgICAgICAgICBzZXRJc1N0YXR1cyhmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlY2VudHMgbXQtNVwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5SZWNlbnQgV29ya3M8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZ3JvdXAgbXQtM1wiPlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSxpbmRleCk9PiAoXG4gICAgICAgICAgICA8UmVjZW50IFxuICAgICAgICAgICAgICBrZXkgPSB7aW5kZXh9XG4gICAgICAgICAgICAgIGRhdGEgPSB7aXRlbX1cbiAgICAgICAgICAgICAgdXBkYXRlPXt1cGRhdGVVSX1cbiAgICAgICAgICAgICAgc3RhdHVzPXtpc1N0YXR1c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNpYmxlXCI+Li4uPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZpc2libGVcIj4uLi48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICAuY2FyZC1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xuICAgICAgZ3JpZC1nYXAgOiAyMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgIH1cbiAgICAgIC5jYXJkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgaW1nIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VudCBjb250YWluZXItZmx1aWRcIj5cbiAgICAgIC8vICAgICA8aDI+UkVDRU5UIFdPUktTPC9oMj5cbiAgICAgIC8vICAgICA8c2VjdGlvbiA+XG4gICAgICAvLyAgICAgICB7ZGF0YS5tYXAoKGl0ZW0saW5kZXgpID0+IChcbiAgICAgIC8vICAgICAgICAgICA8UmVjZW50IGRhdGE9e2l0ZW19IGtleT17aW5kZXh9Lz4gIFxuICAgICAgLy8gICAgICAgKSl9IFxuICAgICAgLy8gICA8L3NlY3Rpb24+XG4gICAgICAvLyA8c3R5bGUganN4PntgXG4gICAgICAvLyAucmVjZW50IHtcbiAgICAgIC8vICAgICBwYWRkaW5nOiAwIDRyZW07XG4gICAgICAvLyAgICAgbWFyZ2luLXRvcDogMy41cmVtXG4gICAgICAgICAgXG4gICAgICAvLyB9XG4gICAgICAvLyAgIHNlY3Rpb24ge1xuICAgICAgLy8gICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgIC8vICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAvLyAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLGF1dG8pO1xuICAgICAgLy8gICAgICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgICAvLyAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIC8vICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vICAgaDJ7XG4gICAgICAvLyAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAvLyAgICAgICBmb250LWZhbWlseTogJ0FsaWNlJyxzZXJpZjsgXG4gICAgICAvLyAgICAgICBtYXJnaW46IDA7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIGB9PC9zdHlsZT5cbiAgICAgIC8vIDwvZGl2PlxuICAgIClcbn0gIl19 */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recents.js */")) //   <div className="recent container-fluid">
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false

})
//# sourceMappingURL=index.js.99d52281c75cff9ffe87.hot-update.js.map