__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "convertMilisecondsToCurrentDateAsMiliseconds": () => ( /* binding */ convertMilisecondsToCurrentDateAsMiliseconds),
    /* harmony export */
    "genrateSeats": () => ( /* binding */ genrateSeats),
    /* harmony export */
    "getDateListFromDayStrings": () => ( /* binding */ getDateListFromDayStrings),
    /* harmony export */
    "getDateRangeOfStartDateAndEndOfTheMonth": () => ( /* binding */ getDateRangeOfStartDateAndEndOfTheMonth),
    /* harmony export */
    "getDayCountOfMonth": () => ( /* binding */ getDayCountOfMonth),
    /* harmony export */
    "getDayNumber": () => ( /* binding */ getDayNumber),
    /* harmony export */
    "getDayNumbers": () => ( /* binding */ getDayNumbers),
    /* harmony export */
    "getDaysThatNotAvailable": () => ( /* binding */ getDaysThatNotAvailable),
    /* harmony export */
    "getPaymentMethods": () => ( /* binding */ getPaymentMethods),
    /* harmony export */
    "getStepNo": () => ( /* binding */ getStepNo),
    /* harmony export */
    "getTimeSlot": () => ( /* binding */ getTimeSlot),
    /* harmony export */
    "getWeekDay": () => ( /* binding */ getWeekDay),
    /* harmony export */
    "isFreeMeeting": () => ( /* binding */ isFreeMeeting),
    /* harmony export */
    "isLocalPayment": () => ( /* binding */ isLocalPayment),
    /* harmony export */
    "isNoPayment": () => ( /* binding */ isNoPayment),
    /* harmony export */
    "isWCPayment": () => ( /* binding */ isWCPayment)
    /* harmony export */
});
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */
var _common_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../common/constant */ "./assets/src/common/constant.js");



/**
 *Handler for getting the day of the week from a date.
 * @param {Object} date Js Date object
 * @returns {String} Day of the week
 */
function getWeekDay(date) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}

/**
 *Handler for getting the day count of a month.
 * @param {Object} date Js Date object
 * @returns {Number} Day count of the month
 */
var getDayCountOfMonth = function getDayCountOfMonth() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    date.setDate(1); // Set date to the first of the month
    date.setMonth(date.getMonth() + 1); // Set date to the first of the next month
    date.setDate(date.getDate() - 1); // Set date to the last day of the current month
    var dayCount = date.getDate();
    return dayCount;
};
var getDaysThatNotAvailable = function getDaysThatNotAvailable(schedules) {
    if (!schedules) return [];
    var days = schedules.filter(function(day) {
        return !day.status;
    });
    return days.map(function(day) {
        return day.name.toLocaleLowerCase();
    });
};
var getDateListFromDayStrings = function getDateListFromDayStrings(_ref) {
    var _ref$days = _ref.days,
        days = _ref$days === void 0 ? [] : _ref$days,
        _ref$currentMonth = _ref.currentMonth,
        currentMonth = _ref$currentMonth === void 0 ? new Date().getMonth() : _ref$currentMonth;
    var unavailableDates = [];
    var date = new Date();
    var dateForCurrentMonth = new Date(date.setMonth(currentMonth));
    // get currentMonth day count
    var dayCount = getDayCountOfMonth(new Date(dateForCurrentMonth));
    for (var i = 1; i <= dayCount; i++) {
        var _date = new Date(dateForCurrentMonth);
        _date.setDate(i);
        var day = _date.toLocaleDateString("en", {
            weekday: "long"
        }).toLocaleLowerCase();
        if (days.includes(day)) {
            unavailableDates.push(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(_date).format("YYYY-MM-DD"));
        }
    }
    return unavailableDates;
};
var getTimeSlot = function getTimeSlot(_ref2) {
    var schedule = _ref2.schedule,
        selectedDate = _ref2.selectedDate,
        selectedDay = _ref2.selectedDay,
        duration = _ref2.duration;
    //get number from du
    var num = parseInt(duration);
    //get unit from du
    var splittedDuration = duration.split(" ");
    //convert unit to seconds
    var multiplier = splittedDuration[1] == "min" ? 60 * 1000 : 60 * 60 * 1000;
    var durationInMilliseconds = multiplier * splittedDuration[0];
    var day = schedule.find(function(day) {
        return day.name === selectedDay;
    });

    // divide the time slots into 30 minutes intervals and return the time slots

    var timeSlots = [];
    var startTime = convertMilisecondsToCurrentDateAsMiliseconds(day.schedules[0].start.value, selectedDate);
    var endTime = convertMilisecondsToCurrentDateAsMiliseconds(day.schedules[0].end.value, selectedDate);
    for (var i = startTime; endTime - i >= durationInMilliseconds; i += durationInMilliseconds) {
        var date = new Date(selectedDate);
        date.setHours(0, 0, 0, 0);
        date.setHours(new Date(i).getHours(), new Date(i).getMinutes(), new Date(i).getSeconds(), new Date(i).getMilliseconds());
        timeSlots.push(date.getTime());
    }
    return timeSlots;
};
var convertMilisecondsToCurrentDateAsMiliseconds = function convertMilisecondsToCurrentDateAsMiliseconds(miliseconds, selectedDate) {
    var date = new Date(miliseconds);
    // date.setHours(0, 0, 0, 0);
    date.setDate(new Date(selectedDate).getDate());
    date.setHours(new Date(date).getHours(), new Date(date).getMinutes(), new Date(date).getSeconds(), new Date(date).getMilliseconds());
    return date.getTime();
};
var getDayNumber = function getDayNumber(_ref3) {
    var days = _ref3.days;
    var _days = {
        sunday: 0,
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6
    };

    //convert days to numbers based on _days object
    var dayNumbers = days.map(function(day) {
        return _days[day];
    });
    return dayNumbers;
};
var getDateRangeOfStartDateAndEndOfTheMonth = function getDateRangeOfStartDateAndEndOfTheMonth(date) {
    //get date range of the month based on start date
    var startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).toDate();
    var endDate = new Date(date);
    endDate.setDate(getDayCountOfMonth(startDate));
    return {
        startDate: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).toDate()).format("YYYY-MM-DD"),
        endDate: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endDate).format("YYYY-MM-DD")
    };
};
var getDayNumbers = function getDayNumbers(schedule) {
    var _days = {
        sun: 0,
        mon: 1,
        tue: 2,
        wed: 3,
        thu: 4,
        fri: 5,
        sat: 6
    };

    //convert days to numbers based on _days object
    var dayNumbers = Object.keys(schedule).map(function(day) {
        if (schedule[day].length < 1) {
            return _days["".concat(String(day).toLocaleLowerCase())];
        }
    });
    //remove undefined values
    var _dayNumbers = dayNumbers.filter(function(day) {
        return day !== undefined;
    });
    return _dayNumbers;
};
var isNoPayment = function isNoPayment(paymentMethods) {
    var noPayment = paymentMethods === null || paymentMethods === void 0 ? void 0 : paymentMethods.every(function(method) {
        return !method.status;
    });
    return noPayment;
};
var isLocalPayment = function isLocalPayment(paymentMethods) {
    var localPayment = paymentMethods.some(function(method) {
        return method.name == "Local Pay" && method.status;
    });
    return localPayment;
};
var isWCPayment = function isWCPayment(paymentMethods) {
    var wcPayment = paymentMethods.some(function(method) {
        return method.name == "Woocommerce" && method.status;
    });
    return wcPayment;
};
var isFreeMeeting = function isFreeMeeting(total) {
    var freeMeeting = total === 0;
    return freeMeeting;
};
var getPaymentMethods = function getPaymentMethods(paymentMethods) {
    var methods = paymentMethods.filter(function(method) {
        return method.status;
    });
    return methods;
};
var getStepNo = function getStepNo(_ref4) {
    var isFree = _ref4.isFree,
        noPayment = _ref4.noPayment,
        isLocalPaymentActive = _ref4.isLocalPaymentActive,
        selectedPaymentMethod = _ref4.selectedPaymentMethod,
        meetingType = _ref4.meetingType,
        wcPayment = _ref4.wcPayment;
    var status = 3;
    if (isFree) {
        status = _common_constant__WEBPACK_IMPORTED_MODULE_1__.FRONTEND_STEPS.bookingSchedule;
        return status;
    }
    if (noPayment) {
        status = _common_constant__WEBPACK_IMPORTED_MODULE_1__.FRONTEND_STEPS.bookingSchedule;
        return status;
    }
    if (isLocalPaymentActive && selectedPaymentMethod == "Local Pay") {
        status = _common_constant__WEBPACK_IMPORTED_MODULE_1__.FRONTEND_STEPS.bookingSchedule;
        return status;
    }
    if (wcPayment) {
        status = _common_constant__WEBPACK_IMPORTED_MODULE_1__.FRONTEND_STEPS.contactInfo;
        return status;
    }
    if (selectedPaymentMethod == "Paypal" || selectedPaymentMethod == "Stripe") {
        status = _common_constant__WEBPACK_IMPORTED_MODULE_1__.FRONTEND_STEPS.paymentForm;
    }
    return status;
};

// demo/test for seat generation
var genrateSeats = function genrateSeats(_ref5) {
    var _ref5$row = _ref5.row,
        row = _ref5$row === void 0 ? 4 : _ref5$row,
        _ref5$column = _ref5.column,
        column = _ref5$column === void 0 ? 12 : _ref5$column,
        _ref5$label = _ref5.label,
        label = _ref5$label === void 0 ? "a,Z|0,100" : _ref5$label,
        _ref5$ticketType = _ref5.ticketType,
        ticketType = _ref5$ticketType === void 0 ? "vip" : _ref5$ticketType;
    var seats = [];
    var labels = label.split("|");
    var rowLabels = labels[0].split(",");
    var columnLabels = labels[1].split(",");
    var rowLabelStart = rowLabels[0];
    var rowLabelEnd = rowLabels[1];
    var columnLabelStart = columnLabels[0];
    var columnLabelEnd = columnLabels[1];
    for (var i = 0; i < row; i++) {
        var _row = [];
        for (var j = 0; j < column; j++) {
            var seat = {
                row: String.fromCharCode(rowLabelStart.charCodeAt(0) + i),
                column: +(columnLabelStart + j),
                status: "available",
                type: ticketType
            };
            _row.push(seat);
        }
        seats.push(_row);
    }
};
genrateSeats({
    row: 4,
    column: 12,
    label: "a,Z|0,100",
    ticketType: "vip"
});

//# sourceURL=webpack://timetics/./assets/src/frontend/utils/helper.js?