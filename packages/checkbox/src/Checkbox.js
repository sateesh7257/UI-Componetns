//create Checkbox component
import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

const Checkbox = ({onClick, disabled }) => (
    <input type="checkbox" className="Checkbox" onClick={onClick} disabled={disabled} />
);

Checkbox.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
    onClick: () => {},
    disabled: false,
};

export default Checkbox;