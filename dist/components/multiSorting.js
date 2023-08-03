"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _sort = _interopRequireDefault(require("../assets/sort.png"));
var _sort_asc = _interopRequireDefault(require("../assets/sort_asc.png"));
var _sort_desc = _interopRequireDefault(require("../assets/sort_desc.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /* eslint-disable react/prop-types */ // Assets
function MultiSorting(props) {
  var column = props.column,
    setSorting = props.setSorting,
    sorting = props.sorting; //column - to get the particular column while sorting

  var handleSort = function handleSort(column) {
    var _sorting$index;
    var order = 0;
    var index = sorting === null || sorting === void 0 ? void 0 : sorting.findIndex(function (a) {
      return a.sortBy === column;
    });
    var sortOrder = sorting === null || sorting === void 0 || (_sorting$index = sorting[index]) === null || _sorting$index === void 0 ? void 0 : _sorting$index.sortOrder;
    if (!sortOrder) {
      order = 1;
    } else if (sortOrder === 1) {
      order = -1;
    } else if (sortOrder === -1) {
      order = 0;
    }
    var _sorting = structuredClone(sorting);
    if (index === -1) {
      // new one
      _sorting.push({
        sortOrder: order,
        sortBy: column
      });
    } else {
      // Existing one
      _sorting[index] = {
        sortOrder: order,
        sortBy: column
      };
    }
    setSorting(_toConsumableArray(_sorting));
  };
  var sortIcon = (0, _react.useMemo)(function () {
    var _sorting$find;
    var sortOrder = sorting === null || sorting === void 0 || (_sorting$find = sorting.find(function (a) {
      return a.sortBy === column;
    })) === null || _sorting$find === void 0 ? void 0 : _sorting$find.sortOrder;
    if (!sortOrder) {
      return /*#__PURE__*/_react["default"].createElement("img", {
        src: _sort["default"],
        alt: "default_sort",
        style: {
          height: "20px"
        }
      });
    } else if (sortOrder === 1) {
      return /*#__PURE__*/_react["default"].createElement("img", {
        src: _sort_asc["default"],
        alt: "sort_asc",
        style: {
          height: "20px"
        }
      });
    } else if (sortOrder === -1) {
      return /*#__PURE__*/_react["default"].createElement("img", {
        src: _sort_desc["default"],
        alt: "sort_desc",
        style: {
          height: "20px"
        }
      });
    } else {
      return /*#__PURE__*/_react["default"].createElement("img", {
        src: _sort["default"],
        alt: "default_sort",
        style: {
          height: "20px"
        }
      });
    }
  }, [sorting, column]);
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      verticalAlign: "middle",
      cursor: "pointer"
    },
    onClick: function onClick() {
      return handleSort(column);
    }
  }, sortIcon));
}
var _default = MultiSorting;
exports["default"] = _default;