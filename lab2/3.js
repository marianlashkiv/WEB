function days( x ){
	var number=x;
    if( number == 1 ) 
        alert('понеділок') ;
    else if(number ==2 ) 
         alert('Вівторок'); 
   else if(number ==3 ) 
         alert('Середа'); 
	 else if(number ==4 ) 
         alert('Четвер'); 
	 else if(number ==5 ) 
         alert("П'янтиця"); 
	 else if(number ==6 ) 
         alert('Субота'); 
	 else if(number ==7 ) 
         alert('Неділя'); 
    else 
        alert('Неправильне значення'); 
	return x;
}

x=prompt("Введіть номер тижня:");
console.log(days(x));