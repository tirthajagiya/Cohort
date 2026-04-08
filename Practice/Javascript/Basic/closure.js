// function outer(){
//     let count = 0;
//     function inner(){
//         console.log(count);
//     }
//     inner();
// }

// outer();

function makeFun(){
    const name = "Hello";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFun = makeFun();
// myFun();

function startCompany(){
    function ca(name){
        return `Company name set by CA is : ${name}`
    }
    return ca;
}

const getMeACompany = startCompany()
const myCompanyName = getMeACompany("Zomato")
// console.log(myCompanyName);

function party(guest){
    const guestName = guest;
    let count = 0;

    function zomato(){
        if(count>2) return;
        console.log(`Hi ${guestName} from Zomato`);
        console.log(count);
        count++;
    }
    function blinkit(){
        console.log(`Hi ${guestName} from Blinkit`);
        count++;
        console.log(count);
    }
    return{
    zomato,
    blinkit
    }
}

const meet = party("Meet")
const jitu = party("Jitu")

jitu.zomato()
jitu.zomato()
jitu.zomato()
jitu.zomato()
jitu.zomato()