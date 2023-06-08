(() => {
  console.log('********** Union Types **********');

  function greeting(message: string | number) {
    if(typeof message === 'string') {
      console.log('Normal message', message.toUpperCase());
    }
    if(typeof message === 'number') {
      console.log('Number message', message.toFixed(2));
    }
  }

  greeting('Miranda');
  greeting(10.123456);  
})()