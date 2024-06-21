__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
var _antd = antd,
    Alert = _antd.Alert,
    Spin = _antd.Spin;
var React = window.React;

function Spinner(_ref) {
    var tip = _ref.tip,
        msg = _ref.msg,
        desc = _ref.desc,
        type = _ref.type,
        wrapperClassName = _ref.wrapperClassName;
    return /*#__PURE__*/ React.createElement(Spin, {
        className: "tt-loader-spinner",
        tip: tip,
        wrapperClassName: wrapperClassName
    }, msg && desc && /*#__PURE__*/ React.createElement(Alert, {
        message: msg,
        description: desc,
        type: type
    }));
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

//# sourceURL=webpack://timetics/./assets/src/common/Spinner.js?