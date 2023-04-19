function recursive_binary_search(arr,target){
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }

    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    if(target===arr[middleIndex]){
        return middleIndex
    }
    if(target < arr[middleIndex]){
        return search(arr,target,leftIndex,middleIndex-1)
    }else{
        return search(arr,target,middleIndex+1,rightIndex)
    }
}

arr = [-5,2,4,6,10]
console.log(recursive_binary_search(arr,10)) // 4
console.log(recursive_binary_search(arr,6)) // 3
console.log(recursive_binary_search(arr,20)) // -1