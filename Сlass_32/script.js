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
// let str = prompt('Enter text');
// let n = prompt('Enter number');
// function repeat(str = '', n = 2) {
//   let new_str = '';
//   while (n-- > 0) 
//     new_str += str;
//     console.log(new_str); 
//   }
// repeat(str, n);

// 3. Создайте функцию, которая принимает два аргумента – количество учеников в классе и количество парт в кабинете. Функция возвращает строку вида «не хватает 2 парт» / «1 лишняя парта».

// function count(desk, pupil) {
//   // let pair = pupil / 2;

//   if ((desk - pupil / 2) >= 0) {
//     let extra = desk - pupil / 2;

//     console.log(extra);
//     console.log("свободно");
//   }
//   else {
//     let non = pupil / 2 - desk;
//     console.log(non);
//     console.log("не хватает");
//   }
// }
// count(5, 20)



// 4. Создайте функцию, которая получает в качестве аргумента оценку по 10-балльной шкале. Для ошибочных аргументов (0, «B») функция возвращает текстовую ошибку, для верных – их текстовое описание:

// let grade = +prompt("enter grade");

// switch (grade) {
//   case 10:
//     console.log('Brilliant');
//     break;
//   case 9:
//     console.log('Excellent');
//     break;
//   case 8:
//     console.log('Almost excellent	');
//     break;
//   case 7:
//     console.log('Very good');
//     break;
//   case 6:
//     console.log('Good');
//     break;
//   case 5:
//     console.log('Almost good');
//     break;
//   case 3:
//   case 4:
//     console.log('Satisfactory');
//     break;
//   case 2:
//   case 1:
//     console.log('Unsatisfactory');
//     break;
//   default:
//     console.log('error');
// }


// 5. Используя цикл do..while, создайте функцию, которая принимает числа через prompt(), пока не будет введено число 0.
// function zero(a) {
//   do { 
//     var a = +prompt('0');
//   }
//   while (a != 0);
//   console.log(a);
// }
// zero();

// 6. Перепишите функцию из задачи 5 так, чтобы она принимала числа, пока их сумма остаётся меньше 100, выводила эту сумму в консоль, а возвращала количество введённых чисел.
// var b = 0;
// var c = 0;
// function zero(a) {
//   do {
//     var a = +prompt(c);
//     b += a;
//     console.log(b);
//     c++;
//   }
//   while (b < 100);
//   console.log("enumeration");
// }
// zero();

// 7. Создайте функцию, которая принимает число в качестве аргумента и проверяет, является ли это число простым.
// var num = +prompt('enter');
// let i = 2;
// function prime(num) {
// while (i < num) {
// if (num % i === 0) {
// console.log("NO prime");
// break;
// }
// else (num % i !== 0) {
// i++;
// }
// }
// }
// prime(num);
// 
// 
// var num = +prompt('enter');


// function prime(num) {
//   for (let i = 2; i <= num; i++) {

//     if (num % i !== 0) {
//       continue;

//     }
//     else if (num / i == 1) {
//       console.log("prime");
//       break;
//     }

//     else if (num % i === 0) {
//       console.log("NO prime");
//       break;
//     }

//   }
// }
// prime(num);


// 8. Создайте функцию, которая принимает в качестве аргумента целое число, соответствующее порядковому номеру месяца. Если месяц с таким номером существует, функция возвращает имя сезона (лето, осень, зима, весна), к которому относится месяц. Если нет –сообщение об ошибке.


var month = +prompt('enter month');
function prime(month) {
  if (0 >= month || month >= 13) {
    console.log("error 1-12");
 }
else if ((month ^ 0) !== month){
  console.log("error 0,0");
}

else if (month > 2 && month < 6){
  console.log("Sring -- Berds");
}
else if (month > 5 && month < 9){
  console.log("Summer -- 38");
}
else if (month > 8 && month < 12){
  console.log("Autum -- leaf");
}
else (console.log("Winter -- Matheres"));
}
prime(month);
























    //   if (a <= 2) {
    //     console.log("no");}
    //     else if (a % 2 == 0) {
    //       console.log("no");}
    //       else if (a % 3 == 0) {
    //         console.log("no");}
    //         else if (a % 4 == 0) {
    //           console.log("no");}
    //           else if (a % 5 == 0) {
    //             console.log("no");}
    //             else if (a % 6 == 0) {
    //               console.log("no");}
    //               else if (a % 7 == 0) {
    //                 console.log("no");}
    //                 else if (a % 8 == 0) {
    //                   console.log("no");}
    //                   else if (a % 9 == 0) {
    //                     console.log("no");}
    //   else console.log("yes");
    // }

