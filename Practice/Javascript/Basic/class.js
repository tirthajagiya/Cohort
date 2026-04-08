class crickter{
    constructor(name, role){
        this.name = name;
        this.role = role;
        this.matchesPlayed = 0;
        this.stamina = 100;
    }

    introduce(){
        return `${this.name, this.role}`
    }
}

const player1 = new crickter("Virat", "Batsman");
const player2 = new crickter("Bumrah", "Bowler");

console.log(player1.hasOwnProperty('name'));
console.log(player1.hasOwnProperty('stamina'));
console.log(typeof crickter);

class Debutant {
    constructor (name){
        this.name = name
        this.walkOut = () => `${this.name}`
    }

}

const debutant1 = new Debutant("Shubham");
const debutant2 = new Debutant("Rahul");
console.log(debutant1.walkOut === debutant2.walkOut);

const somethingFromClass = debutant1.walkOut;
console.log(somethingFromClass());
