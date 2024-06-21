__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony import */
var _common_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../common/constant */ "./assets/src/common/constant.js");
/* harmony import */
var _actionCreators_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../actionCreators/actions */ "./assets/src/frontend/actionCreators/actions.js");
/* harmony import */
var _context_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../context/provider */ "./assets/src/frontend/context/provider.js");

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
var Avatar = window.antd.Avatar;
var __ = wp.i18n.__;



function UserInfo(_ref) {
    var data = _ref.data;
    var _useStateValue = (0, _context_provider__WEBPACK_IMPORTED_MODULE_2__.useStateValue)(),
        _useStateValue2 = _slicedToArray(_useStateValue, 2),
        userReducer = _useStateValue2[0].user,
        dispatch = _useStateValue2[1];
    return /*#__PURE__*/ React.createElement("div", {
        className: "tt-user-info-area"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "tt-user-avatar"
    }, /*#__PURE__*/ React.createElement(Avatar, {
        size: 40,
        src: data === null || data === void 0 ? void 0 : data.image,
        alt: __("profile photo", "timetics")
    })), /*#__PURE__*/ React.createElement("div", {
        className: "tt-user-deatils"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "tt-user-name"
    }, __("".concat(data === null || data === void 0 ? void 0 : data.full_name), "timetics")), /*#__PURE__*/ React.createElement("div", {
        className: "tt-user-details-edit"
    }, /*#__PURE__*/ React.createElement("p", {
        className: "btn-text ",
        onClick: function onClick() {
            return dispatch({
                type: _actionCreators_actions__WEBPACK_IMPORTED_MODULE_1__.actions.SET_USER_DATA,
                payload: {
                    userStep: _common_constant__WEBPACK_IMPORTED_MODULE_0__.USER_STEPS.userProfile
                }
            });
        }
    }, __("Edit Profile", "timetics")))));
}
/* harmony default export */
const __WEBPACK_DEFAULT_EXPORT__ = (UserInfo);

//# sourceURL=webpack://timetics/./assets/src/frontend/pages/userAccount/UserInfo.js?