
var name="Marian";
alert(name); //1
var a=12;
var b=4;
var c=a-b;
var d=7;
var results=c+d;
alert(results);//2

var number=prompt("Який у тебе варіант?");
if(number>=7)
	alert('Вірно');
else alert('Невірно');//3

var number=prompt("Який у тебе варіант?");
if(number%2==0)
alert(+number+7);
else alert(number-3);//4

var n;
n=prompt("Ввеlіть номер вашого варіанту:");
document.write("Квадрат чисел:");
for(var i=1;i<=n;i++)
document.write("<br /> " + Math.pow(i,2));
document.write("<br><br>");
document.write("Прості числа:");//5

	
for (var i=2;  i<=n; i++) {
  var count = 0;
  for (var j=2; j<=i; j++) {
    if (i%j) {continue;}
    count += 1;
  }
  if (count == 1) document.write(' ',i);//6

}

