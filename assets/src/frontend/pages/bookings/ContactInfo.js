__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony import */
var _common_TextAreaInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../common/TextAreaInput */ "./assets/src/common/TextAreaInput.js");
/* harmony import */
var _common_TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../common/TextInput */ "./assets/src/common/TextInput.js");
/* harmony import */
var _common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../common/icons/Icons */ "./assets/src/common/icons/Icons.js");
/* harmony import */
var _actionCreators_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../actionCreators/actions */ "./assets/src/frontend/actionCreators/actions.js");
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../context/provider */ "./assets/src/frontend/context/provider.js");
/* harmony import */
var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./Header */ "./assets/src/frontend/pages/bookings/Header.js");
/* harmony import */
var _admin_libs_bookingLib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../../admin/libs/bookingLib */ "./assets/src/admin/libs/bookingLib.js");
/* harmony import */
var _common_CountryPhoneInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../../common/CountryPhoneInput */ "./assets/src/common/CountryPhoneInput.js");
/* harmony import */
var _common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../../common/constant */ "./assets/src/common/constant.js");
/* harmony import */
var _actionCreators_errorAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../../actionCreators/errorAction */ "./assets/src/frontend/actionCreators/errorAction.js");
/* harmony import */
var _utils_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ../../utils/helper */ "./assets/src/frontend/utils/helper.js");
/* harmony import */
var _SidebarInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./SidebarInfo */ "./assets/src/frontend/pages/bookings/SidebarInfo.js");

function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}

function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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






var useState = window.React.useState;
var __ = wp.i18n.__;
var _window$antd = window.antd,
    Button = _window$antd.Button,
    Typography = _window$antd.Typography,
    Space = _window$antd.Space,
    List = _window$antd.List,
    Row = _window$antd.Row,
    Col = _window$antd.Col,
    Form = _window$antd.Form,
    Radio = _window$antd.Radio,
    Select = _window$antd.Select,
    Alert = _window$antd.Alert;
var Text = Typography.Text,
    Title = Typography.Title;






function ContactInfo(_ref) {
    var _meeting$locations3, _meeting$locations4, _generalSettings$cust, _meeting$custom_field;
    var isEditing = _ref.isEditing;
    var _useState = useState(""),
        _useState2 = _slicedToArray(_useState, 2),
        phone = _useState2[0],
        setPhone = _useState2[1];
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_4__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        _useStateValue2$ = _useStateValue2[0],
        meetingReducer = _useStateValue2$.meeting,
        bookingReducer = _useStateValue2$.booking,
        dispatch = _useStateValue2[1];
    var _useState3 = useState(null),
        _useState4 = _slicedToArray(_useState3, 2),
        errorMessage = _useState4[0],
        setErrorMessage = _useState4[1];
    var meeting = meetingReducer.meeting,
        selectedDate = meetingReducer.selectedDate,
        bookingTime = meetingReducer.bookingTime,
        selectedDay = meetingReducer.selectedDay,
        contactInfo = meetingReducer.contactInfo,
        selectedStaff = meetingReducer.selectedStaff,
        loading = meetingReducer.loading,
        paymentOptions = meetingReducer.paymentOptions,
        _meetingReducer$selec = meetingReducer.selectedSeats,
        selectedSeats = _meetingReducer$selec === void 0 ? [] : _meetingReducer$selec,
        generalSettings = meetingReducer.generalSettings,
        ticketPrice = meetingReducer.ticketPrice,
        client_timezone = meetingReducer.client_timezone,
        allRecurringDates = meetingReducer.allRecurringDates,
        errors = meetingReducer.errors;
    var contact = bookingReducer.contact;
    /**
     * Calculate metting total price
     */
    var mettingPrice = 0;
    if ((meeting === null || meeting === void 0 ? void 0 : meeting.type) == "seat") {
        mettingPrice = selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.reduce(function(accumulator, currentValue) {
            return accumulator + (ticketPrice === null || ticketPrice === void 0 ? void 0 : ticketPrice[currentValue === null || currentValue === void 0 ? void 0 : currentValue.ticketType]);
        }, 0);
    } else {
        var _meeting$price$;
        mettingPrice = (meeting === null || meeting === void 0 ? void 0 : (_meeting$price$ = meeting.price[0]) === null || _meeting$price$ === void 0 ? void 0 : _meeting$price$.ticket_price) || 0;
    }
    var stepValue = (meeting === null || meeting === void 0 ? void 0 : meeting.type) == "seat" ? 2 : 1;
    /**
     *
     * @param {Object} values contains contact info of a user who wants to book a meeting
     */
    var wcPayment = (0, _utils_helper__WEBPACK_IMPORTED_MODULE_10__.isWCPayment)(paymentOptions);
    var onRescheduleContactForm = /*#__PURE__*/ function() {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(values) {
            var _meeting$locations, _res$data;
            var location, total, _meeting$price$2, res;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            setErrorMessage(null);
                            dispatch({
                                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_3__.actions.SET_STATE,
                                payload: {
                                    loading: true
                                }
                            });
                            if ((meeting === null || meeting === void 0 ? void 0 : (_meeting$locations = meeting.locations) === null || _meeting$locations === void 0 ? void 0 : _meeting$locations.length) > 1) {
                                location = Object.keys(JSON.parse(values.location_type)).length < 2 ? {
                                    location: "Google meet",
                                    location_type: "google-meet"
                                } : JSON.parse(values.location_type);
                            } else {
                                location = meeting === null || meeting === void 0 ? void 0 : meeting.locations[0];
                            }
                            total = 0;
                            if ((meeting === null || meeting === void 0 ? void 0 : meeting.type) == "seat") {
                                selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.map(function(item) {
                                    total += +(item === null || item === void 0 ? void 0 : item.price);
                                });
                            } else {
                                total = (meeting === null || meeting === void 0 ? void 0 : (_meeting$price$2 = meeting.price[0]) === null || _meeting$price$2 === void 0 ? void 0 : _meeting$price$2.ticket_price) || 0;
                            }
                            _context.next = 7;
                            return (0, _admin_libs_bookingLib__WEBPACK_IMPORTED_MODULE_6__.updateBookingApi)({
                                id: isEditing,
                                values: _objectSpread(_objectSpread({}, values), {}, {
                                    timezone: client_timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
                                    appointment: meeting === null || meeting === void 0 ? void 0 : meeting.id,
                                    reschedule: true,
                                    start_date: selectedDate,
                                    date: selectedDate,
                                    end_date: selectedDate,
                                    start_time: bookingTime,
                                    end_time: bookingTime,
                                    staff: selectedStaff
                                }, location)
                            });
                        case 7:
                            res = _context.sent;
                            if ((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.status_code) === 200) {
                                dispatch({
                                    type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_3__.actions.SET_STATE,
                                    payload: {
                                        contactInfo: _objectSpread({}, location),
                                        response: res === null || res === void 0 ? void 0 : res.data,
                                        step: _common_constant__WEBPACK_IMPORTED_MODULE_8__.FRONTEND_STEPS.bookingSchedule,
                                        paymentStatus: {
                                            status: "succeeded"
                                        }
                                    }
                                });
                            }
                        case 9:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee);
        }));
        return function onRescheduleContactForm(_x) {
            return _ref2.apply(this, arguments);
        };
    }();
    var onFinishContactForm = /*#__PURE__*/ function() {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(values) {
            var _meeting$locations2, _res$data2;
            var location, payload, res, noPayment, isLocalPaymentActive, isFree, step;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            setErrorMessage(null);
                            dispatch({
                                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_3__.actions.SET_STATE,
                                payload: {
                                    loading: true
                                }
                            });
                            if ((meeting === null || meeting === void 0 ? void 0 : (_meeting$locations2 = meeting.locations) === null || _meeting$locations2 === void 0 ? void 0 : _meeting$locations2.length) > 1) {
                                location = Object.keys(JSON.parse(values.location_type)).length < 2 ? {
                                    location: "Google meet",
                                    location_type: "google-meet"
                                } : JSON.parse(values.location_type);
                            } else {
                                location = meeting === null || meeting === void 0 ? void 0 : meeting.locations[0];
                            }
                            payload = wcPayment ? _objectSpread(_objectSpread(_objectSpread({}, values), {}, {
                                timezone: client_timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
                                staff: selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.id,
                                appointment: meeting === null || meeting === void 0 ? void 0 : meeting.id,
                                date: selectedDate,
                                start_date: selectedDate,
                                start_time: bookingTime,
                                end_time: bookingTime,
                                attendees: values.attendees,
                                seats: selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.map(function(item) {
                                    return item === null || item === void 0 ? void 0 : item.id;
                                }),
                                payment_method: "woocommerce",
                                order_total: mettingPrice
                            }, location), {}, {
                                recurring_dates: meeting !== null && meeting !== void 0 && meeting.recurring ? allRecurringDates : undefined
                            }) : _objectSpread(_objectSpread(_objectSpread({}, values), {}, {
                                timezone: client_timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
                                staff: selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.id,
                                appointment: meeting === null || meeting === void 0 ? void 0 : meeting.id,
                                date: selectedDate,
                                start_date: selectedDate,
                                start_time: bookingTime,
                                end_time: bookingTime,
                                attendees: values.attendees,
                                seats: selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.map(function(item) {
                                    return item === null || item === void 0 ? void 0 : item.id;
                                }),
                                order_total: mettingPrice
                            }, location), {}, {
                                recurring_dates: meeting !== null && meeting !== void 0 && meeting.recurring ? allRecurringDates : undefined
                            });
                            _context2.next = 6;
                            return (0, _admin_libs_bookingLib__WEBPACK_IMPORTED_MODULE_6__.createBookingApi)({
                                values: payload,
                                stopToast: true
                            });
                        case 6:
                            res = _context2.sent;
                            if ((res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.status_code) === 200) {
                                setErrorMessage(res.message);
                                // if noPayment is true then create booking and then redirect to success page
                                noPayment = (0, _utils_helper__WEBPACK_IMPORTED_MODULE_10__.isNoPayment)(paymentOptions); //if isLocalPayment is true then create booking and then redirect to success page
                                isLocalPaymentActive = (0, _utils_helper__WEBPACK_IMPORTED_MODULE_10__.isLocalPayment)(paymentOptions);
                                isFree = (0, _utils_helper__WEBPACK_IMPORTED_MODULE_10__.isFreeMeeting)(mettingPrice);
                                step = (0, _utils_helper__WEBPACK_IMPORTED_MODULE_10__.getStepNo)({
                                    isFree: isFree,
                                    noPayment: noPayment,
                                    isLocalPaymentActive: isLocalPaymentActive,
                                    selectedPaymentMethod: values.payment_method,
                                    meetingType: meeting === null || meeting === void 0 ? void 0 : meeting.type,
                                    wcPayment: wcPayment
                                }); //if meeting is free then create booking and then redirect to success page
                                if (wcPayment && !isFree) {
                                    window.location.href = generalSettings === null || generalSettings === void 0 ? void 0 : generalSettings.wc_checkout_url;
                                }
                                dispatch({
                                    type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_3__.actions.SET_STATE,
                                    payload: {
                                        contactInfo: payload,
                                        response: res === null || res === void 0 ? void 0 : res.data,
                                        step: step,
                                        loading: false,
                                        payment_method: values.payment_method,
                                        selectedSeats: [],
                                        selectedSeat: [],
                                        totalOrderPrice: mettingPrice
                                    }
                                });
                                if (step == 1) {
                                    // here step is 1 means that meeting is booked and payment is done, redirect to success page.
                                    dispatch({
                                        type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_3__.actions.SET_STATE,
                                        payload: {
                                            paymentStatus: {
                                                status: "succeeded"
                                            }
                                        }
                                    });
                                }
                            }
                        case 8:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2);
        }));
        return function onFinishContactForm(_x2) {
            return _ref3.apply(this, arguments);
        };
    }();

    // if (loading) {
    //     return (
    //         <Spinner
    //             tip={__("Loading...", "timetics")}
    //             type={"info"}
    //             size={"large"}
    //             wrapperClassName={"tt-spinner-wrapper"}
    //         />
    //     );
    // }

    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        stepTitle: "Step 2",
        componentTitle: __("Give your information", "timetics")
    }), /*#__PURE__*/ React.createElement(Row, {
        gutter: [24, 24]
    }, /*#__PURE__*/ React.createElement(Col, {
        xs: 24,
        sm: 24,
        md: 8,
        lg: 8
    }, /*#__PURE__*/ React.createElement("div", {
        className: "tt-form-left-sidebar"
    }, /*#__PURE__*/ React.createElement(Title, {
        className: "tt-meeting-name tt-mb-10",
        level: 3
    }, meeting === null || meeting === void 0 ? void 0 : meeting.name), /*#__PURE__*/ React.createElement("div", {
        className: "selected-author tt-mb-10"
    }, /*#__PURE__*/ React.createElement(Text, null, __("with", "timetics")), /*#__PURE__*/ React.createElement(Text, {
        strong: true
    }, " ", selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.full_name)), /*#__PURE__*/ React.createElement(_SidebarInfo__WEBPACK_IMPORTED_MODULE_11__["default"], null))), /*#__PURE__*/ React.createElement(Col, {
        xs: 24,
        sm: 24,
        md: 16,
        lg: 16
    }, /*#__PURE__*/ React.createElement(Form, {
        name: "booking-contact-form",
        layout: "vertical",
        className: "tt-booking-body-wrap",
        autoComplete: "on",
        onFinish: isEditing ? onRescheduleContactForm : onFinishContactForm,
        onFinishFailed: function onFinishFailed(errors) {
            console.log(errors);
        },
        initialValues: isEditing ? _objectSpread({}, contact) : _objectSpread({}, contactInfo)
    }, /*#__PURE__*/ React.createElement(_common_TextInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: __("Name", "timetics"),
        name: "first_name",
        required: true,
        rules: [{
            required: true,
            message: __("Enter your name!", "timetics")
        }],
        type: "text",
        size: "small",
        placeholder: __("Enter your name", "timetics"),
        disabled: isEditing
    }), /*#__PURE__*/ React.createElement(_common_TextInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: __("E-mail", "timetics"),
        name: "email",
        rules: [{
            type: "email",
            message: "The input is not valid E-mail!"
        }, {
            required: true,
            message: __("Enter your e-mail!", "timetics")
        }],
        type: "email",
        size: "small",
        placeholder: __("Enter your e-mail", "timetics"),
        disabled: isEditing
    }), /*#__PURE__*/ React.createElement(_common_CountryPhoneInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: __("Phone", "timetics"),
        name: "phone",
        type: "number",
        size: "small",
        placeholder: __("Enter your phone number", "timetics"),
        disabled: isEditing
    }), (meeting === null || meeting === void 0 ? void 0 : (_meeting$locations3 = meeting.locations) === null || _meeting$locations3 === void 0 ? void 0 : _meeting$locations3.length) > 1 && /*#__PURE__*/ React.createElement(Form.Item, {
        className: "timetics-input",
        label: __("Location", "timetics"),
        required: true,
        name: "location_type",
        rules: [{
            required: true,
            message: __("Location is required!", "timetics")
        }]
    }, /*#__PURE__*/ React.createElement(Select
        // disabled={isEditing}
        , {
            placeholder: __("Enter your location", "timetics")
        }, meeting === null || meeting === void 0 ? void 0 : (_meeting$locations4 = meeting.locations) === null || _meeting$locations4 === void 0 ? void 0 : _meeting$locations4.map(function(item, index) {
            return /*#__PURE__*/ React.createElement(Select.Option, {
                key: index,
                value: JSON.stringify(item)
            }, /*#__PURE__*/ React.createElement(Space, {
                align: "center",
                className: "tt-meeting-location-type"
            }, locationIcons[item.location_type], locationMeeting[item.location_type]));
        }))), (generalSettings === null || generalSettings === void 0 ? void 0 : (_generalSettings$cust = generalSettings.custom_fields) === null || _generalSettings$cust === void 0 ? void 0 : _generalSettings$cust.length) > 0 || (meeting === null || meeting === void 0 ? void 0 : (_meeting$custom_field = meeting.custom_fields) === null || _meeting$custom_field === void 0 ? void 0 : _meeting$custom_field.length) > 0 ? wp.hooks.applyFilters("customFormFields", isEditing) : null, (selectedSeats === null || selectedSeats === void 0 ? void 0 : selectedSeats.length) > 1 ? wp.hooks.applyFilters("inviteeFields") : null, /*#__PURE__*/ React.createElement(_common_TextAreaInput__WEBPACK_IMPORTED_MODULE_0__["default"], {
        label: __("Additional notes", "timetics"),
        labelCol: 24,
        wrapperCol: 24,
        name: "description",
        placeholder: __("Please share anything that will help prepare for our meeting", "timetics"),
        autoSize: {
            minRows: 5,
            maxRows: 5
        }
    }), !(0, _utils_helper__WEBPACK_IMPORTED_MODULE_10__.isNoPayment)(paymentOptions) && !wcPayment && mettingPrice != 0 && !!isEditing == false && /*#__PURE__*/ React.createElement(Form.Item, {
        name: "payment_method",
        className: "timetics-input",
        label: __("Payment type", "timetics"),
        labelCol: 24,
        wrapperCol: 24,
        rules: [{
            required: true,
            message: __("Payment type is required!", "timetics")
        }]
    }, /*#__PURE__*/ React.createElement(Radio.Group, {
        size: "large ",
        className: "tt-payment-radio-btn"
    }, _toConsumableArray(paymentOptions).filter(function(item) {
        return !!(item !== null && item !== void 0 && item.status);
    }).map(function(item, index) {
        return /*#__PURE__*/ React.createElement(Radio.Button, {
            key: index,
            value: item.name,
            className: "tt-payment-btn"
        }, /*#__PURE__*/ React.createElement(Space, {
            align: "center"
        }, /*#__PURE__*/ React.createElement("span", {
            className: "tt-payment-radio-btn-icon"
        }, item.name == "Stripe" && /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.StripeIcon, {
            width: "16",
            height: "16"
        }), item.name == "Local Pay" && /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.MoneyIcon, null), item.name == "Paypal" && /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.PayPalIcon, {
            width: "20",
            height: "20"
        })), item.name));
    }))), /*#__PURE__*/ React.createElement(Row, {
        align: "end"
    }, /*#__PURE__*/ React.createElement(Space, {
        wrap: true
    }, /*#__PURE__*/ React.createElement(Button, {
        className: "backbtn",
        size: "large",
        htmlType: "button",
        ghost: true
            // icon={}
            ,
        onClick: function onClick() {
            (0, _actionCreators_errorAction__WEBPACK_IMPORTED_MODULE_9__.setErrorState)({
                dispatch: dispatch,
                errorsObj: errors,
                name: "recurringError",
                value: null
            });
            dispatch({
                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_3__.actions.SET_STATE,
                payload: {
                    step: meeting.type === "seat" && !isEditing ? _common_constant__WEBPACK_IMPORTED_MODULE_8__.FRONTEND_STEPS.seatMap : _common_constant__WEBPACK_IMPORTED_MODULE_8__.FRONTEND_STEPS.bookingSchedule,
                    selectedSeats: [],
                    selectedSeat: [],
                    bookingTime: meeting.type === "seat" && !isEditing ? bookingTime : null,
                    allRecurringDates: meeting.type === "seat" && !isEditing ? allRecurringDates : null
                }
            });
        }
    }, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.ArrowLeftIcon, null), __("Go back", "timetics")), isEditing ? /*#__PURE__*/ React.createElement(Button, {
        className: "submit-btn",
        type: "primary",
        size: "large",
        htmlType: "submit"
            // icon={}
            ,
        loading: loading
    }, __("Reschedule Appointment", "timetics"), /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.ArrowRightIcon2, null)) : /*#__PURE__*/ React.createElement(Button, {
        className: "submit-btn",
        type: "primary",
        size: "large",
        htmlType: "submit"
            // icon={}
            ,
        loading: loading,
        disabled: errors === null || errors === void 0 ? void 0 : errors.recurringError
    }, __("Confirm Appointment", "timetics"), /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.ArrowRightIcon2, null))))))), errorMessage ? /*#__PURE__*/ React.createElement(Alert, {
        message: "Oops!!",
        description: errorMessage,
        type: "error",
        closable: true
    }) : null);
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (ContactInfo);
var locationIcons = {
    zoom: /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.Zoom, null),
    "google-meet": /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.GoogleMeet, null),
    "phone-call": /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.Phone, {
        color: "#3161F1"
    }),
    "in-person-meeting": /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.Location, {
        color: "#3161F1"
    })
};
var locationMeeting = {
    zoom: __("Zoom", "timetics"),
    "google-meet": __("Google Meet", "timetics"),
    "phone-call": __("Phone Call", "timetics"),
    "in-person-meeting": __("In Person Meeting", "timetics")
};

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/ContactInfo.js?