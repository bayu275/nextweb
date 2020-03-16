webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Recent.js":
/*!******************************!*\
  !*** ./components/Recent.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recent.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var recent = function recent(props) {
  var gambar = props.data.gambar;

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
    className: "jsx-2867528715" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: gambar,
    alt: gambar,
    onMouseEnter: updateUI,
    onMouseLeave: updateUI,
    className: "jsx-2867528715" + " " + "card-img-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), isStatus == false ? null : __jsx("div", {
    onMouseEnter: updateUI,
    onMouseLeave: updateUI,
    className: "jsx-2867528715" + " " + "d-flex align-items-center justify-content-center animated fadeIn delay-1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../public/static/click.svg */ "./public/static/click.svg"),
    alt: __webpack_require__(/*! ../public/static/click.svg */ "./public/static/click.svg"),
    className: "jsx-2867528715",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2867528715",
    __self: this
  }, ".card.jsx-2867528715{width:100%;border-radius:10px !important;}.card.jsx-2867528715 div.jsx-2867528715{background-color:rgba(0,0,0,.8);height:15rem;border-radius:10px !important;position:absolute;width:100%;}.card.jsx-2867528715 div.jsx-2867528715>img.jsx-2867528715{width:40px;height:40px;}img.jsx-2867528715{border-radius:10px !important;height:15rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQm9CLEFBR3dCLEFBSTRCLEFBT3hCLEFBSWUsV0FkQSxBQVdkLFlBQ2hCLE9BR2EsRUFYSSxTQUhqQixFQWVBLEVBWGtDLDhCQUNaLGtCQUNQLFdBQ2YiLCJmaWxlIjoiL2hvbWUvYmF5dWRpcmdhbnRhcmEvS09QSV9ESU5HSU4vTVlXRUJTSVRFL2NvbXBvbmVudHMvUmVjZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgcmVjZW50ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBnYW1iYXIgfSA9IHByb3BzLmRhdGE7XG4gICAgY29uc3QgW2lzU3RhdHVzLHNldElzU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVVJKGUpe1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZihlLnR5cGUgPT09ICdtb3VzZWVudGVyJyl7XG4gICAgICAgICAgICAgIHNldElzU3RhdHVzKHRydWUpXG4gICAgICAgICAgfWVsc2UgaWYoZS50eXBlID09PSAnbW91c2VsZWF2ZScpe1xuICAgICAgICAgICAgICBzZXRJc1N0YXR1cyhmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17Z2FtYmFyfSBhbHQ9e2dhbWJhcn0gb25Nb3VzZUVudGVyPXt1cGRhdGVVSX0gb25Nb3VzZUxlYXZlPXt1cGRhdGVVSX0vPlxuICAgICAgICAgIHtpc1N0YXR1cyA9PSBmYWxzZSA/IG51bGwgOiA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBhbmltYXRlZCBmYWRlSW4gZGVsYXktMXNcIiBvbk1vdXNlRW50ZXI9e3VwZGF0ZVVJfSBvbk1vdXNlTGVhdmU9e3VwZGF0ZVVJfT48aW1nICBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9zdGF0aWMvY2xpY2suc3ZnJyl9IGFsdD17cmVxdWlyZSgnLi4vcHVibGljL3N0YXRpYy9jbGljay5zdmcnKX0vPjwvZGl2Pn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZCBkaXYge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkIGRpdiA+IGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICAgIC8vIGNvbnN0IHtnYW1iYXJ9ID0gcHJvcHMuZGF0YVxuICAgIC8vIGNvbnN0IFtpc1N0YXR1cyxzZXRJc1N0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gY29uc3QgbGF0YXIgPSB1c2VSZWYoJycpO1xuICAgICBcbiAgICAvLyBmdW5jdGlvbiB1cGRhdGVVSShlKXtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICBpZihlLnR5cGUgPT09ICdtb3VzZWVudGVyJyl7XG4gICAgLy8gICAgICAgICBzZXRJc1N0YXR1cyh0cnVlKVxuICAgIC8vICAgICB9ZWxzZSBpZihlLnR5cGUgPT09ICdtb3VzZWxlYXZlJyl7XG4gICAgLy8gICAgICAgICBzZXRJc1N0YXR1cyhmYWxzZSlcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIHJldHVybiAoXG4gICAgLy8gICAgIDxmaWd1cmUgPlxuICAgIC8vICAgICAgICAgPGltZyBpZD1cInJlY2VudGltZ1wiIHNyYz17Z2FtYmFyfSBhbHQ9e2dhbWJhcn0gb25Nb3VzZUVudGVyPXt1cGRhdGVVSX0gb25Nb3VzZUxlYXZlPXt1cGRhdGVVSX0vPiBcbiAgICAvLyAgICAgICAgIDxkaXYgaWQ9XCJyZWNlbnRpbWdcIiByZWY9e2xhdGFyfSBjbGFzc05hbWU9XCJsYXRhclwiIG9uTW91c2VFbnRlcj17dXBkYXRlVUl9IG9uTW91c2VMZWF2ZT17dXBkYXRlVUl9PjxpbWcgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvc3RhdGljL2NsaWNrLnN2ZycpfSBhbHQ9e3JlcXVpcmUoJy4uL3B1YmxpYy9zdGF0aWMvY2xpY2suc3ZnJyl9Lz48L2Rpdj4gIFxuICAgIC8vICAgICAgICAgey8qIHtpc1N0YXR1cyA9PSBmYWxzZSA/IG51bGwgOiA8ZGl2IGNsYXNzTmFtZT1cImxhdGFyXCI+PGltZyBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9zdGF0aWMvY2xpY2suc3ZnJyl9IGFsdD17cmVxdWlyZSgnLi4vcHVibGljL3N0YXRpYy9jbGljay5zdmcnKX0gb25Nb3VzZUVudGVyPXt1cGRhdGVVSX0gb25Nb3VzZUxlYXZlPXt1cGRhdGVVSX0vPjwvZGl2Pn0gICovfVxuICAgIC8vICAgICAgICAgey8qIHtpc1N0YXR1cyA9PSBmYWxzZSA/IG51bGwgOiA8ZGl2IGNsYXNzTmFtZT1cInNob3dcIiBvbk1vdXNlRW50ZXI9e3VwZGF0ZVVJfSBvbk1vdXNlTGVhdmU9e3VwZGF0ZVVJfT48YSBocmVmPVwiaHR0cHM6Ly9tb3ZpZXNkaXJnYW50YXJhLm5ldGxpZnkuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPjxwPkxpdmUgUHJldmlldzwvcD48L2E+PC9kaXY+fSAgKi99XG4gICAgLy8gICAgICAgICB7Lyoge2lzU3RhdHVzID09IGZhbHNlID8gbnVsbCA6ICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCIgb25Nb3VzZUVudGVyPXt1cGRhdGVVSX0gb25Nb3VzZUxlYXZlPXt1cGRhdGVVSX0+PExpbmsgaHJlZj1cIi9wb3J0b2ZvbGlvXCI+PGE+PHA+TWVtYnVhdCBXZWJzaXRlIERpbmFtaXM8L3A+PC9hPjwvTGluaz48L2Rpdj59ICovfVxuICAgIC8vICAgICA8c3R5bGUganN4PntgXG4gICAgLy8gICAgICAgICAubGF0YXIge1xuICAgIC8vICAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAvLyAgICAgICAgICAgICBoZWlnaHQ6IDEzcmVtO1xuICAgIC8vICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgICAgICAgICAgICB0b3A6IDA7XG4gICAgLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcbiAgICAvLyAgICAgICAgICAgICBkaXNwbGF5OiAke2lzU3RhdHVzID09IGZhbHNlID8gYG5vbmVgIDogYGZsZXhgfTsgXG4gICAgLy8gICAgICAgICAgICAgYW5pbWF0aW9uIDogZGV0YWlsIDAuNXMgZWFzZTtcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgQGtleWZyYW1lcyBkZXRhaWwge1xuICAgIC8vICAgICAgICAgICAgIGZyb20ge1xuICAgIC8vICAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgdG8ge1xuICAgIC8vICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgICBcbiAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgLmxhdGFyIGltZyB7IFxuICAgIC8vICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgIC8vICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGZpZ3VyZSB7XG4gICAgLy8gICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgIC8vICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAvLyAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAvLyAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgLy8gICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBmaWd1cmUgaW1nIHtcbiAgICAvLyAgICAgICAgICAgICB3aWR0aDogMjByZW07XG4gICAgLy8gICAgICAgICAgICAgaGVpZ2h0OiAxM3JlbTtcbiAgICAvLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8vICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGZpZ3VyZSAuc2hvdyBhICwgZmlndXJlIC50aXRsZSBhICB7XG4gICAgLy8gICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgLy8gICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC8vICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGZpZ3VyZSAuc2hvdyAgYSAsIGZpZ3VyZSAudGl0bGUgYSA6aG92ZXIgeyBcbiAgICAvLyAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIC5zaG93IHtcbiAgICAvLyAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgICAgICAgICAgdG9wOiAwLjFweDtcbiAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcbiAgICAvLyAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAvLyAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIC8vICAgICAgICAgICAgIGFuaW1hdGlvbjogdG9wIDEuMnM7ICAgXG4gICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICAudGl0bGUge1xuICAgIC8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgICAgICAgICAgICBib3R0b206IDAuMXB4O1xuICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgIC8vICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgLy8gICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgLy8gICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gICAgICAgICAgICAgYW5pbWF0aW9uOiBib3R0b20gMC44cztcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICBgfTwvc3R5bGU+XG4gICAgLy8gICAgIDwvZmlndXJlPlxuICAgIC8vIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVjZW50OyJdfQ== */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recent.js */")); // const {gambar} = props.data
  // const [isStatus,setIsStatus] = useState(false);
  // const latar = useRef('');
  // function updateUI(e){
  //     e.preventDefault();
  //     if(e.type === 'mouseenter'){
  //         setIsStatus(true)
  //     }else if(e.type === 'mouseleave'){
  //         setIsStatus(false)
  //     }
  // }
  // return (
  //     <figure >
  //         <img id="recentimg" src={gambar} alt={gambar} onMouseEnter={updateUI} onMouseLeave={updateUI}/> 
  //         <div id="recentimg" ref={latar} className="latar" onMouseEnter={updateUI} onMouseLeave={updateUI}><img src={require('../public/static/click.svg')} alt={require('../public/static/click.svg')}/></div>  
  //         {/* {isStatus == false ? null : <div className="latar"><img src={require('../public/static/click.svg')} alt={require('../public/static/click.svg')} onMouseEnter={updateUI} onMouseLeave={updateUI}/></div>}  */}
  //         {/* {isStatus == false ? null : <div className="show" onMouseEnter={updateUI} onMouseLeave={updateUI}><a href="https://moviesdirgantara.netlify.com" target="_blank" rel="noopener noreferrer"><p>Live Preview</p></a></div>}  */}
  //         {/* {isStatus == false ? null :  <div className="title" onMouseEnter={updateUI} onMouseLeave={updateUI}><Link href="/portofolio"><a><p>Membuat Website Dinamis</p></a></Link></div>} */}
  //     <style jsx>{`
  //         .latar {
  //             width: 20rem;
  //             height: 13rem;
  //             position: absolute;
  //             top: 0;
  //             border-radius: 10px;
  //             background-color: rgba(0, 0, 0, .8);
  //             display: ${isStatus == false ? `none` : `flex`}; 
  //             animation : detail 0.5s ease;
  //         }
  //         @keyframes detail {
  //             from {
  //                 width: 0;
  //             }
  //             to {
  //                 width: 100%;   
  //             }
  //         }
  //         .latar img { 
  //             width: 50px;
  //             height: 50px;
  //         }
  //         figure {
  //             margin: 0;
  //             height: auto;
  //             width: auto;
  //             box-sizing: border-box;
  //             position: relative; 
  //             float: left;
  //         }
  //         figure img {
  //             width: 20rem;
  //             height: 13rem;
  //             border-radius: 10px;
  //             display: block;
  //             margin: auto;
  //         }
  //         figure .show a , figure .title a  {
  //             color: #fff;
  //             text-decoration: none;
  //             text-align: center;
  //         }
  //         figure .show  a , figure .title a :hover { 
  //             font-weight: bold;
  //         }
  //         .show {
  //             width: 100%;
  //             position: absolute;
  //             top: 0.1px;
  //             background-color: rgba(0, 0, 0, .8);
  //             border-top-right-radius: 10px;
  //             border-top-left-radius: 10px;
  //             animation: top 1.2s;   
  //         }
  //         .title {
  //             width: 100%;
  //             position: absolute;
  //             bottom: 0.1px;
  //             background-color: rgba(0, 0, 0, .8);
  //             border-bottom-left-radius: 10px;
  //             border-bottom-right-radius: 10px;
  //             display: block;
  //             animation: bottom 0.8s;
  //         }
  //     `}</style>
  //     </figure>
  // )
};

/* harmony default export */ __webpack_exports__["default"] = (recent);

/***/ })

})
//# sourceMappingURL=index.js.10af3379d48c01f81d13.hot-update.js.map