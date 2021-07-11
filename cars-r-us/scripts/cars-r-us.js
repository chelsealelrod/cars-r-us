import { Interior } from "./interior.js"
import { Paint } from "./paint.js"
import { Technology } from "./technology.js"
import { Wheels } from "./wheels.js"

// document.addEventListener(
//     "click"
//     (event) => {
//         if (event.target.id === "purchase") {
//             addPurchaseOrder()
//         }
//     })

    export const CarsRUs = () => {
        return `<header class="header">
            <h1 class ="title">Cars-R-Us</h1>
            </header>
            <section class="choices__interior options">
            <h2>Interior</h2>
            ${Interior()}
            </section>
            <section class="choices__paint options">
            <h2>Paint</h2>
            ${Paint()}
            </section>
            <section class="choices__technology options">
            <h2>Technology</h2>
            ${Technology()}
            </section>
            <section class="choices__wheel options">
            <h2>Wheels</h2>
            ${Wheels()}
            </section>
            
            <article>
                <button id="purchase">Purchase Combo</button>
            </article>
            
            <article class="customerOrders">
                <h2>Sales</h2>
                ${Sales()}
            </article>
            `
    }