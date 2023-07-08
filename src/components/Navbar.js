import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(prevClick => !prevClick);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Witaj
                </Link>
                <div className={click ? 'menu-icon active' : 'menu-icon'} onClick={handleClick}>
                    <div className='hamburger-line line-1'/>
                    <div className='hamburger-line line-2'/>
                    <div className='hamburger-line line-3'/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Strona główna
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Usługi
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Produkty
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Rejestracja
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline' className='btn-signup'>Rejestracja</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar