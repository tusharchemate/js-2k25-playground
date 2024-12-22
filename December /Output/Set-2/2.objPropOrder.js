const obj = { 1: "a", 2: "b", 3: "c" };
obj[4] = "d";
obj["name"] = "test";

console.log(Object.keys(obj)); // ? ["1", "2", "3", "4", "name"]
