function sayHi() {
  console.log(name); // undefined 
  console.log(age); // Error : reference 
  var name = 'Lydia';
  let age = 21;
}

sayHi();
