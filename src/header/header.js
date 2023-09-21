import React from "react";
import './header.css';
import Search from "./search";
const Header = () => {
    return (
        <header class="site-header">
            <div class="site-identity">
                <h1><a href="#">Government of Kerala</a></h1>
                <h1 lang="ml"><a href="#">കേരള സർക്കാർ</a></h1>
            </div>
            <nav class="site-navigation">
                <ul class="nav">
                    <li><Search/></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;