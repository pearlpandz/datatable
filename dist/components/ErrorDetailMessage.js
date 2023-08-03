"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ErrorDetail = function ErrorDetail(props) {
  var title = props.title,
    subTitle = props.subTitle;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-column justify-content-center mb-3 align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "m-0 text-xl"
  }, title), subTitle && /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-sm mt-2"
  }, subTitle));
};
ErrorDetail.propTypes = {
  title: _propTypes["default"].string,
  subTitle: _propTypes["default"].string
};
var _default = ErrorDetail;
exports["default"] = _default;