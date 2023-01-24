import '/modules/web_navigation.js'
import {bookContainer, g} from '/modules/library.js'


bookContainer.addEventListener('click', (e) => {
  const clickedBtn = e.target.closest('.deleteBtn');
  if (!clickedBtn) return;
  const idToRemove = clickedBtn.id;
  g.removeBook(idToRemove);
});

document.querySelector('.addBtn').addEventListener('click', g.addBook);
