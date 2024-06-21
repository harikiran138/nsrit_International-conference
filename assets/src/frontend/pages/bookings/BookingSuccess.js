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
var _admin_libs_bookingLib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../admin/libs/bookingLib */ "./assets/src/admin/libs/bookingLib.js");
/* harmony import */
var _admin_services_bookings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../admin/services/bookings */ "./assets/src/admin/services/bookings.js");
/* harmony import */
var _common_icons_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../common/icons/Icons */ "./assets/src/common/icons/Icons.js");
/* harmony import */
var _helper_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../../helper/helpers */ "./assets/src/helper/helpers.js");
/* harmony import */
var _actionCreators_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../actionCreators/actions */ "./assets/src/frontend/actionCreators/actions.js");
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../context/provider */ "./assets/src/frontend/context/provider.js");
/* harmony import */
var _Sidebar_RecurringList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./Sidebar/RecurringList */ "./assets/src/frontend/pages/bookings/Sidebar/RecurringList.js");

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
    Button = _window$antd.Button,
    Result = _window$antd.Result,
    Typography = _window$antd.Typography,
    Divider = _window$antd.Divider,
    Space = _window$antd.Space;
var Text = Typography.Text,
    Link = Typography.Link;








var __ = wp.i18n.__;

function BookingSuccess() {
    var _window, _window$timetics, _window2, _window2$timetics, _window3, _window3$timetics, _window4, _window4$timetics, _wp, _wp$hooks;
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_6__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        _useStateValue2$ = _useStateValue2[0],
        meetingReducer = _useStateValue2$.meeting,
        bookingReducer = _useStateValue2$.booking,
        dispatch = _useStateValue2[1];
    var meeting = meetingReducer.meeting,
        selectedDate = meetingReducer.selectedDate,
        bookingTime = meetingReducer.bookingTime,
        contactInfo = meetingReducer.contactInfo,
        selectedStaff = meetingReducer.selectedStaff,
        response = meetingReducer.response,
        payment_method = meetingReducer.payment_method,
        allRecurringDates = meetingReducer.allRecurringDates;
    var date = bookingReducer.date,
        start_time = bookingReducer.start_time;
    var bookingStatusUpdate = /*#__PURE__*/ function() {
        var _ref = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(bookingData) {
            var _bookingData$appointm, _res$data, _res$data$data;
            var bookingId, _bookingData$customer, email, first_name, full_name, res;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            bookingId = bookingData === null || bookingData === void 0 ? void 0 : bookingData.id;
                            _bookingData$customer = bookingData === null || bookingData === void 0 ? void 0 : bookingData.customer, email = _bookingData$customer.email, first_name = _bookingData$customer.first_name, full_name = _bookingData$customer.full_name;
                            _context.next = 4;
                            return (0, _admin_services_bookings__WEBPACK_IMPORTED_MODULE_2__.updateBooking)({
                                method: "PUT",
                                data: _objectSpread(_objectSpread({}, bookingData), {}, {
                                    appointment: bookingData === null || bookingData === void 0 ? void 0 : (_bookingData$appointm = bookingData.appointment) === null || _bookingData$appointm === void 0 ? void 0 : _bookingData$appointm.id,
                                    email: email,
                                    first_name: first_name,
                                    full_name: full_name,
                                    status: "cancel",
                                    payment_method: payment_method !== null && payment_method !== void 0 ? payment_method : "cash"
                                }),
                                params: {
                                    stopToast: true
                                }
                            }, bookingId);
                        case 4:
                            res = _context.sent;
                            if ((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.status) == "cancel") {
                                dispatch({
                                    type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_5__.actions.SET_STATE,
                                    payload: {
                                        paymentStatus: {
                                            status: "canceled"
                                        },
                                        step: 1
                                    }
                                });
                            }
                        case 6:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee);
        }));
        return function bookingStatusUpdate(_x) {
            return _ref.apply(this, arguments);
        };
    }();
    var handleReschudle = function handleReschudle(data) {
        var bookingId = data === null || data === void 0 ? void 0 : data.id;
        var params = new URLSearchParams();

        // Set the "id" query parameter
        params.set("id", bookingId);

        // Get the current URL or create a new URL
        var url = new URL(window.location.href);

        // Set the query parameters in the URL
        url.search = params.toString();

        // Update the browser URL with the modified URL
        window.history.replaceState({}, "", url.toString());
        dispatch({
            type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_5__.actions.CLEAR_BOOKING_RELATED_DATA,
            payload: {}
        });
    };
    return /*#__PURE__*/ React.createElement("div", {
        className: "tt-meeting-booking-result-wrapper toplevel_page_timetics"
    }, /*#__PURE__*/ React.createElement(Result, {
        status: "success",
        title: __("This meeting is scheduled", "timetics"),
        subTitle: __("We sent an email to you and the other attendees a calendar invitation with all the details.", "timetics"),
        extra: /*#__PURE__*/ React.createElement("div", {
            className: "tt-meeting-booking-info-wrapper"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "tt-meeting-booking-info"
        }, /*#__PURE__*/ React.createElement(Divider, null), /*#__PURE__*/ React.createElement("div", {
            className: "tt-single-meeting-booking-info tt-mb-20"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "tt-meeting-booking-WQ"
        }, /*#__PURE__*/ React.createElement(Text, null, " ", __("What", "timetics"))), /*#__PURE__*/ React.createElement("div", {
            className: "tt-meeting-booking-details"
        }, /*#__PURE__*/ React.createElement(Text, null, meeting === null || meeting === void 0 ? void 0 : meeting.name))), /*#__PURE__*/ React.createElement("div", {
            className: "tt-single-meeting-booking-info tt-mb-20"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "tt-meeting-booking-WQ"
        }, /*#__PURE__*/ React.createElement(Text, null, " ", __("When", "timetics"))), /*#__PURE__*/ React.createElement("div", {
            className: "tt-meeting-booking-details"
        }, /*#__PURE__*/ React.createElement(Space, {
            direction: "vertical"
        }, id ? /*#__PURE__*/ React.createElement(Text, {
            style: {
                textDecoration: "line-through"
            }
        }, (0, _helper_helpers__WEBPACK_IMPORTED_MODULE_4__.convertWordpressDateFormatToDayjs)({
            date: date,
            format: (_window = window) === null || _window === void 0 ? void 0 : (_window$timetics = _window.timetics) === null || _window$timetics === void 0 ? void 0 : _window$timetics.date_format
        }), " , ", " ", (0, _helper_helpers__WEBPACK_IMPORTED_MODULE_4__.convertWordpressTimeFormatToDayjs)({
            time: start_time,
            format: (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$timetics = _window2.timetics) === null || _window2$timetics === void 0 ? void 0 : _window2$timetics.time_format
        })) : null, allRecurringDates !== null && allRecurringDates !== void 0 && allRecurringDates.length ? /*#__PURE__*/ React.createElement(_Sidebar_RecurringList__WEBPACK_IMPORTED_MODULE_7__["default"], null) : /*#__PURE__*/ React.createElement(Text, null, (0, _helper_helpers__WEBPACK_IMPORTED_MODULE_4__.convertWordpressDateFormatToDayjs)({
            date: selectedDate,
            format: (_window3 = window) === null || _window3 === void 0 ? void 0 : (_window3$timetics = _window3.timetics) === null || _window3$timetics === void 0 ? void 0 : _window3$timetics.date_format
        }), " , ", " ", (0, _helper_helpers__WEBPACK_IMPORTED_MODULE_4__.convertWordpressTimeFormatToDayjs)({
            time: bookingTime,
            format: (_window4 = window) === null || _window4 === void 0 ? void 0 : (_window4$timetics = _window4.timetics) === null || _window4$timetics === void 0 ? void 0 : _window4$timetics.time_format
        }))))), /*#__PURE__*/ React.createElement("div", {
            className: "tt-single-meeting-booking-info tt-mb-20"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "tt-meeting-booking-WQ"
        }, /*#__PURE__*/ React.createElement(Text, null, " ", __("With", "timetics"))), /*#__PURE__*/ React.createElement("div", {
            className: "tt-meeting-booking-details"
        }, /*#__PURE__*/ React.createElement(Text, {
            strong: true
        }, selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.full_name))), /*#__PURE__*/ React.createElement("div", {
            className: "tt-single-meeting-booking-info tt-mb-20"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "tt-meeting-booking-WQ"
        }, /*#__PURE__*/ React.createElement(Text, null, " ", __("Where", "timetics"))), /*#__PURE__*/ React.createElement("div", {
            className: "tt-meeting-booking-details"
        }, (contactInfo === null || contactInfo === void 0 ? void 0 : contactInfo.location_type) == "google-meet" ? /*#__PURE__*/ React.createElement(Space, {
            wrap: true,
            style: {
                lineHeight: "1"
            }
        }, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_3__.GoogleMeet, null), __("Google Meet", "timetics")) : (contactInfo === null || contactInfo === void 0 ? void 0 : contactInfo.location_type) == "phone-call" ? /*#__PURE__*/ React.createElement(Space, {
            wrap: true
        }, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_3__.Phone, null), contactInfo === null || contactInfo === void 0 ? void 0 : contactInfo.location) : (contactInfo === null || contactInfo === void 0 ? void 0 : contactInfo.location_type) == "zoom" ? /*#__PURE__*/ React.createElement(Space, {
            wrap: true
        }, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_3__.Zoom, null), contactInfo === null || contactInfo === void 0 ? void 0 : contactInfo.location) : /*#__PURE__*/ React.createElement(Space, {
            wrap: true
        }, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_3__.Location, null), contactInfo === null || contactInfo === void 0 ? void 0 : contactInfo.location))), /*#__PURE__*/ React.createElement(Divider, null), meeting !== null && meeting !== void 0 && meeting.recurring ? null : /*#__PURE__*/ React.createElement("p", null, __("Need to make a change? ", "timetics"), /*#__PURE__*/ React.createElement("span", {
            className: "tt-bookings-upadate-text",
            onClick: function onClick() {
                handleReschudle(response === null || response === void 0 ? void 0 : response.data);
            }
        }, __("Reschedule", "timetics")), __(" or ", "timetics"), /*#__PURE__*/ React.createElement("span", {
            className: "tt-bookings-upadate-text",
            onClick: function onClick() {
                bookingStatusUpdate(response === null || response === void 0 ? void 0 : response.data);
            }
        }, __("Cancel ", "timetics"))), /*#__PURE__*/ React.createElement(Divider, {
            style: {
                marginTop: "0",
                marginBottom: "20px"
            }
        }), window.timeticsPro && ((_wp = wp) === null || _wp === void 0 ? void 0 : (_wp$hooks = _wp.hooks) === null || _wp$hooks === void 0 ? void 0 : _wp$hooks.applyFilters("calendarAdd", response))))
    }));
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (BookingSuccess);

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/BookingSuccess.js?