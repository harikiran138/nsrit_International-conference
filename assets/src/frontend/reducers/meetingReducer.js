__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "meetingReducer": () => ( /* binding */ meetingReducer)
    /* harmony export */
});
/* harmony import */
var _actionCreators_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../actionCreators/actions */ "./assets/src/frontend/actionCreators/actions.js");

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

var demo = "demo";
var meetingReducer = function meetingReducer(state, action) {
    switch (action.type) {
        case _actionCreators_actions__WEBPACK_IMPORTED_MODULE_0__.actions.SET_STATE:
            {
                var payload = action.payload;
                return _objectSpread(_objectSpread({}, state), payload);
            }
        case _actionCreators_actions__WEBPACK_IMPORTED_MODULE_0__.actions.SET_LOADING:
            {
                var _payload = action.payload;
                return _objectSpread(_objectSpread({}, state), {}, {
                    loading: _payload
                });
            }
        case _actionCreators_actions__WEBPACK_IMPORTED_MODULE_0__.actions.SET_DATA_CONTROLS:
            {
                var _payload2 = action.payload;
                return _objectSpread(_objectSpread({}, state), {}, {
                    dataControls: _payload2
                });
            }
        case _actionCreators_actions__WEBPACK_IMPORTED_MODULE_0__.actions.SET_SINGLE_MEETING_DATA:
            {
                var _payload3 = action.payload;
                return _objectSpread(_objectSpread({}, state), _payload3);
            }
        case _actionCreators_actions__WEBPACK_IMPORTED_MODULE_0__.actions.SET_MEETING_SLOTS:
            {
                var _payload4 = action.payload;
                return _objectSpread(_objectSpread({}, state), _payload4);
            }
        case _actionCreators_actions__WEBPACK_IMPORTED_MODULE_0__.actions.CLEAR_BOOKING_RELATED_DATA:
            {
                var _payload5 = action.payload;
                return _objectSpread(_objectSpread({}, state), {}, {
                    step: 1,
                    paymentStatus: null,
                    response: null,
                    contactInfo: null,
                    bookingTime: "",
                    selectedDate: null,
                    selectedSeats: [],
                    selectedDaysSlots: [],
                    selectedDay: null,
                    unavailableDays: [],
                    unavailableDayNumber: [],
                    selectedStaff: null
                }, _payload5);
            }
        default:
            return state;
    }
};

//# sourceURL=webpack://timetics/./assets/src/frontend/reducers/meetingReducer.js?