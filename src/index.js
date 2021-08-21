import './style.css';

// get html element id="content"
const content = document.getElementById('content');

const title = document.createElement('div');
title.classList.add('title');
title.textContent = "title";
content.appendChild(title);
