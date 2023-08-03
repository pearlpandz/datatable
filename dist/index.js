"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _components = _interopRequireDefault(require("./components"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Custom components

function DataTable(props) {
  var _props$data = props.data,
    data = _props$data === void 0 ? [] : _props$data,
    _props$dataKey = props.dataKey,
    dataKey = _props$dataKey === void 0 ? "id" : _props$dataKey,
    _props$columns = props.columns,
    columns = _props$columns === void 0 ? [] : _props$columns,
    _props$sorting = props.sorting,
    sorting = _props$sorting === void 0 ? [] : _props$sorting,
    setSorting = props.setSorting,
    _props$sortable = props.sortable,
    sortable = _props$sortable === void 0 ? false : _props$sortable,
    _props$sortmode = props.sortmode,
    sortmode = _props$sortmode === void 0 ? "single" : _props$sortmode,
    setFilters = props.setFilters,
    filters = props.filters,
    _props$filterable = props.filterable,
    filterable = _props$filterable === void 0 ? false : _props$filterable,
    _props$totalRecords = props.totalRecords,
    totalRecords = _props$totalRecords === void 0 ? 0 : _props$totalRecords,
    _props$rows = props.rows,
    rows = _props$rows === void 0 ? 25 : _props$rows,
    _props$pageNo = props.pageNo,
    pageNo = _props$pageNo === void 0 ? 0 : _props$pageNo,
    setPageNo = props.setPageNo,
    setRows = props.setRows,
    _props$scrollable = props.scrollable,
    scrollable = _props$scrollable === void 0 ? false : _props$scrollable,
    mainAllTab = props.mainAllTab,
    error = props.error,
    status = props.status,
    refetch = props.refetch,
    _props$actions = props.actions,
    actions = _props$actions === void 0 ? [] : _props$actions,
    _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    onCellClick = props.onCellClick,
    onColumnResizeEnd = props.onColumnResizeEnd,
    selectedMode = props.selectedMode,
    onRowSelection = props.onRowSelection,
    _props$selectedRows = props.selectedRows,
    selectedRows = _props$selectedRows === void 0 ? [] : _props$selectedRows,
    onAllRowSelection = props.onAllRowSelection,
    _props$infinitescroll = props.infinitescroll,
    infinitescroll = _props$infinitescroll === void 0 ? false : _props$infinitescroll,
    infiniteChange = props.infiniteChange,
    showcustomLoader = props.showcustomLoader,
    setShowCustomLoader = props.setShowCustomLoader,
    _props$resizableColum = props.resizableColumns,
    resizableColumns = _props$resizableColum === void 0 ? false : _props$resizableColum,
    _props$allRowSelectio = props.allRowSelection,
    allRowSelection = _props$allRowSelectio === void 0 ? false : _props$allRowSelectio,
    _props$selectable = props.selectable,
    selectable = _props$selectable === void 0 ? false : _props$selectable,
    _props$selectionMode = props.selectionMode,
    selectionMode = _props$selectionMode === void 0 ? "checkbox" : _props$selectionMode;
  var onPageChange = function onPageChange(event) {
    setPageNo(event.page);
    setRows(event.rows);
  };
  var updateFilters = function updateFilters(field, value) {
    setPageNo(0);
    var _filters = structuredClone(filters); //Changed this from const to let
    _filters[field] = value;
    setFilters(_filters);
  };

  // Added this for clear filters as adding null directly made page go blank
  var updateClearFilters = function updateClearFilters(field, value) {
    setPageNo(0);
    var _filters = structuredClone(filters);
    _filters[field] = value;
    setFilters(_filters);
  };

  // Commented it out but it would be additional functionality we can provide via props if needed
  // const scrollLeft = () => {
  //   document.getElementById('dataTable-parent_Freeze').scrollLeft -= 100
  // }

  // const scrollRight = () => {
  //   document.getElementById('dataTable-parent_Freeze').scrollLeft += 100
  // }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      transform: "scale(1)"
    }
  }, /*#__PURE__*/_react["default"].createElement(_components["default"], {
    dataKey: dataKey,
    data: data,
    columns: columns,
    setSorting: setSorting,
    sorting: sorting,
    sortable: sortable,
    sortMode: sortmode,
    resizableColumns: resizableColumns,
    scrollable: scrollable,
    filterable: filterable,
    setFilters: setFilters,
    filters: filters,
    applyFilter: updateFilters,
    clearFilter: updateClearFilters,
    actions: actions,
    onCellClick: onCellClick,
    loading: loading,
    status: status,
    error: error,
    refetch: refetch,
    onColumnResizeEnd: onColumnResizeEnd,
    selectedMode: selectedMode,
    mainAllTab: mainAllTab,
    onRowSelection: onRowSelection,
    selectedRows: selectedRows,
    onAllRowSelection: onAllRowSelection,
    infinitescroll: infinitescroll,
    infiniteChange: infiniteChange,
    totalRecords: totalRecords,
    showcustomLoader: showcustomLoader,
    setShowCustomLoader: setShowCustomLoader,
    allRowSelection: allRowSelection,
    selectionMode: selectionMode,
    selectable: selectable
  }));
}
DataTable.propTypes = {
  data: _propTypes["default"].array,
  dataKey: _propTypes["default"].string,
  columns: _propTypes["default"].array,
  sorting: _propTypes["default"].any,
  setSorting: _propTypes["default"].func,
  setFilters: _propTypes["default"].func,
  filters: _propTypes["default"].object,
  totalRecords: _propTypes["default"].number,
  rows: _propTypes["default"].number,
  pageNo: _propTypes["default"].number,
  setPageNo: _propTypes["default"].func,
  setRows: _propTypes["default"].func,
  mainAllTab: _propTypes["default"].bool,
  error: _propTypes["default"].any,
  status: _propTypes["default"].any,
  refetch: _propTypes["default"].func,
  actions: _propTypes["default"].any,
  loading: _propTypes["default"].bool,
  onCellClick: _propTypes["default"].func,
  onColumnResizeEnd: _propTypes["default"].func,
  selectedMode: _propTypes["default"].any,
  onRowSelection: _propTypes["default"].func,
  selectedRows: _propTypes["default"].any,
  onAllRowSelection: _propTypes["default"].func,
  sortable: _propTypes["default"].bool,
  sortMode: _propTypes["default"].string,
  sortmode: _propTypes["default"].string,
  infinitescroll: _propTypes["default"].bool,
  infiniteChange: _propTypes["default"].func,
  showcustomLoader: _propTypes["default"].bool,
  setShowCustomLoader: _propTypes["default"].func,
  filterable: _propTypes["default"].bool,
  scrollable: _propTypes["default"].bool,
  resizableColumns: _propTypes["default"].bool,
  allRowSelection: _propTypes["default"].bool,
  selectable: _propTypes["default"].bool,
  selectionMode: _propTypes["default"].string
};
var _default = DataTable;
exports["default"] = _default;