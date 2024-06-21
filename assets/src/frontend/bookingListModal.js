__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => ( /* binding */ BookingListModal)
    /* harmony export */
});
/* harmony import */
var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./app */ "./assets/src/frontend/app.js");

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
var Modal = window.antd.Modal;
var useState = React.useState,
    useEffect = React.useEffect;

function BookingListModal() {
    var _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        isModalOpen = _useState2[0],
        setIsModalOpen = _useState2[1];
    var _useState3 = useState(""),
        _useState4 = _slicedToArray(_useState3, 2),
        id = _useState4[0],
        setId = _useState4[1];
    useEffect(function() {
        document.addEventListener("getSelectedId", function(event) {
            setId(event.detail.id);
            setIsModalOpen(event.detail.modal);
        });
    }, []);
    var handleOk = function handleOk() {
        setIsModalOpen(false);
    };
    var handleCancel = function handleCancel() {
        setIsModalOpen(false);
    };
    return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement(Modal, {
        open: isModalOpen,
        onOk: handleOk,
        onCancel: handleCancel,
        destroyOnClose: true,
        footer: null,
        maskClosable: false,
        width: 1000,
        wrapClassName: "tt-booking-list-modal"
    }, /*#__PURE__*/ React.createElement(_app__WEBPACK_IMPORTED_MODULE_0__["default"], {
        dataControls: {
            id: id
        }
    })));
}

//# sourceURL=webpack://timetics/./assets/src/frontend/bookingListModal.js?