/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react'

// Third party components
import Calendar from 'react-calendar'
import moment from 'moment';

// Styles
import './dateFilter.css'
import 'react-calendar/dist/Calendar.css';

// Assets
import calendarIcon from '../assets/calendar.png';

function DateFilter(props) {
    const { onChange, value } = props;
    const [dateShow, setDateshow] = useState(false);
    
    return (
        <Fragment>
            <div className='date-input' onClick={() => {
                setDateshow(!dateShow)
            }}>
                <input type="text" defaultValue={value && moment(value).format("YYYY-MM-DD")} placeholder='yyyy-mm-dd' className='filter-input-date'></input>
                <img src={calendarIcon} className='calendar-icon' alt="calendar" />
            </div>
            {dateShow && <Calendar
                value={value}
                onChange={(event) => {
                    onChange(event);
                    setDateshow(false);
                }}
                maxDate={new Date()}
            />}
        </Fragment>
    )
}

export default DateFilter