let arr1 = [1,2,3,4,5,6,7,8,9];
let arr2=[];
let n = parseInt(prompt("Nhap:"));
let sum = 0;
let j = 0;
for(let i = 0;i<arr1.length;i++){
    sum += arr1[i];
    while(sum>n && j<i){
        sum -= arr1[j]
        j++;
    }
    if(sum===n){
        arr2=arr1.slice(j,i+1);
    }
}
console.log(arr2);