function pow(x, n) {
var result = Math.pow(x,n);
return result;
}
var x = prompt("Введіть аргумент:", '');
var n = prompt("Введіть степень:", '');
if (n <= 1) {
alert('Степень ' + n + 'не підтримується , введіть ціле значення більше 1');
} 
else {
alert( pow(x, n) );
}