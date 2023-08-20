import _ from 'lodash'
import './styles.css'
import ourStory from './story.js'

// Main page module
function mainPage() {  

  const header = document.createElement('header');
  const name = document.createElement('h1')
  const slogan = document.createElement('p')
  const nav = document.createElement('nav')
  const storyBtn = document.createElement('a')
  const menuBtn = document.createElement('a')
  const contactBtn = document.createElement('a')

  name.innerText = 'My Restaurant'
  name.className = 'name'
  name.setAttribute('id', 'name')

  slogan.innerText = `My restaurant's slogan`
  slogan.className = 'slogan'
  slogan.setAttribute('id', 'slogan')

  storyBtn.innerText = 'Our Story'
  storyBtn.setAttribute('id', 'home')
  storyBtn.onclick = ourStory;

  menuBtn.innerText = 'Menu'
  menuBtn.setAttribute('id', 'menu')
  menuBtn.onclick = ourStory;

  contactBtn.innerText = 'Contact'
  contactBtn.setAttribute('id', 'contacts')
  contactBtn.onclick = ourStory;
    
  nav.appendChild(storyBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  header.appendChild(name)
  header.appendChild(slogan)
  header.appendChild(nav)

  return header; 
}

function clearPage() {
  let body = document.getElementById('body')
  body.querySelectorAll('div').forEach(n => n.remove());
  body.querySelectorAll('footer').forEach(n => n.remove());
}

document.body.appendChild(mainPage());
ourStory();
  
  