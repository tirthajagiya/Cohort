function TataCar(chassisNumber, modelNumber){
    this.chassisNumber = chassisNumber;
    this.modelNumber = modelNumber;
    // this.fuellevel = 100;

    TataCar.prototype.status = function(){
        return `${this.chassisNumber},${this.modelNumber}`
    }
}

const car1 = new TataCar("MH-101", "Nexon");
const car2 = new TataCar("DL-202", "Harrier");

console.log(car1.modelNumber);
console.log(car2.modelNumber);
console.log(car1.status());
console.log(car2.status());

console.log(car1);
console.log(car2);