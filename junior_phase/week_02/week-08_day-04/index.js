//alert("hello");
const arr1 = [2, 7, 4, 6, 7, 4];
const arr2 = [7, 1, 9, 7, 4, 5];

function intersection(arr1,arr2){
    let obj={};
    let newArr=[];
    // if(arr1.length<arr2.length){
        for(let i=0;i<arr1.length;i++){
            let fNum=arr1[i];
            for(let j=0;i<arr2.length;j++){
                let sNum=arr2[i];
                if(fNum===sNum){
                
                newArr.push(fNum);
                }
            }
        }
        
        // }else {
        //     min=arr2.length;
        // }
        // for(let i=0;i<min;i++){
        //     if(arr1[i]===arr2[i]){
        //     newArr.push(arr1[i]);
        //     }
        // }
    return newArr;
}
console.log(intersection(arr1,arr2));