const str = 'Tushar devidas chemate';

const reverseString = (str) => {
  return str.split(' ').reverse().join(' ');
};

console.log(reverseString(str));
