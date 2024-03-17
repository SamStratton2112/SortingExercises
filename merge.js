function merge(arr1, arr2){
    const result = []
    let i = 0;
    let j = 0;
    while( i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            // increment for each side
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }
    // handle one array shorter than the other 
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result; 
}

function mergeSort(arr){
    // basecase:
    if(arr.length <=1 ) return arr;
    const mid = Math.floor(arr.length/2);
    // everything else:
    // we call mergeSort recursively to ensure that we are
    // breaking down the array into individual elements so
    // we can then continue to merge 
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left,right);
}
module.exports = { merge, mergeSort};