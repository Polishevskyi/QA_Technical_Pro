let obj = {
    name: 'Max',
    age: 25,
    city: 'New York',

    getInfo: function () {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key + ': ' + this[key]);
            }
        }
    }
};

obj.getInfo();

obj.newProperty = 'Нова властивість!';

obj.getInfo();