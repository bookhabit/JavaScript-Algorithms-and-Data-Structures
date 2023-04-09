function checkPrimeNumber(n){
    if(n<2){
        return false;
    }
    for(let i=2; i<n; i++){
        if(n%i === 0){
            return false
        }
    }
    return true;
}

console.log(checkPrimeNumber(1)) // F
console.log(checkPrimeNumber(5)) // T
console.log(checkPrimeNumber(4)) // F