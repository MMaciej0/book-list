const books = [
  {
    title: 'The Institute',
    author: 'Stephen King',
    image: 'https://ecsmedia.pl/c/the-institute-b-iext62069348.jpg',
    year: '1999',
    category: 'Thriller',
  },
  {
    title: 'Hobbit',
    author: 'J.R.R Tolkien',
    image: 'https://i1.fdbimg.pl/x1/ndi3gor1/400x580_mxa456.jpg%20400w',
    year: '1999',
    category: 'Adventure',
  },
  {
    title: 'It',
    author: 'Stephen King',
    image: 'https://ecsmedia.pl/c/it-b-iext50542410.jpg',
    year: '1999',
    category: 'Horror',
  },
];

// selectors
const bookContainer = document.querySelector('.book-list');

// supp functions

const renderBooks = () => {
  bookContainer.innerHTML = `
  ${books
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
`;
};

// main functionality

renderBooks();
