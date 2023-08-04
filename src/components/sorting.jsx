/* eslint-disable react/prop-types */
import React, { Fragment, useMemo } from 'react'

// Assets
import defaultSort from '../assets/sort.png';
import sortASC from '../assets/sort_asc.png';
import sortDESC from '../assets/sort_desc.png';

function Sorting(props) {
  const { column, setSorting, sorting} = props; //column - to get the particular column while sorting

  const handleSort = (column) => {
    let order = 0;
    const sortOrder = sorting?.sortOrder;
    if (!sortOrder) {
      order = 1;
    }
    else if (sortOrder === 1) {
      order = -1;
    }
    else if (sortOrder === -1) {
      order = 0;
    }

    if(setSorting) {
      setSorting({ sortOrder: order, sortBy: column });
    }

  }

  const sortIcon = useMemo(() => {
    const sortOrder = sorting?.sortOrder;
    if (!sortOrder) {
      return <img src={defaultSort} alt="default_sort" style={{ height: "20px" }} />
    }
    else if (sortOrder === 1) {
      return <img src={sortASC} alt="sort_asc" style={{ height: "20px" }} />
    }
    else if (sortOrder === -1) {
      return <img src={sortDESC} alt="sort_desc" style={{ height: "20px" }} />
    }
    else {
      return <img src={defaultSort} alt="default_sort" style={{ height: "20px" }} />
    }
  }, [sorting,column])

  return (
    <Fragment>
      <span style={{ verticalAlign: "middle", cursor: "pointer" }} onClick={() => handleSort(column)}>{sortIcon}</span>
    </Fragment>
  )
}

export default Sorting