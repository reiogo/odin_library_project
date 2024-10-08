const myLibrary = [];


function Book(title, author, pages, readOrNot) {
  // the constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readOrNot = readOrNot;
}

Book.prototype.readOrNotToggling = function () {
  let res = "";
  if (this.readOrNot === "Yes") {
    res = "No"; 
  } else {
    res = "Yes";
  }
  this.readOrNot = res;
}


function addBookToLibrary(title, author, pages, readOrNot) {

  let book = new Book(title, author, pages, readOrNot);
  myLibrary.push(book)

}

addBookToLibrary("Harry Potter", "JK Rowling", 700, "Yes");



function displayBooks() {

  const booksContainer = document.querySelector(".books-container");
  // Remove any pre-existing books
  while (booksContainer.hasChildNodes()) {
    booksContainer.removeChild(booksContainer.firstChild);
  }
  
  for (let i=0; i < myLibrary.length; i++) {
    // First create card in the loop
    let card = document.createElement("div");
    card.setAttribute("value", `${i}`);
    
    // Then create all the text
    let titleCard = document.createElement ("span");
    titleCard.innerText += `Title: ${myLibrary[i].title}`;
    card.appendChild(titleCard)
    let authorCard = document.createElement ("span");
    authorCard.innerText += `Author: ${ myLibrary[i].author }`;
    card.appendChild(authorCard)
    let pagesCard = document.createElement ("span");
    pagesCard.innerText += `Pages: ${ myLibrary[i].pages }`;
    card.appendChild(pagesCard)
    let readCard = document.createElement ("span");
    readCard.innerText += `Have you read this?: ${ myLibrary[i].readOrNot }`;
    card.appendChild(readCard)

    // Add remove and read buttons
    removeButton = document.createElement("button");
    removeButton.setAttribute("class", "remove-button");
    removeButton.textContent += "Remove Book";
    readButton = document.createElement("button");
    readButton.setAttribute("class", "read-button");
    readButton.textContent += "Change Read Status";

    // Append card to container
    booksContainer.appendChild(card);
    card.appendChild(removeButton);
    card.appendChild(readButton);
    
  }


}

// Display form upon button click
document.querySelector(".new-book-button").addEventListener("click", displayForm);

function displayForm() {

  let submitForm = document.querySelector(".submit-form");
  let submitButton = document.querySelector(".new-book-button");
  submitForm.style.display = "none";

  if (submitForm.style.display === "none") {
    submitForm.style.display = "block"; 
    submitButton.style.display = "none";
  } 
}



// Submit new book 

const bookSubmitForm = document.querySelector(".submit-button");

bookSubmitForm.addEventListener("click", bookSubmit);

const validate = function addValidationToForm() {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const readOrNot = document.querySelector("input[type=radio]:checked");

  return (title.validity.valid && author.validity.valid && pages.validity.valid && readOrNot.validity.valid);
  
}

function bookSubmit(event) {
  if (validate() == false) {
    return;
  }

  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const readOrNot = document.querySelector("input[type=radio]:checked").value;
  
 
  addBookToLibrary(title, author, pages, readOrNot);
  displayBooks();

  // Make form disappear and button reappear
  const submitForm = document.querySelector(".submit-form");
  const submitButton = document.querySelector(".new-book-button");
  submitForm.style.display = "none";
  submitButton.style.display = "block";
  // submitForm.reset();
  const formSelector = document.querySelector(".book-submission-form");
  formSelector.reset();

}

// Remove card upon click
let removebutton = document.querySelector(".books-container");
removebutton.addEventListener("click", cardButtonClick);

function cardButtonClick(event) {
  indexOfCard = Number((event.target.closest("div").attributes[0].value));

  if (event.target.matches(".remove-button")) {
    const booksContainer = document.querySelector(".books-container");
    myLibrary.splice(indexOfCard, 1);
    displayBooks();

  } else if (event.target.matches(".read-button")) {
    myLibrary[indexOfCard].readOrNotToggling(); 
    displayBooks();
    
  }
  
  
}

// Display books
displayBooks();
