const str =  "abcde", goal = "cdeab";

const rotateString = (str, goal) => {
	let string = str+str;
    return goal.length === str.length && string.includes(goal)
}

console.log(rotateString(str, goal));
