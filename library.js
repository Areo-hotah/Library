let myLibrary = [];

function Book(title,author,pages,read) {
	this.title = title;
	this.author = author;
	this. pages = pages;
	this.read = read;
	this.info = () => `${title} by ${author}, ${pages} pages, ${read}`;
}


/*let red_rising = new Book("Red rising", "Pierce Brown", 382, "read");
red_rising.info();*/

function addBookToLibrary() {
  // function that pushes a new book to the library
  myLibrary.push(bookObj);
}

/* div class name - each book has a class with height and color and the rest.
It has rules for paragraph tags so that every title is consistent. 
*/



let addButton = document.querySelector('#adder');
let addBook = addButton.addEventListener('click', function(){
	myLibrary.push(bookObj);
});
