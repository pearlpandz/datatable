"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _moment = _interopRequireDefault(require("moment"));
require("./bodyTemplate.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable react/prop-types */

// Third party components
// import { Link } from 'react-router-dom';
// Styles
function BodyTemplate(props) {
  var data = props.data,
    datatype = props.datatype,
    _props$link = props.link,
    link = _props$link === void 0 ? false : _props$link;
  if (!data) return /*#__PURE__*/_react["default"].createElement("span", null); //If data is null , undefined , ""

  if (datatype === 'date') {
    return /*#__PURE__*/_react["default"].createElement("span", {
      className: "table-data"
    }, (0, _moment["default"])(data).format('MM/DD/yyyy'));
  }
  if (link) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "table-data link",
      dangerouslySetInnerHTML: {
        __html: data
      }
    });
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-data",
    dangerouslySetInnerHTML: {
      __html: data
    }
  });
}
var _default = BodyTemplate;
exports["default"] = _default;