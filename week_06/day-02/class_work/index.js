    // alert("hello");

//     function higherOrLower(value1, value2){
//         if(value1>value2){
//         return "higher"
//         }else if(value1===value2){
//         return "equal"
//         } else {
//         return "lower"
//         }
//     }
//     console.log(higherOrLower(5, 6))
//
// let movies1=["abc","cba","tba","mcg"];
// let movies2=["azc","mba","mba","gcg"];
// let movies3=["hzc","xba","bba","acg"];
// console.log( dvdCollection(movies1, movies2, movies3));
//     function dvdCollection(movies1, movies2, movies3){
//         let newArr=[];
//         let str='';
//         str+=movies1+","+movies2+","+movies3;
//         newArr.push(str);
//         function myFunction(){
//         let sortedArray=newArr.sort(function(a,b){
//             if(a<b)return -1;
//             if(a>b)return 1;
//             return 0;
//         });
//         console.log(sortedArray)
//     }
    
//         return newArr;
//     }
//     let studentsObj=[
//         { name: "Stella", age: 25, grade: 11 },
//         { name: "Mohammed", age: 31, grade: 13 },
//         { name: "Brian", age: 19, grade: 18 },
       
//       ]; // => { total: 3, age: 25, grade: 14 }
//     function studentBody(studentsObj){
    
//     //  The function should return an object that contains the 
//     //  total number of students in the array,
//     //total amount of key
//     let newObj={}
//     newObj["total"]=objLength(studentsObj);
//     newObj["age"]=ageAndAvg(studentsObj);
//     newObj["garde"]=gradeAndAvg(studentsObj);
//     return newObj;
//     }
//     function objLength(studentsObj) {
//         return studentsObj.length;
//       }
//     function ageAndAvg(studentsObj){
//         let sumOfAge=0;
//     for (let key in studentsObj){
//         ageOfStudent=studentsObj[key].age;
//         sumOfAge +=ageOfStudent;
//     }
//     // the average age of all students,
//     return sumOfAge/studentsObj.length;
//     }
//     function gradeAndAvg(studentsObj){
//         let sumOfGrade=0;
//         for (let key in studentsObj){
//             gradeOfStudent=studentsObj[key].grade;
//            // console.log(ageOfStudent)
//             sumOfGrade+=gradeOfStudent;
//         }
//        // the average age of all students,
//     return sumOfGrade/studentsObj.length;
//     }
    
// console.log(studentBody(studentsObj));



// fruitBasket(fruitNames: string[])` is a function that takes an array of strings as an argument, 
// where each string is the name of a fruit. 
let arr=["pear", "apple", "banana"];
console.log(fruitBasket(arr));
function fruitBasket(arr){
    let newObj = [];
arr.forEach(element => {
    let fruitObj={};
    fruitObj["name"]=element;
    fruitObj["weight"]=weight();
    fruitObj["eat"]=eat(element);
    fruitObj["throwAway"]=throwAway (element);
newObj.push(fruitObj);
});
return newObj;
}
function weight(){
    return Math.floor(Math.random() * 10+1);
}
function eat (singlefruit){
    return `You ate a${singlefruit}!`;
}
function throwAway (singlefruit){
    return `You threw away a ${singlefruit}!`
}



// const fruits = fruitBasket(["pear", "apple", "banana"]); => [
//   {
//     name: 'pear',
//     weight: 1,
//     eat: [Function: eat],
//     throwAway: [Function: throwAway]
//   },
//   {
//     name: 'apple',
//     weight: 3,
//     eat: [Function: eat],
//     throwAway: [Function: throwAway]
//   },
//   {
//     name: 'banana',
//     weight: 2,
//     eat: [Function: eat],
//     throwAway: [Function: throwAway]
//   }
// ]);

// arr[0].eat(); // => "You ate a pear!"

// `getBooksByLanguage(books: {title: string, language: string}[])` 
// returns an object where each key is a language, 
// and its value is an array of all the books written in that language.

// **You will only get credit if you use `reduce`!**
// const books = [
//     { title: "金雲翹傳", language: "zh" },
//     { title: "Kongens Fald", language: "da" },
//     { title: "肉蒲團", language: "zh" },
//     { title: "Seitsemän veljestä: Kertomus", language: "fi" },
//     { title: "The Gold Horns", language: "da" },
//     { title: "Kalevala", language: "fi" },
//     { title: "Työmiehen vaimo", language: "fi" },
//     { title: "封神演義", language: "zh" },
//     { title: "Samlede Værker, Andet Bind", language: "da" },
//   ];
// function getBooksByLanguage(books){
//     let newBooks={};
//     let arr=[];
//     books.forEach((book)=>{
     
//         let lang=book.language;
//         // console.log(lang);
//         if(newBooks.hasOwnProperty(lang)){
//             newBooks[lang] +=`${book.title} , `;
//         }else {
//             newBooks[lang]=`${book.title} , `;
//         }
        
//     });
//     arr.push(newBooks);

        
//     console.log(arr);
//     // })
//     return arr;
// }
// // ```js


// getBooksByLanguage(books); /* => {
//   zh: [ '金雲翹傳', '封神演義', '肉蒲團' ],
//   fi: [ 'Kalevala', 'Seitsemän veljestä: Kertomus', 'Työmiehen vaimo' ],
//   da: [ 'Samlede Værker, Andet Bind', 'Kongens Fald', 'The Gold Horns' ]
// }*/

//6


// Our coin machine is broken!
//  We need you to write a function that will take a number in cents 
//  as an argument and return the correct change in coins. 
//  The function should return an object with the number of 
//  quarters, dimes, nickels, and pennies needed to make the change.
let cents=99;
console.log(coinMachine(cents))
function coinMachine(cents){
    let coinObj={};
let quarter=Math.floor(cents/25);
coinObj["Quarter"]=quarter;
cents -=25*quarter;
let dime=Math.floor(cents/10);
coinObj["Dime"]=dime;
cents -=10*dime;
let nickel = Math.floor(cents/5);
coinObj["Nickel"]=nickel;
    cents -= 5*nickel;

    let penny = cents;
    console.log(`Quarters: ${quarter}, Dimes: ${dime}, Nickels: ${nickel},Pennies: ${penny}`)
}