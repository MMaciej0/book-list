import initialData from '../data.js';
import {
  addItemsToLocalStorage,
  getItemsFromLocalStorage,
} from '../localStorage.js';
import { renderAddingForm } from './screens/addBookForm.js';
import renderBooks from './screens/BookList.js';

// selectors
const searchInput = document.querySelector('nav > input');
const addBtn = document.querySelector('.add-btn');

// global variables
export let isError = false;

// supp functions
const setupApp = () => {
  const books = getItemsFromLocalStorage('books');
  if (books) {
    renderBooks(books);
  } else {
    addItemsToLocalStorage('books', initialData);
    renderBooks(initialData);
  }
};

// nav validation
const inputValidation = (inputValue, input, bookList) => {
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
    // => render all books
    input.classList.remove('success');
    input.classList.remove('warning');
    isError = false;
    return;
  }
};

// nav functionality
searchInput.addEventListener('keyup', (e) => {
  e.preventDefault();
  const inputValue = e.target.value.toLowerCase();
  const books = getItemsFromLocalStorage('books');
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(inputValue)
  );
  const isValidate = inputValidation(inputValue, searchInput, filteredBooks);
  if (isValidate) {
    renderBooks(filteredBooks);
  } else {
    renderBooks(books);
  }
});

addBtn.addEventListener('click', () => {
  renderAddingForm();
});

// initial render
setupApp();
