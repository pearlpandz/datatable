import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './progressLoader.css'

const ProgressLoader = ({ message }) => {
    return (
        <div className='flex justify-content-center flex-column loader'>
            <div className='infinite_loader'></div>
            <p style={{ fontSize: '18px', marginTop: '20px' }}>{message}</p>
        </div>
    );
};

ProgressLoader.propTypes = {
    message: PropTypes.string,
};

export default ProgressLoader;
