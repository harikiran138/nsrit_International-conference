__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../context/provider */ "./assets/src/frontend/context/provider.js");
/* harmony import */
var _actionCreators_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../actionCreators/actions */ "./assets/src/frontend/actionCreators/actions.js");
/* harmony import */
var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../utils/helper */ "./assets/src/frontend/utils/helper.js");
/* harmony import */
var _hooks_useBooking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./hooks/useBooking */ "./assets/src/frontend/pages/bookings/hooks/useBooking.js");
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);

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





var _window$React = window.React,
    useRef = _window$React.useRef,
    useEffect = _window$React.useEffect;

function BookingCalendar() {
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_0__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        _useStateValue2$ = _useStateValue2[0],
        meetingReducer = _useStateValue2$.meeting,
        settingsReducer = _useStateValue2$.settings,
        dispatch = _useStateValue2[1];
    var fp = useRef(null);
    var _useBooking = (0, _hooks_useBooking__WEBPACK_IMPORTED_MODULE_3__["default"])(),
        getSlotsForSelectedDay = _useBooking.getSlotsForSelectedDay;
    var meeting = meetingReducer.meeting,
        unavailableDates = meetingReducer.unavailableDates,
        unavailableDays = meetingReducer.unavailableDays,
        selectedDate = meetingReducer.selectedDate,
        currentMonth = meetingReducer.currentMonth,
        _meetingReducer$unava = meetingReducer.unavailableDayNumber,
        unavailableDayNumber = _meetingReducer$unava === void 0 ? [] : _meetingReducer$unava,
        selectedStaff = meetingReducer.selectedStaff,
        startDateForSlots = meetingReducer.startDateForSlots,
        slots = meetingReducer.slots,
        bookingTime = meetingReducer.bookingTime,
        generalSettings = meetingReducer.generalSettings;

    // const { id: selectedStaffIdToBook } = selectedStaff;

    useEffect(function() {
        if (typeof window !== "undefined" && window.flatpickr) {
            var _meeting$availability, _meeting$availability2, _meeting$availability3, _window, _window$timetics;
            var inputEl = fp.current;
            if (generalSettings !== null && generalSettings !== void 0 && generalSettings.calendar_locale) {
                window.flatpickr.localize(window.flatpickr.l10ns[generalSettings === null || generalSettings === void 0 ? void 0 : generalSettings.calendar_locale]);
            }
            var flatpickrInstance = window.flatpickr(inputEl, {
                //intially selected date is today, but don't fetch slots initially, that's defaultDate is commented
                // defaultDate: selectedDate,
                inline: true,
                altFormat: "F j, Y",
                dateFormat: "Y-m-d",
                minDate: meeting !== null && meeting !== void 0 && meeting.availability ? new Date(meeting === null || meeting === void 0 ? void 0 : (_meeting$availability = meeting.availability) === null || _meeting$availability === void 0 ? void 0 : _meeting$availability.start) < new Date() ? new Date() : meeting === null || meeting === void 0 ? void 0 : (_meeting$availability2 = meeting.availability) === null || _meeting$availability2 === void 0 ? void 0 : _meeting$availability2.start : new Date().fp_incr(30),
                monthSelectorType: "static",
                maxDate: meeting !== null && meeting !== void 0 && meeting.availability ? meeting === null || meeting === void 0 ? void 0 : (_meeting$availability3 = meeting.availability) === null || _meeting$availability3 === void 0 ? void 0 : _meeting$availability3.end : new Date().fp_incr(30),
                disable: [function(date) {
                    return _toConsumableArray(unavailableDayNumber).includes(date.getDay());

                    // work freak?? work on holiday too... need backend support

                    // if ([...unavailableDayNumber].includes(date.getDay())) {
                    //     if (generalSettings?.blocked_days) {
                    //         return !(
                    //             generalSettings.blocked_days.findIndex(
                    //                 (day) => {
                    //                     return (
                    //                         new Date(day.date).getDate() ===
                    //                         date.getDate()
                    //                     );
                    //                 }
                    //             ) >= 0
                    //         );
                    //     }
                    // }
                }].concat(_toConsumableArray(generalSettings !== null && generalSettings !== void 0 && generalSettings.blocked_days ? generalSettings === null || generalSettings === void 0 ? void 0 : generalSettings.blocked_days.filter(function(day) {
                    return !day.schedule.length;
                }).map(function(day) {
                    return day.date;
                }) : [])),
                locale: {
                    firstDayOfWeek: Number((_window = window) === null || _window === void 0 ? void 0 : (_window$timetics = _window.timetics) === null || _window$timetics === void 0 ? void 0 : _window$timetics.start_of_week) // start week on Monday
                },

                onChange: function onChange(selectedDates, dateStr, instance) {
                    var day = (0, _utils_helper__WEBPACK_IMPORTED_MODULE_2__.getWeekDay)(new Date(dateStr));
                    dispatch({
                        type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_1__.actions.SET_STATE,
                        payload: {
                            selectedDate: dateStr,
                            selectedDay: day
                        }
                    });
                },
                onMonthChange: function onMonthChange(selectedDates, dateStr, instance) {
                    var _payload;
                    var newDateStr = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().month(instance.currentMonth).startOf("month").toDate();

                    //TODO newDateStr is the date for the first day of the month
                    //but when we set it to the context it has the value of the last day of the month

                    var unavailableDates = (0, _utils_helper__WEBPACK_IMPORTED_MODULE_2__.getDateListFromDayStrings)({
                        days: unavailableDays,
                        currentMonth: instance === null || instance === void 0 ? void 0 : instance.currentMonth
                    });
                    dispatch({
                        type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_1__.actions.SET_STATE,
                        payload: (_payload = {
                            currentMonth: instance === null || instance === void 0 ? void 0 : instance.currentMonth,
                            unavailableDates: unavailableDates
                        }, _defineProperty(_payload, "currentMonth", instance === null || instance === void 0 ? void 0 : instance.currentMonth), _defineProperty(_payload, "startDateForSlots", dayjs__WEBPACK_IMPORTED_MODULE_4___default()(newDateStr).format("YYYY-MM-DD")), _defineProperty(_payload, "selectedDate", null), _payload)
                    });
                }
            });
            return function() {
                flatpickrInstance.destroy();
            };
        }
    }, [generalSettings === null || generalSettings === void 0 ? void 0 : generalSettings.calendar_locale, unavailableDayNumber]);
    useEffect(function() {
        if (selectedDate) {
            var selectedDaysSlots = getSlotsForSelectedDay({
                selectedDate: dayjs__WEBPACK_IMPORTED_MODULE_4___default()(selectedDate).format("YYYY-MM-DD")
            });
            var day = (0, _utils_helper__WEBPACK_IMPORTED_MODULE_2__.getWeekDay)(new Date(selectedDate));
            dispatch({
                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_1__.actions.SET_MEETING_SLOTS,
                payload: {
                    selectedDay: day,
                    //commented out to hide the slot component on load by default
                    // selectedDate: dayjs(new Date()).format("YYYY-MM-DD"),
                    selectedDaysSlots: selectedDaysSlots
                }
            });
        }
    }, [selectedDate]);

    /**
     *Called On change of selected date
     */
    useEffect(function() {
        if (selectedDate && slots) {
            var currentDateSlot = slots === null || slots === void 0 ? void 0 : slots.days.filter(function(day) {
                return (day === null || day === void 0 ? void 0 : day.date) === selectedDate;
            });

            // hand picking data for current selected date
            if (currentDateSlot) {
                dispatch({
                    type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_1__.actions.SET_STATE,
                    payload: {
                        currentDateSlot: currentDateSlot[0]
                    }
                });
            }
        }
    }, [selectedDate, slots]);
    return /*#__PURE__*/ React.createElement("div", {
        className: "tt-flatpickr-calendar"
    }, /*#__PURE__*/ React.createElement("input", {
        ref: fp,
        type: "text",
        className: "flatpickr-input"
    }));
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (BookingCalendar);

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/BookingCalendar.js?