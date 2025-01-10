const obj = {
  id: 1,
  name: "tushar",
}

function myfunction() {
  return this.name
}

let res = myfunction.bind(obj)

console.log(res())
