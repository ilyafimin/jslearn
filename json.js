JavaScript предоставляет методы:

    JSON.stringify для преобразования объектов в JSON.
    JSON.parse для преобразования JSON обратно в объект.

let json = JSON.stringify(value[, replacer, space])

let value = JSON.parse(str, [reviver]);

str
    JSON для преобразования в объект.
reviver
    Необязательная функция, которая будет вызываться для каждой пары (ключ, значение) и может преобразовывать значение. 