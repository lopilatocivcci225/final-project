function getRandomInt(max: number): number {
  const max = Math.max(...arguments);
  return Math.floor(Math.random() * (max - arguments[0] + 1)) + arguments[0];
}
