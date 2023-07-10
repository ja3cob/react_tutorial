import React, { useState } from "react";
import './Hamburger.css'

export default function Hamburger({onClick, active, className}) {

    return(
        <div className={active ? `hamburger-icon active ${className}` : `hamburger-icon ${className}`} onClick={onClick}>
            <div className='hamburger-line line-1'/>
            <div className='hamburger-line line-2'/>
            <div className='hamburger-line line-3'/>
        </div>
    );
}