import React, { useState } from "react";
import './Hamburger.css'

export default function Hamburger({onClick, className}) {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(prevValue => !prevValue);
        onClick();
    }

    return(
        <div className={active ? `hamburger-icon active ${className}` : `hamburger-icon ${className}`} onClick={handleClick}>
            <div className='hamburger-line line-1'/>
            <div className='hamburger-line line-2'/>
            <div className='hamburger-line line-3'/>
        </div>
    );
}