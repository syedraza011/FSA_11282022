//time complexity O(n)
//time space 

let array=[1,2,3,4,5,6];
console.log(sortedSquared (array));
function sortedSquared (array) {
    let newArray=[];
    for( let i=0; i<array.length; i++){
        let num=array[i];
        newArray.push(num*num);
    }
    console.log(array);
    return newArray;
}