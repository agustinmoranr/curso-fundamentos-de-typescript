(() => {
  type Sizes = "S" | "M" | "L" | "XL" | "XXL"
  
  const products: any[] = []
  const addProduct = (
    data: { // defining an object as parameter
      name: string, 
      createdAt: Date, 
      stock: number, 
      size?: Sizes
    }
  ) => {
    products.push(data)
  }

  addProduct({name: "Camisa", createdAt: new Date(), stock: 10})
  addProduct({name: "Camisa", createdAt: new Date(), stock: 10, size: "S"})
  console.log(products)
})()