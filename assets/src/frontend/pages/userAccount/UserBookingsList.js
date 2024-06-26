__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony import */
var _UserInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./UserInfo */ "./assets/src/frontend/pages/userAccount/UserInfo.js");
/* harmony import */
var _admin_services_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../admin/services/bookings */ "./assets/src/admin/services/bookings.js");
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../context/provider */ "./assets/src/frontend/context/provider.js");
/* harmony import */
var _TableHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./TableHeader */ "./assets/src/frontend/pages/userAccount/TableHeader.js");
/* harmony import */
var _admin_services_customers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../../admin/services/customers */ "./assets/src/admin/services/customers.js");

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





var _React = React,
    useState = _React.useState,
    useEffect = _React.useEffect;
var _antd = antd,
    Table = _antd.Table,
    Button = _antd.Button,
    Modal = _antd.Modal,
    Skeleton = _antd.Skeleton,
    Empty = _antd.Empty,
    Space = _antd.Space,
    Typography = _antd.Typography;
var Title = Typography.Title;
var confirm = Modal.confirm;
var __ = wp.i18n.__;

function UserBookingsList() {
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_2__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        userReducer = _useStateValue2[0].user,
        dispatch = _useStateValue2[1];
    var _useState = useState({}),
        _useState2 = _slicedToArray(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1];
    var _useState3 = useState({}),
        _useState4 = _slicedToArray(_useState3, 2),
        userData = _useState4[0],
        setUserData = _useState4[1];
    var _useState5 = useState(true),
        _useState6 = _slicedToArray(_useState5, 2),
        loading = _useState6[0],
        setLoading = _useState6[1];
    var _useState7 = useState(1),
        _useState8 = _slicedToArray(_useState7, 2),
        pageNumber = _useState8[0],
        setPageNumber = _useState8[1];
    var _useState9 = useState(20),
        _useState10 = _slicedToArray(_useState9, 2),
        perPage = _useState10[0],
        setPerPage = _useState10[1];
    var _useState11 = useState(),
        _useState12 = _slicedToArray(_useState11, 2),
        count = _useState12[0],
        setCount = _useState12[1];
    var _useState13 = useState(false),
        _useState14 = _slicedToArray(_useState13, 2),
        open = _useState14[0],
        setOpen = _useState14[1];
    var id = timetics.current_user_id;
    var _useState15 = useState([]),
        _useState16 = _slicedToArray(_useState15, 2),
        seclectedRowKey = _useState16[0],
        setSeclectedRowKey = _useState16[1];
    var _useState17 = useState([]),
        _useState18 = _slicedToArray(_useState17, 2),
        seclectedBookings = _useState18[0],
        setSeclectedBookings = _useState18[1];
    /**
     * fetch all bookings
     */
    var fetchAllBookings = /*#__PURE__*/ function() {
        var _ref = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
            var _respons$data, _res$data, _res$data$data, _res$data2, _res$data2$data;
            var res, respons;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            setLoading(true);
                            _context.next = 3;
                            return (0, _admin_services_customers__WEBPACK_IMPORTED_MODULE_4__.getSingleUserBookings)({
                                method: "GET",
                                params: {
                                    per_page: perPage,
                                    paged: pageNumber
                                }
                            }, id);
                        case 3:
                            res = _context.sent;
                            _context.next = 6;
                            return (0, _admin_services_customers__WEBPACK_IMPORTED_MODULE_4__.getSingleCustomer)({
                                method: "GET"
                            }, id);
                        case 6:
                            respons = _context.sent;
                            setUserData(respons === null || respons === void 0 ? void 0 : (_respons$data = respons.data) === null || _respons$data === void 0 ? void 0 : _respons$data.data);
                            setData(res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.items);
                            setCount(res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$data = _res$data2.data) === null || _res$data2$data === void 0 ? void 0 : _res$data2$data.total);
                            setLoading(false);
                        case 11:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee);
        }));
        return function fetchAllBookings() {
            return _ref.apply(this, arguments);
        };
    }();

    /**
     *  api call for get all booking
     */
    useEffect(function() {
        var loadData = /*#__PURE__*/ function() {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                fetchAllBookings();
                            case 1:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2);
            }));
            return function loadData() {
                return _ref2.apply(this, arguments);
            };
        }();
        loadData();
    }, [pageNumber, perPage]);
    var deleteSingleBooking = /*#__PURE__*/ function() {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(id) {
            var _res$data3;
            var res;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return (0, _admin_services_bookings__WEBPACK_IMPORTED_MODULE_1__.deleteBooking)({
                                method: "DELETE"
                            }, id);
                        case 2:
                            res = _context3.sent;
                            if ((res === null || res === void 0 ? void 0 : (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.status_code) == 200) {
                                setData(data.filter(function(item) {
                                    return item.id != id;
                                }));
                            }
                        case 4:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3);
        }));
        return function deleteSingleBooking(_x) {
            return _ref3.apply(this, arguments);
        };
    }();
    var deleteSelectedookings = /*#__PURE__*/ function() {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(id) {
            var res;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return (0, _admin_services_bookings__WEBPACK_IMPORTED_MODULE_1__.deleteAllBookings)({
                                method: "DELETE",
                                data: id
                            });
                        case 2:
                            res = _context4.sent;
                            // reload page
                            window.location.reload();
                        case 4:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4);
        }));
        return function deleteSelectedookings(_x2) {
            return _ref4.apply(this, arguments);
        };
    }();
    var updateSingleBooking = /*#__PURE__*/ function() {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(id) {
            var _singleBooking$appoin, _singleBooking$custom, _singleBooking$custom2, _singleBooking$custom3, _singleBooking$paymen;
            var singleBooking, res;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            singleBooking = data.find(function(item) {
                                return item.id == id;
                            });
                            _context5.next = 3;
                            return (0, _admin_services_bookings__WEBPACK_IMPORTED_MODULE_1__.updateBooking)({
                                method: "PUT",
                                data: {
                                    appointment: singleBooking === null || singleBooking === void 0 ? void 0 : (_singleBooking$appoin = singleBooking.appointment) === null || _singleBooking$appoin === void 0 ? void 0 : _singleBooking$appoin.id,
                                    email: singleBooking === null || singleBooking === void 0 ? void 0 : (_singleBooking$custom = singleBooking.customer) === null || _singleBooking$custom === void 0 ? void 0 : _singleBooking$custom.email,
                                    first_name: singleBooking === null || singleBooking === void 0 ? void 0 : (_singleBooking$custom2 = singleBooking.customer) === null || _singleBooking$custom2 === void 0 ? void 0 : _singleBooking$custom2.first_name,
                                    full_name: singleBooking === null || singleBooking === void 0 ? void 0 : (_singleBooking$custom3 = singleBooking.customer) === null || _singleBooking$custom3 === void 0 ? void 0 : _singleBooking$custom3.full_name,
                                    start_date: singleBooking === null || singleBooking === void 0 ? void 0 : singleBooking.start_date,
                                    start_time: singleBooking === null || singleBooking === void 0 ? void 0 : singleBooking.start_time,
                                    end_time: singleBooking === null || singleBooking === void 0 ? void 0 : singleBooking.end_time,
                                    status: "cancel",
                                    payment_method: (_singleBooking$paymen = singleBooking === null || singleBooking === void 0 ? void 0 : singleBooking.payment_method) !== null && _singleBooking$paymen !== void 0 ? _singleBooking$paymen : "cash"
                                },
                                params: {
                                    stopToast: false
                                }
                            }, id);
                        case 3:
                            res = _context5.sent;
                            //reload page
                            window.location.reload();
                        case 5:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5);
        }));
        return function updateSingleBooking(_x3) {
            return _ref5.apply(this, arguments);
        };
    }();
    var rescheduleBooking = function rescheduleBooking(id) {
        var _singleBooking$appoin2;
        var singleBooking = data.find(function(item) {
            return item.id == id;
        });
        var urlLink = singleBooking === null || singleBooking === void 0 ? void 0 : (_singleBooking$appoin2 = singleBooking.appointment) === null || _singleBooking$appoin2 === void 0 ? void 0 : _singleBooking$appoin2.permalink;
        // Create a new URL object
        var urlObj = new URL(urlLink);
        urlObj.searchParams.set("id", id);
        var updatedUrl = urlObj.toString();

        //Open a new window with the updated URL
        window.open(updatedUrl);
    };
    var showRescheduleConfirm = function showRescheduleConfirm(id) {
        confirm({
            title: __("Are you sure Reschedule this booking?", "timetics"),
            okText: __("Yes", "timetics"),
            okType: "danger",
            cancelText: __("No", "timetics"),
            wrapClassName: "toplevel_page_timetics",
            onOk: function onOk() {
                rescheduleBooking(id);
            }
        });
    };
    var showDeleteConfirm = function showDeleteConfirm(id) {
        confirm({
            title: __("Are you sure delete this booking?", "timetics"),
            okText: __("Yes", "timetics"),
            okType: "danger",
            cancelText: __("No", "timetics"),
            wrapClassName: "toplevel_page_timetics",
            onOk: function onOk() {
                deleteSingleBooking(id);
            }
        });
    };
    var showBookingUpdate = function showBookingUpdate(id) {
        confirm({
            title: __("Are you sure to update this booking?", "timetics"),
            okText: __("Yes", "timetics"),
            okType: "danger",
            cancelText: __("No", "timetics"),
            wrapClassName: "toplevel_page_timetics",
            onOk: function onOk() {
                updateSingleBooking(id);
            }
        });
    };

    // Table Header
    var _TableHeader = (0, _TableHeader__WEBPACK_IMPORTED_MODULE_3__["default"])({
            showRescheduleConfirm: showRescheduleConfirm,
            showBookingUpdate: showBookingUpdate
        }),
        columns = _TableHeader.columns,
        currentRecord = _TableHeader.currentRecord;
    var rowSelection = {
        onChange: function onChange(selectedRowKeys, selectedRows) {
            setSeclectedRowKey(selectedRowKeys);
            setSeclectedBookings(selectedRows);
        }
    };
    var hasSelected = seclectedRowKey.length > 0;
    return /*#__PURE__*/ React.createElement(React.Fragment, null, loading ? /*#__PURE__*/ React.createElement(Skeleton, null) : /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
        className: "tt-user-header"
    }, /*#__PURE__*/ React.createElement(Title, {
        level: 3
    }, __("All Bookings", "timetics")), /*#__PURE__*/ React.createElement(_UserInfo__WEBPACK_IMPORTED_MODULE_0__["default"], {
        data: userData
    })), /*#__PURE__*/ React.createElement("div", {
        className: "tt-user-bookings-area"
    }, hasSelected && /*#__PURE__*/ React.createElement(Space, {
        className: "tt-bulk-delete tt-mb-20"
    }, /*#__PURE__*/ React.createElement(Button, {
        danger: true,
        onClick: function onClick(e) {
            confirm({
                title: __("Are you sure delete selected bookings?", "timetics"),
                okText: __("Yes", "timetics"),
                okType: "danger",
                cancelText: __("No", "timetics"),
                wrapClassName: "toplevel_page_timetics",
                onOk: function onOk() {
                    deleteSelectedookings(seclectedRowKey);
                }
            });
        },
        loading: loading
    }, __("Bulk Delete", "timetics")), /*#__PURE__*/ React.createElement("span", null, hasSelected ? "".concat(seclectedRowKey.length, " items Selected") : "")), /*#__PURE__*/ React.createElement(Table, {
        rowSelection: rowSelection,
        columns: columns,
        rowClassName: function rowClassName(record) {
            return record.status == "cancel" && "tt-booking-cancel";
        },
        dataSource: data,
        rowKey: function rowKey(record) {
            return record.id;
        },
        loading: loading,
        sticky: true,
        scroll: {
            x: 960,
            y: "calc(100vh - 250px)"
        },
        tableLayout: "auto",
        pagination: {
            total: count,
            defaultPageSize: perPage,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30"],
            className: ["tt-ant-pagination"],
            onChange: function onChange(page_no, perPage) {
                setPageNumber(page_no);
                setPerPage(perPage);
                setLoading(true);
            }
        }
    }))));
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (UserBookingsList);

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/userAccount/UserBookingsList.js?