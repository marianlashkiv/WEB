function factorial(n){
var answer=1;
	  for( var i=2;i<=n;i++)
	 answer=answer* (i);
	  return answer;
  }
  n=prompt("Введіть число:");
  alert(factorial(n));