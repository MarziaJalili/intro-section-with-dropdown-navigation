import NavItems from "./NavItems";
function Navbar(props) {
    return (
        <nav>
            <button onClick={props.onClick} className="close-menu">
                <img src="./images/icon-close-menu.svg" alt="" />
            </button>
            <NavItems />

            <button className="login">Login</button>
            <button className="register">Register</button>
        </nav>
    )
}

export default Navbar;