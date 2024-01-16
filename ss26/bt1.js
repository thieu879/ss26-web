let arr = [2,"nguoi","ngom",20];
arr.length;
for(let i = 0;i<arr.length;i++){
    if(isNaN(arr)){
        console.log("Trong mảng không tồn tại số nguyên");
    }else{
        console.log(arr[i]);
    }
}