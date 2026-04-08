// // "use strict";
// console.log(this);
// console.log(typeof this);

// function fn(){
//     return this;
// }

// console.log(fn());

// const obj = {
//     name : 'abc',
//     age: 20,
//     introduce(){
//         console.log(name,age);
//     }
// }

// obj.introduce()

const filmDirector = {
  name: "Sanjay",
  cast: ["Ranveer", "Deepika", "Priyanka"],

  announceCast() {
    this.cast.forEach((actor) => {
      console.log(actor, "With", this.name);
    });
  },
  announceCast2: () => {
    console.log(this.name);
  },
};

// filmDirector.announceCast();
// filmDirector.announceCast2();

const abc = {
  name: "abc",
  prepareProps() {
    console.log(this.name);
    function xyz() {
      console.log(this.name);
    }
    xyz();
    const pqr = () => {
      console.log(this.name);
    };
    pqr();
  },
};

// abc.prepareProps();


const actor = {
    name: "Ranveer",
    bow(){
        return this.name;
    }
}

const temp = actor.bow;
// console.log(temp());