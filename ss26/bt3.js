let arr = [2,"nguoi","ngom",20,"nguoi",20];
arr.length;
let s=0;
let input = parseInt(prompt("Nhap:"));
for(let i = 0;i<arr.length;i++){
    if(arr[i]===input){
        s++;
    }
}
console.log("so lan xuat hien la:",s);