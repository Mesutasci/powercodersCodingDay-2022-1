/*Create an array called books in JavaScript. It should contain the title and author of each book, if the book has been sold out or is in stock, plus the price of the book. Add 3 books to the array. Show the elements of this array listed alphabetically in the HTML, and add a way for the user to add books. Style the HTML using CSS flex.

Estimated time: 45 minutes
Total points: 45
*/ 

const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPrice = document.getElementById("price");

// To identify if the book is sold or in stock
const textArray = [
    'sold',
    'in stock'
];
textArray[Math.floor(Math.random()*textArray.length)];

let books = [
    {
        title: "Best book",
        author: "Everyone Himself",
        price: 500,
        status: textArray[Math.floor(Math.random()*textArray.length)]
    },
    {
        title: "Not Bad",
        author: "Someone Else",
        price: 30,
        status: textArray[Math.floor(Math.random()*textArray.length)]
    },
    {
        title: "Most Boring",
        author: "Nobody",
        price: 1,
        status: textArray[Math.floor(Math.random()*textArray.length)]
    },
];

console.log(books);

function addBook(e) {
    e.preventDefault();
    books.push(
        {
            title: bookTitle.value,
            author: bookAuthor.value,
            price: bookPrice.value,
            status: textArray[Math.floor(Math.random()*textArray.length)]
        }
    )
} 
// // program to sort array by property title
// function compareBooks (book1, book2) {
//      return book1.title - book2.title;
// };

// console.log(books.sort(compareBooks));