
/*
event-loop no node basicamente
mostra a forma como e executadas as
linhas de codigos,
de cima para baixo linha apos linha 
*/


function a () { console.log('a()') };
function b () { console.log('b()') };
function c () { console.log('c()') };
function d () { console.log('d()') };


d();
c();
b();
a();

console.log('---------------------')

d();
a();
b();
c();
