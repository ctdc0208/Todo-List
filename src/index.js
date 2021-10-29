import './style.css';

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

  const mainContent = document.createElement('div');
    mainContent.setAttribute('id', "main");
  mainContainer.appendChild(mainContent);
})();

const mainContents = (() => {

  const mainContent = document.querySelector('#main');

  const todoList = document.createElement('div');
    todoList.classList.add('todo-list');

    const todolistHeader = document.createElement('div');
      todolistHeader.classList.add('todo-header');

      const pageTitle = document.createElement('h2');
        pageTitle.classList.add('page-title');

      const taskCount = document.createElement('p');
        taskCount.classList.add('task-count');

          todolistHeader.appendChild(pageTitle);
          todolistHeader.appendChild(taskCount);

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
      todoListBody.appendChild(dataTasks);
      todoListBody.appendChild(newTaskCreator);
    todoList.appendChild(todoListBody);

      const deleteStuff = document.createElement('div');
        deleteStuff.classList.add('delete-stuff');
          const deleteCompletedTask = document.createElement('button');
            deleteCompletedTask.textContent = "Clear Completed Task";
            deleteCompletedTask.classList.add('btn-delete-completed-task');
          const deletePage = document.createElement('button');
            deletePage.textContent = "Delete Page";
            deletePage.classList.add('btn-delete-page');
      deleteStuff.appendChild(deleteCompletedTask);
      deleteStuff.appendChild(deletePage);
  todoList.appendChild(deleteStuff);

mainContent.appendChild(todoList);
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
const taskTemplate = document.getElementById('task-template');
const newTaskForm = document.querySelector('.new-data-task-form');
const newTaskInput = document.querySelector('.new-data-task-input');
const clearCompletedTasksButton = document.querySelector('.btn-delete-completed-task');
const deletePagesButton = document.querySelector('.btn-delete-page');


const LOCAL_STORAGE_PAGE_KEY = 'task.pages';
const LOCAL_STORAGE_SELECTED_PAGE_ID_KEY = 'task.selectedPageId';
let pages = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PAGE_KEY)) || [];
let selectedPageId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PAGE_ID_KEY);

pagesContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'pg') {
    selectedPageId = e.target.dataset.pageId
    saveAndRender()
  }
})

tasksContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const selectedPage = pages.find(page => page.id === selectedPageId)
    const selectedTask = selectedPage.tasks.find(task => task.id === e.target.id)
    selectedTask.complete = e.target.checked
    save()
    renderTaskCount(selectedPage)
  }
})

clearCompletedTasksButton.addEventListener('click', e => {
  const selectedPage = pages.find(page => page.id === selectedPageId)
  selectedPage.tasks = selectedPage.tasks.filter(task => !task.complete)
  saveAndRender()
})

deletePagesButton.addEventListener('click', e => {
  pages = pages.filter(page => page.id !== selectedPageId)
  selectedPageId = null
  saveAndRender()
})

addPageForm.addEventListener('submit', e => {
  e.preventDefault()
  const pageName = addPageInput.value;
  if (pageName == null || pageName === '') return
  const page = createPage(pageName);
  addPageInput.value = null
  pages.push(page)
  saveAndRender()
})

newTaskForm.addEventListener('submit', e => {
  e.preventDefault()
  const taskName = newTaskInput.value
  if (taskName == null || taskName === '') return
  const task = createTask(taskName)
  newTaskInput.value = null
  const selectedPage = pages.find(page => page.id === selectedPageId)
  selectedPage.tasks.push(task)
  saveAndRender()
})

function createPage(name) {
  return { id: Date.now().toString(), name: name, tasks: [] }
}

function createTask(name) {
  return { id: Date.now().toString(), name: name, complete: false }
}

function saveAndRender() {
  save()
  render()
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_PAGE_KEY, JSON.stringify(pages))
  localStorage.setItem(LOCAL_STORAGE_SELECTED_PAGE_ID_KEY, selectedPageId)
}

function render() {
  clearElement(pagesContainer)
  renderPages()

  const selectedPage = pages.find(page => page.id === selectedPageId)
  if (selectedPageId == null) {
    pageDisplayContainer.style.display = 'none'
  } else {
    pageDisplayContainer.style.display = ''
    pageTitleElement.innerText = selectedPage.name
    renderTaskCount(selectedPage)
    clearElement(tasksContainer)
    renderTasks(selectedPage)
  }
}

function renderTasks(selectedPage) {
  selectedPage.tasks.forEach(task => {
    const taskElement = document.importNode(taskTemplate.content, true)
    const checkbox = taskElement.querySelector('input')
    checkbox.id = task.id
    checkbox.checked = task.complete
    const label = taskElement.querySelector('label')
    label.htmlFor = task.id
    label.append(task.name)
    tasksContainer.appendChild(taskElement)
  })
}

function renderTaskCount(selectedPage) {
  const incompleteTaskCount = selectedPage.tasks.filter(task => !task.complete).length
  const taskString = incompleteTaskCount === 1 ? "task" : "tasks"
  pageCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
}

function renderPages() {
  pages.forEach(page => {
    const pageElement = document.createElement('pg')
    pageElement.dataset.pageId = page.id
    pageElement.classList.add("page-name")
    pageElement.innerText = page.name
    if (page.id === selectedPageId) {
      pageElement.classList.add('active-page')
    }
    pagesContainer.appendChild(pageElement)
  })
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

render();

// automatic defaultOpen the sidebar
document.getElementById("defaultOpenHome").click();
