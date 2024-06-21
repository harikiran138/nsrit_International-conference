__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "UploadImageFromMedia": () => ( /* binding */ UploadImageFromMedia),
    /* harmony export */
    "_compareTime": () => ( /* binding */ _compareTime),
    /* harmony export */
    "_getNextTimeSlot": () => ( /* binding */ _getNextTimeSlot),
    /* harmony export */
    "compareTime": () => ( /* binding */ compareTime),
    /* harmony export */
    "convertMillisecondsToTodaysDateObject": () => ( /* binding */ convertMillisecondsToTodaysDateObject),
    /* harmony export */
    "convertWeekDayToNumber": () => ( /* binding */ convertWeekDayToNumber),
    /* harmony export */
    "convertWordpressDateFormatToDayjs": () => ( /* binding */ convertWordpressDateFormatToDayjs),
    /* harmony export */
    "convertWordpressTimeFormatToDayjs": () => ( /* binding */ convertWordpressTimeFormatToDayjs),
    /* harmony export */
    "getNextTimeSlot": () => ( /* binding */ getNextTimeSlot),
    /* harmony export */
    "incrementTime": () => ( /* binding */ incrementTime),
    /* harmony export */
    "prepareTimeSlotConflict": () => ( /* binding */ prepareTimeSlotConflict),
    /* harmony export */
    "setScheduleDataToContex": () => ( /* binding */ setScheduleDataToContex)
    /* harmony export */
});
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */
var _admin_actionCreators_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../admin/actionCreators/common */ "./assets/src/admin/actionCreators/common.js");
/* harmony import */
var _admin_utils_dummyData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../admin/utils/dummyData */ "./assets/src/admin/utils/dummyData.js");
/* harmony import */
var _availabilityModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./availabilityModel */ "./assets/src/helper/availabilityModel.js");

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




var ttFetch = function ttFetch(slug, callback, options) {
    return fetch(slug, options).then(function(res) {
        return res.json();
    }).then(function(data) {
        if (callback) {
            callback(data);
        }
    });
};
var getNextTimeSlot = function getNextTimeSlot(timeSlotes) {
    var lastSlot = timeSlotes[timeSlotes.length - 1];
    var newSlot = {
        start: incrementTime({
            prevTime: lastSlot.end,
            add: 1,
            spec: "hr"
        }),
        end: incrementTime({
            prevTime: lastSlot.end,
            add: 2,
            spec: "hr"
        })
    };
    return newSlot;
};
var _getNextTimeSlot = function _getNextTimeSlot(_ref) {
    var schedules = _ref.schedules,
        duration = _ref.duration,
        bufferTime = _ref.bufferTime,
        dayEnd = _ref.dayEnd;
    var _getOneScheduleObj2 = (0, _admin_utils_dummyData__WEBPACK_IMPORTED_MODULE_2__._getOneScheduleObj)({
            schedules: schedules,
            duration: duration,
            bufferTime: bufferTime,
            dayEnd: dayEnd
        }),
        startTime = _getOneScheduleObj2.startTime,
        _duration = _getOneScheduleObj2.duration,
        _dayEnd = _getOneScheduleObj2.dayEnd;
    var _getSlotStartAndEndTi = (0, _admin_utils_dummyData__WEBPACK_IMPORTED_MODULE_2__.getSlotStartAndEndTime)({
            startTime: startTime,
            duration: _duration,
            dayEnd: _dayEnd
        }),
        start = _getSlotStartAndEndTi.start,
        end = _getSlotStartAndEndTi.end;
    var startLabel = (0, _admin_utils_dummyData__WEBPACK_IMPORTED_MODULE_2__.getTimeStringFromDateObject)(new Date(start).toString());
    var endLabel = (0, _admin_utils_dummyData__WEBPACK_IMPORTED_MODULE_2__.getTimeStringFromDateObject)(new Date(end).toString());
    return {
        start: {
            value: start,
            label: (0, _admin_utils_dummyData__WEBPACK_IMPORTED_MODULE_2__.getTimeStringFromDateObject)(new Date(start).toString())
        },
        end: {
            value: end,
            label: (0, _admin_utils_dummyData__WEBPACK_IMPORTED_MODULE_2__.getTimeStringFromDateObject)(new Date(end).toString())
        }
    };
};
var incrementTime = function incrementTime(_ref2) {
    var prevTime = _ref2.prevTime,
        _ref2$add = _ref2.add,
        add = _ref2$add === void 0 ? 1 : _ref2$add,
        _ref2$spec = _ref2.spec,
        spec = _ref2$spec === void 0 ? "hr" : _ref2$spec;
    var hour = prevTime.split(":")[0];
    var minutes = prevTime.split(":")[1];
    if (spec == "hr") {
        if (hour == "00") {
            hour = 1;
        } else if (+hour + 1 > 23) {
            hour = "00";
        } else {
            hour = +hour + add;
        }
        // hour = +hour + 1 > 23 ? "00" : hour == "00" ? 1 : +hour + add;
    }

    if (spec == "min") {
        minutes = minutes >= 59 ? "00" : +minutes + add;
    }
    return "".concat(hour, ":").concat(minutes);
};
var _compareTime = function _compareTime(_ref3) {
    var _schedule$schedules;
    var key = _ref3.key,
        value = _ref3.value,
        timeSlotIndex = _ref3.timeSlotIndex,
        scheduleIndex = _ref3.scheduleIndex,
        schedule = _ref3.schedule;
    var status = {
        hasError: false,
        "with": []
    };
    var _value = value.value;
    var timeInMs = new Date(_value).getTime();
    var startArr = [];
    schedule === null || schedule === void 0 ? void 0 : (_schedule$schedules = schedule.schedules) === null || _schedule$schedules === void 0 ? void 0 : _schedule$schedules.map(function(item) {
        startArr.push({
            start: new Date(item.start.value).getTime(),
            end: new Date(item.end.value).getTime(),
            time: timeInMs
        });
    });
    for (var i = 0; i < startArr.length; i++) {
        for (var j = 0; j < startArr.length; j++) {
            if (startArr[j].start > startArr[i].start && startArr[j].end < startArr[i].end || startArr[j].end > startArr[i].start && startArr[j].end < startArr[i].end || startArr[j].start >= startArr[j].end) {
                status.hasError = true;
                status.scheduleIndex = scheduleIndex;
                status["with"].push(i);
                status["with"].push(j);
            }
        }
    }
    return status;
};
var compareTime = function compareTime(_ref4) {
    var _schedule$schedules2, _status$scheduleIndex;
    var key = _ref4.key,
        value = _ref4.value,
        timeSlotIndex = _ref4.timeSlotIndex,
        scheduleIndex = _ref4.scheduleIndex,
        schedule = _ref4.schedule,
        timeCompareError = _ref4.timeCompareError;
    var status = _objectSpread({}, timeCompareError);
    var _value = value.value;
    var timeInMs = new Date(_value).getTime();
    var startArr = [];
    schedule === null || schedule === void 0 ? void 0 : (_schedule$schedules2 = schedule.schedules) === null || _schedule$schedules2 === void 0 ? void 0 : _schedule$schedules2.map(function(item) {
        startArr.push(convertMillisecondsToTodaysDateObject(item.start.value), convertMillisecondsToTodaysDateObject(item.end.value));
    });
    var _conflictWith = [];
    var scIndexStatus = [];
    console.log(startArr);
    console.log(status);
    // check if any possible time conflicts and set error in timeCompareError
    for (var i = 0; i < startArr.length; i++) {
        var _checkIfHave = status["with"][scheduleIndex] ? status["with"][scheduleIndex] : [];
        var conflict = Math.floor(i / 2);
        var conflictWith = Math.floor(i / 2);
        if (startArr[i] > startArr[i + 1]) {
            scIndexStatus[i] = false;
            status.hasError = true;
            status.scheduleIndex = _toConsumableArray(new Set([].concat(_toConsumableArray(status.scheduleIndex), [scheduleIndex])));
            _conflictWith.push(conflict, conflictWith + 1);
            status["with"][scheduleIndex] = _toConsumableArray(new Set([].concat(_toConsumableArray(_checkIfHave), _toConsumableArray(_conflictWith))));
        }
        if (i % 2 == 0 && startArr[i] == startArr[i + 1]) {
            _conflictWith = [];
            scIndexStatus[i] = false;
            status.hasError = true;
            status.scheduleIndex = _toConsumableArray(new Set([].concat(_toConsumableArray(status.scheduleIndex), [scheduleIndex])));
            _conflictWith.push(conflict);
            status["with"][scheduleIndex] = _toConsumableArray(new Set([].concat(_toConsumableArray(_checkIfHave), _toConsumableArray(_conflictWith))));
        }
        _conflictWith = [];
        if (startArr[i] <= startArr[i + 1]) {
            scIndexStatus[i] = true;
        }
    }

    //clear error base on scheduleIndex

    if (scIndexStatus.every(function(item) {
            return item == true;
        })) {
        status.scheduleIndex = _toConsumableArray(status.scheduleIndex).filter(function(item) {
            return item != scheduleIndex;
        });
        status["with"][scheduleIndex] = [];
    }

    // No error if status object's scheduleIndex array length is 0 Or status object's with object property count is 0
    if (((_status$scheduleIndex = status.scheduleIndex) === null || _status$scheduleIndex === void 0 ? void 0 : _status$scheduleIndex.length) == 0 || Object.keys(status["with"]).length == 0) {
        status.hasError = false;
    }
    return status;
};

/**
 *
 * @param {*} errorObj Error object returned from compareTime function.
 * @returns structured error data
 */
var prepareTimeSlotConflict = function prepareTimeSlotConflict(_ref5) {
    var prevErrorObj = _ref5.prevErrorObj,
        newError = _ref5.newError;
    // const validTimeError = {
    //     ..._status,
    //     errros: { [_status.scheduleIndex]: [..._status.with] },
    // };

    return "";
};

/**
 * Upload image form wordpress media
 * @param {*} event
 * @param {*} setImageUrl
 * @returns media
 */

var UploadImageFromMedia = function UploadImageFromMedia(event, getImgURL, getImgID) {
    event.preventDefault();
    var mediaUploader;
    if (mediaUploader) {
        mediaUploader.open();
        return;
    }
    mediaUploader = wp.media.frames.file_frame = wp.media({
        title: "Choose Image",
        button: {
            text: "Choose Image"
        },
        multiple: false
    });

    // When a file is selected, grab the URL and set it as the text field's value
    mediaUploader.on("select", function() {
        var attachmentURL = mediaUploader.state().get("selection").first().toJSON();
        getImgURL(attachmentURL.url);
        getImgID(attachmentURL.id);
    });

    // Open the uploader dialog
    var media = mediaUploader.open();
    return media;
};
var setScheduleDataToContex = function setScheduleDataToContex(_ref6) {
    var dispatch = _ref6.dispatch,
        meeting = _ref6.meeting,
        staffs = _ref6.staffs;
    var _staffs = staffs === null || staffs === void 0 ? void 0 : staffs.filter(function(staff) {
        return _toConsumableArray(meeting === null || meeting === void 0 ? void 0 : meeting.staff).includes(staff.id);
    });
    var _staffsIds = meeting.staff;
    var _schedules = {};
    Object.keys(meeting === null || meeting === void 0 ? void 0 : meeting.schedule).map(function(item) {
        _schedules[item] = (0, _availabilityModel__WEBPACK_IMPORTED_MODULE_3__.convertSchedulesForUi)(meeting === null || meeting === void 0 ? void 0 : meeting.schedule[item]);
    });
    (0, _admin_actionCreators_common__WEBPACK_IMPORTED_MODULE_1__.setState)({
        dispatch: dispatch,
        name: "selectedStaff",
        value: _staffs
    });
    (0, _admin_actionCreators_common__WEBPACK_IMPORTED_MODULE_1__.setState)({
        dispatch: dispatch,
        name: "selectedStaffIds",
        value: _staffsIds
    });
    (0, _admin_actionCreators_common__WEBPACK_IMPORTED_MODULE_1__.setState)({
        dispatch: dispatch,
        name: "schedules",
        value: _objectSpread({}, _schedules)
    });
};
var convertMillisecondsToTodaysDateObject = function convertMillisecondsToTodaysDateObject(milliseconds) {
    var date = new Date(milliseconds);
    var dateObject = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };

    //convert dateObject to js date object
    var dateObjectToMilliseconds = new Date(dateObject.year, dateObject.month - 1, dateObject.day, dateObject.hour, dateObject.minute, dateObject.second).getTime();
    return dateObjectToMilliseconds;
};

//convert wordpress date format to dayjs date format
var convertWordpressDateFormatToDayjs = function convertWordpressDateFormatToDayjs(_ref7) {
    var _window, _window$timetics;
    var _ref7$format = _ref7.format,
        format = _ref7$format === void 0 ? (_window = window) === null || _window === void 0 ? void 0 : (_window$timetics = _window.timetics) === null || _window$timetics === void 0 ? void 0 : _window$timetics.date_format : _ref7$format,
        date = _ref7.date;
    if (!date) return;
    var jsFormat = format.replace("d", "DD").replace("D", "D").replace("j", "D").replace("l", "DD").replace("m", "MM").replace("n", "M").replace("F", "MMMM").replace("Y", "YYYY");
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format(jsFormat);
};
var convertWordpressTimeFormatToDayjs = function convertWordpressTimeFormatToDayjs(_ref8) {
    var _window2, _window2$timetics;
    var _ref8$format = _ref8.format,
        format = _ref8$format === void 0 ? (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$timetics = _window2.timetics) === null || _window2$timetics === void 0 ? void 0 : _window2$timetics.time_format : _ref8$format,
        time = _ref8.time;
    if (!time) return;
    var jsFormat = format.replace("g", "h").replace("G", "H").replace("h", "hh").replace("H", "HH").replace("i", "mm").replace("s", "ss").replace("a", "a").replace("A", "A");
    var hour = parseInt(time === null || time === void 0 ? void 0 : time.split(":")[0]);
    var minute = parseInt(time.split(":")[1].slice(0, 2));
    var date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().hour(hour).minute(minute);
    if (time.endsWith("pm") && hour < 12) {
        date = date.add(12, "hour");
    }
    return date.format(jsFormat);
};
var convertWeekDayToNumber = function convertWeekDayToNumber(day) {
    var weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return weekDays.indexOf(day.toLowerCase());
};

//# sourceURL=webpack://timetics/./assets/src/helper/helpers.js?