__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => ( /* binding */ RecurringInput)
    /* harmony export */
});
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../context/provider */ "./assets/src/frontend/context/provider.js");

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
var Typography = window.antd.Typography;

var Text = Typography.Text;

function RecurringInput(_ref) {
    var onChange = _ref.onChange;
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_0__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 1),
        meetingReducer = _useStateValue2[0].meeting;
    var meeting = meetingReducer.meeting,
        customRecurringLimit = meetingReducer.customRecurringLimit;
    return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement(Text, null, "Every", " ", (meeting === null || meeting === void 0 ? void 0 : meeting.recurring_interval) > 1 ? meeting === null || meeting === void 0 ? void 0 : meeting.recurring_interval : null, " ", (meeting === null || meeting === void 0 ? void 0 : meeting.recurring_interval) > 1 ? "".concat(meeting === null || meeting === void 0 ? void 0 : meeting.recurring_interval_name.toLowerCase(), "s") : meeting === null || meeting === void 0 ? void 0 : meeting.recurring_interval_name.toLowerCase(), " ", "for"), " ", /*#__PURE__*/ React.createElement("input", {
        style: {
            maxWidth: "6ch",
            padding: "0 0.25rem",
            borderRadius: "0.25rem"
        },
        type: "number",
        min: 1,
        value: customRecurringLimit !== null && customRecurringLimit !== void 0 ? customRecurringLimit : meeting === null || meeting === void 0 ? void 0 : meeting.recurring_limit,
        max: meeting === null || meeting === void 0 ? void 0 : meeting.recurring_limit,
        onChange: onChange
    }), " ", /*#__PURE__*/ React.createElement(Text, null, (customRecurringLimit || (meeting === null || meeting === void 0 ? void 0 : meeting.recurring_limit)) > 1 ? "Occurrences" : "Occurrence"));
}

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/Sidebar/RecurringInput.js?