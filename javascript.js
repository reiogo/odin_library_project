const myLibrary = [];


function Book(title, author, pages, readOrNot) {
  // the constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readOrNot = readOrNot;
}

function addBookToLibrary(title, author, pages, readOrNot) {

  let book = new Book(title, author, pages, readOrNot);
  myLibrary.push(book)

}

addBookToLibrary("Harry Potter", "JK Rowling", 700, "Yes");



function displayBooks() {

  const booksContainer = document.querySelector(".books-container");
  let card = document.createElement("div");
  booksContainer.replaceChild(card, booksContainer.childNodes[0]);
  

  for (let i=0; i < myLibrary.length; i++) {
    
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
  // else {
  //   submitForm.style.display = "none";
  //   submitButton.style.display = "block";
  // }
}



// Submit new book 

const bookSubmitForm = document.querySelector(".submit-button");

bookSubmitForm.addEventListener("click", bookSubmit);


function bookSubmit(event) {

  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const readOrNot = document.querySelector("input[type=radio]:checked").value;
  
 
  addBookToLibrary(title, author, pages, readOrNot);
  displayBooks();
}

  
  


// Display books
displayBooks();
