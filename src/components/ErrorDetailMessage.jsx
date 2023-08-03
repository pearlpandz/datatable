import React from 'react';
import PropTypes from 'prop-types';

const ErrorDetail = (props) => {
    const { title, subTitle } = props;
    return (
        <div className="flex flex-column justify-content-center mb-3 align-items-center">
            <h4 className="m-0 text-xl">{title}</h4>
            {subTitle && <span className="text-sm mt-2">{subTitle}</span>}
        </div>
    );
};

ErrorDetail.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
};
export default ErrorDetail;
