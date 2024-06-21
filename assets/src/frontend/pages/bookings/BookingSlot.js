__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */
var _helper_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../helper/helpers */ "./assets/src/helper/helpers.js");
/* harmony import */
var _actionCreators_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../actionCreators/actions */ "./assets/src/frontend/actionCreators/actions.js");
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../context/provider */ "./assets/src/frontend/context/provider.js");
/* harmony import */
var _common_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../../common/constant */ "./assets/src/common/constant.js");

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
    Typography = _window$antd.Typography,
    Button = _window$antd.Button,
    List = _window$antd.List,
    Tooltip = _window$antd.Tooltip;
var Title = Typography.Title,
    Text = Typography.Text;
var _window$React = window.React,
    useEffect = _window$React.useEffect,
    useState = _window$React.useState;
var customParseFormat = __webpack_require__( /*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
var isBetween = __webpack_require__( /*! dayjs/plugin/isBetween */ "./node_modules/dayjs/plugin/isBetween.js");
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend(isBetween);
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend(customParseFormat);

function BookingSlot(_ref) {
    var _window, _window$timetics, _currentSlot$3, _currentSlot$3$slots;
    var isEditing = _ref.isEditing;
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_3__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        _useStateValue2$ = _useStateValue2[0],
        meetingReducer = _useStateValue2$.meeting,
        bookingReducer = _useStateValue2$.booking,
        dispatch = _useStateValue2[1];
    var _useState = useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        currentSlot = _useState2[0],
        setCurrentSlot = _useState2[1];
    // Get the query parameters from the current URL
    var urlParams = new URLSearchParams(window.location.search);

    // Get the value of a specific query parameter
    var id = urlParams.get("id");
    var meeting = meetingReducer.meeting,
        selectedDate = meetingReducer.selectedDate,
        selectedDay = meetingReducer.selectedDay,
        selectedDaysSlots = meetingReducer.selectedDaysSlots,
        _meetingReducer$timeS = meetingReducer.timeSlots,
        timeSlots = _meetingReducer$timeS === void 0 ? [] : _meetingReducer$timeS,
        selectedStaff = meetingReducer.selectedStaff,
        bookingTime = meetingReducer.bookingTime,
        slots = meetingReducer.slots,
        _meetingReducer$meeti = meetingReducer.meetingQuantity,
        meetingQuantity = _meetingReducer$meeti === void 0 ? 0 : _meetingReducer$meeti,
        currentDateSlot = meetingReducer.currentDateSlot,
        generalSettings = meetingReducer.generalSettings,
        errors = meetingReducer.errors;
    var start_time = bookingReducer.start_time,
        seats = bookingReducer.seats;
    useEffect(function() {
        if (currentDateSlot) {
            var _generalSettings$bloc;
            var filteredSlots = _toConsumableArray(currentDateSlot.slots);
            var isFoundOnBlockedDays = generalSettings === null || generalSettings === void 0 ? void 0 : (_generalSettings$bloc = generalSettings.blocked_days) === null || _generalSettings$bloc === void 0 ? void 0 : _generalSettings$bloc.find(function(day) {
                return day.date === currentDateSlot.date;
            });
            var todayDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
            if (isFoundOnBlockedDays) {
                filteredSlots = filteredSlots.filter(function(slot) {
                    return !Boolean(isFoundOnBlockedDays.schedule.some(function(s) {
                        return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(slot === null || slot === void 0 ? void 0 : slot.start_time, "hh:mma").format("HH:mm"), "HH:mm").isBetween(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(s.start.label, "HH:mm"), dayjs__WEBPACK_IMPORTED_MODULE_0___default()(s.end.label, "HH:mm"), "minute", "[]");
                    }));
                });
            }
            if (todayDate === currentDateSlot.date) {
                var _filteredSlots;
                var minNoticeTimeArr = meeting === null || meeting === void 0 ? void 0 : meeting.min_notice_time.split(" ");
                filteredSlots = (_filteredSlots = filteredSlots) === null || _filteredSlots === void 0 ? void 0 : _filteredSlots.filter(function(slot) {
                    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(slot === null || slot === void 0 ? void 0 : slot.start_time, "hh:mma").isAfter(dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(Number(minNoticeTimeArr[0]), minNoticeTimeArr[1] === "min" ? "m" : minNoticeTimeArr[1] === "hr" ? "h" : "d")) && dayjs__WEBPACK_IMPORTED_MODULE_0___default()(slot === null || slot === void 0 ? void 0 : slot.start_time, "hh:mma").format("hh:mm a") !== start_time;
                });
            } else {
                var _filteredSlots2;
                filteredSlots = (_filteredSlots2 = filteredSlots) === null || _filteredSlots2 === void 0 ? void 0 : _filteredSlots2.filter(function(slot) {
                    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(slot === null || slot === void 0 ? void 0 : slot.start_time, "hh:mma").format("hh:mm a") !== start_time;
                });
            }
            if (meeting.type === "seat" && isEditing) {
                var seatIdArray = seats === null || seats === void 0 ? void 0 : seats.map(function(slot) {
                    return slot === null || slot === void 0 ? void 0 : slot.id;
                });
                var filterbyAvailableSeats = filteredSlots.filter(function(slot) {
                    return seatIdArray === null || seatIdArray === void 0 ? void 0 : seatIdArray.every(function(id) {
                        var _slot$seats;
                        return !(slot !== null && slot !== void 0 && (_slot$seats = slot.seats) !== null && _slot$seats !== void 0 && _slot$seats.includes(id));
                    });
                });
                setCurrentSlot(filterbyAvailableSeats);
            } else {
                setCurrentSlot(filteredSlots);
            }
        }
    }, [currentDateSlot]);
    useEffect(function() {
        var quantity = 0;
        if ((meeting === null || meeting === void 0 ? void 0 : meeting.type) == "seat") {
            var _meeting$seat_plan;
            quantity = meeting === null || meeting === void 0 ? void 0 : (_meeting$seat_plan = meeting.seat_plan) === null || _meeting$seat_plan === void 0 ? void 0 : _meeting$seat_plan.reduce(function(acc, cur) {
                if (cur.shapeType === "chair" || cur.type === "chair") {
                    acc += 1;
                } else if (cur.type === "table") {
                    acc += cur.chairs.length;
                }
                return acc;
            }, 0);
        } else {
            var _meeting$price;
            meeting === null || meeting === void 0 ? void 0 : (_meeting$price = meeting.price) === null || _meeting$price === void 0 ? void 0 : _meeting$price.map(function(p) {
                quantity += +p.ticket_quantity;
            });
        }
        dispatch({
            type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_2__.actions.SET_STATE,
            payload: {
                meetingQuantity: quantity
            }
        });
    }, [meeting]);
    useEffect(function() {
        var _currentDateSlot$;
        var _currentSlot = bookingTime && (currentDateSlot === null || currentDateSlot === void 0 ? void 0 : (_currentDateSlot$ = currentDateSlot[0]) === null || _currentDateSlot$ === void 0 ? void 0 : _currentDateSlot$.slots.filter(function(slot) {
            return (slot === null || slot === void 0 ? void 0 : slot.start_time) == bookingTime;
        }));
        if (_currentSlot) {
            var _currentSlot$;
            dispatch({
                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_2__.actions.SET_STATE,
                payload: {
                    currentSlot: _currentSlot === null || _currentSlot === void 0 ? void 0 : (_currentSlot$ = _currentSlot[0]) === null || _currentSlot$ === void 0 ? void 0 : _currentSlot$.seats
                }
            });
        }
    }, [bookingTime]);
    return /*#__PURE__*/ React.createElement("div", {
        className: "tt-slot-list-wrap"
    }, /*#__PURE__*/ React.createElement(Text, {
        className: "tt-selected-date"
    }, __(selectedDay, "timetics"), " -", " ", (0, _helper_helpers__WEBPACK_IMPORTED_MODULE_1__.convertWordpressDateFormatToDayjs)({
        date: selectedDate,
        format: (_window = window) === null || _window === void 0 ? void 0 : (_window$timetics = _window.timetics) === null || _window$timetics === void 0 ? void 0 : _window$timetics.date_format
    })), /*#__PURE__*/ React.createElement(List, {
        dataSource: currentSlot,
        className: "tt-slot-list",
        split: false,
        renderItem: function renderItem(item, index) {
            var _item$seats, _item$seats2;
            var booked = item !== null && item !== void 0 && (_item$seats = item.seats) !== null && _item$seats !== void 0 && _item$seats.length ? item === null || item === void 0 ? void 0 : (_item$seats2 = item.seats) === null || _item$seats2 === void 0 ? void 0 : _item$seats2.length : item === null || item === void 0 ? void 0 : item.booked;
            // if (item.status == "available") {
            //TODO need hasinur vai fix this baseed on seat capacity
            if (booked < meetingQuantity) {
                var _window3, _window3$timetics;
                return /*#__PURE__*/ React.createElement(List.Item, {
                    key: index
                }, /*#__PURE__*/ React.createElement(Tooltip, {
                    title: meeting.type !== "One-to-One" && __("".concat(meetingQuantity - booked, " seats are left of ").concat(meetingQuantity), "timetics-pro")
                }, /*#__PURE__*/ React.createElement(Button, {
                    type: "primary",
                    ghost: true,
                    block: true,
                    key: index,
                    onClick: function onClick(e) {
                        var _window2, _window2$timetics, _currentSlot$2;
                        var _currentSlot = currentDateSlot === null || currentDateSlot === void 0 ? void 0 : currentDateSlot.slots.filter(function(slot) {
                            return (slot === null || slot === void 0 ? void 0 : slot.start_time) == (item === null || item === void 0 ? void 0 : item.start_time);
                        });
                        dispatch({
                            type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_2__.actions.SET_STATE,
                            payload: {
                                step: isEditing ? _common_constant__WEBPACK_IMPORTED_MODULE_4__.FRONTEND_STEPS.contactInfo : meeting.type === "seat" ? _common_constant__WEBPACK_IMPORTED_MODULE_4__.FRONTEND_STEPS.seatMap : _common_constant__WEBPACK_IMPORTED_MODULE_4__.FRONTEND_STEPS.contactInfo,
                                bookingTime: (0, _helper_helpers__WEBPACK_IMPORTED_MODULE_1__.convertWordpressTimeFormatToDayjs)({
                                    time: item === null || item === void 0 ? void 0 : item.start_time,
                                    format: (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$timetics = _window2.timetics) === null || _window2$timetics === void 0 ? void 0 : _window2$timetics.time_format
                                }),
                                currentSlot: _currentSlot === null || _currentSlot === void 0 ? void 0 : (_currentSlot$2 = _currentSlot[0]) === null || _currentSlot$2 === void 0 ? void 0 : _currentSlot$2.seats
                            }
                        });
                    }
                }, (0, _helper_helpers__WEBPACK_IMPORTED_MODULE_1__.convertWordpressTimeFormatToDayjs)({
                    time: item === null || item === void 0 ? void 0 : item.start_time,
                    format: (_window3 = window) === null || _window3 === void 0 ? void 0 : (_window3$timetics = _window3.timetics) === null || _window3$timetics === void 0 ? void 0 : _window3$timetics.time_format
                }))));
            }
        }
    }), (currentSlot === null || currentSlot === void 0 ? void 0 : (_currentSlot$3 = currentSlot[0]) === null || _currentSlot$3 === void 0 ? void 0 : (_currentSlot$3$slots = _currentSlot$3.slots) === null || _currentSlot$3$slots === void 0 ? void 0 : _currentSlot$3$slots.every(function(slot) {
        return (slot === null || slot === void 0 ? void 0 : slot.status) == "unavailable";
    })) && /*#__PURE__*/ React.createElement(Text, {
        type: "danger",
        className: "tt-selected-date"
    }, __("No available slot.", "timetics")));
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (BookingSlot);

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/BookingSlot.js?