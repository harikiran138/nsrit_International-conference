__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => ( /* binding */ SidebarInfo)
    /* harmony export */
});
/* harmony import */
var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! react */ "react");
/* harmony import */
var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */
var _common_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../common/constant */ "./assets/src/common/constant.js");
/* harmony import */
var _common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../common/icons/Icons */ "./assets/src/common/icons/Icons.js");
/* harmony import */
var _helper_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../helper/helpers */ "./assets/src/helper/helpers.js");
/* harmony import */
var _actionCreators_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../actionCreators/actions */ "./assets/src/frontend/actionCreators/actions.js");
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../context/provider */ "./assets/src/frontend/context/provider.js");
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */
var _actionCreators_errorAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../actionCreators/errorAction */ "./assets/src/frontend/actionCreators/errorAction.js");
/* harmony import */
var _Sidebar_RecurringInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./Sidebar/RecurringInput */ "./assets/src/frontend/pages/bookings/Sidebar/RecurringInput.js");
/* harmony import */
var _Sidebar_RecurringList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./Sidebar/RecurringList */ "./assets/src/frontend/pages/bookings/Sidebar/RecurringList.js");
/* harmony import */
var _Sidebar_SelectTimeZone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./Sidebar/SelectTimeZone */ "./assets/src/frontend/pages/bookings/Sidebar/SelectTimeZone.js");

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
    Space = _window$antd.Space,
    List = _window$antd.List,
    Button = _window$antd.Button;
var Text = Typography.Text;

function SidebarInfo() {
    var _meeting$price, _window, _window$timetics, _window2, _window2$timetics, _meeting$price2, _timetics3, _meeting$locations, _meeting$locations2;
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_5__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        meetingReducer = _useStateValue2[0].meeting,
        dispatch = _useStateValue2[1];
    var meeting = meetingReducer.meeting,
        selectedDate = meetingReducer.selectedDate,
        bookingTime = meetingReducer.bookingTime,
        slots = meetingReducer.slots,
        _meetingReducer$selec = meetingReducer.selectedSeats,
        selectedSeats = _meetingReducer$selec === void 0 ? [] : _meetingReducer$selec,
        _meetingReducer$selec2 = meetingReducer.selectedSeat,
        selectedSeat = _meetingReducer$selec2 === void 0 ? [] : _meetingReducer$selec2,
        ticketPrice = meetingReducer.ticketPrice,
        client_timezone = meetingReducer.client_timezone,
        step = meetingReducer.step,
        allRecurringDates = meetingReducer.allRecurringDates,
        customRecurringLimit = meetingReducer.customRecurringLimit,
        errors = meetingReducer.errors;

    // Total left book
    var bookedMeeting = 0;
    slots === null || slots === void 0 ? void 0 : slots.days.map(function(item) {
        item === null || item === void 0 ? void 0 : item.slots.map(function(b) {
            if (b.booked == 1) {
                bookedMeeting++;
            }
        });
    });
    var totalQuantity = meeting === null || meeting === void 0 ? void 0 : (_meeting$price = meeting.price) === null || _meeting$price === void 0 ? void 0 : _meeting$price.map(function(item, index) {
        return item["ticket_quantity"];
    });
    var leftQuantity = totalQuantity - bookedMeeting;
    var totalPrice = 0;
    if ((meeting === null || meeting === void 0 ? void 0 : meeting.type) == "seat") {
        selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.map(function(item) {
            totalPrice += +(item === null || item === void 0 ? void 0 : item.price);
        });
    } else {
        var _meeting$price$;
        totalPrice = (meeting === null || meeting === void 0 ? void 0 : (_meeting$price$ = meeting.price[0]) === null || _meeting$price$ === void 0 ? void 0 : _meeting$price$.ticket_price) || 0;
    }
    var onTimeZoneChange = function onTimeZoneChange(value) {
        dispatch({
            type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_4__.actions.SET_SINGLE_MEETING_DATA,
            payload: {
                client_timezone: value
            }
        });
    };
    var onChangeRecurringInput = function onChangeRecurringInput(e) {
        dispatch({
            type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_4__.actions.SET_SINGLE_MEETING_DATA,
            payload: {
                customRecurringLimit: Number(e.target.value, 10)
            }
        });
    };
    var SeatMapDetailsListItem = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function() {
        var _timetics;
        return [{
            id: 1,
            title: __("Selected seats: ", "timetics"),
            icon: /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.ChairIcon, null),
            content: /*#__PURE__*/ React.createElement("div", {
                className: "tt-booking-info-content"
            }, /*#__PURE__*/ React.createElement("div", {
                className: "tt-seat-selected-number"
            }, selectedSeat === null || selectedSeat === void 0 ? void 0 : selectedSeat.map(function(item, index) {
                return /*#__PURE__*/ React.createElement(Text, {
                    key: index,
                    className: "tt-selected-seat"
                }, item, ",");
            })))
        }, {
            id: 2,
            title: __("Ticket quantity: ", "timetics"),
            icon: /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.TicketIcon, null),
            content: /*#__PURE__*/ React.createElement(Text, null, selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.length)
        }, {
            id: 3,
            title: __("Total Price: ", "timetics"),
            icon: /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.DollarIcon, null),
            content: /*#__PURE__*/ React.createElement(React.Fragment, null, (_timetics = timetics) === null || _timetics === void 0 ? void 0 : _timetics.currency, selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.reduce(function(accumulator, currentValue) {
                return accumulator + (ticketPrice === null || ticketPrice === void 0 ? void 0 : ticketPrice[currentValue === null || currentValue === void 0 ? void 0 : currentValue.ticketType]);
            }, 0).toFixed(2))
        }];
    }, [selectedSeats, selectedSeat]);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        if (meeting !== null && meeting !== void 0 && meeting.recurring && selectedDate && bookingTime) {
            var recurringDates = [];
            var d = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(selectedDate);
            recurringDates.push(selectedDate);
            // const endDate = dayjs(meeting?.availability.end);
            var dayjsIdententifier = meeting === null || meeting === void 0 ? void 0 : meeting.recurring_interval_name;
            var recurringLimit = customRecurringLimit !== null && customRecurringLimit !== void 0 ? customRecurringLimit : meeting === null || meeting === void 0 ? void 0 : meeting.recurring_limit;
            if (dayjsIdententifier === "day") {
                var _slots$days;
                var availableDays = slots === null || slots === void 0 ? void 0 : (_slots$days = slots.days) === null || _slots$days === void 0 ? void 0 : _slots$days.filter(function(day) {
                    return day.status === "available";
                });
                if (availableDays.length) {
                    var selectedDayIndex = availableDays.findIndex(function(day) {
                        return day.date === selectedDate;
                    });
                    for (var i = 1; i < recurringLimit; i += 1) {
                        var _meeting$availability;
                        var generatedDateObj = availableDays[selectedDayIndex + (meeting === null || meeting === void 0 ? void 0 : meeting.recurring_interval) * i];
                        if (generatedDateObj && dayjs__WEBPACK_IMPORTED_MODULE_6___default()(generatedDateObj.date).isBefore(dayjs__WEBPACK_IMPORTED_MODULE_6___default()(meeting === null || meeting === void 0 ? void 0 : (_meeting$availability = meeting.availability) === null || _meeting$availability === void 0 ? void 0 : _meeting$availability.end), "day")) {
                            recurringDates.push(generatedDateObj.date);
                        } else {
                            (0, _actionCreators_errorAction__WEBPACK_IMPORTED_MODULE_7__.setErrorState)({
                                dispatch: dispatch,
                                errorsObj: errors,
                                name: "recurringError",
                                value: {
                                    message: "Could not generate ".concat(customRecurringLimit !== null && customRecurringLimit !== void 0 ? customRecurringLimit : meeting === null || meeting === void 0 ? void 0 : meeting.recurring_limit, " events. ").concat(recurringDates.length, " events are available to book.")
                                }
                            });
                            break;
                        }
                    }
                }
            } else {
                for (var _i2 = 1; _i2 < recurringLimit; _i2 += 1) {
                    var newDate = d.add((meeting === null || meeting === void 0 ? void 0 : meeting.recurring_interval) * _i2, dayjsIdententifier);
                    if (true
                        // newDate.isBefore(
                        //     dayjs(meeting?.availability?.end),
                        //     "day"
                        // )
                    ) {
                        recurringDates.push(newDate.format("YYYY-MM-DD"));
                    } else {}
                }
            }

            dispatch({
                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_4__.actions.SET_STATE,
                payload: {
                    allRecurringDates: recurringDates
                }
            });
        }
    }, [selectedDate, bookingTime, meeting]);
    return /*#__PURE__*/ React.createElement(List, {
        className: "tt-meeting-location-list"
    }, selectedDate && /*#__PURE__*/ React.createElement(List.Item, null, /*#__PURE__*/ React.createElement(Space, {
        wrap: true
    }, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.CalendarIcon2, null), (0, _helper_helpers__WEBPACK_IMPORTED_MODULE_3__.convertWordpressDateFormatToDayjs)({
        date: selectedDate,
        format: (_window = window) === null || _window === void 0 ? void 0 : (_window$timetics = _window.timetics) === null || _window$timetics === void 0 ? void 0 : _window$timetics.date_format
    }), (0, _helper_helpers__WEBPACK_IMPORTED_MODULE_3__.convertWordpressTimeFormatToDayjs)({
        time: bookingTime,
        format: (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$timetics = _window2.timetics) === null || _window2$timetics === void 0 ? void 0 : _window2$timetics.time_format
    }))), (meeting === null || meeting === void 0 ? void 0 : meeting.type) === "seat" ? /*#__PURE__*/ React.createElement(React.Fragment, null, selectedSeats !== null && selectedSeats !== void 0 && selectedSeats.length ? /*#__PURE__*/ React.createElement(React.Fragment, null, SeatMapDetailsListItem.map(function(item) {
        return /*#__PURE__*/ React.createElement(List.Item, {
            key: item.id
        }, /*#__PURE__*/ React.createElement(Space, {
            wrap: true
        }, item.icon, /*#__PURE__*/ React.createElement(Text, null, item.title), item.content));
    })) : null) : null, (meeting === null || meeting === void 0 ? void 0 : meeting.type) !== "seat" && totalPrice != 0 ? Array.isArray(meeting === null || meeting === void 0 ? void 0 : meeting.price) ? meeting === null || meeting === void 0 ? void 0 : (_meeting$price2 = meeting.price) === null || _meeting$price2 === void 0 ? void 0 : _meeting$price2.map(function(item, index) {
        var _timetics2;
        return /*#__PURE__*/ React.createElement(List.Item, {
            key: index
        }, /*#__PURE__*/ React.createElement(Space, null, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.MoneyIcon, null), /*#__PURE__*/ React.createElement(Space, {
            size: 3,
            wrap: true
        }, (_timetics2 = timetics) === null || _timetics2 === void 0 ? void 0 : _timetics2.currency, (item === null || item === void 0 ? void 0 : item.ticket_price) || 0)));
    }) : /*#__PURE__*/ React.createElement(List.Item, null, /*#__PURE__*/ React.createElement(Space, null, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.MoneyIcon, null), /*#__PURE__*/ React.createElement(Space, {
        size: 3
    }, (_timetics3 = timetics) === null || _timetics3 === void 0 ? void 0 : _timetics3.currency, meeting === null || meeting === void 0 ? void 0 : meeting.price))) : null, (meeting === null || meeting === void 0 ? void 0 : meeting.type) !== "seat" && /*#__PURE__*/ React.createElement(List.Item, null, /*#__PURE__*/ React.createElement(Space, null, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.ClockIcon, null), meeting === null || meeting === void 0 ? void 0 : meeting.duration)), !allRecurringDates && meeting !== null && meeting !== void 0 && meeting.recurring ? /*#__PURE__*/ React.createElement(List.Item, null, /*#__PURE__*/ React.createElement(Space, null, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.ClockIcon, null), /*#__PURE__*/ React.createElement(_Sidebar_RecurringInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onChange: onChangeRecurringInput
    }))) : null, allRecurringDates !== null && allRecurringDates !== void 0 && allRecurringDates.length && meeting !== null && meeting !== void 0 && meeting.recurring ? /*#__PURE__*/ React.createElement(List.Item, null, /*#__PURE__*/ React.createElement(Space, {
        align: "start"
    }, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.ClockIcon, null), errors !== null && errors !== void 0 && errors.recurringError ? /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement(Text, {
        type: "danger"
    }, __(errors === null || errors === void 0 ? void 0 : errors.recurringError.message, "timetics")), " ", /*#__PURE__*/ React.createElement(Button, {
        type: "link",
        style: {
            padding: 0
        },
        onClick: function onClick() {
            (0, _actionCreators_errorAction__WEBPACK_IMPORTED_MODULE_7__.setErrorState)({
                dispatch: dispatch,
                errorsObj: errors,
                name: "recurringError",
                value: null
            });
        }
    }, __("Continue booking?", "timetics"))) : /*#__PURE__*/ React.createElement(_Sidebar_RecurringList__WEBPACK_IMPORTED_MODULE_9__["default"], null))) : null, (meeting === null || meeting === void 0 ? void 0 : (_meeting$locations = meeting.locations) === null || _meeting$locations === void 0 ? void 0 : _meeting$locations.length) == 1 && (meeting === null || meeting === void 0 ? void 0 : (_meeting$locations2 = meeting.locations) === null || _meeting$locations2 === void 0 ? void 0 : _meeting$locations2.map(function(item, index) {
        return /*#__PURE__*/ React.createElement(List.Item, {
            key: index
        }, (item === null || item === void 0 ? void 0 : item.location_type) == "google-meet" ? /*#__PURE__*/ React.createElement(Space, {
            wrap: true
        }, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.GoogleMeet, null), __("Google Meet", "timetics")) : (item === null || item === void 0 ? void 0 : item.location_type) == "phone-call" ? /*#__PURE__*/ React.createElement(Space, {
            wrap: true
        }, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.Phone, null), __("Phone Call", "timetics")) : /*#__PURE__*/ React.createElement(Space, {
            wrap: true
        }, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.Location, null), item === null || item === void 0 ? void 0 : item.location));
    })), (meeting === null || meeting === void 0 ? void 0 : meeting.type) === "One-to-Many" && bookingTime && /*#__PURE__*/ React.createElement(List.Item, null, __("".concat(leftQuantity, " seats are left of ").concat(totalQuantity), "timetics")), /*#__PURE__*/ React.createElement(List.Item, {
        className: "tt-mt-30"
    }, /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex",
            gap: "0.5rem",
            flex: 1,
            flexWrap: "wrap",
            alignItems: "center"
        }
    }, /*#__PURE__*/ React.createElement(Text, null, __("Timezone : ", "timetics")), step === _common_constant__WEBPACK_IMPORTED_MODULE_1__.FRONTEND_STEPS.bookingSchedule ? /*#__PURE__*/ React.createElement(_Sidebar_SelectTimeZone__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onChange: onTimeZoneChange
    }) : /*#__PURE__*/ React.createElement(Text, null, client_timezone !== null && client_timezone !== void 0 ? client_timezone : Intl.DateTimeFormat().resolvedOptions().timeZone))));
}

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/SidebarInfo.js?