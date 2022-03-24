
let result = 1;
function taylorHorner(x, n) {

    if(n === 0){
        return result;
    }

    result = 1 + (x/n * result);

    return taylorHorner(x, n-1);
}

console.log(taylorHorner(1, 10));