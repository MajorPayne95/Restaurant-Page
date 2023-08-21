import menuItems from './menuItems.js'

export default function menu() {

    let item1 = document.createElement('div')
    item1.className = 'menuList'
    item1.setAttribute('id', 'item1')
    document.getElementById('bodyDiv').appendChild(item1)
    
    let item2 = document.createElement('div')
    item2.className = 'menuList'
    item2.setAttribute('id', 'item2')
    document.getElementById('bodyDiv').appendChild(item2)

    let item3 = document.createElement('div')
    item3.className = 'menuList'
    item3.setAttribute('id', 'item3')
    document.getElementById('bodyDiv').appendChild(item3)

    let item4 = document.createElement('div')
    item4.className = 'menuList'
    item4.setAttribute('id', 'item4')
    document.getElementById('bodyDiv').appendChild(item4)

    menuItems(item1, item2, item3, item4);
}