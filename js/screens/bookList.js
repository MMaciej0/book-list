import { isError } from '../index.js';

const renderBooks = (booksList) => {
  const mainContainer = document.querySelector('main');
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

export default renderBooks;
