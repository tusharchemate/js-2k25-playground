 for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 3,3,3
} 

 for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1000); // 0,1,2
} 
