import { useState } from "react"
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="sidenav" style={{ width: isOpen ? "250px" : "0" }}>
                <ul>
                    <li><a className="closebtn" onClick={() => setIsOpen(false)}>&times;</a></li>
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    <li><Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link></li>
                </ul>
            </nav>


            {/* Open BUtton */}
            <div className="openbtn" onClick={() => setIsOpen(true)}>
                <span className="material-symbols-outlined menu-button">menu</span>
                <span className="menu-text">menu</span>
            </div>
            <div className={isOpen ? "all-over-bkg is-visible" : "all-over-bkg"} onClick={() => setIsOpen(false)}></div>
        </>
    )
}

export default Navbar