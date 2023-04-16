function recusersive_factorial(n){
    if(n===0){
        return 1
    }
    return n*recusersive_factorial(n-1)
}

console.log(recusersive_factorial(0)) // 1
console.log(recusersive_factorial(1)) // 1
console.log(recusersive_factorial(5)) // 120