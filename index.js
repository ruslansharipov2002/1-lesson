// // let age = Symbol("age")
// // let user = {name: "ali", [age]: 32}


// // let obj = {};
// // Object.defineProperty(obj, 'x', {value: 42, writable: true});

// // obj.x = 9; 
// // console.log(obj)


// // function number(params) {
// //     let natija = "tub son emas "
// //     let cound = 0 
// // }


// function isPrime(number) {
//     if (number <= 1) {
//         return "tub son emas ";
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return "tub son";
//         }
//     }
//     return "";
// }

// // Test qilish
// console.log(isPrime(11));  // true
// // console.log(isPrime(12)); // false

// 1-task 

// function isPrime(son) {
//     if (son <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(son); i++) {
//         if (son % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(tubSonmi(13))


// 3-task 

// function mukammalSonmi(son) {
//     let yigindi = 0;
//     for (let i = 1; i <= son / 2; i++) {
//         if (son % i === 0) {
//             yigindi += i;
//         }
//     }
//     return yigindi === son;
// }

// console.log(mukammalSonmi(6))  
  
// 4-task


// function xonaliSonmi(son) {
//     if (son === 0) {
//         return 1; 
//     }
//     return Math.floor(Math.log10(Math.abs(son))) + 1;
// }

// console.log(xonaliSonmi(123))

// 6-task

// function engKamUzunlikdagiSoz(sentence) {
//     const sozlar = sentence.split(" ");
//     let engKamSoz = sozlar[0]; 
    
//     for (let i = 1; i < sozlar.length; i++) {
//         if (sozlar[i].length < engKamSoz.length) {
//             engKamSoz = sozlar[i];
//         }
//     }
    
//     return engKamSoz;
// }

// console.log(engKamUzunlikdagiSoz("Bu birinchi test so'zi")); 

// 7-task

// function turniAniqlash(argument) {
//     if (typeof argument === 'number') {
//         return "son";
//     } else if (typeof argument === 'string') {
//         return "string";
//     } else {
//         return 0;
//     }
// }

// console.log(turniAniqlash("son"))


// 8-task 

// function teskariQilish(string) {
//     if (typeof string !== 'string') {
//         return "Argument string emas!";
//     }
//     let teskari = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         teskari += string[i];
//     }
//     return teskari;
// }

// console.log(teskariQilish("Salom")); 


// 9-task 

// function sonlarSoni(matn) {
//     if (typeof matn !== 'string') {
//         return "Matn kiritilishi kerak!";
//     }
//     let sonlar = matn.match(/\d+/g);
//     return sonlar ? sonlar.length : 0;
// }

// console.log(sonlarSoni("Bu 12 22ta son qatnashgan"))

// 10-task 


function teskariQilish(son) {
    if (typeof son !== 'number') {
        return "Son kiritilishi kerak!";
    }
    return parseFloat(son.toString().split('').reverse().join(''));
}

console.log(teskariQilish(123))
