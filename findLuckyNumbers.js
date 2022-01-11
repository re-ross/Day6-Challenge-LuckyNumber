// Write your code below this function
// function roll() {
//   return Math.floor(Math.random() * 10 + 1);
// }
// function rollDice(n) {
//   let result = [];
//   for (let i = 0; i < n; i++) {
//     result.push(roll());
//   }
//   return result;
// }
// console.log(rollDice(4));
function roll(n) {
  let firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let secondArray = [];
  for (let i = 0; i < n; i++) {
    let x = Math.floor(Math.random() * firstArray.length);
    secondArray.push(firstArray[x]);
    firstArray.splice(x, 1);
  }
  return secondArray;
}
console.log(roll(9));
console.log(roll(7));
console.log(roll(3));
