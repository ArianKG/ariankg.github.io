document.title = 'KGIO';

var a = [];

for (i = 0; i < 1; i++) {
    a[i] = document.createElement('a');
}

a[0].innerHTML = 'Random Number Generator';
a[0].href = 'generators/random-number-generator.html';

for (i = 0; i < 1; i++) {
    document.body.appendChild(a[i]);
}