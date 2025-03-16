const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
}

const getRandomString = () => {
  const length = getRandomNumber();
  let string = '';
  for (let i = 0; i < length; i++) {
    string += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  return string;
}

const getRandomBoolean = () => {
  return Math.random() > 0.5;
}
