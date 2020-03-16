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
    className: "jsx-1752863915" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data.map(function (item, index) {
    return __jsx("img", {
      key: index,
      src: item.gambar,
      alt: item.gambar,
      className: "jsx-1752863915" + " " + "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1752863915",
    __self: this
  }, "img.jsx-1752863915{width:18rem;width:18rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV29CLEFBR3lCLFlBQ0EsWUFDZCIsImZpbGUiOiIvaG9tZS9iYXl1ZGlyZ2FudGFyYS9LT1BJX0RJTkdJTi9NWVdFQlNJVEUvY29tcG9uZW50cy9SZWNlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBvcnRvZm9saW8gZnJvbSAnLi4vcHVibGljL3N0YXRpYy9pbWFnZXMvUG9ydG8nO1xuaW1wb3J0IFJlY2VudCBmcm9tICcuLi9jb21wb25lbnRzL1JlY2VudCc7IFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNlbnRzKCl7XG4gICAgY29uc3QgZGF0YSA9IHBvcnRvZm9saW8ucG9ydG9mb2xpbztcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSxpbmRleCk9PiAoXG4gICAgICAgICAgPGltZyBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e2l0ZW0uZ2FtYmFyfSBhbHQ9e2l0ZW0uZ2FtYmFyfS8+XG4gICAgICAgICkpfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxOHJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxOHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZW50IGNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgLy8gICAgIDxoMj5SRUNFTlQgV09SS1M8L2gyPlxuICAgICAgLy8gICAgIDxzZWN0aW9uID5cbiAgICAgIC8vICAgICAgIHtkYXRhLm1hcCgoaXRlbSxpbmRleCkgPT4gKFxuICAgICAgLy8gICAgICAgICAgIDxSZWNlbnQgZGF0YT17aXRlbX0ga2V5PXtpbmRleH0vPiAgXG4gICAgICAvLyAgICAgICApKX0gXG4gICAgICAvLyAgIDwvc2VjdGlvbj5cbiAgICAgIC8vIDxzdHlsZSBqc3g+e2BcbiAgICAgIC8vIC5yZWNlbnQge1xuICAgICAgLy8gICAgIHBhZGRpbmc6IDAgNHJlbTtcbiAgICAgIC8vICAgICBtYXJnaW4tdG9wOiAzLjVyZW1cbiAgICAgICAgICBcbiAgICAgIC8vIH1cbiAgICAgIC8vICAgc2VjdGlvbiB7XG4gICAgICAvLyAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgLy8gICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIC8vICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsYXV0byk7XG4gICAgICAvLyAgICAgICBncmlkLWdhcDogMnJlbTtcbiAgICAgIC8vICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLy8gICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICBoMntcbiAgICAgIC8vICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIC8vICAgICAgIGZvbnQtZmFtaWx5OiAnQWxpY2UnLHNlcmlmOyBcbiAgICAgIC8vICAgICAgIG1hcmdpbjogMDtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gYH08L3N0eWxlPlxuICAgICAgLy8gPC9kaXY+XG4gICAgKVxufSAiXX0= */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recents.js */")) //   <div className="recent container-fluid">
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
//# sourceMappingURL=index.js.af1c4c208b5431eea181.hot-update.js.map