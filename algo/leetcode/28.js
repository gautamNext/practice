var strStr = function(haystack, needle) {
    if(needle === ''){
        return 0;
    }
    
    if(haystack === ''){
        return -1;
    }
    
    for(let i = 0; i <= haystack.length - needle.length; i++){
        if(haystack.substring(i, i + needle.length) === needle){
            return i;
        }
    }
    
    return -1;
};

console.log(strStr('hello', 'll'));