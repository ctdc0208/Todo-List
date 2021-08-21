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
const a1 = document.createElement('a');

a1.classList.add("closebtn");
a1.setAttribute('onclick', "closeNav()");
a1.textContent = "X";
dropdownSideMenu.appendChild(a1);
const a2 = document.createElement('a');
a2.textContent = "About";
dropdownSideMenu.appendChild(a2);
const a3 = document.createElement('a');
a3.textContent = "Services";
dropdownSideMenu.appendChild(a3);
const a4 = document.createElement('a');
a4.textContent = "Contact";
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
