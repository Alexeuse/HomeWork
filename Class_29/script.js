// Напишите функцию, которая получает три числа и возвращает их сумму.
// let a = +prompt('a');
// let b = +prompt('b');
// let c = +prompt('c');
// let numbers = function () {
// console.log(a + b + c);
// }
// numbers();

// Напишите функцию, которая подсчитывает сумму чисел от 1 до заданного X.
// let a = +prompt('Enter number');
// let summa = function () {
// let b = 0;
// let sum = 0;
// while (b < a) {
// b++;
// sum += b
// }
// console.log(sum);
// }
// summa();


//Напишите функцию, которая подсчитывает сумму цифр числа
let a = +prompt("До четырех знаков")
let summa = function (a, c, b) {
    while (a > 999) {
      c = a % 10;
          a = a - c;
          a = a / 10;
          b = b + c;}
                
        while (a > 99) {
          c = a % 10;
          a = a - c;
          a = a / 10;
          b = b + c;
          }
          
          while (a > 9) {
            c = a % 10;
            a = a - c;
            a = a / 10;
            b = b + c;
        }
           b = a + b; 
      console.log(b);
  }
  summa(a, 0, 0);
// 
// 
// 
// let x = prompt('Enter number');
// let a = x[0] * 1;
// let b = x[1] * 1;
// let summ = a + b;
// console.log(summ);

















