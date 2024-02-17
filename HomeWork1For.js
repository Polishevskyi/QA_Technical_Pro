function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += symbol;
        }
        console.log(line);
    }
}

drawTriangle(5, '*');