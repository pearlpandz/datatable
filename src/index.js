import React from 'react'
import PropTypes from 'prop-types';

// Custom components
import DTable from './components'

function DataTable(props) {
  const {
    data = [],
    dataKey = "id",
    columns = [],
    sorting = [],
    setSorting,
    sortable = false,
    sortmode = "single",
    setFilters,
    filters,
    filterable = false,
    totalRecords = 0,
    rows = 25,
    pageNo = 0,
    setPageNo,
    setRows,
    scrollable = false,
    mainAllTab,
    error,
    status,
    refetch,
    actions = [],
    loading = false,
    onCellClick,
    onColumnResizeEnd,
    selectedMode,
    onRowSelection,
    selectedRows = [],
    onAllRowSelection,
    infinitescroll = false,
    infiniteChange,
    showcustomLoader,
    setShowCustomLoader,
    resizableColumns = false,
    allRowSelection = false,
    selectable = false,
    selectionMode = "checkbox",
  } = props

  const onPageChange = (event) => {
    setPageNo(event.page);
    setRows(event.rows);
  };

  const updateFilters = (field, value) => {
    setPageNo(0);
    let _filters = structuredClone(filters); //Changed this from const to let
    _filters[field] = value;
    setFilters(_filters);
  };

  // Added this for clear filters as adding null directly made page go blank
  const updateClearFilters = (field, value) => {
    setPageNo(0);
    let _filters = structuredClone(filters);
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

  return (
    <div style={{ transform: "scale(1)" }}>
      {/* <div>
        <span className='pi pi-arrow-left' style={{ position: "absolute", top: "45%", left: "0", cursor: "pointer", zIndex: "1", fontSize: "30px" }} onClick={() => scrollLeft()} />
        <span className='pi pi-arrow-right' style={{ position: "absolute", top: "45%", right: "0", cursor: "pointer", zIndex: "1", fontSize: "30px" }} onClick={() => scrollRight()} />
      </div> */}
      <DTable
        dataKey={dataKey}
        data={data}
        columns={columns}
        setSorting={setSorting}
        sorting={sorting}
        sortable={sortable}
        sortMode={sortmode}
        resizableColumns={resizableColumns}
        scrollable={scrollable}
        filterable={filterable}
        setFilters={setFilters}
        filters={filters}
        applyFilter={updateFilters}
        clearFilter={updateClearFilters}
        actions={actions}
        onCellClick={onCellClick}
        loading={loading} 
        status={status}
        error={error}
        refetch={refetch}
        onColumnResizeEnd={onColumnResizeEnd}
        selectedMode={selectedMode}
        mainAllTab={mainAllTab}
        onRowSelection={onRowSelection}
        selectedRows={selectedRows}
        onAllRowSelection={onAllRowSelection}
        infinitescroll={infinitescroll}
        infiniteChange={infiniteChange}
        totalRecords={totalRecords}
        showcustomLoader={showcustomLoader}
        setShowCustomLoader={setShowCustomLoader}
        allRowSelection={allRowSelection}
        selectionMode={selectionMode}
        selectable={selectable}
      />
      {/* <Paginator
        first={pageNo * rows}
        rows={rows}
        // Added this because as backend is not supporting more than 10k records so restricting user to navigate upto 10k results only
        // If total records is less than 10k then according to totalrecords pagination will act
        // So if total record is more than 10k for 25 rows per page last page is 400 and 50 rows per page last page is 200 and for 100 rows per page last page will be 100
        totalRecords={totalRecords > 10000 ? 10000 : totalRecords}
        onPageChange={onPageChange}
        className="justify-content-end"
        // Removed navigating to first page and last page of application by clicking arrow (First page link and last page link)
        template={{
          layout:
            "RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink",
          RowsPerPageDropdown: (options) => {
            const dropdownOptions = [25, 50, 100];
            return (
              <div className="datatable-page-records">
                <span>Show records per page</span>
                <Dropdown
                  value={options.value}
                  options={dropdownOptions}
                  onChange={options.onChange}
                />
              </div>
            );
          },
          CurrentPageReport: () => {
            return (
              <div className="page-reports">
                <span>{totalRecords} records found</span>
              </div>
            );
          },
        }}
      /> */}
    </div>

  )
}

DataTable.propTypes = {
  data: PropTypes.array,
  dataKey: PropTypes.string,
  columns: PropTypes.array,
  sorting: PropTypes.any,
  setSorting: PropTypes.func,
  setFilters: PropTypes.func,
  filters: PropTypes.object,
  totalRecords: PropTypes.number,
  rows: PropTypes.number,
  pageNo: PropTypes.number,
  setPageNo: PropTypes.func,
  setRows: PropTypes.func,
  mainAllTab: PropTypes.bool,
  error: PropTypes.any,
  status: PropTypes.any,
  refetch: PropTypes.func,
  actions: PropTypes.any,
  loading: PropTypes.bool,
  onCellClick: PropTypes.func,
  onColumnResizeEnd: PropTypes.func,
  selectedMode: PropTypes.any,
  onRowSelection: PropTypes.func,
  selectedRows: PropTypes.any,
  onAllRowSelection: PropTypes.func,
  sortable: PropTypes.bool,
  sortMode: PropTypes.string,
  sortmode: PropTypes.string,
  infinitescroll: PropTypes.bool,
  infiniteChange: PropTypes.func,
  showcustomLoader:PropTypes.bool,
  setShowCustomLoader:PropTypes.func,
  filterable:PropTypes.bool,
  scrollable:PropTypes.bool,
  resizableColumns:PropTypes.bool,
  allRowSelection:PropTypes.bool,
  selectable:PropTypes.bool,
  selectionMode:PropTypes.string,
};

export default DataTable