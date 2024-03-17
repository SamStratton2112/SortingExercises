function bubbleSort(arr) {
    // this loop will run through the array once
    for(let i = 0; i < arr.length; i++){
        // determine if anything has been swapped 
        let swapped = false;
        // this loop will run through each element in the array and 
        // decrease the array length with each run 
        for(let j = 0; j < arr.length -i ; j++){
            if(arr[j] > arr[j+1]){
                // switch index values 
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]= temp;
                swapped = true;
            }
        }
        // break function if nothing was swapped and array is sorted
        if(!swapped) return arr;
    }
    return arr;
}

module.exports = bubbleSort;