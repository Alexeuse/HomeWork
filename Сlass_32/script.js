//1. Создайте функцию, которая принимает три числа: два первых должны быть длиной сторон катетов прямоугольного треугольника, а третье – длиной гипотенузы. Функция возвращает true, если такой прямоугольный треугольник возможен, и false, если нет.

// function triangle(a, b, c) {
// 
// let d = Math.sqrt(a ** 2 + b ** 2);
// if (c == d) {
// console.log('может существовать');
// return true;
// } else {
// console.log('не может');
// return false;
// }
// }
// triangle(5, 12, 13);


//2. Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений строки str. По умолчанию n=2, str — пустая строка.
// function repeat(str = ' ', n = 2){
// 
// }
// 
// repeat(str, n);

// 3. Создайте функцию, которая принимает два аргумента – количество учеников в классе и количество парт в кабинете. Функция возвращает строку вида «не хватает 2 парт» / «1 лишняя парта».

function count(desk, pupil) {
  // let pair = pupil / 2;

  if ((desk - pupil / 2) >= 0) {
    let extra = desk - pupil / 2;

    console.log(extra);
    console.log("свободно");
  }
  else {
    let non = pupil / 2 - desk;
    console.log(non);
    console.log("не хватает");
  }
}
count(5, 20)



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
// return i * fact(i - 1);
// }
// }
// fact(7);


//4.




//5. Напишите функцию для решения квадратных уравнений. В качестве параметров она должна принимать коэффиценты a, b и c, возвращать – количество корней. Сами корни уравнения (или информацию о их отсутствии) функция должна выводить в консоль.
// Примечание 1. Ищем только решения в действительных числах, комплексные не нужны!
// Примечание 2. Для получения квадратного корня используйте стандартную функцию JS: [Math.sqrt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt).


// function koren(a, b, c) {
  // let disk = b ** 2 - 4 * a * c;
  // console.log(disk);
  // if (disk > 0) {
    // let x1 = ((-b + Math.sqrt(disk)) / (2 * a));
    // let x2 = ((-b - Math.sqrt(disk)) / (2 * a));
    // console.log(x1, x2);
  // }
  // else if (disk == 0) {
    // let x = -b / (2 * a);
    // console.log(x);
  // }
  // else {
    // console.log("Корней нет");
  // }
// }
//
//
// koren(-7, -7, 8);
// 





