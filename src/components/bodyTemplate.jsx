/* eslint-disable react/prop-types */
import React from 'react'

// Third party components
// import { Link } from 'react-router-dom';
import moment from 'moment';

// Styles
import './bodyTemplate.css'


function BodyTemplate(props) {
    const { data, datatype, link = false } = props;

    if(!data) return <span></span> //If data is null , undefined , ""

    if (datatype === 'date') {
        return <span className='table-data'>{moment(data).format('MM/DD/yyyy')}</span>
    }

    if (link) {
        return <div className='table-data link' dangerouslySetInnerHTML={{ __html: data }}></div>
    }

    return <div className='table-data' dangerouslySetInnerHTML={{ __html: data }}></div>
}

export default BodyTemplate