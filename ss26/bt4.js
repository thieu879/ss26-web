let arr=[];
let a = parseInt(prompt("Nhap a:"));
let b = parseInt(prompt("Nhap b:"));
if(a<b){
    for(let i = 0;i<b;i++){
        if(i%a===0){
            arr.push(i);
        }
    }
}else if(b<a){
    for(let i = 0;i<a;i++){
        if(i%b===0){
            arr.push(i);
        }
    }
}
console.log(arr);