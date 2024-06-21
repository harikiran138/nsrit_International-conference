__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony import */
var _admin_libs_bookingLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../admin/libs/bookingLib */ "./assets/src/admin/libs/bookingLib.js");
/* harmony import */
var _actionCreators_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../actionCreators/actions */ "./assets/src/frontend/actionCreators/actions.js");
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../context/provider */ "./assets/src/frontend/context/provider.js");
/* harmony import */
var _BookingResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./BookingResult */ "./assets/src/frontend/pages/bookings/BookingResult.js");
/* harmony import */
var _BookingSuccess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./BookingSuccess */ "./assets/src/frontend/pages/bookings/BookingSuccess.js");

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
var _window$antd = window.antd,
    Button = _window$antd.Button,
    Result = _window$antd.Result,
    Typography = _window$antd.Typography,
    Divider = _window$antd.Divider,
    Space = _window$antd.Space;
var Text = Typography.Text,
    Link = Typography.Link;





var useEffect = window.React.useEffect;
var __ = wp.i18n.__;

function BookingStatus() {
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_2__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        meetingReducer = _useStateValue2[0].meeting,
        dispatch = _useStateValue2[1];
    var paymentStatus = meetingReducer.paymentStatus,
        response = meetingReducer.response,
        meeting = meetingReducer.meeting,
        payment_method = meetingReducer.payment_method;
    useEffect(function() {
        //TODO payment method should be dynamic, now it is hardcoded because we only support stripe and don't have any other payment method to select.
        if (!!(meeting !== null && meeting !== void 0 && meeting.price)) {
            var _response$data;
            var payload = {
                payment_method: payment_method !== null && payment_method !== void 0 ? payment_method : "cash",
                status: paymentStatus === null || paymentStatus === void 0 ? void 0 : paymentStatus.status,
                payment_details: paymentStatus
            };
            (0, _admin_libs_bookingLib__WEBPACK_IMPORTED_MODULE_0__.updateBookingPayment)({
                id: response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.id,
                values: payload,
                stopToast: true
            });
        }
        return function() {};
    }, []);
    if ((paymentStatus === null || paymentStatus === void 0 ? void 0 : paymentStatus.status) == "canceled") {
        return /*#__PURE__*/ React.createElement(_BookingResult__WEBPACK_IMPORTED_MODULE_3__["default"], {
            status: "info",
            title: __("Booking canceled.", "timetics"),
            subTitle: __("Booking was canceled.", "timetics"),
            extra: /*#__PURE__*/ React.createElement("div", {
                className: "tt-booking-schedule-cancel"
            }, /*#__PURE__*/ React.createElement(Button, {
                className: "tt-mb-30",
                size: "large",
                onClick: function onClick() {
                    // remove query params
                    var url = new URL(window.location.href);
                    url.search = "";
                    window.location.href = url.href;
                    dispatch({
                        type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_1__.actions.CLEAR_BOOKING_RELATED_DATA,
                        payload: {}
                    });
                }
            }, __("Book again", "timetics")))
        });
    }
    if ((paymentStatus === null || paymentStatus === void 0 ? void 0 : paymentStatus.status) == "succeeded") {
        return /*#__PURE__*/ React.createElement(_BookingSuccess__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }
    return /*#__PURE__*/ React.createElement(_BookingResult__WEBPACK_IMPORTED_MODULE_3__["default"], {
        status: "error",
        title: __("Couldn't schedule this booking", "timetics"),
        subTitle: __("Something went wrong, Please try again.", "timetics"),
        extra: /*#__PURE__*/ React.createElement("div", {
            className: "tt-booking-schedule-cancel"
        }, /*#__PURE__*/ React.createElement(Button, {
            className: "tt-mb-30",
            size: "large",
            onClick: function onClick() {
                dispatch({
                    type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_1__.actions.CLEAR_BOOKING_RELATED_DATA,
                    payload: {}
                });
            }
        }, __("Book again", "timetics")))
    });
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (BookingStatus);

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/BookingStatus.js?