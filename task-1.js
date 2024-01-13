const quantity = 10;
const pricePerDroid = 500;
const totalPrice =  quantity * pricePerDroid ;
const makeTransaction = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
console.log(makeTransaction(10, 500));