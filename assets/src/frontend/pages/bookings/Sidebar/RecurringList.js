__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => ( /* binding */ RecurringList)
    /* harmony export */
});
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../context/provider */ "./assets/src/frontend/context/provider.js");

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

var _window$antd = window.antd,
    Typography = _window$antd.Typography,
    Tooltip = _window$antd.Tooltip;

var Text = Typography.Text;

function RecurringList() {
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_1__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 1),
        meetingReducer = _useStateValue2[0].meeting;
    var allRecurringDates = meetingReducer.allRecurringDates,
        bookingTime = meetingReducer.bookingTime;
    return /*#__PURE__*/ React.createElement("div", null, allRecurringDates === null || allRecurringDates === void 0 ? void 0 : allRecurringDates.slice(0, 3).map(function(date) {
        return /*#__PURE__*/ React.createElement("div", {
            key: date
        }, /*#__PURE__*/ React.createElement(Text, null, bookingTime, ",", " ", dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("dddd, MMMM D, YYYY")));
    }), (allRecurringDates === null || allRecurringDates === void 0 ? void 0 : allRecurringDates.length) > 3 ? /*#__PURE__*/ React.createElement(Tooltip, {
        overlayClassName: "tt-tooltip-card",
        title: function title() {
            return allRecurringDates === null || allRecurringDates === void 0 ? void 0 : allRecurringDates.slice(3).map(function(date) {
                return /*#__PURE__*/ React.createElement("div", {
                    key: date
                }, /*#__PURE__*/ React.createElement("span", null, bookingTime, ",", " ", dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("dddd, MMMM D, YYYY")));
            });
        }
    }, /*#__PURE__*/ React.createElement(Text, null, "+", (allRecurringDates === null || allRecurringDates === void 0 ? void 0 : allRecurringDates.length) - 3, " More...")) : null);
}

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/Sidebar/RecurringList.js?