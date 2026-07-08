const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },

  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },

  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },

  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },

  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// =========================== Destructuring ===========================

/*
const book = getBook(2);

// const title = book.title;
// const author = book.author;

// console.log(title, "by", author);

// with object destructive
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(
  `${title} by
    ${author} with
    ${pages} and publication date of
    ${publicationDate} genres of
    ${genres} used in a
    ${hasMovieAdaptation}`,
);

// with array destructive
// const primaryGeneres = genres[0];
// const secondaryGeneres = genres[2];

// console.log(primaryGeneres, secondaryGeneres);

const [primaryGeneres, secondaryGeneres] = genres; // the first variable define takes element out of the arrays and assing it to "primaryGeners" so does the secondaryGeneres takes the 2nd element of the arrays.

// =========================== REST OPEATORS ===========================
// the "...variable" takes the all or the rest of the element in the arrays that have not been destructures

const [primaryGenere, secondaryGenere, ...othersGeners] = genres;
console.log(primaryGenere, secondaryGenere, othersGeners);

// =========================== SPREAD OPEATORS ===========================
// with arrays
const newGenres = [...genres, "epic fantasy"];
newGenres;

// with object
const updateBook = {
  ...book,
  // adding a new property
  moviePublicationDate: "2001-12-19",

  // Overwriting an existing property
  pages: 1120,
};
updateBook;

// 📖 NOTE: When you want to creating a new OR overide existing element in "object" or and "array" you used the "SPREAD OPERATOR"

// =========================== TEMPLATE LITERALS ===========================
// We use backticks (`) for template literals

const summary = `${title}, a ${pages}-page long booK was written by ${author} and pulished in ${publicationDate.split("-")[0]}`;
summary;

// =========================== TERNARIES OPERATORS ===========================
const pagesRange = pages > 1000 ? "Over a thousand" : "Less than thousand";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

const summarize = `${title}, a ${pages}-page long booK was written by ${author} and pulished in ${publicationDate.split("-")[0]}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summarize;

// =========================== ARROW FUNCTION ===========================

// Old way of Function = function declaration
function getYear(str) {
  return str.split('-')[0]
  }
  console.log(getYear(publicationDate))


// arrow Function = function expression
const getYear = (str) => {
  return str.split("-")[0];
};

console.log(getYear(publicationDate));

// =========================== SHORT-CIRCUITING AND OPERATORS: &&,||, ?? ===========================

// && operator:  this will return the second value when the first value it true it act as a if()

console.log(true && "Hell, React");
console.log(false && "not learning react");
console.log(hasMovieAdaptation && "not learning react");


// This work on a truthy and falsy value:
// TRUTHY VALUE: is a value without a falsy value
// FALSY VALUE: is a value with 0, "", null, undefined

console.log("Kofi" && "This is truthy value");
console.log(0 && "This is falsy value");

// || operator:  this will return the first value when it true else return the second value when the first value is false
console.log(false || "Second value return");
console.log(true || "First value return");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "Not translated";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);

const countWrong = book.reviews.librarything.reviewsCount || "not data";
countWrong;

// ?? nonlish coliation operator:
// this will only return when the second value first value is null or undefined but not when it is ) (zero) or an empty strings ""

const count = book.reviews.librarything.reviewsCount ?? "NOT DATA";
count;

// =========================== OPTIONAL CHAINING OPERATORS (?)===========================
function getTotalReviewCount(book) {
  const goodReads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything.reviewsCount;
  return goodReads + librarything;
}
console.log(getTotalReviewCount(book));
 */

// =========================== ARRAYS METHOD ===========================
/*

// map()
const books = getBooks();
books;

const X = [1, 2, 3, 4, 5].map((el) => el * 2);
X;

const allTitle = books.map((book) => book.title);
allTitle;

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

// filter()

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventuresBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventuresBooks;

// reduce ()
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// sort ()

const arr = [8, 7, 6, 5, 4, 3, 2, 1];
arr.slice().sort((a, b) => a - b);
arr;

const sortedByPages = books.sort((a, b) => a.pages - b.pages);
sortedByPages;

// =========================== HOW TO WORK WITH IMMUTABLE ARRAYS ===========================
// Looking at how to change, delete, and add elements without affecting or change the original once

// 1) Add a book object to array
const AddNewBook = {
  id: 6,
  title: "harry Potter and the Chamber of Secrets",
  author: "J. k. Rowling",
};

const addElementToArray = [...books, AddNewBook]
  .slice()
  .sort((a, b) => a.id - b.id);
addElementToArray;

// 2) Delete a book object from array
const deleteElementFromArray = addElementToArray.filter(
  (book) => book.id !== 3,
);
deleteElementFromArray;

// 3) Update/Edit a book in the array
const updateElementInArray = deleteElementFromArray.map((book) =>
  book.id === 1 ? { ...book, pages: 1111 } : book,
);
console.log(updateElementInArray);
*/

// =========================== ASYNCHORONOUS JAVASCRIPT PROMISES ===========================
// In order to fetch API we use a method called fetch():

// Using promise method
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.jons())
//   .then((data) => console.log(data));

// console.log("Kofi");

// async/wait
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await res.json();
  console.log(data);
}

const todos = getTodos();
console.log(todos);

console.log("Kofi");
