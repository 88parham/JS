function start() {
  let i = 0;
  while (i <= 10) {
    console.log("while :" + i);
    i++;
  }

  console.log(i);
  i = 11;

  do {
    console.log("do while:" + i);
    i++;
  } while (i <= 10);

  console.log(i);
}
