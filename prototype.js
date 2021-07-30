

//Object.getPrototypeOf/Object.setPrototypeOf or __proto__
// Methods for adding and getting prototype of Object


// 1. Value of __proto__ can be object or null. Other type is ignored.
// 2. Неважно, где находится метод: в объекте или его прототипе. При вызове метода this — всегда объект перед точкой.
// 3. for..in проходит и по своим, и по унаследованным ключам

//**************Function.prototype***************//

// 1. У каждой функции по умолчанию уже есть свойство "prototype".
// По умолчанию "prototype" – объект с единственным свойством constructor, которое ссылается на функцию-конструктор.

// 2. Таким образом, чтобы сохранить верное свойство "constructor",
// мы должны добавлять/удалять/изменять свойства у прототипа по умолчанию вместо того, чтобы перезаписывать его целиком:

//_________________________Embedded prototypes______________________________//

// 1. Object Prototype
// .1. Обратите внимание, что по цепочке прототипов выше Object.prototype больше нет свойства [[Prototype]]:

//________________________Primitives________________________//
///

//1
Function.prototype.defer = function(ms) {
	setTimeout( () => this(), ms);
}

//2
Function.prototype.defer = function(ms) {
	let func = this;
	return function(...args) {
  	setTimeout(() => func.apply(this, args), ms)
  }
}
