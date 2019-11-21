const biggify = function(num) {
    return num + 9000;
}

const nasafy = function(num) {
const numArr = [];
while (num > 0){
    numArr.push(num);
    num--;
}
numArr.push('Blast off!');
return numArr;
}

const reversify = function(str) {
let newStr = '';
for (let l = str.length - 1; l >= 0; l--){
    newStr+= str[l];
}
return newStr;
}

const titleify = function(str) {
const newStr = str.toLowerCase()
const newArr1 = newStr.split(' ');
const newArr2 = []
for (i = 0; i < newArr1.length; i++){
    const firstLetter = newArr1[i].slice(0,1);
    const restWord = newArr1[i].slice(1);
    newArr2.push(`${firstLetter.toUpperCase()}${restWord}`);
}
return newArr2.join(' ')
}

const crazify = function(str) {
let spaceCount = 0;
const lowStr = str.toLowerCase();
let crazyStr = '';
for (const letter of lowStr){
    if (spaceCount % 2 === 1 && letter !== ' '){
    crazyStr+= letter.toUpperCase();
    spaceCount++;
    } else if (spaceCount % 2 === 0 && letter !== ' '){
    crazyStr+= letter;
    spaceCount++;
    } else if (letter === ' '){
    crazyStr+= letter
    }
}
return crazyStr;
}