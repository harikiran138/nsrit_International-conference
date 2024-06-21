__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "_getOneScheduleObj": () => ( /* binding */ _getOneScheduleObj),
    /* harmony export */
    "createDateObject": () => ( /* binding */ createDateObject),
    /* harmony export */
    "dummySchedules": () => ( /* binding */ dummySchedules),
    /* harmony export */
    "getOneScheduleObj": () => ( /* binding */ getOneScheduleObj),
    /* harmony export */
    "getSlotStartAndEndTime": () => ( /* binding */ getSlotStartAndEndTime),
    /* harmony export */
    "getSlotTime": () => ( /* binding */ getSlotTime),
    /* harmony export */
    "getTimeOptions": () => ( /* binding */ getTimeOptions),
    /* harmony export */
    "getTimeStringFromDateObject": () => ( /* binding */ getTimeStringFromDateObject),
    /* harmony export */
    "timeOptions": () => ( /* binding */ timeOptions)
    /* harmony export */
});
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}


/**
 *
 * @param {Object} param0
 * @returns time-options for availability of staff
 */
var getTimeOptions = function getTimeOptions(_ref) {
    var _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 10 : _ref$duration,
        startTime = _ref.startTime,
        endTime = _ref.endTime;
    var timeOptions = [];
    var _startTime = new Date(createDateObject(startTime)).getTime();
    var _endTime = new Date(createDateObject(endTime)).getTime();
    var addMins = duration * 1000 * 60;
    timeOptions.push({
        value: _startTime,
        label: getTimeStringFromDateObject(new Date(_startTime).toString())
    });
    while (_startTime < _endTime) {
        _startTime += addMins;
        timeOptions.push({
            value: _startTime,
            label: getTimeStringFromDateObject(new Date(_startTime).toString())
        });
    }
    return timeOptions;
};
var timeOptions = [{
    value: createDateObject("10:00 AM"),
    label: "10:00 AM"
}, {
    value: createDateObject("10:30 AM"),
    label: "10:30 AM"
}, {
    value: createDateObject("11:00 AM"),
    label: "11:00 AM"
}, {
    value: createDateObject("12:00 PM"),
    label: "12:00 PM"
}, {
    value: createDateObject("01:00 PM"),
    label: "01:00 PM"
}, {
    value: createDateObject("02:00 PM"),
    label: "02:00 PM"
}, {
    value: createDateObject("03:45 PM"),
    label: "03:45 PM"
}, {
    value: createDateObject("06:00 PM"),
    label: "06:00 PM"
}];
var getOneScheduleObj = function getOneScheduleObj(timeSloteIndex) {
    var startTime = timeOptions[timeSloteIndex + 1];
    var endTime = timeOptions[timeSloteIndex + 2];
    return {
        start: startTime,
        end: endTime
    };
};
var _getOneScheduleObj = function _getOneScheduleObj(_ref2) {
    var _start, _end;
    var schedules = _ref2.schedules,
        duration = _ref2.duration,
        bufferTime = _ref2.bufferTime,
        dayEnd = _ref2.dayEnd;
    var startTime = (_start = _toConsumableArray(schedules)[_toConsumableArray(schedules).length - 1].start) === null || _start === void 0 ? void 0 : _start.label;
    var endTime = (_end = _toConsumableArray(schedules)[_toConsumableArray(schedules).length - 1].end) === null || _end === void 0 ? void 0 : _end.label;
    //added buffer time here... endTime(09:40 ) + bufferTime(120) = new start time
    if (bufferTime) {
        var _startTime = new Date(createDateObject(endTime, 24)).getTime();
        var addMins = duration * 1000 * 60; //bufferTime * 1000 * 60;
        endTime = getTimeStringFromDateObject(new Date(_startTime + addMins));
    }
    return {
        startTime: endTime,
        duration: duration,
        dayEnd: dayEnd
    };
};
var getSlotTime = function getSlotTime(_ref3) {
    var startTime = _ref3.startTime,
        _ref3$duration = _ref3.duration,
        duration = _ref3$duration === void 0 ? 10 : _ref3$duration,
        _ref3$dayEnd = _ref3.dayEnd,
        dayEnd = _ref3$dayEnd === void 0 ? "05:00 PM" : _ref3$dayEnd;
    var _startTime = new Date(createDateObject(startTime, 24)).getTime();
    var _dayEndInMs = new Date(createDateObject(dayEnd)).getTime();
    var addMins = duration * 1000 * 60;
    var _endTime = _startTime + addMins;
    // if (_startTime >= _dayEndInMs || _endTime > _dayEndInMs) {
    //     return false;
    // }
    return {
        start: {
            value: _startTime,
            label: getTimeStringFromDateObject(new Date(_startTime).toString())
        },
        end: {
            value: _endTime,
            label: getTimeStringFromDateObject(new Date(_endTime).toString())
        }
    };
};
var getSlotStartAndEndTime = function getSlotStartAndEndTime(_ref4) {
    var startTime = _ref4.startTime,
        _ref4$duration = _ref4.duration,
        duration = _ref4$duration === void 0 ? 10 : _ref4$duration,
        _ref4$dayEnd = _ref4.dayEnd,
        dayEnd = _ref4$dayEnd === void 0 ? "05:00 PM" : _ref4$dayEnd;
    var _startTime = new Date(createDateObject(startTime, 24)).getTime();
    var _dayEndInMs = new Date(createDateObject(dayEnd)).getTime();
    var addMins = duration * 1000 * 60;
    var _endTime = _startTime + addMins;
    // if (_startTime >= _dayEndInMs || _endTime > _dayEndInMs) {
    //     return false;
    // }
    return {
        start: _startTime,
        end: _endTime
    };
};
var dummySchedules = function dummySchedules(_ref5) {
    var startTime = _ref5.startTime,
        duration = _ref5.duration;
    return [{
        key: "Fri",
        name: "Friday",
        status: false,
        schedules: [getSlotTime({
            startTime: startTime,
            duration: duration
        })],
        actions: ["AddIcon", "DeleteIcon"]
    }, {
        key: "Sat",
        name: "Saturday",
        status: false,
        schedules: [getSlotTime({
            startTime: startTime,
            duration: duration
        })],
        actions: ["AddIcon", "DeleteIcon"]
    }, {
        key: "Sun",
        name: "Sunday",
        status: true,
        schedules: [getSlotTime({
            startTime: startTime,
            duration: duration
        })],
        actions: ["AddIcon", "DeleteIcon"]
    }, {
        key: "Mon",
        name: "Monday",
        status: true,
        schedules: [getSlotTime({
            startTime: startTime,
            duration: duration
        })],
        actions: ["AddIcon", "DeleteIcon"]
    }, {
        key: "Tue",
        name: "Tuesday",
        status: true,
        schedules: [getSlotTime({
            startTime: startTime,
            duration: duration
        })],
        actions: ["AddIcon", "DeleteIcon"]
    }, {
        key: "Wed",
        name: "Wednesday",
        status: true,
        schedules: [getSlotTime({
            startTime: startTime,
            duration: duration
        })],
        actions: ["AddIcon", "DeleteIcon"]
    }, {
        key: "Thu",
        name: "Thursday",
        status: true,
        schedules: [getSlotTime({
            startTime: startTime,
            duration: duration
        })],
        actions: ["AddIcon", "DeleteIcon"]
    }];
};

function createDateObject(time) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
    var startTime = new Date();
    var parts = time === null || time === void 0 ? void 0 : time.match(/(\d+):(\d+) (AM|PM)/);
    if (parts) {
        var hours = parseInt(parts[1]),
            minutes = parseInt(parts[2]),
            tt = parts[3];
        if (tt == "PM" && hours < 12) hours += 12;
        startTime.setHours(hours, minutes, 0, 0);
    } else {
        var _parts = time === null || time === void 0 ? void 0 : time.split(":");
        var _hours = parseInt(_parts[0]),
            _minutes = parseInt(_parts[1]);
        startTime.setHours(_hours, _minutes, 0, 0);
    }
    return startTime.toString();
}

/**
 *
 * @param {*} dateObj new Date() object of javascript.
 * @returns time in string format like: 09:20
 */
function getTimeStringFromDateObject(dateObj) {
    //TODO should be added in the localStorage and get from there...
    var timeFormat = 24;
    var time = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateObj).format(timeFormat == 24 ? "HH:mm" : "hh:mm A");
    return time;
}

//# sourceURL=webpack://timetics/./assets/src/admin/utils/dummyData.js?