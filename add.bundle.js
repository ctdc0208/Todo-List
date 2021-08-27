/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/addPage.js ***!
  \************************/
// set myPages array
let myPages = [];

// add class page
class pages {
  constructor (page) {
    this.page = page;
  }
}

// set arrays in element to display pages
const displayPages = (() => {
  const pageList = document.querySelector('#table-body');
  pageList.textContent = '';
  for (let i = 0; i < myPages.length; i += 1) {
    const pageColumn = document.createElement('button');
    pageColumn.classList.add('page-column');
    pageColumn.textContent = myPages[i].page;
    pageList.appendChild(pageColumn);
  }
});

// make a add page function
const addPageToArray = (page) => {
  page = new pages(page);
  myPages.push(page);
  displayPages();
};

// make a function that pushes the new arrays
const createPage = (event) => {
  const titleInput = 'Untitled';
  addPageToArray(titleInput);
};

// make listen clicks for adding pages
const listenClicksPages = (() => {
  document.addEventListener('click', (event) => {
    const { target } = event;
    if (target.id === 'addPage') {
      createPage(event);
    }
  });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzZXQgbXlQYWdlcyBhcnJheVxubGV0IG15UGFnZXMgPSBbXTtcblxuLy8gYWRkIGNsYXNzIHBhZ2VcbmNsYXNzIHBhZ2VzIHtcbiAgY29uc3RydWN0b3IgKHBhZ2UpIHtcbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICB9XG59XG5cbi8vIHNldCBhcnJheXMgaW4gZWxlbWVudCB0byBkaXNwbGF5IHBhZ2VzXG5jb25zdCBkaXNwbGF5UGFnZXMgPSAoKCkgPT4ge1xuICBjb25zdCBwYWdlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZS1ib2R5Jyk7XG4gIHBhZ2VMaXN0LnRleHRDb250ZW50ID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXlQYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHBhZ2VDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwYWdlQ29sdW1uLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29sdW1uJyk7XG4gICAgcGFnZUNvbHVtbi50ZXh0Q29udGVudCA9IG15UGFnZXNbaV0ucGFnZTtcbiAgICBwYWdlTGlzdC5hcHBlbmRDaGlsZChwYWdlQ29sdW1uKTtcbiAgfVxufSk7XG5cbi8vIG1ha2UgYSBhZGQgcGFnZSBmdW5jdGlvblxuY29uc3QgYWRkUGFnZVRvQXJyYXkgPSAocGFnZSkgPT4ge1xuICBwYWdlID0gbmV3IHBhZ2VzKHBhZ2UpO1xuICBteVBhZ2VzLnB1c2gocGFnZSk7XG4gIGRpc3BsYXlQYWdlcygpO1xufTtcblxuLy8gbWFrZSBhIGZ1bmN0aW9uIHRoYXQgcHVzaGVzIHRoZSBuZXcgYXJyYXlzXG5jb25zdCBjcmVhdGVQYWdlID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSAnVW50aXRsZWQnO1xuICBhZGRQYWdlVG9BcnJheSh0aXRsZUlucHV0KTtcbn07XG5cbi8vIG1ha2UgbGlzdGVuIGNsaWNrcyBmb3IgYWRkaW5nIHBhZ2VzXG5jb25zdCBsaXN0ZW5DbGlja3NQYWdlcyA9ICgoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICAgIGlmICh0YXJnZXQuaWQgPT09ICdhZGRQYWdlJykge1xuICAgICAgY3JlYXRlUGFnZShldmVudCk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=