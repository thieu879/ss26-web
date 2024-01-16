let arr1 = [1,2,3,4,2,5,3,1];
let arr2 = [];
let a = 0;
for(let i=0; i<arr1.length; i++){
    arr2.push(arr1[i]);
    for( let j=0; j<arr2.length; j++){
        if(arr1[i]===arr2[j]){
            a++;
        }
    }
    if(a>1){
        console.log(arr1[i]);
    }
    a = 0;
}