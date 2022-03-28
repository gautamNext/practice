var lengthOfLastWord = function(s) {
    let indexOfFirstNonSpaceCharFromLast;
    
    for(let i = s.length - 1; i > -1; i--){
        if(s[i] === ' ' && indexOfFirstNonSpaceCharFromLast !== undefined){
            return indexOfFirstNonSpaceCharFromLast - i
        }else if(s[i] !== ' ' && indexOfFirstNonSpaceCharFromLast === undefined){
           indexOfFirstNonSpaceCharFromLast = i;
        }
    }
    
    return indexOfFirstNonSpaceCharFromLast === undefined ? 0 : indexOfFirstNonSpaceCharFromLast + 1
};

lengthOfLastWord("Hello World");