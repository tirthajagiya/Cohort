const obj = {
  name: "Tirth",
  age: 19,
};
// console.log(obj);
// console.log(typeof obj);
// console.log(obj.name);
// console.log(obj["name"]);
// obj.pincode = 36052;
// delete obj.age
// console.log(obj);
// console.log('age' in obj);
// console.log('pincode' in obj);
// console.log('toString' in obj);
// console.log(obj.hasOwnProperty("toString"));
// console.log(obj.hasOwnProperty("pincode"));

// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const tempObj = {
//     name: "Piyush",
//     address:{
//         city:"Hariyana",
//         state:"Punjab"
//     }
// }

// console.log(Object.entries(tempObj));

// for(const [key, value] of Object.entries(obj)){
//     console.log(key);
//     console.log(value);
// }

// Object.fromEntries(Object.entries(obj))
// console.log(obj);

// Object.freeze(obj);
// obj.name = "Anirudh"
// console.log(obj);
// obj.age = 32
// console.log(obj);
// delete obj.pincode;
// console.log(obj);
// console.log(Object.isFrozen())

// Object.seal()

Object.defineProperty(obj, 'age',{
    value:'20',
    writable:true,
    enumerable:true,
    configurable:false,
})

const des = Object.getOwnPropertyDescriptor(obj,'name')
console.log(des);
