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
var _helper_availabilityModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../../helper/availabilityModel */ "./assets/src/helper/availabilityModel.js");
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../context/provider */ "./assets/src/frontend/context/provider.js");

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



function useBooking() {
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_2__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        meetingReducer = _useStateValue2[0].meeting,
        dispatch = _useStateValue2[1];
    var slots = meetingReducer.slots;
    var covertedSchedules = function covertedSchedules(schedules) {
        var _schedules = {};
        Object.keys(schedules).map(function(item) {
            _schedules[item] = (0, _helper_availabilityModel__WEBPACK_IMPORTED_MODULE_1__.convertSchedulesForUi)(schedules[item]);
        });
        return _schedules;
    };
    var getSlotsForSelectedDay = function getSlotsForSelectedDay(_ref) {
        var _slots$days, _data$, _data$$slots;
        var selectedDate = _ref.selectedDate;
        var data = slots === null || slots === void 0 ? void 0 : (_slots$days = slots.days) === null || _slots$days === void 0 ? void 0 : _slots$days.filter(function(item) {
            return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(item === null || item === void 0 ? void 0 : item.date).format("YYYY-MM-DD") === dayjs__WEBPACK_IMPORTED_MODULE_0___default()(selectedDate).format("YYYY-MM-DD");
        });
        var _singleDaySlots = data === null || data === void 0 ? void 0 : (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : (_data$$slots = _data$.slots) === null || _data$$slots === void 0 ? void 0 : _data$$slots.filter(function(item) {
            return item.status == "available";
        });
        return _singleDaySlots;
    };
    return {
        getSlotsForSelectedDay: getSlotsForSelectedDay
    };
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (useBooking);

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/hooks/useBooking.js?