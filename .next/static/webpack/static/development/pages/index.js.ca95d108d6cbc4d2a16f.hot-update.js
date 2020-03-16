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
    className: "jsx-392908875" + " " + "card",
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
    className: "jsx-392908875" + " " + "card-img-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), isStatus == false ? null : __jsx("div", {
    onMouseEnter: updateUI,
    onMouseLeave: updateUI,
    className: "jsx-392908875" + " " + "d-flex align-items-center justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../public/static/click.svg */ "./public/static/click.svg"),
    alt: __webpack_require__(/*! ../public/static/click.svg */ "./public/static/click.svg"),
    className: "jsx-392908875",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "392908875",
    __self: this
  }, ".card.jsx-392908875{width:100%;border-radius:10px !important;}.card.jsx-392908875 div.jsx-392908875{background-color:rgba(0,0,0,.8);height:15rem;border-radius:10px !important;position:absolute;width:100%;-webkit-animation:popup-jsx-392908875 1.5s;animation:popup-jsx-392908875 1.5s;}@-webkit-keyframes popup-jsx-392908875{20%{width:80%;height:80%;}50%{width:100%;height:100%;}}@keyframes popup-jsx-392908875{20%{width:80%;height:80%;}50%{width:100%;height:100%;}}.card.jsx-392908875 div.jsx-392908875>img.jsx-392908875{width:40px;height:40px;}img.jsx-392908875{border-radius:10px !important;height:15rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQm9CLEFBR3dCLEFBSTRCLEFBU3JCLEFBSUMsQUFLSixBQUllLFVBWlgsQ0FiVyxBQWlCVixBQUtKLFVBUlosRUFJQSxBQUtKLE9BR2EsRUF0QkksU0FIakIsRUEwQkEsRUF0QmtDLDhCQUNaLGtCQUNQLFdBQ1UsOEVBQ3pCIiwiZmlsZSI6Ii9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IHJlY2VudCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZ2FtYmFyIH0gPSBwcm9wcy5kYXRhO1xuICAgIGNvbnN0IFtpc1N0YXR1cyxzZXRJc1N0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVVSShlKXtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaWYoZS50eXBlID09PSAnbW91c2VlbnRlcicpe1xuICAgICAgICAgICAgICBzZXRJc1N0YXR1cyh0cnVlKVxuICAgICAgICAgIH1lbHNlIGlmKGUudHlwZSA9PT0gJ21vdXNlbGVhdmUnKXtcbiAgICAgICAgICAgICAgc2V0SXNTdGF0dXMoZmFsc2UpXG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e2dhbWJhcn0gYWx0PXtnYW1iYXJ9IG9uTW91c2VFbnRlcj17dXBkYXRlVUl9IG9uTW91c2VMZWF2ZT17dXBkYXRlVUl9Lz5cbiAgICAgICAgICB7aXNTdGF0dXMgPT0gZmFsc2UgPyBudWxsIDogPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBvbk1vdXNlRW50ZXI9e3VwZGF0ZVVJfSBvbk1vdXNlTGVhdmU9e3VwZGF0ZVVJfT48aW1nICBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9zdGF0aWMvY2xpY2suc3ZnJyl9IGFsdD17cmVxdWlyZSgnLi4vcHVibGljL3N0YXRpYy9jbGljay5zdmcnKX0vPjwvZGl2Pn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZCBkaXYge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHBvcHVwIDEuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIHBvcHVwIHtcbiAgICAgICAgICAgICAgICAyMCV7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA1MCV7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQgZGl2ID4gaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gICAgLy8gY29uc3Qge2dhbWJhcn0gPSBwcm9wcy5kYXRhXG4gICAgLy8gY29uc3QgW2lzU3RhdHVzLHNldElzU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBjb25zdCBsYXRhciA9IHVzZVJlZignJyk7XG4gICAgIFxuICAgIC8vIGZ1bmN0aW9uIHVwZGF0ZVVJKGUpe1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIGlmKGUudHlwZSA9PT0gJ21vdXNlZW50ZXInKXtcbiAgICAvLyAgICAgICAgIHNldElzU3RhdHVzKHRydWUpXG4gICAgLy8gICAgIH1lbHNlIGlmKGUudHlwZSA9PT0gJ21vdXNlbGVhdmUnKXtcbiAgICAvLyAgICAgICAgIHNldElzU3RhdHVzKGZhbHNlKVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gcmV0dXJuIChcbiAgICAvLyAgICAgPGZpZ3VyZSA+XG4gICAgLy8gICAgICAgICA8aW1nIGlkPVwicmVjZW50aW1nXCIgc3JjPXtnYW1iYXJ9IGFsdD17Z2FtYmFyfSBvbk1vdXNlRW50ZXI9e3VwZGF0ZVVJfSBvbk1vdXNlTGVhdmU9e3VwZGF0ZVVJfS8+IFxuICAgIC8vICAgICAgICAgPGRpdiBpZD1cInJlY2VudGltZ1wiIHJlZj17bGF0YXJ9IGNsYXNzTmFtZT1cImxhdGFyXCIgb25Nb3VzZUVudGVyPXt1cGRhdGVVSX0gb25Nb3VzZUxlYXZlPXt1cGRhdGVVSX0+PGltZyBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9zdGF0aWMvY2xpY2suc3ZnJyl9IGFsdD17cmVxdWlyZSgnLi4vcHVibGljL3N0YXRpYy9jbGljay5zdmcnKX0vPjwvZGl2PiAgXG4gICAgLy8gICAgICAgICB7Lyoge2lzU3RhdHVzID09IGZhbHNlID8gbnVsbCA6IDxkaXYgY2xhc3NOYW1lPVwibGF0YXJcIj48aW1nIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL3N0YXRpYy9jbGljay5zdmcnKX0gYWx0PXtyZXF1aXJlKCcuLi9wdWJsaWMvc3RhdGljL2NsaWNrLnN2ZycpfSBvbk1vdXNlRW50ZXI9e3VwZGF0ZVVJfSBvbk1vdXNlTGVhdmU9e3VwZGF0ZVVJfS8+PC9kaXY+fSAgKi99XG4gICAgLy8gICAgICAgICB7Lyoge2lzU3RhdHVzID09IGZhbHNlID8gbnVsbCA6IDxkaXYgY2xhc3NOYW1lPVwic2hvd1wiIG9uTW91c2VFbnRlcj17dXBkYXRlVUl9IG9uTW91c2VMZWF2ZT17dXBkYXRlVUl9PjxhIGhyZWY9XCJodHRwczovL21vdmllc2RpcmdhbnRhcmEubmV0bGlmeS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PHA+TGl2ZSBQcmV2aWV3PC9wPjwvYT48L2Rpdj59ICAqL31cbiAgICAvLyAgICAgICAgIHsvKiB7aXNTdGF0dXMgPT0gZmFsc2UgPyBudWxsIDogIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIiBvbk1vdXNlRW50ZXI9e3VwZGF0ZVVJfSBvbk1vdXNlTGVhdmU9e3VwZGF0ZVVJfT48TGluayBocmVmPVwiL3BvcnRvZm9saW9cIj48YT48cD5NZW1idWF0IFdlYnNpdGUgRGluYW1pczwvcD48L2E+PC9MaW5rPjwvZGl2Pn0gKi99XG4gICAgLy8gICAgIDxzdHlsZSBqc3g+e2BcbiAgICAvLyAgICAgICAgIC5sYXRhciB7XG4gICAgLy8gICAgICAgICAgICAgd2lkdGg6IDIwcmVtO1xuICAgIC8vICAgICAgICAgICAgIGhlaWdodDogMTNyZW07XG4gICAgLy8gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICAgICAgICAgICAgIHRvcDogMDtcbiAgICAvLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgIC8vICAgICAgICAgICAgIGRpc3BsYXk6ICR7aXNTdGF0dXMgPT0gZmFsc2UgPyBgbm9uZWAgOiBgZmxleGB9OyBcbiAgICAvLyAgICAgICAgICAgICBhbmltYXRpb24gOiBkZXRhaWwgMC41cyBlYXNlO1xuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICBAa2V5ZnJhbWVzIGRldGFpbCB7XG4gICAgLy8gICAgICAgICAgICAgZnJvbSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB0byB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAgIFxuICAgIC8vICAgICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAubGF0YXIgaW1nIHsgXG4gICAgLy8gICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgLy8gICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgZmlndXJlIHtcbiAgICAvLyAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgLy8gICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIC8vICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIC8vICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAvLyAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGZpZ3VyZSBpbWcge1xuICAgIC8vICAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAvLyAgICAgICAgICAgICBoZWlnaHQ6IDEzcmVtO1xuICAgIC8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgZmlndXJlIC5zaG93IGEgLCBmaWd1cmUgLnRpdGxlIGEgIHtcbiAgICAvLyAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAvLyAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLy8gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgZmlndXJlIC5zaG93ICBhICwgZmlndXJlIC50aXRsZSBhIDpob3ZlciB7IFxuICAgIC8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgLnNob3cge1xuICAgIC8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgICAgICAgICAgICB0b3A6IDAuMXB4O1xuICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgIC8vICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIC8vICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgLy8gICAgICAgICAgICAgYW5pbWF0aW9uOiB0b3AgMS4yczsgICBcbiAgICAgICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIC50aXRsZSB7XG4gICAgLy8gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICAgICAgICAgICAgIGJvdHRvbTogMC4xcHg7XG4gICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XG4gICAgLy8gICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAvLyAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAvLyAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvLyAgICAgICAgICAgICBhbmltYXRpb246IGJvdHRvbSAwLjhzO1xuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgIGB9PC9zdHlsZT5cbiAgICAvLyAgICAgPC9maWd1cmU+XG4gICAgLy8gKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWNlbnQ7Il19 */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recent.js */")); // const {gambar} = props.data
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
//# sourceMappingURL=index.js.ca95d108d6cbc4d2a16f.hot-update.js.map