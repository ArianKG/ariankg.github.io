document.title = 'KGIO';

var a = [];
var br = [];

for (i = 0; i < 1; i++) {
    a[i] = document.createElement('a');
    br[i] = document.createElement('br');
}

a[0].innerHTML = 'Kernel Programming';
a[0].href = 'kernel-programming.html';

for (i = 0; i < 1; i++) {
    document.body.appendChild(a[i]);
    document.body.appendChild(br[i]);
}