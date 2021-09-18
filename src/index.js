import './style.css';

// add tab browsing
const openTab = (evt, tabName) => {
  var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
};

// get html element id="content"
const content = document.getElementById('content');

// add links of css icons
const linkOne = document.createElement('link');
  linkOne.setAttribute('rel', "stylesheet");
  linkOne.setAttribute('href', "https://www.w3schools.com/w3css/4/w3.css");
content.appendChild(linkOne);

const linkTwo = document.createElement('link');
  linkTwo.setAttribute('rel', "stylesheet");
  linkTwo.setAttribute('href', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
content.appendChild(linkTwo);


window.openNav = openNav; // get openNav
window.closeNav = closeNav; // get closeNav

//make the top elements of sidebar and mainContainer
const makeSidebar = (() => {
  const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
  content.appendChild(mainContainer);

  const dropdownSideMenu = document.createElement('div');
    dropdownSideMenu.setAttribute('id', "myDropdown");
  dropdownSideMenu.classList.add('dropdownSideMenu');

  const a1 = document.createElement('div');
    a1.classList.add('a1');
  const a1Title = document.createElement('div');
    a1Title.classList.add('title-sidebar');
    a1Title.textContent = "Todo-List";
  a1.appendChild(a1Title);
  const a1Close = document.createElement('span');
    a1Close.classList.add("close-btn-sidebar");
    a1Close.setAttribute('onclick', "closeNav()");
    a1Close.textContent = "X";
  a1.appendChild(a1Close);
  dropdownSideMenu.appendChild(a1);

  const a2 = document.createElement('button');
    a2.textContent = "Home";
    a2.classList.add('tablinks');
    a2.addEventListener('click', function(){openTab(event, 'Home')});
    a2.setAttribute('id', 'defaultOpen');
  dropdownSideMenu.appendChild(a2);

  const a3 = document.createElement('button');
    a3.textContent = "Today";
    a3.classList.add('tablinks');
    a3.addEventListener('click', function(){openTab(event, 'Today')});
  dropdownSideMenu.appendChild(a3);

  const a4 = document.createElement('button');
    a4.textContent = "This Week";
    a4.classList.add('tablinks');
    a4.addEventListener('click', function(){openTab(event, 'Week')});
  dropdownSideMenu.appendChild(a4);

  mainContainer.appendChild(dropdownSideMenu);

  const span = document.createElement('span');
    span.setAttribute('onclick', "openNav()");
    span.setAttribute('id', 'defaultOpenHome');
    span.textContent = "Open";
  mainContainer.appendChild(span);

  const pageContainer = document.createElement('div');
    pageContainer.classList.add('page-container');
    pageContainer.setAttribute('id', 'table-body');
  dropdownSideMenu.appendChild(pageContainer);

  const addPage = document.createElement('button');
    addPage.setAttribute('type', 'button');
    addPage.setAttribute('id', 'addPage');
    addPage.textContent = 'Add Page';
  dropdownSideMenu.appendChild(addPage);

  const mainContent = document.createElement('div');
    mainContent.setAttribute('id', "main");
  mainContainer.appendChild(mainContent);
})();

const mainContents = (() => {

  const mainContent = document.querySelector('#main');

  const home = document.createElement('div');
    home.classList.add('tabcontent');
    home.setAttribute('id', 'Home');
      const homeP = document.createElement('p');
        homeP.classList.add('page-tab-title');
        homeP.textContent = "Home";
      home.appendChild(homeP);

      const addList = document.createElement('button');
          addList.classList.add('add-list');
          addList.textContent = 'Add';
          addList.setAttribute('id', 'addList');
      home.appendChild(addList);

  mainContent.appendChild(home);

  const today = document.createElement('div');
    today.classList.add('tabcontent');
    today.setAttribute('id', 'Today');
      const todayP = document.createElement('p');
        todayP.classList.add('page-tab-title');
        todayP.textContent = "Today";
      today.appendChild(todayP);

      const addListToday = document.createElement('button');
          addListToday.classList.add('add-list');
          addListToday.textContent = 'Add';
          addListToday.setAttribute('id', 'addList');
      today.appendChild(addListToday);

  mainContent.appendChild(today);

  const week = document.createElement('div');
    week.classList.add('tabcontent');
    week.setAttribute('id', 'Week');
      const weekP = document.createElement('p');
        weekP.classList.add('page-tab-title');
        weekP.textContent = "Week";
      week.appendChild(weekP);

      const addListWeek = document.createElement('button');
          addListWeek.classList.add('add-list');
          addListWeek.textContent = 'Add';
          addListWeek.setAttribute('id', 'addList');
      week.appendChild(addListWeek);

  mainContent.appendChild(week);

})();



/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("myDropdown").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("myDropdown").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


// set myPages array
let myPages = [];
let myTask = [];

// add class page
class pages {
  constructor (page) {
    this.page = page;
  }
}

// set arrays in element to display pages
const displayPages = (() => {
  const mainContent = document.querySelector('#main');
    const pageList = document.querySelector('#table-body');
    pageList.textContent = '';
    for (let i = 0; i < myPages.length; i += 1) {
      const pageColumn = document.createElement('button');
        pageColumn.classList.add('page-column');
        pageColumn.classList.add('tablinks');
        pageColumn.addEventListener('click', function(){openTab(event, myPages[i].page)});
        pageColumn.textContent = myPages[i].page;
      pageList.appendChild(pageColumn);

      const pageTab = document.createElement('div');
        pageTab.classList.add('tabcontent');
        pageTab.setAttribute('id', myPages[i].page);
          const pageTabTitle = document.createElement('p');
            pageTabTitle.classList.add('page-tab-title');
            pageTabTitle.textContent = myPages[i].page;
          pageTab.appendChild(pageTabTitle);

          const addList = document.createElement('button');
              addList.classList.add('add-list');
              addList.textContent = 'Add';
              addList.setAttribute('id', 'addTask');
          pageTab.appendChild(addList);

          const taskContainer = document.createElement('div');
            taskContainer.classList.add('task-container');
          pageTab.appendChild(taskContainer)

      mainContent.appendChild(pageTab);
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
    } else if (target.id === 'addTask') {
      createTask(event);
    }
  });
})();

























addPageToArray("Quick Note");
addPageToArray("Reading List");
addPageToArray("Habit Tracker");
addPageToArray("Personal Home");

// automatic defaultOpen the sidebar
document.getElementById("defaultOpen").click();
document.getElementById("defaultOpenHome").click();
