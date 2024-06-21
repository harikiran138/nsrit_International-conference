__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony import */
var _actionCreators_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../actionCreators/actions */ "./assets/src/frontend/actionCreators/actions.js");
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../context/provider */ "./assets/src/frontend/context/provider.js");
/* harmony import */
var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../utils/helper */ "./assets/src/frontend/utils/helper.js");
/* harmony import */
var _SidebarInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./SidebarInfo */ "./assets/src/frontend/pages/bookings/SidebarInfo.js");

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
    List = _window$antd.List,
    Avatar = _window$antd.Avatar,
    Select = _window$antd.Select,
    Space = _window$antd.Space,
    notification = _window$antd.notification;
var useEffect = window.React.useEffect;
var Title = Typography.Title,
    Text = Typography.Text;
var __ = wp.i18n.__;

function MeetingDetails() {
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_1__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        meetingRedcuer = _useStateValue2[0].meeting,
        dispatch = _useStateValue2[1];
    var meeting = meetingRedcuer.meeting,
        selectedStaff = meetingRedcuer.selectedStaff;
    useEffect(function() {
        dispatch({
            type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_0__.actions.SET_STATE,
            payload: {
                selectedStaff: selectedStaff ? selectedStaff : meeting === null || meeting === void 0 ? void 0 : meeting.staff[0]
            }
        });

        // if (
        //     !!window.timetics.stripe_configure == false &&
        //     !!meeting?.price == true
        // ) {
        //     notification.info({
        //         message: __("Stripe is not configured", "timetics"),
        //         description: "Please configure Stripe to book a meeting",
        //         placement: "topRight",
        //         duration: 0,
        //     });
        // }

        return function() {};
    }, []);
    return /*#__PURE__*/ React.createElement("div", {
        className: "tt-form-left-sidebar"
    }, (meeting === null || meeting === void 0 ? void 0 : meeting.staff.length) > 1 && window.timeticsPro ? wp.hooks.applyFilters("staffSelect") : /*#__PURE__*/ React.createElement(Space, {
        className: "tt-host-item tt-mb-20"
    }, /*#__PURE__*/ React.createElement(Avatar, {
        size: 40,
        src: selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.image
    }), /*#__PURE__*/ React.createElement(Text, null, selectedStaff === null || selectedStaff === void 0 ? void 0 : selectedStaff.full_name)), /*#__PURE__*/ React.createElement(Title, {
        className: "fff tt-meeting-name",
        level: 3
    }, meeting === null || meeting === void 0 ? void 0 : meeting.name), (meeting === null || meeting === void 0 ? void 0 : meeting.description) && /*#__PURE__*/ React.createElement(Text, {
        className: "tt-meeting-description tt-mb-20",
        type: "secondary"
    }, meeting === null || meeting === void 0 ? void 0 : meeting.description), /*#__PURE__*/ React.createElement(_SidebarInfo__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (MeetingDetails);

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/bookings/MeetingDetails.js?