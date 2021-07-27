//Декораторы и переадресация вызова, call/apply


//func.call(context, arg1, arg2, ...)
//Существует специальный встроенный метод функции func.call(context, …args), который позволяет вызывать функцию, явно устанавливая this.

//func.apply(context, args)
//Он выполняет func, устанавливая this=context и принимая в качестве списка аргументов псевдомассив args.

  
//Заимствование метода javaScropt/
function hash() {
    alert( [].join.call(arguments) ); // 1,2
  }


//1
function spy(func) {

    function wrapper(...args) { // делаем массив из значений функции
  	    wrapper.calls.push(args); // добавляем его в массив
        return func.apply(this, arguments); // возвращаем результат функции, передавая значение из глобального объекта функции,
        // которую можно заменить массивом array 
    } 

	wrapper.calls = [];
  
    return wrapper;

}

//2
function delay(func, delayTime) {
	return function(x) {
  	setTimeout(() => func(x), delayTime);
  }
}

//3 не смог решить https://learn.javascript.ru/call-apply-decorators#method-borrowing .. вернусь позже.
