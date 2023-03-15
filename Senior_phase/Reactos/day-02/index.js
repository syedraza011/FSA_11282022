
let movies1=["abc","cba","tba","mcg"];
let movies2=["azc","mba","mba","gcg"];
let movies3=["hzc","xba","bba","acg"];
console.log( dvdCollection(movies1, movies2, movies3));
    function dvdCollection(movies1, movies2, movies3){
        let newArr=[];
   for(let i=0;i<movies1.length;i++){
    newArr.push(movies1[i]);
   }
   for(let i=0;i<movies2.length;i++){
    newArr.push(movies1[i]);
   }
   for(let i=0;i<movies3.length;i++){
    newArr.push(movies1[i]);
   }

       console.log(newArr)
        newArr.sort((a, b) => {
            if (a > b) {
                return +1
            } else
                if (a < b) {
                    return -1
                } else {
                    return 0
                }
        })
    //     console.log(sortedArray)
    // }
    
        return newArr;
    }
