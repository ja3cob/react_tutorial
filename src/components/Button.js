import './Button.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { isNullOrEmpty } from '../Util';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    className
}) => { 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    let buttonClass = `btn ${checkButtonStyle} ${checkButtonSize} ${!isNullOrEmpty(className) ? className : ''}`;

    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button className={buttonClass} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
};