var x = prompt('Сколько Тебе лет?');
if(!parseInt(x)){
	alert('Вы ввели НЕ Число!');
}else{
	if(x < 18){
		alert('Вам еще нет 18');
	}else{
		alert('Доступ разрешен');
	}
	
}