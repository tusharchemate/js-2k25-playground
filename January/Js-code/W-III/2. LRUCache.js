const obj = {
  name: "Tushar",
  age: 23,
  address: {
    city: "Pune",
    lane: 1,
  },
  hobbies: ["test", "play"],
}

const cache = {};

const LRUCache = (key, value) => {
   if (key in cache) {
    console.log(`Retrieved from cache: ${key}`);
    return cache[key];
  } else {
    console.log(`Computed and cached: ${key}`);
    cache[key] = value;
    return value;
  }

}

console.log(LRUCache("name", obj.name)); // Computed and cached: name
console.log(LRUCache("name", obj.name)); // Retrieved from cache: name


