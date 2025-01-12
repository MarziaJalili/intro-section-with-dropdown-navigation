import navbarData from "./navbarData";

function NavItems() {
    const items = navbarData.map(item => {
        return (
            <li>
                <span className="flex">
                    {item.name}
                    {item.button ? <button><img src={item.button.src} alt={item.button.alt} /></button> : null}
                </span>
                {item.details ? item.details : null}
            </li>
        )
    })
    return (
        <ul>{items}</ul>
    )
}

export default NavItems;