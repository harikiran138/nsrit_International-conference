__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__),
    /* harmony export */
    "useStateValue": () => ( /* binding */ useStateValue)
    /* harmony export */
});
/* harmony import */
var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../reducers */ "./assets/src/frontend/reducers/index.js");
/* harmony import */
var _createContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./createContext */ "./assets/src/frontend/context/createContext.js");
/* harmony import */
var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./state */ "./assets/src/frontend/context/state.js");
var React = window.React;
var useContext = React.useContext,
    useReducer = React.useReducer;



var TimeTicsProvider = function TimeTicsProvider(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/ React.createElement(_createContext__WEBPACK_IMPORTED_MODULE_1__.TimeTicsContext.Provider, {
        value: useReducer(_reducers__WEBPACK_IMPORTED_MODULE_0__["default"], _state__WEBPACK_IMPORTED_MODULE_2__.initialState)
    }, children);
};
var useStateValue = function useStateValue() {
    return useContext(_createContext__WEBPACK_IMPORTED_MODULE_1__.TimeTicsContext);
};
TimeTicsProvider = wp.hooks.applyFilters("timetics_ctx", TimeTicsProvider, useStateValue);
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (TimeTicsProvider);

//# sourceURL=webpack://timetics/./assets/src/frontend/context/provider.js?