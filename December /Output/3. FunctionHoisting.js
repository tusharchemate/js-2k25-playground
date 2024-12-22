sayHi();

function sayHi() {
  console.log("Hello!"); // Hello
}

sayHello();

var sayHello = function () {
  console.log("Hi!"); // Fucntion in not defined Error
};
