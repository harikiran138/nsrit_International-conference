__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "finishPendingRequests": () => ( /* binding */ finishPendingRequests),
    /* harmony export */
    "request": () => ( /* binding */ request)
    /* harmony export */
});
/* harmony import */
var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! axios */ "./node_modules/axios/index.js");
var _timetics, _timetics2;

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

var notification = window.antd.notification;
axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.baseURL = (_timetics = timetics) === null || _timetics === void 0 ? void 0 : _timetics.site_url;
axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers = {
    "X-WP-Nonce": (_timetics2 = timetics) === null || _timetics2 === void 0 ? void 0 : _timetics2.nonce
};
var CANCEL_TOKEN_SOURCE = axios__WEBPACK_IMPORTED_MODULE_0__["default"].CancelToken.source();

function generateNewCancelTokenSource() {
    CANCEL_TOKEN_SOURCE = axios__WEBPACK_IMPORTED_MODULE_0__["default"].CancelToken.source();
}
axios__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.response.use(function(res) {
    var _res$config, _res$data;
    if ((res === null || res === void 0 ? void 0 : (_res$config = res.config) === null || _res$config === void 0 ? void 0 : _res$config.method) !== "get" && res !== null && res !== void 0 && (_res$data = res.data) !== null && _res$data !== void 0 && _res$data.message) {
        var _res$config2, _res$config2$params, _res$data2;
        //To stop toast for any post or put request, add stopToast: true in params of request
        if (res !== null && res !== void 0 && (_res$config2 = res.config) !== null && _res$config2 !== void 0 && (_res$config2$params = _res$config2.params) !== null && _res$config2$params !== void 0 && _res$config2$params.stopToast) return res;
        notification.success({
            message: res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.message,
            // description: "Something went wrong! please try again.",
            placement: "topRight"
        });
    }
    return res;
}, function(err) {
    if (err.name && err.name == "AxiosError") {
        var _err$response, _err$response$data;
        //Error alet err?.response?.data?.message
        notification.error({
            message: err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message,
            // description: "Something went wrong! please try again.",
            placement: "topRight"
        });
    }
    throw new Error("Hell");
});
var request = function request(url, config) {
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].request(_objectSpread({
        url: url
    }, config));
};
var finishPendingRequests = function finishPendingRequests(cancellationReason) {
    CANCEL_TOKEN_SOURCE.cancel(cancellationReason);
    generateNewCancelTokenSource();
};


//# sourceURL=webpack://timetics/./assets/src/axios/requestConfig.js?