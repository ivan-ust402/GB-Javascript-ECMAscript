/* 
Домашнее задание

Задание 1. Получение данных о пользователе.

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/
*/


function getUserData(ID) {
    const url = new URL('https://reqres.in/api/users');
    url.searchParams.set('id', ID);
    fetch(url)
        .then(response => {
            console.log("Задание 1");

            if (response.ok && response.status === 200) {
                return response.json();
            } else {
                throw new Error('Пользователь не найден!');
            }
        })
        .then(response => {
            console.log(response);
            console.log("");
        }) 
        .catch(error => {
            console.log(error);
            console.log("");
        });
}

getUserData(5);



/* 
Задание 2. Отправка данных на сервер.

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

*Подсказка *

// Пример использования функции
const user = {
  "name": "John Doe",
  "job": "unknown"
};

saveUserData(user)
  .then(() => {
    console.log('User data saved successfully');
  })
  .catch(error => {
    console.log(error.message);
  });
saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/
*/


/* 
// Один из вариантов
const user = {
    "name": "John Doe",
    "job": "unknown"
  };
  
function saveUserData(user) {
    const url = 'https://reqres.in/api/users';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user),
    };

    fetch(url, options)
    .then(response => {
        console.log("Задание 2");
        if(response.status === 201) {
            console.log('User data saved successfully');
            console.log("");
        } else {
            throw new Error('Что-то пошло не так!');
        }
    })
    .catch(error => {
      console.log(error.message);
      console.log("");
    });

}
    
saveUserData(user); */

function saveUserData(user) {
    const url = 'https://reqres.in/api/users';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user),
    };

    return fetch(url, options)
    .then(response => {
        console.log("Задание 2");
        if(response.status === 201) {
            return response;
        } else {
            throw new Error('Что-то пошло не так!');
        }
    })

}
    
const user = {
    "name": "John Doe",
    "job": "unknown"
  };
  
saveUserData(user)
    .then(() => {
      console.log('User data saved successfully');
      console.log("");
    })
    .catch(error => {
      console.log(error.message);
      console.log("");
    });

/* Задание 4 (из семинара)
Необходимо получить список пользователей с сервера, отсортировать их
в алфавитном порядке и вывести в тег ul (его необходимо создать в html) 
на странице данный список пользователей.
API: https://jsonplaceholder.typicode.com/users
*/

const usersURL = 'https://jsonplaceholder.typicode.com/users';
async function fetchUsers(url) {
    await fetch(url)
        .then(response => {
            if(response.ok) {
                console.log("Задание 4 (из семинара)")
                return  response.json();
            } else {
                throw new Error();
            }   
        })
        .then(response => {
            response.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
            console.log(response);
            addNamesToHTML(response);
            console.log("Возник вопрос, который я оставил в комментариях перед функцией addNamesToHTML");
            console.log("");
        })
        .catch(error => {
            console.log(error);
            console.log("Возник вопрос, который я оставил в комментариях перед функцией addNamesToHTML");
        })
}

// ??? Вопрос: Как получить объект response из промиса 
// и работать с ним вне цепочки then? 
// Почему возник такой вопрос: следуя принципам SOLID, неочень хорошо 
// прям в функции, где мы посылаем запрос на сервер и получаем 
// ответ, осуществлять еще какие-либо действия (принцип единственной 
// ответственности(если не ошибаюсь)), а так как я не смог из 
// промиса вытащить полученный обЪект, мне пришлось прямо в then
// отрисовывать элементы, это очень неочень хорошо
// Подскажите, пожалуйста, как делать правильно 

function addNamesToHTML(response) {
    const ul = document.createElement('ul');
    for (let i = 0; i < response.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = response[i].name;
        ul.append(li);                
    }
    document.body.append(ul);
}

fetchUsers(usersURL);