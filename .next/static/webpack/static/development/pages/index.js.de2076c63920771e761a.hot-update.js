webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/About.js":
/*!*****************************!*\
  !*** ./components/About.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_ABOUT_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/static/ABOUT.png */ "./public/static/ABOUT.png");
/* harmony import */ var _public_static_ABOUT_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_static_ABOUT_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_paper_plane_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/paper-plane.svg */ "./public/static/paper-plane.svg");
/* harmony import */ var _public_static_paper_plane_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_paper_plane_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/About.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var about = function about() {
  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h3", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "About Me"), __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("section", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Hi, saya ", __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Bayu Dirgantara"), ", FullStack Web Developer - Pekanbaru"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Saya sangat tertarik dengan web developer dan yang terkait ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), "dengan ", __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\u201Cpemograman\u201D")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Saya belajar pemograman sebagai FullStack Web Developer ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), "secara ", __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\u201Cotodidak\u201D")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Saya siap implementasi project with ", __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\u201Cwonderful people\u201D")), __jsx("button", {
    className: "btn btn-outline-secondary",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    src: _public_static_paper_plane_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: _public_static_paper_plane_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("font", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Contact me")))), __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: _public_static_ABOUT_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: _public_static_ABOUT_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (about);
{
  /* //   <div className="about container-fluid">
  //       <h2>ABOUT</h2>
  //       <div className="container">
  //           <span>
  //               <p>Hi, saya <em>Bayu Dirgantara</em>, FullStack Web Developer - Pekanbaru</p>
  //               <p>Saya sangat tertarik dengan web developer dan yang terkait <br/>dengan <em>“pemograman”</em></p>
  //               <p>Saya belajar pemograman sebagai FullStack Web Developer <br/>secara <em>“otodidak”</em></p>
  //               <p>Saya siap implementasi project with <em>“wonderful people”</em></p>
  //               <button><img src={imgBtn} alt={imgBtn}/><font>Contact me</font></button>
  //               </span>
  //           <img src={img} alt={img} />
  //       </div>
  //       <style jsx>{`
  //         .about {
  //             margin-top: 2rem;
  //             text-align: center;
  //         }
  //         h2 {
  //             font-family: 'Alice',serif;
  //         }
  //         .container {
  //             margin-top: 1.5rem;
  //             display: grid;
  //             grid-template-columns: repeat(2,45%);
  //             justify-content: center;
  //             grid-column-gap: 50px;
  //             padding-left: 7.5rem;
  //         }
  //         span {
  //             text-align: right;
  //             align-self: center;
  //         }
  //         button img {
  //             width: 20px;
  //             height: 20px;
  //             padding-right: 6px;
  //         }
  //         button {
  //             box-shadow: 0px 5px 10px -1px #ccc;
  //             width: 140px;
  //             height: 40px;
  //             display: flex;
  //             border: 1px solid #000000;
  //             padding: 4px 1rem;
  //             border-radius: 10px;
  //             margin-left: auto;
  //             background-color: #ffffff;
  //             margin-top: 15px;
  //             outline: none;
  //         }
  //         button:hover {
  //             background-color: #eeeeee;
  //             cursor: pointer;
  //         }
  //         button p {
  //             margin: 0;
  //         }
  //       `}</style>
  //   </div> */
}

/***/ })

})
//# sourceMappingURL=index.js.de2076c63920771e761a.hot-update.js.map