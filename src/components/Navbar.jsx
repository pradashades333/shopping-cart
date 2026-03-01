import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = ({cartCount}) => {
    return (
        <nav>
            <h1>Shopping store</h1>
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