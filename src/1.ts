
const arr = [];
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
function getRandomIntArray(len, min, max) {
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr[i] = randomInt(min, max);
  }
  return arr;
}
let result = getRandomIntArray(10, 1, 20).sort();
console.log(result);