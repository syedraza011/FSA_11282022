    // alert("hello");

    function higherOrLower(value1, value2){
        if(value1>value2){
        return "higher"
        }else if(value1===value2){
        return "equal"
        } else {
        return "lower"
        }
    }
    console.log(higherOrLower(5, 6))
let movies1=["abc","cba","tba","mcg"];
let movies2=["azc","mba","mba","gcg"];
let movies3=["hzc","xba","bba","acg"];
console.log( dvdCollection(movies1, movies2, movies3));
    function dvdCollection(movies1, movies2, movies3){
        let newArr=[];
        let str='';
        str+=movies1+","+movies2+","+movies3;
        newArr.push(str);
        function myFunction(){
        let sortedArray=newArr.sort(function(a,b){
            if(a<b)return -1;
            if(a>b)return 1;
            return 0;
        });
        console.log(sortedArray)
    }
    
        return newArr;
    }
    let studentObj=[
        { name: "Stella", age: 25, grade: 11 },
        { name: "Mohammed", age: 31, grade: 13 },
        { name: "Brian", age: 19, grade: 18 },
      ]; // => { total: 3, age: 25, grade: 14 }
    function studentBody(studentsObj){
    
    //  The function should return an object that contains the 
    //  total number of students in the array,
    //total amount of key 
    // the average age of all students,
    //grab age and avg of all ages
    //   and the average grade of all students.
    //grab grades and sum and avg
    }



    