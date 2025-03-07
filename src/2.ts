const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

function getRandomTsCode() {
  const randomNumber = getRandomInt(1000);
  const randomString = `myFunction${randomNumber}()`;
  return randomString;
}