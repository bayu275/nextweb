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
    className: "jsx-2076607552" + " " + "card-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data.map(function (item, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-2076607552" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("img", {
      src: item.gambar,
      alt: item.gambar,
      className: "jsx-2076607552" + " " + "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2076607552",
    __self: this
  }, ".card-group.jsx-2076607552{display:grid;grid-template-columns:repeat(3,25%);grid-gap :20px;}.card.jsx-2076607552{width:100%;height:100%;border-radius:20px;}img.jsx-2076607552{border-radius:20px;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYW9CLEFBRzBCLEFBS0YsQUFLUSxXQUpQLEVBTHdCLE1BVXpCLElBSlEsT0FLUCxZQUpkLEFBS0EsT0FYaUIsZUFDakIiLCJmaWxlIjoiL2hvbWUvYmF5dWRpcmdhbnRhcmEvS09QSV9ESU5HSU4vTVlXRUJTSVRFL2NvbXBvbmVudHMvUmVjZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwb3J0b2ZvbGlvIGZyb20gJy4uL3B1YmxpYy9zdGF0aWMvaW1hZ2VzL1BvcnRvJztcbmltcG9ydCBSZWNlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9SZWNlbnQnOyBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjZW50cygpe1xuICAgIGNvbnN0IGRhdGEgPSBwb3J0b2ZvbGlvLnBvcnRvZm9saW87XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ncm91cFwiPlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17aXRlbS5nYW1iYXJ9IGFsdD17aXRlbS5nYW1iYXJ9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNhcmQtZ3JvdXAge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMjUlKTtcbiAgICAgICAgICAgIGdyaWQtZ2FwIDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZW50IGNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgLy8gICAgIDxoMj5SRUNFTlQgV09SS1M8L2gyPlxuICAgICAgLy8gICAgIDxzZWN0aW9uID5cbiAgICAgIC8vICAgICAgIHtkYXRhLm1hcCgoaXRlbSxpbmRleCkgPT4gKFxuICAgICAgLy8gICAgICAgICAgIDxSZWNlbnQgZGF0YT17aXRlbX0ga2V5PXtpbmRleH0vPiAgXG4gICAgICAvLyAgICAgICApKX0gXG4gICAgICAvLyAgIDwvc2VjdGlvbj5cbiAgICAgIC8vIDxzdHlsZSBqc3g+e2BcbiAgICAgIC8vIC5yZWNlbnQge1xuICAgICAgLy8gICAgIHBhZGRpbmc6IDAgNHJlbTtcbiAgICAgIC8vICAgICBtYXJnaW4tdG9wOiAzLjVyZW1cbiAgICAgICAgICBcbiAgICAgIC8vIH1cbiAgICAgIC8vICAgc2VjdGlvbiB7XG4gICAgICAvLyAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgLy8gICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIC8vICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsYXV0byk7XG4gICAgICAvLyAgICAgICBncmlkLWdhcDogMnJlbTtcbiAgICAgIC8vICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLy8gICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICBoMntcbiAgICAgIC8vICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIC8vICAgICAgIGZvbnQtZmFtaWx5OiAnQWxpY2UnLHNlcmlmOyBcbiAgICAgIC8vICAgICAgIG1hcmdpbjogMDtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gYH08L3N0eWxlPlxuICAgICAgLy8gPC9kaXY+XG4gICAgKVxufSAiXX0= */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recents.js */")) //   <div className="recent container-fluid">
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
//# sourceMappingURL=index.js.b47d90b569e5054dc2c2.hot-update.js.map