__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony import */
var react_phone_input_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! react-phone-input-2 */ "./node_modules/react-phone-input-2/lib/lib.js");
/* harmony import */
var react_phone_input_2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */
var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! react-phone-input-2/lib/style.css */ "./node_modules/react-phone-input-2/lib/style.css");
var _excluded = ["className", "name", "label", "required", "rules", "labelCol", "wrapperCol", "tooltip"];

function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var Form = window.antd.Form;


var __ = wp.i18n.__;

function CountryPhoneInput(_ref) {
    var _ref$className = _ref.className,
        className = _ref$className === void 0 ? "" : _ref$className,
        name = _ref.name,
        _ref$label = _ref.label,
        label = _ref$label === void 0 ? "" : _ref$label,
        _ref$required = _ref.required,
        required = _ref$required === void 0 ? false : _ref$required,
        _ref$rules = _ref.rules,
        rules = _ref$rules === void 0 ? [] : _ref$rules,
        _ref$labelCol = _ref.labelCol,
        labelCol = _ref$labelCol === void 0 ? {} : _ref$labelCol,
        _ref$wrapperCol = _ref.wrapperCol,
        wrapperCol = _ref$wrapperCol === void 0 ? {} : _ref$wrapperCol,
        _ref$tooltip = _ref.tooltip,
        tooltip = _ref$tooltip === void 0 ? "" : _ref$tooltip,
        props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ React.createElement(Form.Item, {
        className: "timetics-input tt-country-phone-code ".concat(className),
        label: label,
        labelCol: labelCol,
        wrapperCol: wrapperCol,
        name: name,
        tooltip: tooltip,
        rules: rules
    }, /*#__PURE__*/ React.createElement((react_phone_input_2__WEBPACK_IMPORTED_MODULE_0___default()), _extends({
        enableSearch: true
    }, props, {
        country: "us"
    })));
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (CountryPhoneInput);

//# sourceURL=webpack://timetics/./assets/src/common/CountryPhoneInput.js?