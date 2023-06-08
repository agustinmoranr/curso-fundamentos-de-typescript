(() => {
  type Sizes = "S" | "M" | "L" | "XL" | "XXL"

  function createProduct(
    name: string, 
    createdAt: Date, 
    stock: number, 
    size?: Sizes //size is optional using the ? symbol
    ) {
    return {
      name, 
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProduct("Camisa", new Date(), 10)
  console.log(producto1)
  console.log(producto1.size)
})()