
export default function ourStory() {
  
  let divEl = document.createElement("div")
    divEl.className = 'content'
    divEl.setAttribute('id', 'content')
    document.body.appendChild(divEl)

    let imgEl = document.createElement('img')
    imgEl.src = "https://epicurerestaurant.co.za/wp-content/uploads/2019/06/Chef_Coco23_resized.jpg"
    imgEl.alt = "logo image"
    document.getElementById('content').appendChild(imgEl)
  
    let pEl = document.createElement('p')
    pEl.className = 'info'
    pEl.innerText = 'A restaurant is a business that prepares and serves food and drinks to customers.[1] Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.'
    document.getElementById('content').appendChild(pEl)
    
    let footerEl = document.createElement('footer')
    footerEl.innerText = 'Credits go here!'
    document.body.appendChild(footerEl)
}
