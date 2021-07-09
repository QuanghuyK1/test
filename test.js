// // //bài 1.
// let str_input = prompt('nhập chuỗi: ');
// let str_input1 = '';
// for(let i = str_input.length-1;i>=0;i--){
//     str_input1 +=str_input[i];
// }
// console.log(str_input1);
// //bài 2.
// let str = prompt('nhập chuỗi');
// let str1;
// function capitalizeEachWord(str) 
// { 
//     var words = str.split(" "); 
//     var arr = []; 
//     for (i in words) 
//     { 
//      temp = words[i].toLowerCase(); 
//      temp = temp.charAt(0).toUpperCase() + temp.substring(1); 
//      arr.push(temp); 
//     } 
//     return arr.join(" "); 
// } 
// str1 = capitalizeEachWord(str)
//  console.log(str1);
// //bài 3
// function xoa_trung(arr,arr1){
//    for(let i = 0;i<arr.length;i++){
//         let dem = 0;
//         for(let j = 0;j<i;j++){
//             if(arr[i]==arr1[j]){
//                 dem++;
//             }
//         }
//         if(dem==0){
//             arr1.push(arr[i]);
//         }
//    }
//    return arr1;
// }
// let arr=[1,2,3,3,4,5,4,4,4,5,5];
// let arr1 = [];
// arr1 = xoa_trung(arr,arr1);
// console.log(arr1);
//bài 5.
let a = prompt('nhap ngay thang nam');
a = a.split('/');
console.log(a);