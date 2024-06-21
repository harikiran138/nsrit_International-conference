__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony import */
var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */
var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */
var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */
var _CheckoutForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./CheckoutForm */ "./assets/src/frontend/stripe/CheckoutForm.js");
/* harmony import */
var _axios_requestConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../axios/requestConfig */ "./assets/src/axios/requestConfig.js");
/* harmony import */
var _admin_services_apiEndPoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../admin/services/apiEndPoints */ "./assets/src/admin/services/apiEndPoints.js");
var _timetics;

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}

function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally {
            if (_d) throw _e;
        }
    }
    return _arr;
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
var React = window.React;
var useState = React.useState,
    useEffect = React.useEffect;





var Typography = window.antd.Typography;
var __ = wp.i18n.__;
var Text = Typography.Text;
var stripPubKey = ((_timetics = timetics) === null || _timetics === void 0 ? void 0 : _timetics.stripe_pub_key) || " ";
var stripePromise = (0, _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(stripPubKey);
var _antd = antd,
    Skeleton = _antd.Skeleton;

/**
 * Stripe Payment Compoment
 *
 * @return jsx
 */
var StripePayment = function StripePayment(item) {
    var _useState = useState(),
        _useState2 = _slicedToArray(_useState, 2),
        clientSecret = _useState2[0],
        setClientSecret = _useState2[1];
    var amount = item.amount,
        currency = item.currency;
    var _useState3 = useState(null),
        _useState4 = _slicedToArray(_useState3, 2),
        error = _useState4[0],
        setError = _useState4[1];
    var _useState5 = useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        loading = _useState6[0],
        setLoading = _useState6[1];
    useEffect(function() {
        //TODO need to calculate the price here...
        setLoading(true);
        var r = (0, _axios_requestConfig__WEBPACK_IMPORTED_MODULE_3__.request)(_admin_services_apiEndPoints__WEBPACK_IMPORTED_MODULE_4__.apiEndpoint.payment.stripe, {
            method: "post",
            data: {
                amount: amount,
                currency: currency
            }
        }).then(function(res) {
            //TODO need to handle error for stripe api key and secret key
            setClientSecret(res.data.client_secret);
            if (res.data.error) {
                setError(res.data.error);
            }
            setLoading(false);
        });

        //cancel axios request on unmount
        return function() {
            (0, _axios_requestConfig__WEBPACK_IMPORTED_MODULE_3__.finishPendingRequests)();
        };
    }, [amount]);
    var appearance = {
        theme: "stripe"
    };
    var options = {
        clientSecret: clientSecret,
        appearance: appearance
    };
    if (loading) {
        return /*#__PURE__*/ React.createElement(Skeleton, {
            active: true
        });
    }
    return /*#__PURE__*/ React.createElement("div", {
        className: "timetics-stripe tt-booking-body-wrap"
    }, clientSecret && /*#__PURE__*/ React.createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.Elements, {
        options: options,
        stripe: stripePromise
    }, /*#__PURE__*/ React.createElement(_CheckoutForm__WEBPACK_IMPORTED_MODULE_2__["default"], null)), error && /*#__PURE__*/ React.createElement(Text, {
        style: {
            color: "#E42D23"
        }
    }, __("Error: ".concat(error === null || error === void 0 ? void 0 : error.message, " "), "timetics")));
};
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (StripePayment);

//# sourceURL=webpack://timetics/./assets/src/frontend/stripe/StripePayment.js?