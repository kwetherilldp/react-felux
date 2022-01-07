import React from 'react';
import "./Input.scss";


export const Input = ({label, rounded, size}) => {
    let css = "fds-input";
    if(rounded) css += " fds-button--rounded";
    if(size) css += " fds-button--" + size;
    return (
        <input className={css} value={label} />
    );
}
