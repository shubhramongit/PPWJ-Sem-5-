let rows = 5;
for (let i = 0; i < rows; i++) {
    let num = 1;
    let row = '';
    for (let k = 0; k < rows - i; k++) {
        row += ' ';
    }
    for (let j = 0; j <= i; j++) {
        row += num + ' ';
        num = num * (i - j) / (j + 1);
    }
    console.log(row);
}