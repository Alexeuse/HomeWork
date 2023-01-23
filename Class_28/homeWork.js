//loop-1. 
//В доме 5 подъездов по 20 квартир каждый. Получите от пользователя номер квартиры и взамен выдайте в консоль номер подъезда. Учитывайте, что пользователь может ввести число меньше 1 или больше 100.

// let numberFlat = +prompt('Enter flat number');
// numberFlat > 0 && numberFlat <= 20 ? console.log('Your entrance number 1') :
//     numberFlat > 20 && numberFlat <= 40 ? console.log('Your entrance number 2') :
//         numberFlat > 41 && numberFlat <= 60 ? console.log('Your entrance number 3') :
//             numberFlat > 61 && numberFlat <= 80 ? console.log('Your entrance number 4') :
//                 numberFlat > 81 && numberFlat <= 100 ? console.log('Your entrance number 5') : console.log('Enter Your flat number from 1 to 100');


// loop-2
// Получите от пользователя строку с названием марки автомобиля. Напишите конструкцию switch/case, которая будет обрабатывать 6-7 самых известных марок (BMW, Ford, Peugeot etc.) и выдавать в консоль введённую строку + страну происхождения автомобиля (например, "Ford – страна происхождения США"). Для остальных строк выдавайте сообщение "some_input – страна происхождения неизвестна".

// let carModel = prompt('Enter car model');
// switch (carModel) {
//     case 'bmw':
//         console.log('BMW, country of origin Germany');
//         break;
//     case 'ford':
//         console.log('Ford, country of origin USA');
//         break;
//     case 'honda':
//         console.log('Honda, country of origin Japan');
//         break;
//     case 'kia':
//         console.log('KIA, country of origin Korea');
//         break;
//     case 'alfa-romeo':
//         console.log('Alfa-Romeo, country of origin Italy');
//         break;
//     default:
//         console.log('country of origin unknown');
// }

// loop-3
// Пользователь вводит год. Определите, является ли этот год високосным.

// let year = +prompt('Enter year');
// year % 4 ? console.log('NOT leap year') :
//     year % 100 ? console.log('leap year') :
//         year % 400 ? console.log('NOT leap year') :
//             console.log('leap year');



//loop-4
//Пользователь вводит число от 1 до 20. Выведите в консоль таблицу умножения этого числа.
//Например, для числа 7:
// 7x1=7
// 7x2=14
// ...
// 7x10=70

// let number = +prompt('Enter number from 1 to 20');
// number >= 1 && number <= 20 ? console.log(number + ' x 1 = ' + number * 1 + '\n'
//     + number + ' x 2 = ' + number * 2 + '\n'
//     + number + ' x 3 = ' + number * 3 + '\n'
//     + number + ' x 4 = ' + number * 4 + '\n'
//     + number + ' x 5 = ' + number * 5 + '\n'
//     + number + ' x 6 = ' + number * 6 + '\n'
//     + number + ' x 7 = ' + number * 7 + '\n'
//     + number + ' x 8 = ' + number * 8 + '\n'
//     + number + ' x 9 = ' + number * 9 + '\n') : console.log('ENTER number from 1 to 20');

//loop-5
//Выведите в консоль сумму всех нечётных чисел от 1 до 50. Дополнительно: решите эту задачу, используя оператор continue.

// let i = 1;
// let sum = 0;
// for (; i <= 50; i++) {
//     if (!(i % 2))
//         continue;
//     sum += i;
// }
// console.log(sum);

//loop-6
//Используя циклы, выведите в консоль первые 15 [чисел Фибоначчи](https://ru.wikipedia.org/wiki/Числа_Фибоначчи).
//WHILE
// let x = 1;
// let y = 0;
// console.log(x);
// console.log(y);
// while (x < 144) {
// x += y;
// console.log(x);
// y += x;
// console.log(y);
// }
//WHILE

// let x = 1;
// let y = 0;
// console.log(y);
// for (; x < 377; x += y) {
// if (y < 377) y += x;
// console.log(x);
// console.log(y);
// }


//loop-7
// Используя циклы (и операцию конкатенации), выведите в консоль "шахматную доску":
let x = ' #';
let y = '# ';
while (x == ' #') {
    x += x;
    while (x < ' # # # #') {
        x += x;
        while (x == ' # # # #') {
            x = x + '\n';
        }
    }
}
while (y == '# ') {
    y += y;
    while (y < '# # # # ') {
        y += y;
        while (y == '# # # # ') {
            y = y + '\n';
        }
    }
}

console.log(x + y + x + y + x + y + x + y);






// for (let z = ' '; z == ' '; z += '#') {
// if (z == ' ')
// continue;
// console.log(z);
// }

//
// for (let z = x + y; z < ' # # # #'; z += z) {
    // if (z == ' # # # #')
        // break;
    // console.log(z);
// }
// 








