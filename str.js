//Полученеие_подстроки


let str = 'Home is my sweet!'

//str.slice(start [, end])
alert(str.slice(4,7));

//str.substring(start [, end])
alert(str.substring(0,4));

//str.substr(start [, length])
alert(str.substr(0, 7));

// str.codePointAt(pos)
//Возвращает код для символа, находящегося на позиции pos:

//String.fromCodePoint(code)
//Создаёт символ по его коду code

//str.localeCompare(str2)
//
//Отрицательное число, если str меньше str2.
//Положительное число, если str больше str2.
//0, если строки равны.
