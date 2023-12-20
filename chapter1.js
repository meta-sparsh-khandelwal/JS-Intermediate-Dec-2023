export const findSecondNumbers = function (arr) {
    const sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);

    if (sortedArr.length < 2) {
        return "Array should have at least two unique elements.";
    }

    const secondLowest = sortedArr[1];
    const secondGreatest = sortedArr[sortedArr.length - 2];

    return `Second Lowest: ${secondLowest} , Second Greatest: ${secondGreatest}`;
}

const arr = [3, 5, 9, 1 ,1, 3, 6, 2];
console.log(findSecondNumbers(arr));