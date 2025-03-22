function calcFibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

const x = 8;
const y = calcFibonacci(x);

// console.log(y);

document.getElementById('Fn_Fibonacci').innerHTML = `${x}`;

document.getElementById('result_Fibonacci').innerHTML = `${y}`;