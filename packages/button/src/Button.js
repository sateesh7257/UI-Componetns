//create button component
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, onClick, disabled }) => (
    <button className="button" onClick={onClick} disabled={disabled}>
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    onClick: () => {},
    disabled: false,
};

export default Button;