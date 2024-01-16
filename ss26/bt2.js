let arr = [2,"nguoi","ngom",20];
let input = prompt("Nhap gia tri tim kiem:");
let found = false;
for(let i = 0;i<arr.length;i++){
    if(arr[i]==input){
        console.log(`vi tri thu ${i} trong mang`);
        found = true;
    }
}
if(!found){
        console.log("phần tử không tồn tại");
}