export function getRandomTsCode(): string {
  const array = ['const', 'let', 'var'];
  const type = ['number', 'string', 'boolean'];
  const variable = `my${array[Math.floor(Math.random() * array.length)]} ${type[Math.floor(Math.random() * type.length)]} = ${Math.random() * 100};`;
  return variable;
}
