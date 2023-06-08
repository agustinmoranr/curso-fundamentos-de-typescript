(() => {
  let dynamycVariable: any = 'Hello';
  dynamycVariable = 10;
  dynamycVariable = true;
  dynamycVariable = {};
  dynamycVariable = [];

  const rta = (dynamycVariable as string)
  console.log(rta.toUpperCase())

  const rta2 = (<string>dynamycVariable)
  console.log(rta2.slice(1))
})()