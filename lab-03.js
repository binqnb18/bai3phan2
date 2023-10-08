arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]

// cau a. Tìm các cặp số có tổng bằng 10

// let dodaimang = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14];
// let ketqua = [];

// for(let i = 0; i < dodaimang.length - 1; i++) {
//     for(let j = i + 1; j < dodaimang.length; j++) {
//         if (dodaimang[i] + dodaimang[j] === 10) {
//             ketqua.push([dodaimang[i], dodaimang[j]]);
//         }
//     }
// }
// console.log(ketqua);

// cau b. Xoá các phần tử trùng nhau trong mảng
// let dodaimang = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14];
// let ketqua = [];

// for( let i = 0; i < dodaimang.length; i++) {
//     let trunglap = false;
//     for( let j = 0; j < i; j++) {
//         if( dodaimang[i] === dodaimang[j]) {
//             trunglap = true;
//             break;
//         }
//     }
//     if(!trunglap) {
//         ketqua.push(dodaimang[i]);

//     }
// }
// console.log(ketqua);

//cau  d. Tính tổng 3 số lớn nhất trong mảng
// let dodaimang = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14];
// let max1 = -Infinity;
// let max2 = -Infinity;
// let max3 = -Infinity;

// for( let i = 1; i < dodaimang.length; i++) {
//     if(dodaimang[i] > max1) {
//         max3 = max2;
//         max2 = max1;
//         max1 = dodaimang[i];
//     } else if( dodaimang[i] > max2) {
//         max3 = max2;
//         max2 = dodaimang[i];
//     } else if( dodaimang[i] > max3) {
//         max1 = dodaimang[1];
//     }
// }
// let sum = max1 + max2 + max3;
// console.log(sum);

// cau e. Tính trung bình cộng 3 số lớn nhất trong mảng

// let dodaimang = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14];
// let max1 = -Infinity;
// let max2 = -Infinity;
// let max3 = -Infinity;

// for( let i = 1; i < dodaimang.length; i++) {
//     if(dodaimang[i] > max1) {
//         max3 = max2;
//         max2 = max1;
//         max1 = dodaimang[i];
//     } else if( dodaimang[i] > max2) {
//         max3 = max2;
//         max2 = dodaimang[i];
//     } else if( dodaimang[i] > max3) {
//         max1 = dodaimang[1];
//     }
// }
// let sum = max1 + max2 + max3;
// let average = sum/3;
// console.log(average);

// cau f. Tìm độ lệch lớn nhất giữa các phần tử trong mảng (Gợi ý: max – min)

let dodaimang = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14];
let max = [0];
let min = [0];

for( let i = 1; i < dodaimang.length; i++) {
    if( dodaimang[i] > max) {
        max = dodaimang[i];
    } else if( dodaimang[i] < min) {
        min = dodaimang[i];
    }
}
let chenhlech = max - min;
console.log(chenhlech);