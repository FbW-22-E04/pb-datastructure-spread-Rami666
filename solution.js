// 1

const euroCountriesArray = ["Germany", "Spain", "France"];

const asianCountriesArray = ["Syria", "China", "Japan"];

console.log(...euroCountriesArray, ...asianCountriesArray);



















//Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

function calcWholeAvg (a, b, c, d) {
    let total = a + b + c + d;

    let avg = total / 4;
    console.log("avg is", total % 4 === 0);
}


calcWholeAvg (1, 2, 3, 4)


console.log("----------------");

const myFutureAge = 2050;
const birthYear = 1996;

const futureAge = myFutureAge - birthYear;
console.log(`I will be either ${futureAge} or ${futureAge - 1}`);



console.log("----------------------");

// Programming Basics: Nested Loops (Using Arrays) Q3:

let arrayQ3a = [];

for(let i = 1; i <=4; i++) {
    for(let y = 1; y <= 3; y++) {
        arrayQ3a.push(i)
    }
}
console.log(arrayQ3a.join(" "));

let arrayQ3b = [];
for (let i = 0; i <= 2; i++) {
    for (let j = 0; j < 5; j++) {
        arrayQ3b.push(j)
    }
}
console.log(arrayQ3b.join(" "));


// BONUS CHALLENGE

let arr1 = [];
let arr2 = [];
for (let i = 0; i <=4; i++) {
    if(i>0) {
        for(let y = 1; y <= 3; y++) {
            arr1.push(i)
    }
  
    }
}
console.log(arr1.join(" "));

console.log("-------------------------");







