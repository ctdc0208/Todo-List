import './style.css';

// get html element id="content"
const content = document.getElementById('content');
window.openNav = openNav;
window.closeNav = closeNav;

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
const a1Close = document.createElement('div');
a1Close.classList.add("close-btn-sidebar");
a1Close.setAttribute('onclick', "closeNav()");
a1Close.textContent = "X";
a1.appendChild(a1Close);
dropdownSideMenu.appendChild(a1);
const a2 = document.createElement('a');
<<<<<<< HEAD
a2.textContent = "Home";
=======
a2.textContent = "Inbox";
>>>>>>> 149227f1cdfea7c5ad9120c80d7c7c41d18765c3
dropdownSideMenu.appendChild(a2);
const a3 = document.createElement('a');
a3.textContent = "Today";
dropdownSideMenu.appendChild(a3);
const a4 = document.createElement('a');
a4.textContent = "This Week";
dropdownSideMenu.appendChild(a4);
mainContainer.appendChild(dropdownSideMenu);

const span = document.createElement('span');
span.setAttribute('onclick', "openNav()");
span.setAttribute('id', 'defaultOpen');
span.textContent = "Open";
mainContainer.appendChild(span)

const mainContent = document.createElement('div');
mainContent.setAttribute('id', "main");
mainContent.textContent = "...";
mainContainer.appendChild(mainContent);

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

document.getElementById("defaultOpen").click();
