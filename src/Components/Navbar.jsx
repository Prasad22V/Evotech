import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./css/Navbar.css";
import { Squash as Hamburger } from 'hamburger-react'


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>

            <header className={showMenu ? "active" : "header"} >
                <h1 className="logo">Logo</h1>

                <nav className="navbar">
                    <ul className="navbar-list">
                        <li><NavLink className="navbar-link" to="/">Home</NavLink></li>
                        <li><NavLink className="navbar-link" to="/about">About</NavLink></li>
                        <li><NavLink className="navbar-link" to="/contact">Contact</NavLink></li>
                        <li><NavLink className="navbar-link" to="/product">Products</NavLink></li>
                    </ul>
                </nav>
                <div className="mobile-nav-btn" onClick={handleClick}>
                    <Hamburger toggled={isOpen} toggle={setOpen} size={32} />
                </div>
            </header>
        </>
    )
}

export default Navbar