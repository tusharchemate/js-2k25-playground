function testScope() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }
  console.log(a); // 10 
  console.log(b); //  EROR
  console.log(c); // EROR
}

testScope();
