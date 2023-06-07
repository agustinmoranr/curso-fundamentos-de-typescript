(() => {
  const list = [1,2,3,4 ,5]; // Array<number>
  const listMixed = [1,2,3, "hola", false]; // Array<number | string | boolean>

  const mixed: (number | string | boolean)[] = [1, "Hola"]
  mixed.push("false")
  mixed.push([1,2]) //you can just push the type that you have declared

  list.map((num) => num * 2) 
  list.map((num) => num * "string") // you can not multiply a number with a string
})()