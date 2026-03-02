import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = ({cartCount}) => {
    return (
        <nav>
            <Link to="/">
                <img src="/logo.jpg" alt="Store logo" className="nav-logo" />
            </Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/cart">
                        Cart ({cartCount})
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;