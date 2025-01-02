const arr = ['b', 1, 2,2,24,4];

//maajority of element

const majorityOfElement =(arr) => {
let obj ={};

for (let i of arr) {
  obj[i] ? obj[i] += 1 : obj[i] = 1;
}

let maxCount = 0;
  let majorityElement = null;

  // Find the element with the highest frequency
  for (let key in obj) {
    if (obj[key] > maxCount) {
      maxCount = obj[key];
      majorityElement = key;
    }
  }

return majorityElement;

}

console.log(majorityOfElement(arr));
