function areValueTypesSame(first, second) {
    if (typeof second !== typeof first) {
        return false;
    }
    return true;
}

console.log(areValueTypesSame(5, 'hello'));
console.log(areValueTypesSame(undefined, null));
console.log(areValueTypesSame(NaN, 5));
console.log(areValueTypesSame(NaN, undefined));
console.log(areValueTypesSame(NaN, null));