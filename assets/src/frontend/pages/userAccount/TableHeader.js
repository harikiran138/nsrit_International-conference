__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony import */
var _common_icons_Icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../common/icons/Icons */ "./assets/src/common/icons/Icons.js");
/* harmony import */
var _helper_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../helper/helpers */ "./assets/src/helper/helpers.js");

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
var useState = React.useState;
var __ = wp.i18n.__;
var _antd = antd,
    Button = _antd.Button,
    Space = _antd.Space,
    Dropdown = _antd.Dropdown,
    Typography = _antd.Typography;
var Title = Typography.Title;


function TableHeader(_ref) {
    var showBookingUpdate = _ref.showBookingUpdate,
        showRescheduleConfirm = _ref.showRescheduleConfirm;
    var _useState = useState(null),
        _useState2 = _slicedToArray(_useState, 2),
        currentRecord = _useState2[0],
        setCurrentRecord = _useState2[1];

    // dropdown Menu items in the card items
    var menuItems = [{
        key: "1",
        label: __("Reschedule", "timetics"),
        onClick: function onClick() {
            showRescheduleConfirm(currentRecord === null || currentRecord === void 0 ? void 0 : currentRecord.id);
        }
    }, {
        key: "2",
        label: __("Cancle", "timetics"),
        onClick: function onClick() {
            showBookingUpdate(currentRecord === null || currentRecord === void 0 ? void 0 : currentRecord.id);
        }
    }];

    /**
     *   booking data table column set
     */
    var columns = [{
        title: __("Booking Date", "timetics"),
        dataIndex: "start_date",
        key: "start_date",
        render: function render(_, record) {
            var _window, _window$timetics, _window2, _window2$timetics;
            return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Title, {
                level: 5,
                className: "tt-margin-0"
            }, (0, _helper_helpers__WEBPACK_IMPORTED_MODULE_1__.convertWordpressDateFormatToDayjs)({
                date: record === null || record === void 0 ? void 0 : record.start_date,
                format: (_window = window) === null || _window === void 0 ? void 0 : (_window$timetics = _window.timetics) === null || _window$timetics === void 0 ? void 0 : _window$timetics.date_format
            })), /*#__PURE__*/ React.createElement("p", {
                className: "tt-mt-5 tt-mb-0"
            }, "@ ".concat((0, _helper_helpers__WEBPACK_IMPORTED_MODULE_1__.convertWordpressTimeFormatToDayjs)({
                time: record === null || record === void 0 ? void 0 : record.start_time,
                format: (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$timetics = _window2.timetics) === null || _window2$timetics === void 0 ? void 0 : _window2$timetics.time_format
            }))));
        }
    }, {
        title: __("Duration", "timetics"),
        dataIndex: "duration",
        key: "duration",
        render: function render(_, record) {
            var _record$appointment;
            return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Title, {
                level: 5,
                className: "tt-margin-0"
            }, record === null || record === void 0 ? void 0 : (_record$appointment = record.appointment) === null || _record$appointment === void 0 ? void 0 : _record$appointment.duration));
        }
    }, {
        title: __("Meeting Name", "timetics"),
        dataIndex: "first_name",
        key: "first_name",
        render: function render(_, record) {
            var _record$appointment2;
            return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Title, {
                level: 5,
                className: "tt-margin-0"
            }, record === null || record === void 0 ? void 0 : (_record$appointment2 = record.appointment) === null || _record$appointment2 === void 0 ? void 0 : _record$appointment2.name));
        }
    }, {
        title: __("Price", "timetics"),
        dataIndex: "team_member",
        key: "team_member",
        render: function render(_, record) {
            var _window3, _window3$timetics;
            return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("p", {
                className: "tt-margin-0 tt-customer-email"
            }, record !== null && record !== void 0 && record.order_total ? (record === null || record === void 0 ? void 0 : record.order_total) + " " + ((_window3 = window) === null || _window3 === void 0 ? void 0 : (_window3$timetics = _window3.timetics) === null || _window3$timetics === void 0 ? void 0 : _window3$timetics.currency) : __("Free", "timetics")));
        }
    }, {
        title: __("Status", "timetics"),
        dataIndex: "status",
        key: "status",
        render: function render(_, record) {
            var statusTextColor = record.status == "approved" ? "#00C14E" : record.status == "completed" ? "#00C14E" : record.status == "pending" ? "#EF8201" : "#E42D23";
            return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("p", {
                style: {
                    color: statusTextColor,
                    textTransform: "capitalize"
                },
                className: "tt-meeting-status"
            }, record === null || record === void 0 ? void 0 : record.status));
        }
    }, {
        title: "Action",
        key: "action",
        render: function render(text, record, index) {
            return /*#__PURE__*/ React.createElement("div", {
                className: "tt-status-wrap"
            }, /*#__PURE__*/ React.createElement(Space, {
                size: [16, 8],
                wrap: true
            }, /*#__PURE__*/ React.createElement(Dropdown, {
                menu: {
                    items: menuItems
                },
                trigger: ["click"],
                overlayClassName: "tt-action-dropdown",
                placement: "bottomRight",
                onClick: function onClick() {
                    setCurrentRecord(record);
                }
            }, /*#__PURE__*/ React.createElement(Button, {
                className: "tt-more-action-btn"
            }, /*#__PURE__*/ React.createElement(_common_icons_Icons__WEBPACK_IMPORTED_MODULE_0__.DotIcon, null)))));
        }
    }];
    return {
        columns: columns,
        currentRecord: currentRecord
    };
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (TableHeader);

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/userAccount/TableHeader.js?