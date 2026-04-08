function testPromise(){
    return new Promise((resolve, reject)=>{
        console.log("Exection started");
        setTimeout(()=>{
            console.log("execution time taking");
            // resolve("Resolve value")
            // reject(new Error("Rejected value"))
        },2 * 1000)
        console.log("execution after time");
    })
}

// async function executePromise() {
//     const valueFromPromise = await testPromise();
//     console.log(valueFromPromise);
// }

// // executePromise()

testPromise().then(
    function outFulfilled(value){
        console.log(value);
    },
    function onError(err){
        console.log(err.message)
    }
)

console.log("Outside of promise function");