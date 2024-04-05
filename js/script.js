'use strict';

//======================AJAX========================
/*
// 1) XMLHttpRequest - встроенный объект в браузер (не актуально)

const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
   //создание запроса на сервер
   const request = new XMLHttpRequest();

   //метод сбора настроек, формат: request.open(method, url, async, login, pass)
   request.open('GET', 'js/current.json');

   //http заголовки
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

   //отправка запроса
   request.send();

   // свойства полученных данных
   // status
   // statusText
   // response
   // readyState

   //события
   request.addEventListener('load', () => {
      if (request.status === 200) {
         const data = JSON.parse(request.response);
         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(3);
      } else {
         inputUsd.value = 'error';
      }
   });
});
*/
/*
//======================PROMISE============================
console.log('Запрос данных...');
const req = new Promise((resolve, reject) => {
   setTimeout(() => {
      console.log('Подготовка данных...');

      const product = {
         name: 'TV',
         price: 2000
      };

      resolve(product);
   }, 2000);
});

req.then((product) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         product.status = 'order';
         resolve(product);
      }, 2000);
   });
}).then(data => {
   data.modify = true;
   return data;
}).then(data => {
   console.log(data);
}).catch(() => {
   console.error('Произошла ошибка');
}).finally(() => {
   console.log('Finally');
});

const test = time => {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve();
      }, time);
   });
};

//test(1000).then(() => console.log('1000 ms'));
//test(2000).then(() => console.log('2000 ms'));

//Ждет выполнения всех промисов
Promise.all([test(1000), test(2000)]).then(() => {
   console.log('All');
});

//Ждет выполнения первого промиса
Promise.race([test(1000), test(2000)]).then(() => {
   console.log('race');
});
*/

//===================Fetch API=============================
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   .then(json => console.log(json));
*/
/*
fetch('https://jsonplaceholder.typicode.com/posts', {
   method: 'POST',
   body: JSON.stringify({ name: 'Aleks' }),
   headers: {
      'Content-type': 'application/json'
   }
})
   .then(response => response.json())
   .then(json => console.log(json));
*/
/*
//============Методы перебора массивов======================
//filter
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
const shortNames = names.filter((name) => {
   return name.length < 5;
});
console.log(shortNames);

//map
const answers = ['IvAn', 'AnnA', 'helLo'];
const result = answers.map(item => item.toLowerCase());
console.log(result);

// some, every
const arr = [4, 'qwq', 'sfres'];
console.log(arr.some(item => typeof (item) === 'number'));
console.log(arr.every(item => typeof (item) === 'number'));

// reduce
const arrNumber = [4, 5, 1, 3, 2, 6];
const sumArr = arrNumber.reduce((sum, current) => sum + current);
const sumArr2 = arrNumber.reduce((sum, current) => sum + current, 3);
console.log(sumArr);
console.log(sumArr2);

const arrStr = ['apple', 'pear', 'plum'];
const sumArrStr = arrStr.reduce((sum, current) => `${sum}, ${current}`);
console.log(sumArrStr);

const obj = {
   ivan: 'persone',
   ann: 'persone',
   dog: 'animal',
   cat: 'animal'
};

const newArr = Object.entries(obj)
   .filter(item => item[1] === 'persone')
   .map(item => item[0]);
console.log(newArr);
*/
