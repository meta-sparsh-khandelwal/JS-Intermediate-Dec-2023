function allProperties(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] === 'function';
    });
}

console.log(allProperties(Array));
console.log(allProperties({myObj: 2, function(){return 'My Function'}}));
console.log(allProperties({prop: 1, myFunc(){return 'My Function'}}));
console.log(allProperties(String));