// // console.log("Hello World");

// // name = "Abc"
// // console.log(typeof name);
// // age = 19
// // console.log(typeof age);
// // mark = 19n;
// // console.log(typeof mark);
// // isLogin = true;
// // console.log(typeof isLogin);
// // mySymbol = Symbol("Hey");
// // console.log(typeof mySymbol);
// // myNull = null
// // console.log(typeof myNull);
// // myUndefined = undefined
// // console.log(typeof myUndefined);
// // console.log(mySymbol);

// // let address;
// // console.log(address);

// // mySym = Symbol("abc");
// // console.log(typeof mySym);
// // mySymObj = Object(Symbol)
// // console.log(mySymObj);
// // console.log(typeof mySymObj);
// // console.log(typeof mySym);
// // console.log(typeof mySym.toString());

// // console.time("Practice On Console")
// // console.group("HEllo");
// // console.log("Hello");
// // console.warn("Hello");
// // console.error("Hello");
// // console.table(["A","B","C"])
// // console.groupEnd()

// // console.timeEnd("Practice On Console")
// // console.count("HELLO")
// // console.count("HELLO 2")
// // console.count("HELLO")

// number = 10;
// number = 10_00_000;

// console.log(number);
// console.log(typeof number);

// const price = 8000;
// // price = 9000
// console.log(price);

// // console.log(abc);

// // console.log(undefined);

// // {
// //     let abc = "acbb"
// // }
// // console.log(abc);

// console.log(id);

// var id = 123

// id = 234

// add()
// function add(){
//     console.log("add fun");
// }

// console.log(myFun);

// // myFun()
// var myFun = function mul(){
//     console.log("mul");
// }

// // //redeclare
// // let a = 123
// // let a = 345

// // //reassignment
// // let b = 456
// // b = 567

// myObj = {
//     name:"Abc",
//     age:18
// }

// console.log(myObj);
// console.log(typeof myObj);

// function add(){
//     console.log("Add");

// }

// console.log(add);
// console.log(add());
// console.log(typeof add);

// const arr = [10,true,"abb"]
// console.log(arr);
// console.log(typeof arr);

// a = 10
// console.log(a);
// a = 20
// console.log(a);
// let a = 30
// console.log(a);

//Copy

// let age = 10;
// let myAge = age;
// myAge = 19;
// console.log(age, myAge);

// let obj = {
//   name: "abc",
//   age: 19,
// };

// let myObj = obj;
// myObj.name = "xyz";
// console.log(obj, myObj);

// let obj2 = {
//   name: {
//     username: {
//       fullname: { fname: "f_name", lname: "l_name" },
//       nickname: "nick_name",
//     },
//     fathername: "father_name",
//   },
//   age: 19,
// };
// // let myObj2 = { ...obj2 }; //shalow copy
// let myObj2 = structuredClone(obj2);//deep copy
// myObj2.name.username = "xyz";
// console.log(obj2, myObj2);

//Number

// let num = 100;
// num = 10_00_000
// // console.log(num,typeof num);
// let a = Infinity
// // console.log(a,typeof a);
// let b = -Infinity
// // console.log(b,typeof b);

// let notANumber = NaN
// // console.log(notANumber,typeof notANumber);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.EPSILON);
// console.log(Number.isNaN(10));
// console.log(Number.isInteger(123));
// console.log(Number.isSafeInteger(9007199254740992));
// console.log(Number.isInteger(10));

//Math

// console.log(Math.round(10.5000));
// console.log(Math.floor(10.5000));
// console.log(Math.ceil(10.5000));
// console.log(Math.min(10.5000,11,12));
// console.log(Math.max(10.5000,11,12));
// console.log(Math.trunc(10));

// console.log(0.1+0.2==0.3);
function almostEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

// console.log(almostEqual(0.1+0.2,0.3));

// String

const name = "abc";
const name2 = String("xyz");
const allName = `Name1 ${name} and Name2 ${name2}`;
// console.log(name,name2,allName);
// Immutable
// console.log(name2[1]);
name2[1] = "a";
// console.log(name2[1]);

// console.log(void 'abc');
// void allways return undefined

let str = "a b c"
console.log(str.length);
console.log(str.charAt(-1));
console.log(str.at(-1));
console.log(str.indexOf('z'));
console.log(str.split(''));