// //Class work
/*

pwd- directory or address
~- means home folder
mkdri fullstack
creating a file write touvh 
how to find in git hwere are you in git
to see hidden ls -al it will show any hidden folders
*/
// function findHerbivores(obj){
//     let animal=[];
//     for(let key in obj){
//         let animal=obj[key];
//         console.log()
//         if(key.isHerbivore){
//             animal.push()
//         }
//     }
// }
console.log(merge(["math", "history", "physics"], ["B-", "A+", "B+"]))
function merge(arr1, arr2) {
    let obj = {};
    for (let i = 0; i < arr1.length; i++) {
        let key=arr1[i]
      obj [key]= arr2[i];
        //obj+=1;
    }
    return obj;
  }