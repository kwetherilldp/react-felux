import React from 'react';
import "../assets/tokens.scss";
import "./Button.scss";


export const Button = ({label}) => {
    const css = "fds-button";
    return (
        <button className={css}>{label}</button>
    );
}
