import { getInterior, getPaint, getTechnology, getWheels } from "./database.js"
import { getPurchases } from "./database.js"


const interior = getInterior()
const paint = getPaint()
const technology = getTechnology()
const wheels = getWheels()

const buildOrderListItem = (order) => {

    const foundInterior = interior.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundPaint = paint.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )

    const foundTechnology = technology.find(
        (technology) => {
            return technology.id === order.techId
        }
    )

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const total = foundInterior.price + foundPaint.price + foundTechnology.price + foundWheel.price

    return `<li>
        Receipt #${order.id} = ${total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
        </li>`
}

export const sales = () => {
    const sales = getPurchases
}