import './style.css';

// get html element id="content"
const content = document.getElementById('content');

const background = document.createElement('div');
background.classList.add('background');
background.textContent = 'Hello',
content.appendChild(background);
