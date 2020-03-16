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
    className: "jsx-2867528715" + " " + "d-flex align-items-center justify-content-center animated pulse delay1-s",
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
  }, ".card.jsx-2867528715{width:100%;border-radius:10px !important;}.card.jsx-2867528715 div.jsx-2867528715{background-color:rgba(0,0,0,.8);height:15rem;border-radius:10px !important;position:absolute;width:100%;}.card.jsx-2867528715 div.jsx-2867528715>img.jsx-2867528715{width:40px;height:40px;}img.jsx-2867528715{border-radius:10px !important;height:15rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQm9CLEFBR3dCLEFBSTRCLEFBT3hCLEFBSWUsV0FkQSxBQVdkLFlBQ2hCLE9BR2EsRUFYSSxTQUhqQixFQWVBLEVBWGtDLDhCQUNaLGtCQUNQLFdBQ2YiLCJmaWxlIjoiL2hvbWUvYmF5dWRpcmdhbnRhcmEvS09QSV9ESU5HSU4vTVlXRUJTSVRFL2NvbXBvbmVudHMvUmVjZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgcmVjZW50ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBnYW1iYXIgfSA9IHByb3BzLmRhdGE7XG4gICAgY29uc3QgW2lzU3RhdHVzLHNldElzU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVVJKGUpe1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZihlLnR5cGUgPT09ICdtb3VzZWVudGVyJyl7XG4gICAgICAgICAgICAgIHNldElzU3RhdHVzKHRydWUpXG4gICAgICAgICAgfWVsc2UgaWYoZS50eXBlID09PSAnbW91c2VsZWF2ZScpe1xuICAgICAgICAgICAgICBzZXRJc1N0YXR1cyhmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17Z2FtYmFyfSBhbHQ9e2dhbWJhcn0gb25Nb3VzZUVudGVyPXt1cGRhdGVVSX0gb25Nb3VzZUxlYXZlPXt1cGRhdGVVSX0vPlxuICAgICAgICAgIHtpc1N0YXR1cyA9PSBmYWxzZSA/IG51bGwgOiA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBhbmltYXRlZCBwdWxzZSBkZWxheTEtc1wiIG9uTW91c2VFbnRlcj17dXBkYXRlVUl9IG9uTW91c2VMZWF2ZT17dXBkYXRlVUl9PjxpbWcgIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL3N0YXRpYy9jbGljay5zdmcnKX0gYWx0PXtyZXF1aXJlKCcuLi9wdWJsaWMvc3RhdGljL2NsaWNrLnN2ZycpfS8+PC9kaXY+fVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkIGRpdiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQgZGl2ID4gaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gICAgLy8gY29uc3Qge2dhbWJhcn0gPSBwcm9wcy5kYXRhXG4gICAgLy8gY29uc3QgW2lzU3RhdHVzLHNldElzU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBjb25zdCBsYXRhciA9IHVzZVJlZignJyk7XG4gICAgIFxuICAgIC8vIGZ1bmN0aW9uIHVwZGF0ZVVJKGUpe1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIGlmKGUudHlwZSA9PT0gJ21vdXNlZW50ZXInKXtcbiAgICAvLyAgICAgICAgIHNldElzU3RhdHVzKHRydWUpXG4gICAgLy8gICAgIH1lbHNlIGlmKGUudHlwZSA9PT0gJ21vdXNlbGVhdmUnKXtcbiAgICAvLyAgICAgICAgIHNldElzU3RhdHVzKGZhbHNlKVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gcmV0dXJuIChcbiAgICAvLyAgICAgPGZpZ3VyZSA+XG4gICAgLy8gICAgICAgICA8aW1nIGlkPVwicmVjZW50aW1nXCIgc3JjPXtnYW1iYXJ9IGFsdD17Z2FtYmFyfSBvbk1vdXNlRW50ZXI9e3VwZGF0ZVVJfSBvbk1vdXNlTGVhdmU9e3VwZGF0ZVVJfS8+IFxuICAgIC8vICAgICAgICAgPGRpdiBpZD1cInJlY2VudGltZ1wiIHJlZj17bGF0YXJ9IGNsYXNzTmFtZT1cImxhdGFyXCIgb25Nb3VzZUVudGVyPXt1cGRhdGVVSX0gb25Nb3VzZUxlYXZlPXt1cGRhdGVVSX0+PGltZyBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9zdGF0aWMvY2xpY2suc3ZnJyl9IGFsdD17cmVxdWlyZSgnLi4vcHVibGljL3N0YXRpYy9jbGljay5zdmcnKX0vPjwvZGl2PiAgXG4gICAgLy8gICAgICAgICB7Lyoge2lzU3RhdHVzID09IGZhbHNlID8gbnVsbCA6IDxkaXYgY2xhc3NOYW1lPVwibGF0YXJcIj48aW1nIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL3N0YXRpYy9jbGljay5zdmcnKX0gYWx0PXtyZXF1aXJlKCcuLi9wdWJsaWMvc3RhdGljL2NsaWNrLnN2ZycpfSBvbk1vdXNlRW50ZXI9e3VwZGF0ZVVJfSBvbk1vdXNlTGVhdmU9e3VwZGF0ZVVJfS8+PC9kaXY+fSAgKi99XG4gICAgLy8gICAgICAgICB7Lyoge2lzU3RhdHVzID09IGZhbHNlID8gbnVsbCA6IDxkaXYgY2xhc3NOYW1lPVwic2hvd1wiIG9uTW91c2VFbnRlcj17dXBkYXRlVUl9IG9uTW91c2VMZWF2ZT17dXBkYXRlVUl9PjxhIGhyZWY9XCJodHRwczovL21vdmllc2RpcmdhbnRhcmEubmV0bGlmeS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PHA+TGl2ZSBQcmV2aWV3PC9wPjwvYT48L2Rpdj59ICAqL31cbiAgICAvLyAgICAgICAgIHsvKiB7aXNTdGF0dXMgPT0gZmFsc2UgPyBudWxsIDogIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIiBvbk1vdXNlRW50ZXI9e3VwZGF0ZVVJfSBvbk1vdXNlTGVhdmU9e3VwZGF0ZVVJfT48TGluayBocmVmPVwiL3BvcnRvZm9saW9cIj48YT48cD5NZW1idWF0IFdlYnNpdGUgRGluYW1pczwvcD48L2E+PC9MaW5rPjwvZGl2Pn0gKi99XG4gICAgLy8gICAgIDxzdHlsZSBqc3g+e2BcbiAgICAvLyAgICAgICAgIC5sYXRhciB7XG4gICAgLy8gICAgICAgICAgICAgd2lkdGg6IDIwcmVtO1xuICAgIC8vICAgICAgICAgICAgIGhlaWdodDogMTNyZW07XG4gICAgLy8gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICAgICAgICAgICAgIHRvcDogMDtcbiAgICAvLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgIC8vICAgICAgICAgICAgIGRpc3BsYXk6ICR7aXNTdGF0dXMgPT0gZmFsc2UgPyBgbm9uZWAgOiBgZmxleGB9OyBcbiAgICAvLyAgICAgICAgICAgICBhbmltYXRpb24gOiBkZXRhaWwgMC41cyBlYXNlO1xuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICBAa2V5ZnJhbWVzIGRldGFpbCB7XG4gICAgLy8gICAgICAgICAgICAgZnJvbSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB0byB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAgIFxuICAgIC8vICAgICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAubGF0YXIgaW1nIHsgXG4gICAgLy8gICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgLy8gICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgZmlndXJlIHtcbiAgICAvLyAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgLy8gICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIC8vICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIC8vICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAvLyAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGZpZ3VyZSBpbWcge1xuICAgIC8vICAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAvLyAgICAgICAgICAgICBoZWlnaHQ6IDEzcmVtO1xuICAgIC8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgZmlndXJlIC5zaG93IGEgLCBmaWd1cmUgLnRpdGxlIGEgIHtcbiAgICAvLyAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAvLyAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLy8gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgZmlndXJlIC5zaG93ICBhICwgZmlndXJlIC50aXRsZSBhIDpob3ZlciB7IFxuICAgIC8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgLnNob3cge1xuICAgIC8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgICAgICAgICAgICB0b3A6IDAuMXB4O1xuICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgIC8vICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIC8vICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgLy8gICAgICAgICAgICAgYW5pbWF0aW9uOiB0b3AgMS4yczsgICBcbiAgICAgICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIC50aXRsZSB7XG4gICAgLy8gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICAgICAgICAgICAgIGJvdHRvbTogMC4xcHg7XG4gICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XG4gICAgLy8gICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAvLyAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAvLyAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvLyAgICAgICAgICAgICBhbmltYXRpb246IGJvdHRvbSAwLjhzO1xuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgIGB9PC9zdHlsZT5cbiAgICAvLyAgICAgPC9maWd1cmU+XG4gICAgLy8gKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWNlbnQ7Il19 */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recent.js */")); // const {gambar} = props.data
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
//# sourceMappingURL=index.js.365dc1b0bfe8ce9eb30a.hot-update.js.map