import React from 'react';
import PropTypes from 'prop-types';
import "./Button.scss";


export const Button = ({label, primary, size}) => {
    let css = "fds-button";
    if(primary) css += " fds-button--primary";
    if(size) css += " fds-button--" + size;
    return (
        <button className={css}>{label}</button>
    );
}

Button.propTypes = {
    /**
    The display content of the button
    */
    label: PropTypes.string.isRequired,
    /**
     Checks if the button should be disabled
    */
    primary: PropTypes.bool,
    /**
     Checks if the button should be disabled
    */
    size: PropTypes.oneOf(['medium', 'small','large']),
  };
