function cardPackets(cardTypes) {
    // Write your code here
    // [4,7,5,11,15]
    let minCardNeeded = Infinity;
    for(let i =2;i<=3;i++){
        const numberOfCardsNeeded = [];
        cardTypes.forEach((ele, index) => {
            const modulo = ele%i;
            let diff = 0;
            if(modulo){
                diff = i - modulo;
            }
            numberOfCardsNeeded[index] = diff;
        })
        
        const cardNeeded = numberOfCardsNeeded.reduce((acc, ele) => acc + ele);
        if(cardNeeded < minCardNeeded ){
            minCardNeeded = cardNeeded;
        }
    }
     
    return minCardNeeded

}

console.log(cardPackets([3, 9, 7, 6, 5, 2]));