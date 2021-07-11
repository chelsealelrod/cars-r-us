import { getPaint, setPaint } from "./database.js"

const paintChoices = getPaint()

document.addEventListener("change", (event) => {
    if (event.target.name === "paintChoice") {
            setPaint(parseInt(event.target.value))
    }
})

export const Paint = () => {
    let html = "<ul>"

    const listItems = paintChoices.map(paintChoice => {
        return `<li>
            <input type="radio" name="paintChoice" value="${paintId.id}" /> ${paintId.color}
            </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
