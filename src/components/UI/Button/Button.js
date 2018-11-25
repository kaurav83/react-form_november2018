import React from 'react';
import classes from './Button.css';

const Button = props => {
    return (
        <button>{props.children}</button>
    );
};

export default Button;