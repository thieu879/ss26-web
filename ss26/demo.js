// // console.log("Hello world");
// // tạo ra 1 danh sách sinh viên trong lớp
// let student1="Khanh Huyen";
// let student2="minh lop truong";
// let student3="Nam Son Que";
// let studentN="Quan ngheo";

// let studentList = new Array(student1, student2, student3, studentN);
// console.log(studentList);

// let numberList = [student1,20,30,40];
// console.log(numberList);

// let ramdomList = [true,false,student1,20,30,40];
// console.log(ramdomList);

// let numbers = [10,20,30,40,50];
// //index       0 , 1, 2, 3, 4     (length/size-1)

// numbers.length;

// console.log("Độ dài của mảng number:", numbers.length-1);
// console.log("number[2]=",numbers[2]);
// console.log("number[4]=",numbers[numbers.length-1]);

// for(let i = 0;i<=numbers.length-1;i++){
//     console.log(`number[${i}]=`, numbers[i]);
// }
 
// //rút ngắn vòng lặp for(for..of)
// for(let number of numbers){
//     console.log("tung phan tu", number);
// }
// //rút ngắn vòng lặp for(for..in)
// for(let index in numbers){
//     console.log(`number[${index}]`, numbers[index]);
// }

let students = [
    "Khanh Huyen",
    "Khac hung",
    "DUng lop pho",
    "Hoang Beo",
    "Hoang hat hay",
];
console.log("Danh sach sinh vien hien tai:", students);
//create
//1. them dau(unshift)
students.unshift("Nam Son Que");
console.log("danh sach sinh vien sau khi them vao dau:", students);
//2. them vao cuoi(push)
students.push("minh moc");
console.log("danh sach sinh vien sau khi them vao cuoi:", students);
//3.them vao bat ki(splice)
students.splice(2,0,"quang anh");
console.log("danh sach sinh vien sau khi them vao bat ki:", students);


//update
//1.gan
students[2] = "Dung lao cong";
console.log("danh sach sinh vien sau khi duoc cap nhat:", students);
//2.splice
students.splice(2,1,"dung lao cong");
console.log("danh sach sinh vien sau khi duoc cap nhat:", students);


//delete
//1.xoa dau(shift)
students.shift();
console.log("danh sach sinh vien sau khi xoa dau:", students);

//2.xoa cuoi(pop)
students.pop();
console.log("danh sach sinh vien sau khi xoa cuoi:", students);
//3.xoa bat ki(splice)
students.splice(1,1);
console.log("danh sach sinh vien sau khi xoa bat ki:", students);
