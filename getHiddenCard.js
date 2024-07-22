
const getHiddenCard = (cardNumber, count = 4) => {
  cardNumber = cardNumber.slice(-4);
  return `${'*'.repeat(count)}${cardNumber}`;
}
console.log(getHiddenCard('1234567812345678', 2)); // "**5678"
console.log(getHiddenCard('1234567812345678', 3)); // "***5678"
console.log(getHiddenCard('1234567812345678')); // "****5678"
console.log(getHiddenCard('2034399002121100', 1)); // "*1100"


