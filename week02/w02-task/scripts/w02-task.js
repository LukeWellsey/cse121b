/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Luke Wells';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/me.png';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

//It is not clear to me what is desired here, this is my best guess...
yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);


/* Step 5 - Array */
let favoriteFoods = ['ice cream','chocolate','bacon'];
foodElement.innerHTML = favoriteFoods;
let mostBestestFood = 'onions';
favoriteFoods.push(mostBestestFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;








