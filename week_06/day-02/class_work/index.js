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
    let studentsObj=[
        { name: "Stella", age: 25, grade: 11 },
        { name: "Mohammed", age: 31, grade: 13 },
        { name: "Brian", age: 19, grade: 18 },
       
      ]; // => { total: 3, age: 25, grade: 14 }
    function studentBody(studentsObj){
    
    //  The function should return an object that contains the 
    //  total number of students in the array,
    //total amount of key
    let newObj={}
    newObj["total"]=objLength(studentsObj);
    newObj["age"]=ageAndAvg(studentsObj);
    newObj["garde"]=gradeAndAvg(studentsObj);
    return newObj;
    }
    function objLength(studentsObj) {
        return studentsObj.length;
      }
    function ageAndAvg(studentsObj){
        let sumOfAge=0;
    for (let key in studentsObj){
        ageOfStudent=studentsObj[key].age;
        sumOfAge +=ageOfStudent;
    }
    // the average age of all students,
    return sumOfAge/studentsObj.length;
    }
    function gradeAndAvg(studentsObj){
        let sumOfGrade=0;
        for (let key in studentsObj){
            gradeOfStudent=studentsObj[key].grade;
           // console.log(ageOfStudent)
            sumOfGrade+=gradeOfStudent;
        }
       // the average age of all students,
    return sumOfGrade/studentsObj.length;
    }
    
console.log(studentBody(studentsObj));
  

    