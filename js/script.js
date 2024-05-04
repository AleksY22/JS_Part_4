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
/*
//===================Задачи======================
const films = [
   {
      name: 'Titanic',
      rating: 9
   },
   {
      name: 'Die hard 5',
      rating: 5
   },
   {
      name: 'Matrix',
      rating: 8
   },
   {
      name: 'Some bad film',
      rating: 4
   }
];

function showGoodFilms(arr) {
   return arr.filter(item => item.rating >= 8);
}
console.log(showGoodFilms(films));



function showListOfFilms(arr) {
   return (arr.map(item => item.name)).join(', ');
}
console.log(showListOfFilms(films));

function showListOfFilms2(arr) {
   return (arr.reduce((acc, item) => `${typeof (acc) === 'object' ? acc.name : acc}, ${item.name}`));
}
console.log(showListOfFilms2(films));



function setFilmsIds(arr) {
   return arr.reduce(function (acc, item, index, arr) {
      item.id = index;
      return arr;
   }, 0);
}
console.log(setFilmsIds(films));

function setFilmsIds2(arr) {
   return arr.map((item, index) => {
      item.id = index;
      return item;
   })
}
console.log(setFilmsIds2(films));


const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
   return arr.every(item => 'id' in item);
}

console.log(checkFilms(tranformedArray));
*/
/*
//===================Задачи======================
const funds = [
   { amount: -1400 },
   { amount: 2400 },
   { amount: -1000 },
   { amount: 500 },
   { amount: 10400 },
   { amount: -11400 }
];

const getPositiveIncomeAmount = (data) => {
   return data.filter(item => item.amount > 0).reduce((acc, item) => acc + item.amount, 0);
};
console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
   return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
};
console.log(getTotalIncomeAmount(funds));
*/

/*
//==================Local Storage===================
//localStorage.setItem('number', 5); //запись значения
//localStorage.getItem('number'); //получить значение
//localStorage.removeItem('number'); //удаление значения
//localStorage.clear(); //очистка хранилища

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
   checkbox.checked = 'true';
}

if (localStorage.getItem('bg') === 'changed') {
   form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
   localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
   if (localStorage.getItem('bg') === 'changed') {
      localStorage.removeItem('bg');
      form.style.backgroundColor = '#fff';
   } else {
      localStorage.setItem('bg', 'changed');
      form.style.backgroundColor = 'red';
   }
});

const persone = {
   name: 'Aleks',
   age: 25
}

const dataPerson = JSON.stringify(persone);
localStorage.setItem('persons', dataPerson);

console.log(JSON.parse(localStorage.getItem('persons')));
*/

/*
//==================Регулярные выражения=================
//Варианты создания:
// 1. new RegExp('pattern', 'flags') - используется редко
// 2. /pattern/flags

// flag:
// i - не зависит от регистра
// g - несколько вхождений (зависит от метода)
// m - многострояный режим
// флаги можно комбинировать (/n/igm)

// классы (обратные классы) символов:
// \d - цифры (\D - не цифры)
// \w - буквы (\W - не буквы)
// \s - пробелы (\S - не пробелы)


const ans = 'ajnjspdmlksmcn';
const reg1 = /n/;
console.log(ans.search(reg1));

const reg2 = /n/g;
console.log(ans.match(reg2));

const pass = 'uwieOInsai';
console.log(pass.replace(/./g, '*'));

const myStr = 'My name is R2D2';
console.log(myStr.match(/\w\d\w\d/i));
console.log(myStr.match(/\S/g));
*/
/*
//====================TEST========================
//==================1===================
const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('foo');
   }, 300);
});

promise.then((value) => {
   console.log(value); //foo
});

//====================2===================
const p1 = new Promise((resolve, reject) => {
   setTimeout(resolve, 1000, "one");
});
const p2 = new Promise((resolve, reject) => {
   setTimeout(resolve, 2000, "two");
});
const p3 = new Promise((resolve, reject) => {
   setTimeout(resolve, 3000, "three");
});
const p4 = new Promise((resolve, reject) => {
   setTimeout(resolve, 4000, "four");
});
const p5 = new Promise((resolve, reject) => {
   reject("reject");
});

Promise.all([p1, p2, p3, p4, p5]).then(value => {
   console.log(value);
}, reason => {
   console.log(reason); //reject
});

//==================3==================
const arr = [
   {
      name: 'Alex',
      salary: 500
   },
   {
      name: 'Ann',
      salary: 1500
   },
   {
      name: 'John',
      salary: 2500
   },
];

const result = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr)
console.log(result); //4500

//================4===================
const promisify = (item, delay) =>
   new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

function one() {
   const promises = [a(), b(), c()];
   Promise.all(promises).then(values => console.log(values))
}

one(); //[ 'a', 'b', 'c' ]

//======================5=====================
const promisify2 = (item, delay) =>
   new Promise(resolve => setTimeout(() => resolve(item), delay));

const a2 = () => promisify2('a', 100);
const b2 = () => promisify2('b', 5000);
const c2 = () => promisify2('c', 3000);

async function two() {
   const promises = [a2(), b2(), c2()];
   const outpu1 = await Promise.race(promises);
   return `two is done: ${outpu1}`;
}

two().then(console.log); //two is done: a

// Это тоже самое, что и .then(data => console.log(data));
// data передается в команду автоматически, и она запускается сама с этими данными

//======================6====================
const promisify3 = (item, delay) =>
   new Promise(resolve => setTimeout(() => resolve(item), delay));

const a3 = () => promisify3('a', 100);
const b3 = () => promisify3('b', 5000);
const c3 = () => promisify3('c', 3000);

async function three() {
   const outpu1 = await a3();
   const outpu2 = await b3();
   const outpu3 = await c3();
   return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}

three().then(console.log); //three is done: a b c
*/
/*
//=====================Геттеры и сеттеры===================
const person = {
   name: 'Aleks',
   age: 25,

   get userAge() {
      return this.age;
   },

   set userAge(num) {
      this.age = num;
   }
}
console.log(person.userAge);
person.userAge = 30;
console.log(person.age);
console.log(person.userAge);
*/
/*
//=======================Инкапсуляция=====================
function User(name, age) {
   this.name = name;
   this.age = age;

   this.say = function () {
      console.log(`Имя пользователя: ${this.name}, возраст ${this.age}`);
   }
}

const ivan = new User('Ivan', 27);
console.log(ivan.name);
console.log(ivan.age);
ivan.age = 30; //изменение свойства

class UserData {
   constructor(name, age) {
      this.name = name;
      this._age = age;
   }

   #surname = 'Ivanov'; //недоступно из вне

   say = () => {
      console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
   }

   get age() {
      return this._age;
   }

   set age(age) {
      if (typeof age === 'number' && age > 0 && age < 110) {
         this._age = age;
      } else {
         console.log('error data');
      }
   }
}

const alex = new UserData('Alex', 35);
console.log(alex.age);
alex.say();
console.log(alex.surname);
*/
