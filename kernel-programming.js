document.title = 'Kernel Programming';

var a = [];
var br = [];

for (i = 0; i < 3; i++) {
    a[i] = document.createElement('a');
    br[i] = document.createElement('br');
}

a[0].innerHTML = 'Create Function: clr';
a[0].href = 'kernel-programming/1.html';
a[1].innerHTML = 'Create Function: printcol_char';
a[1].href = 'kernel-programming/2.html';
a[2].innerHTML = 'Create Function: printcol_str'
a[2].href = 'kernel-programming/3.html'

for (i = 0; i < 3; i++) {
    document.body.appendChild(a[i]);
    document.body.appendChild(br[i]);
}