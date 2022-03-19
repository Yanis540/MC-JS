// Write a JavaScript function to find the common elements from two arrays
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2"] 

const firstArray=[1, 2, 3];
const secondArray=[100, 2, 1, 10];
var commonArray=[];
const difference=(first,second)=>first.map(element=>{
    if(second.includes(element) && !commonArray.includes(element)) commonArray.push(element)
})
difference(firstArray,secondArray)
console.log(commonArray);