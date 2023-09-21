/* 
Домашнее задание

Задание 1
 Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
найти минимальное число в массиве, решение задание должно состоять из одной
строки кода.
*/
console.log("Задание 1");

const arr1 = [1, 5, 7, 9];
console.log("Минимальное значение в массиве:", Math.min(...arr1));

console.log("");



/* 
Задание 2
 Напишите функцию createCounter, которая создает счетчик и возвращает объект
с двумя методами: increment и decrement. Метод increment должен увеличивать
значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
на 1. Значение счетчика должно быть доступно только через методы объекта,
а не напрямую. 
*/
console.log("Задание 2");

function createCounter(counter) {
    return {
        printCounter() {
            return counter;
        },
        increment() {
            counter++;
        },
        decrement() {
            counter--;
        }
    }
}

const myCounter = createCounter(5);
console.log("Начальное значение счетчика:", myCounter.printCounter());
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
console.log("Значение счетчика после увеличения:", myCounter.printCounter());
myCounter.decrement();
myCounter.decrement();
myCounter.decrement();
console.log("Значение счетчика после уменьшения:", myCounter.printCounter());

console.log("");
/* 
Задание 3
 Дополнительное задание, выполняем только если проходили работу с DOM.
Напишите рекурсивную функцию findElementByClass, которая принимает корневой
элемент дерева DOM и название класса в качестве аргументов и возвращает первый
найденный элемент с указанным классом в этом дереве.

Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
*/
console.log("Задание 3");

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log("Искомый элемент:", targetElement);

// function findElementByClass(rootElement, searchElement) {
//     const children = rootElement.children;
//     console.log(children);
//     for (let i = 0; i < children.length; i++) {
//         if (children[i].className === searchElement) {
//             return children[i];
//         } else {
//             return findElementByClass(children[i], searchElement);
//         }
//     }
// }

function findElementByClass(rootElement, searchElementbyClass) {
    if (rootElement.className === searchElementbyClass) {
        return rootElement;
    }
    const children = rootElement.children;
    for (let i = 0; i < children.length; i++) {
        const res = findElementByClass(children[i], searchElementbyClass);
        if (res) {
            return res;
        }
    }   
}

console.log("");