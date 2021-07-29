
    //let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);



    Object.defineProperty(obj, propertyName, descriptor) // Изменение флага свойства.
    writable – если true, свойство можно изменить, иначе оно только для чтения.

    enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.

    configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
    //Определение свойства как неконфигурируемого – это дорога в один конец. Мы не сможем отменить это действие, 
    //потому что defineProperty не работает с неконфигурируемыми свойствами.

//Существует метод Object.defineProperties(obj, descriptors), который позволяет определять множество свойств сразу.
Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});
//Чтобы получить все дескрипторы свойств сразу, можно воспользоваться методом Object.getOwnPropertyDescriptors(obj).


Object.preventExtensions(obj)
    Запрещает добавлять новые свойства в объект.
Object.seal(obj)
    Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.
Object.freeze(obj)
    Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.

А также есть методы для их проверки:

Object.isExtensible(obj)
    Возвращает false, если добавление свойств запрещено, иначе true.
Object.isSealed(obj)
    Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.
Object.isFrozen(obj)
    Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false. 