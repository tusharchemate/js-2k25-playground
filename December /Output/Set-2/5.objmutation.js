const obj = { name: "John" };
const anotherObj = obj;

anotherObj.name = "Doe";

console.log(obj.name);  // ? Doe
