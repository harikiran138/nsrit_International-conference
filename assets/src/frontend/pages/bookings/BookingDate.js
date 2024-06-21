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
var _BookingCalendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./BookingCalendar */ "./assets/src/frontend/pages/bookings/BookingCalendar.js");
/* harmony import */
var _BookingSlot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./BookingSlot */ "./assets/src/frontend/pages/bookings/BookingSlot.js");

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




var useEffect = window.React.useEffect;
var _window$antd = window.antd,
    Row = _window$antd.Row,
    Col = _window$antd.Col;

function BookingDate(_ref) {
    var isEditing = _ref.isEditing;
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_1__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        meetingReducer = _useStateValue2[0].meeting,
        dispatch = _useStateValue2[1];
    var dataControls = meetingReducer.dataControls,
        selectedDay = meetingReducer.selectedDay,
        selectedDate = meetingReducer.selectedDate,
        selectedStaff = meetingReducer.selectedStaff,
        meeting = meetingReducer.meeting,
        slots = meetingReducer.slots;

    // get total meeting quantity
    var totalQuantity = meeting === null || meeting === void 0 ? void 0 : meeting.price.reduce(function(acc, current) {
        return +acc + +current.ticket_quantity;
    }, 0);

    // one to many booked meeting count
    var bookedMeeting = 0;
    slots === null || slots === void 0 ? void 0 : slots.days.map(function(item) {
        item === null || item === void 0 ? void 0 : item.slots.map(function(b) {
            if (b.booked == 1 && bookedMeeting < totalQuantity) {
                bookedMeeting++;
            }
        });
    });
    var leftQuantity = totalQuantity - bookedMeeting;
    useEffect(function() {
        dispatch({
            type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_0__.actions.SET_STATE,
            payload: {
                totalQuantity: totalQuantity,
                leftQuantity: leftQuantity
            }
        });
        return function() {};
    }, [selectedDate]);
    var colSpan = selectedDate ? 16 : 24;
    return /*#__PURE__*/ React.createElement("div", {
        className: "tt-booking-body-wrap"
    }, /*#__PURE__*/ React.createElement(Row, {
        gutter: [16, 16]
    }, /*#__PURE__*/ React.createElement(Col, {
        xs: 24,
        sm: 24,
        md: colSpan,
        lg: colSpan
    }, /*#__PURE__*/ React.createElement(_BookingCalendar__WEBPACK_IMPORTED_MODULE_2__["default"], null)), selectedDate ? /*#__PURE__*/ React.createElement(Col, {
        xs: 24,
        sm: 24,
        md: 8,
        lg: 8
    }, /*#__PURE__*/ React.createElement(_BookingSlot__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isEditing: isEditing
    })) : null));
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (BookingDate);

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/BookingDate.js?