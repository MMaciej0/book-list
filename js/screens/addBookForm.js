import {
  addItemsToLocalStorage,
  getItemsFromLocalStorage,
} from '../../localStorage.js';
import { showError } from '../ultils.js';
import renderBooks from './bookList.js';

export const renderAddingForm = () => {
  const mainContainer = document.querySelector('main');
  mainContainer.innerHTML = `
      <section class="add-container">
        <button class="close-btn">
          <i class="fa-solid fa-square-xmark"></i>
        </button>
        <h3 class="form-error">error</h3>
        <form>
          <div class="input-box">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required/>
          </div>
          <div class="input-box">
            <label for="author">Author:</label>
            <input type="text" id="author" name="author" required/>
          </div>
          <div class="input-box">
            <label for="year">Year:</label>
            <input type="text" id="year" name="year" required/>
          </div>
          <div class="input-box">
            <label for="category">Category:</label>
            <input type="text" id="category" name="category" required/>
          </div>
          <div class="input-box">
            <label for="image-source">Image Source:</label>
            <input type="text" id="image-source" name="image-source" required/>
          </div>
          <button class="submit-btn">Add Book</button>
        </form>
      </section>
      `;
  formFunctionality();
};

const formFunctionality = () => {
  const form = document.querySelector('.add-container form');
  const closeBtn = document.querySelector('.close-btn');

  closeBtn.addEventListener('click', () => {
    const books = getItemsFromLocalStorage('books');
    renderBooks(books);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newBook = getNewBook();
    if (newBook) {
      const books = getItemsFromLocalStorage('books');
      const booksNew = [...books, newBook];
      addItemsToLocalStorage('books', booksNew);
      renderBooks(booksNew);
    }
  });
};

const getNewBook = () => {
  const errorField = document.querySelector('.form-error');
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const yearInput = document.getElementById('year');
  const categoryInput = document.getElementById('category');
  const imageInput = document.getElementById('image-source');

  // simple validation, as many ifs as i need
  if (authorInput.value.length < 6) {
    showError(errorField, 'Please input real name of author');
    return;
  }

  // ----------------------------------------

  const newBook = {
    id: new Date().getTime().toString(),
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    image: imageInput.value,
    category: categoryInput.value,
  };
  return newBook;
};
