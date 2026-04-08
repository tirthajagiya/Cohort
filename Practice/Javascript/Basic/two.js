// function add(a,b){
//     return a+b;
// }

// //fullfiled, reject, pending

// const promise = new Promise((res, rej) => {
//   console.log("Promise is strat");
//   setTimeout(() => {
//     // res("Your promse is rovse");
//     rej("reject");
//   }, 2000);
// }); //resolver
// console.log(promise);

// promise.then((val) => {
//   return val.toUpperCase();
// }).then((val)=>{console.log(val)})
// .catch((err)=>{return err.toUpperCase()})
// .then((val)=>{console.log(val)})

console.log("Code Start");


function boilWater(ms) {
  return new Promise((res, rej) => {
    console.log("Water is starting to hot");
    if(ms<=0 || typeof ms !== "number") return rej("Ms is not perope");
    setTimeout(() => {
      res("Water is ready")
    }, ms);
    console.log("Promise complete");
  });
}

async function displayDoor() {
    console.log("Abc");
    
    try{
        const ans = await boilWater(2000);
        console.log(ans);
    }catch(err){
        console.log(err);
    }
}

displayDoor()

console.log("Code End");