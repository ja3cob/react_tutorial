import './Button.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { isNullOrEmpty } from '../Util';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = React.forwardRef((props, ref) => { 
    const checkButtonStyle = STYLES.includes(props.buttonStyle) ? props.buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(props.buttonSize) ? props.buttonSize : SIZES[0];

    let buttonClass = `btn ${checkButtonStyle} ${checkButtonSize} ${!isNullOrEmpty(props.className) ? props.className : ''}`;
    let button;
    if(!isNullOrEmpty(props.link)) {
        button = (
        <Link to={props.link}>
            <button ref={ref} className={buttonClass} onClick={props.onClick} type={props.type}>
                {props.children}
            </button>
        </Link>);
    }
    else {
        button = (
        <button ref={ref} className={buttonClass} onClick={props.onClick} type={props.type}>
            {props.children}
        </button>);
    }
    return button;
});