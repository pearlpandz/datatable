import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react'

// Custom Components
import { BOOLEAN_MATCH_MODE, DATE_MATCH_MODE, NUM_MATCH_MODE, OPERATOR, STR_MATCH_MODE } from './constant';
import DateFilter from './DateFilter';

// Utils
import { generateUID } from './utils';

// Styles
import './columnFilter.css'

// Assets
import dropdownIcon from '../assets/down-arrow.png'
import filter from '../assets/filter.png';
import deleteIcon from '../assets/delete.png';

function TablecolumnFilter(props) {
    const { datatype, applyFilter, clearFilter, column, matchModeSelected = [], setMatchModeSelected } = props;
    const wrapperRef = useRef();
    const operatorRef = useRef();
    const matchModeRef = useRef();
    const [show, setShow] = useState(false);
    const [showOperator, setShowoperator] = useState(false);
    const [showMatchMode, setShowMatchMode] = useState(false);
    const [dataTypeMode, setDataTypeMode] = useState([]);
    const [page, setPage] = useState(null);
    const [operatorSelected, setOperatorselected] = useState({
        label: "Match All",
        value: "AND"
    })

    // Default matchmodes which will be used while adding the rule or while clearing the filter
    // Basically this and useEffect on parent or kinda same
    const matchModes = useMemo(() => {
        switch (datatype) {
            case 'date':
                return {
                    id: generateUID(),
                    matchMode: "dateIs",
                    query: null,
                    column
                }

            case 'number':
                return {
                    id: generateUID(),
                    matchMode: "equals",
                    query: '',
                    column
                }
            case 'boolean':
                return {
                    id: generateUID(),
                    matchMode: "equals",
                    query: 'yes',
                    column
                }
            default:
                return {
                    id: generateUID(),
                    matchMode: "contains",
                    query: '',
                    column
                }
        }
    }, [datatype, column])

    // Need to find different solution for col filter highlight while applied
    // const { column_filters } = useSelector(state => state.query);
    // const isFiltered = column_filters[column]?.constraints?.[0]?.value || false;

    // To hide col filter when clicked outside
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
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
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]); //isFiltered
    };

    useOutsideAlerter(wrapperRef);

    // To show col filter
    const showColumnFilter = (event) => {
        setShow(!show)
    }

    // To set options in dropdown 
    useEffect(() => {
        if (datatype === "text") {
            setDataTypeMode(STR_MATCH_MODE)
        }
        else if (datatype === "number") {
            setDataTypeMode(NUM_MATCH_MODE)
        }
        else if (datatype === "date") {
            setDataTypeMode(DATE_MATCH_MODE)
        }
        else if (datatype === "boolean") {
            setDataTypeMode(BOOLEAN_MATCH_MODE)
        }
    }, [datatype, column])

    // To type the input in input box
    const InputString = (event, id, dataType) => {
        const _matchModeSelected = structuredClone(matchModeSelected);
        const item = _matchModeSelected.find(a => a.id === id);
        item.query = dataType === "text" ? event.target.value : dataType === "number" ? event.target.value.replace(new RegExp(/[^\d]/, 'ig'), "") : event;
        setMatchModeSelected(_matchModeSelected);
    }


    const Inputbox = (value, id) => {
        if (datatype === "number") {
            return <input type="text" value={value} onChange={(event) => InputString(event, id, "number")} className='filter-input-text' onKeyDown={handleKeyDown} />
        }
        else if (datatype === "date") {
            return <DateFilter onChange={(event) => { InputString(event, id, "date") }} value={value} />
        }
        else {
            return <input type="text" value={value} onChange={(event) => { InputString(event, id, "text") }} className='filter-input-text' onKeyDown={handleKeyDown} />
        }
    };

    // To select option from match all/any dropdown 
    const selectOperatorMode = (event, option) => {
        setOperatorselected(option);
        setShowoperator(false);
    }

    // To select option from 2nd dropdown 
    const selectMatchMode = (option, id) => {
        const _matchModeSelected = structuredClone(matchModeSelected);
        const item = _matchModeSelected.find(a => a.id === id)
        item.matchMode = option.value;
        setMatchModeSelected(_matchModeSelected);
        setShowMatchMode(false);
    }

    // To show and hide match all and any dropdown
    const showOperatorDrop = () => {
        setShowoperator(!showOperator);
    }

    // To show and hide 2nd dropdown
    const showMatchDrop = () => {
        setShowoperator(false);
        setShowMatchMode(!showMatchMode);
    }

    // While applying col filter
    let columnFilter = () => {
        setShow(false);
        setShowMatchMode(false);
        setShowoperator(false);
        return {
            "operator": operatorSelected.value,
            "constraints": matchModeSelected?.filter(a => a.column === column)?.map(item => ({
                "value": item.query,
                "matchMode": item.matchMode,
            }))
        }
    };

    // While clearing col filter
    const emptyFilter = () => {
        setShow(false);
        setShowMatchMode(false);
        setShowoperator(false);
        const _finalMatchmode = [];
        let originalMatchmodeslected = structuredClone(matchModeSelected);
        const _matchModeSelected = matchModeSelected?.filter((a) => a.column === column)?.map(a => ({
            id: generateUID(),
            matchMode: datatype === "text" ? "contains" : datatype === "date" ? "dateIs" : "equals",
            query: datatype === "text" ? "" : datatype === "date" ? null : datatype === "number" ? "" : "yes",
            column: a.column
        }))?.[0];
        let clonedMatchmode = structuredClone([_matchModeSelected]);
        originalMatchmodeslected?.forEach((a) => {
            let index = clonedMatchmode?.findIndex((b) => a.column === b.column);
            if (index === -1) {
                _finalMatchmode?.push(a);
            }
        });
        let final = [..._finalMatchmode, ...clonedMatchmode];
        setMatchModeSelected(final);
        return {
            "operator": 'AND',
            "constraints": [matchModes]
        }
    }

    // Apply col filter by clicking enter
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            applyFilter(column, columnFilter())
        }
    }

    // 2nd dropdown and remove rule
    const multiSelectionSection = useMemo(() => (
        <div className='Multi-section'>
            {
                matchModeSelected
                    ?.filter(a => a.column === column)
                    ?.map(({ query, matchMode, id }) => (
                        <Fragment key={id}>
                            <div className='section-alignment'>
                                <div className="Matchmode-Section">
                                    {
                                        datatype !== 'boolean' &&
                                        <div className='custom-dropdown'>
                                            <div ref={matchModeRef} onClick={() => showMatchDrop()} className="dropdown-input">
                                                <div className="dropdown-selected-value">{dataTypeMode.find(a => a.value === matchMode)?.label}</div>
                                                <div className="dropdown-tools">
                                                    <div className="dropdown-tool">
                                                        <img src={dropdownIcon} alt="dropdown" className='dropdown-Icon' />
                                                    </div>
                                                </div>
                                            </div>

                                            {showMatchMode &&
                                                <div className="dropdown-menu">
                                                    {dataTypeMode.map((option) => (
                                                        <div className={matchMode === option.value ? " option-label selected" : "option-label"} key={option.value} onClick={() => selectMatchMode(option, id)}>
                                                            <span>{option.label}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>

                                {
                                    datatype !== 'boolean' ? Inputbox(query, id) : (
                                        <div className='custom-dropdown'>
                                            <div ref={matchModeRef} onClick={() => showMatchDrop()} className="dropdown-input">
                                                <div className="dropdown-selected-value">{BOOLEAN_MATCH_MODE.find(a => a.value === matchModeSelected.find(a => a.id === id)?.query)?.label}</div>
                                                <div className="dropdown-tools">
                                                    <div className="dropdown-tool">
                                                        <img src={dropdownIcon} alt="dropdown" className='dropdown-Icon' />
                                                    </div>
                                                </div>
                                            </div>
                                            {showMatchMode &&
                                                <div className="dropdown-menu">
                                                    {
                                                        BOOLEAN_MATCH_MODE.map((option) => (
                                                            <div className={matchModeSelected.find(a => a.id === id)?.query === option.value ? " option-label selected" : "option-label"} key={option.label} onClick={() => {
                                                                const _matchModeSelected = structuredClone(matchModeSelected);
                                                                const item = _matchModeSelected.find(a => a.id === id);
                                                                item.query = option.value;
                                                                setMatchModeSelected(_matchModeSelected);
                                                                setShowMatchMode(false)
                                                            }}>
                                                                <span>{option.label}</span>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            }
                                        </div>
                                    )
                                }
                            </div>

                            {matchModeSelected?.filter((a) => a?.column === column)?.length > 1 &&
                                <div className='section-alignment'>
                                    <button className='remove-rule' type='button' onClick={() => {
                                        const _matchModeSelected = structuredClone(matchModeSelected);
                                        const index = _matchModeSelected.findIndex(a => a.id === id);
                                        _matchModeSelected.splice(index, 1)
                                        setMatchModeSelected(_matchModeSelected);
                                    }}>
                                        <span className='remove-icon'><img src={deleteIcon} alt="remove" style={{ height: "15px", width: "15px" }} /></span>
                                        <span>Remove Rule</span>
                                    </button>
                                </div>
                            }
                        </Fragment>
                    ))
            }
        </div>
    ), [matchModeSelected, showMatchMode, showOperator, dataTypeMode])

    return (
        <div className='column-filter-main' ref={wrapperRef}>
            <span className='filter-icon-section' id="filter-icon" onClick={(event) => {
                const elem = event.target.parentNode;
                const elemRect = elem.getBoundingClientRect();

                // temp - only for btx-search project
                const sidebar = document.getElementById('sidebar');

                setPage({
                    pageX: elemRect.left - (sidebar?.offsetWidth || 0),
                    pageY: elemRect.top
                })
                showColumnFilter(event);
            }} >
                {/* //isFiltered ? 'filter-icon active' : 'filter-icon' --- need to use this condition in below className */} 
                <img src={filter} alt="col_Filter" className='filter-icon' /></span>
            {
                <div className='filter-dropdown' style={{
                    position: 'fixed',
                    display: show ? "block" : 'none',
                    // left: page?.pageX,
                    top: 40,
                    height: datatype !== "boolean" ? "250px" : "auto"
                }}>
                    {/* Match all/any dropdown */}
                    <div className='operator-dropdown-section'>
                        <div className='custom-dropdown'>
                            <div ref={operatorRef} onClick={() => showOperatorDrop()} className="dropdown-input">
                                <div className="dropdown-selected-value">{operatorSelected.label}</div>
                                <div className="dropdown-tools">
                                    <div className="dropdown-tool">
                                        <img src={dropdownIcon} alt="dropdown" className='dropdown-Icon' />
                                    </div>
                                </div>
                            </div>
                            {showOperator &&
                                <div className="dropdown-menu">
                                    {OPERATOR.map((option) => (
                                        <div className={operatorSelected.value === option.value ? " option-label selected" : "option-label"} onClick={(event) => selectOperatorMode(event, option)} key={option.value}>
                                            <span>{option.label}</span>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>

                    {multiSelectionSection}

                    {/* Add rule section and not needed for boolean as it won't make sense */}
                    {datatype !== 'boolean' &&
                        <div className='section-alignment'>
                            <button className='add-rule' onClick={() => {
                                setMatchModeSelected([...matchModeSelected, { ...matchModes, id: generateUID() }])
                            }} type='button'>
                                <span>+</span>
                                <span>Add Rule</span>
                            </button>
                        </div>
                    }

                    {/* Apply and clear filter section */}
                    <div className='column-footer-buttons'>
                        <button className='filter-footer-button' type='button' onClick={() => clearFilter(column, emptyFilter())}>Clear</button>
                        <button className='filter-footer-button primary' onClick={() => applyFilter(column, columnFilter())}> Apply</button>
                    </div>
                </div>
            }
        </div >
    )
}

export default TablecolumnFilter