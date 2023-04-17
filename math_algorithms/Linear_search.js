function Linear_search(n,t){
    for(const index in n){
        if(n[index]===t){
            return index
        }
    }
    return -1
}

arr = [-5,2,10,4,6]
console.log(Linear_search(arr,t=10)) // 2
console.log(Linear_search(arr,6)) // 4
console.log(Linear_search(arr,20)) // -1