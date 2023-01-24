export default class Library {
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
 export  const bookContainer = document.querySelector('.bookContainer');
 export const g = new Library();
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
  
  