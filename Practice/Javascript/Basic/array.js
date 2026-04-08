// const arr = [1, true, "Abc"]
// console.log(arr);
// console.log(typeof arr);
// console.log(Array.isArray(arr));
// console.log(arr[0]);
// console.log(arr[-1]);
// console.log(arr[-2]);
// console.log(arr[4]);

// const emeptyArray = [];
// console.log(emeptyArray);

// const threeEmeptyArray = Array(3);
// console.log(threeEmeptyArray);
// console.log(typeof threeEmeptyArray);
// console.log(threeEmeptyArray[0]);
// console.log(threeEmeptyArray[-1]);

// const array = Array('a', 'b', 'c');
// console.log(array);

// const single = Array.of(3);
// console.log(single);

// const strArray = Array.from('DUST')
// console.log(strArray);
// console.log(typeof strArray);
// console.log(strArray.length);
// strArray.length = 2;
// console.log(strArray);
// strArray.length = 4;
// console.log(strArray); //Meomery Loss

//Array Method

const arr = [10, 5, 18, 21, 2];
// console.log(arr.push(99));
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.unshift(555));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

// console.log(arr.sort());
// console.log(arr.sort((a,b)=>a-b));
// console.log(arr.sort((a,b)=>b-a));
// console.log(arr.reverse());

// const arr = [10, 5, 18, 21, 2]

// let temp1= arr.splice(1,0,10,20)
// console.log(temp1);
// console.log(arr);
// let temp2= arr.slice(1,3)
// console.log(temp2);
// console.log(arr);

const arr2 = arr.concat([10, 20, 30]);
// console.log(arr2);

const flatArray = [1, [2, 3], 4, [5, 6, [7, 8, 9], 10], 11];

const flatedArray = flatArray.flat(2);
// console.log(flatedArray);

const serachArray = ["Tirth", "Hitesh", "Piyush", "Meet"];

// console.log(serachArray.indexOf('Meet', 3));
// console.log(serachArray.includes('Tirth'));

// console.log(serachArray.fill(10,1,3));

// console.log(typeof []);
// console.log(Array.isArray([]));
// console.log(Array.isArray('Hitesh'));

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    inStock: true,
  },
  { id: 2, name: "T-Shirt", category: "Apparel", price: 20, inStock: true },
  {
    id: 3,
    name: "Coffee Mug",
    category: "Kitchenware",
    price: 15,
    inStock: false,
  },
  {
    id: 4,
    name: "Smartphone",
    category: "Electronics",
    price: 800,
    inStock: true,
  },
  { id: 5, name: "Jeans", category: "Apparel", price: 50, inStock: true },
];

// for(let i = 0; i < products.length; i++)
// {
//     console.log(products[i].name)
// }

// products.forEach((product, index)=>{
//     console.log(product.id);
// })

// for (let product of products) {
//   console.log(product.category);
// }

// for (let product in products) {
//   console.log(product);
// }

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
//   { id: 2, name: "T-Shirt", category: "Apparel", price: 20, inStock: true },
//   { id: 3, name: "Coffee Mug", category: "Kitchenware", price: 15, inStock: false },
//   { id: 4, name: "Smartphone", category: "Electronics", price: 800, inStock: true },
//   { id: 5, name: "Jeans", category: "Apparel", price: 50, inStock: true }
// ];

// products.forEach((product, index)=>{})

// const stockArr = products.map((product, index) => {
//   console.log(product.inStock);
//   return product.inStock;
// });

// console.log(stockArr);

// const currStock = products.filter((p) => {
//   return p.inStock;
// });
// console.log(currStock);

const bill = products.reduce((sum, product) => {
  return sum = sum + product.price;
}, 15);

console.log(bill);

const categoryWiseGroup = products.reduce(
  (acc, product) => {
    acc[product.category].push(product.name);
    return acc
  },
  {
    Kitchenware: [],
    Apparel: [],
    Electronics: [],
  },
);

// console.log(categoryWiseGroup);


const categoryWiseGroup2 = products.reduceRight(
  (acc, product) => {
    acc[product.category].push(product.name);
    return acc
  },
  {
    Kitchenware: [],
    Apparel: [],
    Electronics: [],
  },
);

// console.log(categoryWiseGroup2);

