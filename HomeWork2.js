var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн"
};

services.price = function () {
    let total = 0;
    for (let service in this) {
        if (typeof this[service] === 'string') {
            let price = parseInt(this[service]);
            if (!isNaN(price)) {
                total += price;
            }
        }
    }
    return total + ' грн';
};

services.minPrice = function () {
    let min = Infinity;
    for (let service in this) {
        if (typeof this[service] === 'string') {
            let price = parseInt(this[service]);
            if (!isNaN(price) && price < min) {
                min = price;
            }
        }
    }
    return min + ' грн';
};

services.maxPrice = function () {
    let max = -Infinity;
    for (let service in this) {
        if (typeof this[service] === 'string') {
            let price = parseInt(this[service]);
            if (!isNaN(price) && price > max) {
                max = price;
            }
        }
    }
    return max + ' грн';
};

console.log("Загальна вартість послуг: " + services.price());
console.log("Мінімальна вартість послуги: " + services.minPrice());
console.log("Максимальна вартість послуги: " + services.maxPrice());