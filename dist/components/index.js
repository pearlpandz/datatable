"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _bodyTemplate = _interopRequireDefault(require("./bodyTemplate"));
var _sorting = _interopRequireDefault(require("./sorting"));
var _columnFilter = _interopRequireDefault(require("./columnFilter"));
var _multiSorting = _interopRequireDefault(require("./multiSorting"));
var _progressLoader = _interopRequireDefault(require("./progressLoader"));
var _ErrorDetailMessage = _interopRequireDefault(require("./ErrorDetailMessage"));
var _utils = require("./utils");
require("./index.css");
require("./bodyTemplate.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable no-unused-vars */ /* eslint-disable react/prop-types */ // Custom Components
// Utils
// Styles
function DTable(props) {
  var columns = props.columns,
    data = props.data,
    sorting = props.sorting,
    setSorting = props.setSorting,
    sortable = props.sortable,
    sortMode = props.sortMode,
    resizableColumns = props.resizableColumns,
    filterable = props.filterable,
    applyFilter = props.applyFilter,
    clearFilter = props.clearFilter,
    scrollable = props.scrollable,
    actions = props.actions,
    loading = props.loading,
    error = props.error,
    status = props.status,
    refetch = props.refetch,
    selectedMode = props.selectedMode,
    rowxpansion = props.rowxpansion,
    onColumnResizeEnd = props.onColumnResizeEnd,
    onCellClick = props.onCellClick,
    mainAllTab = props.mainAllTab,
    selectable = props.selectable,
    selectionMode = props.selectionMode,
    allRowSelection = props.allRowSelection,
    onRowSelection = props.onRowSelection,
    selectedRows = props.selectedRows,
    onAllRowSelection = props.onAllRowSelection,
    dataKey = props.dataKey,
    infinitescroll = props.infinitescroll,
    infiniteChange = props.infiniteChange,
    totalRecords = props.totalRecords,
    rowExpansionTemplate = props.rowExpansionTemplate,
    filters = props.filters;
  var tableFootRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    tempWidth = _useState2[0],
    setTemp = _useState2[1];
  var _useState3 = (0, _react.useState)(columns),
    _useState4 = _slicedToArray(_useState3, 2),
    _columns = _useState4[0],
    setColumns = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    colResize = _useState6[0],
    setColResize = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    rowExpand = _useState8[0],
    setRowExpand = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    showcustomLoader = _useState10[0],
    setShowCustomLoader = _useState10[1];

  // To maintain the matchmode during at first time for column filter
  var defaultmatchmode = function defaultmatchmode() {
    var _matchModeSelected = [];
    columns === null || columns === void 0 ? void 0 : columns.forEach(function (column) {
      var _filters$column$field;
      var defaultValue = (_filters$column$field = filters[column.field]) === null || _filters$column$field === void 0 ? void 0 : _filters$column$field.constraints;
      switch (column.filterType) {
        case 'date':
          {
            defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.forEach(function (_ref) {
              var matchMode = _ref.matchMode,
                value = _ref.value;
              _matchModeSelected.push({
                id: (0, _utils.generateUID)(),
                matchMode: matchMode || "dateIs",
                query: value || null,
                column: column.field
              });
            });
            break;
          }
        case 'number':
          {
            defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.forEach(function (_ref2) {
              var matchMode = _ref2.matchMode,
                value = _ref2.value;
              _matchModeSelected.push({
                id: (0, _utils.generateUID)(),
                matchMode: matchMode || "equals",
                query: value || "",
                column: column.field
              });
            });
            break;
          }
        case 'boolean':
          {
            defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.forEach(function (_ref3) {
              var matchMode = _ref3.matchMode;
              _matchModeSelected.push({
                id: (0, _utils.generateUID)(),
                matchMode: matchMode || "equals",
                query: "true",
                column: column.field
              });
            });
            break;
          }
        default:
          {
            defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.forEach(function (_ref4) {
              var matchMode = _ref4.matchMode,
                value = _ref4.value;
              _matchModeSelected.push({
                id: (0, _utils.generateUID)(),
                matchMode: matchMode || "contains",
                query: value || "",
                column: column.field
              });
            });
            break;
          }
      }
    });
    return _matchModeSelected;
  };
  var _useState11 = (0, _react.useState)(defaultmatchmode()),
    _useState12 = _slicedToArray(_useState11, 2),
    matchModeSelected = _useState12[0],
    _setMatchModeSelected = _useState12[1];

  // To maintain columns during reorder orhide/show
  (0, _react.useEffect)(function () {
    // To get the columns if they are hidden or re-ordered
    setColumns(columns);
    // To render the col filter for that particular column
    var _matchModeSelected = structuredClone(matchModeSelected);
    _setMatchModeSelected(_matchModeSelected);
  }, [columns]);

  // Added this useEffect to trigger cleanup of col filter while switching between on mode to other
  // Applicable only for historical . Selectedmode and mainalltab is sent as an props from the parent
  // Need to make this in an generic way for all applications if there is any mode changes then filter needs to be removed
  // Basically if no filter is applied it should have a default value
  (0, _react.useEffect)(function () {
    var _matchModeSelected = [];
    columns === null || columns === void 0 ? void 0 : columns.forEach(function (column) {
      switch (column.filterType) {
        case 'date':
          {
            _matchModeSelected.push({
              id: (0, _utils.generateUID)(),
              matchMode: "dateIs",
              query: null,
              column: column.field
            });
            break;
          }
        case 'number':
          {
            _matchModeSelected.push({
              id: (0, _utils.generateUID)(),
              matchMode: "equals",
              query: "",
              column: column.field
            });
            break;
          }
        case 'boolean':
          {
            _matchModeSelected.push({
              id: (0, _utils.generateUID)(),
              matchMode: "equals",
              query: 'yes',
              column: column.field
            });
            break;
          }
        default:
          {
            _matchModeSelected.push({
              id: (0, _utils.generateUID)(),
              matchMode: "contains",
              query: '',
              column: column.field
            });
            break;
          }
      }
    });
    _setMatchModeSelected(_matchModeSelected);
  }, [selectedMode, mainAllTab]);
  var columnTempWidth = '';
  var tempField = '';
  (0, _react.useEffect)(function () {
    var tables = document.getElementsByClassName('resizable-table');
    for (var i = 0; i < tables.length; i++) {
      resizableGrid(tables[i]);
    }
    function resizableGrid(table) {
      var row = table.getElementsByTagName('tr')[0],
        cols = row ? row.children : undefined;
      if (!cols) return;

      // table.style.overflow = 'hidden';

      var tableHeight = table.offsetHeight;
      for (var i = 0; i < cols.length; i++) {
        var div = createDiv(45);
        cols[i].appendChild(div);
        cols[i].style.position = 'relative';
        setListeners(div);
      }
      function setListeners(div) {
        var pageX, curCol, nxtCol, curColWidth, nxtColWidth, tableWidth;
        div.addEventListener('mousedown', function (e) {
          tableWidth = document.getElementById('datatable').offsetWidth;
          curCol = e.target.parentElement;
          nxtCol = curCol.nextElementSibling;
          pageX = e.pageX;
          var padding = paddingDiff(curCol);
          curColWidth = curCol.offsetWidth - padding;
          //  if (nxtCol)
          //nxtColWidth = nxtCol.offsetWidth - padding;
        });

        div.addEventListener('mouseover', function (e) {
          e.target.style.borderRight = '2px solid #0000ff';
        });
        div.addEventListener('mouseout', function (e) {
          e.target.style.borderRight = '';
        });
        document.addEventListener('mousemove', function (e) {
          if (curCol) {
            var diffX = e.pageX - pageX;

            // if (nxtCol)
            //nxtCol.style.width = (nxtColWidth - (diffX)) + 'px'

            tempField = curCol.innerText;
            columnTempWidth = curColWidth + diffX < 250 ? 250 : curColWidth + diffX;
            setTemp(columnTempWidth);
            curCol.style.width = columnTempWidth + 'px';
            curCol.style.minWidth = columnTempWidth + 'px';
            curCol.style.maxWidth = columnTempWidth + 'px';
            document.getElementById('datatable').style.width = tableWidth + diffX + "px";
          }
        });
        document.addEventListener('mouseup', function (e) {
          setColResize({
            field: tempField,
            width: columnTempWidth
          });
          curCol = undefined;
          nxtCol = undefined;
          pageX = undefined;
          nxtColWidth = undefined;
          curColWidth = undefined;
        });
      }
      function createDiv(height) {
        var div = document.createElement('div');
        div.className = 'custom-resizer';
        div.style.top = 0;
        div.style.right = 0;
        div.style.width = '5px';
        div.style.position = 'absolute';
        div.style.cursor = 'col-resize';
        div.style.userSelect = 'none';
        div.style.height = height + 'px';
        return div;
      }
      function paddingDiff(col) {
        if (getStyleVal(col, 'box-sizing') == 'border-box') {
          return 0;
        }
        var padLeft = getStyleVal(col, 'padding-left');
        var padRight = getStyleVal(col, 'padding-right');
        return parseInt(padLeft) + parseInt(padRight);
      }
      function getStyleVal(elm, css) {
        return window.getComputedStyle(elm, null).getPropertyValue(css);
      }
    }
  }, [_columns]);

  // For column resize storage in api added debounce to avoid multiple api calls during column resize
  (0, _react.useEffect)(function () {
    if (resizableColumns) {
      if (colResize !== null && colResize !== void 0 && colResize.width && colResize !== null && colResize !== void 0 && colResize.field) {
        var getData = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return onColumnResizeEnd(colResize);
              case 2:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })), 1000);
        return function () {
          return clearTimeout(getData);
        };
      }
    }
  }, [colResize]);
  var handleIntersect = (0, _react.useCallback)(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        infiniteChange();
        setShowCustomLoader(true);
      }
    });
  }, []);
  (0, _react.useEffect)(function () {
    if (!tableFootRef.current) return;
    var observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.8 //Making it as 0.8 rather than 0 show atleast somepart of px to appear rather as 0 will trigger as soon as some px is visible
    });

    //To observe the place where the change needed for infinite scroll to work
    observer.observe(tableFootRef.current);
    return function () {
      observer.disconnect();
    };
  }, [handleIntersect]);
  var expandRow = function expandRow(event, id) {
    if (event.target.className.includes('expanded')) {
      // take action :: collapse 
      event.target.style.transform = 'rotate(0deg)';
      event.target.classList.remove('expanded');
      var keys = Object.keys(rowExpand);
      var index = keys.findIndex(function (a) {
        return a === String(id);
      });
      if (index > -1) {
        var _keys$index;
        var _rowExpand = structuredClone(rowExpand);
        delete _rowExpand[(_keys$index = keys[index]) === null || _keys$index === void 0 ? void 0 : _keys$index.toString()];
        setRowExpand(_objectSpread({}, _rowExpand));
      }
    } else {
      // take action :: expand 
      event.target.style.transform = 'rotate(90deg)';
      event.target.classList.add('expanded');
      setRowExpand(_objectSpread(_objectSpread({}, rowExpand), {}, _defineProperty({}, id, true)));
    }
  };
  var tableBody = (0, _react.useMemo)(function () {
    return data.length > 0 ? data === null || data === void 0 ? void 0 : data.map(function (row, rowIndex) {
      var _columns$filter, _columns$filter2;
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
        key: rowIndex
      }, /*#__PURE__*/_react["default"].createElement("tr", {
        key: "row-".concat(rowIndex),
        id: "row-".concat(rowIndex),
        style: {
          overflow: 'hidden'
        }
      }, rowxpansion ? /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: function onClick(event) {
          return expandRow(event, "row-".concat(rowIndex));
        }
      }, "\u203A")) : "", selectable && (selectionMode === "checkbox" ? /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("input", {
        className: "datatable-checkbox",
        type: "checkbox",
        id: "row-".concat(rowIndex),
        onChange: function onChange(event) {
          return onRowSelection(event, row);
        },
        checked: selectedRows.findIndex(function (a) {
          return a[dataKey] === row[dataKey];
        }) > -1,
        name: "DataTable-row-checkbox"
      })) : selectionMode === "radio" ? /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("input", {
        className: "datatable-radio",
        type: "radio",
        id: "row-".concat(rowIndex),
        onChange: function onChange(event) {
          return onRowSelection(event, row);
        },
        checked: selectedRows[dataKey] === row[dataKey],
        name: "DataTable-row-radio"
      })) : ""), _columns === null || _columns === void 0 || (_columns$filter = _columns.filter(function (a) {
        return a.visible;
      })) === null || _columns$filter === void 0 ? void 0 : _columns$filter.map(function (_ref6, tbodyIndex) {
        var field = _ref6.field,
          filterType = _ref6.filterType,
          isLink = _ref6.isLink,
          width = _ref6.width;
        return /*#__PURE__*/_react["default"].createElement("td", {
          key: tbodyIndex,
          className: "table-data",
          style: {
            minWidth: width,
            width: width,
            maxWidth: width
          },
          onClick: function onClick() {
            return onCellClick(field, row);
          }
        }, /*#__PURE__*/_react["default"].createElement(_bodyTemplate["default"], {
          data: row[field],
          datatype: filterType,
          link: isLink
        }));
      }), (_columns === null || _columns === void 0 ? void 0 : _columns.length) > 0 && (actions === null || actions === void 0 ? void 0 : actions.map(function (a, key) {
        return /*#__PURE__*/_react["default"].createElement("td", {
          className: "action-template",
          key: key
        }, /*#__PURE__*/_react["default"].createElement("span", null, a.icon), /*#__PURE__*/_react["default"].createElement("span", {
          className: "action-label",
          style: {
            cursor: a.link ? "pointer" : "default"
          },
          onClick: function onClick() {
            return a.onClick(row);
          }
        }, a.label));
      }))), rowExpand[row[dataKey]] && /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        colSpan: (columns === null || columns === void 0 || (_columns$filter2 = columns.filter(function (a) {
          return a.visible;
        })) === null || _columns$filter2 === void 0 ? void 0 : _columns$filter2.length) + 2 || 5
      }, rowExpansionTemplate(row))));
    }) : /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
      className: "no-datatable",
      colSpan: 5
    }, /*#__PURE__*/_react["default"].createElement("h4", null, "No records found")));
  }, [data, _columns, actions, rowExpand]);
  var tableHead = (0, _react.useMemo)(function () {
    var _columns$filter3;
    return /*#__PURE__*/_react["default"].createElement("tr", null, rowxpansion ? /*#__PURE__*/_react["default"].createElement("th", null) : "", selectable && selectionMode === "checkbox" ? /*#__PURE__*/_react["default"].createElement("th", null, /*#__PURE__*/_react["default"].createElement("input", {
      className: "datatable-checkbox",
      type: "checkbox",
      style: {
        visibility: allRowSelection ? "" : "hidden"
      },
      id: "Datatable-header-checkbox",
      onChange: function onChange(event) {
        return onAllRowSelection(event, data);
      },
      checked: selectedRows.length === data.length,
      name: "Datatable-header-checkbox"
    })) : selectable && selectionMode === "radio" ? /*#__PURE__*/_react["default"].createElement("th", null) : "", _columns === null || _columns === void 0 || (_columns$filter3 = _columns.filter(function (a) {
      return a.visible;
    })) === null || _columns$filter3 === void 0 ? void 0 : _columns$filter3.map(function (_ref7, theadIndex) {
      var header = _ref7.header,
        field = _ref7.field,
        width = _ref7.width,
        filterType = _ref7.filterType;
      return /*#__PURE__*/_react["default"].createElement("th", {
        key: theadIndex,
        style: {
          minWidth: width,
          width: width,
          maxWidth: width,
          borderRight: "2px solid #fff"
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          verticalAlign: "middle"
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          whiteSpace: 'nowrap'
        }
      }, header), sortable && sortMode === "single" && /*#__PURE__*/_react["default"].createElement(_sorting["default"], {
        column: field,
        setSorting: setSorting,
        sorting: field === (sorting === null || sorting === void 0 ? void 0 : sorting.sortBy) ? sorting : null
      }), sortable && sortMode === "multi" && /*#__PURE__*/_react["default"].createElement(_multiSorting["default"], {
        column: field,
        setSorting: setSorting,
        sorting: sorting
      })), filterable && /*#__PURE__*/_react["default"].createElement(_columnFilter["default"], {
        datatype: filterType,
        clearFilter: clearFilter,
        applyFilter: applyFilter,
        column: field,
        matchModeSelected: matchModeSelected,
        setMatchModeSelected: function setMatchModeSelected(_data) {
          _setMatchModeSelected(_data);
        }
      })));
    }), (_columns === null || _columns === void 0 ? void 0 : _columns.length) > 0 && (actions === null || actions === void 0 ? void 0 : actions.map(function (a, key) {
      return /*#__PURE__*/_react["default"].createElement("th", {
        className: "action-header",
        style: {
          minWidth: a.width,
          width: a.width,
          maxWidth: a.width
        },
        key: key
      }, a === null || a === void 0 ? void 0 : a.header);
    })));
  }, [_columns, actions, matchModeSelected, data]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: scrollable ? "dataTable-parent_Freeze" : "dataTable-parent"
  }, /*#__PURE__*/_react["default"].createElement("table", {
    id: "datatable",
    className: scrollable ? "dataTable Header_freeze resizable-table" : "dataTable resizable-table",
    style: {
      display: (_columns === null || _columns === void 0 ? void 0 : _columns.length) > 0 ? 'table-cell' : "table"
    } //Added this condition for this style due to config issue
  }, /*#__PURE__*/_react["default"].createElement("thead", {
    className: "datatable-head-parent"
  }, tableHead), /*#__PURE__*/_react["default"].createElement("tbody", {
    className: "datatable-body-parent"
  }, loading ? /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    style: {
      padding: '0 !important'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "absolute",
      backgroundColor: "rgba(0,0,0,0.5)",
      height: "calc(110vh - 258px)",
      width: "100%",
      top: 0,
      left: 0
    },
    className: "flex justify-content-center flex-column align-items-center loader-empty-message"
  }, /*#__PURE__*/_react["default"].createElement(_progressLoader["default"], {
    message: "Loading..."
  })))) : status === "error" ? /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    style: {
      padding: '0 !important'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "absolute",
      height: "calc(110vh - 258px)",
      width: "100%",
      top: 0,
      left: 0
    },
    className: "flex justify-content-center flex-column align-items-center loader-empty-message"
  }, /*#__PURE__*/_react["default"].createElement(_ErrorDetailMessage["default"], {
    title: error.error,
    subTitle: error.message
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "filter-footer-button",
    onClick: refetch
  }, "Refetch")))) : tableBody), infinitescroll && /*#__PURE__*/_react["default"].createElement("tfoot", {
    ref: tableFootRef
  }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    colSpan: 7
  }, (data === null || data === void 0 ? void 0 : data.length) > 0 && showcustomLoader && totalRecords !== data.length && /*#__PURE__*/_react["default"].createElement(_progressLoader["default"], null))))));
}
var _default = DTable;
exports["default"] = _default;