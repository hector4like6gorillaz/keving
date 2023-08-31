export const upperFirtCharacter = (word: string) => {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
};

export const upperAllWords = (word: string) => {
  return word.toUpperCase();
};

export const upperAllFirst = (sentence: string) => {
  let arrWors = sentence.split(" ");
  let oracionFinal = "";
  if (arrWors.length !== 0) {
    arrWors.forEach((item, index) => {
      oracionFinal = oracionFinal + upperFirtCharacter(item);
      if (arrWors.length - 1 !== index) oracionFinal = oracionFinal + " ";
    });
  }
  return oracionFinal;
};

//export { upperFirtCharacter, upperAllWords };
