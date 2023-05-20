function q2() {
  let num = "";
  for (let row = 0; row <= 10; row++) {
    for (let col = 0; col <= 10; col++) {
      num = num + " " + row + "x" + col + "=" + row * col;
    }
    console.log(num);
    num = "";
  }
}
