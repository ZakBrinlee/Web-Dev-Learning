var favoriteBooks = [];

function addFavoriteBook(bookName) {
  if (!bookName.includes('Great')) {
    favoriteBooks.push(bookName);
  }
};

function printFavoriteBooks() {
  console.log('Number of Favorite Books: ', favoriteBooks.length);
  for (const book of favoriteBooks) {
    console.log(book);
  }
};

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBooks();