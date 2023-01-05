// function definition
// function calculateBill() {
// this is the function block or body
//   console.log('Running Cacluate Bill!!');
// variable inside of a function can only be accessed in the function
// without the return it is undefined outside of this function
// const total = 100 * 1.13;
// console.log(total);
// return total;
// }

// function call or run
// calculateBill();
// const myTotal = calculateBill();
// console.log(myTotal);
// console.log(`Your total is $${calculateBill()}`);

function calculateBill(billAmount, taxRate = 0.12, tipRate = 0.2) {
  const total = billAmount + billAmount * taxRate + billAmount * taxRate;
  //   console.log(billAmount, taxRate);
  return total;
}

// const myTotal = calculateBill(100, 0.13);
const amyBill = 75;
const amyTaxRate = 0.12;
const myTotal = calculateBill(amyBill, amyTaxRate);
// console.log(myTotal);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo();
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

// console.log(yell(doctorize('David')));

function calculateBill2(billAmount, taxRate = 0.13) {
  const total = billAmount * (1 + taxRate);
  return total;
}

const myNewTotal = calculateBill2(120);

// console.log(`The bill is ${total}`);

console.log(myNewTotal);

function greetingNoError(name = '') {
  return `Hey hi hello ${name.toUpperCase()}`;
}
