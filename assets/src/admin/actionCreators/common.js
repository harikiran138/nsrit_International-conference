__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "setState": () => ( /* binding */ setState)
    /* harmony export */
});
/* harmony import */
var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./actions */ "./assets/src/admin/actionCreators/actions.js");

var setState = function setState(_ref) {
    var dispatch = _ref.dispatch,
        name = _ref.name,
        value = _ref.value;
    dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_0__.actions.SET_STATE,
        field: name,
        payload: value
    });
};

//# sourceURL=webpack://timetics/./assets/src/admin/actionCreators/common.js?