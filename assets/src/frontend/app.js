__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => ( /* binding */ App)
    /* harmony export */
});
/* harmony import */
var _common_Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../common/Spinner */ "./assets/src/common/Spinner.js");
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./context/provider */ "./assets/src/frontend/context/provider.js");
/* harmony import */
var _pages_BookingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./pages/BookingPage */ "./assets/src/frontend/pages/BookingPage.js");



var __ = wp.i18n.__;
var React = window.React;
var Suspense = React.Suspense,
    useEffect = React.useEffect;

function App(_ref) {
    var dataControls = _ref.dataControls;
    return /*#__PURE__*/ React.createElement(_context_provider__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/ React.createElement(Suspense, {
        fallback: /*#__PURE__*/ React.createElement(_common_Spinner__WEBPACK_IMPORTED_MODULE_0__["default"], {
            tip: __("Loading...", "timetics"),
            type: "info",
            size: "large",
            wrapperClassName: "tt-spinner-wrapper"
        })
    }, /*#__PURE__*/ React.createElement(_pages_BookingPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
        dataControls: dataControls
    })));
}

//# sourceURL=webpack://timetics/./assets/src/frontend/app.js?