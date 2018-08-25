export const getNumbersFromString = str => parseInt(str.match(/\d/g).join(''), 10);
