function truncate(str, length, endWith) {
    if (length == null) {
        length = 100;
    }
    if (endWith == null) {
        endWith = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - endWith.length) + endWith;
    } else {
        return str;
    }
}

console.log(truncate('We are doing JS string exercises.'));
console.log(truncate('We are doing JS string exercises.', 19));
console.log(truncate('We are doing JS string exercises.', 15, '!!'));