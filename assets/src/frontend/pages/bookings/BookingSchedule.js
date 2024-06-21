__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony import */
var _admin_services_meetings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../admin/services/meetings */ "./assets/src/admin/services/meetings.js");
/* harmony import */
var _common_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../common/Spinner */ "./assets/src/common/Spinner.js");
/* harmony import */
var _actionCreators_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../actionCreators/actions */ "./assets/src/frontend/actionCreators/actions.js");
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../context/provider */ "./assets/src/frontend/context/provider.js");
/* harmony import */
var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./Header */ "./assets/src/frontend/pages/bookings/Header.js");
/* harmony import */
var _BookingDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./BookingDate */ "./assets/src/frontend/pages/bookings/BookingDate.js");
/* harmony import */
var _MeetingDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./MeetingDetails */ "./assets/src/frontend/pages/bookings/MeetingDetails.js");
/* harmony import */
var _helper_availabilityModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../../helper/availabilityModel */ "./assets/src/helper/availabilityModel.js");
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */
var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */
var _utils_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../../utils/helper */ "./assets/src/frontend/utils/helper.js");
/* harmony import */
var _admin_services_generalSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ../../../admin/services/generalSettings */ "./assets/src/admin/services/generalSettings.js");
/* harmony import */
var _admin_libs_bookingLib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ../../../admin/libs/bookingLib */ "./assets/src/admin/libs/bookingLib.js");

function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}

function _regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    _regeneratorRuntime = function _regeneratorRuntime() {
        return exports;
    };
    var exports = {},
        Op = Object.prototype,
        hasOwn = Op.hasOwnProperty,
        defineProperty = Object.defineProperty || function(obj, key, desc) {
            obj[key] = desc.value;
        },
        $Symbol = "function" == typeof Symbol ? Symbol : {},
        iteratorSymbol = $Symbol.iterator || "@@iterator",
        asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
        toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
        return Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), obj[key];
    }
    try {
        define({}, "");
    } catch (err) {
        define = function define(obj, key, value) {
            return obj[key] = value;
        };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
            generator = Object.create(protoGenerator.prototype),
            context = new Context(tryLocsList || []);
        return defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        }), generator;
    }

    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf,
        NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

    function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }

    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
                var result = record.arg,
                    value = result.value;
                return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                }) : PromiseImpl.resolve(value).then(function(unwrapped) {
                    result.value = unwrapped, resolve(result);
                }, function(error) {
                    return invoke("throw", error, resolve, reject);
                });
            }
            reject(record.arg);
        }
        var previousPromise;
        defineProperty(this, "_invoke", {
            value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new PromiseImpl(function(resolve, reject) {
                        invoke(method, arg, resolve, reject);
                    });
                }
                return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }

    function makeInvokeMethod(innerFn, self, context) {
        var state = "suspendedStart";
        return function(method, arg) {
            if ("executing" === state) throw new Error("Generator is already running");
            if ("completed" === state) {
                if ("throw" === method) throw arg;
                return doneResult();
            }
            for (context.method = method, context.arg = arg;;) {
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if ("next" === context.method) context.sent = context._sent = context.arg;
                else if ("throw" === context.method) {
                    if ("suspendedStart" === state) throw state = "completed", context.arg;
                    context.dispatchException(context.arg);
                } else "return" === context.method && context.abrupt("return", context.arg);
                state = "executing";
                var record = tryCatch(innerFn, self, context);
                if ("normal" === record.type) {
                    if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                }
                "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
            }
        };
    }

    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (undefined === method) {
            if (context.delegate = null, "throw" === context.method) {
                if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
                context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
        var info = record.arg;
        return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }

    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal", delete record.arg, entry.completion = record;
    }

    function Context(tryLocsList) {
        this.tryEntries = [{
            tryLoc: "root"
        }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }

    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1,
                    next = function next() {
                        for (; ++i < iterable.length;) {
                            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                        }
                        return next.value = undefined, next.done = !0, next;
                    };
                return next.next = next;
            }
        }
        return {
            next: doneResult
        };
    }

    function doneResult() {
        return {
            value: undefined,
            done: !0
        };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
        var ctor = "function" == typeof genFun && genFun.constructor;
        return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function(genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function(arg) {
        return {
            __await: arg
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
        return this;
    }), define(Gp, "toString", function() {
        return "[object Generator]";
    }), exports.keys = function(val) {
        var object = Object(val),
            keys = [];
        for (var key in object) {
            keys.push(key);
        }
        return keys.reverse(),
            function next() {
                for (; keys.length;) {
                    var key = keys.pop();
                    if (key in object) return next.value = key, next.done = !1, next;
                }
                return next.done = !0, next;
            };
    }, exports.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
                for (var name in this) {
                    "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
                }
        },
        stop: function stop() {
            this.done = !0;
            var rootRecord = this.tryEntries[0].completion;
            if ("throw" === rootRecord.type) throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(exception) {
            if (this.done) throw exception;
            var context = this;

            function handle(loc, caught) {
                return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i],
                    record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc"),
                        hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    } else {
                        if (!hasFinally) throw new Error("try statement without catch or finally");
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
            var record = finallyEntry ? finallyEntry.completion : {};
            return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
        },
        complete: function complete(record, afterLoc) {
            if ("throw" === record.type) throw record.arg;
            return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
            }
        },
        "catch": function _catch(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ("throw" === record.type) {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            return this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
        }
    }, exports;
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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}

function _asyncToGenerator(fn) {
    return function() {
        var self = this,
            args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
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












var _window$antd = window.antd,
    Row = _window$antd.Row,
    Col = _window$antd.Col;
var useEffect = window.React.useEffect;
var __ = wp.i18n.__;

function BookingSchedule(_ref) {
    var isEditing = _ref.isEditing;
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_3__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        meetingReducer = _useStateValue2[0].meeting,
        dispatch = _useStateValue2[1];
    var dataControls = meetingReducer.dataControls,
        loading = meetingReducer.loading,
        meeting = meetingReducer.meeting,
        selectedStaff = meetingReducer.selectedStaff,
        client_timezone = meetingReducer.client_timezone;

    // Get the query parameters from the current URL
    var urlParams = new URLSearchParams(window.location.search);

    // Get the value of a specific query parameter
    var id = urlParams.get("id");

    /**
     * Handler to get single meeting data and set it to the context.
     * @param {*} param0 Object of data controls.
     * @returns false is dataControls is not set.
     */
    var getSingleMeetingData = /*#__PURE__*/ function() {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(_ref2) {
            var _meeting, _meeting3, _meeting4, _meeting4$price, _meeting5;
            var dataControls, _yield$getSingleMeeti, data, _yield$paymentOptions, _paymentOptions, generalSettingsRes, meeting, _schedules, unavailableDays, unavailableDayNumber, ticketPrice;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            dataControls = _ref2.dataControls;
                            if (dataControls !== null && dataControls !== void 0 && dataControls.id) {
                                _context.next = 4;
                                break;
                            }
                            dispatch({
                                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_2__.actions.SET_LOADING,
                                payload: false
                            });
                            return _context.abrupt("return", false);
                        case 4:
                            _context.next = 6;
                            return (0, _admin_services_meetings__WEBPACK_IMPORTED_MODULE_0__.getSingleMeeting)({
                                method: "GET"
                            }, dataControls === null || dataControls === void 0 ? void 0 : dataControls.id);
                        case 6:
                            _yield$getSingleMeeti = _context.sent;
                            data = _yield$getSingleMeeti.data;
                            _context.next = 10;
                            return (0, _admin_services_generalSettings__WEBPACK_IMPORTED_MODULE_10__.paymentOptions)({
                                method: "GET"
                            });
                        case 10:
                            _yield$paymentOptions = _context.sent;
                            _paymentOptions = _yield$paymentOptions.data;
                            _context.next = 14;
                            return (0, _admin_services_generalSettings__WEBPACK_IMPORTED_MODULE_10__.generalSettings)({
                                method: "GET"
                            });
                        case 14:
                            generalSettingsRes = _context.sent;
                            meeting = data === null || data === void 0 ? void 0 : data.data;
                            _schedules = {};
                            Object.keys((_meeting = meeting) === null || _meeting === void 0 ? void 0 : _meeting.schedule).map(function(item) {
                                var _meeting2;
                                _schedules[item] = (0, _helper_availabilityModel__WEBPACK_IMPORTED_MODULE_7__.convertSchedulesForUi)((_meeting2 = meeting) === null || _meeting2 === void 0 ? void 0 : _meeting2.schedule[item]);
                            });
                            meeting = _objectSpread(_objectSpread({}, meeting), {}, {
                                schedule: _schedules
                            });
                            unavailableDays = (0, _utils_helper__WEBPACK_IMPORTED_MODULE_9__.getDaysThatNotAvailable)(_schedules[selectedStaff ? selectedStaff.id : (_meeting3 = meeting) === null || _meeting3 === void 0 ? void 0 : _meeting3.staff[0].id]);
                            unavailableDayNumber = (0, _utils_helper__WEBPACK_IMPORTED_MODULE_9__.getDayNumber)({
                                days: unavailableDays
                            });
                            ticketPrice = (_meeting4 = meeting) === null || _meeting4 === void 0 ? void 0 : (_meeting4$price = _meeting4.price) === null || _meeting4$price === void 0 ? void 0 : _meeting4$price.reduce(function(acc, el) {
                                acc[el.ticket_name || "default"] = +el.ticket_price || 0;
                                return acc;
                            }, {});
                            dispatch({
                                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_2__.actions.SET_SINGLE_MEETING_DATA,
                                payload: {
                                    meeting: meeting,
                                    ticketPrice: ticketPrice,
                                    selectedStaff: selectedStaff ? selectedStaff : (_meeting5 = meeting) === null || _meeting5 === void 0 ? void 0 : _meeting5.staff[0],
                                    unavailableDayNumber: unavailableDayNumber,
                                    unavailableDays: unavailableDays,
                                    loading: false,
                                    paymentOptions: _paymentOptions === null || _paymentOptions === void 0 ? void 0 : _paymentOptions.data,
                                    generalSettings: generalSettingsRes === null || generalSettingsRes === void 0 ? void 0 : generalSettingsRes.data
                                }
                            });
                        case 23:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee);
        }));
        return function getSingleMeetingData(_x) {
            return _ref3.apply(this, arguments);
        };
    }();
    var getSlotsOfAMeeting = /*#__PURE__*/ function() {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(_ref4) {
            var dataControls, staffId, startDate, endDate, timeZone, _yield$getSlots, data;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            dataControls = _ref4.dataControls, staffId = _ref4.staffId, startDate = _ref4.startDate, endDate = _ref4.endDate, timeZone = _ref4.timeZone;
                            _context2.next = 3;
                            return (0, _admin_services_meetings__WEBPACK_IMPORTED_MODULE_0__.getSlots)({
                                method: "GET"
                            }, {
                                staffId: staffId,
                                meetingId: dataControls === null || dataControls === void 0 ? void 0 : dataControls.id,
                                startDate: dayjs__WEBPACK_IMPORTED_MODULE_8___default()(startDate).format("YYYY-MM-DD"),
                                endDate: dayjs__WEBPACK_IMPORTED_MODULE_8___default()(endDate).format("YYYY-MM-DD"),
                                timeZone: timeZone
                            });
                        case 3:
                            _yield$getSlots = _context2.sent;
                            data = _yield$getSlots.data;
                            dispatch({
                                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_2__.actions.SET_MEETING_SLOTS,
                                payload: {
                                    slots: data === null || data === void 0 ? void 0 : data.data
                                }
                            });
                        case 6:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2);
        }));
        return function getSlotsOfAMeeting(_x2) {
            return _ref5.apply(this, arguments);
        };
    }();
    useEffect(function() {
        dispatch({
            type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_2__.actions.SET_LOADING,
            payload: true
        });
        getSingleMeetingData({
            dataControls: dataControls
        });
        return function() {
            dispatch({
                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_2__.actions.SET_LOADING,
                payload: false
            });
        };
    }, [dataControls]);
    useEffect(function() {
        if (meeting && selectedStaff) {
            var _meeting$staff$;
            var unavailableDays = (0, _utils_helper__WEBPACK_IMPORTED_MODULE_9__.getDaysThatNotAvailable)(meeting.schedule[selectedStaff ? selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.id : meeting === null || meeting === void 0 ? void 0 : (_meeting$staff$ = meeting.staff[0]) === null || _meeting$staff$ === void 0 ? void 0 : _meeting$staff$.id]);
            var unavailableDayNumber = (0, _utils_helper__WEBPACK_IMPORTED_MODULE_9__.getDayNumber)({
                days: unavailableDays
            });
            dispatch({
                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_2__.actions.SET_SINGLE_MEETING_DATA,
                payload: {
                    unavailableDayNumber: unavailableDayNumber,
                    unavailableDays: unavailableDays
                }
            });
        }
    }, [selectedStaff, meeting]);
    useEffect(function() {
        var _meeting$availability, _meeting$availability2;
        if (selectedStaff !== null && selectedStaff !== void 0 && selectedStaff.id && meeting !== null && meeting !== void 0 && (_meeting$availability = meeting.availability) !== null && _meeting$availability !== void 0 && _meeting$availability.start && meeting !== null && meeting !== void 0 && (_meeting$availability2 = meeting.availability) !== null && _meeting$availability2 !== void 0 && _meeting$availability2.end) {
            var _meeting$availability3, _meeting$availability4;
            getSlotsOfAMeeting({
                dataControls: dataControls,
                staffId: selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.id,
                startDate: meeting === null || meeting === void 0 ? void 0 : (_meeting$availability3 = meeting.availability) === null || _meeting$availability3 === void 0 ? void 0 : _meeting$availability3.start,
                endDate: meeting === null || meeting === void 0 ? void 0 : (_meeting$availability4 = meeting.availability) === null || _meeting$availability4 === void 0 ? void 0 : _meeting$availability4.end,
                timeZone: client_timezone !== null && client_timezone !== void 0 ? client_timezone : Intl.DateTimeFormat().resolvedOptions().timeZone
            });
        }
    }, [meeting, selectedStaff, client_timezone]);
    if (!dataControls || loading) {
        return /*#__PURE__*/ React.createElement(_common_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"], {
            tip: __("Loading...", "timetics"),
            type: "info",
            size: "large",
            wrapperClassName: "tt-spinner-wrapper"
        });
    }
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        stepTitle: "Step 1",
        componentTitle: __("Choose a time that works for you.", "timetics")
    }), /*#__PURE__*/ React.createElement(Row, {
        gutter: [24, 24]
    }, /*#__PURE__*/ React.createElement(Col, {
        xs: 24,
        sm: 24,
        md: 8
    }, /*#__PURE__*/ React.createElement(_MeetingDetails__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/ React.createElement(Col, {
        xs: 24,
        sm: 24,
        md: 16
    }, /*#__PURE__*/ React.createElement(_BookingDate__WEBPACK_IMPORTED_MODULE_5__["default"], {
        isEditing: isEditing
    }))));
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (BookingSchedule);

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/BookingSchedule.js?