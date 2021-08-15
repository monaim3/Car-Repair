import React from 'react';
import { useState,useEffect } from 'react';

import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        })
    }, []);
    
    const handleBackToTop = () =>{
        window.scrollTo(500, 0);
    }

    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <button className={isVisible ? "back-to-top" : "back-to-top d-none"} onClick={handleBackToTop}title="Back To Top"><FontAwesomeIcon icon={faArrowUp} /></button>
        </div>
    );
};

export default Header;