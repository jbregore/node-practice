// var http = require("http");
// var fs = require("fs");

// http.createServer((req, res) => {
//     // const text = fs.readFileSync("./content/big.txt", "utf8")
//     // res.end(text);
//     const fileStream = fs.createReadStream("./content/big.txt", "utf8");
//     fileStream.on("open", () => {
//         fileStream.pipe(res)
//     })
//     fileStream.on("error", (err) => {
//         res.end(err);
//     })
// }).listen(5000);

// const fizzBuzz = () => {
//     for(let i = 0; i <= 100 ; i++){
//         // if(i%15 === 0){
//         //     console.log("FizzBuzz");
//         // }
//         if(i%3 === 0 && i%5 === 0){
//             console.log("FizzBuzz");
//         }else if(i%3 === 0){
//             console.log("Fizz");
//         }else if(i%5 === 0){
//             console.log("Buzz");
//         }else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();

//  5, 15 => 5 

// const getDivisor = (x, y) => {
//     let min = Math.min(x,y);
//     // console.log(min);
//     let max = min === x ? y : x;
//     // console.log(max)

//     if(max % min === 0){
//         return min;
//     }else {

//         // for(let i = max; max > 0;)
//         let mid = Math.floor(max/2);
//         let divisor = mid;
//         for (let i = mid; i > 0; i--) {
//             if(max%i === 0 && min%i === 0){
//                 divisor = i;
//                 break;
//             }
//         }
//         return divisor;
//     }
// }

// console.log(getDivisor(7, 15));

// function add(num1, num2){
//     return num1+num2;
// }

// console.log("add:"+add(2,3));

// function sum(numArr){
//     let sum = 0;
//     for(let i = 0; i< numArr.length; i++){
//         sum += numArr[i];
//     }
//     return sum;
// }

// const myArr = [1,2,3,4,5];

// console.log("sum:"+sum(myArr))

// function getStringIncludes(str1, str2){
//     let result = str1.toLowerCase().includes(str2.toLowerCase());
//     return result;
// }

// console.log("stringIncludes:"+ getStringIncludes("Hello world", "hello"));

function getNames(nameArr) {
    let names = [];
    for(let i = 0; i< nameArr.length; i++){
        // if(nameArr[i].hasOwnProperty('name')){
        //     names.push(nameArr[i].name)
        // }
        if(nameArr[i].name){
            names.push(nameArr[i].name)
        }
    }
    return names;
}

console.log("getNames:" + getNames(
    [
        { a: 1 },
        { name: "Jane" },
        {},
        { name: "Mark" },
        { name: "Sophia" },
        { b: 2 }
    ]
))