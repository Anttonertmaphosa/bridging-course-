//This will check the array length
function check(){
    var array = ["I", "love", "coding", "damn", "!"]
for (let i = 0; i < array.length; i++){
    if (array.length == 4 && typeof array === "string"){
        return true;
    } else {
        return array[2];
    }
}
}
console.log(check())

//This will remove commas and make this array a sentence.
function removeComma(){
    var array = ["I", "love", "coding", "damn", "!"]
    return array.join(' ');
}
console.log(removeComma())

/*This will add new array to existing and sort the number from small to biggest,
and will filter out  numbers > 10 and output that new array.*/
function arrange(){
    let x = [2, 12, 8, 14, 80, 0, 1]
    let y = [17, 3, 21, 10]
    return x.concat(y).sort((a, b) => a - b).filter(n => n > 10);
}
console.log(arrange())

//Changes text
// const pText = document.getElementById('text');
// pText.textContent = 'I might just be a geek soon!'



