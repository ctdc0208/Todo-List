/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSwwQkFBMEI7QUFDMUIsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2V0IGh0bWwgZWxlbWVudCBpZD1cImNvbnRlbnRcIlxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbi8vIGFkZCBsaW5rcyBvZiBjc3MgaWNvbnNcbmNvbnN0IGxpbmtPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gIGxpbmtPbmUuc2V0QXR0cmlidXRlKCdyZWwnLCBcInN0eWxlc2hlZXRcIik7XG4gIGxpbmtPbmUuc2V0QXR0cmlidXRlKCdocmVmJywgXCJodHRwczovL3d3dy53M3NjaG9vbHMuY29tL3czY3NzLzQvdzMuY3NzXCIpO1xuY29udGVudC5hcHBlbmRDaGlsZChsaW5rT25lKTtcblxuY29uc3QgbGlua1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgbGlua1R3by5zZXRBdHRyaWJ1dGUoJ3JlbCcsIFwic3R5bGVzaGVldFwiKTtcbiAgbGlua1R3by5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIik7XG5jb250ZW50LmFwcGVuZENoaWxkKGxpbmtUd28pO1xuXG5cbndpbmRvdy5vcGVuTmF2ID0gb3Blbk5hdjsgLy8gZ2V0IG9wZW5OYXZcbndpbmRvdy5jbG9zZU5hdiA9IGNsb3NlTmF2OyAvLyBnZXQgY2xvc2VOYXZcblxuLy9tYWtlIHRoZSB0b3AgZWxlbWVudHMgb2Ygc2lkZWJhciBhbmQgbWFpbkNvbnRhaW5lclxuY29uc3QgbWFrZVNpZGViYXIgPSAoKCkgPT4ge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuXG4gIGNvbnN0IGRyb3Bkb3duU2lkZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkcm9wZG93blNpZGVNZW51LnNldEF0dHJpYnV0ZSgnaWQnLCBcIm15RHJvcGRvd25cIik7XG4gIGRyb3Bkb3duU2lkZU1lbnUuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tc2lkZS1tZW51Jyk7XG5cbiAgY29uc3QgYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhMS5jbGFzc0xpc3QuYWRkKCdhMScpO1xuICBjb25zdCBhMVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYTFUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1zaWRlYmFyJyk7XG4gICAgYTFUaXRsZS50ZXh0Q29udGVudCA9IFwiVG9kby1MaXN0XCI7XG4gIGExLmFwcGVuZENoaWxkKGExVGl0bGUpO1xuICBjb25zdCBhMUNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGExQ2xvc2UuY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ0bi1zaWRlYmFyXCIpO1xuICAgIGExQ2xvc2Uuc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgXCJjbG9zZU5hdigpXCIpO1xuICAgIGExQ2xvc2UudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgYTEuYXBwZW5kQ2hpbGQoYTFDbG9zZSk7XG4gIGRyb3Bkb3duU2lkZU1lbnUuYXBwZW5kQ2hpbGQoYTEpO1xuXG4gIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYTIudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgZHJvcGRvd25TaWRlTWVudS5hcHBlbmRDaGlsZChhMik7XG5cbiAgY29uc3QgYTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhMy50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgZHJvcGRvd25TaWRlTWVudS5hcHBlbmRDaGlsZChhMyk7XG5cbiAgY29uc3QgYTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhNC50ZXh0Q29udGVudCA9IFwiVGhpcyBXZWVrXCI7XG4gIGRyb3Bkb3duU2lkZU1lbnUuYXBwZW5kQ2hpbGQoYTQpO1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25TaWRlTWVudSk7XG5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZSgnb25jbGljaycsIFwib3Blbk5hdigpXCIpO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKCdpZCcsICdkZWZhdWx0T3BlbicpO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIk9wZW5cIjtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuKTtcblxuICBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwYWdlLWNvbnRhaW5lcicpO1xuICAgIHBhZ2VDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0YWJsZS1ib2R5Jyk7XG4gIGRyb3Bkb3duU2lkZU1lbnUuYXBwZW5kQ2hpbGQocGFnZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgYWRkUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFBhZ2Uuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGFkZFBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRQYWdlJyk7XG4gICAgYWRkUGFnZS50ZXh0Q29udGVudCA9ICdBZGQgUGFnZSc7XG4gIGRyb3Bkb3duU2lkZU1lbnUuYXBwZW5kQ2hpbGQoYWRkUGFnZSk7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJtYWluXCIpO1xuICAgIG1haW5Db250ZW50LnRleHRDb250ZW50ID0gXCIuLi5cIjtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG59KSgpO1xuXG5cbi8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNpZGUgbmF2aWdhdGlvbiB0byAyNTBweCBhbmQgdGhlIGxlZnQgbWFyZ2luIG9mIHRoZSBwYWdlIGNvbnRlbnQgdG8gMjUwcHggKi9cbmZ1bmN0aW9uIG9wZW5OYXYoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlEcm9wZG93blwiKS5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjI1MHB4XCI7XG59XG5cbi8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNpZGUgbmF2aWdhdGlvbiB0byAwIGFuZCB0aGUgbGVmdCBtYXJnaW4gb2YgdGhlIHBhZ2UgY29udGVudCB0byAwICovXG5mdW5jdGlvbiBjbG9zZU5hdigpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteURyb3Bkb3duXCIpLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIwXCI7XG59XG5cbi8vIGF1dG9tYXRpYyBkZWZhdWx0T3BlbiB0aGUgc2lkZWJhclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0T3BlblwiKS5jbGljaygpO1xuXG5hZGRQYWdlVG9BcnJheShcIlF1aWNrIE5vdGVcIik7XG5hZGRQYWdlVG9BcnJheShcIlJlYWRpbmcgTGlzdFwiKTtcbmFkZFBhZ2VUb0FycmF5KFwiSGFiaXQgVHJhY2tlclwiKTtcbmFkZFBhZ2VUb0FycmF5KFwiUGVyc29uYWwgSG9tZVwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==