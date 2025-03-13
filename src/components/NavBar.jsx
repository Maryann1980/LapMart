import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react";
import "./navbar.css";

export const NavBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const location = useLocation(); // Get current route

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="navbar">
            <h1 className="logo">LapMart</h1>

            {/* Hide search bar only on /cart page */}
            {location.pathname !== "/cart" && (
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchQuery} 
                        onChange={handleSearch}
                    />
                    <button>
                        <MagnifyingGlass size={24} />
                    </button>
                </div>
            )}

            <div className="links">
                <Link to="/">Shop</Link>
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>
            </div>
        </div>
    );
};
