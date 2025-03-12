import React from "react";
import {Link} from 'react-router-dom';
import {ShoppingCart} from "@phosphor-icons/react";
import "./navbar.css";

export const NavBar = () => {
    return (
        <div className="navbar">
    <h1 className="logo">LapMart</h1>
    <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
            <ShoppingCart size={32} />
        </Link>
    </div>
</div>

    );

}