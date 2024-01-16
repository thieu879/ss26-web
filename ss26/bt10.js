let arr1 = [1,2,3,4,5];
let arr2 = [-3,-1,0,1,5];
let arr3 = [1,5,6,7];
for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i]===arr2[j]){
            for(let k=0; k<arr3.length; k++){
                if(arr1[i]===arr3[k]){
                    console.log(arr1[i]);
                }
            }
        }
    }
}