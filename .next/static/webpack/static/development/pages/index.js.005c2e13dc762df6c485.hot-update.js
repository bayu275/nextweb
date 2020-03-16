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
    className: "jsx-2422087526" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2422087526" + " " + "card-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, data.map(function (item, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-2422087526" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("img", {
      src: item.gambar,
      alt: item.gambar,
      className: "jsx-2422087526" + " " + "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2422087526",
    __self: this
  }, ".container.jsx-2422087526{margin:0 auto;}.card-group.jsx-2422087526{display:grid;grid-template-columns:repeat(3,1fr);grid-gap :20px;width:90%;height:60%;}.card.jsx-2422087526{width:100%;border-radius:20px !important;}img.jsx-2422087526{border-radius:20px !important;height:15rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBR3VCLEFBR0gsQUFPRixBQUltQixXQUhBLEVBUE0sQ0FIcEMsZ0JBY2EsV0FIYixFQUlBLE1BWGUsZUFDTCxVQUNDLFdBQ1giLCJmaWxlIjoiL2hvbWUvYmF5dWRpcmdhbnRhcmEvS09QSV9ESU5HSU4vTVlXRUJTSVRFL2NvbXBvbmVudHMvUmVjZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwb3J0b2ZvbGlvIGZyb20gJy4uL3B1YmxpYy9zdGF0aWMvaW1hZ2VzL1BvcnRvJztcbmltcG9ydCBSZWNlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9SZWNlbnQnOyBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjZW50cygpe1xuICAgIGNvbnN0IGRhdGEgPSBwb3J0b2ZvbGlvLnBvcnRvZm9saW87XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ncm91cFwiPlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSxpbmRleCk9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e2l0ZW0uZ2FtYmFyfSBhbHQ9e2l0ZW0uZ2FtYmFyfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgICAgLmNhcmQtZ3JvdXAge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICAgIGdyaWQtZ2FwIDogMjBweDtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgIH1cbiAgICAgIC5jYXJkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgaW1nIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VudCBjb250YWluZXItZmx1aWRcIj5cbiAgICAgIC8vICAgICA8aDI+UkVDRU5UIFdPUktTPC9oMj5cbiAgICAgIC8vICAgICA8c2VjdGlvbiA+XG4gICAgICAvLyAgICAgICB7ZGF0YS5tYXAoKGl0ZW0saW5kZXgpID0+IChcbiAgICAgIC8vICAgICAgICAgICA8UmVjZW50IGRhdGE9e2l0ZW19IGtleT17aW5kZXh9Lz4gIFxuICAgICAgLy8gICAgICAgKSl9IFxuICAgICAgLy8gICA8L3NlY3Rpb24+XG4gICAgICAvLyA8c3R5bGUganN4PntgXG4gICAgICAvLyAucmVjZW50IHtcbiAgICAgIC8vICAgICBwYWRkaW5nOiAwIDRyZW07XG4gICAgICAvLyAgICAgbWFyZ2luLXRvcDogMy41cmVtXG4gICAgICAgICAgXG4gICAgICAvLyB9XG4gICAgICAvLyAgIHNlY3Rpb24ge1xuICAgICAgLy8gICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgIC8vICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAvLyAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLGF1dG8pO1xuICAgICAgLy8gICAgICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgICAvLyAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIC8vICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vICAgaDJ7XG4gICAgICAvLyAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAvLyAgICAgICBmb250LWZhbWlseTogJ0FsaWNlJyxzZXJpZjsgXG4gICAgICAvLyAgICAgICBtYXJnaW46IDA7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIGB9PC9zdHlsZT5cbiAgICAgIC8vIDwvZGl2PlxuICAgIClcbn0gIl19 */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recents.js */")) //   <div className="recent container-fluid">
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
//# sourceMappingURL=index.js.005c2e13dc762df6c485.hot-update.js.map