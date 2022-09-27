let ul = document.getElementById('ulId');
let ulAtt = ul.attributes
const arrAttName = []
const arrAttValue = []
let name = 'Nik'

// Вытянуть все атрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого атрибута в массив — вывести этот массив в консоль
// Так-же записать в отдельный массив каждое имя атрибута — вывести массив в консоль
for(let i = 0, length = ulAtt.length; i < length; i++){
    arrAttValue.push(ulAtt[i].value);
    arrAttName.push(ulAtt[i].name);
}
console.log(arrAttValue);
console.log(arrAttName);

// С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
ul.lastElementChild.textContent = `Привет меня зовут ${name}`
console.log(ul.lastElementChild);

// Добавить первому элементу li атрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
ul.firstElementChild.setAttribute('data-my-name' , `${name}`)
console.log(ul.firstElementChild.hasAttribute('data-my-name'));

// Удалить у тега ul атрибут ‘data-dog-tail‘
ul.removeAttribute('data-dog-tail')
console.log(ul.hasAttribute('data-dog-tail'));