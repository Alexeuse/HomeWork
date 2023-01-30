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
}
// sut(0, 0, 1);

//Напишите рекурсивную функцию для подсчёта факториала числа.
function fact(i) {
if (i == 1) { 
  return 1;
}
    else {
      return i * fact(i - 1);
  }
}
fact(7);







