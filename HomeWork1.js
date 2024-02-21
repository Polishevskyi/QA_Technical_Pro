function myIsNaN(value) {
    if (typeof value !== 'number') {
        return true;
    }
    return value.toString() === 'NaN';
}

console.log(myIsNaN(NaN));