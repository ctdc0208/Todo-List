// set myPages array
let myPages = [];

// add class page
class pages {
  constructor (page) {
    this.page = page;
  }
}

// add tab browsing
const openTab = (evt, tabName) => {
  var i, tabcontent, tablinks;

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
};

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
