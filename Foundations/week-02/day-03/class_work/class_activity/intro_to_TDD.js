// console.log(2+2);
// console.log(1.01*5);
// console.log(-5 - 20 * 3);
// // let radius = 2022;
// // let phrase = “hello world”;
// // let pi=3.14;
// console.log(3.14*2022 * 2022);
// function p(){
//     let p = true;
// if (!p || false){
// 	console.log("Hello!");
// }else{
// 	console.log("Bye!");
// }
// }
functionName();
function functionName(){
    let myArray2 = [1, 2, 3, 4, [5, 'six'], 7];
    console.log(myArray2[4][1][2])
}

/ Functions
// repeatable snippets of code, usually containing a series of operations
function functionName() {
    // whatever code is in here, gets ran whenever we INVOKE the function
    console.log('Hello world!');
}
// functionName();

// Parameters
// a private variable you can only access inside the function
let num = 5;
function add(num1, num2) {
    console.log(num1);
    console.log(num1 + num2 + num);
}
// Arguments
// add(1, 1);

// Return statement
function subtract(num1, num2) {
    // console.log(num1 - num2);
    // your code has to go before the return statement

    // return one value out of the function
    return num1 - num2;
}
subtract(5, 3);
console.log(subtract(5, 3));

// const a = subtract(1, 2);
// const b = subtract(5, 7);
// console.log(a);
// console.log(b);
// const c = subtract(a, b);
// console.log(c);

// what's the difference between return and console.log?
// Arrays: an ordered list of data
const arrayExample = [];
const numArr = [1, 2, 3];
const strArr = ['one', 'two', 'three'];
const mixArr = [1, 'two', true];

// Index: a space in the array, we start counting from 0
// console.log(numArr[2]);
// console.log(strArr[0][2]);
console.log(mixArr[1]);



const arr = ['class!', 'to', 'welcome', 'world,', 'Hello'];
for(let i = 0; i < arr.length; i++) {
    // first run: i = 0
    // second run: i = 1
    // console.log(arr[i]);
}

// Array Methods
const names = ['Keiran', 'Luke', 'Lucas', 'Austin', 'Jason', 'Andrew'];
Array.prototype.spliceCustom = function(start, deleteCount, ...items) {
    const data = this

    let resultArray = []
    var stop = data.length

    function copy(source, self) {
        for (let index = 0; index < source.length; index++) {
            self[index] = source[index]
        }
        self.length = source.length
    }


    if (start < 0) {
        start = start + data.length
    }

    if (deleteCount) {
        stop = start + deleteCount

        if (deleteCount < 0)
            stop = 0
    }

    for (let i = start; i < stop; i++) {
        const elem = data[i]
        resultArray.push(elem)
    }

    if (deleteCount && items.length <= 0) {
        var deleteArr = []
        for (let i = 0; i < data.length; i++) {
            var elem = data[i]
            if (i === start) {
                i = stop-1
            } else {
                deleteArr.push(elem)
            }
        }
        copy(deleteArr, this)
    }

    if (items.length > 0) {
        var gatherArr = []
        for (let i = 0; i < data.length; i++) {
            var elem = data[i]
            if (i === start) {
                gatherArr = [...gatherArr, ...items]
                i = stop-1
            } else {
                gatherArr.push(elem)
            }
        }
        copy(gatherArr, this)
    }
    
    return resultArray
}
// const updatedNames = names.spliceCustom(0, 3);
// console.log(names);
// console.log(updatedNames);


// splice lets us delete/replace at any point in the array
// names.splice(3, 2, 'A New Hire');
// names.splice(0, 0, 'New Hire');
// console.log(names);

// push allows us to add something to the end of an array
// names.push('New Hire');
// console.log(names);
// names.pop();
// console.log(names);

// we are going to find the "bigNums" > 5
const numbers = [6, 3, 5, 10, 3, 5, 9, 2, 8, 55, 30, 20, 3, 6, -100, 2, 3, 96];
function findBigNums(arr) {
    const bigNums = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 5) {
            bigNums.push(arr[i]);
        }
    }

    return bigNums;
}