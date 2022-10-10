import data from '../data.js';
import { addItemsToLocalStorage } from '../localStorage.js';

// selectors
const mainContainer = document.querySelector('main');
const searchInput = document.querySelector('nav > input');

// global variables
let isError = false;

// supp functions
const setupApp = () => {
  addItemsToLocalStorage('books', data);
  renderBooks(data);
};

const renderBooks = (booksList) => {
  if (isError) {
    mainContainer.innerHTML = `
    <h1>We do not have book that you looking for.</h1>
  `;
  } else {
    mainContainer.innerHTML = `
    <section>
      <ul class="book-list">
      ${booksList
        .map((book) => {
          const { title, author, image, year, category } = book;
          return `
          <li class="book-list__book">
              <div class="book__img-container">
                  <img
                  src=${image}
                  alt=${title}
                  />
              </div>
              <div class="book__description">
                  <h4>${title}</h4>
                  <ul>
                      <li>Author: ${author}</li>
                      <li>Year: ${year}</li>
                      <li>category: ${category}</li>
                  </ul>
              </div>
          </li>
          `;
        })
        .join('')}
      </ul>
    </section>
  `;
  }
};

const validation = (inputValue, input, bookList) => {
  if (inputValue.length > 0 && bookList.length > 0) {
    input.classList.add('success');
    isError = false;
    return true;
  } else if (inputValue.length > 0 && bookList.length === 0) {
    input.classList.remove('success');
    input.classList.add('warning');
    isError = true;
    return;
  } else if (inputValue.length === 0) {
    // render all books
    input.classList.remove('success');
    input.classList.remove('warning');
    isError = false;
    return;
  }
};

// main functionality

searchInput.addEventListener('keyup', (e) => {
  e.preventDefault();
  const inputValue = e.target.value.toLowerCase();
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(inputValue)
  );
  const isValidate = validation(inputValue, searchInput, filteredBooks);
  if (isValidate) {
    renderBooks(filteredBooks);
  } else {
    renderBooks(books);
  }
});

// initial render
setupApp();
