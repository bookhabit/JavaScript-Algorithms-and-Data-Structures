function Binary_search(arr,target){
    let leftIndex = 0
    let rightIndex = arr.length-1
    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if(target===arr[middleIndex]){
            return middleIndex
        }
        if(target<arr[middleIndex]){
            rightIndex = middleIndex -1
        }else{
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

arr = [-5,2,4,6,10]
console.log(Binary_search(arr,10)) // 4
console.log(Binary_search(arr,6)) // 3
console.log(Binary_search(arr,20)) // -1