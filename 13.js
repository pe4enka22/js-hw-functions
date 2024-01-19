//Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.


noVowelLetters = (word)=> {
    let newExp = /[aeiouy]/gi;
    let result = word.replace(newExp, '');
    console.log(result);

}

noVowelLetters("hello world!");