class Library {
  constructor() {
    this.book = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook = () => {
    const title = document.getElementById('insertTitle').value;
    const author = document.getElementById('insertAuthor').value;
    if (title.trim() === '' || author.trim() === '') return;
    const id = Date.now().toString();
    this.book.push({ title, author, id });

    localStorage.setItem('books', JSON.stringify(this.book));
    window.location.reload();
  };

  removeBook = (id) => {
    const filteredBooks = this.book.filter((b) => b.id !== id);
    localStorage.setItem('books', JSON.stringify(filteredBooks));
    window.location.reload();
  };
}
const bookContainer = document.querySelector('.bookContainer');
const g = new Library();
g.book.forEach((b) => {
  bookContainer.innerHTML += `
      <div class="innerContainer flex">
      <p>${b.title}</p> by
      <p>${b.author}</p>
        <button class="deleteBtn" id="${b.id}">Remove</button>
        <hr>
      </div>
    `;
});

bookContainer.addEventListener('click', (e) => {
  const clickedBtn = e.target.closest('.deleteBtn');
  if (!clickedBtn) return;
  const idToRemove = clickedBtn.id;
  g.removeBook(idToRemove);
});

document.querySelector('.addBtn').addEventListener('click', g.addBook);

const menuItems = document.querySelectorAll('li');
const sections = document.querySelectorAll('section');
function reset() {
  sections.forEach((section) => {
    section.style.display = 'none';
  });
}
reset();
sections[0].style.display = 'block';

menuItems[0].addEventListener('click', () => {
  reset();
  sections[0].style.display = 'block';
});

menuItems[1].addEventListener('click', () => {
  reset();
  sections[1].style.display = 'block';
});

menuItems[2].addEventListener('click', () => {
  reset();
  sections[2].style.display = 'block';
});

const menuBtn = document.getElementById('burger-container');
const navOverlay = document.getElementById('nav');
const navList = document.getElementsByClassName('menu')[0];
const burgerBar = document.getElementsByClassName('hamRotate')[0];
function overlay() {
  navOverlay.classList.toggle('invisible');
  burgerBar.classList.toggle('active');
  navOverlay.style.animation = 'awesome-out 1s';
}

menuBtn.addEventListener('click', overlay);
navList.addEventListener('click', overlay);