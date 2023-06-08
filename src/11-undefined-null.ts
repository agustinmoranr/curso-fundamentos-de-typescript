(() => {
  // let myNull = null; // typescript sets this as any
  // let myUndefined = undefined; // typescript sets this as any

  let myNull: null = null; // null is a type
  let myUndefined: undefined = undefined; // undefined is a type

  myNull = "Hola" // type of myNull is null and can not change
  myUndefined = "Hola" // type of myUndefined is undefined and can not change

  function sayHi(name: string | null) {
    let hello = "Hello "
    hello += name?.toUpperCase() ?? "nobody"
    console.log(hello)
  }

  sayHi("Agustin")
  sayHi(null)
})()