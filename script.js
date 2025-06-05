// const product = {
//     title: "Ball Pen",
//     rating: 4,
//     offer: 5,
//     price: 270,
// };

// console.log(product);

// const profile = {
//     idName: "@yaksh.x.x.shah",
//     isFollow: true,
//     posts: 195,
//     followers: 569,
//     following: 4,
//     fullName: "Yaksh Shah",
// };

// console.log("Hello World!");

// let a = 15;
// let b = 8;

// console.log("a = ", a, "b = ", b);
// console.log("a + b = ", a+b);
// console.log("a - b = ", a-b);
// console.log("a * b = ", a*b);
// console.log("a / b = ", a/b);
// console.log("a % b = ", a%b);
// console.log("a ** b = ", a**b);

// Unary Operators
// a--;
// a++;
// console.log("a = ", a);

// Assignment Operators
// console.log("a = ",a = 4);
// console.log("a += ",a += 4);
// console.log("a -= ",a -= 4);
// console.log("a *= ",a *= 4);
// console.log("a **= ",a **= 4);

// Comparison Operators
// console.log("a == b", a == b); //false
// console.log("a != b", a != b); //true
// console.log("a === b", a === b); //true
// console.log("a !== b", a !== b); //true

// console.log("a > b", a > b); //false
// console.log("a >= b", a >= b); //false
// console.log("a <= b", a <= b); //true
// console.log("a < b", a < b); //true

// Logical Operators
// let cond1 = a > b; //true
// let cond2 = a === 16; //true

// console.log("cond1 && cond2 = ", cond1 && cond2); //true
// console.log("cond1 || cond2 = ", cond1 || cond2); //true
// console.log("cond1 ! cond2 = ", !(cond1 && cond2)); //false->true

// Conditional Statement


// if (age>=18) {
//     console.log("Eligible for driving liecence.");
// }else{
//     console.log("not eligible for liecence.");
// }

// let mode = "dark";
// if (mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }

// console.log(color);

// let n = 90;

// if (n%2 === 0) {
//     console.log(n, ' is an even number');
// } else {
//     console.log(n, " is an odd number");
// }

// let age = 132;

// if (age >= 18 && age < 60) {
//     console.log("You are eligible for driving liecence");
// } else if (age > 60) {
//     console.log("You are retired from driving a vehicle");
// } else {
//     console.log("You are not eligible for driving liecence");
// }

// age > 18 ? console.log("adult") : console.log("not adult");

// let n = prompt("Enter a number: ");

// if(n%5 === 0){
//     console.log(n, " is multiple of 5");
// } else {
//     console.log(n, " is not multiple of 5");
// }

// let marks = prompt("Enter marks: ");

// if(marks >= 90 && marks <= 100) {
//     console.log("You obtained 'A' Grade");
// } else if(marks >= 70 && marks <= 89) {
//     console.log("You obtained 'B' Grade");
// } else if(marks >= 60 && marks <= 69) {
//     console.log("You obtained 'C' Grade");
// } else if(marks >= 50 && marks <= 59) {
//     console.log("You obtained 'D' Grade");
// } else if(marks >= 40 && marks <= 49) {
//     console.log("You obtained 'P' Grade");
// } else {
//     console.log("You are 'FAIL'.");
// }

// for(let i = 0; i <= 10; i++){
//     console.log("Yaksh Shah");
// }

// console.log("loop has ended.")

// sum of numbers
// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum += i;
// }
// console.log(sum);

// While loop
// let i = 1;

// while(i <= 10){
//     console.log("Yaksh",'u');
//     i++;
// }


// do-while loop
// let i = 20;
// do {
//     console.log("Yaksh");
//     i++;
// } while(i > 10);

// for-of loop
// let str = "YakshShhhah";
// let l = 0;

// for(let val of str) {
//     console.log("val= ",val);
//     l++;
// }

// console.log("String Length = ", l);


// for-in loop
// let student = {
//     name: "Yaksh",
//     age: 20,
//     cgpa: 7.6,
//     isPass: true
// };

// for(let i in student) {
//     console.log("key = ",i, "value = ", student[i]);
// }

// for(let i=1; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// let n = 5;
// let userNum = prompt("Guess the number: ");
// while(userNum != n){
//     userNum = prompt("notCorrect Guess Again. ")
// }
// console.log("You guess it right.")


// str1 = "yaks";
// str2 = "h Shah";
// console.log(str1 + str2);


// let fullName = prompt("Enter your full name: ");

// let lw = fullName.toLowerCase();
// let l = fullName.length;

// console.log('@' + lw + l);

// let marks = [56, 89, 78, 46, 12];
// let sum = 0;

// for(let i=0; i<marks.length; i++) {
//     console.log(marks[i]);
// }

// for(let i of marks) {
//     sum += i;
// }

// avg = sum / marks.length;
// console.log(`Average marks of the class is ${avg}`);


// let price = [250, 645, 300, 900, 50];
// let price1 = [567, 9875, 321, 458];
// let i = 0;

// for(let val of price) {
//     let disc = val/10;
//     price[i] = price[i] - disc;
// console.log(`Value after discount is ${price[i]}`)
// i++;
// }

// price.push(456, 986, 458);
// price.pop()
// console.log(price); 
// console.log(price.toString()); 
// let newPrice = price.concat(price1);
// console.log(newPrice);

// price.shift();
// console.log(price.slice(1, 3)); 
// price.splice(1, 2);
// console.log(price); 

// let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// // arr.shift();
// arr.splice(2, 1, "Ola");
// arr.push("Amazon");
// console.log(arr);


// function myFunction(msg) {
//     console.log("Welcome to my First JS Function");
//     console.log(msg);
// }

// myFunction("I love JS");


// function sum(a, b) {
//     s = a + b;
//     console.log("before return");
//     return s;
// }

// let val = sum(25, 56);
// console.log(val);

// const arrowFunc = (a, b) => {
//     console.log(a + b);
// };

// function myFunction(a) {
    count = 0;
    // toLowercase(a);
//     for (const ch of a) {
//         if (ch === "a" ||
//             ch === "e" ||
//             ch === "i" ||
//             ch === "o" ||
//             ch === "u"
//         ) {
//             count++;
//         }
//     }
//     return count;
// }


// const countVowel = (a) => {
//     let count = 0;
//     for (const ch of a) {
//         if (ch === "a" ||
//             ch === "e" ||
//             ch === "i" ||
//             ch === "o" ||
//             ch === "u"
//         ) {
//             count++;
//         }
//     }
//     return count;
// };

// let nums = [1, 9, 65, 88, 12, 98];

// let newArr = nums.map((val) => {
//     return val * 2;
// });

// console.log(newArr);

// let calcSqrt = (sqrt) => {
//     console.log(sqrt * sqrt);
// };


// let arr = [1, 22, 3, 4];

// const output = arr.reduce((res, curr) => {
//     return res > curr ? res : curr;
// });

// console.log(output);

// let arr1 = [65, 98, 99, 56, 32, 89, 95];

// let res = arr1.filter((val) => {
//     return val > 90;
// });

// console.log(res);

//  let n = prompt("Enter a number: ");

// let arr = [];

// for (let i=1; i<=n; i++) {
//     arr[i - 1] = i;  
// }

// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// });

// console.log("Sum = ",sum);

// let factorial = arr.reduce((res, curr) => {
//     return res * curr;
// });

// console.log("factorial = ", factorial);

// document.body.childNodes[3].innerText = "yaks";


// header = document.getElementById("header");
// console.dir(header);


// let headings = document.getElementsByClassName("header");
// console.dir(headings);

// console.log(headings);


// let paras = document.getElementsByTagName("p");
// console.dir(paras);

// let elements = document.querySelectorAll("p");
// console.dir(elements);

// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Yaksh Shah";

// let divs = document.querySelectorAll(".box");
// let idx = 1;

// for(div of divs) {
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }

// let div = document.querySelector("div");

// div.style.color = "purple";
// div.style.fontSize = "2rem";

// let btn = document.querySelector("body");
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newBtn);

let para = document.querySelector("p");