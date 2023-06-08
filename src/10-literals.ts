(() => {
  console.log('********** Alias and Type Literals **********');
  type name = "Agustin" | "Miranda" | "Facundo"; // Literal type
  type message = string | number; // alias

  function greeting(name: name, message: message) {
    if(typeof message === 'number') {
      message = message.toFixed(2);
    }
    console.log(name + ' ' + message )
  }

  greeting('Miranda', 'Hola');
  greeting("Agustin", 10.123456);  
})()