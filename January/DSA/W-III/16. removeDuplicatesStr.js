function removeDuplicates(str) {
  let uniqueChars = new Set(str); // Using Set to automatically remove duplicates
  return Array.from(uniqueChars).join('');
}

console.log(removeDuplicates("tushara"));  // Output: "tushar"
