// Write your code below this function
function roll() {
  return Math.floor(Math.random() * 10 + 1);
}
function rollDice(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(roll());
  }
  return result;
}
console.log(rollDice(4));
