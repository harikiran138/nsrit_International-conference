__webpack_require__.r(__webpack_exports__);
/* harmony import */
var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./app */ "./assets/src/frontend/app.js");
/* harmony import */
var _bookingListModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./bookingListModal */ "./assets/src/frontend/bookingListModal.js");
/* harmony import */
var _pages_userAccount_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./pages/userAccount/index */ "./assets/src/frontend/pages/userAccount/index.js");

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
var React = window.React;
var ReactVersion = React.version;
var ReactDOM = window.ReactDOM;



var init = function init($scope) {
    var _$scope$find = $scope.find(".timetics-single-booking-wrapper"),
        _$scope$find2 = _slicedToArray(_$scope$find, 1),
        root = _$scope$find2[0];
    var _$scope$find3 = $scope.find(".timetics-booking-modal"),
        _$scope$find4 = _slicedToArray(_$scope$find3, 1),
        modalRoot = _$scope$find4[0];
    var _$scope$find5 = $scope.find(".timetics-user-dashboard-wrapper"),
        _$scope$find6 = _slicedToArray(_$scope$find5, 1),
        UserDashboard = _$scope$find6[0];
    var dataControls = root === null || root === void 0 ? void 0 : root.getAttribute("data-controls");

    /**
     * Renders the main component
     */

    if (ReactVersion >= "18.0.0") {
        /**
         * Renders main app component
         */
        if (root && ReactVersion >= "18.0.0") {
            var rootEl = ReactDOM.createRoot(root, {
                legacy: true
            });
            rootEl.render( /*#__PURE__*/ React.createElement(_app__WEBPACK_IMPORTED_MODULE_0__["default"], {
                dataControls: JSON.parse(dataControls)
            }));
        }
        /**
         * Renders booking modal form component
         */
        if (modalRoot && ReactVersion >= "18.0.0") {
            var modalEl = ReactDOM.createRoot(modalRoot);
            modalEl.render( /*#__PURE__*/ React.createElement(_bookingListModal__WEBPACK_IMPORTED_MODULE_1__["default"], null));
        }

        /**
         * Renders user dashboard
         */
        if (UserDashboard) {
            var dashboardEl = ReactDOM.createRoot(UserDashboard);
            dashboardEl.render( /*#__PURE__*/ React.createElement(_pages_userAccount_index__WEBPACK_IMPORTED_MODULE_2__["default"], null));
        }
    } else {
        if (root) {
            ReactDOM.render( /*#__PURE__*/ React.createElement(_app__WEBPACK_IMPORTED_MODULE_0__["default"], {
                dataControls: JSON.parse(dataControls)
            }), root);
        }
        /**
         * Renders booking list modal
         */
        if (modalRoot) {
            ReactDOM.render( /*#__PURE__*/ React.createElement(_bookingListModal__WEBPACK_IMPORTED_MODULE_1__["default"], null), modalRoot);
        }
    }
};
jQuery(window)
    // .on("elementor/frontend/init", () => {
    //     let widgetsList = [
    //         "etn-event-calendar",
    //     ];
    //     init(elementorFrontend.elements.$body);

    //     widgetsList.forEach((event) => {
    //         elementorFrontend.hooks.addAction(
    //             "frontend/element_ready/" + event + ".default",
    //             init
    //         );
    //     });
    // })

    /*
     * Load all the shortcodes elements here.
     */
    .on("load", function() {
        var shortcodeEls = document.querySelectorAll(".timetics-shortcode-wrapper");
        shortcodeEls.forEach(function(el) {
            init(jQuery(el));
        });
    });

//# sourceURL=webpack://timetics/./assets/src/frontend/index.js?