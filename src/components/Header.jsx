import Navbar from "./navbar/Navbar";
function Header() {
    return (
        <header>
            <img src="./images/logo.svg" alt="logo-image" />
            <Navbar />
            <button className="open-menu">
                <img src="./images/icon-menu.svg" alt="icon-menu" />
            </button>
        </header>
    )
}

export default Header;