__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony import */
var _bookingReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./bookingReducer */ "./assets/src/frontend/reducers/bookingReducer.js");
/* harmony import */
var _meetingReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./meetingReducer */ "./assets/src/frontend/reducers/meetingReducer.js");
/* harmony import */
var _userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./userReducer */ "./assets/src/frontend/reducers/userReducer.js");



var mainReducer = function mainReducer(_ref, action) {
    var meeting = _ref.meeting,
        booking = _ref.booking,
        user = _ref.user;
    return {
        meeting: (0, _meetingReducer__WEBPACK_IMPORTED_MODULE_1__.meetingReducer)(meeting, action),
        booking: (0, _bookingReducer__WEBPACK_IMPORTED_MODULE_0__.bookingReducer)(booking, action),
        user: (0, _userReducer__WEBPACK_IMPORTED_MODULE_2__.userReducer)(user, action)
    };
};
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (mainReducer);

//# sourceURL=webpack://timetics/./assets/src/frontend/reducers/index.js?