function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arrayOfChars = `${N}`.split('');
    let max = -Infinity;
    arrayOfChars.forEach((ele, index) => {
        if(Number(ele) === 5){
            const numberAfterRemovingCurrent5Index = arrayOfChars.filter((_, innerIndex) => innerIndex !== index).join('');
            console.log(Number(numberAfterRemovingCurrent5Index));
            max = Math.max(max, Number(numberAfterRemovingCurrent5Index))
        }
    })
    return max
}

solution(-5859)