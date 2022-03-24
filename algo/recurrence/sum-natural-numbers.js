function sumOfNatualNumbers(n){
    if(n === 1) {
        return 1;
    }

    return n + sumOfNatualNumbers(n-1);
}

console.log(sumOfNatualNumbers(5));
console.log(sumOfNatualNumbers(10));