__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => ( /* binding */ SelectTimeZone)
    /* harmony export */
});
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../context/provider */ "./assets/src/frontend/context/provider.js");

function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e2) {
                    throw _e2;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
        didErr = false,
        err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e3) {
            didErr = true;
            err = _e3;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally {
                if (didErr) throw err;
            }
        }
    };
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
var Select = window.antd.Select;

function SelectTimeZone(_ref) {
    var onChange = _ref.onChange;
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_0__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 1),
        meetingReducer = _useStateValue2[0].meeting;
    var client_timezone = meetingReducer.client_timezone;
    return /*#__PURE__*/ React.createElement(Select, {
        className: "timetics-input",
        showSearch: true,
        filterOption: function filterOption(input, option) {
            var _option$label;
            return ((_option$label = option === null || option === void 0 ? void 0 : option.label) !== null && _option$label !== void 0 ? _option$label : "").toLowerCase().includes(input.toLowerCase());
        },
        defaultValue: client_timezone !== null && client_timezone !== void 0 ? client_timezone : Intl.DateTimeFormat().resolvedOptions().timeZone,
        style: {
            flex: 1
        },
        options: function() {
            if (!Intl.supportedValuesOf) {
                return [{
                    label: "Your browser does not support Intl.supportedValuesOf()",
                    value: null
                }];
            } else {
                var options = [];
                var _iterator = _createForOfIteratorHelper(Intl.supportedValuesOf("timeZone")),
                    _step;
                try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var timeZone = _step.value;
                        options.push({
                            label: timeZone,
                            value: timeZone
                        });
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally {
                    _iterator.f();
                }
                return options;
            }
        }(),
        onChange: onChange
    });
}

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/Sidebar/SelectTimeZone.js?