/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, Fragment, useMemo, useRef, useCallback } from 'react'

// Custom Components
import BodyTemplate from './bodyTemplate';
import Sorting from './sorting';
import TablecolumnFilter from './columnFilter';
import MultiSorting from './multiSorting';
import ProgressLoader from './progressLoader';
import ErrorDetail from './ErrorDetailMessage';

// Utils
import { generateUID } from './utils';

// Styles
import './index.css'
import './bodyTemplate.css'

function DTable(props) {
  const {
    columns,
    data,
    sorting,
    setSorting,
    sortable,
    sortMode,
    resizableColumns,
    filterable,
    applyFilter,
    clearFilter,
    scrollable,
    actions,
    loading,
    error,
    status,
    refetch,
    selectedMode,
    rowxpansion,
    onColumnResizeEnd, // whenever user resizing the column, will send back the field & updated columns
    onCellClick, // whenever user click the specific cell, will send back the field & the entire row data
    mainAllTab,
    selectable,
    selectionMode,
    allRowSelection, //To eanble selection of all rows (giving option of checkbox at table header which will select all rows in the page)
    onRowSelection,
    selectedRows,
    onAllRowSelection,
    dataKey,
    infinitescroll,
    infiniteChange,
    totalRecords,
    rowExpansionTemplate,
    filters,
  } = props

  const tableFootRef = useRef();
  const [tempWidth, setTemp] = useState("");
  const [_columns, setColumns] = useState(columns);
  const [colResize, setColResize] = useState(null);
  const [rowExpand, setRowExpand] = useState({});
  const [showcustomLoader, setShowCustomLoader] = useState(false);

  // To maintain the matchmode during at first time for column filter
  const defaultmatchmode = () => {
    const _matchModeSelected = []
    columns?.forEach((column) => {
      const defaultValue = filters[column.field]?.constraints
      switch (column.filterType) {
        case 'date': {
          defaultValue?.forEach(({ matchMode, value }) => {
            _matchModeSelected.push({
              id: generateUID(),
              matchMode: matchMode || "dateIs",
              query: value || null,
              column: column.field
            })
          })
          break;
        }
        case 'number': {
          defaultValue?.forEach(({ matchMode, value }) => {
            _matchModeSelected.push({
              id: generateUID(),
              matchMode: matchMode || "equals",
              query: value || "",
              column: column.field
            })
          })
          break;
        }
        case 'boolean': {
          defaultValue?.forEach(({ matchMode }) => {
            _matchModeSelected.push({
              id: generateUID(),
              matchMode: matchMode || "equals",
              query: "true",
              column: column.field
            })
          })
          break;
        }
        default: {
          defaultValue?.forEach(({ matchMode, value }) => {
            _matchModeSelected.push({
              id: generateUID(),
              matchMode: matchMode || "contains",
              query: value || "",
              column: column.field
            })
          })
          break;
        }
      }
    })
    return _matchModeSelected;
};

  const [matchModeSelected, setMatchModeSelected] = useState(defaultmatchmode());

  // To maintain columns during reorder orhide/show
  useEffect(() => {
    // To get the columns if they are hidden or re-ordered
    setColumns(columns);
    // To render the col filter for that particular column
    let _matchModeSelected = structuredClone(matchModeSelected);
    setMatchModeSelected(_matchModeSelected);
  }, [columns]);

  // Added this useEffect to trigger cleanup of col filter while switching between on mode to other
  // Applicable only for historical . Selectedmode and mainalltab is sent as an props from the parent
  // Need to make this in an generic way for all applications if there is any mode changes then filter needs to be removed
  // Basically if no filter is applied it should have a default value
  useEffect(() => {
    const _matchModeSelected = []
    columns?.forEach((column) => {
      switch (column.filterType) {
        case 'date': {
          _matchModeSelected.push({
            id: generateUID(),
            matchMode: "dateIs",
            query: null,
            column: column.field,
          })
          break;
        }
        case 'number': {
          _matchModeSelected.push({
            id: generateUID(),
            matchMode: "equals",
            query: "",
            column: column.field
          })
          break;
        }
        case 'boolean': {
          _matchModeSelected.push({
            id: generateUID(),
            matchMode: "equals",
            query: 'yes',
            column: column.field
          })
          break;
        }
        default: {
          _matchModeSelected.push({
            id: generateUID(),
            matchMode: "contains",
            query: '',
            column: column.field
          })
          break;
        }
      }
    })
    setMatchModeSelected(_matchModeSelected);
  }, [selectedMode, mainAllTab])

  let columnTempWidth = '';
  let tempField = '';

  useEffect(() => {
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
        })

        div.addEventListener('mouseout', function (e) {

          e.target.style.borderRight = '';
        })

        document.addEventListener('mousemove', function (e) {
          if (curCol) {
            var diffX = e.pageX - pageX;

            // if (nxtCol)
            //nxtCol.style.width = (nxtColWidth - (diffX)) + 'px'

            tempField = curCol.innerText;
            columnTempWidth = (curColWidth + diffX) < 250 ? 250 : (curColWidth + diffX);
            setTemp(columnTempWidth);
            curCol.style.width = columnTempWidth + 'px';
            curCol.style.minWidth = columnTempWidth + 'px';
            curCol.style.maxWidth = columnTempWidth + 'px';
            document.getElementById('datatable').style.width = tableWidth + diffX + "px"
          }
        });

        document.addEventListener('mouseup', function (e) {
          setColResize({ field: tempField, width: columnTempWidth })
          curCol = undefined;
          nxtCol = undefined;
          pageX = undefined;
          nxtColWidth = undefined;
          curColWidth = undefined
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
        return (parseInt(padLeft) + parseInt(padRight));

      }

      function getStyleVal(elm, css) {
        return (window.getComputedStyle(elm, null).getPropertyValue(css))
      }
    }

  }, [_columns])


  // For column resize storage in api added debounce to avoid multiple api calls during column resize
  useEffect(() => {
    if (resizableColumns) {
      if (colResize?.width && colResize?.field) {
        const getData = setTimeout(async () => {
          await onColumnResizeEnd(colResize);
        }, 1000);
        return () => clearTimeout(getData);
      }
    }

  }, [colResize])

  const handleIntersect = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        infiniteChange();
        setShowCustomLoader(true);
      }
    });
  }, []);

  useEffect(() => {
    if (!tableFootRef.current) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.8, //Making it as 0.8 rather than 0 show atleast somepart of px to appear rather as 0 will trigger as soon as some px is visible
    });

    //To observe the place where the change needed for infinite scroll to work
    observer.observe(tableFootRef.current);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersect]);


  const expandRow = (event, id) => {

    if (event.target.className.includes('expanded')) {
      // take action :: collapse 
      event.target.style.transform = 'rotate(0deg)'
      event.target.classList.remove('expanded');

      const keys = Object.keys(rowExpand);
      const index = keys.findIndex(a => a === String(id))
      if (index > -1) {
        let _rowExpand = structuredClone(rowExpand);
        delete _rowExpand[keys[index]?.toString()];
        setRowExpand({ ..._rowExpand })
      }
    } else {
      // take action :: expand 
      event.target.style.transform = 'rotate(90deg)'
      event.target.classList.add('expanded');
      setRowExpand({ ...rowExpand, [id]: true });

    }
  }

  const tableBody = useMemo(() => (
    data.length > 0 ? data?.map((row, rowIndex) => {
      return <Fragment key={rowIndex}>
        <tr key={`row-${rowIndex}`} id={`row-${rowIndex}`} style={{ overflow: 'hidden' }}>
          {rowxpansion ? <td><button onClick={(event) => expandRow(event, `row-${rowIndex}`)}>&#8250;</button></td> : ""}
          {
            selectable &&
            (
              (selectionMode === "checkbox") ?
                <td>
                  <input
                    className='datatable-checkbox'
                    type="checkbox"
                    id={`row-${rowIndex}`}
                    onChange={(event) => onRowSelection(event, row)}
                    checked={selectedRows.findIndex(a => a[dataKey] === row[dataKey]) > -1}
                    name="DataTable-row-checkbox"
                  />
                </td> :
                (selectionMode === "radio") ?
                  <td>
                    <input
                      className='datatable-radio'
                      type="radio"
                      id={`row-${rowIndex}`}
                      onChange={(event) => onRowSelection(event, row)}
                      checked={selectedRows[dataKey] === row[dataKey]}
                      name="DataTable-row-radio"
                    />
                  </td> : ""
            )
          }
          {
            _columns?.filter(a => a.visible)?.map(({ field, filterType, isLink, width }, tbodyIndex) => {
              return (
                <td key={tbodyIndex} className='table-data' style={{ minWidth: width, width: width, maxWidth: width }} onClick={() => {
                  if(onCellClick) {
                    onCellClick(field, row)
                  }
                }}>
                  <BodyTemplate data={row[field]} datatype={filterType} link={isLink} />
                </td>
              );
            })
          }
          {_columns?.length > 0 && actions?.map((a, key) => (
            <td className='action-template' key={key}>
              <span>{a.icon}</span>
              <span className='action-label' style={{ cursor: a.link ? "pointer" : "default" }} onClick={() => a.onClick(row)}>{a.label}</span>
            </td>
          ))}
        </tr>
        {
          rowExpand[row[dataKey]] &&
          <tr>
            <td colSpan={columns?.filter(a => a.visible)?.length + 2 || 5}>
              {rowExpansionTemplate(row)}
            </td>
          </tr>
        }
      </Fragment>
    }) :
      <tr>
        <td className='no-datatable' colSpan={5}>
          <h4>No records found</h4>
        </td>
      </tr>
  ), [data, _columns, actions, rowExpand])

  const tableHead = useMemo(() => {
    return <tr>
      {rowxpansion ? <th></th> : ""}
      {
        (selectable && selectionMode === "checkbox") ?
          <th>
            <input
              className='datatable-checkbox'
              type="checkbox"
              style={{ visibility: allRowSelection ? "" : "hidden" }}
              id="Datatable-header-checkbox"
              onChange={(event) => onAllRowSelection(event, data)}
              checked={selectedRows.length === data.length}
              name="Datatable-header-checkbox" />
          </th> :
          (selectable && selectionMode === "radio") ?
            <th></th>
            : ""
      }
      {_columns
        ?.filter(a => a.visible)
        ?.map(({ header, field, width, filterType }, theadIndex) => (
          <th key={theadIndex} style={{ minWidth: width, width: width, maxWidth: width, borderRight: "2px solid #fff" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", verticalAlign: "middle" }}>
              <div style={{ display: 'flex' }}>
                <span style={{ whiteSpace: 'nowrap' }}>{header}</span>
                {sortable && sortMode === "single" && <Sorting column={field} setSorting={setSorting} sorting={field === sorting?.sortBy ? sorting : null} />}
                {sortable && sortMode === "multi" && <MultiSorting column={field} setSorting={setSorting} sorting={sorting} />}
              </div>
              {filterable && <TablecolumnFilter
                datatype={filterType}
                clearFilter={clearFilter}
                applyFilter={applyFilter}
                column={field}
                matchModeSelected={matchModeSelected}
                setMatchModeSelected={(_data) => { setMatchModeSelected(_data) }}
              />}
            </div>
          </th>
        ))}
      {_columns?.length > 0 && actions?.map((a, key) => (
        <th className='action-header' style={{ minWidth: a.width, width: a.width, maxWidth: a.width }} key={key}>{a?.header}</th>
      ))}
    </tr>
  }, [_columns, actions, matchModeSelected, data])

  return (
    <div id={scrollable ? "dataTable-parent_Freeze" : "dataTable-parent"}>
      <table id="datatable" className={scrollable ? "dataTable Header_freeze resizable-table" : "dataTable resizable-table"}
        style={{ display: _columns?.length > 0 ? 'table-cell' : "table" }} //Added this condition for this style due to config issue
      >
        <thead className='datatable-head-parent'>{tableHead}</thead>
        <tbody className='datatable-body-parent'>
          {
            (loading) ?
              <tr >
                <td style={{ padding: '0 !important' }}>
                  <div
                    style={{
                      position: "absolute",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      height: "calc(110vh - 258px)",
                      width: "100%",
                      top: 0,
                      left: 0
                    }} className='flex justify-content-center flex-column align-items-center loader-empty-message'>
                    <ProgressLoader message='Loading...' />
                  </div>
                </td>
              </tr>
              :
              (status === "error") ?
                <tr >
                  <td style={{ padding: '0 !important' }}>
                    <div
                      style={{
                        position: "absolute",
                        height: "calc(110vh - 258px)",
                        width: "100%",
                        top: 0,
                        left: 0
                      }} className='flex justify-content-center flex-column align-items-center loader-empty-message'>
                      <ErrorDetail title={error.error} subTitle={error.message} />
                      <button className='filter-footer-button' onClick={refetch}>Refetch</button>
                    </div>
                  </td>
                </tr>
                : tableBody
          }
        </tbody>
        {infinitescroll &&
          <tfoot ref={tableFootRef}>
            <tr>
              <td colSpan={7}>
                {data?.length > 0 && showcustomLoader && totalRecords !== data.length &&
                  <ProgressLoader />
                }
              </td>
            </tr>
          </tfoot>
        }
      </table>
    </div>
  )
}

export default DTable
