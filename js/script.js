'use strict';

//======================AJAX========================

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