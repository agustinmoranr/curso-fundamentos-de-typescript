(()=> {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);
 
  let customerAge: number = 28;
   //  customerAge = customerAge + '1'; // 281
   customerAge = customerAge + 1; // 281
   console.log('customerAge', customerAge);
 
   let productInStock: number;
   console.log('productInStock', productInStock); // warning because it is not initialized
   if (productInStock > 10) {
     console.log('is greater');
   }
 
   let discount = parseInt('100'); // parseInt return a number so the type of discount is number
   console.log('discount', discount);
   if (discount <= 200) {
     console.log('apply');
   } else {
     console.log('not apply');
   }
 
   let hex = 0xfff; // hexedecimal numbers has validations in typescript
   console.log('hex', hex); // hex 4095
   let bin = 0b1010; 
   console.log('bin', bin); // bin 10
 
   const myNumber: number = 10;
 })();