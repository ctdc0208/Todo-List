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
