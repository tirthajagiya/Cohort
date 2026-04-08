const pv = {
    name : "pv",
    generation : "grandfather",
    cookDish(){
        return this.name;
    }
}

const raj = Object.create(pv);
raj.name = "raj";
raj.generation = "father";
raj.runBusiness = function(){
    return this.name;
}

console.log(raj);
console.log(raj.cookDish());

Array.prototype.last = function(){
    return this[this.length - 1];
}

console.log([1,2,3].last());
console.log(["A","v"].last());

Array.prototype.hello = "Hello";

console.log([1,2].hello);

// make own array and string method using prototype

