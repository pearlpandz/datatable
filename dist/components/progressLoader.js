"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./progressLoader.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Styles

var ProgressLoader = function ProgressLoader(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-content-center flex-column loader"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "infinite_loader"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '18px',
      marginTop: '20px'
    }
  }, message));
};
ProgressLoader.propTypes = {
  message: _propTypes["default"].string
};
var _default = ProgressLoader;
exports["default"] = _default;