function Factorial(value) {
let result = 1;
 for (let n = 2; n <= value; n = n + 1) {
  result = result * n;
}
  return result;
}
let value1 = prompt('������� ������ �����');
let value2 = prompt('������� ������ �����');
let finalResult = Factorial(value1) + Factorial (value2);
console.log('����� ����������� �����: ' + finalResult)