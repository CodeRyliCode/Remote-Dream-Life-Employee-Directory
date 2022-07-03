/*Figuring out what to include in the url api for this project. Only 12 user results are needed as well as
the name(first and last), picture(image),email, location(city or location including detailed address), 
phone(formatting needed to be (XXX) XXX-XXXX, dob(birthday formatting needed to be MM/DD/YYYY) */
const url = `https://randomuser.me/api/?results=12&inc=name,picture,email,location,phone,dob&noinfo&nat=US`;

/*We need global variable and empty array for this variable because we are going to be using
a forEach method inside a function generateResults that will target the array of objects,employees.That function will be used in our fetch method
to target the results property, all the info we need in the api, and display the employee cards on screen. employees is also used later in the
openModal function.  */
let employees = [];

const gallery = document.getElementById("gallery");

fetch(url)
  .then((response) => response.json()) // Parsing the retrieved response to json format
  // .then((data) => console.log(data)) Logging api info and array of objects to console
  .then((response) => {
    generateResults(
      response.results
    ); /*response can be any word as long as they match. 
// The important word here is results because the actual data we want is in the results property
// of the response object */
    employees = response.results;
  });



/*This function will be called from the fetch method. The forEach loops through all the employee array of objects so we can then 
use template literals to add html to the DOM targeting the object properties we need*/
function generateResults(employees) {
    let employeeHTML = "";
 
   employees.forEach((employee, index) => {
     const name = employee.name;
     const email = employee.email;
     const city = employee.location.city;
     const picture = employee.picture;
 
     employeeHTML += `
         <div class="card" data-index=${index}>
           <div class="card-img-container">
             <img class="card-img" src="${picture.large}" alt=profile picture">
             </div>
             <div class="card-info-container">
               <h3 id="name" class="card-name cap">${name.first} ${name.last}</h3>
               <p class="card-text">${email}</p>
               <p class="card-text cap">${city}</p>
             </div>
           </div>
       `;
   });
 
   gallery.insertAdjacentHTML("beforeend", employeeHTML);
 }
 

 