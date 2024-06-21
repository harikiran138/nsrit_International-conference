__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "convertScheduleForApi": () => ( /* binding */ convertScheduleForApi),
    /* harmony export */
    "convertScheduleForUi": () => ( /* binding */ convertScheduleForUi),
    /* harmony export */
    "convertSchedulesForApi": () => ( /* binding */ convertSchedulesForApi),
    /* harmony export */
    "convertSchedulesForUi": () => ( /* binding */ convertSchedulesForUi),
    /* harmony export */
    "getDayFullname": () => ( /* binding */ getDayFullname),
    /* harmony export */
    "getMilliseconsFromTimeString": () => ( /* binding */ getMilliseconsFromTimeString),
    /* harmony export */
    "getTimeStringFromMilliseconds": () => ( /* binding */ getTimeStringFromMilliseconds),
    /* harmony export */
    "getTimeStringFromTimeStringBasedOnFormat": () => ( /* binding */ getTimeStringFromTimeStringBasedOnFormat)
    /* harmony export */
});
/* harmony import */
var _admin_utils_dummyData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../admin/utils/dummyData */ "./assets/src/admin/utils/dummyData.js");
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);

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


var utc = __webpack_require__( /*! dayjs/plugin/utc */ "./node_modules/dayjs/plugin/utc.js");
var customParseFormat = __webpack_require__( /*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
var timezone = __webpack_require__( /*! dayjs/plugin/timezone */ "./node_modules/dayjs/plugin/timezone.js");
dayjs__WEBPACK_IMPORTED_MODULE_1___default().extend(timezone);
dayjs__WEBPACK_IMPORTED_MODULE_1___default().extend(utc);
dayjs__WEBPACK_IMPORTED_MODULE_1___default().extend(customParseFormat);
/**
 * Handler for converting schedule object to api format
 * @param {Object} schedule single schedule object of a day
 * @returns schedule object with start and end time in milliseconds
 */
var convertScheduleForApi = function convertScheduleForApi(schedule, targetTimeZone, srcTimeZone) {
    var _schedule = _objectSpread({}, schedule);
    if (_schedule.schedules) {
        if (targetTimeZone && srcTimeZone) {
            _schedule = _schedule.schedules.map(function(item) {
                var start = dayjs__WEBPACK_IMPORTED_MODULE_1___default().tz(getTimeStringFromMilliseconds(item.start.value), "HH:mm", srcTimeZone).tz(targetTimeZone).format("HH:mm");
                var end = dayjs__WEBPACK_IMPORTED_MODULE_1___default().tz(getTimeStringFromMilliseconds(item.end.value), "HH:mm", srcTimeZone).tz(targetTimeZone).format("HH:mm");
                return {
                    start: start,
                    end: end
                };
            });
        } else {
            _schedule = _schedule.schedules.map(function(item) {
                return {
                    start: getTimeStringFromMilliseconds(item.start.value),
                    end: getTimeStringFromMilliseconds(item.end.value)
                };
            });
        }
    }
    return _schedule;
};
/**
 *  Handler for converting schedules array to api format
 * @param {Array} schedules Array of schedule objects
 * @returns Converted schedules for api format
 */
var convertSchedulesForApi = function convertSchedulesForApi(schedules, targetTimeZone, srcTimeZone) {
    var _schedules = {};
    schedules.map(function(item) {
        if (item.status === false) {
            _schedules[item.key] = [];
        } else {
            _schedules[item.key] = convertScheduleForApi(item, targetTimeZone, srcTimeZone);
        }
    });
    return _schedules;
};

//currently not in use
/**
 *
 * @param {Objec} schedule  single schedule object of a day
 * @returns converted schedule object as per ui format
 */
var convertScheduleForUi = function convertScheduleForUi(schedule) {
    var _schedule = _objectSpread({}, schedule);
    if (_schedule.schedules) {
        _schedule = _schedule.schedules.map(function(item) {
            return {
                start: {
                    value: new Date((0, _admin_utils_dummyData__WEBPACK_IMPORTED_MODULE_0__.createDateObject)(item.start, 24)).getTime(),
                    label: item.start
                },
                end: {
                    value: new Date((0, _admin_utils_dummyData__WEBPACK_IMPORTED_MODULE_0__.createDateObject)(item.end, 24)).getTime(),
                    label: item.end
                }
            };
        });
    }
    return _schedule;
};

/**
 *
 * @param {Array} schedules Array of schedule objects
 * @returns converted schedules as per ui format
 */
var convertSchedulesForUi = function convertSchedulesForUi(schedules) {
    var _schedules = [];
    for (var _i = 0, _Object$entries = Object.entries(schedules); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
        var _schedule = {
            key: key,
            name: getDayFullname(key),
            status: value.length > 0 ? true : false,
            schedules: value !== null && value !== void 0 && value.length ? value.map(function(item) {
                return {
                    start: {
                        value: new Date((0, _admin_utils_dummyData__WEBPACK_IMPORTED_MODULE_0__.createDateObject)(item.start, 24)).getTime(),
                        label: getTimeStringFromTimeStringBasedOnFormat(item.start)
                    },
                    end: {
                        value: new Date((0, _admin_utils_dummyData__WEBPACK_IMPORTED_MODULE_0__.createDateObject)(item.end, 24)).getTime(),
                        label: getTimeStringFromTimeStringBasedOnFormat(item.end)
                    }
                };
            }) : [(0, _admin_utils_dummyData__WEBPACK_IMPORTED_MODULE_0__.getSlotTime)({
                startTime: "09:00 AM",
                duration: 10
            })]
        };
        _schedules.push(_schedule);
    }
    return _schedules;
};
var getTimeStringFromTimeStringBasedOnFormat = function getTimeStringFromTimeStringBasedOnFormat() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "5:00 PM";
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;
    //convert time string to 12 hour format or 24 hour format based on format
    var _time$split = time.split(":"),
        _time$split2 = _slicedToArray(_time$split, 2),
        hours = _time$split2[0],
        minutes = _time$split2[1];
    var _minutes$split = minutes.split(" "),
        _minutes$split2 = _slicedToArray(_minutes$split, 2),
        min = _minutes$split2[0],
        ampm2 = _minutes$split2[1];
    var _hours = ampm2 === "pm" ? parseInt(hours) + 12 : hours;
    var _minutes = min;
    if (format === 24) {
        return _hours + ":" + _minutes;
    } else {
        return _hours + ":" + _minutes + " " + ampm;
    }
};
var getTimeStringFromMilliseconds = function getTimeStringFromMilliseconds(time) {
    var date = new Date(time);
    var _time = (0, _admin_utils_dummyData__WEBPACK_IMPORTED_MODULE_0__.getTimeStringFromDateObject)(date);
    return _time;
};
var getMilliseconsFromTimeString = function getMilliseconsFromTimeString() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "9:00 am";
    var _time$split3 = time.split(":"),
        _time$split4 = _slicedToArray(_time$split3, 3),
        hours = _time$split4[0],
        minutes = _time$split4[1],
        ampm = _time$split4[2];
    var _minutes$split3 = minutes.split(" "),
        _minutes$split4 = _slicedToArray(_minutes$split3, 2),
        min = _minutes$split4[0],
        ampm2 = _minutes$split4[1];
    var _hours = ampm == "pm" ? parseInt(hours) + 12 : parseInt(hours);
    var _minutes = parseInt(min);
    var _time = new Date();
    _time.setHours(_hours);
    _time.setMinutes(_minutes);
    return _time.getTime();
};
var getDayFullname = function getDayFullname(day) {
    var days = {
        Mon: "Monday",
        Tue: "Tuesday",
        Wed: "Wednesday",
        Thu: "Thursday",
        Fri: "Friday",
        Sat: "Saturday",
        Sun: "Sunday"
    };
    return days[day];
};

//# sourceURL=webpack://timetics/./assets/src/helper/availabilityModel.js?