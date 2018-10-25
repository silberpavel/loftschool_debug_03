import { isArray } from "util";
export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};

/* ДЗ 2 - работа с исключениями и отладчиком */

/*
 Задача 1:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */

function isAllTrue(array, fn) {
    var x = 0;
    var y = 0;

    if ((array == 0) || (array.length <= 0)) { // array == 0 (Mean empty array)
        throw new Error('empty array');

    } else if (typeof fn != 'function') {
        throw new Error('fn is not a function');

    } else if (!(Array.isArray(array))) {
        throw new Error('not array');
        // console.error('not array');

    } else {
        for (var i = 0; i < array.length; i++) {
            var z = fn(array[i]);

            if (z == false) {
                y++;
            } else if (z == true) {
                x++;
            }
        }
        if (array.length == x) {
            return true;
        } else if (y > 0) {
            return false;
        }
    }
}

// var arr = [1, 3, 4, 2, 5, 44, 4, 44, 2, 2, 3, 54, 7];

// function filterFn(params) {
//     if (params > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // var arr = [1, 2, 5, 8, 99, 45];
// var res = isAllTrue(arr, filterFn);
// console.log(res);

/*
 Задача 2:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isSomeTrue(array, fn) {
    var x = 0;
    var y = 0;

    if ((array == 0) || (array.length <= 0)) { // array == 0 (Mean empty array)
        throw new Error('empty array');

    } else if (typeof fn != 'function') {
        throw new Error('fn is not a function');

    } else if (!(Array.isArray(array))) {
        throw new Error('not array');
        // console.error('not array');

    } else {
        for (var i = 0; i < array.length; i++) {
            var z = fn(array[i]);

            if (z == false) {
                y++;
            } else if (z == true) {
                x++;
            }
        }
        if (array.length == x) {
            return true;
        } else if (y > 0) {
            return false;
        }
    }
    
}
/*
 Задача 3:
 Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запусти fn для каждого переданного аргумента (кроме самой fn)
 Функция должна вернуть массив аргументов, для которых fn выбросила исключение
 Необходимо выбрасывать исключение в случаях:
 - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn) {
    var arrRes = [];

    if (typeof fn != 'function') {
        throw new Error('fn is not a function');
    }

    for (let i = 0; i < arguments.length; i++) {
        
        try {
            fn(arguments[i]);
        } catch (e) {
            // throw new Error('false');
            arrRes.push(arguments[i]);
        }
    }

    return arrRes;
}   

/*
 Задача 4:
 Функция имеет параметр number (по умолчанию - 0)
 Функция должна вернуть объект, у которого должно быть несколько методов:
 - sum - складывает number с переданными аргументами
 - dif - вычитает из number переданные аргументы
 - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
 - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно
 Необходимо выбрасывать исключение в случаях:
 - number не является числом (с текстом "number is not a number")
 - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator() {


    return {
        sum: function(number) {
            return number + arguments[1];
        {
            
        }
    }
}

