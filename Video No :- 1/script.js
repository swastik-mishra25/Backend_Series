// Fundamentals of Javascript:
// arrays and objects
// functions return
// async js coding
// I should know foreach map filter find indexOf

//ARRAY

// var arr = [1,2,3,4,"hey",{},true,function(){},[]];
let arr = [1, 2, 2, 3, 4];
//forEach
arr.forEach(function (val) {
    console.log(val + " hello ");
})
//Map
let newarr = arr.map(function (val) {
    return val * 3;
})
console.log(newarr);
//In map new array is created !!

//Filter
//New array is created
let ans = arr.filter(function (val) {
    if (val >= 3) { return true; }
    else return false;
})
console.log(ans);

//Find
//If multiple elements are present then first 2 will be considered !!
let answer = arr.find(function (val) {
    if (val === 2) return val;
})
console.log(answer);

//IndexOF //index of 12 is -1 (which means it gives error)
//Index of 1 is 2

//OBJECTS
// Key Value Pairs
let kolu = 12;
// var obj = {
//     name: "SWASTIK",
//     age: 22,
//     a: kolu
// }
Object.freeze(obj);
obj.age = 25;
//To access the name 
// console.log(obj.name)
// console.log(obj['name'])
// console.log(obj.age)
// console.log(obj.a)

// How to find out the length of function
function abcd() { }
//abcd.length is used to find out the length of an function!!
function efgh() {
    return 122;
}
let solution = efgh();
// When the code runs line by line so we call it     Synchronous Javascript Coding

// Async js coding
// Jo bhi code async nature ka ho, usey side stack mein bhej do and agle code ko chalao jo bhi sync nature ka ho, jab bhi saara syn code chal jaaye, tab check karo ki async code complete hua ya nahi and agar wo complete hua ho to ussey main stack mein laao and chalao do


async function abcd() {
    var blob = await fetch(``);
    var ans = await blob.json();
    console.log(ans.results[0].name);
}
abcd();