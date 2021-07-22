//push добавляет элемент в конец.

//pop удаляет последний элемент.
//Удаляет последний элемент из массива и возвращает его:

//shift Удаляет из массива первый элемент и возвращает его:

//unshift Добавляет элемент в начало массива:

//arr.splice(index, deleteCount,elemN) удаляет элементы массивы и возвращает их.

//arr.slice([start], [end])
//Он возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end)

//arr.concat(arg1, arg2...)
//Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения


//arr.forEach(function(item, index, array) {
    // ... делать что-то с item
//  });


// Поиск в массиве.
//arr.find

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
let user = users.find(item => item.id == 2);
alert(user.name); //Петя

//arr.filter

let results = arr.filter(function(item, index, array) {
    // если true - элемент добавляется к результату, и перебор продолжается
    // возвращается пустой массив в случае, если ничего не найдено
  });


//Преобразование в массиве

//arr.map вызывает функцию для каждого элемента массива и возвращает новый массив.

//arr.sort(function)

//arr.reverse 

//arr.split(delim)
//Метод str.split(delim) именно это и делает. Он разбивает строку на массив по заданному разделителю delim.

//arr.join 
// Вызов arr.join(glue) делает в точности противоположное split. Он создаёт строку из элементов arr, вставляя glue между ними.


//reduce
// Методы arr.reduce и arr.reduceRight похожи на методы выше, но они немного сложнее. Они используются для вычисления какого-нибудь единого значения на основе всего массива.

let value = arr.reduce(function(previousValue, item, index, array) {
    // ...
  }, [initial]);

//Если массив пуст, то вызов reduce без начального значения выдаст ошибку.


//Array.isArray(arr)
//Массивы не образуют отдельный тип языка. Они основаны на объектах.
//Поэтому typeof не может отличить простой объект от массива:


//Значение параметра thisArg становится this для func.

// 1 

function camelize(str) { 
	return str.split('-').map((item, index) => index != 0 ? item[0].toUpperCase() + item.slice(1) : item).join('');
}

// 2
function filterRange(arr, min=0, max=0) {

    return arr.filter((item) => (item >= min && item < max) ? true : false);
    //return arr.filter((item) => (item >= min && item < max));
        
}

//3 

function filterRange(array, min=0, max=0) {

    //return arr.sort((a,b)=>a>b).filter((item, index) => (item >= min && item <= max) ? true : arr.splice(index, 1));
    
return arr.sort((a,b) => a > b).filter((item, index) => {
    if (item >= min && item <= max) {
        return true;
    } else {
        array.splice(index, 1);
    }
})

//4 
function copySorted(arr) {
	return arr.concat().sort();
}

//6
let usersMapped = users.map((item) => {
	return {
  	fullName: item.name + item.surname,
    id: item.id,
  };
})

//7
function sortByAge(arr) {
	return arr.sort((elem1 , elem2) => elem1.age > elem2.age);
}