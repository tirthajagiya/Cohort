// // // const promise = new Promise((resolve, reject) => {
// // //   // resolve("Resolved by me");
// // //   // reject("Rejectd")
// // //   setTimeout(() => {
// // //     resolve("Resolverd");
// // //   }, 2000);
// // // });
// // // console.log(promise);

// // // // setTimeout(()=>{
// // // //     console.log(promise);
// // // // },3000)

// // // promise.then((value) => {
// // //   console.log(value);
// // // });

// // // function printValue(value){
// // //     console.log(value);
// // // }

// // // promise.then(console.log)
// // // promise.then(printValue)

// // const promise = new Promise((res, rej) => {
// //   setTimeout(() => {
// //     rej("resolve");
// //   }, 2000);
// // });

// // // promise.then(
// // //     (val) => console.log(val),
// // //     (error) => console.log(error)
// // // );

// // // promise.then((val) => console.log(val)).catch((err)=>{console.log(err);
// // // })

// // // promise.then((data)=>console.log(data))
// // // .then(console.log)
// // // .catch(err=>console.log(err))

// // promise.then((data)=>{
// //     newData = data.toUpperCase();
// //     return newData;
// // })
// // .then((data)=>{
// //     return data+".com";
// // })
// // .then(console.log)
// // .catch((err)=>{return err.toUpperCase()})
// // .then(console.log)

// const turant = Promise.resolve("Turant");
// console.log(turant);

// const allPromise = Promise.allSettled(
//     [
//         Promise.resolve("A"),
//         Promise.reject("B")
//     ]
// )

// allPromise.then(console.log)

// const hPromise = new Promise((res, rej) => {
//     setTimeout(()=>{
//         rej("Masterji")
//     },3000)
// })

// // hPromise.then(console.log)

// async function nice(){
//     try{
//     const result = await hPromise;
//     console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// nice()

// // const newResult = await hPromise;
// // console.log(newResult);

// console.log("A");
// Promise.resolve("Resolve issue").then(console.log)
// console.log("B");

function boilWater(ms) {
  return new Promise((res, rej) => {
    console.log("Now Water is Start to Boil");
    if (typeof ms !== "number" || ms < 0) {
        rej(new Error("Number is not valid of ms"))
    }
    setTimeout(()=>{
        res("Water is Boiled");
    },ms)
  });
}

boilWater(-200).then(console.log)
.catch((err)=>console.log(err.message)
)