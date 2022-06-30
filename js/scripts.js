//Targeting the class search-container element
let searchContainer = document.querySelector(".search-container");

//Creating form
let searchForm = document.createElement("form");
searchForm.setAttribute("action", "#");
searchForm.setAttribute("method", "get");

//Creating/appending search input element to DOM
let searchInput = document.createElement("input");
searchInput.setAttribute("type", "search");
searchInput.setAttribute("id", "search-input");
searchInput.setAttribute("class", "search-input");
searchInput.setAttribute("placeholder", "Search...");
searchForm.append(searchInput);

//Creating/appending submit button input element to DOM
let submitInput = document.createElement("input");
submitInput.setAttribute("type", "submit");
submitInput.setAttribute("value", "🔍");
submitInput.setAttribute("id", "search-submit");
submitInput.setAttribute("class", "search-submit");
searchForm.append(submitInput);


//Appending search form to the search-container element
searchContainer.append(searchForm);



let gallery = document.getElementById('gallery');

let cardDiv = document.createElement('div');
cardDiv.classList.add('card');
gallery.append(cardDiv);

let cardimgContainer = document.createElement('div');
cardimgContainer.classList.add('card-img-container');
cardDiv.append(cardimgContainer);


let img = document.createElement('img');
img.classList.add('card-img');
img.src = "https://placehold.it/90x90";
img.alt = "profile picture";
cardimgContainer.append(img);


let cardinfoDiv = document.createElement('div');
cardinfoDiv.classList.add('card-info-container');
cardDiv.append(cardinfoDiv);


let h3 = document.createElement('h3');
h3.setAttribute("id", "name");
h3.classList.add('card-name', 'cap');
h3.textContent = "first last";
cardinfoDiv.append(h3);

let p1 = document.createElement('p');
p1.classList.add('card-text');
p1.textContent = 'email';
cardinfoDiv.append(p1);


let p2 = document.createElement('p');
p2.classList.add('card-text', 'cap');
p2.textContent = 'city, state';
cardinfoDiv.append(p2);





let body = document.getElementsByTagName('body');
let modalcontainerDiv = document.createElement('div');
modalcontainerDiv.classList.add('modal-container');
document.body.append(modalcontainerDiv);

let modalDiv = document.createElement('div');
modalDiv.classList.add('modal');
modalcontainerDiv.append(modalDiv);

let button = document.createElement('button');
button.setAttribute("type", "button");
button.setAttribute("id", "modal-close-btn");
button.classList.add('modal-close-btn');
modalDiv.append(button);

let strong = document.createElement('strong');
strong.textContent = 'X';
button.append(strong);

let modalinfoDiv = document.createElement('div');
modalinfoDiv.classList.add('modal-info-container');
modalDiv.append(modalinfoDiv);

modalImg = document.createElement('img');
modalImg.classList.add('modal-img');
modalImg.src = "https://placehold.it/125x125";
modalImg.alt = "profile picture";
modalinfoDiv.append(modalImg);

let secondH3 = document.createElement('h3');
secondH3.setAttribute("id", "name");
secondH3.classList.add('modal-name', 'cap');
secondH3.textContent = "name";
modalinfoDiv.append(secondH3);

let pOne = document.createElement('p');
pOne.classList.add('modal-text');
pOne.textContent = 'email';
modalinfoDiv.append(pOne);


let pTwo = document.createElement('p');
pTwo.classList.add('modal-text', 'cap');
pTwo.textContent = 'city';
modalinfoDiv.append(pTwo);

let hr = document.createElement('hr');
modalinfoDiv.append(hr);

let pThree = document.createElement('p');
pThree.classList.add('modal-text');
pThree.textContent = '(555) 555-5555';
modalinfoDiv.append(pThree);

let pFour = document.createElement('p');
pFour.classList.add('modal-text');
pFour.textContent = '123 Portland Ave., Portland, OR 97204';
modalinfoDiv.append(pFour);

let pFive = document.createElement('p');
pFive.classList.add('modal-text');
pFive.textContent = 'Birthday: 10/21/2015';
modalinfoDiv.append(pFive);



