__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony import */
var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! react */ "react");
/* harmony import */
var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../context/provider */ "./assets/src/frontend/context/provider.js");
/* harmony import */
var _pages_bookings_BookingSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../pages/bookings/BookingSchedule */ "./assets/src/frontend/pages/bookings/BookingSchedule.js");
/* harmony import */
var _pages_bookings_BookingSuccess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../pages/bookings/BookingSuccess */ "./assets/src/frontend/pages/bookings/BookingSuccess.js");
/* harmony import */
var _pages_bookings_ContactInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../pages/bookings/ContactInfo */ "./assets/src/frontend/pages/bookings/ContactInfo.js");
/* harmony import */
var _pages_bookings_PaymentForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../pages/bookings/PaymentForm */ "./assets/src/frontend/pages/bookings/PaymentForm.js");
/* harmony import */
var _pages_bookings_SeatMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../pages/bookings/SeatMap */ "./assets/src/frontend/pages/bookings/SeatMap.js");
/* harmony import */
var _actionCreators_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../actionCreators/actions */ "./assets/src/frontend/actionCreators/actions.js");
/* harmony import */
var _admin_libs_bookingLib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../admin/libs/bookingLib */ "./assets/src/admin/libs/bookingLib.js");

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









var FrontendSteps = function FrontendSteps() {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_1__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        meetingReducer = _useStateValue2[0].meeting,
        dispatch = _useStateValue2[1];
    var step = meetingReducer.step;
    var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
        _useState2 = _slicedToArray(_useState, 2),
        error = _useState2[0],
        setError = _useState2[1];
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        if (id) {
            (0, _admin_libs_bookingLib__WEBPACK_IMPORTED_MODULE_8__.getSingleBookingApi)(id).then(function(data) {
                var _data$data;
                if (data !== null && data !== void 0 && (_data$data = data.data) !== null && _data$data !== void 0 && _data$data.success) {
                    var _data$data2;
                    var bookingData = data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : _data$data2.data;
                    dispatch({
                        type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_7__.actions.SET_BOOKING_DATA,
                        payload: {
                            date: bookingData === null || bookingData === void 0 ? void 0 : bookingData.date,
                            start_time: bookingData === null || bookingData === void 0 ? void 0 : bookingData.start_time,
                            end_time: bookingData === null || bookingData === void 0 ? void 0 : bookingData.end_time,
                            seats: bookingData === null || bookingData === void 0 ? void 0 : bookingData.seats,
                            contact: _objectSpread(_objectSpread({}, bookingData === null || bookingData === void 0 ? void 0 : bookingData.customer), {}, {
                                custom_form_data: bookingData === null || bookingData === void 0 ? void 0 : bookingData.custom_form_data,
                                location_type: JSON.stringify({
                                    location_type: bookingData === null || bookingData === void 0 ? void 0 : bookingData.location_type,
                                    location: bookingData === null || bookingData === void 0 ? void 0 : bookingData.location
                                })
                            })
                        }
                    });
                } else {
                    var _data$data3;
                    setError(data === null || data === void 0 ? void 0 : (_data$data3 = data.data) === null || _data$data3 === void 0 ? void 0 : _data$data3.message);
                }
            });
        }
    }, [id]);
    var steps = [{
        title: "1",
        content: /*#__PURE__*/ React.createElement(_pages_bookings_BookingSchedule__WEBPACK_IMPORTED_MODULE_2__["default"], {
            isEditing: id
        })
    }, {
        title: "2",
        content: /*#__PURE__*/ React.createElement(_pages_bookings_SeatMap__WEBPACK_IMPORTED_MODULE_6__["default"], {
            isEditing: id
        })
    }, {
        title: "3",
        content: /*#__PURE__*/ React.createElement(_pages_bookings_ContactInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
            isEditing: id
        })
    }, {
        title: "4",
        content: /*#__PURE__*/ React.createElement(_pages_bookings_PaymentForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
            isEditing: id
        })
    }];
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", null, error ? /*#__PURE__*/ React.createElement("p", {
        style: {
            color: "tomato"
        }
    }, error) : steps[step - 1].content));
};
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (FrontendSteps);

//# sourceURL=webpack://timetics/./assets/src/frontend/frontendSteps/FrontendSteps.js?