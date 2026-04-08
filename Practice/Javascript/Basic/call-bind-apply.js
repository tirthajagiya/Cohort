function cookDish(ind,style){
  return `${this.name} prepares ${ind} in ${style} style`
}

const sharmaKitchen = {name:"sharmaKitchen"}
const guptaKitchen = {name:"guptaKitchen"}
console.log(cookDish.call(sharmaKitchen,"a", "b"))
console.log(cookDish.apply(sharmaKitchen,["a0", "b0"]))
console.log(cookDish.bind(guptaKitchen,"a2", "b2"))
cookDish.call()
const guptaReadyKitchen = cookDish.bind(guptaKitchen,"a3","b3")
console.log(guptaReadyKitchen("a1","b1"));

const bills = [10,20,30];

console.log(Math.max(...bills));
console.log(Math.max.apply(null,bills));