import _ from 'lodash'
import './styles.css'
import ourStory from './story.js'
import clearPage from './clearPage.js'
import menu from './menu.js'



// Main page module
function mainPage() {  

  const header = document.createElement('header');
  const name = document.createElement('h1')
  const slogan = document.createElement('p')
  const nav = document.createElement('nav')
  const storyBtn = document.createElement('a')
  const menuBtn = document.createElement('a')
  const contactBtn = document.createElement('a')
  const bodyDiv = document.createElement('div')

  header.className = 'header'
  header.setAttribute('id', 'header')

  name.innerText = 'My Restaurant'
  name.className = 'name'
  name.setAttribute('id', 'name')

  slogan.innerText = `My restaurant's slogan`
  slogan.className = 'slogan'
  slogan.setAttribute('id', 'slogan')

  storyBtn.innerText = 'Our Story'
  storyBtn.setAttribute('id', 'home')
  storyBtn.onclick = storyPage;

  menuBtn.innerText = 'Menu'
  menuBtn.setAttribute('id', 'menu')
  menuBtn.onclick = menuPage;

  contactBtn.innerText = 'Contact'
  contactBtn.setAttribute('id', 'contacts')
  contactBtn.onclick = clearPage, ourStory;
    
  nav.appendChild(storyBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  bodyDiv.className = 'bodyDiv'
  bodyDiv.setAttribute('id', 'bodyDiv')

  header.appendChild(name)
  header.appendChild(slogan)
  header.appendChild(nav)
  header.appendChild(bodyDiv)

  return header; 
}

function storyPage() {
  clearPage();
  ourStory();
}

function menuPage() {
  clearPage();
  menu();
}

document.body.appendChild(mainPage());
ourStory();
  