// Test data
const strArray1 = ["aaa","bbb","ccc","ddd"];
const numArray = [45,7,6,32,5,3,6,3,2,4,6,4,2];
const strArray2 = ["hello","world","I","am","a","JS","developer"];

// Functions for onclick event
function test1(){
    let resArr = ["lll","mmm"];
    arrayCopy(strArray1, 1, resArr, 0, 3);
    console.log(resArr); // expected ["bbb","ccc","ddd","lll","mmm"]
    resArr = ["lll","mmm"];
    arrayCopy(strArray1, 3, resArr, 1, 1);
    console.log(resArr); // expected ["lll","ddd","mmm"]
}
function test2(){
    console.log(count(strArray1, "ddd")); // expected 1
    console.log(count(numArray,6)); // expected 3
    console.log(count(numArray,-10)); // expected 0
}
function test3(){
    displayOccurrences(strArray1);
    displayOccurrences(numArray);
}
function test4(){
    const res = ulSurround(strArray1);
    console.log(res);
}
function test5(){
    const res = lengthSort(strArray2);
    console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
}
// Function for implementation

function arrayCopy(src,srcPos,dst,dstPos,length){
    const arrCopy = src.slice();
    const arrCopyChange = arrCopy.splice(srcPos, length);
    dst.splice(dstPos, 0, ...arrCopyChange);
}
function count(array, str){
    const count = array.reduce(function (counter, currentValue) {
        if (currentValue === str)
            counter++;
        return counter;
    }, 0);
    console.log(count);
    return count;
}
function displayOccurrences(array){
    console.log(array.reduce(function (count, currentValue) {
        return (count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1), count);
    }, {}));
}
function ulSurround(strings){
    const arrCopy = strings.map(function (item) {
        return '<li>' + item + '</li>';
    });
    arrCopy.splice(0, 0, "<ul>");
    arrCopy.push("</ul>");
    return arrCopy;
}
function lengthSort(array){
    const sortArr = array.sort(function (a, b) {
        if (a.length > b.length)
            return 1;
        else if (a.length < b.length)
            return -1;
        else
            return 0;
    });
    return sortArr;
}
