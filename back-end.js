let inputTxt = document.querySelector('#user-input');
const resultList = document.querySelector('.result');

const createList = function(result){
    result.forEach(item => {
        const newLi = document.createElement('li');
        newLi.innerText = item;
        resultList.appendChild(newLi);
    });
}

const deleteList = function(){
    document.querySelectorAll('li').forEach(item => {
        resultList.removeChild(item);
    })
}

const biggify = function(num) {
    return num + 9000;
}

const bigPush = function(){
    deleteList();
    const num = Number(inputTxt.value);
    const result = [biggify(num)];
    createList(result);
    inputTxt.value = '';
}

const nasafy = function(num) {
    const countDown = [];
    while (num > 0){
        countDown.push(num);
        num--;
    }
    countDown.push('Blast off!');
    return countDown;
}

const nasaPush = function(){
    deleteList();
    const num = Number(inputTxt.value);
    const result = nasafy(num);
    createList(result);
    inputTxt.value = '';
}

const reversify = function(str) {
    let newStr = '';
    const newArr = [];
    for (let l = str.length - 1; l >= 0; l--){
        newStr+= str[l];
    }
    newArr.push(newStr);
    return newArr;
}

const revPush = function(){
    deleteList();
    const str = inputTxt.value;
    const result = reversify(str);
    createList(result);
    inputTxt.value = '';
}

const titleify = function(str) {
    const newStr = str.toLowerCase();
    const newArr1 = newStr.split(' ');
    const newArr2 = [];
    const newArr3 = [];
    for (i = 0; i < newArr1.length; i++){
        const firstLetter = newArr1[i].slice(0,1);
        const restWord = newArr1[i].slice(1);
        newArr2.push(`${firstLetter.toUpperCase()}${restWord}`);
    }
    newArr3.push(newArr2.join(' '));
    return newArr3;
}

const titlePush = function(){
    deleteList();
    const str = inputTxt.value;
    const result = titleify(str);
    createList(result);
    inputTxt.value = '';
}

const crazify = function(str) {
    let spaceCount = 0;
    const lowStr = str.toLowerCase();
    let crazyStr = '';
    const newArr = [];
    for (const letter of lowStr){
        if (spaceCount % 2 === 1 && letter !== ' '){
        crazyStr+= letter.toUpperCase();
        spaceCount++;
        } else if (spaceCount % 2 === 0 && letter !== ' '){
        crazyStr+= letter;
        spaceCount++;
        } else if (letter === ' '){
        crazyStr+= letter;
        }
    }
    newArr.push(crazyStr);
    return newArr;
}

const craziPush = function(){
    deleteList();
    const str = inputTxt.value;
    const result = crazify(str);
    createList(result);
    inputTxt.value = '';
}