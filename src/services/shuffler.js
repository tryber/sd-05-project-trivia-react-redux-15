const shuffleAnswers = (array) => {
  const array2 = array;
  array2.forEach((item, index) => {
    const novoIndex = Math.floor(Math.random() * (index + 1));
    const temp = item;
    array2[index] = array2[novoIndex];
    array2[novoIndex] = temp;
  });
  return array2;
};

export default shuffleAnswers;
