(() => {

  //typescript from itself knows the type of the return of the function
  //but we can also declare it
  const calcTotal = (prices: number[]): number => {
    return prices.reduce((total, price) => total + price, 0) //returns a number
  }

  //By default a function that returbns nothing has the type of void
  const printTotal = (prices: number[]): void => {
    console.log("El total es:", calcTotal(prices))
  }

  printTotal([1, 2, 3, 4, 5])
})()