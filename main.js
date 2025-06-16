let Div = document.getElementById('output');
let mamocount = 0;
const button = document.getElementById('clickMe');
const bom = document.getElementById('bom');

button.addEventListener('click', () => {
    const repeatCount = Math.pow(2, mamocount);
    console.log(repeatCount);
    Div.textContent += "まもまも! ".repeat(repeatCount) + "\n";
    mamocount += 1;

    if (repeatCount > 10000) {
        bom.style.display = 'block';
    }
});

bom.addEventListener('click', () => {
    Div.textContent = '';
    bom.style.display = 'none';
});