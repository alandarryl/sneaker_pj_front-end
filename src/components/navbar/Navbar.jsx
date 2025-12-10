

import "./navbar.css";

function Navbar() {


    return (
        <nav className="navbar" >
            <h1 className="logo" >Logo</h1>
            <ul className="nav-links" >
                <li><a href="#home" >Home</a></li>
                <li><a href="#all" >All products</a></li>
                <li><a href="#about" >About</a></li>
                <li><a href="#contact" >Contact</a></li>
            </ul>
            <div className="icons" >
                <i className="search" ></i>
                <i className="menu" ></i>
            </div>
        </nav>
    )

}

export default Navbar;
