//1. Создайте функцию, которая получает в качестве аргументов три числа и возвращает наименьшее из них.
// function min(a, b, c) {
// if (a < b && b < c) {
// console.log(a);
// return a;
// } else if (b < a && a < c) {
// console.log(b);
// return b;
// }
// else {
// console.log(c);
// return c;
// }
// }
// min(3, 2, 1);



//2. Создайте функцию, которая получает в качестве аргументов значения суток, часов и минут, а возвращает соответствующее им количество секунд.

// function sut(a, b, c) {
// a = a * 24 * 60 * 60;
// b = b * 60 * 60;
// c = c * 60;
// let itog = a + b + c;
// console.log(itog);
// return itog;

// sut(0, 0, 1);

//3. Напишите рекурсивную функцию для подсчёта факториала числа.

// function fact(i) {
// if (i == 1) { 
// return 1;
// }
// else {
//   return i * fact(i - 1);
// }
// }


// fact(7);


//4. Напишите рекурсивную функцию, которая разворачивает введённое число задом наперёд. Например, если на вход функция получает 1234, вернуть она должна 4321.
// let a = +prompt("Enter number");
// let b;
// let c;
// let d;
// let invers = function (a) {
//     while (a > 999) {
//       var b = a % 10;
//           a = a - b;
//           a = a / 10;
          
//           }
                
//         while (a > 99) {
//           var c = a % 10;
//           a = a - c;
//           a = a / 10;
          
//           }
          
//           while (a > 9) {
//             var d = a % 10;
//             a = a - d;
//             a = a / 10;
    
//         }
//       if (b >= 0) {
//         console.log(b,c,d,a);  
//       }
//       else if (c >= 0){
//         console.log(c,d,a);
//       }     
//       else if (d >= 0){
//       console.log(d,a);
//       }
    
//     else {
//       console.log(a);
//   }
// }
//   invers(a);
 
// test2
let a = +prompt("enter number")
function invert(a) {
  if (a -= a % 10 > 9){
  let b = a % 10;
  console.log(b);
  a = invert((a - b) / 10);
  }
}
invert(a);



//5. Напишите функцию для решения квадратных уравнений. В качестве параметров она должна принимать коэффиценты a, b и c, возвращать – количество корней. Сами корни уравнения (или информацию о их отсутствии) функция должна выводить в консоль.
// Примечание 1. Ищем только решения в действительных числах, комплексные не нужны!
// Примечание 2. Для получения квадратного корня используйте стандартную функцию JS: [Math.sqrt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt).


// function koren(a, b, c) {
//   let disk = b ** 2 - 4 * a * c;
//   console.log(disk);
//   if (disk > 0) {
//     let x1 = ((-b + Math.sqrt(disk)) / (2 * a));
//     let x2 = ((-b - Math.sqrt(disk)) / (2 * a));
//     console.log(x1, x2);
//   }
//   else if (disk == 0) {
//     let x = -b / (2 * a);
//     console.log(x);
//   }
//   else {
//     console.log("Корней нет");
//   }
// }


// koren(-7, -7, 8);






