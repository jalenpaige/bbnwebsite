import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <>
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                   'LogoHere' <i className='fab fa-typo3'/>
                </Link>
                <div className ='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            Home
                            </Link>
                    </li> 
                    <li className='nav-item'>
                        <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                            About Us
                            </Link>
                    </li> 
                    <li className='nav-item'>
                        <Link to="/calendar" className='nav-links' onClick={closeMobileMenu}>
                            Calendar
                            </Link>
                    </li> 
                </ul>
                {button && <Button buttonStyle='btn--outline'>Newsletter</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar;