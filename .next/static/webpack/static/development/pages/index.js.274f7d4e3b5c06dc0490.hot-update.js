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
    className: "jsx-2111978852" + " " + "card",
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
    className: "jsx-2111978852" + " " + "card-img-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), isStatus == false ? null : __jsx("div", {
    onMouseEnter: updateUI,
    onMouseLeave: updateUI,
    className: "jsx-2111978852" + " " + "d-flex align-items-center justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../public/static/click.svg */ "./public/static/click.svg"),
    alt: __webpack_require__(/*! ../public/static/click.svg */ "./public/static/click.svg"),
    className: "jsx-2111978852",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2111978852",
    __self: this
  }, ".card.jsx-2111978852{width:100%;border-radius:10px !important;}.card.jsx-2111978852 div.jsx-2111978852{background-color:rgba(0,0,0,.8);height:15rem;border-radius:10px !important;position:absolute;width:100%;-webkit-animation:popup-jsx-2111978852 2s;animation:popup-jsx-2111978852 2s;}@-webkit-keyframes popup-jsx-2111978852{from{-webkit-transform:translate(-10%,-10%,-10%,-10%);-ms-transform:translate(-10%,-10%,-10%,-10%);transform:translate(-10%,-10%,-10%,-10%);}}@keyframes popup-jsx-2111978852{from{-webkit-transform:translate(-10%,-10%,-10%,-10%);-ms-transform:translate(-10%,-10%,-10%,-10%);transform:translate(-10%,-10%,-10%,-10%);}}.card.jsx-2111978852 div.jsx-2111978852>img.jsx-2111978852{width:40px;height:40px;}img.jsx-2111978852{border-radius:10px !important;height:15rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JheXVkaXJnYW50YXJhL0tPUElfRElOR0lOL01ZV0VCU0lURS9jb21wb25lbnRzL1JlY2VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQm9CLEFBR3dCLEFBSTRCLEFBU1UsQUFJbEMsQUFJZSxXQXBCQSxBQWlCZCxZQUNoQixPQUdhLEVBakJJLFNBSGpCLEVBcUJBLEVBakJrQyw4QkFDWixrQkFDUCxXQUNRLCtCQUtuQiw2Q0FKSiIsImZpbGUiOiIvaG9tZS9iYXl1ZGlyZ2FudGFyYS9LT1BJX0RJTkdJTi9NWVdFQlNJVEUvY29tcG9uZW50cy9SZWNlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCByZWNlbnQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGdhbWJhciB9ID0gcHJvcHMuZGF0YTtcbiAgICBjb25zdCBbaXNTdGF0dXMsc2V0SXNTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlVUkoZSl7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGlmKGUudHlwZSA9PT0gJ21vdXNlZW50ZXInKXtcbiAgICAgICAgICAgICAgc2V0SXNTdGF0dXModHJ1ZSlcbiAgICAgICAgICB9ZWxzZSBpZihlLnR5cGUgPT09ICdtb3VzZWxlYXZlJyl7XG4gICAgICAgICAgICAgIHNldElzU3RhdHVzKGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtnYW1iYXJ9IGFsdD17Z2FtYmFyfSBvbk1vdXNlRW50ZXI9e3VwZGF0ZVVJfSBvbk1vdXNlTGVhdmU9e3VwZGF0ZVVJfS8+XG4gICAgICAgICAge2lzU3RhdHVzID09IGZhbHNlID8gbnVsbCA6IDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgb25Nb3VzZUVudGVyPXt1cGRhdGVVSX0gb25Nb3VzZUxlYXZlPXt1cGRhdGVVSX0+PGltZyAgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvc3RhdGljL2NsaWNrLnN2ZycpfSBhbHQ9e3JlcXVpcmUoJy4uL3B1YmxpYy9zdGF0aWMvY2xpY2suc3ZnJyl9Lz48L2Rpdj59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQgZGl2IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBwb3B1cCAycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgcG9wdXAge1xuICAgICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAlLC0xMCUsLTEwJSwtMTAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZCBkaXYgPiBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICAvLyBjb25zdCB7Z2FtYmFyfSA9IHByb3BzLmRhdGFcbiAgICAvLyBjb25zdCBbaXNTdGF0dXMsc2V0SXNTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIC8vIGNvbnN0IGxhdGFyID0gdXNlUmVmKCcnKTtcbiAgICAgXG4gICAgLy8gZnVuY3Rpb24gdXBkYXRlVUkoZSl7XG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgaWYoZS50eXBlID09PSAnbW91c2VlbnRlcicpe1xuICAgIC8vICAgICAgICAgc2V0SXNTdGF0dXModHJ1ZSlcbiAgICAvLyAgICAgfWVsc2UgaWYoZS50eXBlID09PSAnbW91c2VsZWF2ZScpe1xuICAgIC8vICAgICAgICAgc2V0SXNTdGF0dXMoZmFsc2UpXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyByZXR1cm4gKFxuICAgIC8vICAgICA8ZmlndXJlID5cbiAgICAvLyAgICAgICAgIDxpbWcgaWQ9XCJyZWNlbnRpbWdcIiBzcmM9e2dhbWJhcn0gYWx0PXtnYW1iYXJ9IG9uTW91c2VFbnRlcj17dXBkYXRlVUl9IG9uTW91c2VMZWF2ZT17dXBkYXRlVUl9Lz4gXG4gICAgLy8gICAgICAgICA8ZGl2IGlkPVwicmVjZW50aW1nXCIgcmVmPXtsYXRhcn0gY2xhc3NOYW1lPVwibGF0YXJcIiBvbk1vdXNlRW50ZXI9e3VwZGF0ZVVJfSBvbk1vdXNlTGVhdmU9e3VwZGF0ZVVJfT48aW1nIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL3N0YXRpYy9jbGljay5zdmcnKX0gYWx0PXtyZXF1aXJlKCcuLi9wdWJsaWMvc3RhdGljL2NsaWNrLnN2ZycpfS8+PC9kaXY+ICBcbiAgICAvLyAgICAgICAgIHsvKiB7aXNTdGF0dXMgPT0gZmFsc2UgPyBudWxsIDogPGRpdiBjbGFzc05hbWU9XCJsYXRhclwiPjxpbWcgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvc3RhdGljL2NsaWNrLnN2ZycpfSBhbHQ9e3JlcXVpcmUoJy4uL3B1YmxpYy9zdGF0aWMvY2xpY2suc3ZnJyl9IG9uTW91c2VFbnRlcj17dXBkYXRlVUl9IG9uTW91c2VMZWF2ZT17dXBkYXRlVUl9Lz48L2Rpdj59ICAqL31cbiAgICAvLyAgICAgICAgIHsvKiB7aXNTdGF0dXMgPT0gZmFsc2UgPyBudWxsIDogPGRpdiBjbGFzc05hbWU9XCJzaG93XCIgb25Nb3VzZUVudGVyPXt1cGRhdGVVSX0gb25Nb3VzZUxlYXZlPXt1cGRhdGVVSX0+PGEgaHJlZj1cImh0dHBzOi8vbW92aWVzZGlyZ2FudGFyYS5uZXRsaWZ5LmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj48cD5MaXZlIFByZXZpZXc8L3A+PC9hPjwvZGl2Pn0gICovfVxuICAgIC8vICAgICAgICAgey8qIHtpc1N0YXR1cyA9PSBmYWxzZSA/IG51bGwgOiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIG9uTW91c2VFbnRlcj17dXBkYXRlVUl9IG9uTW91c2VMZWF2ZT17dXBkYXRlVUl9PjxMaW5rIGhyZWY9XCIvcG9ydG9mb2xpb1wiPjxhPjxwPk1lbWJ1YXQgV2Vic2l0ZSBEaW5hbWlzPC9wPjwvYT48L0xpbms+PC9kaXY+fSAqL31cbiAgICAvLyAgICAgPHN0eWxlIGpzeD57YFxuICAgIC8vICAgICAgICAgLmxhdGFyIHtcbiAgICAvLyAgICAgICAgICAgICB3aWR0aDogMjByZW07XG4gICAgLy8gICAgICAgICAgICAgaGVpZ2h0OiAxM3JlbTtcbiAgICAvLyAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgICAgICAgICAgdG9wOiAwO1xuICAgIC8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XG4gICAgLy8gICAgICAgICAgICAgZGlzcGxheTogJHtpc1N0YXR1cyA9PSBmYWxzZSA/IGBub25lYCA6IGBmbGV4YH07IFxuICAgIC8vICAgICAgICAgICAgIGFuaW1hdGlvbiA6IGRldGFpbCAwLjVzIGVhc2U7XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIEBrZXlmcmFtZXMgZGV0YWlsIHtcbiAgICAvLyAgICAgICAgICAgICBmcm9tIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIHRvIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7ICAgXG4gICAgLy8gICAgICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIC5sYXRhciBpbWcgeyBcbiAgICAvLyAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAvLyAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBmaWd1cmUge1xuICAgIC8vICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAvLyAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgLy8gICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgLy8gICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvLyAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgIC8vICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgZmlndXJlIGltZyB7XG4gICAgLy8gICAgICAgICAgICAgd2lkdGg6IDIwcmVtO1xuICAgIC8vICAgICAgICAgICAgIGhlaWdodDogMTNyZW07XG4gICAgLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvLyAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvLyAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBmaWd1cmUgLnNob3cgYSAsIGZpZ3VyZSAudGl0bGUgYSAge1xuICAgIC8vICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIC8vICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAvLyAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBmaWd1cmUgLnNob3cgIGEgLCBmaWd1cmUgLnRpdGxlIGEgOmhvdmVyIHsgXG4gICAgLy8gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICAuc2hvdyB7XG4gICAgLy8gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICAgICAgICAgICAgIHRvcDogMC4xcHg7XG4gICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XG4gICAgLy8gICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgLy8gICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAvLyAgICAgICAgICAgICBhbmltYXRpb246IHRvcCAxLjJzOyAgIFxuICAgICAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgLnRpdGxlIHtcbiAgICAvLyAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgICAgICAgICAgYm90dG9tOiAwLjFweDtcbiAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcbiAgICAvLyAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIC8vICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIC8vICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vICAgICAgICAgICAgIGFuaW1hdGlvbjogYm90dG9tIDAuOHM7XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgYH08L3N0eWxlPlxuICAgIC8vICAgICA8L2ZpZ3VyZT5cbiAgICAvLyApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlY2VudDsiXX0= */\n/*@ sourceURL=/home/bayudirgantara/KOPI_DINGIN/MYWEBSITE/components/Recent.js */")); // const {gambar} = props.data
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
//# sourceMappingURL=index.js.274f7d4e3b5c06dc0490.hot-update.js.map