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
    className: "jsx-1990454592" + " " + "card-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data.map(function (item, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-1990454592" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("img", {
      src: item.gambar,
      alt: item.gambar,
      className: "jsx-1990454592" + " " + "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1990454592",
    __self: this
  }, ".card-group.jsx-1990454592{display:grid;grid-template-columns:repeat(3,25%);grid-gap :20px;}.card.jsx-1990454592{width:100%;height:100%;border-radius:20px;}img.jsx-1990454592{border-radius:inherit !importan;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYW9CLEFBRzBCLEFBS0YsQUFLcUIsV0FKcEIsRUFMd0IsVUFNakIsU0FJUixVQUhiLENBSWMsTUFWRyxNQVdqQixTQVZBIiwiZmlsZSI6Ii9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9ydG9mb2xpbyBmcm9tICcuLi9wdWJsaWMvc3RhdGljL2ltYWdlcy9Qb3J0byc7XG5pbXBvcnQgUmVjZW50IGZyb20gJy4uL2NvbXBvbmVudHMvUmVjZW50JzsgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2VudHMoKXtcbiAgICBjb25zdCBkYXRhID0gcG9ydG9mb2xpby5wb3J0b2ZvbGlvO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZ3JvdXBcIj5cbiAgICAgICAge2RhdGEubWFwKChpdGVtLGluZGV4KT0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e2l0ZW0uZ2FtYmFyfSBhbHQ9e2l0ZW0uZ2FtYmFyfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jYXJkLWdyb3VwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDI1JSk7XG4gICAgICAgICAgICBncmlkLWdhcCA6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDsgXG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0ICFpbXBvcnRhbjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlbnQgY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAvLyAgICAgPGgyPlJFQ0VOVCBXT1JLUzwvaDI+XG4gICAgICAvLyAgICAgPHNlY3Rpb24gPlxuICAgICAgLy8gICAgICAge2RhdGEubWFwKChpdGVtLGluZGV4KSA9PiAoXG4gICAgICAvLyAgICAgICAgICAgPFJlY2VudCBkYXRhPXtpdGVtfSBrZXk9e2luZGV4fS8+ICBcbiAgICAgIC8vICAgICAgICkpfSBcbiAgICAgIC8vICAgPC9zZWN0aW9uPlxuICAgICAgLy8gPHN0eWxlIGpzeD57YFxuICAgICAgLy8gLnJlY2VudCB7XG4gICAgICAvLyAgICAgcGFkZGluZzogMCA0cmVtO1xuICAgICAgLy8gICAgIG1hcmdpbi10b3A6IDMuNXJlbVxuICAgICAgICAgIFxuICAgICAgLy8gfVxuICAgICAgLy8gICBzZWN0aW9uIHtcbiAgICAgIC8vICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAvLyAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgLy8gICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMyxhdXRvKTtcbiAgICAgIC8vICAgICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgICAgLy8gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAvLyAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLy8gICB9XG4gICAgICAvLyAgIGgye1xuICAgICAgLy8gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLy8gICAgICAgZm9udC1mYW1pbHk6ICdBbGljZScsc2VyaWY7IFxuICAgICAgLy8gICAgICAgbWFyZ2luOiAwO1xuICAgICAgLy8gICB9XG4gICAgICAvLyBgfTwvc3R5bGU+XG4gICAgICAvLyA8L2Rpdj5cbiAgICApXG59ICJdfQ== */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recents.js */")) //   <div className="recent container-fluid">
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
//# sourceMappingURL=index.js.f951a8ea1988959fd4a1.hot-update.js.map