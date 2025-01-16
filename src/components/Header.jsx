import Navbar from "./navbar/Navbar";
import { useState, useEffect } from "react";

function Header() {
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const [navbar, setNavbar] = useState(screenSize > 820 ? true : false);

    // finding out the current screen size...
    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenSize(window.innerWidth);
        })
    }, []);

    // toggling the navbar on and off for smaller screen sizes...
    function taggleNavbar() {
        setNavbar(prev => !prev);
        if (!navbar && screenSize < 820) {
            document.body.classList.add("faded")
        } else {
            document.body.classList.remove("faded")

        }
    }

    // toggling the navbar on for large screens while resizing...
    window.addEventListener("resize", () => {
        if (screenSize > 820) {
            setNavbar(true)

        } else {
            setNavbar(false)
            document.body.classList.remove("faded")
        }
    })

    return (
        <header>
            <img src="./images/logo.svg" alt="logo-image" />

            {navbar ? <Navbar onClick={taggleNavbar} /> : null}

            <button onClick={taggleNavbar} className="open-menu">
                <img src="./images/icon-menu.svg" alt="icon-menu" />
            </button>
        </header>
    )
}

export default Header;