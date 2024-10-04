import React from 'react';
import './../styles.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Kruti Patel</h1>
            <nav>
                <ul>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
