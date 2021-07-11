const database = {
    paint: [
        { id: 1, color: "Silver", price: 980.90 },
        { id: 2, color: "Midnight Blue", price: 980.90 },
        { id: 3, color: "Firebrick Red", price: 980.90 },
        { id: 4, color: "Spring Green", price: 980.90 }

    ],
    interior: [
        { id: 1, type: "Beige Fabric", price: 2999.99 },
        { id: 2, type: "Charcoal Fabric", price: 2999.89 },
        { id: 3, type: "White Leather", price: 4999.89 },
        { id: 4, type: "Black Leather", price: 4999.89 }


    ],
    Technology: [
        { id: 1, type: "Basic Package", price: 1400.85 },
        { id: 2, type: "Navigation Package", price: 1900.85 },
        { id: 3, type: "Visibility Package", price: 3500.85 },
        { id: 4, type: "Ultra Package", price: 45000.85 }

    ],
    Wheels: [
        { id: 1, type: "17-inch Pair Radial", price: 199.50 },
        { id: 2, type: "17-inch Pair Radial Black", price: 225.50 },
        { id: 3, type: "18-inch Pair Spoke Silver", price: 399.90 },
        { id: 4, type: "18-inch Pair Spoke Black", price: 499.90 } 
    ],
    purchases: [ {
        id: 1,
        paintId: 3,
        interiorId: 2,
        techId: 3,
        wheelId: 4
    }],

}

export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}

export const getPaint = () => {
    return database.paint.map(paint => ({...paint}))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

