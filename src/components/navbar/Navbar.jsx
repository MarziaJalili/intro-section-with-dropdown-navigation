import NavItems from "./NavItems";
function Navbar() {
    return (
        <nav>
            <button className="close-menu">
                <img src="./images/icon-close-menu.svg" alt="" />
            </button>
            <NavItems />

            <button className="login">Login</button>
            <button className="register">Register</button>
        </nav>
    )
}

export default Navbar;