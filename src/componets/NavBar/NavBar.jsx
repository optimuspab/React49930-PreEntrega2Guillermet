import CartWidget from "./CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
        <div id="navbar">
            <a href="index.html" className="navbar-brand">
                <img src="/tt_logo_white.png" alt="Trendy Tech Logo" className="logo"></img>
            </a>
            <ul>
                <li><a href="#audio">Audio</a></li>
                <li><a href="#computación">Computación</a></li>
                <li><a href="#celulares">Celulares</a></li>
                <li><a href="#monitores">Monitores</a></li>
            </ul>
            <div id="cart-widget">
                <a className="active" href="#contact"><CartWidget/></a>
            </div>
        </div>
    )
}

export default NavBar