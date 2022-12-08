let id: symbol = Symbol("id");

const data = {
    [id]: 1,
}

console.log(data[id]);

// es2020+
const num1: bigint = 1n;
const num2: bigint = 2n;

console.log(num1 + num2);