let arr1=[1,2,3,4,5,6,7,8,9,10,-2,-4,-6];
let arr2=[];
for(let i = 0;i<arr1.length;i++){
    if(arr1[i]<0){
        arr2.unshift(arr1[i]);
    }else if(arr1[i]>0){
        arr2.push(arr1[i]);
    }
}
console.log(arr2);