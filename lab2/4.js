var days;
x=prompt("Введіть номер дня тижня:");
    if( x == 1 )
days= function(){		
alert('понеділок');} 
    else if(x ==2 ) 
		days= function(){
		alert('Вівторок'); }
   else if(x ==3 ) 
	   days= function(){
	   alert('Середа'); }
	 else if(x ==4 )
      days= function(){		 
      alert('Четвер');} 
	 else if(x ==5 )
     days= function(){		 
       alert("П'янтиця"); }
	 else if(x ==6 )
		 days= function(){
         alert('Субота');} 
	 else if(x ==7 )
		 days= function(){
	alert('Неділя');}
    else
		days= function(){
        alert('Неправильне значення'); 
		}
days();