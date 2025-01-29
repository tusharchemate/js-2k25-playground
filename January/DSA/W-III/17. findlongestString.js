const sentence = "tushar davidas chemate"

const findlongestString = (str) => {
  let splitted = str.split(" ")

  let res = splitted[0]

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].length > res.length) {
      res = splitted[i]
    }
  }

  return res;
}

console.log(findlongestString(sentence))
