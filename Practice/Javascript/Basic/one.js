// function sayHello(){
//     const count = 0;
//     function displayCount(){
//         return count;
//     }
//     return displayCount
// }

// const countIsFun = sayHello()
// console.log(countIsFun());

// function company(guest){
//     const guestName = guest;
//     let count = 1;
//     function zomato(){
//         if (count == 3) return;
//         console.log(`Welcome ${guestName} in Zomzto`);
//         count++;
//     }
//     function blinkit(){
//         console.log(`Welcome ${guestName} in Blinkit`);
//     }
//     return {
//         zomato, blinkit
//     }
// }

// const meet = new company("Meet Jani")
// const rushi = new company("Rushi Maiyad")
// meet.zomato()
// meet.zomato()
// meet.zomato()
// meet.zomato()
// meet.zomato()

//logic ->useMemo(React)

const cache = {};
//for add
function add(a,b){      //10k LOC 50% CPU
    // let key = `${a}|${b}`
    // if(cache[key]) {
    //     console.log(cache[key]);
    //     return;
    // }
    console.log(a+b);
    // cache[key] = a+b;
}

console.time("Time Start")
add(20,30)
add(20,30)
add(20,30)
add(20,30)
add(20,30)
add(20,30)
add(20,30)
console.timeEnd("Time Start")

// rough work

// cache = {
//     "20|30":50,
// }

function makeCacheOffn(fn){
    let cache = {}

}
function add(){

}

function sq(){

}

function mul(){

}

let tifin = new makeCacheOffn(add)