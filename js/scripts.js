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
