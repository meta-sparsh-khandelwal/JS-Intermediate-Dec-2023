export const firstNFibonacci = (n)=>{
    if(n < 1) return 'Invalid input';
    if(n < 2) return [0];
    
    let fibonacciArray = [0, 1];

    for (let i = 2; i < n; i++) {
        let nextNumber = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        fibonacciArray.push(nextNumber);
    }

    return fibonacciArray;
}

console.log(firstNFibonacci(0));
console.log(firstNFibonacci(1));
console.log(firstNFibonacci(2));
console.log(firstNFibonacci(9));