import React from 'react';

import './Button.scss'

const Button = ({ children, clicked }) => {



    return (
        <div className="button" onClick={clicked}>
            {children}
        </div>
    )
}

export default Button
