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

  const addPageForm = document.createElement('form');
    addPageForm.setAttribute('action', '""');
    addPageForm.classList.add('add-page-form');
      const addPageInput = document.createElement('input');
        addPageInput.setAttribute('type', 'text');
        addPageInput.setAttribute('placeholder', 'New Page Name');
        addPageInput.classList.add('add-page-input');
      addPageForm.appendChild(addPageInput);
  dropdownSideMenu.appendChild(addPageForm);

  const deletePage = document.createElement('div');
    deletePage.classList.add('page-delete');
    deletePage.textContent = "Delete";
  dropdownSideMenu.appendChild(deletePage);

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

  const todoList = document.createElement('div');
    todoList.classList.add('todo-list');

    const todolistHeader = document.createElement('div');
      todolistHeader.classList.add('todo-header');

      const pageTitle = document.createElement('h2');
        pageTitle.classList.add('page-title');

      const taskCount = document.createElement('p');
        taskCount.classList.add('task-count');

          todoList.appendChild(pageTitle);
          todoList.appendChild(taskCount);

    todoList.appendChild(todolistHeader);

    const todoListBody = document.createElement('div');
      todoListBody.classList.add('todo-body');

      const dataTasks = document.createElement('div');
        dataTasks.classList.add('data-tasks');

      const newTaskCreator = document.createElement('div');
        newTaskCreator.classList.add('new-data-task-form');
          const newTaskCreatorForm = document.createElement('form');
            newTaskCreatorForm.setAttribute('action', "");
              const newTaskCreatorFormInput = document.createElement('input');
               newTaskCreatorFormInput.setAttribute('type', "text");
               newTaskCreatorFormInput.setAttribute('placeholder', "new task name");
               newTaskCreatorFormInput.setAttribute('aria-label', "new task name");
               newTaskCreatorFormInput.classList.add('new-data-task-input');
              const newTaskCreatorFormButton = document.createElement('button');
                newTaskCreatorFormButton.classList.add('btn-create');
                newTaskCreatorFormButton.setAttribute('aria-label', "create new task");
                newTaskCreatorFormButton.textContent = "+";

                  newTaskCreatorForm.appendChild(newTaskCreatorFormInput);
                  newTaskCreatorForm.appendChild(newTaskCreatorFormButton);

            newTaskCreator.appendChild(newTaskCreatorForm);

    todoList.appendChild(newTaskCreator);

      const deleteStuff = document.createElement('div');
        deleteStuff.classList.add('delete-stuff');
          const deleteCompletedTask = document.createElement('button');
            deleteCompletedTask.classList.add('button-delete-completed-task');
          const deletePage = document.createElement('button');
            deletePage.classList.add('button-delete-page');

  todoList.appendChild(deleteStuff);

mainContent.appendChild(todoList)

  const taskTemplate = document.createElement('template');
    taskTemplate.setAttribute('id', 'task-template');

    const tasksTemplateDiv = document.createElement('div');
      tasksTemplateDiv.classList.add('task');

      const taskTemplateInput = document.createElement('input');
        taskTemplateInput.setAttribute('type', 'checkbox');
      const taskTemplateLabel = document.createElement('label');
        const taskTemplateSpan = document.createElement('span');
          taskTemplateSpan.classList.add('custom-checkbox');
      taskTemplateLabel.appendChild(taskTemplateSpan);

    tasksTemplateDiv.appendChild(taskTemplateInput);
    tasksTemplateDiv.appendChild(taskTemplateLabel);
  taskTemplate.appendChild(tasksTemplateDiv);

mainContent.appendChild(taskTemplate);
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


const pagesContainer = document.querySelector('.page-container');
const addPageForm = document.querySelector('.add-page-form');
const addPageInput = document.querySelector('.add-page-input');
const deletePageButton = document.querySelector('.page-delete');
const pageDisplayContainer = document.querySelector('.todo-list')
const pageTitleElement = document.querySelector('.page-title');
const pageCountElement = document.querySelector('.task-count');
const tasksContainer = document.querySelector('.data-tasks');
const newTaskForm = document.querySelector('.new-data-task-form');
const newTaskInput = document.querySelector('.new-data-task-input');
const clearCompletedTasksButton = document.querySelector('.button-delete-completed-task');


const LOCAL_STORAGE_PAGE_KEY = 'task.pages';
const LOCAL_STORAGE_SELECTED_PAGE_ID_KEY = 'task.selectedPageId';
let pages = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PAGE_KEY)) || [];
let selectedPageId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PAGE_ID_KEY);

pagesContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'pg') {
    selectedPageId = e.target.dataset.pageId;
    saveAndRender();
  }
});

tasksContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const selectedPage = lists.find(list => list.id === selectedPageId);
    const selectedTask = selectedPage.tasks.find(task => task.id === e.target.id);
    selectedTask.complete = e.target.checked;
    save()
    renderTaskCount(selectedList)
  };
});

clearCompleteTasksButton.addEventListener('click', e => {
  const selectedPage = lists.find(list => list.id === selectedPageId);
  selectedPage.tasks = selectedPage.tasks.filter(task => !task.complete);
  saveAndRender()
});

deletePageButton.addEventListener('click', e => {
  pages = pages.filter(page => page.id !== selectedPageId);
  selectedPageId = null;
  saveAndRender();
});

const createPage = (name) => {
  return { id: Date.now().toString(), name: name, tasks: [] };
};

addPageForm.addEventListener('submit', e => {
  e.preventDefault();
  const pageName = addPageInput.value;
  if (pageName == null || pageName === '') return
  const page = createPage(pageName);
  addPageInput.value = null;
  pages.push(page);
  saveAndRender();
});

const clearElement = (element) => {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const render = () => {
  clearElement(pagesContainer);
  renderList();

  const selectedPage = pages.find(page => page.id === selectedPageId);

};

const renderList = () => {
  pages.forEach(page => {
    const pageElement = document.createElement('pg');
    pageElement.dataset.pageId = page.id;
    pageElement.classList.add("page-name");
    pageElement.textContent = page.name;
    if (page.id === selectedPageId) {
      pageElement.classList.add('active-page');
    };
    pagesContainer.appendChild(pageElement);
  });
};


const save = () => {
  localStorage.setItem(LOCAL_STORAGE_PAGE_KEY, JSON.stringify(pages));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_PAGE_ID_KEY, selectedPageId);
};

const saveAndRender = () => {
  save();
  render();
};

render();

// automatic defaultOpen the sidebar
document.getElementById("defaultOpen").click();
document.getElementById("defaultOpenHome").click();
