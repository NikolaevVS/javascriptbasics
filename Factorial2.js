let value1 = prompt('������� �����');
let value2 = prompt('������� �����');
let result1 = 1;
for (let n = 2; n <= value1; n = n + 1) {
  result1 = result1 * n;
}
let result2 = 1;
for (let n = 2; n <= value2; n = n + 1) {
  result2 = result2 * n;
}
let finalResult = result1 + result2;
console.log('���������: ' + finalResult);