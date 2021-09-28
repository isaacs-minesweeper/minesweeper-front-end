export const calculateAdjacent = (array, index) => {
  let count = 0;
  // const stuff = [31, 30, 29, 1]
  array[index - 31] && array[index - 31] === '1' ? count++ : null;
  array[index - 30] && array[index - 30] === '1' ? count++ : null;
  array[index - 29] && array[index - 29] === '1' ? count++ : null;
  array[index - 1] && array[index - 1] === '1' ? count++ : null;
  array[index + 1] && array[index + 1] === '1' ? count++ : null;
  array[index + 29] && array[index + 29] === '1' ? count++ : null;
  array[index + 30] && array[index + 30] === '1' ? count++ : null;
  array[index + 31] && array[index + 31] === '1' ? count++ : null;
  return count;
};
