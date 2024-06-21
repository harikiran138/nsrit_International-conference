__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony import */
var _SidebarInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./SidebarInfo */ "./assets/src/frontend/pages/bookings/SidebarInfo.js");
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../context/provider */ "./assets/src/frontend/context/provider.js");
/* harmony import */
var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./Header */ "./assets/src/frontend/pages/bookings/Header.js");
/* harmony import */
var _actionCreators_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../actionCreators/actions */ "./assets/src/frontend/actionCreators/actions.js");
/* harmony import */
var _common_icons_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../../common/icons/Icons */ "./assets/src/common/icons/Icons.js");
/* harmony import */
var _common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../../common/constant */ "./assets/src/common/constant.js");

function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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






var __ = wp.i18n.__;
var _window$antd = window.antd,
    Row = _window$antd.Row,
    Col = _window$antd.Col,
    Typography = _window$antd.Typography,
    Space = _window$antd.Space,
    Button = _window$antd.Button;
var Title = Typography.Title,
    Text = Typography.Text;

function SeatMap(_ref) {
    var _wp, _wp$hooks;
    var isEditing = _ref.isEditing;
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_1__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        meetingRedcuer = _useStateValue2[0].meeting,
        dispatch = _useStateValue2[1];
    var meeting = meetingRedcuer.meeting,
        currentSlot = meetingRedcuer.currentSlot,
        _meetingRedcuer$selec = meetingRedcuer.selectedSeats,
        selectedSeats = _meetingRedcuer$selec === void 0 ? [] : _meetingRedcuer$selec,
        _meetingRedcuer$selec2 = meetingRedcuer.selectedSeat,
        selectedSeat = _meetingRedcuer$selec2 === void 0 ? [] : _meetingRedcuer$selec2;
    var onSelectHandler = function onSelectHandler(data) {
        if (Array.isArray(data)) {
            var _selectedSeat = data.map(function(chair) {
                return "".concat(chair === null || chair === void 0 ? void 0 : chair.ticketType, " - ").concat(chair === null || chair === void 0 ? void 0 : chair.number);
            });
            dispatch({
                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_3__.actions.SET_STATE,
                payload: {
                    selectedSeats: [].concat(_toConsumableArray(selectedSeats), _toConsumableArray(data)),
                    selectedSeat: [].concat(_toConsumableArray(selectedSeat), _toConsumableArray(_selectedSeat))
                }
            });
        } else {
            var _selectedSeat2 = "".concat(data === null || data === void 0 ? void 0 : data.ticketType, " - ").concat(data === null || data === void 0 ? void 0 : data.number);
            dispatch({
                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_3__.actions.SET_STATE,
                payload: {
                    selectedSeats: [].concat(_toConsumableArray(selectedSeats), [data]),
                    selectedSeat: [].concat(_toConsumableArray(selectedSeat), [_selectedSeat2])
                }
            });
        }
    };
    var onUnselectHandler = function onUnselectHandler(data) {
        if (Array.isArray(data)) {
            var _selectedSeat = data.map(function(chair) {
                return "".concat(chair === null || chair === void 0 ? void 0 : chair.ticketType, " - ").concat(chair === null || chair === void 0 ? void 0 : chair.number);
            });
            var _selectedSeats = data.map(function(chair) {
                return chair.id;
            });
            dispatch({
                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_3__.actions.SET_STATE,
                payload: {
                    selectedSeats: _toConsumableArray(selectedSeats.filter(function(seat) {
                        return !_selectedSeats.includes(seat.id);
                    })),
                    selectedSeat: _toConsumableArray(selectedSeat.filter(function(seat) {
                        return !_selectedSeat.includes(seat);
                    }))
                }
            });
        } else {
            var _selectedSeat3 = "".concat(data === null || data === void 0 ? void 0 : data.ticketType, " - ").concat(data === null || data === void 0 ? void 0 : data.number);
            dispatch({
                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_3__.actions.SET_STATE,
                payload: {
                    selectedSeats: selectedSeats.filter(function(seat) {
                        return (seat === null || seat === void 0 ? void 0 : seat.id) !== (data === null || data === void 0 ? void 0 : data.id);
                    }),
                    selectedSeat: selectedSeat.filter(function(seat) {
                        return seat !== _selectedSeat3;
                    })
                }
            });
        }
    };
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Row, {
        gutter: [24, 24]
    }, /*#__PURE__*/ React.createElement(Col, {
        xs: 24,
        sm: 24,
        md: 8,
        lg: 6
    }, /*#__PURE__*/ React.createElement("div", {
        className: "tt-form-left-sidebar"
    }, /*#__PURE__*/ React.createElement(Title, {
        className: "tt-meeting-name",
        level: 3
    }, meeting === null || meeting === void 0 ? void 0 : meeting.name), /*#__PURE__*/ React.createElement(Text, {
        className: "tt-meeting-description tt-mb-30",
        type: "secondary"
    }, meeting === null || meeting === void 0 ? void 0 : meeting.description), /*#__PURE__*/ React.createElement(_SidebarInfo__WEBPACK_IMPORTED_MODULE_0__["default"], null))), /*#__PURE__*/ React.createElement(Col, {
        xs: 24,
        sm: 24,
        md: 16,
        lg: 18
    }, /*#__PURE__*/ React.createElement("div", {
        className: "tt-booking-body-wrap"
    }, /*#__PURE__*/ React.createElement("div", {
        className: ""
    }, (_wp = wp) === null || _wp === void 0 ? void 0 : (_wp$hooks = _wp.hooks) === null || _wp$hooks === void 0 ? void 0 : _wp$hooks.applyFilters("seatMap", meeting === null || meeting === void 0 ? void 0 : meeting.seat_plan, // an array of individual seat data
        meeting === null || meeting === void 0 ? void 0 : meeting.seat_plan_settings,
        // object regarding the canvas settings
        currentSlot,
        // an array of number id
        onSelectHandler, onUnselectHandler)), /*#__PURE__*/ React.createElement(Row, {
        align: "end"
    }, /*#__PURE__*/ React.createElement(Space, {
        className: "tt-seat-booking-button"
    }, /*#__PURE__*/ React.createElement(Button, {
        className: "backbtn",
        size: "large",
        type: "primary",
        htmlType: "button",
        ghost: true,
        onClick: function onClick() {
            console.log("helllo");
            dispatch({
                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_3__.actions.SET_STATE,
                payload: {
                    step: _common_constant__WEBPACK_IMPORTED_MODULE_5__.FRONTEND_STEPS.bookingSchedule,
                    selectedSeats: [],
                    selectedSeat: [],
                    allRecurringDates: null,
                    bookingTime: null
                }
            });
        }
    }, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_4__.ArrowLeftIcon, null), __("Go back", "timetics-pro")), /*#__PURE__*/ React.createElement(Button, {
        className: "submit-btn",
        size: "large",
        type: "primary",
        htmlType: "button",
        disabled: (selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.length) === 0,
        onClick: function onClick(e) {
            e.preventDefault();
            if ((selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.length) === 0) return;
            dispatch({
                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_3__.actions.SET_STATE,
                payload: {
                    step: _common_constant__WEBPACK_IMPORTED_MODULE_5__.FRONTEND_STEPS.contactInfo
                    // bookingSeat:
                }
            });
        }
    }, __("Next", "timetics-pro"), /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_4__.ArrowRightIcon2, null))))))));
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (SeatMap);

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/SeatMap.js?