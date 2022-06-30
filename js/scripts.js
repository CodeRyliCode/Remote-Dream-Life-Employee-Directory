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


//Targeting the gallery div
let gallery = document.getElementById('gallery');


//helper function for adding employee cards to DOM
const addCards = function addCards() {
    const employeeCards= gallery.insertAdjacentHTML('beforeend', ` <div class="card">
    <div class="card-img-container">
        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">first last</h3>
        <p class="card-text">email</p>
        <p class="card-text cap">city, state</p>
    </div>
    </div>`)
  return employeeCards;
  };



  //for loop will call function 12 times adding 12 employeeCards to DOM
  for(let i =0; i < 12; i++) {
    addCards();
  }







  
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

let h3 = document.createElement('h3');
h3.setAttribute("id", "name");
h3.classList.add('modal-name', 'cap');
h3.textContent = "name";
modalinfoDiv.append(h3);

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



const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
 if(xhr.readyState === 4) {
let employees = JSON.parse(xhr.responseText);
let statusHTML = '<ul class="bulleted">';
 }
};
xhr.open('GET', 'https://randomuser.me/api/');
xhr.send();