


function minimalElement(arr) {
  let res
  // Пишите код ниже

  res = arr[0]
  for(const element of arr) {
    if (element < res) {
      res = element
    }
  }

  // Пишите код выше
  return res
}

console.log(minimalElement([3, 15, 22, 2, 4]))

// let i = 100;
// while(i <= 10) {
//   console.log(i)
//   i++
// }

// do {
//   console.log(i)
//   i++
// } while(i <= 10)

// 'i = i + 1' => 'i += 1' => 'i++'
// 'i = i + 10' => 'i += 10'
// 'i = x + 10'

// 1. Дали начальное значение переменной
// 2. Мы поставили условие
// 3. Пока условие было справедливо, мы выводили в консоль что-то и прибавляли единицу


// for(let i = 1; i <= 10; i++) {
//   console.log(i)
// }


// const year = prompt('Введите год своего рождения')
// const age = 2021 - parseInt(year)

// // TODO - switch
// let word
// const lastNumber = age % 10
// const twoLastNumbers = age % 100

// if (twoLastNumbers <= 19 || twoLastNumbers > 10) {
//   word = 'лет'
// } else if (lastNumber === 0 || lastNumber >= 5) {
//   word = 'лет'
// } else if (lastNumber === 1) {
//   word = 'год'
// } else if (lastNumber === 2 || lastNumber === 3 || lastNumber === 4) {
//   word = 'года'
// }


// const monthNumber = 12

// if (monthNumber === 1) {
//   console.log('Январь')
// } else if (monthNumber === 2) {
//   console.log('Февраль')
// } else if (monthNumber === 3) {
//   console.log('Март')
// } else if (monthNumber === 4) {
//   console.log('Апрель')
// } else if (monthNumber === 5) {
//   console.log('Май')
// } else if (monthNumber === 6) {
//   console.log('Июнь')
// } else {
//   console.log('Другой месяц')
// }


// function month(num) {
//   //Пишите код ниже
//   let res
//   switch(num) {
//     case 1:
//       return 'Январь'
//     case 2:
//       return 'Февраль'
//     case 3:
//       res =  'Март'
//       break
//     case 4:
//       res =  'Апрель'
//       break
//     case 5:
//       res =  'Май'
//       break
//     case 6:
//       res =  'Июнь'
//       break
//     default:
//       res =  'Другой месяц'
//   }
//   return res
// }

// console.log(month(11))



/*
0 - лет
1 - год
2, 3, 4 - года
5 - 9 - лет
*/


// const name = 'Александр';
// const age = 5;
// const hobby = 'плавать';
// const message = `Здравствуйте, меня зовут ${name}, мне ${age} лет и мне нравится ${hobby}.`;
// console.log(message)

// const rad = 10;
// const area = Math.PI * Math.pow(rad, 2);
// console.log(area)

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)

// const productName = 'Mango';
// const pricePerItem = 150;
// const isOnSale = false;
// const error = null;
// let quantity;
// console.log(typeof productName)
// console.log(typeof pricePerItem)
// console.log(typeof isOnSale)
// console.log(typeof error)
// console.log(typeof quantity)