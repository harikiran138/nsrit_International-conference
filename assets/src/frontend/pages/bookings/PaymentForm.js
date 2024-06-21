__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony import */
var _actionCreators_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../actionCreators/actions */ "./assets/src/frontend/actionCreators/actions.js");
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../context/provider */ "./assets/src/frontend/context/provider.js");
/* harmony import */
var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./Header */ "./assets/src/frontend/pages/bookings/Header.js");
/* harmony import */
var _stripe_StripePayment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../stripe/StripePayment */ "./assets/src/frontend/stripe/StripePayment.js");
/* harmony import */
var _SidebarInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./SidebarInfo */ "./assets/src/frontend/pages/bookings/SidebarInfo.js");
/* harmony import */
var _paypal_CheckoutForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../paypal/CheckoutForm */ "./assets/src/frontend/paypal/CheckoutForm.js");

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




var __ = wp.i18n.__;


var _window$antd = window.antd,
    Button = _window$antd.Button,
    Typography = _window$antd.Typography,
    Space = _window$antd.Space,
    List = _window$antd.List,
    Row = _window$antd.Row,
    Col = _window$antd.Col,
    Form = _window$antd.Form;
var Text = Typography.Text,
    Title = Typography.Title;

function PaymentForm() {
    var _timetics, _timetics2, _timetics3, _timetics4;
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_1__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        meetingReducer = _useStateValue2[0].meeting,
        dispatch = _useStateValue2[1];
    var meeting = meetingReducer.meeting,
        selectedDate = meetingReducer.selectedDate,
        bookingTime = meetingReducer.bookingTime,
        selectedDay = meetingReducer.selectedDay,
        contactInfo = meetingReducer.contactInfo,
        selectedStaff = meetingReducer.selectedStaff,
        payment_method = meetingReducer.payment_method,
        response = meetingReducer.response,
        totalOrderPrice = meetingReducer.totalOrderPrice;
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        stepTitle: "Step 2",
        componentTitle: "Payment"
    }), /*#__PURE__*/ React.createElement(Row, {
        gutter: [24, 24]
    }, /*#__PURE__*/ React.createElement(Col, {
        xs: 24,
        sm: 24,
        md: 8,
        lg: 8
    }, /*#__PURE__*/ React.createElement("div", {
        className: "tt-form-left-sidebar"
    }, /*#__PURE__*/ React.createElement(Title, {
        className: "tt-meeting-name tt-mb-10",
        level: 3
    }, meeting === null || meeting === void 0 ? void 0 : meeting.name), /*#__PURE__*/ React.createElement("div", {
        className: "selected-author tt-mb-10"
    }, /*#__PURE__*/ React.createElement(Text, null, __("with", "timetics")), /*#__PURE__*/ React.createElement(Text, {
        strong: true
    }, " ", selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.full_name)), /*#__PURE__*/ React.createElement(_SidebarInfo__WEBPACK_IMPORTED_MODULE_4__["default"], null))), /*#__PURE__*/ React.createElement(Col, {
            xs: 24,
            sm: 24,
            md: 16,
            lg: 16
        }, (_timetics = timetics) !== null && _timetics !== void 0 && _timetics.currency && meeting !== null && meeting !== void 0 && meeting.price && payment_method == "Stripe" ?
        /*#__PURE__*/
        // TODO - need to calculate price here...
        React.createElement(_stripe_StripePayment__WEBPACK_IMPORTED_MODULE_3__["default"], {
            amount: totalOrderPrice,
            currency: (_timetics2 = timetics) === null || _timetics2 === void 0 ? void 0 : _timetics2.currency
        }) : null, (_timetics3 = timetics) !== null && _timetics3 !== void 0 && _timetics3.currency && meeting !== null && meeting !== void 0 && meeting.price && payment_method == "Paypal" ? /*#__PURE__*/ React.createElement(_paypal_CheckoutForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
            amount: totalOrderPrice,
            currency: (_timetics4 = timetics) === null || _timetics4 === void 0 ? void 0 : _timetics4.currency
        }) : null)));
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (PaymentForm);

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/PaymentForm.js?