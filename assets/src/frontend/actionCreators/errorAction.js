__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "setErrorState": () => ( /* binding */ setErrorState)
    /* harmony export */
});
/* harmony import */
var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./actions */ "./assets/src/frontend/actionCreators/actions.js");

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

var setErrorState = function setErrorState(_ref) {
    var dispatch = _ref.dispatch,
        errorsObj = _ref.errorsObj,
        name = _ref.name,
        value = _ref.value;
    dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_0__.actions.SET_SINGLE_MEETING_DATA,
        payload: {
            errors: _objectSpread(_objectSpread({}, errorsObj), {}, _defineProperty({}, name, value))
        }
    });
};

//# sourceURL=webpack://timetics/./assets/src/frontend/actionCreators/errorAction.js?