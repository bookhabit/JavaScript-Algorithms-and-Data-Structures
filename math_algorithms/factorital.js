function factorial (n){
    let factNum = 1
    for(let i=2; i<=n; i++){
        factNum = factNum * i
    }
    return factNum
}

console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(5)) // 120