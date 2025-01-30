const sentence = "to king bye s"
const findlongestString = (str) => {
  let res = str.split(" ").sort((a,b)=> b.length - a.length);
  console.log(res);
  return res[1];
}
console.log(findlongestString(sentence))
