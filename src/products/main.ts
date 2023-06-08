import { PRODUCTS, addProduct,calcStock } from "./product.service";

addProduct({name: "Camisa", createdAt: new Date(), stock: 10})
addProduct({name: "Camisa", createdAt: new Date(), stock: 10, size: "S"})
const stock = calcStock()
console.log(PRODUCTS)
console.log(stock)