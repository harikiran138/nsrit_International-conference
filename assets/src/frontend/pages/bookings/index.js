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
var _ContactInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./ContactInfo */ "./assets/src/frontend/pages/bookings/ContactInfo.js");
/* harmony import */
var _PaymentForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./PaymentForm */ "./assets/src/frontend/pages/bookings/PaymentForm.js");
/* harmony import */
var _BookingSchedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./BookingSchedule */ "./assets/src/frontend/pages/bookings/BookingSchedule.js");
/* harmony import */
var _frontendSteps_FrontendSteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../frontendSteps/FrontendSteps */ "./assets/src/frontend/frontendSteps/FrontendSteps.js");

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





function Bookings() {
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_0__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        meetingReducer = _useStateValue2[0].meeting,
        dispatch = _useStateValue2[1];
    var step = meetingReducer.step;
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(_frontendSteps_FrontendSteps__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (Bookings);

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/index.js?