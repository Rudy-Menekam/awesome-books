import {overlay, menuBtn, navList} from '/modules/web_navigation.js'
import {bookContainer, g} from '/modules/library.js'
import {Time} from '/modules/time.js'


bookContainer.addEventListener('click', (e) => {
  const clickedBtn = e.target.closest('.deleteBtn');
  if (!clickedBtn) return;
  const idToRemove = clickedBtn.id;
  g.removeBook(idToRemove);
});

document.querySelector('.addBtn').addEventListener('click', g.addBook);
Time.now();
menuBtn.addEventListener('click', overlay);
navList.addEventListener('click', overlay);
