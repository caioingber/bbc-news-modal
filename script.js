//locations = [london, durban, DC, Rio, Tokyo]
// key = eebcb3a9d0e7471c851bb8dbaa15fad4
let boxes = document.querySelectorAll('.news-box')
let title = document.querySelectorAll('.headline-text')
let timeStamp = document.querySelectorAll('.publish-date')
let hidden = document.querySelector('.modal')
let xButton = document.querySelector('#close-btn')
let xbutton2 = document.querySelector('header')
let modalOpen = false

closeButton = () => {
    if (modalOpen === true) {
    hidden.style.opacity = 0
    hidden.style.zIndex = -1
    modalOpen = false
}
}

xButton.addEventListener('click', closeButton)
xbutton2.addEventListener('click', closeButton)

let body = document.querySelector('main')



let nameUrl = "https://www.metaweather.com/api/location/search/?query=london"

let baseUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eebcb3a9d0e7471c851bb8dbaa15fad4"


//API request to fill in page with article data when loaded
fetch (baseUrl)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log(res)
        for (let i=0; i < 6; i++) {
        //fetch image for article
            let image = res.articles[i].urlToImage
            boxes[i].style.backgroundImage = `url(${image})`
            boxes[i].style.backgroundSize = '400px'
            boxes[i].style.backgroundPosition = 'center'
            boxes[i].style.backgroundRepeat = 'no-repeat'
            //fetch headline
            let headline = res.articles[i].title
            title[i].innerText = headline
            //fetch timestamp
            let publishTime = res.articles[i].publishedAt
            let trimStamp = publishTime.substring(0, 10)
            let arrayStamp = trimStamp.split('-')
            let date = new Date(arrayStamp)
            let stringDate = date.toString()
            timeStamp[i].innerHTML = stringDate.substring(0, 15)
            
            //eventlistener Modal
            function showModal(e) {
                e.preventDefault()
                hidden.style.opacity = 1
                hidden.style.zIndex = 1
                let modalHeadline = document.querySelector('#headline-modal')
                modalHeadline.innerHTML = headline
                let modalDescription = document.querySelector('#news-description')
                modalDescription.innerHTML = res.articles[i].description
                let modalImage = document.querySelector('#modal-image')
                modalImage.setAttribute('src', image)
                modalOpen = true
            }
            boxes[i].addEventListener('click', showModal)

    }
    })

 