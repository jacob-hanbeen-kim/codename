import React from 'react'

const Button = (props) => {

    const { onClick, ...inputProps } = props;

    return (
        <button onClick={onClick} {...inputProps} >Button</button>
    )
}

export default Button