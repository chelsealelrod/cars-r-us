import { getTechnology, setTechnology } from "./database.js"

const tech = getTechnology()

document.addEventListener("change", (event) => {
    if (event.target.name === "technology") {
        setTechnology(parseInt(event.target.value))
    }
})

export const technology = () => {
    let html = "<ul>"
    const listItems = tech.map(technology =>  {
        return `<li>
                <input type="radio" name="technology" value="${technology.id}" /> ${technology.type}
                </li>`

    })

    html += listItems.join("")
    html += `</ul>`

    return html
}