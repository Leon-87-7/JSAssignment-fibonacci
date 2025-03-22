//# Fn=[((1+sqrt5)^n)/(2^n*sqrt5)] when n===8;

const five_sqrt = Math.sqrt(5);
const a = Math.pow(1 + five_sqrt, 8);
const b = Math.pow(2, 8) * five_sqrt;
const fibo8 = Math.round(a / b);

console.log(fibo8);

document.getElementsByName('Fn_Fibonacci')[0].placeholder = '8';
document.getElementById('result_Fibonacci').innerHTML = `${fibo8}`;
