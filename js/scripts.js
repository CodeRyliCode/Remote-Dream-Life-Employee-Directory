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
 

 function openModal(index) {
/*We are using object destructuring to access the properties we need from the specific employee indexed array of objects. */
    const {
        dob,
        name,
        email,
        phone,
        location: { city, street, state, postcode },
        picture,
      } = employees[index];
//Getting the correct phone format and dob format that is needed
  const correctphoneFormat = phone.replace(/-/,' ');
    let date = new Date(dob.date);
    


  const modalHTML = `
  <div class="modal-container">
      <div class="modal">
      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
      <div class="modal-info-container">
          <img class="modal-img" src="${picture.large}" alt="profile picture">
          <h3 id="name" class="modal-name cap">${name.first} ${name.last}</h3>
          <p class="modal-text">${email}</p>
          <p class="modal-text cap">${city}</p>
          <hr>
          <p class="modal-text">${correctphoneFormat}</p>
          <p class="modal-text">${street.number} ${
      street.name
    }, ${city}, ${state} ${postcode}</p>
          <p class="modal-text">Birthday: ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}
          </p>
      </div>
  </div>
  `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
}