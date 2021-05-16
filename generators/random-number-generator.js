document.title = 'Random Number Generator';

var input = [];
var button;
var p;

for (i = 0; i < 2; i++) {
    input[i] = document.createElement('input');
}

button = document.createElement('button');
p = document.createElement('p');

input[0].id = 'min';
input[1].id = 'max';

button.innerHTML = 'Generate';
button.onclick = generateRandomNumber;

function generateRandomNumber() {
    var min = Math.ceil(document.getElementById('min').value);
    var max = Math.floor(document.getElementById('max').value);
    p.innerHTML = Math.floor(Math.random() * (max - min + 1) + min);
}

for (i = 0; i < 2; i++) {
    document.body.appendChild(input[i]);
}

document.body.appendChild(button);
document.body.appendChild(p);