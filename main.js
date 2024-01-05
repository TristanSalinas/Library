/* --------card model-----------------

<div class="book-card grid">
    <div class="card-top flex flex-column">
          <h3>Lord of the Ring</h3>
          <h4>J.R.R Tolkien</h4>
          <p>1256 pages</p>
    </div>
    <div class="card-buttons flex">
        <button>
         <img class="icon" src="icons/.svg"/>
        </button>
        <button>
         <img class="icon" src="icons/delete.svg"/>
        </button>

    </div>
</div>

------------------------------------*/

const bookGrid = document.querySelector(".books-grid");
let myLibrary = [];
const form = document.querySelector("form");
const title = form.querySelector("#title");
const author = form.querySelector("#author");
const pages = form.querySelector("#pages");
const checkbox = form.querySelector("#finished");

const addBtn = form.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function Book(_title, _author, _pageNbr, _read) {
  this.title = _title;
  this.author = _author;
  this.pageNbr = _pageNbr;
  this.read = _read;
}
// --- here come the spaghetti one --//

function createBookCard(book) {
  //------first creating the top of the card --------------//

  let card = document.createElement("div");
  card.classList.add("book-card", "grid");

  let cardTop = document.createElement("div");
  cardTop.classList.add("card-top", "flex", "flex-column");
  card.append(cardTop);

  let cardTitle = document.createElement("h3");
  cardTitle.textContent = book.title;
  cardTop.append(cardTitle);

  let cardAuthor = document.createElement("h4");
  cardAuthor.textContent = book.author;
  cardTop.append(cardAuthor);

  let pageNbr = document.createElement("p");
  pageNbr.textContent = book.pageNbr;
  cardTop.append(pageNbr);

  // ---------------- buttons --------------------//

  const cardbuttons = document.createElement("div");
  cardbuttons.classList.add("card-buttons", "flex");
  card.append(cardbuttons);

  //          ---------deleteButton--------------//

  const deleteBtn = document.createElement("button");
  const deleteIcon = document.createElement("img");
  deleteIcon.classList.add("icon");
  deleteIcon.setAttribute("src", "icons/delete.svg");
  deleteBtn.append(deleteIcon);

  deleteBtn.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    card.remove();
  });

  cardbuttons.append(deleteBtn);

  //        --------readButton-------------//

  const readBtn = document.createElement("button");
  cardbuttons.append(readBtn);

  const readIcon = document.createElement("img");
  readIcon.classList.add("icon");
  readBtn.append(readIcon);

  if (book.read) {
    card.classList.add("read");
    readIcon.setAttribute("src", "icons/eye-minus-outline.svg");
  } else {
    readIcon.setAttribute("src", "icons/eye-plus-outline.svg");
  }

  readBtn.addEventListener("click", () => {
    if (book.read) {
      book.read = false;
      card.classList.remove("read");
      readIcon.setAttribute("src", "icons/eye-plus-outline.svg");
    } else {
      book.read = true;
      card.classList.add("read");
      readIcon.setAttribute("src", "icons/eye-minus-outline.svg");
    }
  });

  return card;
}

function createBookFromForm() {
  let book = new Book(title.value, author.value, pages.value, checkbox.checked);
  title.value = "";
  author.value = "";
  pages.value = "";
  checkbox.checked = false;

  return book;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  bookGrid.append(createBookCard(book));
}

addBtn.addEventListener("click", () => {
  let book = createBookFromForm();
  addBookToLibrary(book);
});

addBookToLibrary(new Book("Lord of the Ring", "J.R.R Tolkien", "1356", false));
addBookToLibrary(new Book("Lord of the Ring", "J.R.R Tolkien", "1356", false));
addBookToLibrary(new Book("Lord of the Ring", "J.R.R Tolkien", "1356", true));
addBookToLibrary(new Book("Lord of the Ring", "J.R.R Tolkien", "1356", false));
addBookToLibrary(new Book("Lord of the Ring", "J.R.R Tolkien", "1356", true));
addBookToLibrary(new Book("Lord of the Ring", "J.R.R Tolkien", "1356", true));
