function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(formatNumber(1000));
console.log(formatNumber(10000.23));
console.log(formatNumber(100000));