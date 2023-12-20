export const addArrays = (arr1, arr2) => {
    const sumArr = [];

    if(arr1 && arr2 && arr1.length == arr2.length && arr1.length > 0) {
        for(let i=0; i<arr1.length; i++) {
            sumArr.push(arr1[i] + arr2[i]);
        }
    }

    return sumArr;
}

console.log(addArrays([1, 5, 8], [2, 7, 1]));