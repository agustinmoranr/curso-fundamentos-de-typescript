(()=>{
  type Sizes = "S" | "M" | "L" | "XL" | "XXL"
  type Product = { // defining a product Type
    name: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const PRODUCTS: Product[] = [] // we define an array of products

  function addProduct(product: Product) {
    PRODUCTS.push(product)
  }

  addProduct({name: "Camisa", createdAt: new Date(), stock: 10})
  addProduct({name: "Camisa", createdAt: new Date(), stock: 10, size: "S"})

  console.log(PRODUCTS)
})()