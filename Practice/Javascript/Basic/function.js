console.log(add(10, 20));
function add(a, b) {
  return a + b;
}

const mul = function (a, b) {
  return a * b;
};
console.log(mul(10, 20));

const div = (a, b) => {
  return a / b;
};

function sub() {
  console.log(arguments);
  console.log(typeof arguments);
  console.log(Array.isArray(arguments));
}

sub(10, 5);

// const hello = () => {
//   try {
//     console.log(arguments);
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// hello();

// function bye(){
//     console.log("Bye");
// }

// bye()

const bye = (function bye() {
  console.log("Bye");
})();

console.log(bye);

function fun1() {
  return "fun1";
}

function fun2(fun1) {
  return function fun3() {
    return "fun3";
  };
}

console.log(fun2(fun1)());

const shop = (function () {
  let item = 0;
  return {
    a() {
      return ++item;
    },
    b() {
      return --item;
    },
  };
})();

console.log(shop);
console.log(shop.a);
console.log(shop.a());
console.log(shop.a());
console.log(shop.a());
console.log(shop.b());
console.log(shop.b());
console.log(shop.b());
// console.log(item);

function fn1() {
  const name = "myname";
  function fn2() {
    console.log(name);
  }
  return fn2;
}

fn1()()