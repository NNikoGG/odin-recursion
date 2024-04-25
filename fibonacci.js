function fibs(n) {
  let num1 = 0;
  let num2 = 1;
  let array = [];
  array.push(num1);
  array.push(num2);
  for (let i = 2; i < n; i++) {
    let num3 = num1 + num2;
    array.push(num3);
    num1 = num2;
    num2 = num3;
  }
  return array;
}

console.log(fibs(5));
