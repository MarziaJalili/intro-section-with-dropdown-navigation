function Company() {
    const details = [
        { name: "History" },
        { name: "Our Team" },
        { name: "Blog" },
    ];

    const features = details.map(detail => {
        return (
            <li>
                {detail.name}
            </li>
        )
    })

    return (
        <ul className="company">{features}</ul>
    )
}

export default Company;