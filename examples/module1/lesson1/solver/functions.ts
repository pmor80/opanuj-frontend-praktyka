export function f1(a, b) {
  return a + b;
}
export function f2(a, b) {
  return a - b;
}
export function f3(a, b) {
  return a * b;
}

export function f4(a, b) {
  return a / b;
}

export function f(a, b, operator) {
  return operator === '+'
    ? f1(a, b)
    : operator === '-'
    ? f2(a, b)
    : operator === '*'
    ? f3(a, b)
    : f4(a, b);
}
