const taxRate = 0.08;
const phonePrice = 99.99;
const accessoryPrice = 9.99;
const bankAccountBalance = 1000;
let amount = 0;
let numberOfPhones = 0;

function calculateTax(item) {
  return item * taxRate;
}

function calculateTotalPurchase() {
  while (amount <= (bankAccountBalance - (phonePrice + calculateTax(phonePrice + accessoryPrice)))) {

    amount = amount + phonePrice + accessoryPrice + calculateTax(phonePrice + accessoryPrice);
    numberOfPhones += 1;
  }
  console.log(`You can buy ${numberOfPhones} phones with accessories for $${amount.toFixed(2)}`);
  return amount;
}

calculateTotalPurchase();

