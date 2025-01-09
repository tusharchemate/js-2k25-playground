const obj = {
  id: 1,
  name: "Tushaar",
  hobies: ["Play", "race", "react"],
  game: () => console.log("hey"),
}

const deepClone = (obj) => {
  if (obj == null || typeof obj != "object") return obj

  let clonnedObj = {}

  if (Array.isArray(obj)) {
    return obj.map(deepClone)
  }

  for (let item in obj) {
    clonnedObj[item] = deepClone(obj[item])
  }

  return clonnedObj
}

console.log(deepClone(obj))
