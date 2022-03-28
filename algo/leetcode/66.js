var plusOne = function(digits) {
    let prevValueRemainder = 1;
    for(let i = digits.length -1; i >= 0; i--){
        const sum = ele + prevValueRemainder;
        const currIndexValue = sum > 9 ? sum%10: sum;
         prevValueRemainder = sum > 9 ? 1 : 0;
        digits[i] = currIndexValue;
    }
    
    return prevValueRemainder ? [prevValueRemainder, ...digits] : digits
};

var plusOne = function(digits){
    return String(BigInt(digits.join('')) + 1n).split('')
}

const arr = [1,2,3]
plusOne(arr);
console.log(arr)