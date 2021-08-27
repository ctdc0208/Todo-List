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
  dropdownSideMenu.classList.add('dropdown-side-menu');

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
  dropdownSideMenu.appendChild(a2);

  const a3 = document.createElement('button');
    a3.textContent = "Today";
  dropdownSideMenu.appendChild(a3);

  const a4 = document.createElement('button');
    a4.textContent = "This Week";
  dropdownSideMenu.appendChild(a4);

  mainContainer.appendChild(dropdownSideMenu);

  const span = document.createElement('span');
    span.setAttribute('onclick', "openNav()");
    span.setAttribute('id', 'defaultOpen');
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
    mainContent.textContent = "...";
  mainContainer.appendChild(mainContent);
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

// automatic defaultOpen the sidebar
document.getElementById("defaultOpen").click();

addPageToArray("Quick Note");
addPageToArray("Reading List");
addPageToArray("Habit Tracker");
addPageToArray("Personal Home");
