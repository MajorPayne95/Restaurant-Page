const menuList = [
    {
        item: 'Chicken Alfredo',
        img: 'https://media.istockphoto.com/id/612246764/photo/pasta-with-chicken.jpg?s=612x612&w=0&k=20&c=c_gZbA4DXcLGWLng58D2B9Od_do4xpGe1JXyUjstz0A=',
        desc: 'Freshly made homestyle Alfredo sauce topped with fresh free-range chicken breast'
    },
    {
        item: 'Steak',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F143809%2Fbest-steak-marinade-in-existence%2F&psig=AOvVaw0YmBWkdlPSDWuFrVq6Svsx&ust=1692670360808000&source=images&cd=vfe&opi=89978449&ved=0CA0QjRxqFwoTCND4vs7W7IADFQAAAAAdAAAAABAG',
        desc: 'Mouth-watering top cut ribeye seared to perfection'
    }
];

export default function menuItems(...a) {
    console.log(a.length)
    let index = 0

    for (let i = 1; i <= 2; i++) {
        let itemImg = document.createElement('img')
        itemImg.className = 'menuItem'
        itemImg.src = menuList[index].img
        document.getElementById('item' + i).appendChild(itemImg)
        index += 1
    }
    
}