"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _constant = require("./constant");
var _DateFilter = _interopRequireDefault(require("./DateFilter"));
var _utils = require("./utils");
require("./columnFilter.css");
var _downArrow = _interopRequireDefault(require("../assets/down-arrow.png"));
var _filter = _interopRequireDefault(require("../assets/filter.png"));
var _delete = _interopRequireDefault(require("../assets/delete.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // Custom Components
// Utils
// Styles
// Assets
function TablecolumnFilter(props) {
  var datatype = props.datatype,
    applyFilter = props.applyFilter,
    clearFilter = props.clearFilter,
    column = props.column,
    _props$matchModeSelec = props.matchModeSelected,
    matchModeSelected = _props$matchModeSelec === void 0 ? [] : _props$matchModeSelec,
    setMatchModeSelected = props.setMatchModeSelected;
  var wrapperRef = (0, _react.useRef)();
  var operatorRef = (0, _react.useRef)();
  var matchModeRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showOperator = _useState4[0],
    setShowoperator = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showMatchMode = _useState6[0],
    setShowMatchMode = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    dataTypeMode = _useState8[0],
    setDataTypeMode = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    page = _useState10[0],
    setPage = _useState10[1];
  var _useState11 = (0, _react.useState)({
      label: "Match All",
      value: "AND"
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    operatorSelected = _useState12[0],
    setOperatorselected = _useState12[1];

  // Default matchmodes which will be used while adding the rule or while clearing the filter
  // Basically this and useEffect on parent or kinda same
  var matchModes = (0, _react.useMemo)(function () {
    switch (datatype) {
      case 'date':
        return {
          id: (0, _utils.generateUID)(),
          matchMode: "dateIs",
          query: null,
          column: column
        };
      case 'number':
        return {
          id: (0, _utils.generateUID)(),
          matchMode: "equals",
          query: '',
          column: column
        };
      case 'boolean':
        return {
          id: (0, _utils.generateUID)(),
          matchMode: "equals",
          query: 'yes',
          column: column
        };
      default:
        return {
          id: (0, _utils.generateUID)(),
          matchMode: "contains",
          query: '',
          column: column
        };
    }
  }, [datatype, column]);

  // Need to find different solution for col filter highlight while applied
  // const { column_filters } = useSelector(state => state.query);
  // const isFiltered = column_filters[column]?.constraints?.[0]?.value || false;

  // To hide col filter when clicked outside
  var useOutsideAlerter = function useOutsideAlerter(ref) {
    (0, _react.useEffect)(function () {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // To remove the active class for filter icon
          // let elementList = document.getElementsByClassName("filter-icon");
          // Array.from(elementList)?.forEach(e => {
          //     // if (!isFiltered) {
          //     //     e.classList.remove("active");
          //     // }
          // });
          setShow(false);
          setShowMatchMode(false);
          setShowoperator(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return function () {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]); //isFiltered
  };

  useOutsideAlerter(wrapperRef);

  // To show col filter
  var showColumnFilter = function showColumnFilter(event) {
    setShow(!show);
  };

  // To set options in dropdown 
  (0, _react.useEffect)(function () {
    if (datatype === "text") {
      setDataTypeMode(_constant.STR_MATCH_MODE);
    } else if (datatype === "number") {
      setDataTypeMode(_constant.NUM_MATCH_MODE);
    } else if (datatype === "date") {
      setDataTypeMode(_constant.DATE_MATCH_MODE);
    } else if (datatype === "boolean") {
      setDataTypeMode(_constant.BOOLEAN_MATCH_MODE);
    }
  }, [datatype, column]);

  // To type the input in input box
  var InputString = function InputString(event, id, dataType) {
    var _matchModeSelected = structuredClone(matchModeSelected);
    var item = _matchModeSelected.find(function (a) {
      return a.id === id;
    });
    item.query = dataType === "text" ? event.target.value : dataType === "number" ? event.target.value.replace(new RegExp(/[^\d]/, 'ig'), "") : event;
    setMatchModeSelected(_matchModeSelected);
  };
  var Inputbox = function Inputbox(value, id) {
    if (datatype === "number") {
      return /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: value,
        onChange: function onChange(event) {
          return InputString(event, id, "number");
        },
        className: "filter-input-text",
        onKeyDown: handleKeyDown
      });
    } else if (datatype === "date") {
      return /*#__PURE__*/_react["default"].createElement(_DateFilter["default"], {
        onChange: function onChange(event) {
          InputString(event, id, "date");
        },
        value: value
      });
    } else {
      return /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: value,
        onChange: function onChange(event) {
          InputString(event, id, "text");
        },
        className: "filter-input-text",
        onKeyDown: handleKeyDown
      });
    }
  };

  // To select option from match all/any dropdown 
  var selectOperatorMode = function selectOperatorMode(event, option) {
    setOperatorselected(option);
    setShowoperator(false);
  };

  // To select option from 2nd dropdown 
  var selectMatchMode = function selectMatchMode(option, id) {
    var _matchModeSelected = structuredClone(matchModeSelected);
    var item = _matchModeSelected.find(function (a) {
      return a.id === id;
    });
    item.matchMode = option.value;
    setMatchModeSelected(_matchModeSelected);
    setShowMatchMode(false);
  };

  // To show and hide match all and any dropdown
  var showOperatorDrop = function showOperatorDrop() {
    setShowoperator(!showOperator);
  };

  // To show and hide 2nd dropdown
  var showMatchDrop = function showMatchDrop() {
    setShowoperator(false);
    setShowMatchMode(!showMatchMode);
  };

  // While applying col filter
  var columnFilter = function columnFilter() {
    var _matchModeSelected$fi;
    setShow(false);
    setShowMatchMode(false);
    setShowoperator(false);
    return {
      "operator": operatorSelected.value,
      "constraints": matchModeSelected === null || matchModeSelected === void 0 || (_matchModeSelected$fi = matchModeSelected.filter(function (a) {
        return a.column === column;
      })) === null || _matchModeSelected$fi === void 0 ? void 0 : _matchModeSelected$fi.map(function (item) {
        return {
          "value": item.query,
          "matchMode": item.matchMode
        };
      })
    };
  };

  // While clearing col filter
  var emptyFilter = function emptyFilter() {
    var _matchModeSelected$fi2;
    setShow(false);
    setShowMatchMode(false);
    setShowoperator(false);
    var _finalMatchmode = [];
    var originalMatchmodeslected = structuredClone(matchModeSelected);
    var _matchModeSelected = matchModeSelected === null || matchModeSelected === void 0 || (_matchModeSelected$fi2 = matchModeSelected.filter(function (a) {
      return a.column === column;
    })) === null || _matchModeSelected$fi2 === void 0 || (_matchModeSelected$fi2 = _matchModeSelected$fi2.map(function (a) {
      return {
        id: (0, _utils.generateUID)(),
        matchMode: datatype === "text" ? "contains" : datatype === "date" ? "dateIs" : "equals",
        query: datatype === "text" ? "" : datatype === "date" ? null : datatype === "number" ? "" : "yes",
        column: a.column
      };
    })) === null || _matchModeSelected$fi2 === void 0 ? void 0 : _matchModeSelected$fi2[0];
    var clonedMatchmode = structuredClone([_matchModeSelected]);
    originalMatchmodeslected === null || originalMatchmodeslected === void 0 ? void 0 : originalMatchmodeslected.forEach(function (a) {
      var index = clonedMatchmode === null || clonedMatchmode === void 0 ? void 0 : clonedMatchmode.findIndex(function (b) {
        return a.column === b.column;
      });
      if (index === -1) {
        _finalMatchmode === null || _finalMatchmode === void 0 ? void 0 : _finalMatchmode.push(a);
      }
    });
    var _final = [].concat(_finalMatchmode, _toConsumableArray(clonedMatchmode));
    setMatchModeSelected(_final);
    return {
      "operator": 'AND',
      "constraints": [matchModes]
    };
  };

  // Apply col filter by clicking enter
  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === 'Enter') {
      applyFilter(column, columnFilter());
    }
  };

  // 2nd dropdown and remove rule
  var multiSelectionSection = (0, _react.useMemo)(function () {
    var _matchModeSelected$fi3;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "Multi-section"
    }, matchModeSelected === null || matchModeSelected === void 0 || (_matchModeSelected$fi3 = matchModeSelected.filter(function (a) {
      return a.column === column;
    })) === null || _matchModeSelected$fi3 === void 0 ? void 0 : _matchModeSelected$fi3.map(function (_ref) {
      var _dataTypeMode$find, _BOOLEAN_MATCH_MODE$f, _matchModeSelected$fi6;
      var query = _ref.query,
        matchMode = _ref.matchMode,
        id = _ref.id;
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
        key: id
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "section-alignment"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "Matchmode-Section"
      }, datatype !== 'boolean' && /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-dropdown"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: matchModeRef,
        onClick: function onClick() {
          return showMatchDrop();
        },
        className: "dropdown-input"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "dropdown-selected-value"
      }, (_dataTypeMode$find = dataTypeMode.find(function (a) {
        return a.value === matchMode;
      })) === null || _dataTypeMode$find === void 0 ? void 0 : _dataTypeMode$find.label), /*#__PURE__*/_react["default"].createElement("div", {
        className: "dropdown-tools"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "dropdown-tool"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: _downArrow["default"],
        alt: "dropdown",
        className: "dropdown-Icon"
      })))), showMatchMode && /*#__PURE__*/_react["default"].createElement("div", {
        className: "dropdown-menu"
      }, dataTypeMode.map(function (option) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: matchMode === option.value ? " option-label selected" : "option-label",
          key: option.value,
          onClick: function onClick() {
            return selectMatchMode(option, id);
          }
        }, /*#__PURE__*/_react["default"].createElement("span", null, option.label));
      })))), datatype !== 'boolean' ? Inputbox(query, id) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-dropdown"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: matchModeRef,
        onClick: function onClick() {
          return showMatchDrop();
        },
        className: "dropdown-input"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "dropdown-selected-value"
      }, (_BOOLEAN_MATCH_MODE$f = _constant.BOOLEAN_MATCH_MODE.find(function (a) {
        var _matchModeSelected$fi4;
        return a.value === ((_matchModeSelected$fi4 = matchModeSelected.find(function (a) {
          return a.id === id;
        })) === null || _matchModeSelected$fi4 === void 0 ? void 0 : _matchModeSelected$fi4.query);
      })) === null || _BOOLEAN_MATCH_MODE$f === void 0 ? void 0 : _BOOLEAN_MATCH_MODE$f.label), /*#__PURE__*/_react["default"].createElement("div", {
        className: "dropdown-tools"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "dropdown-tool"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: _downArrow["default"],
        alt: "dropdown",
        className: "dropdown-Icon"
      })))), showMatchMode && /*#__PURE__*/_react["default"].createElement("div", {
        className: "dropdown-menu"
      }, _constant.BOOLEAN_MATCH_MODE.map(function (option) {
        var _matchModeSelected$fi5;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: ((_matchModeSelected$fi5 = matchModeSelected.find(function (a) {
            return a.id === id;
          })) === null || _matchModeSelected$fi5 === void 0 ? void 0 : _matchModeSelected$fi5.query) === option.value ? " option-label selected" : "option-label",
          key: option.label,
          onClick: function onClick() {
            var _matchModeSelected = structuredClone(matchModeSelected);
            var item = _matchModeSelected.find(function (a) {
              return a.id === id;
            });
            item.query = option.value;
            setMatchModeSelected(_matchModeSelected);
            setShowMatchMode(false);
          }
        }, /*#__PURE__*/_react["default"].createElement("span", null, option.label));
      })))), (matchModeSelected === null || matchModeSelected === void 0 || (_matchModeSelected$fi6 = matchModeSelected.filter(function (a) {
        return (a === null || a === void 0 ? void 0 : a.column) === column;
      })) === null || _matchModeSelected$fi6 === void 0 ? void 0 : _matchModeSelected$fi6.length) > 1 && /*#__PURE__*/_react["default"].createElement("div", {
        className: "section-alignment"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "remove-rule",
        type: "button",
        onClick: function onClick() {
          var _matchModeSelected = structuredClone(matchModeSelected);
          var index = _matchModeSelected.findIndex(function (a) {
            return a.id === id;
          });
          _matchModeSelected.splice(index, 1);
          setMatchModeSelected(_matchModeSelected);
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "remove-icon"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: _delete["default"],
        alt: "remove",
        style: {
          height: "15px",
          width: "15px"
        }
      })), /*#__PURE__*/_react["default"].createElement("span", null, "Remove Rule"))));
    }));
  }, [matchModeSelected, showMatchMode, showOperator, dataTypeMode]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "column-filter-main",
    ref: wrapperRef
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "filter-icon-section",
    id: "filter-icon",
    onClick: function onClick(event) {
      var elem = event.target.parentNode;
      var elemRect = elem.getBoundingClientRect();

      // temp - only for btx-search project
      var sidebar = document.getElementById('sidebar');
      setPage({
        pageX: elemRect.left - ((sidebar === null || sidebar === void 0 ? void 0 : sidebar.offsetWidth) || 0),
        pageY: elemRect.top
      });
      showColumnFilter(event);
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _filter["default"],
    alt: "col_Filter",
    className: "filter-icon"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "filter-dropdown",
    style: {
      position: 'fixed',
      display: show ? "block" : 'none',
      left: page === null || page === void 0 ? void 0 : page.pageX,
      top: 40,
      height: datatype !== "boolean" ? "250px" : "auto"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "operator-dropdown-section"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-dropdown"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: operatorRef,
    onClick: function onClick() {
      return showOperatorDrop();
    },
    className: "dropdown-input"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-selected-value"
  }, operatorSelected.label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-tools"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-tool"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _downArrow["default"],
    alt: "dropdown",
    className: "dropdown-Icon"
  })))), showOperator && /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-menu"
  }, _constant.OPERATOR.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: operatorSelected.value === option.value ? " option-label selected" : "option-label",
      onClick: function onClick(event) {
        return selectOperatorMode(event, option);
      },
      key: option.value
    }, /*#__PURE__*/_react["default"].createElement("span", null, option.label));
  })))), multiSelectionSection, datatype !== 'boolean' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-alignment"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "add-rule",
    onClick: function onClick() {
      setMatchModeSelected([].concat(_toConsumableArray(matchModeSelected), [_objectSpread(_objectSpread({}, matchModes), {}, {
        id: (0, _utils.generateUID)()
      })]));
    },
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "+"), /*#__PURE__*/_react["default"].createElement("span", null, "Add Rule"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "column-footer-buttons"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "filter-footer-button",
    type: "button",
    onClick: function onClick() {
      return clearFilter(column, emptyFilter());
    }
  }, "Clear"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "filter-footer-button primary",
    onClick: function onClick() {
      return applyFilter(column, columnFilter());
    }
  }, " Apply"))));
}
var _default = TablecolumnFilter;
exports["default"] = _default;