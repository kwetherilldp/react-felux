import React from 'react';
import "./Button.scss";
// import "./button.css";


export const Button = ({label}) => {
    const css = "fds-button";
    return (
        <button className={css}>{label}</button>
    );
}
