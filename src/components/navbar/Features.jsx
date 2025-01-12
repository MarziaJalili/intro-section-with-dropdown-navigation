function Features() {
    const details = [
        {
            name: "Todo List",
            img: {
                src: "./images/icon-todo.svg",
                alt: "icon-todo"
            }
        },
        {
            name: "Calendar",
            img: {
                src: "./images/icon-calendar.svg",
                alt: "icon-calendar"
            }
        },
        {
            name: "Reminders",
            img: {
                src: "./images/icon-reminders.svg",
                alt: "icon-reminders"
            }
        },
        {
            name: "Planning",
            img: {
                src: "./images/icon-planning.svg",
                alt: "icon-planning"
            }
        }
    ];

    const features = details.map(detail => {
        return (
            <li className="flex">
                <img src={detail.img.src} alt={detail.img.alt} />
                {detail.name}
            </li>
        )
    })

    return (
        <ul className="features">{features}</ul>
    )
}

export default Features;
