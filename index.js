document.title = 'KGIO';

var a = [];
var br = [];

for (i = 0; i < 2; i++) {
    a[i] = document.createElement('a');
    br[i] = document.createElement('br');
}

a[0].innerHTML = 'Generators';
a[0].href = 'generators.html';
a[1].innerHTML = 'Kernel Programming';
a[1].href = 'kernel-programming.html';

for (i = 0; i < 2; i++) {
    document.body.appendChild(a[i]);
    document.body.appendChild(br[i]);
}